import React from "react";
import {
  HeroSection,
  VisionMissionSection,
  ServicesSection,
  ProjectsSection,
  TeamSection,
  LeadershipSection,
  BlogSection,
  SupportSection,
} from "../components/landing";

import SEO from "../components/ui/SEO";

const LandingPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-[#f8f9fa] to-[#eef2f7]">
      <SEO
        title="TechTide Corporate LLP | Leading Web & Software Development Agency"
        description="TechTide Corporate LLP is a premier web development agency specializing in custom software, UI/UX design, and digital transformation. We help businesses scale with cutting-edge technology solutions."
        keywords="web development, software company, custom software development, UI/UX design agency, React development, eCommerce solutions, digital transformation, enterprise software, TechTide, TechTide Corporate"
      />
      <HeroSection />
      <ServicesSection />
      <VisionMissionSection />
      <ProjectsSection />
      <TeamSection />
      <LeadershipSection />
      <BlogSection />
      <SupportSection />
    </div>
  );
};

export default LandingPage;
