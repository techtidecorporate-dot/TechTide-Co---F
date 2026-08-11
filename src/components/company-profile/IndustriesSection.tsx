import { motion } from "framer-motion";
import { ShoppingBag, HeartPulse, TrendingUp, GraduationCap, Building2, Truck } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const industriesServed = [
  { name: "E-commerce & Retail", description: "Custom platforms, inventory management, and payment integration solutions.", icon: <ShoppingBag className="w-5 h-5" /> },
  { name: "Healthcare", description: "HIPAA-compliant applications, patient portals, and telemedicine platforms.", icon: <HeartPulse className="w-5 h-5" /> },
  { name: "Finance & Fintech", description: "Secure banking portals, payment gateways, and financial analytics dashboards.", icon: <TrendingUp className="w-5 h-5" /> },
  { name: "Education & EdTech", description: "LMS platforms, virtual classrooms, and student management systems.", icon: <GraduationCap className="w-5 h-5" /> },
  { name: "Real Estate", description: "Property listing platforms, CRM tools, and virtual tour integrations.", icon: <Building2 className="w-5 h-5" /> },
  { name: "Logistics & Supply Chain", description: "Fleet management, tracking systems, and warehouse automation tools.", icon: <Truck className="w-5 h-5" /> },
];

export function IndustriesSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 pb-20">
      <motion.div {...fadeUp} className="text-center mb-12">
        <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#453abc] to-[#60c3e3] text-sm font-medium tracking-[0.2em] uppercase mb-4">Industries Served</span>
        <h2 className="text-3xl md:text-4xl font-semibold text-[#191a23]">Expertise Across Verticals</h2>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {industriesServed.map((industry, i) => (
          <motion.div
            key={i}
            {...fadeUp}
            transition={{ delay: i * 0.08 }}
            className="bg-white rounded-2xl border border-gray-100 p-6 shadow-md hover:shadow-xl transition-all"
          >
            <div className="w-10 h-10 rounded-md bg-gradient-to-r from-[#453abc] to-[#60c3e3] flex items-center justify-center text-white mb-4">{industry.icon}</div>
            <h3 className="text-base font-semibold text-[#191a23] mb-2">{industry.name}</h3>
            <p className="text-sm text-[#6b7280] leading-relaxed">{industry.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

