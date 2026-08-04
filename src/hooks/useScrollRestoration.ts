import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

// True only when this render came from an actual browser reload
// (F5 / refresh button / pull-to-refresh), not a normal in-app
// navigation to this route.
function isPageReload(): boolean {
  try {
    const entries = performance.getEntriesByType(
      "navigation",
    ) as PerformanceNavigationTiming[];
    return entries.length > 0 && entries[0].type === "reload";
  } catch {
    return false;
  }
}

const keyFor = (pathname: string) => `scroll_pos:${pathname}`;

// How long (ms) the page must go with NO DOM changes before we consider
// it "settled" and stop correcting the scroll position.
const SETTLE_DELAY = 400;
// Hard cap (ms) — stop trying after this no matter what, so a page with
// constant animations/mutations doesn't fight the user's own scrolling
// forever.
const MAX_DURATION = 3000;
// Also re-apply on a plain interval, in case content changes without
// triggering a DOM mutation the observer can see (rare, but cheap to
// cover — e.g. some canvas/video-driven layout changes).
const POLL_INTERVAL = 100;

/**
 * Site-wide scroll restoration.
 *
 * Problem this solves: on a hard reload, the browser's native scroll
 * restoration (and any manual scrollTo(0,0) logic) fires BEFORE async
 * page content (images, API data, lazy components) has finished
 * rendering. Since the page is shorter while that content is still
 * loading, restoring "too early" lands the user in the wrong spot once
 * the page grows to its real height (often near the footer).
 *
 * A single "wait for height to stop changing for N frames" check isn't
 * enough on its own: a page's initial loading-spinner state can also
 * look "stable" for a little while (before its data fetch resolves),
 * which causes a premature restore that then goes stale once the real
 * content arrives and the page grows again.
 *
 * Fix: keep RE-APPLYING the saved scroll position every time the DOM
 * changes (via MutationObserver) and on a short polling interval, for
 * as long as content keeps changing — up to a hard cap. This means even
 * if content loads in slowly, or in multiple stages, the scroll
 * position keeps getting corrected until the page is genuinely done
 * changing, instead of only trying once.
 *
 * Call this ONCE, near the root of the app (e.g. in App.tsx).
 */
export function useScrollRestoration() {
  const location = useLocation();
  const restoredForPath = useRef<string | null>(null);

  // Tell the browser to stop doing its own (premature) scroll
  // restoration — we take full manual control instead.
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  // Continuously remember the scroll position for the current route,
  // so it's available if the user reloads.
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        sessionStorage.setItem(
          keyFor(location.pathname),
          String(window.scrollY),
        );
        ticking = false;
      });
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  // Restore the saved position, and keep correcting it until the page
  // has genuinely stopped changing.
  useEffect(() => {
    // Only attempt this once per pathname per app session, and only on
    // an actual reload. On normal in-app navigation, the app's own
    // ScrollToTop-on-route-change behavior should take over instead.
    if (restoredForPath.current === location.pathname) return;
    restoredForPath.current = location.pathname;

    if (!isPageReload()) return;

    const saved = sessionStorage.getItem(keyFor(location.pathname));
    if (!saved) return;

    const targetY = parseInt(saved, 10);
    if (Number.isNaN(targetY)) return;

    let settleTimer: number;
    let pollId: number;
    let hardStopId: number;
    let stopped = false;

    // The page can only actually be scrolled to targetY once it's tall
    // enough. If we call scrollTo before that, the browser clamps the
    // scroll position to whatever the current max is — which is often
    // the footer while content is still loading. So we skip restoring
    // until the page has grown enough to genuinely reach targetY.
    const canReachTarget = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      return maxScroll >= targetY - 2; // small tolerance
    };

    // Tracks whether we've actually managed to land on the target
    // position at least once (as opposed to just skipping because the
    // page was still too short to reach it).
    let hasRestoredOnce = false;

    const restore = () => {
      if (!canReachTarget()) return;
      window.scrollTo({ top: targetY, behavior: "auto" });
      hasRestoredOnce = true;
    };

    const stopAll = () => {
      if (stopped) return;
      stopped = true;
      observer.disconnect();
      window.clearTimeout(settleTimer);
      window.clearInterval(pollId);
      window.clearTimeout(hardStopId);
    };

    const scheduleSettleCheck = () => {
      window.clearTimeout(settleTimer);
      settleTimer = window.setTimeout(() => {
        // Only settle-stop once we've actually reached the target at
        // least once. If the page is still too short (e.g. a slow API
        // fetch that hasn't resolved yet, with no DOM mutations in the
        // meantime), keep polling instead of giving up early — the
        // hard MAX_DURATION cap below is the real safety net.
        if (hasRestoredOnce) stopAll();
      }, SETTLE_DELAY);
    };

    const observer = new MutationObserver(() => {
      restore();
      scheduleSettleCheck();
    });
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      characterData: true,
    });

    // Keep nudging the scroll position on a short interval too, so we
    // don't rely solely on mutation events.
    pollId = window.setInterval(restore, POLL_INTERVAL);

    // Absolute safety net: never keep correcting for more than
    // MAX_DURATION, even if the page never stops mutating.
    hardStopId = window.setTimeout(stopAll, MAX_DURATION);

    // Try immediately too.
    restore();
    scheduleSettleCheck();

    return stopAll;
  }, [location.pathname]);
}