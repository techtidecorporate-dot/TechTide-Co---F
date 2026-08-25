import React, { lazy, Suspense } from "react";
import { HeroSection } from "../components/landing";
import SEO from "../components/ui/SEO";

// Lazy load sections below the fold
const ProblemSection = lazy(() => import("../components/landing").then(m => ({ default: m.ProblemSection })));
const SolutionSection = lazy(() => import("../components/landing").then(m => ({ default: m.SolutionSection })));
const HowWeWorkSection = lazy(() => import("../components/landing").then(m => ({ default: m.HowWeWorkSection })));
const TechStackSection = lazy(() => import("../components/landing").then(m => ({ default: m.TechStackSection })));
const ServicesSection = lazy(() => import("../components/landing").then(m => ({ default: m.ServicesSection })));
const ProjectsSection = lazy(() => import("../components/landing").then(m => ({ default: m.ProjectsSection })));
const BlogSection = lazy(() => import("../components/landing").then(m => ({ default: m.BlogSection })));
const TestimonialsSection = lazy(() => import("../components/landing").then(m => ({ default: m.Testimonials })));
const SupportSection = lazy(() => import("../components/landing").then(m => ({ default: m.SupportSection })));
const WhyChooseUs = lazy(() => import("../components/landing").then(m => ({ default: m.WhyChooseUs })));
const LeadershipSection = lazy(() => import("../components/landing").then(m => ({ default: m.LeadershipSection })));
// Loading placeholder for sections
const SectionPlaceholder = () => <div className="h-40 bg-gray-50/50 animate-pulse" />;

const LandingPage: React.FC = () => {
  return (
    <>
      <main className="flex flex-col min-h-screen bg-gradient-to-b from-[#f8f9fa] to-[#eef2f7]">

        <SEO
          title="TechTide Corporate | High-Converting Websites & Digital Sales Systems"
          description="We help businesses generate 3-5x more leads through high-performance websites, conversion optimization, and scalable digital systems. Transform your online presence into a revenue-generating machine with TechTide Corporate."
          keywords="lead generation websites, conversion rate optimization, sales funnels, custom software development, high-converting web design, digital growth systems, TechTide Corporate"
          ogType="website"
          ogImage="/og-landing.jpg" // a dedicated hero/preview image for the homepage, not the generic default
          ogImageAlt="TechTide Corporate — High-converting websites and digital sales systems"
        />
        <HeroSection />
        <Suspense fallback={<SectionPlaceholder />}>
          <ProblemSection />
        </Suspense>
        <Suspense fallback={<SectionPlaceholder />}>
          <SolutionSection />
        </Suspense>
        <Suspense fallback={<SectionPlaceholder />}>
          <ServicesSection />
        </Suspense>
        <Suspense fallback={<SectionPlaceholder />}>
          <HowWeWorkSection />
        </Suspense>
        <Suspense fallback={<SectionPlaceholder />}>
          <TechStackSection />
        </Suspense>
        <Suspense fallback={<SectionPlaceholder />}>
          <WhyChooseUs />
        </Suspense>


        {/* <Suspense fallback={<SectionPlaceholder />}>
          <LeadershipSection />
        </Suspense> */}
        {/* <Suspense fallback={<SectionPlaceholder />}>
          <ProjectsSection />
        </Suspense> */}
        <Suspense fallback={<SectionPlaceholder />}>
          <BlogSection />
        </Suspense>
        {/* <Suspense fallback={<SectionPlaceholder />}>
          <TestimonialsSection />
        </Suspense> */}
        <Suspense fallback={<SectionPlaceholder />}>
          <SupportSection />
        </Suspense>
      </main>
    </>
  );
};

export default LandingPage;