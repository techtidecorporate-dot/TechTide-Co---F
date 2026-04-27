import { useState } from "react";
import { Send, CheckCircle, RefreshCw, BarChart, Zap } from "lucide-react";
import { contactAPI } from "@/api";
import { toast } from "sonner";

export function SupportSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await contactAPI.create({
        name: formData.firstName,
        email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message,
      });
      toast.success("Message sent! We'll get back to you soon.");
      setFormData({
        firstName: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      toast.error("Failed to send message. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="support"
      className="relative bg-gradient-to-b from-white to-gray-50 py-24 overflow-hidden"
    >
      {/* Decorative Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-[#453abc]/10 to-[#60c3e3]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-gradient-to-br from-[#60c3e3]/10 to-[#453abc]/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-[#191a23] text-3xl md:text-5xl font-poppins font-bold mb-4">
            Ready to <span
              className="bg-clip-text"
              style={{
                WebkitTextFillColor: "transparent",
                backgroundImage:
                  "linear-gradient(95.6204deg, rgb(69, 58, 188) 0%, rgb(96, 195, 227) 103.41%)",
              }}
            >Scale Your Business?</span>
          </h2>
          <p className="text-gray-600 text-base md:text-xl max-w-2xl mx-auto">
            Book your 15-minute growth strategy call today and let's map out your path to 3-5x more leads.
          </p>
        </div>

        <div className="max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-[2rem] shadow-xl md:p-10 border border-gray-100 p-8 flex flex-col justify-center">
            <h3 className="text-[#191a23] text-2xl font-poppins font-bold mb-8">
              Book Your Free Consultation
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div className="space-y-2">
                  <label
                    htmlFor="firstName"
                    className="text-sm font-bold text-gray-700 ml-1 uppercase tracking-wider"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#453abc] focus:border-transparent transition-all"
                    placeholder="Full Name"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-bold text-gray-700 ml-1 uppercase tracking-wider"
                  >
                    Work Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#453abc] focus:border-transparent transition-all"
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div className="space-y-2">
                  <label
                    htmlFor="phone"
                    className="text-sm font-bold text-gray-700 ml-1 uppercase tracking-wider"
                  >
                    Phone / WhatsApp
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#453abc] focus:border-transparent transition-all"
                    placeholder="e.g. +92 300 1234567"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="subject"
                    className="text-sm font-bold text-gray-700 ml-1 uppercase tracking-wider"
                  >
                    Project Type
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#453abc] focus:border-transparent transition-all"
                    placeholder="e.g. Lead Gen Website, SaaS, Marketing"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-bold text-gray-700 ml-1 uppercase tracking-wider"
                >
                  Your Goals
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#453abc] focus:border-transparent transition-all resize-none"
                  placeholder="What are your primary goals for this project?"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full px-8 py-5 rounded-2xl shadow-lg transition-all hover:shadow-xl hover:-translate-y-1 active:translate-y-0 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed group"
                style={{
                  backgroundImage:
                    "linear-gradient(93.1835deg, rgb(69, 58, 188) 0%, rgb(96, 195, 227) 103.41%)",
                }}
              >
                <span className="text-white font-poppins font-bold text-lg">
                  {loading ? "Booking..." : "Book My Strategy Call"}
                </span>
                {!loading && <Send className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />}
              </button>
            </form>
          </div>

          {/* Information Column */}
          <div className="space-y-6 flex flex-col">
            <div className="bg-white rounded-[2rem] border border-gray-100 shadow-xl p-8 md:p-10 flex-grow">
              <h3 className="text-xl md:text-2xl font-poppins font-bold text-[#191a23] mb-8">
                Why book a call?
              </h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#453abc]/5 flex items-center justify-center text-[#453abc] flex-shrink-0 shadow-sm border border-[#453abc]/10">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-poppins font-bold text-[#191a23] text-sm md:text-base">
                      Customized Growth Roadmap
                    </h4>
                    <p className="text-gray-600 text-sm">
                      We'll analyze your current bottle-necks and map out a solution.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#453abc]/5 flex items-center justify-center text-[#453abc] flex-shrink-0 shadow-sm border border-[#453abc]/10">
                    <RefreshCw className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-poppins font-bold text-[#191a23] text-sm md:text-base">
                      Predictable Results
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Learn how we've helped others achieve 3-5x lead growth.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#453abc]/5 flex items-center justify-center text-[#453abc] flex-shrink-0 shadow-sm border border-[#453abc]/10">
                    <BarChart className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-poppins font-bold text-[#191a23] text-sm md:text-base">
                      Expert Guidance
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Direct access to our senior strategists to answer your questions.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#453abc]/5 flex items-center justify-center text-[#453abc] flex-shrink-0 shadow-sm border border-[#453abc]/10">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-poppins font-bold text-[#191a23] text-sm md:text-base">
                      Zero Obligation
                    </h4>
                    <p className="text-gray-600 text-sm">
                      A high-value session focused on your ROI, no pushy sales.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#191a23] bg-gradient-to-br from-[#191a23] via-[#453abc]/20 to-[#191a23] rounded-[2rem] p-8 text-white shadow-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#453abc]/10 rounded-full blur-[60px] group-hover:scale-150 transition-transform duration-700" />
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-poppins font-bold mb-6">
                  Office Hours
                </h3>
                <div className="space-y-4 text-gray-400">
                  <div className="flex justify-between items-center border-b border-white/5 pb-2">
                    <span className="text-sm font-medium">Mon - Sat</span>
                    <span className="font-bold text-white">11:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/5 pb-2">
                    <span className="text-sm font-medium">Friday</span>
                    <span className="font-bold text-white">3:00 PM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Sunday</span>
                    <span className="font-bold text-[#60c3e3]">Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
