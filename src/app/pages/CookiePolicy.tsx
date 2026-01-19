import { motion } from "framer-motion";
import { Cookie, Info, ShieldCheck } from "lucide-react";

const CookiePolicy = () => {
  const lastUpdated = "January 2026";
  const sections = [
    {
      title: "What Are Cookies",
      content:
        "Cookies are small text files stored on your device when you visit a website. They help improve functionality, performance, and user experience.",
    },
    {
      title: "How We Use Cookies",
      content:
        "Techtide Corporate LLP uses cookies to ensure website functionality, analyze traffic, understand user behavior, and improve content and services.",
    },
    {
      title: "Types of Cookies We Use",
      content:
        "We use essential cookies required for core website functionality, analytics cookies for performance tracking (such as Google Analytics), and functional cookies to remember user preferences.",
    },
    {
      title: "Third-Party Cookies",
      content:
        "Some cookies may be placed by trusted third-party services used for analytics or performance monitoring. These third parties have their own privacy and cookie policies.",
    },
    {
      title: "Managing Cookies",
      content:
        "You can manage or disable cookies through your browser settings. Disabling certain cookies may affect website functionality.",
    },
    {
      title: "Policy Updates",
      content:
        "We may update this Cookie Policy periodically. Any changes will be published on this page with an updated revision date.",
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
            <Cookie className="w-4 h-4" />
            <span className="text-xs font-bold uppercase tracking-widest">
              Cookie Usage
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-poppins font-bold text-gray-900 mb-6">
            Cookie{" "}
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
              {section.title === "Managing Cookies" && (
                <div className="mt-4 bg-blue-50/50 border border-blue-100 p-8 rounded-[2rem] flex items-start gap-4">
                  <Info className="w-6 h-6 text-[#453abc] shrink-0 mt-1" />
                  <p className="m-0">
                    Most web browsers allow some control of most cookies through
                    the browser settings. To find out more about cookies, visit{" "}
                    <a
                      href="https://www.allaboutcookies.org"
                      className="text-[#453abc] font-medium underline"
                    >
                      www.allaboutcookies.org
                    </a>
                    .
                  </p>
                </div>
              )}
            </section>
          ))}

          <section className="mb-12 border-t border-slate-100 pt-12">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-[#453abc]" />
              Questions?
            </h2>
            <p>
              If you have any questions about our use of cookies, please email
              us at:
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

export default CookiePolicy;
