import { ref, push, set, serverTimestamp } from "firebase/database";
import { database } from "@/firebase/config";
import { getVisitorId } from "@/app/utils/visitorId";

export async function trackPageVisit(pageUrl: string) {
  const visitorId = getVisitorId();
  const payload = {
    visitorId,
    pageUrl,
    timestamp: serverTimestamp(),
  };

  const visitRef = push(ref(database, "page_visits"));
  await set(visitRef, payload);

  return { id: visitRef.key, ...payload };
}
