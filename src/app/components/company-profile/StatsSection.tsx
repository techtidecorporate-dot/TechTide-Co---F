import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const companyStats = [
  { number: "50+", label: "Projects Delivered" },
  { number: "30+", label: "Happy Clients" },
  { number: "4+", label: "Years in Business" },
  { number: "98%", label: "Client Satisfaction" },
  { number: "100+", label: "Experts Network" },
  { number: "6", label: "Service Verticals" },
];

export function StatsSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 pb-20">
      <motion.div {...fadeUp} className="text-center mb-12">
        <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#453abc] to-[#60c3e3] text-sm font-medium tracking-[0.2em] uppercase mb-4">
          By the Numbers
        </p>
        <h2 className="text-3xl md:text-4xl font-poppins font-semibold text-[#191a23]">
          Company Statistics
        </h2>
      </motion.div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {companyStats.map((stat, i) => (
          <motion.div
            key={i}
            {...fadeUp}
            transition={{ delay: i * 0.08 }}
            className="bg-white rounded-2xl border border-gray-100 p-6 text-center shadow-md hover:shadow-xl transition-all"
          >
            <div className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#453abc] to-[#60c3e3] mb-1">
              {stat.number}
            </div>
            <p className="text-[#6b7280] text-xs font-medium">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
