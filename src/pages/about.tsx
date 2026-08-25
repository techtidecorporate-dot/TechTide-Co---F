import { useEffect } from "react";
import SEO from "../components/ui/SEO";
import { FAQ } from "../components/ui/FAQ";
import { aboutFAQ } from "../data/faqData";
import { useLocation } from "react-router-dom";
import {
  HeroSection,
  OverviewSection,
  MissionVisionSection,
  CoreValuesSection,
  CTASection,
} from "../components/about";
import { LeadershipSection } from "@/components/landing";

export default function AboutPage() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "start" }), 100);
      }
    }
  }, [location.hash]);

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#f8f9fa] to-[#eef2f7]">
      <SEO
        title="About Us"
        description="Learn about TechTide Corporate LLP - a leading software development company delivering web, mobile, and enterprise solutions."
        keywords="about TechTide, software company Lahore, web development agency, digital solutions provider, TechTide Corporate LLP"
        ogType="website"
        ogImage="/og-about.jpg" // dedicated image for this page, not the landing page's
        ogImageAlt="About TechTide Corporate LLP — our team and mission"
      />

      <HeroSection />
      <OverviewSection />
      <MissionVisionSection />
      <LeadershipSection />
      <CoreValuesSection />
      <CTASection />
      <FAQ {...aboutFAQ} />
    </main>
  );
}
