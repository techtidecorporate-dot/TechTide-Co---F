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
    <>
      <div className="flex flex-col min-h-screen bg-gradient-to-b from-[#f8f9fa] to-[#eef2f7]">
        <SEO
          title="TechTide Corporate LLP | Global Web, Mobile App & SaaS Development Company"
          description="TechTide Corporate LLP is a leading web and software development agency serving the UK, USA, Canada, Germany, and Europe. We specialize in custom web development, mobile app development (iOS, Android, Flutter), SaaS solutions, and AI software. Partner with our Pakistan-based team for premium quality at competitive rates."
          keywords="web development company UK, mobile app development USA, SaaS development Canada, software development company Germany, custom software development UK, AI software development USA, bespoke web development, React development agency, Pakistan based software company"
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
    </>
  );
};

export default LandingPage;
