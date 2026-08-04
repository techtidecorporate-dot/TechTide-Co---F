import { Cookie, Info, ShieldCheck } from "lucide-react";
import type { ReactNode } from "react";

interface Section {
  title: string;
  content: string;
  specialContent?: ReactNode;
}

export const cookieContent = {
  icon: <Cookie className="w-4 h-4" />,
  badgeLabel: "Cookie Usage",
  titleBefore: "Cookie",
  titleGradient: "Policy",
  lastUpdated: "January 2026",
  sections: [
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
      specialContent: (
        <div className="bg-blue-50/50 border border-blue-100 p-8 rounded-[2rem] flex items-start gap-4">
          <Info className="w-6 h-6 text-[#453abc] shrink-0 mt-1" />
          <p className="m-0">
            Most web browsers allow some control of most cookies through the
            browser settings. To find out more about cookies, visit{" "}
            <a
              href="https://www.allaboutcookies.org"
              className="text-[#453abc] font-medium underline"
            >
              www.allaboutcookies.org
            </a>
            .
          </p>
        </div>
      ),
    } as Section,
    {
      title: "Policy Updates",
      content:
        "We may update this Cookie Policy periodically. Any changes will be published on this page with an updated revision date.",
    },
  ] satisfies Section[],
  contactTitle: "Questions?",
  contactIcon: <ShieldCheck className="w-6 h-6" />,
  contactDescription:
    "If you have any questions about our use of cookies, please email us at:",
  showAddress: false,
};
