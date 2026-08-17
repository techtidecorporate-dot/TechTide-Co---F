import SEO from "../components/ui/SEO";
import {
  HeroSection,
  CorporateInfoSection,
  CertificationsSection,
  OfficesSection,
  IndustriesSection,
  CTASection,
} from "../components/company-profile";

export default function CompanyProfile() {
  return (
    <main className="pb-20 min-h-screen bg-gradient-to-b from-[#f8f9fa] to-[#eef2f7]">
      <SEO
        title="Company Profile"
        description="Company Profile of TechTide Corporate LLP. View our corporate information, certifications, offices, and industries served."
        keywords="TechTide Corporate LLP company profile, software company Lahore, registered LLP Pakistan, digital solutions provider"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "TechTide Corporate LLP",
          url: "https://techtidecorporate.com",
          logo: "https://techtidecorporate.com/brand-logo-dark.svg",
          description: "Company Profile of TechTide Corporate LLP. View our corporate information, certifications, offices, and industries served.",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Lahore",
            addressCountry: "PK",
          },
          // add real values — placeholders below
          // sameAs: ["https://linkedin.com/company/...", "https://twitter.com/..."],
          foundingDate: "2025",
        }}
      />
      <HeroSection />
      <CorporateInfoSection />
      <CertificationsSection />
      <OfficesSection />
      <IndustriesSection />
      <CTASection />
    </main>
  );
}
