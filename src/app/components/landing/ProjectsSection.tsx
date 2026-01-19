import { useState, useEffect, SetStateAction } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";
import { motion } from "framer-motion";

import imgNexusClinic from "@/assets/nexus.webp";
import imgRaynovaTech from "@/assets/raynova.webp";
import imgSerenaiva from "@/assets/sereniva.webp";
import imgAura from "@/assets/winter1.webp";

const projects = [
  {
    title: "Nexus Clinic",
    description:
      "Nexus Clinic is a full-scale MERN healthcare management system designed to connect patients, doctors, and clinic administrators. It offers secure authentication, appointment booking, telemedicine, medical record management, and role-based dashboards to streamline clinical operations.",
    image: imgNexusClinic,
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Cloudinary",
    ],
    gradient: "from-[#453abc] to-[#60c3e3]",
  },
  {
    title: "RaynovaTech Website",
    description:
      "RaynovaTech is a modern corporate technology and solutions website showcasing innovative IT services, digital solutions, and enterprise-grade offerings. This project highlights responsive design, intuitive navigation, and engaging UI to present the brand effectively online.",
    image: imgRaynovaTech,
    technologies: [
      "React",
      "Tailwind CSS",
      "Responsive Web Design",
      "SEO Optimization",
      "JavaScript",
      "UI/UX Design",
    ],
    gradient: "from-[#453abc] via-[#557de3] to-[#60c3e3]",
  },
  {
    title: "Sereniva ",
    description:
      "Sereniva is a premium spa and wellness management Single Page Application that enables clients to explore services, book therapists, manage profiles, and leave reviews, while administrators efficiently control bookings, content, users, and operations through a powerful dashboard.",
    image: imgSerenaiva,
    technologies: [
      "React",
      "Tailwind CSS",
      "Firebase",
      "SPA Architecture",
      "Responsive UI",
      "Framer Motion",
      "GSAP",
      "React Router",
    ],
    gradient: "from-[#60c3e3] to-[#453abc]",
  },
  {
    title: "Aura Commerce",
    description:
      "Aura Commerce is a premium e-commerce platform that blends immersive UI design with augmented reality shopping. Built with the MERN frontend stack, it enables users to explore products dynamically, experience seasonal themes, try products virtually using AR, and complete secure purchases through a high-performance, visually rich shopping interface.",
    image: imgAura,
    technologies: [
      "React ",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "AR Web Experience",
      "Node.js",
      "Express.js",
      "MongoDB",
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

  const handleNext = () => {
    setIsAutoPlaying(false);
    setActiveIndex((prev) => (prev + 1) % projects.length);
  };

  const handlePrev = () => {
    setIsAutoPlaying(false);
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

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
        <div className="inline-flex items-center gap-2 mb-4">
          <p className="font-poppins text-sm md:text-lg font-medium tracking-widest text-[#453abc] uppercase">
            Our Recent Work
          </p>
        </div>

        <h2 className="text-3xl md:text-5xl lg:text-6xl font-poppins font-medium mb-6 text-gray-900 tracking-tight">
          Our{" "}
          <span className="bg-gradient-to-r from-[#453abc] to-[#60c3e3] bg-clip-text text-transparent">
            Latest
          </span>{" "}
          Projects
        </h2>

        <p className="text-gray-500 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
          Browse our recent projects showcasing innovative technology solutions
          and creative digital experiences
        </p>
      </div>

      {/* Main Content - Image Left, Info Right */}
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          {/* Left Side - Project Image */}
          <div className="relative group order-2 lg:order-1">
            <div className="absolute -inset-4 bg-gradient-to-r from-[#453abc] to-[#60c3e3] rounded-[2.5rem] blur-2xl opacity-10 group-hover:opacity-20 transition-opacity duration-700"></div>

            <div className="relative bg-white rounded-[2rem] p-1 shadow-xl border border-gray-100">
              <div className="relative overflow-hidden rounded-[1.8rem] aspect-[16/9]">
                <motion.img
                  key={activeProject.title}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  src={activeProject.image}
                  alt={activeProject.title}
                  className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-105"
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

              {/* Description */}
              <p className="text-gray-500 text-base md:text-lg leading-relaxed mb-8">
                {activeProject.description}
              </p>

              {/* Technologies */}
              <div className="space-y-4 mb-8">
                <p className="text-sm font-bold text-gray-500 uppercase tracking-widest">
                  Tech Stack
                </p>
                <div className="flex flex-wrap gap-3">
                  {activeProject.technologies.map((tech, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      className="group px-5 py-2.5 text-sm font-semibold rounded-xl bg-white text-slate-700 border-2 border-slate-200 shadow-sm hover:shadow-lg hover:border-blue-300 hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 transition-all cursor-default"
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
                    alt={project.title}
                    className="w-full h-full object-cover"
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

          {/* Minimal Progress Indicator */}
          <div className="flex gap-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => handleThumbnailClick(index)}
                className={`h-1.5 transition-all duration-500 rounded-full ${
                  activeIndex === index
                    ? "w-8 bg-gradient-to-r from-[#453abc] to-[#60c3e3]"
                    : "w-1.5 bg-gray-200"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
