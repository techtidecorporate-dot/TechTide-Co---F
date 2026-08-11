import React, { useState, useEffect, useRef } from "react";
import { Send, Users, Zap } from "lucide-react";
import { motion } from "framer-motion";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

interface FormSectionProps {
  formData: FormData;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  onSubmit: (e: React.FormEvent) => void;
  loading: boolean;
}

export function FormSection({
  formData,
  onChange,
  onSubmit,
  loading,
}: FormSectionProps) {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.location.hash === "#contact-form" && formRef.current) {
      setTimeout(() => {
        formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
        // remove hash so refreshing this page doesn't re-trigger/overshoot
        window.history.replaceState(null, "", window.location.pathname);
      }, 100);
    }
  }, []);

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};
    const nameRegex = /^[A-Za-z\s'-]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const phoneRegex = /^(\+?[1-9]\d{6,14}|03\d{9})$/;
    const subjectRegex = /^[A-Za-z\s'-]+$/;

    // First Name Validation
    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    } else if (!nameRegex.test(formData.firstName)) {
      newErrors.firstName = "First name can only contain alphabets";
    }

    // Last Name Validation
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    } else if (!nameRegex.test(formData.lastName)) {
      newErrors.lastName = "Last name can only contain alphabets";
    }

    // Email Validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Phone Validation (Optional field, validates PK 11-digit or International format if entered)
    if (formData.phone) {
      const cleanPhone = formData.phone.replace(/[\s-]/g, "");
      if (!phoneRegex.test(cleanPhone)) {
        newErrors.phone = "Enter a valid phone number (e.g. 03001234567 or +923001234567)";
      }
    }

    // Subject Validation
    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    } else if (!subjectRegex.test(formData.subject)) {
      newErrors.subject = "Subject can only contain text";
    }

    // Message Validation
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      onSubmit(e);
    }
  };

  return (
    <section className="pb-20 md:pb-32">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            ref={formRef}
            id="contact-form"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            viewport={{ once: true, margin: "-50px" }}
            className="bg-white rounded-3xl border border-gray-100 shadow-xl p-8 lg:p-10 scroll-mt-24"
          >
            <h2 className="text-2xl md:text-3xl font-semibold text-[#191a23] mb-3">Send us a Message</h2>
            <p className="text-[#6b7280] text-sm md:text-base mb-8 leading-relaxed">Fill out the form below and we'll get back to you within 24 hours.</p>

            <form onSubmit={handleSubmit} noValidate className="space-y-6" >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="block text-xs md:text-sm font-medium text-[#191a23] ml-1">First Name *</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={onChange}
                    required
                    className="w-full px-4 py-3.5 md:py-3 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#453abc] focus:border-transparent transition-all text-sm"
                    placeholder="Enter your first name"
                  />
                  {errors.firstName && (
                    <p className="text-red-500 text-xs ml-1">{errors.firstName}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="block text-xs md:text-sm font-medium text-[#191a23] ml-1">Last Name *</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={onChange}
                    required
                    className="w-full px-4 py-3.5 md:py-3 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#453abc] focus:border-transparent transition-all text-sm"
                    placeholder="Enter your last name"
                  />
                  {errors.lastName && (
                    <p className="text-red-500 text-xs ml-1">{errors.lastName}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-xs md:text-sm font-medium text-[#191a23] ml-1">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={onChange}
                    required
                    className="w-full px-4 py-3.5 md:py-3 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#453abc] focus:border-transparent transition-all text-sm"
                    placeholder="Enter your email"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs ml-1">{errors.email}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="block text-xs md:text-sm font-medium text-[#191a23] ml-1">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={onChange}
                    className="w-full px-4 py-3.5 md:py-3 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#453abc] focus:border-transparent transition-all text-sm"
                    placeholder="+92 300 1234567"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-xs ml-1">{errors.phone}</p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="block text-xs md:text-sm font-medium text-[#191a23] ml-1">Subject *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={onChange}
                  required
                  className="w-full px-4 py-3.5 md:py-3 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#453abc] focus:border-transparent transition-all text-sm"
                  placeholder="How can we help you?"
                />
                {errors.subject && (
                  <p className="text-red-500 text-xs ml-1">{errors.subject}</p>
                )}
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="block text-xs md:text-sm font-medium text-[#191a23] ml-1">Message *</label>
                <textarea
                  name="message"
                  id="message"
                  value={formData.message}
                  onChange={onChange}
                  required
                  rows={5}
                  className="w-full px-4 py-4 md:py-3 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#453abc] focus:border-transparent transition-all resize-none text-sm"
                  placeholder="Tell us about your project..."
                />
                {errors.message && (
                  <p className="text-red-500 text-xs ml-1">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-[#453abc] to-[#60c3e3] text-white px-8 py-4.5 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 active:scale-[0.98] flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Sending..." : "Send Message"}
                {!loading && <Send className="w-5 h-5" />}
              </button>
            </form>
          </motion.div>

          <div className="space-y-6 md:space-y-8">
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              viewport={{ once: true, margin: "-50px" }}
              className="bg-white rounded-3xl border border-gray-100 shadow-xl p-8 lg:p-10"
            >
              <h3 className="text-xl md:text-2xl font-semibold text-[#191a23] mb-6">Why Choose TechTide?</h3>
              <div className="space-y-6">
                <div className="flex gap-5">
                  <div className="w-12 h-12 rounded-lg bg-[#453abc]/5 flex items-center justify-center text-[#453abc] flex-shrink-0 shadow-sm">
                    <Zap className="size-6" />
                  </div>
                  <div>
                    <h4 className=" font-semibold text-[#191a23] mb-1">Fast Response Time</h4>
                    <p className="text-[#6b7280] text-sm leading-relaxed">We respond to all inquiries within 24 hours</p>
                  </div>
                </div>
                <div className="flex gap-5">
                  <div className="w-12 h-12 rounded-lg bg-[#453abc]/5 flex items-center justify-center text-[#453abc] flex-shrink-0 shadow-sm">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#191a23] mb-1">Expert Team</h4>
                    <p className="text-[#6b7280] text-sm leading-relaxed">Work with experienced professionals</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              viewport={{ once: true, margin: "-50px" }}
              className="bg-[#191a23] rounded-2xl text-white shadow-xl"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3400.786104592155!2d74.3988149!3d31.548828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919050017953d65%3A0x4946f90f8a3851c2!2sTechtide%20Corporate%20LLP!5e0!3m2!1sen!2s!4v1"
                width="100%"
                height="280"
                style={{ borderRadius: "1rem", border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="TechTide Corporate LLP Location"
                className="relative z-10"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
