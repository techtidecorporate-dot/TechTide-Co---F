import React, { lazy, Suspense } from "react";
import { HeroSection } from "../components/landing";
import SEO from "../components/ui/SEO";

// Lazy load sections below the fold
const ProblemSection = lazy(() => import("../components/landing").then(m => ({ default: m.ProblemSection })));
const SolutionSection = lazy(() => import("../components/landing").then(m => ({ default: m.SolutionSection })));
const ServicesSection = lazy(() => import("../components/landing").then(m => ({ default: m.ServicesSection })));
const ProjectsSection = lazy(() => import("../components/landing").then(m => ({ default: m.ProjectsSection })));
const LeadershipSection = lazy(() => import("../components/landing").then(m => ({ default: m.LeadershipSection })));
const BlogSection = lazy(() => import("../components/landing").then(m => ({ default: m.BlogSection })));
const SupportSection = lazy(() => import("../components/landing").then(m => ({ default: m.SupportSection })));
const WhyChooseUs = lazy(() => import("../components/landing").then(m => ({ default: m.WhyChooseUs })));
const FAQSection = lazy(() => import("../components/landing").then(m => ({ default: m.FAQSection })));

// Loading placeholder for sections
const SectionPlaceholder = () => <div className="h-40 bg-gray-50/50 animate-pulse" />;

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
        <Suspense fallback={<SectionPlaceholder />}>
          <ProblemSection />
          <SolutionSection />
          <ServicesSection />
          <WhyChooseUs />
          <FAQSection />
          <LeadershipSection />
          <ProjectsSection />
          <BlogSection />
          <SupportSection />
        </Suspense>
      </div>
    </>
  );
};

export default LandingPage;

