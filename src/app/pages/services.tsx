import { systemsData } from "../data/servicesData";
import { seoServicesData } from "../data/seoServicesData";
import SEO from "../components/ui/SEO";
import { FAQ } from "../components/ui/FAQ";
import { servicesFAQ } from "../data/faqData";
import { HeroSection } from "../components/services/HeroSection";
import { ServicesGridSection } from "../components/services/ServicesGridSection";
import { CTASection } from "../components/services/CTASection";

export default function ServicesPage() {
  const services = [...seoServicesData, ...systemsData];

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#f8f9fa] to-[#eef2f7]">
      <SEO
        title="Web & Software Development Services"
        description="Comprehensive web development, ERP, CRM, and custom software services. TechTide Corporate LLP helps businesses automate and scale with modern technologies."
        keywords="ERP development, CRM systems, custom web applications, e-commerce development, business automation, software consultancy, TechTide services"
      />
      <HeroSection />
      <ServicesGridSection services={services} />
      <CTASection />
      <FAQ {...servicesFAQ} />
    </main>
  );
}
