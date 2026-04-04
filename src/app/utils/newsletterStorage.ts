import { 
  ref, 
  set, 
  get, 
  remove, 
  child,
  serverTimestamp 
} from "firebase/database";
import { database } from "@/firebase/config";
import type { Subscriber } from "@/types";

const SUBSCRIBERS_PATH = "subscribers";

const normalizeEmail = (email: string) => email.trim().toLowerCase();

export const isEmailValid = (email: string) => {
  const normalized = normalizeEmail(email);
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalized);
};

const buildSubscriberId = (email: string) => {
  // RTDB keys cannot contain certain characters, so we'll replace . with _ and @ with -
  return normalizeEmail(email).replace(/\./g, "_").replace(/@/g, "-");
};

export const addSubscriber = async (email: string): Promise<Subscriber> => {
  const normalizedEmail = normalizeEmail(email);
  if (!isEmailValid(normalizedEmail)) {
    throw new Error("Please enter a valid email address.");
  }

  const subscriberId = buildSubscriberId(normalizedEmail);
  const subscriberRef = child(ref(database), `${SUBSCRIBERS_PATH}/${subscriberId}`);

  try {
    // Check if subscriber already exists
    const snapshot = await get(subscriberRef);
    if (snapshot.exists()) {
      throw new Error("You are already subscribed to our newsletter!");
    }

    const subscriberData = {
      email: normalizedEmail,
      subscribedAt: new Date().toISOString(),
      timestamp: serverTimestamp()
    };

    await set(subscriberRef, subscriberData);

    return {
      id: subscriberId,
      email: normalizedEmail,
      subscribedAt: subscriberData.subscribedAt,
    };
  } catch (error: any) {
    console.error("Error subscribing email:", { email: normalizedEmail, error });
    throw new Error(error?.message || "Failed to subscribe. Please try again.");
  }
};

export const unsubscribeSubscriber = async (email: string): Promise<void> => {
  const normalizedEmail = normalizeEmail(email);
  if (!isEmailValid(normalizedEmail)) {
    throw new Error("Please enter a valid email address.");
  }

  const subscriberId = buildSubscriberId(normalizedEmail);
  const subscriberRef = child(ref(database), `${SUBSCRIBERS_PATH}/${subscriberId}`);
  await remove(subscriberRef);
};

export const getAllSubscribers = async (): Promise<Subscriber[]> => {
  const snapshot = await get(ref(database, SUBSCRIBERS_PATH));
  if (!snapshot.exists()) return [];

  const data = snapshot.val();
  return Object.keys(data).map((id) => ({
    id,
    email: data[id].email,
    subscribedAt: data[id].subscribedAt,
  }));
};

export const testSubscriberWrite = async (testEmail: string = "test@example.com"): Promise<void> => {
  try {
    console.log("🧪 Testing subscriber write with email:", testEmail);
    const result = await addSubscriber(testEmail);
    console.log("✅ Write successful:", result);
  } catch (error) {
    console.error("❌ Write failed:", error);
    throw error;
  }
};
