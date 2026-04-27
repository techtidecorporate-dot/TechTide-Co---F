import { useState, useEffect, SetStateAction } from "react";
import { motion } from "framer-motion";
import imgNexusClinic from "@/assets/projects/nexus.webp";
import imgRaynovaTech from "@/assets/projects/raynova.webp";
import imgSerenaiva from "@/assets/projects/sereniva.webp";
import imgAura from "@/assets/projects/winter1.webp";

const projects = [
  {
    title: "Nexus Clinic",
    problem: "A growing clinic struggling with manual appointment bookings and fragmented patient records.",
    description: "We implemented a full-scale MERN healthcare management system with secure telemedicine and automated scheduling.",
    results: "200% increase in patient bookings and 50% reduction in administrative overhead within 6 months.",
    image: imgNexusClinic,
    technologies: [
      "React",
      "Node.js",
      "MongoDB",
      "Telemedicine API",
    ],
    gradient: "from-[#453abc] to-[#60c3e3]",
  },
  {
    title: "RaynovaTech",
    problem: "Generic corporate website with high bounce rate and low visitor engagement.",
    description: "Redesigned the entire digital presence with outcome-based messaging and a performance-optimized UI.",
    results: "3x more qualified leads and 40% improvement in average time-on-site.",
    image: imgRaynovaTech,
    technologies: [
      "React",
      "Tailwind CSS",
      "SEO Strategy",
      "Conversion Tracking",
    ],
    gradient: "from-[#453abc] via-[#557de3] to-[#60c3e3]",
  },
  {
    title: "Sereniva Wellness",
    problem: "Manual spa booking process leading to scheduling conflicts and lost revenue.",
    description: "Built a premium wellness management SPA with real-time therapist availability and automated reminders.",
    results: "Automated 85% of bookings and zero scheduling conflicts since launch.",
    image: imgSerenaiva,
    technologies: [
      "SPA Architecture",
      "Firebase",
      "Real-time Sync",
      "Framer Motion",
    ],
    gradient: "from-[#60c3e3] to-[#453abc]",
  },
  {
    title: "Aura Commerce",
    problem: "Traditional e-commerce stagnant sales and high cart abandonment.",
    description: "Integrated immersive AR shopping experiences to let customers try products virtually.",
    results: "50% increase in engagement and 25% reduction in product returns.",
    image: imgAura,
    technologies: [
      "AR Web Experience",
      "MERN Stack",
      "AWS Infrastructure",
      "Performance UX",
    ],
    gradient: "from-[#453abc] via-[#60c3e3] to-[#453abc]",
  },
];

