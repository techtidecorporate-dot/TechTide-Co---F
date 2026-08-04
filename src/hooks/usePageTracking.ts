import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { trackPageVisit } from "@/firebase/services/pageTracking";
import { addScore } from "@/firebase/services/leadScoring";
import { getStoredConsent } from "@/firebase/services/cookieConsent";

export function usePageTracking() {
  const location = useLocation();

  useEffect(() => {
    const consent = getStoredConsent();
    if (consent !== "accepted") return;

    trackPageVisit(location.pathname);
    addScore("page_visit", location.pathname);
  }, [location.pathname]);
}
