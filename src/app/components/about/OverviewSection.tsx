import { motion } from "framer-motion";

export function OverviewSection() {
  return (
    <section id="overview" className="max-w-4xl mx-auto px-6 md:px-8 pt-16 md:pt-24 pb-20 md:pb-32 scroll-mt-24 text-center">
     
                <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#453abc] to-[#60c3e3] text-sm font-medium tracking-[0.2em] uppercase mb-4">
          Company Overview
        </p>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-poppins font-bold text-[#191a23] mb-8 leading-tight">
          Who We Are &{" "}
          <span className="bg-gradient-to-r from-[#453abc] via-[#60c3e3] to-[#453abc] bg-clip-text text-transparent">
            What We Stand For
          </span>
        </h2>
        <p className="text-[#6b7280] text-base leading-relaxed mb-4 max-w-3xl mx-auto">
          Founded in Lahore, TechTide Corporate LLP has grown from a small
          team of tech enthusiasts into a full-service software development
          company. We specialize in building custom websites, web
          applications, ERP systems, CRM platforms, and mobile apps that
          empower businesses to operate more efficiently and scale
          effectively.
        </p>
        <p className="text-[#6b7280] text-base leading-relaxed max-w-3xl mx-auto">
          Our approach is simple — understand the client's vision deeply,
          apply the right technology, and deliver with excellence. Every
          project we undertake is a partnership built on trust, transparency,
          and a shared commitment to success.
        </p>
      </motion.div>
    </section>
  );
}
