import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface Section {
  title: string;
  content: string;
  specialContent?: ReactNode;
}

interface PolicyLayoutProps {
  icon: ReactNode;
  badgeLabel: string;
  titleBefore: string;
  titleGradient: string;
  lastUpdated: string;
  sections: Section[];
  contactTitle: string;
  contactDescription: string;
  contactIcon?: ReactNode;
  showAddress?: boolean;
}

export const PolicyLayout = ({
  icon,
  badgeLabel,
  titleBefore,
  titleGradient,
  lastUpdated,
  sections,
  contactTitle,
  contactDescription,
  contactIcon,
  showAddress = false,
}: PolicyLayoutProps) => {
  return (
    <main className="pt-32 pb-20 min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6">
        {/* Hero Section */}
        <header className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#453abc]/10 text-[#453abc] mb-6">
              {icon}
              <span className="text-xs font-bold uppercase tracking-widest text-[#453abc]">
                {badgeLabel}
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl  font-bold text-gray-900 mb-6">
              {titleBefore}{" "}
              <span className="bg-gradient-to-r from-[#453abc] to-[#60c3e3] bg-clip-text text-transparent">
                {titleGradient}
              </span>
            </h1>
            <p className="text-gray-500 text-lg">Last updated: {lastUpdated}</p>
          </motion.div>
        </header>

        {/* Content Sections */}
        <div className="prose prose-slate max-w-none prose-headings: prose-headings:font-bold prose-p:text-gray-600 prose-p:leading-relaxed">
          {sections.map((section, index) => (
            <section key={index} className="mb-12">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-[#453abc]/10 flex items-center justify-center text-[#453abc] shrink-0">
                  {index + 1}
                </span>
                {section.title}
              </h2>
              <p>{section.content}</p>
              {section.specialContent && (
                <div className="mt-4">
                  {section.specialContent}
                </div>
              )}
            </section>
          ))}

          {/* Contact Section */}
          <section className="mb-12 border-t border-slate-100 pt-12">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
              {contactIcon && (
                <span className="text-[#453abc]">{contactIcon}</span>
              )}
              {contactTitle}
            </h2>
            <p>{contactDescription}</p>
            <div className="mt-6 p-6 rounded-2xl border border-dashed border-[#453abc]/30 bg-[#453abc]/5">
              <p className="font-bold text-gray-900">TechTide Corporate LLP</p>
              <p>Email: info@techtidecorporate.com</p>
              {showAddress && (
                <p>
                  Address: G3 Heaven Mall, Zaraar Shaheed Road, Lahore, Pakistan
                </p>
              )}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

