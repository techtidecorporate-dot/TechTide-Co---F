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
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-8 pb-20 md:pb-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          viewport={{ once: true, margin: "-50px" }}
          className="bg-white rounded-[2rem] border border-gray-100 shadow-xl p-8 md:p-12"
        >
          <h2 className="text-2xl md:text-3xl font-poppins font-semibold text-[#191a23] mb-3">
            Send us a Message
          </h2>
          <p className="text-[#6b7280] text-sm md:text-base mb-8 leading-relaxed">
            Fill out the form below and we'll get back to you within 24 hours.
          </p>

          <form onSubmit={onSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div className="space-y-2">
                <label className="block text-xs font-poppins font-medium text-[#191a23] ml-1">
                  First Name *
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={onChange}
                  required
                  className="w-full px-4 py-3.5 md:py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#453abc] focus:border-transparent transition-all text-sm"
                  placeholder="Enter your first name"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-xs font-poppins font-medium text-[#191a23] ml-1">
                  Last Name *
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={onChange}
                  required
                  className="w-full px-4 py-3.5 md:py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#453abc] focus:border-transparent transition-all text-sm"
                  placeholder="Enter your last name"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div className="space-y-2">
                <label className="block text-xs font-poppins font-medium text-[#191a23] ml-1">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={onChange}
                  required
                  className="w-full px-4 py-3.5 md:py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#453abc] focus:border-transparent transition-all text-sm"
                  placeholder="Enter your email"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-xs font-poppins font-medium text-[#191a23] ml-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={onChange}
                  className="w-full px-4 py-3.5 md:py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#453abc] focus:border-transparent transition-all text-sm"
                  placeholder="Enter your phone number"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-xs font-poppins font-medium text-[#191a23] ml-1">
                Subject *
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={onChange}
                required
                className="w-full px-4 py-3.5 md:py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#453abc] focus:border-transparent transition-all text-sm"
                placeholder="How can we help you?"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-[#191a23] ml-1">
                Message *
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={onChange}
                required
                rows={5}
                className="w-full px-4 py-4 md:py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#453abc] focus:border-transparent transition-all resize-none text-sm"
                placeholder="Tell us about your project..."
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-[#453abc] to-[#60c3e3] text-white px-8 py-4.5 rounded-xl font-poppins font-medium shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 active:scale-[0.98] flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
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
            className="bg-white rounded-[2rem] border border-gray-100 shadow-xl p-8 md:p-10"
          >
            <h3 className="text-xl md:text-2xl font-poppins font-semibold text-[#191a23] mb-6">
              Why Choose TechTide?
            </h3>
            <div className="space-y-6">
              <div className="flex gap-5">
                <div className="w-12 h-12 rounded-xl bg-[#453abc]/5 flex items-center justify-center text-[#453abc] flex-shrink-0 shadow-sm">
                  <Zap className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-poppins font-semibold text-[#191a23] mb-1">
                    Fast Response Time
                  </h4>
                  <p className="text-[#6b7280] text-sm leading-relaxed">
                    We respond to all inquiries within 24 hours
                  </p>
                </div>
              </div>
              <div className="flex gap-5">
                <div className="w-12 h-12 rounded-xl bg-[#453abc]/5 flex items-center justify-center text-[#453abc] flex-shrink-0 shadow-sm">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-poppins font-semibold text-[#191a23] mb-1">
                    Expert Team
                  </h4>
                  <p className="text-[#6b7280] text-sm leading-relaxed">
                    Work with experienced professionals
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            viewport={{ once: true, margin: "-50px" }}
            className="bg-[#191a23] rounded-[1rem] text-white shadow-xl"
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
  );
}
