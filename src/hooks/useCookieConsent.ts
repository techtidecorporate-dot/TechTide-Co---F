import { useState, useCallback } from "react";
import {
  submitCookieConsent,
  getStoredConsent,
} from "@/firebase/services/cookieConsent";
import { addScore } from "@/firebase/services/leadScoring";

export function useCookieConsent() {
  const [consent, setConsent] = useState<"accepted" | "rejected" | null>(
    getStoredConsent,
  );
  const [loading, setLoading] = useState(false);

  const acceptAll = useCallback(async () => {
    setLoading(true);
    try {
      await submitCookieConsent("accepted");
      setConsent("accepted");
      await addScore("cookie_accepted");
    } catch {
      console.error("Failed to save cookie consent");
    } finally {
      setLoading(false);
    }
  }, []);

  const rejectNonEssential = useCallback(async () => {
    setLoading(true);
    try {
      await submitCookieConsent("rejected");
      setConsent("rejected");
    } catch {
      console.error("Failed to save cookie consent");
    } finally {
      setLoading(false);
    }
  }, []);

  return { consent, loading, acceptAll, rejectNonEssential };
}
