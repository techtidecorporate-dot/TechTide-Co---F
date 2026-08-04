import { Link, useLocation } from "react-router-dom";

const serviceCategories: {
  category: string;
  items: { href: string; label: string; description: string }[];
}[] = [
  {
    category: "Development",
    items: [
      { href: "/services/web-applications", label: "Web Application Development", description: "Custom CRM, ERP, LMS, hospital, logistics, and enterprise web platforms." },
      { href: "/services/mobile-applications", label: "Mobile App Development", description: "Native iOS & Android and cross-platform apps for every industry." },
      { href: "/services/saas-product-development", label: "SaaS Product Development", description: "Scalable SaaS platforms, MVPs, and multi-tenant cloud products." },
      { href: "/services/custom-software", label: "Custom Software Development", description: "Bespoke solutions tailored to your unique business operations." },
      { href: "/services/ecommerce-development", label: "E-Commerce Development", description: "Conversion-focused stores with secure payments and inventory sync." },
    ],
  },
  {
    category: "Design",
    items: [
      { href: "/services/ui-ux-design", label: "UI/UX Design", description: "Intuitive interfaces and user experiences that drive engagement." },
      { href: "/services/brand-identity", label: "Brand Identity", description: "Distinctive logos, guidelines, and visual identities that build trust." },
    ],
  },
  {
    category: "AI & Automation",
    items: [
      { href: "/services/ai-automation", label: "AI Automation", description: "Intelligent agents and automation that eliminate repetitive work." },
      { href: "/services/machine-learning", label: "Machine Learning", description: "Predictive models, NLP, and data-driven insights from your data." },
      { href: "/services/generative-ai", label: "Generative AI", description: "LLM integration, content generation, and AI-powered prototyping." },
      { href: "/services/api-integration", label: "API Integration & Workflow Automation", description: "Connect tools, sync data, and automate end-to-end workflows." },
    ],
  },
  {
    category: "Support",
    items: [
      { href: "/services/maintenance-support", label: "Ongoing Maintenance & Support", description: "Security, updates, backups, and new features post-launch." },
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
];

interface ServicesDropdownContentProps {
  onClose: () => void;
}

export function ServicesDropdownContent({ onClose }: ServicesDropdownContentProps) {
  const location = useLocation();

  return (
    <div
      className="bg-white rounded-2xl shadow-xl border border-gray-100 p-4 sm:p-5 lg:p-6"
    >
      <div className="columns-1 sm:columns-2 md:columns-4 gap-4 sm:gap-5 lg:gap-6">
        {serviceCategories.map((cat, i) => (
          <div key={i} className="break-inside-avoid mb-4 sm:mb-5 lg:mb-6">
            <h3 className="text-xs font-semibold tracking-[0.15em] uppercase text-[#453abc]/70 pb-1 mb-2">
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
