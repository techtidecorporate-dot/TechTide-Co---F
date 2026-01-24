import { motion } from "framer-motion";
import { Shield, Lock } from "lucide-react";
import SEO from "../components/ui/SEO";

const PrivacyPolicy = () => {
  const lastUpdated = "January 2026";
  const sections = [
    {
      title: "Introduction",
      content:
        "Welcome to Techtide Corporate LLP. We are committed to protecting your personal data and respecting your privacy. This Privacy Policy explains how we collect, use, store, and protect information when you visit https://techtidecorporate.com, contact us, or apply for career opportunities.",
    },
    {
      title: "Information We Collect",
      content:
        "We may collect personal and contact information such as name, email address, phone number, and company name; recruitment information including resumes, CVs, and professional background; and technical data such as IP address, browser type, device information, pages visited, and usage patterns collected through analytics tools like Google Analytics.",
    },
    {
      title: "Legal Basis for Processing",
      content:
        "If you are located in the European Union or Switzerland, we process your personal data based on consent, contractual necessity, legitimate interests (such as improving services and ensuring security), and legal obligations in accordance with GDPR and Swiss FADP.",
    },
    {
      title: "Use of Your Data",
      content:
        "We use your information to respond to inquiries, evaluate job applications, improve website functionality, maintain security, and communicate relevant business information. We do not sell or rent personal data to third parties.",
    },
    {
      title: "International Data Transfers",
      content:
        "Techtide Corporate LLP operates from Pakistan. By using our website, you acknowledge that your data may be transferred to and processed in Pakistan. Where required, we apply Standard Contractual Clauses and appropriate safeguards to protect your data.",
    },
    {
      title: "Data Retention",
      content:
        "We retain personal data only for as long as necessary to fulfill the purposes outlined in this policy or to comply with legal requirements. Recruitment data may be retained for future opportunities unless deletion is requested.",
    },
    {
      title: "Your Rights",
      content:
        "You may have the right to access, correct, delete, or object to the processing of your personal data and to withdraw consent at any time. To exercise these rights, contact us at info@techtidecorporate.com.",
    },
    {
      title: "Policy Updates",
      content:
        "We may update this Privacy Policy periodically. Any changes will be posted on this page with an updated revision date.",
    },
  ];

  return (
    <div className="pt-32 pb-20 min-h-screen bg-white">
      <SEO
        title="Privacy Policy"
        description="Privacy Policy of TechTide Corporate LLP. Learn how we collect, use, and protect your personal data."
      />
      <div className="max-w-4xl mx-auto px-6">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#453abc]/10 text-[#453abc] mb-6">
            <Shield className="w-4 h-4" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#453abc]">
              Legal Information
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-poppins font-bold text-gray-900 mb-6">
            Privacy{" "}
            <span className="bg-gradient-to-r from-[#453abc] to-[#60c3e3] bg-clip-text text-transparent">
              Policy
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
              {section.title === "Use of Your Data" && (
                <div className="mt-4 bg-slate-50 border border-slate-100 p-6 rounded-2xl flex items-start gap-4">
                  <Lock className="w-6 h-6 text-[#453abc] mt-1 shrink-0" />
                  <p className="m-0 italic">
                    We implement a variety of security measures to maintain the
                    safety of your personal information. However, no method of
                    transmission over the Internet or electronic storage is 100%
                    secure.
                  </p>
                </div>
              )}
            </section>
          ))}

          <section className="mb-12 border-t border-slate-100 pt-12">
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p>
              If you have any questions regarding this Privacy Policy, you may
              contact us using the information below:
            </p>
            <div className="mt-6 p-6 rounded-2xl border border-dashed border-[#453abc]/30 bg-[#453abc]/5">
              <p className="font-bold text-gray-900">TechTide Corporate LLP</p>
              <p>Email: info@techtidecorporate.com</p>
              <p>
                Address: G3 Heaven Mall, Zaraar Shaheed Road, Lahore, Pakistan
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
