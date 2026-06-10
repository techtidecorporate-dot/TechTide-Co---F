import { systemsData } from "../data/servicesData";
import { marketingExpertise, businessGrowthExpertise } from "../data/marketingServicesData";
import SEO from "../components/ui/SEO";
import { FAQ } from "../components/ui/FAQ";
import { servicesFAQ } from "../data/faqData";
import { HeroSection } from "../components/services/HeroSection";
import { ServicesGridSection } from "../components/services/ServicesGridSection";
import { CTASection } from "../components/services/CTASection";

const SectionHeading = ({ title, subtitle }: { title: string; subtitle: string }) => (
  <div className="max-w-7xl mx-auto px-6 md:px-8 pt-16 md:pt-20 pb-4">
    <h2 className="text-3xl md:text-4xl font-bold text-[#191a23] mb-3">{title}</h2>
    <p className="text-gray-600 text-base md:text-lg max-w-3xl">{subtitle}</p>
  </div>
);

const dropdownSlugs = new Set([
  "web-applications", "mobile-applications", "custom-software",
  "saas-product-development", "api-integration", "business-automation-systems",
  "machine-learning", "ai-automation", "generative-ai",
  "ui-ux-design", "brand-identity",
]);

export default function ServicesPage() {
  const techServices = systemsData.filter((s) => dropdownSlugs.has(s.slug));

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#f8f9fa] to-[#eef2f7]">
      <SEO
        title="Web Development, Marketing & Business Growth Services"
        description="Comprehensive web development, marketing expertise, and business growth services. TechTide Corporate LLP helps businesses build, market, and scale."
        keywords="web development, digital marketing, business growth, SEO, lead generation, CRM integration, TechTide services"
      />

      <HeroSection />

      <SectionHeading
        title="Technology & Development"
        subtitle="Custom software, web applications, and technical solutions engineered for performance and scalability."
      />
      <ServicesGridSection services={techServices} />

      <SectionHeading
        title="Marketing Expertise We Provide"
        subtitle="Data-driven marketing strategies that attract, engage, and convert your ideal customers."
      />
      <ServicesGridSection services={marketingExpertise} />

      <SectionHeading
        title="Business Growth Expertise We Provide"
        subtitle="Systems and strategies to build predictable revenue, align your teams, and scale sustainably."
      />
      <ServicesGridSection services={businessGrowthExpertise} />

      <CTASection />
      <FAQ {...servicesFAQ} />
    </main>
  );
}
