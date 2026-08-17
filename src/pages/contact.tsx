import { useState, type FormEvent, type ChangeEvent } from "react";
import { contactAPI } from "@/api";
import { toast } from "sonner";
import { sendEmailNotification } from "@/utils/emailService";
import { submitLead } from "@/firebase/services/leadTracking";
import { addScore } from "@/firebase/services/leadScoring";
import { getStoredConsent } from "@/firebase/services/cookieConsent";
import SEO from "../components/ui/SEO";
import { FAQ } from "../components/ui/FAQ";
import { contactFAQ } from "../data/faqData";
import {
  HeroSection,
  ContactInfoSection,
  FormSection,
} from "../components/contact";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const consent = getStoredConsent();

      await Promise.all([
        contactAPI.create({
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
        }),
        submitLead({
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          phone: formData.phone,
          company: "",
          message: formData.message,
        }),
        ...(consent === "accepted" ? [addScore("lead_submitted")] : []),
      ]);

      await sendEmailNotification(formData, "contact");

      toast.success("Message sent! We'll get back to you soon.");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch {
      toast.error("Failed to send message. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#f8f9fa] to-[#eef2f7]">
      <SEO
        title="Contact Us"
        description="Get in touch with TechTide Corporate LLP for your next web development project. We're here to help you build your digital future."
        keywords="contact TechTide, web development inquiry, software project consultation, hire web developers, IT services contact"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "TechTide Corporate LLP",
          url: "https://techtidecorporate.com",
          telephone: "+923247991484",
          email: "info@techtidecorporate.com",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Lahore",
            addressCountry: "PK",
          },
        }}
      />

      <HeroSection />
      <ContactInfoSection />
      <FormSection
        formData={formData}
        onChange={handleChange}
        onSubmit={handleSubmit}
        loading={loading}
      />

      <FAQ {...contactFAQ} />
    </main>
  );
}