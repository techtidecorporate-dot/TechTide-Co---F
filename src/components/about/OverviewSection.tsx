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
        <h2 className="text-4xl md:text-5xl font-bold text-[#191a23] mb-8 leading-tight">
          Who We Are &{" "}
          <span className="bg-gradient-to-r from-[#453abc] via-[#60c3e3] to-[#453abc] bg-clip-text text-transparent">
            What We Stand For
          </span>
        </h2>
        <p className="text-[#6b7280] text-base leading-relaxed mb-4 max-w-4xl mx-auto">Founded with a vision to bridge the gap between technology and business growth, we partner with startups, SMEs, and enterprises to build scalable, secure, and results-driven digital products. From web and mobile applications to enterprise systems, digital marketing, and business automation, our goal is to create solutions that deliver measurable impact.</p>
        <p className="text-[#6b7280] text-base leading-relaxed mb-4 max-w-4xl mx-auto">At TechTide Corporate LLP, we are a team of innovators, developers, designers, marketers, and strategists committed to helping businesses transform ideas into powerful digital solutions.</p>
        <p className="text-[#6b7280] text-base leading-relaxed max-w-4xl mx-auto">At TechTide Corporate LLP, we don't just build software we build partnerships, empower businesses, and create digital experiences that drive growth worldwide.</p>
      </motion.div>
    </section>
  );
}

