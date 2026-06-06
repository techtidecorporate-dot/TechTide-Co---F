import SEO from "../components/ui/SEO";
import {
  HeroSection,
  CorporateInfoSection,
  StatsSection,
  CertificationsSection,
  OfficesSection,
  IndustriesSection,
  CTASection,
} from "../components/company-profile";

export default function CompanyProfile() {
  return (
    <main className="pt-32 pb-20 min-h-screen bg-gradient-to-b from-[#f8f9fa] to-[#eef2f7]">
      <SEO
        title="Company Profile"
        description="Company Profile of TechTide Corporate LLP. View our corporate information, certifications, offices, and industries served."
        keywords="TechTide Corporate LLP company profile, software company Lahore, registered LLP Pakistan, digital solutions provider"
      />
      <HeroSection />
      <CorporateInfoSection />
      <StatsSection />
      <CertificationsSection />
      <OfficesSection />
      <IndustriesSection />
      <CTASection />
    </main>
  );
}
