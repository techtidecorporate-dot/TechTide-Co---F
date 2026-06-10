import { ref, set, get, serverTimestamp } from "firebase/database";
import { database } from "@/firebase/config";
import { getVisitorId } from "@/app/utils/visitorId";
import { getStoredConsent } from "@/firebase/services/cookieConsent";

const SCORE_MAP: Record<string, number> = {
  cookie_accepted: 5,
  "page_/services": 10,
  "page_/pricing": 15,
  lead_submitted: 50,
  meeting_booked: 100,
};

export async function addScore(event: string, pageUrl?: string) {
  if (getStoredConsent() !== "accepted") return null;

  const visitorId = getVisitorId();
  const key = pageUrl ? `page_${pageUrl}` : event;
  const points = SCORE_MAP[key] ?? 0;
  if (points === 0) return;

  const scoreRef = ref(database, `lead_scores/${visitorId}`);
  const snapshot = await get(scoreRef);

  const currentScore = snapshot.exists() ? snapshot.val().score : 0;
  const newScore = currentScore + points;

  await set(scoreRef, {
    visitorId,
    score: newScore,
    updatedAt: serverTimestamp(),
  });

  return { visitorId, score: newScore };
}

export async function getLeadScore(visitorId: string) {
  const snapshot = await get(ref(database, `lead_scores/${visitorId}`));
  return snapshot.exists() ? snapshot.val() : null;
}
