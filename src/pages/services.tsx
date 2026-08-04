import { useState } from "react";
import { systemsData } from "../data/servicesData";
import { marketingExpertise, businessGrowthExpertise } from "../data/marketingServicesData";
import type { SystemItem } from "../data/servicesData";
import SEO from "../components/ui/SEO";
import { FAQ } from "../components/ui/FAQ";
import { servicesFAQ } from "../data/faqData";
import { HeroSection } from "../components/services/HeroSection";
import { ServicesGridSection } from "../components/services/ServicesGridSection";
import { CTASection } from "../components/services/CTASection";

const tabs = [
  { key: "all", label: "All Services" },
  { key: "development", label: "Development" },
  { key: "marketing", label: "Marketing" },
  { key: "business-growth", label: "Business Growth" },
] as const;

type TabKey = (typeof tabs)[number]["key"];

const developmentSlugs = [
  "web-applications",
  "mobile-applications",
  "custom-software",
  "ecommerce-development",
  "saas-product-development",
  "ui-ux-design",
  "api-integration",
  "maintenance-support",
  "machine-learning",
  "ai-automation",
  "generative-ai",
  "brand-identity",
];

const marketingSlugs = [
  "lead-generation-websites",
  "conversion-optimization",
  "seo",
  "social-media-marketing",
  "performance-marketing",
];

const businessGrowthSlugs = [
  "growth-marketing-systems",
  "business-automation-systems",
];

interface ServiceWithCategory extends SystemItem {
  category: "development" | "marketing" | "business-growth";
}

const allServices: ServiceWithCategory[] = [
  ...systemsData
    .filter((s) => developmentSlugs.includes(s.slug))
    .map((s) => ({ ...s, category: "development" as const })),
  ...systemsData
    .filter((s) => marketingSlugs.includes(s.slug))
    .map((s) => ({ ...s, category: "marketing" as const })),
  ...systemsData
    .filter((s) => businessGrowthSlugs.includes(s.slug))
    .map((s) => ({ ...s, category: "business-growth" as const })),
  ...marketingExpertise.map((s) => ({ ...s, category: "marketing" as const })),
  ...businessGrowthExpertise.map((s) => ({ ...s, category: "business-growth" as const })),
];

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState<TabKey>("all");

  const filtered =
    activeTab === "all"
      ? allServices
      : allServices.filter((s) => s.category === activeTab);

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#f8f9fa] to-[#eef2f7]">
      <SEO
        title="Web Development, Marketing & Business Growth Services"
        description="Comprehensive web development, marketing expertise, and business growth services. TechTide Corporate LLP helps businesses build, market, and scale."
        keywords="web development, digital marketing, business growth, SEO, lead generation, CRM integration, TechTide services"
      />

      <HeroSection />

      {/* Filter Tabs */}
      <div className="sticky top-16 md:top-20 z-30 bg-white/80 backdrop-blur-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="flex gap-1 sm:gap-2 overflow-x-auto scrollbar-hide py-3 md:py-4">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`relative flex-shrink-0 whitespace-nowrap px-3 sm:px-6 py-2 rounded-lg text-xs sm:text-sm md:text-base font-semibold font-poppins transition-all duration-200 ${
                  activeTab === tab.key
                    ? "text-white shadow-lg"
                    : "text-gray-600 hover:text-[#453abc] hover:bg-[#453abc]/5"
                }`}
                style={
                  activeTab === tab.key
                    ? {
                        background:
                          "linear-gradient(95deg, rgb(69, 58, 188) 0%, rgb(96, 195, 227) 100%)",
                      }
                    : undefined
                }
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <ServicesGridSection services={filtered} />

      <CTASection />
      <FAQ {...servicesFAQ} />
    </main>
  );
}

