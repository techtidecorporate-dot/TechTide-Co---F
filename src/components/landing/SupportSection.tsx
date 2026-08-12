import { useState } from "react";
import { Send, CheckCircle, RefreshCw, BarChart, Zap } from "lucide-react";
import { strategyCallAPI } from "@/api";
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

    const nameRegex = /^[A-Za-z\s]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[+]?[0-9\s-]{7,15}$/;
    const subjectRegex = /^[A-Za-z\s]+$/;

    if (!nameRegex.test(formData.firstName.trim())) {
      toast.error("Name should only contain letters");
      return;
    }
    if (!emailRegex.test(formData.email.trim())) {
      toast.error("Please enter a valid email address");
      return;
    }
    if (!phoneRegex.test(formData.phone.trim())) {
      toast.error("Please enter a valid phone number");
      return;
    }
    if (!subjectRegex.test(formData.subject.trim())) {
      toast.error("Project Type should only contain letters");
      return;
    }

    setLoading(true);
    try {
      await strategyCallAPI.create({
        fullName: formData.firstName,
        email: formData.email,
        phone: formData.phone,
        projectType: formData.subject,
        goals: formData.message,
      });
      toast.success("Strategy call booked! We'll get back to you soon.");
      setFormData({
        firstName: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch {
      toast.error("Failed to book strategy call. Please try again later.");
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

  const benefits = [
    {
      icon: CheckCircle,
      title: "Customized Growth Roadmap",
      description: "We'll analyze your current bottle-necks and map out a solution.",
    },
    {
      icon: RefreshCw,
      title: "Predictable Results",
      description: "Learn how we've helped others achieve 3-5x lead growth.",
    },
    {
      icon: BarChart,
      title: "Expert Guidance",
      description: "Direct access to our senior strategists to answer your questions.",
    },
    {
      icon: Zap,
      title: "Zero Obligation",
      description: "A high-value session focused on your ROI, no pushy sales.",
    },
  ];

  return (
    <section
      id="support"
      style={{ contentVisibility: 'auto', containIntrinsicSize: '500px' }}
      className="relative bg-gradient-to-b from-white to-gray-50 py-24 overflow-hidden"
    >
      {/* Decorative Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-[#453abc]/10 to-[#60c3e3]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-gradient-to-br from-[#60c3e3]/10 to-[#453abc]/10 rounded-full blur-3xl" />
      </div>

      <div className="relative">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-[#191a23] text-[1.75rem] sm:text-3xl md:text-5xl  font-bold mb-3 md:mb-4">
            Ready to <span
              className="bg-clip-text"
              style={{
                WebkitTextFillColor: "transparent",
                backgroundImage:
                  "linear-gradient(95.6204deg, rgb(69, 58, 188) 0%, rgb(96, 195, 227) 103.41%)",
              }}
            >Scale Your Business?</span>
          </h2>
          <p className="text-gray-600 text-sm sm:text-base md:text-xl max-w-2xl mx-auto">
            Book your 15-minute growth strategy call today and let's map out your path to 3-5x more leads.
          </p>
        </div>

        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-3xl shadow-xl sm:p-8 md:p-10 border border-gray-100 p-5 flex flex-col justify-center">
              <h3 className="text-[#191a23] text-xl sm:text-2xl font-bold mb-6 md:mb-8">Book Your Free Consultation</h3>

              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="firstName"
                      className="text-sm font-semibold text-gray-700 ml-1 uppercase"
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
                      className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#453abc] focus:border-transparent transition-all"
                      placeholder="Full Name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-semibold text-gray-700 ml-1 uppercase"
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
                      className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#453abc] focus:border-transparent transition-all"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="phone"
                      className="text-sm font-semibold text-gray-700 ml-1 uppercase"
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
                      className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#453abc] focus:border-transparent transition-all"
                      placeholder="e.g. +92 300 1234567"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="subject"
                      className="text-sm font-semibold text-gray-700 ml-1 uppercase"
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
                      className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#453abc] focus:border-transparent transition-all"
                      placeholder="e.g. Lead Gen Website, SaaS, Marketing"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-semibold text-gray-700 ml-1 uppercase"
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
                    className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#453abc] focus:border-transparent transition-all resize-none"
                    placeholder="What are your primary goals for this project?"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full px-8 py-5 rounded-lg shadow-lg transition-all hover:shadow-xl hover:-translate-y-1 active:translate-y-0 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed group"
                  style={{
                    backgroundImage:
                      "linear-gradient(93.1835deg, rgb(69, 58, 188) 0%, rgb(96, 195, 227) 103.41%)",
                  }}
                >
                  <span className="text-white  font-bold text-lg">
                    {loading ? "Booking..." : "Book My Strategy Call"}
                  </span>
                  {!loading && <Send className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />}
                </button>
              </form>
            </div>

            {/* Information Column */}
            <div className="space-y-6 flex flex-col">
              <div className="bg-white rounded-3xl border border-gray-100 shadow-xl p-5 sm:p-8 md:p-10 flex-grow">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#191a23] mb-6 md:mb-8">
                  Why book a call?
                </h3>
                <div className="space-y-6">
                  {benefits.map(({ icon: Icon, title, description }) => (
                    <div key={title} className="flex gap-4">
                      <div className="w-10 h-10 rounded-md bg-[#453abc]/5 flex items-center justify-center text-[#453abc] flex-shrink-0 shadow-sm border border-[#453abc]/10">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#191a23] text-sm md:text-base">{title}</h4>
                        <p className="text-gray-600 text-sm">{description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-[#191a23] bg-gradient-to-br from-[#191a23] via-[#453abc]/20 to-[#191a23] rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-48 h-48 bg-[#453abc]/10 rounded-full blur-[60px] group-hover:scale-150 transition-transform duration-700" />
                <div className="relative z-10">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-6">Office Hours</h3>
                  <div className="space-y-4 text-gray-400">
                    <div className="flex justify-between items-center border-b border-white/5 pb-2">
                      <p className="text-sm font-medium">Mon - Sat</p>
                      <p className="font-bold text-white">10:00 AM - 2:00 AM</p>
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="text-sm font-medium">Sunday</p>
                      <p className="font-bold text-[#60c3e3]">Closed</p>
                    </div>
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
