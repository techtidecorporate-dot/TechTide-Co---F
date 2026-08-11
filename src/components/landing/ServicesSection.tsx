import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { systemsData } from "../../data/servicesData";
import { marketingExpertise, businessGrowthExpertise } from "../../data/marketingServicesData";

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  slug: string;
  priority?: boolean;
}

function ServiceCard({ title, description, image, slug, priority }: ServiceCardProps) {
  return (
    <Link to={`/services/${slug}`} className="block">
      <article className="bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
        {/* Image */}
        <figure className="relative h-[140px] sm:h-[180px] m-3 sm:m-4 rounded-lg overflow-hidden">
          <img
            alt={`Illustration of ${title} services`}
            className="w-full h-full object-cover"
            src={image}
            loading="eager"
            fetchPriority={priority ? "high" : "auto"}
            decoding="sync"
          />
        </figure>

        {/* Content */}
        <div className="px-4 sm:px-5 pb-4 sm:pb-5 space-y-2 sm:space-y-3">
          <h3 className="text-[#191a23] text-sm sm:text-lg font-bold">{title}</h3>

          <p className="text-[#6b7280] text-sm leading-relaxed line-clamp-3">{description}</p>

          <button
            onClick={(e) => {
              e.preventDefault();
              window.dispatchEvent(new CustomEvent("open-partner-drawer"));
            }}
            className="w-full py-2.5 rounded-lg text-white font-medium shadow-md transition-all hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 text-xs sm:text-sm mt-auto"
            style={{
              backgroundImage:
                "linear-gradient(93.1835deg, rgb(69, 58, 188) 0%, rgb(96, 195, 227) 103.41%)",
            }}
          >
            Get in touch
          </button>
        </div>
      </article>
    </Link>
  );
}

const featuredSlugs = [
  "web-applications",
  "custom-software",
  "ecommerce-development",
  "saas-product-development",
  "ui-ux-design",
  "api-integration",
  "maintenance-support",
];

export function ServicesSection() {
  const techServices = featuredSlugs
    .map((slug) => systemsData.find((s) => s.slug === slug))
    .filter(Boolean) as typeof systemsData;

  const services = [...techServices, ...marketingExpertise, ...businessGrowthExpertise];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  /* Preload every service image immediately on mount so the carousel
     never shows a blank/late-loading image when a slide comes into view */
  useEffect(() => {
    services.forEach((service) => {
      const img = new Image();
      img.src = service.image;
    });
  }, []);

  /* 🔁 Auto slide */
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev === services.length - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const handlePrevious = () => {
    setIsPaused(true);
    setActiveIndex((prev) => (prev === 0 ? services.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIsPaused(true);
    setActiveIndex((prev) => (prev === services.length - 1 ? 0 : prev + 1));
  };

  const getDistance = (index: number) => {
    let diff = index - activeIndex;
    if (diff > services.length / 2) diff -= services.length;
    if (diff < -services.length / 2) diff += services.length;
    return diff;
  };

  return (
    <section
      id="services"
      className="relative bg-white overflow-hidden py-16 md:py-24"
    >
      {/* Header */}
      <div className="flex flex-col gap-3 items-center text-center mb-12 md:mb-16 px-4 sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[1.75rem] sm:text-4xl md:text-6xl  font-bold leading-[1.1]"
        >
          Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#453abc] to-[#60c3e3]">Services</span>
        </motion.h2>

        <p className="text-[#6b7280] max-w-2xl text-sm sm:text-base md:text-xl">End-to-End Digital Solutions for Growing Businesses</p>
      </div>

      {/* Slider Container */}
      <div
        className="relative max-w-[1440px] mx-auto h-[440px] sm:h-[480px] md:h-[520px] flex items-center justify-center"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="relative w-full h-full flex items-center justify-center">
          {services.map((service, index) => {
            const distance = getDistance(index);
            const isVisible = Math.abs(distance) <= 2;
            const win = typeof window !== "undefined" ? window.innerWidth : 9999;
            const isMobile = win < 768;
            const isSmallPhone = win < 400;

            // Clamping distance for X only prevents "flying" across the center during wrap
            const xDistance = Math.max(-3, Math.min(3, distance));

            // Positioning constants
            const desktopSpacing = 200;
            const mobileSpacing = isSmallPhone ? 100 : 140;

            const x = isMobile
              ? xDistance * mobileSpacing
              : xDistance * desktopSpacing;

            // Visual properties based on distance
            const scale = isVisible ? 1 - Math.abs(distance) * 0.12 : 0.6;
            const opacity = isVisible ? 1 - Math.abs(distance) * 0.35 : 0;
            const zIndex = 30 - Math.abs(distance) * 10;
            const blur = isVisible ? Math.abs(distance) * 2 : 8;

            return (
              <motion.div
                key={service.id}
                className="absolute w-[260px] sm:w-[280px] md:w-[320px]"
                animate={{
                  x,
                  scale,
                  opacity,
                  filter: `blur(${blur}px)`,
                  z: 0,
                }}
                style={{
                  zIndex,
                  pointerEvents: distance === 0 ? "auto" : "none",
                  willChange: "transform, opacity, filter",
                }}
                transition={{
                  duration: 0.2,
                  ease: "easeOut",
                }}
              >
                <ServiceCard
                  title={service.title}
                  description={service.shortDescription}
                  image={service.image}
                  slug={service.slug}
                  priority={Math.abs(distance) <= 2}
                />
              </motion.div>
            );
          })}
        </div>

        {/* Controls */}
        <div className="absolute inset-x-2 sm:inset-x-4 md:inset-x-10 flex justify-between items-center pointer-events-none z-40">
          <button
            onClick={handlePrevious}
            aria-label="Previous service"
            className="pointer-events-auto bg-white/90 backdrop-blur border border-gray-200 p-2 md:p-3 rounded-full shadow-lg hover:bg-white transition-all hover:scale-110 active:scale-90"
          >
            <ChevronLeft size={20} className="md:size-6 text-[#453abc]" />
          </button>

          <button
            onClick={handleNext}
            aria-label="Next service"
            className="pointer-events-auto bg-white/90 backdrop-blur border border-gray-200 p-2 md:p-3 rounded-full shadow-lg hover:bg-white transition-all hover:scale-110 active:scale-90"
          >
            <ChevronRight size={20} className="md:size-6 text-[#453abc]" />
          </button>
        </div>
      </div>
    </section>
  );
}
