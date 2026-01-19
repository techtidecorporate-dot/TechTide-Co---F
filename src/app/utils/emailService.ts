import emailjs from "@emailjs/browser";

// Initializing EmailJS with Public Key
const PUBLIC_KEY = "JrVdxKyy395hFkQKD";
emailjs.init(PUBLIC_KEY);

const SERVICE_ID = "service_nnfh2mj";
const ADMIN_TEMPLATE_ID = "template_egllx6o"; 
const USER_TEMPLATE_ID = "template_j364hwm";

export const sendEmailNotification = async (formData: any, type: "contact" | "partner") => {
  console.log("Starting Email Process for:", type, formData);

  // 1. Prepare Admin Params
  const adminParams = {
    ...formData,
    form_type: type === "contact" ? "Contact Us" : "Partner With Us",
    user_name: type === "contact" ? `${formData.firstName} ${formData.lastName}` : formData.fullName,
    user_email: formData.email,
    user_phone: formData.phone,
    user_company: formData.companyName || "N/A",
    user_service: type === "contact" ? formData.subject : formData.service,
    user_budget: formData.budget || "N/A",
    user_message: type === "contact" ? formData.message : formData.description,
    reply_to: formData.email,
  };

  // 2. Prepare User Params
  const userParams = {
    ...formData,
    name: type === "contact" ? formData.firstName : formData.fullName,
    email: formData.email, // Matches {{email}} in your template
    project_title: type === "contact" ? formData.subject : formData.service,
    message_received: type === "contact" ? formData.message : formData.description,
  };

  try {
    // Send both emails at once (Parallel)
    const results = await Promise.allSettled([
      emailjs.send(SERVICE_ID, ADMIN_TEMPLATE_ID, adminParams, PUBLIC_KEY),
      emailjs.send(SERVICE_ID, USER_TEMPLATE_ID, userParams, PUBLIC_KEY)
    ]);

    let anyFailed = false;
    results.forEach((res, index) => {
      if (res.status === "fulfilled") {
        console.log(`${index === 0 ? "Admin" : "User"} Email Sent Successfully!`);
      } else {
        console.error(`${index === 0 ? "Admin" : "User"} Email Failed:`, res.reason);
        anyFailed = true;
      }
    });

    return { success: !anyFailed };
  } catch (error) {
    console.error("General EmailJS Error:", error);
    return { success: false, error };
  }
};
