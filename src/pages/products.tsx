import SEO from "../components/ui/SEO";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { projects } from "../components/landing/ProjectsSection";
import { HeroSection } from "../components/products";

export default function ProductsPage() {
  return (
    <main className="bg-gradient-to-b from-[#f8f9fa] to-[#eef2f7]">
      <SEO
        title="Products"
        description="Discover TechTide Corporate LLP's product suite — SaaS tools, custom enterprise platforms, and ready-to-deploy solutions built for scalable business growth."
        keywords="TechTide products, SaaS products, enterprise software solutions, business automation tools, custom platform development"
      />

      <HeroSection />

      <section
        className="relative bg-white py-16 md:py-28 overflow-hidden"
        style={{ contentVisibility: "auto", containIntrinsicSize: "500px" }}
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-96 h-96 bg-[#453abc]/5 rounded-full mix-blend-multiply filter blur-3xl opacity-50" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#60c3e3]/5 rounded-full mix-blend-multiply filter blur-3xl opacity-50" />
        </div>

        <div className="container relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {projects.map((project, i) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="group flex flex-col overflow-hidden rounded-3xl border border-transparent bg-white shadow-[0_15px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_30px_60px_rgba(69,58,188,0.12)] transition-all duration-500"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="max-h-[350px] w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-tr ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-500`} />
                  <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-[#453abc] backdrop-blur-sm shadow-sm">
                    {project.category}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6 md:p-7">
                  <h3 className="mb-3 text-2xl font-bold text-[#191a23] transition-colors duration-300 group-hover/link:text-[#453abc]">
                    {project.title}
                  </h3>

                  <p className="mb-5 flex-1 text-sm leading-relaxed text-[#6b7280]">
                    {project.description}
                  </p>

                  <div className="mb-5 rounded-xl border border-[#453abc]/10 bg-gradient-to-br from-[#453abc]/5 to-[#60c3e3]/5 p-4">
                    <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#453abc]">
                      Result
                    </p>
                    <p className="text-sm font-semibold leading-snug text-[#191a23]">{project.results}</p>
                  </div>

                  <div className="mb-6 flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-700"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="rounded-full bg-[#453abc]/5 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#453abc]">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  {/* <div className="mt-auto border-t border-gray-50 pt-4">
                    <Link
                      to={`/projects/${project.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-[#453abc] transition-all duration-300 hover:gap-3"
                    >
                      Explore product
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div> */}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}