import { ref, set, push, serverTimestamp } from "firebase/database";
import { database } from "@/firebase/config";
import { getVisitorId } from "@/utils/visitorId";

const COOKIE_CONSENT_KEY = "techtide_cookie_consent";

export async function submitCookieConsent(consentStatus: "accepted" | "rejected") {
  const visitorId = getVisitorId();
  const payload = {
    visitorId,
    consentStatus,
    pageUrl: window.location.href,
    userAgent: navigator.userAgent,
    source: "website",
    timestamp: serverTimestamp(),
  };

  const consentRef = push(ref(database, "cookie_consents"));
  await set(consentRef, payload);

  localStorage.setItem(COOKIE_CONSENT_KEY, consentStatus);

  return { id: consentRef.key, ...payload };
}

export function getStoredConsent(): "accepted" | "rejected" | null {
  return localStorage.getItem(COOKIE_CONSENT_KEY) as "accepted" | "rejected" | null;
}

export function hasConsented(): boolean {
  return getStoredConsent() !== null;
}
