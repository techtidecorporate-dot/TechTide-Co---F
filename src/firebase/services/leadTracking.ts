import { ref, push, set, serverTimestamp } from "firebase/database";
import { database } from "@/firebase/config";
import { getVisitorId } from "@/app/utils/visitorId";

export interface LeadSubmission {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
}

export async function submitLead(data: LeadSubmission) {
  const visitorId = getVisitorId();
  const payload = {
    ...data,
    visitorId,
    source: "website",
    timestamp: serverTimestamp(),
  };

  const leadRef = push(ref(database, "leads"));
  await set(leadRef, payload);

  return { id: leadRef.key, ...payload };
}