export function ProjectsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const activeProject = projects[activeIndex];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % projects.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handleThumbnailClick = (index: SetStateAction<number>) => {
    setIsAutoPlaying(false);
    setActiveIndex(index);
  };

  return (
    <section
      className="relative bg-white py-20 md:py-32 overflow-hidden"
      id="projects"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-[#453abc]/5 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse"></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-[#60c3e3]/5 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      {/* Header */}
      <div className="relative text-center mb-16 md:mb-24 px-6">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-poppins font-bold mb-6 text-gray-900 tracking-tight">
          Success Stories &{" "}
          <span className="bg-gradient-to-r from-[#453abc] to-[#60c3e3] bg-clip-text text-transparent">
            Case Studies
          </span>
        </h2>

        <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
          Real businesses. Real problems. Measurable results.
        </p>
      </div>

      {/* Main Content - Image Left, Info Right */}
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          {/* Left Side - Project Image */}
          <div className="relative group order-2 lg:order-1">
            <div className="absolute -inset-4 bg-gradient-to-r from-[#453abc] to-[#60c3e3] rounded-[2.5rem] blur-2xl opacity-10 group-hover:opacity-20 transition-opacity duration-700"></div>

            <div className="relative bg-white rounded-[2rem] p-1 shadow-xl border border-gray-100">
              <div className="relative overflow-hidden rounded-[1rem] aspect-[16/9]">
                <motion.img
                  key={activeProject.title}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  src={activeProject.image}
                  alt={activeProject.title}
                  className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />

                {/* Gradient Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-tr ${activeProject.gradient} opacity-5 mix-blend-overlay`}
                ></div>
              </div>
            </div>
          </div>

          {/* Right Side - Project Info */}
          <div className="space-y-8 order-1 lg:order-2">
            <motion.div
              key={`content-${activeIndex}`}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              {/* Title */}
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-poppins font-bold mb-6 text-gray-900 leading-[1.15]">
                {activeProject.title}
              </h3>

              {/* Problem */}
              <div className="mb-6">
                <p className="text-sm font-bold text-[#453abc] uppercase tracking-widest mb-2">
                  The Problem
                </p>
                <p className="text-gray-900 font-medium italic">
                  "{activeProject.problem}"
                </p>
              </div>

              {/* Description */}
              <div className="mb-8">
                <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                  {activeProject.description}
                </p>
              </div>

              {/* Results */}
              <div className="mb-8 p-6 bg-gradient-to-br from-[#453abc]/5 to-[#60c3e3]/5 rounded-2xl border border-[#453abc]/10">
                <p className="text-sm font-bold text-[#453abc] uppercase tracking-widest mb-2">
                  Measurable Results
                </p>
                <p className="text-2xl md:text-3xl font-poppins font-bold text-gray-900">
                  {activeProject.results}
                </p>
              </div>

              {/* Technologies */}
              <div className="space-y-4 mb-8">
                <p className="text-sm font-bold text-gray-500 uppercase tracking-widest">
                  Solution Tech Stack
                </p>
                <div className="flex flex-wrap gap-3">
                  {activeProject.technologies.map((tech, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      className="group px-4 py-2 text-xs font-semibold rounded-lg bg-white text-slate-700 border border-slate-200 shadow-sm"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Thumbnail Gallery & Dots combined for tighter UX */}
        <div className="flex flex-col items-center gap-8 mt-12 md:mt-20">
          <div className="flex justify-center items-center gap-4 px-4 overflow-x-auto pb-6 scrollbar-hide w-full max-w-4xl">
            {projects.map((project, index) => (
              <button
                key={index}
                onClick={() => handleThumbnailClick(index)}
                aria-label={`View ${project.title} details`}
                className={`relative flex-shrink-0 group transition-all duration-500 ${
                  activeIndex === index
                    ? "scale-100"
                    : "scale-90 opacity-40 hover:opacity-100 hover:scale-95"
                }`}
              >
                {/* Thumbnail Container */}
                <div
                  className={`relative overflow-hidden rounded-2xl border-2 transition-all duration-500 w-24 h-16 md:w-32 md:h-20 ${
                    activeIndex === index
                      ? "border-[#453abc] shadow-2xl"
                      : "border-transparent shadow-md"
                  }`}
                >
                  <img
                    src={project.image}
                    alt=""
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                  {/* Overlay */}
                  <div
                    className={`absolute inset-0 bg-[#453abc] transition-opacity duration-300 ${
                      activeIndex === index
                        ? "opacity-0"
                        : "opacity-0 group-hover:opacity-10"
                    }`}
                  ></div>
                </div>
              </button>
            ))}
          </div>

          {/* Progress Indicator - Increased touch target */}
          <div className="flex gap-4 p-2">
            {projects.map((project, index) => (
              <button
                key={index}
                onClick={() => handleThumbnailClick(index)}
                aria-label={`Go to ${project.title} slide`}
                className="group relative p-2"
              >
                <div className={`h-2 transition-all duration-500 rounded-full ${
                  activeIndex === index
                    ? "w-8 bg-gradient-to-r from-[#453abc] to-[#60c3e3]"
                    : "w-2 bg-gray-300 group-hover:bg-gray-400"
                }`} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
