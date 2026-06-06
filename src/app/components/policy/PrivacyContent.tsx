import { Shield, Lock } from "lucide-react";
import type { ReactNode } from "react";

interface Section {
  title: string;
  content: string;
  specialContent?: ReactNode;
}

export const privacyContent = {
  icon: <Shield className="w-4 h-4" />,
  badgeLabel: "Legal Information",
  titleBefore: "Privacy",
  titleGradient: "Policy",
  lastUpdated: "January 2026",
  sections: [
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
      specialContent: (
        <div className="bg-slate-50 border border-slate-100 p-6 rounded-2xl flex items-start gap-4">
          <Lock className="w-6 h-6 text-[#453abc] mt-1 shrink-0" />
          <p className="m-0 italic">
            We implement a variety of security measures to maintain the safety of
            your personal information. However, no method of transmission over
            the Internet or electronic storage is 100% secure.
          </p>
        </div>
      ),
    } as Section,
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
  ] satisfies Section[],
  contactTitle: "Contact Us",
  contactDescription:
    "If you have any questions regarding this Privacy Policy, you may contact us using the information below:",
  showAddress: true,
};
