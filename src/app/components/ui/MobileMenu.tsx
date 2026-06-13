import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const aboutItems = [
  { href: "/about#overview", label: "Overview" },
  { href: "/about#products", label: "Products" },
  { href: "/about#leadership", label: "Leadership" },
  { href: "/company-profile", label: "Company Profile" },
];

const serviceCategories: {
  category: string;
  items: { href: string; label: string }[];
}[] = [
  {
    category: "Marketing Expertise",
    items: [
      { href: "/services/seo-organic-growth", label: "SEO & Organic Growth" },
      { href: "/services/conversion-websites-funnels", label: "Conversion-Optimized Websites & Funnels" },
      { href: "/services/content-landing-page-strategy", label: "Content & Landing Page Strategy" },
      { href: "/services/paid-ads-strategy", label: "Paid Ads Strategy" },
      { href: "/services/brand-positioning-messaging", label: "Brand Positioning & Messaging" },
      { href: "/services/analytics-tracking-cro", label: "Analytics, Tracking & CRO" },
    ],
  },
  {
    category: "Business Growth",
    items: [
      { href: "/services/lead-generation-systems", label: "Lead Generation Systems" },
      { href: "/services/sales-funnel-customer-journey", label: "Sales Funnel & Customer Journey Design" },
      { href: "/services/marketing-sales-alignment", label: "Marketing + Sales Alignment" },
      { href: "/services/automation-crm-integration", label: "Automation & CRM Integration" },
      { href: "/services/growth-audits-scaling-strategy", label: "Growth Audits & Scaling Strategy" },
      { href: "/services/tech-business-consulting", label: "Tech-Driven Business Consulting" },
    ],
  },
  {
    category: "Web Services",
    items: [
      { href: "/services/web-applications", label: "Web Application Development" },
      { href: "/services/custom-software", label: "Custom Software Development" },
      { href: "/services/ecommerce-development", label: "E-Commerce Development" },
      { href: "/services/saas-product-development", label: "SaaS Product Development" },
      { href: "/services/ui-ux-design", label: "UI/UX Design" },
      { href: "/services/api-integration", label: "Integration & Workflow Automation" },
      { href: "/services/maintenance-support", label: "Ongoing Maintenance & Support" },
    ],
  },
  {
    category: "Design",
    items: [
      { href: "/services/ui-ux-design", label: "UI/UX Design" },
      { href: "/services/brand-identity", label: "Brand Identity" },
    ],
  },
];

const navItems = [
  { href: "/products", label: "Products" },
  { href: "/blog", label: "Blog" },
  { href: "/career", label: "Career" },
  { href: "/contact", label: "Contact Us" },
];

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const location = useLocation();

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "100%" }}
          transition={{ type: "tween", duration: 0.3 }}
          className="fixed inset-0 top-[80px] h-full z-40 lg:hidden"
        >
          <div className="flex flex-col p-8 gap-6 bg-white h-full overflow-y-auto pb-20">
            <div className="space-y-1">
              <p className="text-xs font-semibold tracking-[0.15em] uppercase text-[#453abc] px-2">
                About Us
              </p>
              {aboutItems.map((item, i) => {
                const isActive = location.pathname === item.href;
                return (
                  <Link
                    key={i}
                    to={item.href}
                    onClick={onClose}
                    className={`block text-lg font-poppins font-medium p-2 transition-colors rounded-lg ${
                      isActive
                        ? "text-[#453abc] bg-[#453abc]/5"
                        : "text-gray-700 hover:text-[#453abc] hover:bg-gray-50"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>

            <hr className="border-gray-100" />

            <div className="space-y-4">
              {serviceCategories.map((cat, i) => (
                <div key={i} className="space-y-1">
                  <p className="text-xs font-semibold tracking-[0.15em] uppercase text-[#453abc]/70 px-2">
                    {cat.category}
                  </p>
                  {cat.items.map((item, j) => {
                    const isActive = location.pathname === item.href;
                    return (
                      <Link
                        key={j}
                        to={item.href}
                        onClick={onClose}
                        className={`block text-base font-poppins font-medium p-2 transition-colors rounded-lg ${
                          isActive
                            ? "text-[#453abc] bg-[#453abc]/5"
                            : "text-gray-700 hover:text-[#453abc] hover:bg-gray-50"
                        }`}
                      >
                        {item.label}
                      </Link>
                    );
                  })}
                </div>
              ))}
            </div>

            <hr className="border-gray-100" />

            {navItems.map((item, index) => {
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={index}
                  to={item.href}
                  onClick={onClose}
                  className={`text-2xl font-poppins font-medium p-2 transition-colors ${
                    isActive ? "text-[#453abc]" : "text-gray-800"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}

            <hr className="border-gray-100 my-4" />

            <button
              onClick={() => {
                onClose();
                window.dispatchEvent(new CustomEvent("open-partner-drawer"));
              }}
              className="w-full py-4 rounded-xl text-center text-white font-poppins font-medium shadow-lg"
              style={{
                background:
                  "linear-gradient(95deg, rgb(69, 58, 188) 0%, rgb(96, 195, 227) 100%)",
              }}
            >
              Partner with Us
            </button>

            <div className="mt-auto pt-8">
              <p className="text-gray-400 text-sm mb-4">
                Connecting you to the future of technology.
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
