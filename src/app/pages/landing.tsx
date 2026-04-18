import React from "react";
import {
  HeroSection,
  ProblemSection,
  SolutionSection,
  ServicesSection,
  ProjectsSection,
  LeadershipSection,
  BlogSection,
  SupportSection,
  WhyChooseUs,
} from "../components/landing";

import SEO from "../components/ui/SEO";

const LandingPage: React.FC = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen bg-gradient-to-b from-[#f8f9fa] to-[#eef2f7]">
        <SEO
          title="TechTide Corporate | High-Converting Websites & Digital Sales Systems"
          description="We help businesses generate 3-5x more leads through high-performance websites, conversion optimization, and scalable digital systems. Transform your online presence into a revenue-generating machine with TechTide Corporate."
          keywords="lead generation websites, conversion rate optimization, sales funnels, custom software development, high-converting web design, digital growth systems, TechTide Corporate"
        />
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <ServicesSection />
        <WhyChooseUs />
        <LeadershipSection />
        <ProjectsSection />
        <BlogSection />
        <SupportSection />
      </div>
    </>
  );
};

export default LandingPage;
