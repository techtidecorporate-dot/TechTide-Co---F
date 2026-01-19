import { motion } from "framer-motion";
import { Gavel, AlertCircle } from "lucide-react";

const TermsOfService = () => {
  const lastUpdated = "January 2026";
  const sections = [
    {
      title: "Acceptance of Terms",
      content:
        "By accessing or using https://techtidecorporate.com, you agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree, you must discontinue use of the website.",
    },
    {
      title: "Website Use",
      content:
        "You agree to use the website only for lawful purposes, provide accurate information, refrain from uploading malicious code, avoid unauthorized access attempts, and not impersonate any person or entity.",
    },
    {
      title: "Recruitment and Career Submissions",
      content:
        "Submission of a resume or job application does not guarantee an interview or employment. We reserve the right to verify all information provided, and false or misleading information may result in rejection.",
    },
    {
      title: "Intellectual Property",
      content:
        "All website content, including text, graphics, logos, images, and design elements, is the property of Techtide Corporate LLP or its licensors and is protected by international intellectual property laws. Unauthorized use is prohibited.",
    },
    {
      title: "Limitation of Liability",
      content:
        'Techtide Corporate LLP is not liable for indirect, incidental, or consequential damages, website downtime, technical errors, or losses resulting from reliance on website content. The website is provided on an "as is" basis.',
    },
    {
      title: "Governing Law",
      content:
        "These Terms of Service are governed by the laws of Pakistan, and any disputes shall be subject to the exclusive jurisdiction of the courts of Pakistan.",
    },
  ];

  return (
    <div className="pt-32 pb-20 min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#453abc]/10 text-[#453abc] mb-6">
            <Gavel className="w-4 h-4" />
            <span className="text-xs font-bold uppercase tracking-widest">
              Legal Agreement
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-poppins font-bold text-gray-900 mb-6">
            Terms of{" "}
            <span className="bg-gradient-to-r from-[#453abc] to-[#60c3e3] bg-clip-text text-transparent">
              Service
            </span>
          </h1>
          <p className="text-gray-500 text-lg">Last updated: {lastUpdated}</p>
        </motion.div>

        {/* Content Section */}
        <div className="prose prose-slate max-w-none prose-headings:font-poppins prose-headings:font-bold prose-p:text-gray-600 prose-p:leading-relaxed">
          {sections.map((section, index) => (
            <section key={index} className="mb-12">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-[#453abc]/10 flex items-center justify-center text-[#453abc] shrink-0">
                  {index + 1}
                </span>
                {section.title}
              </h2>
              <p>{section.content}</p>
              {section.title === "Limitation of Liability" && (
                <div className="mt-4 bg-orange-50 border border-orange-100 p-6 rounded-2xl flex items-start gap-4">
                  <AlertCircle className="w-6 h-6 text-orange-500 mt-1 shrink-0" />
                  <p className="m-0 text-orange-800 italic">
                    The platform is provided for informational and professional
                    purposes. TechTide Corporate LLP does not guarantee
                    uninterrupted service.
                  </p>
                </div>
              )}
            </section>
          ))}

          <section className="mb-12 border-t border-slate-100 pt-12">
            <h2 className="text-2xl font-bold mb-4">Contact</h2>
            <p>
              For questions regarding these Terms of Service, please reach out
              to us:
            </p>
            <div className="mt-6 p-6 rounded-2xl border border-dashed border-[#453abc]/30 bg-[#453abc]/5">
              <p className="font-bold text-gray-900">TechTide Corporate LLP</p>
              <p>Email: info@techtidecorporate.com</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
