import emailjs from "@emailjs/browser";

// EmailJS Configuration for the Appointment System
const EMAILJS_SERVICE_ID = "service_t68iawh";
const EMAILJS_CLIENT_TEMPLATE_ID = "template_p43r432";
const EMAILJS_ADMIN_TEMPLATE_ID = "template_1m92wsh";
const EMAILJS_PUBLIC_KEY = "an7IdkN_fBfa3kLiF";
const ADMIN_EMAIL = "ceo@techtidecorporate.com";

// Initialize EmailJS
emailjs.init(EMAILJS_PUBLIC_KEY);

export interface AppointmentEmailData {
  clientName: string;
  clientEmail: string;
  clientPhone?: string;
  date: string;
  time: string;
  service?: string;
  message?: string;
  status?: string;
}

/**
 * Send email notification for appointments
 * @param type - 'client' | 'admin' | 'status_update'
 * @param data - Appointment data
 */
export const sendAppointmentEmail = async (
  type: "client" | "admin" | "status_update",
  data: AppointmentEmailData
) => {
  try {
    let templateId = "";
    let templateParams: Record<string, string> = {};

    if (type === "client") {
      // New booking — always a confirmation
      templateId = EMAILJS_CLIENT_TEMPLATE_ID;
      templateParams = {
        to_name: data.clientName,
        to_email: data.clientEmail,
        client_name: data.clientName,
        service_name: data.service || "General Consultation",
        appointment_date: data.date,
        appointment_time: data.time,
        status_title: "✅ Appointment Confirmed",
        status_message: "Thank you for booking with TechTide. Your appointment has been successfully scheduled.",
        footer_message: "If you need to reschedule or cancel your appointment, simply reply to this email or contact us directly.",
        closing_line: "We look forward to serving you!",
        reply_to: data.clientEmail,
      };
    } else if (type === "admin") {
      templateId = EMAILJS_ADMIN_TEMPLATE_ID;
      templateParams = {
        to_name: "Admin",
        to_email: ADMIN_EMAIL,
        client_name: data.clientName,
        client_email: data.clientEmail,
        client_phone: data.clientPhone || "N/A",
        appointment_date: data.date,
        appointment_time: data.time,
        service_name: data.service || "General Consultation",
        client_message: data.message || "No message provided",
        reply_to: data.clientEmail,
      };
    } else if (type === "status_update") {
      templateId = EMAILJS_CLIENT_TEMPLATE_ID;

      const isCanceled = data.status === "canceled";

      templateParams = {
        to_name: data.clientName,
        to_email: data.clientEmail,
        client_name: data.clientName,
        service_name: data.service || "General Consultation",
        appointment_date: data.date,
        appointment_time: data.time,
        status_title: isCanceled ? "❌ Appointment Canceled" : "✅ Appointment Confirmed",
        status_message: isCanceled
          ? "We regret to inform you that your appointment with TechTide has been canceled."
          : "Thank you for booking with TechTide. Your appointment has been successfully scheduled.",
        footer_message: isCanceled
          ? "If you would like to reschedule, please visit our website or contact us directly."
          : "If you need to reschedule or cancel your appointment, simply reply to this email or contact us directly.",
        closing_line: isCanceled
          ? "We apologize for any inconvenience."
          : "We look forward to serving you!",
        reply_to: ADMIN_EMAIL,
      };
    }

    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      templateId,
      templateParams
    );
    console.log("Appointment email sent successfully:", response);
    return response;
  } catch (error) {
    console.error("Error sending appointment email:", error);
    throw error;
  }
};
