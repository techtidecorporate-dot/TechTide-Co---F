import { Gavel, AlertCircle } from "lucide-react";
import type { ReactNode } from "react";

interface Section {
  title: string;
  content: string;
  specialContent?: ReactNode;
}

export const termsContent = {
  icon: <Gavel className="w-4 h-4" />,
  badgeLabel: "Legal Agreement",
  titleBefore: "Terms of",
  titleGradient: "Service",
  lastUpdated: "January 2026",
  sections: [
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
      specialContent: (
        <div className="bg-orange-50 border border-orange-100 p-6 rounded-2xl flex items-start gap-4">
          <AlertCircle className="w-6 h-6 text-orange-500 mt-1 shrink-0" />
          <p className="m-0 text-orange-800 italic">
            The platform is provided for informational and professional purposes.
            TechTide Corporate LLP does not guarantee uninterrupted service.
          </p>
        </div>
      ),
    } as Section,
    {
      title: "Governing Law",
      content:
        "These Terms of Service are governed by the laws of Pakistan, and any disputes shall be subject to the exclusive jurisdiction of the courts of Pakistan.",
    },
  ] satisfies Section[],
  contactTitle: "Contact",
  contactDescription:
    "For questions regarding these Terms of Service, please reach out to us:",
  showAddress: false,
};
