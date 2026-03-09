import { useState } from "react";
import { ref, push, get } from "firebase/database";
import { appointmentDatabase } from "@/firebase/appointmentConfig";
import {
  sendAppointmentEmail,
  type AppointmentEmailData,
} from "@/app/utils/appointmentEmailService";
import { toast } from "sonner";
import { motion } from "framer-motion";
import {
  Calendar,
  Clock,
  User,
  Mail,
  Phone,
  MessageSquare,
  Briefcase,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

const services = [
  "General Consultation",
  "Web Development",
  "Mobile App Development",
  "UI/UX Design",
  "Software Consulting",
  "Other",
];

const timeSlots = [
  { value: "09:00", label: "09:00 AM" },
  { value: "10:00", label: "10:00 AM" },
  { value: "11:00", label: "11:00 AM" },
  { value: "12:00", label: "12:00 PM" },
  { value: "13:00", label: "01:00 PM" },
  { value: "14:00", label: "02:00 PM" },
  { value: "15:00", label: "03:00 PM" },
  { value: "16:00", label: "04:00 PM" },
  { value: "17:00", label: "05:00 PM" },
];

interface FormData {
  clientName: string;
  clientEmail: string;
  clientPhone: string;
  date: string;
  time: string;
  service: string;
  message: string;
}

export default function BookAppointment() {
  const [formData, setFormData] = useState<FormData>({
    clientName: "",
    clientEmail: "",
    clientPhone: "",
    date: "",
    time: "",
    service: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [booked, setBooked] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const checkAvailability = async (date: string, time: string) => {
    try {
      const appointmentsRef = ref(appointmentDatabase, "appointments");
      const snapshot = await get(appointmentsRef);

      if (snapshot.exists()) {
        const appointments = snapshot.val();
        const isBooked = Object.values(appointments).some(
          (apt: any) =>
            apt.date === date && apt.time === time && apt.status !== "canceled",
        );
        return !isBooked;
      }
      return true;
    } catch (error) {
      console.error("Error checking availability:", error);
      return true;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (
        !formData.clientName ||
        !formData.clientEmail ||
        !formData.date ||
        !formData.time
      ) {
        toast.error("Please fill in all required fields");
        setLoading(false);
        return;
      }

      const isAvailable = await checkAvailability(formData.date, formData.time);
      if (!isAvailable) {
        toast.error(
          "This time slot is already booked. Please choose another time.",
        );
        setLoading(false);
        return;
      }

      const appointmentData = {
        ...formData,
        status: "pending",
        createdAt: new Date().toISOString(),
      };

      const appointmentsRef = ref(appointmentDatabase, "appointments");
      await push(appointmentsRef, appointmentData);

      // Send notification email to admin only
      // Client will receive email when admin confirms or cancels
      try {
        const emailData: AppointmentEmailData = {
          clientName: formData.clientName,
          clientEmail: formData.clientEmail,
          clientPhone: formData.clientPhone,
          date: formData.date,
          time: formData.time,
          service: formData.service,
          message: formData.message,
        };
        await sendAppointmentEmail("admin", emailData);
      } catch (emailError) {
        console.error("Error sending email:", emailError);
      }

      setBooked(true);
      toast.success(
        "Appointment booked successfully! Our team will review and get back to you shortly.",
      );

      setFormData({
        clientName: "",
        clientEmail: "",
        clientPhone: "",
        date: "",
        time: "",
        service: "",
        message: "",
      });
    } catch (error: any) {
      console.error("Error booking appointment:", error);
      toast.error(`Failed to book appointment: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const getMinDate = () => {
    const today = new Date();
    return today.toISOString().split("T")[0];
  };

  // Success state
  if (booked) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#f8f9fa] to-[#eef2f7] flex items-center justify-center px-4 pt-[80px]">
        {/* Background Decorative */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-[#453abc]/5 rounded-full blur-[150px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[800px] h-[800px] bg-[#60c3e3]/5 rounded-full blur-[150px]" />
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative text-center max-w-lg"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="w-24 h-24 mx-auto mb-8 rounded-full bg-gradient-to-br from-[#453abc] to-[#60c3e3] flex items-center justify-center shadow-[0_15px_50px_rgba(69,58,188,0.3)]"
          >
            <CheckCircle2 className="w-12 h-12 text-white" />
          </motion.div>
          <h1 className="text-4xl md:text-5xl font-poppins font-medium text-[#191a23] mb-4">
            Appointment{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#453abc] to-[#60c3e3]">
              Submitted
            </span>
          </h1>
          <p className="text-[#6b7280] text-lg mb-8 font-inter">
            Your appointment request has been submitted. Our team will review it
            and you'll receive an email once it's confirmed or updated.
          </p>
          <button
            onClick={() => setBooked(false)}
            className="px-8 py-4 rounded-xl font-poppins font-medium text-white shadow-[0_10px_30px_rgba(69,58,188,0.3)] hover:shadow-[0_20px_50px_rgba(69,58,188,0.5)] transition-all hover:-translate-y-1"
            style={{
              background:
                "linear-gradient(95deg, rgb(69, 58, 188) 0%, rgb(96, 195, 227) 100%)",
            }}
          >
            Book Another Appointment
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f8f9fa] to-[#eef2f7] pt-[100px] pb-20 px-4 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-[#453abc]/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[800px] h-[800px] bg-[#60c3e3]/5 rounded-full blur-[150px]" />
        <div className="absolute top-[40%] right-[20%] w-[400px] h-[400px] bg-[#453abc]/3 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#453abc]/10 text-[#453abc] text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Schedule a Meeting
          </div>
          <h1 className="text-4xl md:text-6xl font-poppins font-medium text-[#191a23] mb-4">
            Book an{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#453abc] to-[#60c3e3]">
              Appointment
            </span>
          </h1>
          <p className="text-[#6b7280] text-lg md:text-xl max-w-2xl mx-auto font-inter">
            Schedule a meeting with our expert team to discuss your project
            requirements and bring your vision to life.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-8 lg:gap-12">
          {/* Left - Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Why Book Card */}
            <div className="glass rounded-[2rem] p-8 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-white/40">
              <h3 className="text-xl font-poppins font-medium text-[#191a23] mb-6">
                Why Book With Us?
              </h3>
              <div className="space-y-5">
                {[
                  {
                    icon: "🚀",
                    title: "Expert Consultation",
                    desc: "Get personalized advice from experienced developers",
                  },
                  {
                    icon: "⏱️",
                    title: "Quick Response",
                    desc: "We confirm appointments within 24 hours",
                  },
                  {
                    icon: "💡",
                    title: "No Obligation",
                    desc: "Free initial consultation to understand your needs",
                  },
                  {
                    icon: "🔒",
                    title: "Confidential",
                    desc: "Your ideas and data are always protected",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <span className="text-2xl flex-shrink-0 mt-0.5">
                      {item.icon}
                    </span>
                    <div>
                      <h4 className="font-medium text-[#191a23] font-inter">
                        {item.title}
                      </h4>
                      <p className="text-sm text-[#6b7280] font-inter">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Office Hours Card */}
            <div className="glass rounded-[2rem] p-8 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-white/40">
              <h3 className="text-xl font-poppins font-medium text-[#191a23] mb-4">
                Office Hours
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-[#6b7280] font-inter">
                    Monday – Friday
                  </span>
                  <span className="font-medium text-[#191a23] font-inter">
                    9:00 AM – 6:00 PM
                  </span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-[#6b7280] font-inter">Saturday</span>
                  <span className="font-medium text-[#191a23] font-inter">
                    10:00 AM – 4:00 PM
                  </span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-[#6b7280] font-inter">Sunday</span>
                  <span className="font-medium text-red-500 font-inter">
                    Closed
                  </span>
                </div>
              </div>
            </div>

            {/* Contact Info Card */}
            <div
              className="rounded-[2rem] p-8 text-white shadow-[0_20px_50px_rgba(69,58,188,0.3)]"
              style={{
                background:
                  "linear-gradient(135deg, rgb(69, 58, 188) 0%, rgb(96, 195, 227) 100%)",
              }}
            >
              <h3 className="text-xl font-poppins font-medium mb-4">
                Need Help?
              </h3>
              <p className="text-white/80 text-sm font-inter mb-4">
                If you can't find a suitable slot, reach out to us directly.
              </p>
              <div className="space-y-3">
                <a
                  href="mailto:ceo@techtidecorporate.com"
                  className="flex items-center gap-3 text-white/90 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span className="text-sm font-inter">
                    ceo@techtidecorporate.com
                  </span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right - Booking Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="glass rounded-[2.5rem] p-8 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-white/40">
              <div className="mb-8">
                <h2 className="text-2xl font-poppins font-medium text-[#191a23] mb-2">
                  Schedule Your Meeting
                </h2>
                <p className="text-[#6b7280] text-sm font-inter">
                  Fill in the details below and we'll confirm your appointment.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name Field */}
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-[10px] font-poppins font-semibold text-[#6b7280] uppercase tracking-widest ml-1">
                    <User className="w-3.5 h-3.5" />
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="appointment-clientName"
                    name="clientName"
                    value={formData.clientName}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 bg-white/50 border border-gray-200 rounded-2xl text-[#191a23] focus:outline-none focus:ring-2 focus:ring-[#453abc]/20 focus:bg-white transition-all font-inter placeholder:text-gray-400 text-sm"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email Field */}
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-[10px] font-poppins font-semibold text-[#6b7280] uppercase tracking-widest ml-1">
                    <Mail className="w-3.5 h-3.5" />
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="appointment-clientEmail"
                    name="clientEmail"
                    value={formData.clientEmail}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 bg-white/50 border border-gray-200 rounded-2xl text-[#191a23] focus:outline-none focus:ring-2 focus:ring-[#453abc]/20 focus:bg-white transition-all font-inter placeholder:text-gray-400 text-sm"
                    placeholder="john@example.com"
                  />
                </div>

                {/* Phone Field */}
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-[10px] font-poppins font-semibold text-[#6b7280] uppercase tracking-widest ml-1">
                    <Phone className="w-3.5 h-3.5" />
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="appointment-clientPhone"
                    name="clientPhone"
                    value={formData.clientPhone}
                    onChange={handleChange}
                    className="w-full px-6 py-4 bg-white/50 border border-gray-200 rounded-2xl text-[#191a23] focus:outline-none focus:ring-2 focus:ring-[#453abc]/20 focus:bg-white transition-all font-inter placeholder:text-gray-400 text-sm"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                {/* Service Dropdown */}
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-[10px] font-poppins font-semibold text-[#6b7280] uppercase tracking-widest ml-1">
                    <Briefcase className="w-3.5 h-3.5" />
                    Service
                  </label>
                  <select
                    id="appointment-service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-6 py-4 bg-white/50 border border-gray-200 rounded-2xl text-[#191a23] focus:outline-none focus:ring-2 focus:ring-[#453abc]/20 focus:bg-white transition-all font-inter text-sm appearance-none"
                  >
                    <option value="">Select a service</option>
                    {services.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Date and Time Row */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-[10px] font-poppins font-semibold text-[#6b7280] uppercase tracking-widest ml-1">
                      <Calendar className="w-3.5 h-3.5" />
                      Date *
                    </label>
                    <input
                      type="date"
                      id="appointment-date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      min={getMinDate()}
                      required
                      className="w-full px-6 py-4 bg-white/50 border border-gray-200 rounded-2xl text-[#191a23] focus:outline-none focus:ring-2 focus:ring-[#453abc]/20 focus:bg-white transition-all font-inter text-sm"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-[10px] font-poppins font-semibold text-[#6b7280] uppercase tracking-widest ml-1">
                      <Clock className="w-3.5 h-3.5" />
                      Time *
                    </label>
                    <select
                      id="appointment-time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-4 bg-white/50 border border-gray-200 rounded-2xl text-[#191a23] focus:outline-none focus:ring-2 focus:ring-[#453abc]/20 focus:bg-white transition-all font-inter text-sm appearance-none"
                    >
                      <option value="">Select time</option>
                      {timeSlots.map((slot) => (
                        <option key={slot.value} value={slot.value}>
                          {slot.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-[10px] font-poppins font-semibold text-[#6b7280] uppercase tracking-widest ml-1">
                    <MessageSquare className="w-3.5 h-3.5" />
                    Message (Optional)
                  </label>
                  <textarea
                    id="appointment-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-6 py-4 bg-white/50 border border-gray-200 rounded-2xl text-[#191a23] focus:outline-none focus:ring-2 focus:ring-[#453abc]/20 focus:bg-white transition-all font-inter placeholder:text-gray-400 text-sm resize-none"
                    placeholder="Tell us about your project or any special requirements..."
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4.5 rounded-xl font-poppins font-medium text-white shadow-[0_10px_30px_rgba(69,58,188,0.2)] hover:shadow-[0_20px_50px_rgba(69,58,188,0.4)] transition-all disabled:opacity-60 disabled:cursor-not-allowed text-sm md:text-base"
                  style={{
                    background:
                      "linear-gradient(95deg, rgb(69, 58, 188) 0%, rgb(96, 195, 227) 100%)",
                  }}
                >
                  {loading ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                          fill="none"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Booking...
                    </span>
                  ) : (
                    "Book Appointment"
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
