import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const industriesServed = [
  { name: "E-commerce & Retail", description: "Custom platforms, inventory management, and payment integration solutions." },
  { name: "Healthcare", description: "HIPAA-compliant applications, patient portals, and telemedicine platforms." },
  { name: "Finance & Fintech", description: "Secure banking portals, payment gateways, and financial analytics dashboards." },
  { name: "Education & EdTech", description: "LMS platforms, virtual classrooms, and student management systems." },
  { name: "Real Estate", description: "Property listing platforms, CRM tools, and virtual tour integrations." },
  { name: "Logistics & Supply Chain", description: "Fleet management, tracking systems, and warehouse automation tools." },
];

export function IndustriesSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 pb-20">
      <motion.div {...fadeUp} className="text-center mb-12">
        <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#453abc] to-[#60c3e3] text-sm font-medium tracking-[0.2em] uppercase mb-4">
          Industries Served
        </p>
        <h2 className="text-3xl md:text-4xl font-poppins font-semibold text-[#191a23]">
          Expertise Across Verticals
        </h2>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {industriesServed.map((industry, i) => (
          <motion.div
            key={i}
            {...fadeUp}
            transition={{ delay: i * 0.08 }}
            className="bg-white rounded-2xl border border-gray-100 p-6 shadow-md hover:shadow-xl transition-all"
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-[#453abc] to-[#60c3e3] flex items-center justify-center text-white mb-4">
              <Briefcase className="w-5 h-5" />
            </div>
            <h3 className="text-base font-poppins font-semibold text-[#191a23] mb-2">
              {industry.name}
            </h3>
            <p className="text-sm text-[#6b7280] leading-relaxed">
              {industry.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
