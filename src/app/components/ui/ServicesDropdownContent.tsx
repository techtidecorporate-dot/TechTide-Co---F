import { Link, useLocation } from "react-router-dom";

const serviceCategories: {
  category: string;
  items: { href: string; label: string; description: string }[];
}[] = [
  {
    category: "Marketing Expertise",
    items: [
      { href: "/services/seo-organic-growth", label: "SEO & Organic Growth", description: "Lead-focused SEO that attracts qualified buyers, not just traffic." },
      { href: "/services/conversion-websites-funnels", label: "Conversion-Optimized Websites & Funnels", description: "Websites engineered to turn visitors into customers." },
      { href: "/services/content-landing-page-strategy", label: "Content & Landing Page Strategy", description: "Strategic content and landing pages that convert." },
      { href: "/services/paid-ads-strategy", label: "Paid Ads Strategy", description: "ROI-driven ad campaigns on Google, Meta, and LinkedIn." },
      { href: "/services/brand-positioning-messaging", label: "Brand Positioning & Messaging", description: "Distinct positioning that differentiates you in crowded markets." },
      { href: "/services/analytics-tracking-cro", label: "Analytics, Tracking & CRO", description: "Data-driven analytics and conversion rate optimization." },
    ],
  },
  {
    category: "Business Growth",
    items: [
      { href: "/services/lead-generation-systems", label: "Lead Generation Systems", description: "End-to-end systems delivering predictable qualified prospects." },
      { href: "/services/sales-funnel-customer-journey", label: "Sales Funnel & Customer Journey Design", description: "Funnels that guide prospects seamlessly from awareness to purchase." },
      { href: "/services/marketing-sales-alignment", label: "Marketing + Sales Alignment", description: "Unify teams around shared goals, processes, and data." },
      { href: "/services/automation-crm-integration", label: "Automation & CRM Integration", description: "Automate workflows and integrate your CRM for efficient lead management." },
      { href: "/services/growth-audits-scaling-strategy", label: "Growth Audits & Scaling Strategy", description: "Data-backed audits and roadmaps for sustainable expansion." },
      { href: "/services/tech-business-consulting", label: "Tech-Driven Business Consulting", description: "Strategic technology consulting aligned with growth goals." },
    ],
  },
  {
    category: "Development",
    items: [
      { href: "/services/web-applications", label: "Web Applications", description: "Custom web apps built with modern frameworks and best practices." },
      { href: "/services/mobile-applications", label: "Mobile Applications", description: "Native and cross-platform mobile apps for iOS and Android." },
      { href: "/services/custom-software", label: "Custom Software", description: "Tailored software solutions for your unique business needs." },
      { href: "/services/saas-product-development", label: "Scalable SaaS Products", description: "Build and scale profitable SaaS platforms from scratch." },
      { href: "/services/api-integration", label: "API & System Integration", description: "Connect your tech stack for seamless data flow." },
      { href: "/services/business-automation-systems", label: "Business Automation Systems", description: "Streamline operations with custom automation tools." },
      { href: "/services/machine-learning", label: "Machine Learning", description: "Intelligent ML models that unlock insights from your data." },
      { href: "/services/ai-automation", label: "AI Automation", description: "Automate complex workflows with intelligent AI agents." },
      { href: "/services/generative-ai", label: "Generative AI", description: "Harness generative AI for content, design, and innovation." },
    ],
  },
  {
    category: "Design",
    items: [
      { href: "/services/ui-ux-design", label: "UI/UX Design", description: "Intuitive interfaces and seamless user experiences." },
      { href: "/services/brand-identity", label: "Brand Identity", description: "Distinctive brand identities that leave lasting impressions." },
    ],
  },
];

interface ServicesDropdownContentProps {
  onClose: () => void;
}

export function ServicesDropdownContent({ onClose }: ServicesDropdownContentProps) {
  const location = useLocation();

  return (
    <div
      className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 max-h-[70vh] overflow-y-auto"
      style={{ scrollbarWidth: "none", msOverflowStyle: "none" } as React.CSSProperties}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-6 items-start">
        {serviceCategories.map((cat, i) => (
          <div key={i} className="space-y-3">
            <h3 className="text-xs font-semibold tracking-[0.15em] uppercase text-[#453abc]/70 pb-1">
              {cat.category}
            </h3>
            <div className="space-y-1">
              {cat.items.map((item, j) => {
                const isActive = location.pathname === item.href;
                return (
                  <Link
                    key={j}
                    to={item.href}
                    onClick={onClose}
                    className={`block py-2 rounded-lg transition-all duration-300 ${
                      isActive
                        ? "bg-gradient-to-br from-[#453abc]/5 to-[#60c3e3]/5 border border-[#453abc]/15"
                        : "hover:bg-gray-50 border border-transparent"
                    }`}
                  >
                    <span className={`font-poppins text-sm transition-colors ${
                      isActive ? "text-[#453abc]" : "text-[#191a23]"
                    }`}>
                      {item.label}
                    </span>
                    
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
