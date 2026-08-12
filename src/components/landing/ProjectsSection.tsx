import { motion } from "framer-motion";
import imgNexusClinic from "@/assets/nexus.webp";
import imgRaynovaTech from "@/assets/raynova-tech.webp";
import imgSerenaiva from "@/assets/sereniva.webp";
import imgAura from "@/assets/aura-commerce.webp";

export const projects = [
  {
    title: "Nexus Clinic",
    category: "Web Development",
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
    category: "AI Automation",
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
    category: "WordPress",
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
    category: "E-Commerce",
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
  return (
    <section
      style={{ contentVisibility: "auto", containIntrinsicSize: "500px" }}
      className="relative bg-white py-16 md:py-32 overflow-hidden"
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
      <div className="relative text-center mb-12 md:mb-24 px-4 sm:px-6">
        <h2 className="text-[1.75rem] sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-gray-900 tracking-tight">
          Success Stories &{" "}
          <span className="bg-gradient-to-r from-[#453abc] to-[#60c3e3] bg-clip-text text-transparent">
            Case Studies
          </span>
        </h2>

        <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">Real businesses. Real problems. Measurable results.</p>
      </div>

      {/* Grid of Projects */}
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white rounded-2xl border border-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_60px_rgba(69,58,188,0.12)] transition-all duration-500 overflow-hidden"
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-[16/9]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
                <div className={`absolute inset-0 bg-gradient-to-tr ${project.gradient} opacity-5 mix-blend-overlay`} />

                {/* Category Badge */}
                <span className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-sm text-[11px] font-bold uppercase tracking-widest text-[#453abc] shadow-sm">
                  {project.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6 md:p-7">
                <h3 className="text-xl md:text-2xl font-bold mb-3 text-gray-900 leading-snug">{project.title}</h3>

                <div className="mb-4">
                  <p className="text-[11px] font-bold text-[#453abc] uppercase tracking-widest mb-1.5">The Problem</p>
                  <p className="text-gray-900 text-sm font-medium italic leading-relaxed">"{project.problem}"</p>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed mb-4">{project.description}</p>

                <div className="mb-5 p-4 bg-gradient-to-br from-[#453abc]/5 to-[#60c3e3]/5 rounded-xl border border-[#453abc]/10">
                  <p className="text-[11px] font-bold text-[#453abc] uppercase tracking-widest mb-1.5">Measurable Results</p>
                  <p className="text-base md:text-lg font-bold text-gray-900 leading-snug">{project.results}</p>
                </div>

                <ul className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <li
                      key={i}
                      className="px-3 py-1.5 text-[11px] font-semibold rounded-sm bg-slate-50 text-slate-700 border border-slate-200"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
