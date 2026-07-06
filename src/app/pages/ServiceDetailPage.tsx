import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { systemsData, SystemItem } from "../data/servicesData";
import { seoServicesData } from "../data/seoServicesData";
import { marketingExpertise, businessGrowthExpertise } from "../data/marketingServicesData";
import SEO from "../components/ui/SEO";
import { RichHeroSection } from "../components/service-detail/RichHeroSection";
import { IntroductionSection } from "../components/service-detail/IntroductionSection";
import { OfferingsSection } from "../components/service-detail/OfferingsSection";
import { SolutionsSection } from "../components/service-detail/SolutionsSection";
import { PerfectForSection } from "../components/service-detail/PerfectForSection";
import { BusinessOutcomesSection } from "../components/service-detail/BusinessOutcomesSection";
import { BenefitsSection } from "../components/service-detail/BenefitsSection";
import { UseCasesSection } from "../components/service-detail/UseCasesSection";
import { RichCTASection } from "../components/service-detail/RichCTASection";
import { FallbackLayout } from "../components/service-detail/FallbackLayout";
import { ServiceNotFound } from "../components/service-detail/ServiceNotFound";
import { FAQSection } from "../components/service-detail/FAQSection";

export default function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const [service, setService] = useState<SystemItem | null>(null);

  useEffect(() => {
    if (slug) {
      const allServices = [...seoServicesData, ...systemsData, ...marketingExpertise, ...businessGrowthExpertise];
      const foundService = allServices.find((s) => s.slug === slug);
      setService(foundService || null);
    }
  }, [slug]);

  const hasRichContent = (s: SystemItem) =>
    s.introContent || s.benefits || s.processSteps || s.industryUseCases || s.usps;

  if (!service) {
    return <ServiceNotFound />;
  }

  /* ---- Rich SEO Page Layout ---- */
  if (hasRichContent(service)) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#f9fafb] via-[#fcfcfd] to-white">
        <SEO
          title={service.seoTitle || service.title}
          description={service.seoDescription || service.shortDescription}
          keywords={service.seoKeywords?.join(", ") || `${service.title}, web development, custom software`}
          ogImage={service.image}
          ogUrl={`https://techtidecorporate.com/services/${service.slug}`}
        />

        <RichHeroSection service={service} />

        {service.perfectFor && service.perfectFor.length > 0 && (
          <PerfectForSection perfectFor={service.perfectFor} />
        )}

        {service.introContent && (
          <IntroductionSection introContent={service.introContent} />
        )}

        {service.solutionCategories && service.solutionCategories.length > 0 ? (
          <SolutionsSection
            solutionCategories={service.solutionCategories}
          />
        ) : service.servicesContent && service.servicesContent.length > 0 && (
          <OfferingsSection
            servicesContent={service.servicesContent}
            title={service.title.split("|")[0].trim().split("&")[0].trim()}
          />
        )}

        {service.benefits && service.benefits.length > 0 && (
          <BenefitsSection benefits={service.benefits} />
        )}

        {service.businessOutcomes && service.businessOutcomes.length > 0 && (
          <BusinessOutcomesSection businessOutcomes={service.businessOutcomes} />
        )}

        {service.industryUseCases && service.industryUseCases.length > 0 && (
          <UseCasesSection industryUseCases={service.industryUseCases} />
        )}

        {service.faqs && service.faqs.length > 0 && (
          <FAQSection faqs={service.faqs} title={service.title} />
        )}

        <RichCTASection service={service} />
      </div>
    );
  }

  /* ---- Fallback: Original Simple Layout ---- */
  return (
    <div className="py-24 ">
      <SEO
        title={service.title}
        description={service.shortDescription}
        keywords={`${service.title}, web development, custom software, ${service.features?.slice(0, 3).join(", ")}`}
        ogImage={service.image}
        ogUrl={`https://techtidecorporate.com/services/${service.slug}`}
      />
      <FallbackLayout service={service} />

      {service.faqs && service.faqs.length > 0 && (
        <FAQSection faqs={service.faqs} title={service.title} />
      )}
    </div>
  );
}
