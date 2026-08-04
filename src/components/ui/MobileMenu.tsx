import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

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
    category: "Development",
    items: [
      { href: "/services/web-applications", label: "Web Application Development" },
      { href: "/services/mobile-applications", label: "Mobile App Development" },
      { href: "/services/saas-product-development", label: "SaaS Product Development" },
      { href: "/services/custom-software", label: "Custom Software Development" },
      { href: "/services/ecommerce-development", label: "E-Commerce Development" },
    ],
  },
  {
    category: "Design",
    items: [
      { href: "/services/ui-ux-design", label: "UI/UX Design" },
      { href: "/services/brand-identity", label: "Brand Identity" },
    ],
  },
  {
    category: "AI & Automation",
    items: [
      { href: "/services/ai-automation", label: "AI Automation" },
      { href: "/services/machine-learning", label: "Machine Learning" },
      { href: "/services/generative-ai", label: "Generative AI" },
      { href: "/services/api-integration", label: "API Integration & Workflow Automation" },
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
    category: "Support",
    items: [
      { href: "/services/maintenance-support", label: "Ongoing Maintenance & Support" },
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
  const [aboutOpen, setAboutOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "100%" }}
          transition={{ type: "tween", duration: 0.3 }}
          className="fixed inset-0 top-16 h-screen z-40 lg:hidden"
        >
          <div className="flex flex-col p-5 sm:p-8 gap-4 sm:gap-5 bg-white h-full overflow-y-auto pb-24">
            {/* Main Nav Items */}
            <div className="space-y-1">
              {[
                { href: "/", label: "Home" },
                ...navItems,
              ].map((item, i) => {
                const isActive = location.pathname === item.href;
                return (
                  <Link
                    key={i}
                    to={item.href}
                    onClick={onClose}
                    className={`block text-lg sm:text-xl font-poppins font-semibold py-3 px-3 transition-colors rounded-xl ${
                      isActive
                        ? "text-white bg-gradient-to-r from-[#453abc] to-[#60c3e3]"
                        : "text-gray-800 hover:text-[#453abc] hover:bg-gray-50"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>

            <hr className="border-gray-200" />

            {/* Collapsible: About Us */}
            <div className="space-y-1">
              <button
                onClick={() => setAboutOpen(!aboutOpen)}
                className="flex items-center justify-between w-full text-xs font-semibold tracking-[0.15em] uppercase text-[#453abc]/60 px-3 py-2 rounded-xl hover:bg-gray-50 transition-colors"
              >
                About Us
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-300 ${aboutOpen ? "rotate-180" : ""}`}
                />
              </button>
              <AnimatePresence initial={false}>
                {aboutOpen && (
                  <motion.div
                    key="about"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="pt-1 pb-1 space-y-0.5">
                      {aboutItems.map((item, i) => {
                        const isActive = location.pathname === item.href;
                        return (
                          <Link
                            key={i}
                            to={item.href}
                            onClick={onClose}
                            className={`block text-sm sm:text-base font-poppins font-medium py-2.5 px-3 transition-colors rounded-xl ${
                              isActive
                                ? "text-[#453abc] bg-[#453abc]/5"
                                : "text-gray-600 hover:text-[#453abc] hover:bg-gray-50"
                            }`}
                          >
                            {item.label}
                          </Link>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <hr className="border-gray-200" />

            {/* Collapsible: Services */}
            <div className="space-y-1">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex items-center justify-between w-full text-xs font-semibold tracking-[0.15em] uppercase text-[#453abc]/60 px-3 py-2 rounded-xl hover:bg-gray-50 transition-colors"
              >
                Services
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-300 ${servicesOpen ? "rotate-180" : ""}`}
                />
              </button>
              <AnimatePresence initial={false}>
                {servicesOpen && (
                  <motion.div
                    key="services"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="pt-2 pb-1 space-y-4">
                      {serviceCategories.map((cat, i) => (
                        <div key={i} className="space-y-1">
                          <p className="text-xs font-semibold tracking-[0.15em] uppercase text-[#453abc]/50 px-3 pb-1">
                            {cat.category}
                          </p>
                          <div className="space-y-0.5">
                            {cat.items.map((item, j) => {
                              const isActive = location.pathname === item.href;
                              return (
                                <Link
                                  key={j}
                                  to={item.href}
                                  onClick={onClose}
                                  className={`block text-sm font-poppins font-medium py-2.5 px-3 transition-colors rounded-xl ${
                                    isActive
                                      ? "text-[#453abc] bg-[#453abc]/5"
                                      : "text-gray-600 hover:text-[#453abc] hover:bg-gray-50"
                                  }`}
                                >
                                  {item.label}
                                </Link>
                              );
                            })}
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <hr className="border-gray-200" />

            <button
              onClick={() => {
                onClose();
                window.dispatchEvent(new CustomEvent("open-partner-drawer"));
              }}
              className="w-full py-4 rounded-xl text-center text-white font-poppins font-semibold shadow-lg shadow-[#453abc]/20"
              style={{
                background:
                  "linear-gradient(95deg, rgb(69, 58, 188) 0%, rgb(96, 195, 227) 100%)",
              }}
            >
              Partner with Us
            </button>

            <div className="mt-2">
              <p className="text-gray-400 text-xs text-center">
                Connecting you to the future of technology.
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
