import SEO from "../components/ui/SEO";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "../components/landing/ProjectsSection";

export default function ProductsPage() {
  return (
    <main className="bg-gradient-to-b from-[#f8f9fa] to-[#eef2f7]">
      <SEO
        title="Products"
        description="Explore TechTide Corporate LLP's innovative products."
        keywords="TechTide products, software products"
      />

      <section
        className="relative bg-white py-16 md:py-28 overflow-hidden"
        style={{ contentVisibility: "auto", containIntrinsicSize: "500px" }}
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-96 h-96 bg-[#453abc]/5 rounded-full mix-blend-multiply filter blur-3xl opacity-50" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#60c3e3]/5 rounded-full mix-blend-multiply filter blur-3xl opacity-50" />
        </div>

        <div className="relative text-center mb-12 md:mb-20 px-4 sm:px-6">
          <span className="inline-block text-xs font-semibold tracking-[0.2em] text-[#453abc] uppercase mb-4 px-3 py-1.5 rounded-full bg-[#453abc]/10">
            Our Products
          </span>
          <h1 className="text-[1.75rem] sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-[#191a23] tracking-tight">
            Built for how modern teams <span className="bg-gradient-to-r from-[#453abc] to-[#60c3e3] bg-clip-text text-transparent">work</span>
          </h1>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
            Four focused products, one connected ecosystem designed to help businesses move faster, grow smarter, and operate with more certainty.
          </p>
        </div>

        <div className="container relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="group relative bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 ease-out flex flex-col"
              >
                <div className={`absolute top-0 left-0 right-0 h-1 rounded-t-2xl bg-gradient-to-r ${project.gradient} opacity-80 group-hover:opacity-100 transition-opacity`} />

                <div className="flex items-center justify-between mb-5">
                  <div className={`size-12 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center shadow-md shadow-[#453abc]/20 group-hover:scale-105 transition-transform`}>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-8 h-8 object-cover rounded-lg"
                    />
                  </div>
                  <span className="text-[11px] font-mono text-gray-400 tracking-wider">{project.category}</span>
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-1">{project.title}</h3>
                <p className="text-sm font-medium text-[#453abc] mb-3">{project.category}</p>
                <p className="text-sm text-gray-600 leading-relaxed mb-6 flex-1">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.technologies.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium text-gray-600 bg-gray-50 border border-gray-100 rounded-full px-2.5 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <button className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#453abc] hover:gap-2.5 transition-all self-start">
                  Learn more
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}