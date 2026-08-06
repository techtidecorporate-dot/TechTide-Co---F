import { DollarSign, MapPinned, Users } from "lucide-react";
import { motion } from "framer-motion";

const benefitsData = [
  {
    icon: <MapPinned className="w-6 h-6" />,
    title: "Remote Work",
    description: "Work from anywhere in the world",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Team Events",
    description: "Regular team building and social events",
  },
  {
    icon: <DollarSign className="w-6 h-6" />,
    title: "Competitive Salary",
    description: "Industry-leading compensation packages",
  },
];

export function BenefitsSection() {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-20">
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-3xl lg:text-4xl font-medium text-[#191a23] mb-4">Why TechTide?</h2>
        <p className="text-[#6b7280] text-base md:text-lg max-w-2xl mx-auto leading-relaxed">We've built an environment where you can grow, learn, and do your best work.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {benefitsData.map((benefit, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            viewport={{ once: true, margin: "-50px" }}
            className="bg-white rounded-xl border border-transparent shadow-[0_15px_40px_rgba(0,0,0,0.03)] p-8 md:p-10 hover:shadow-[0_40px_80px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-500 group"
          >
            <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-[#453abc]/5 flex items-center justify-center text-[#453abc] mb-6 md:mb-8 group-hover:bg-[#453abc] group-hover:text-white transition-all duration-500">
              {benefit.icon}
            </div>
            <h3 className="text-xl font-medium text-[#191a23] mb-3">{benefit.title}</h3>
            <p className="text-[#6b7280] leading-relaxed text-sm">{benefit.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

