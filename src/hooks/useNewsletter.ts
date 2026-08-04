import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { addSubscriber } from "@/utils/newsletterStorage";

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

  return {
    email,
    setEmail,
    loading,
    subscribe,
  };
}
