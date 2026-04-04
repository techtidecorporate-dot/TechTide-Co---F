import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { addSubscriber, unsubscribeSubscriber as apiUnsubscribe } from "@/app/utils/newsletterStorage";

export function useNewsletter() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const subscribe = async (e?: FormEvent) => {
    if (e) e.preventDefault();

    if (!email.trim()) {
      toast.error("Please enter your email address.");
      return;
    }

    setLoading(true);
    try {
      await addSubscriber(email);
      toast.success("Thanks for subscribing! We'll keep you updated.");
      setEmail("");
    } catch (error: any) {
      toast.error(error?.message || "Subscription failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const unsubscribe = async (unsubEmail?: string) => {
    const targetEmail = unsubEmail || email;
    if (!targetEmail) {
      toast.error("Please provide the email you want to unsubscribe.");
      return;
    }

    setLoading(true);
    try {
      await apiUnsubscribe(targetEmail);
      toast.success("You have been unsubscribed successfully.");
      if (targetEmail === email) setEmail("");
    } catch (error: any) {
      toast.error(error?.message || "An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return {
    email,
    setEmail,
    loading,
    subscribe,
    unsubscribe,
  };
}
