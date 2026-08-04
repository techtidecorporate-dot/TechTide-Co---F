import { motion } from "framer-motion";
import { Zap, Shield, Rocket } from "lucide-react";
import growthImg from "@/assets/Dashboard-Growth.webp";
const solutions = [
  {
    title: "Conversion-Focused Design",
    description: "We don't just build websites; we build lead-generation machines designed to convert visitors into loyal customers.",
    icon: <Zap className="w-6 h-6" />,
    gradient: "from-blue-500 to-cyan-400"
  },
  {
    title: "Authority Positioning",
    description: "We help you niche down and communicate your unique value, positioning you as the go-to expert in your industry.",
    icon: <Shield className="w-6 h-6" />,
    gradient: "from-[#453abc] to-purple-400"
  },
  {
    title: "Growth Systems",
    description: "Seamlessly integrate CRM, email marketing, and analytics to track your ROI and scale with confidence.",
    icon: <Rocket className="w-6 h-6" />,
    gradient: "from-[#60c3e3] to-[#453abc]"
  },
];

export function SolutionSection() {
  return (
    <section className="bg-white py-16 md:py-24 px-4 sm:px-6 md:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[1.75rem] sm:text-4xl md:text-6xl font-poppins font-bold text-[#191a23] mb-4 md:mb-6"
          >
            From Generic Profile to <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#453abc] to-[#60c3e3]">Growth Machine</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 text-sm sm:text-lg md:text-xl max-w-4xl mx-auto leading-relaxed"
          >
            We stop the leak in your sales funnel by implementing a proprietary 3-step system that clarifies your message, builds authority, and optimizes for conversions.
          </motion.p>
        </div>

        {/* Content Section: Image and Points */}
        <div className="flex flex-col lg:flex-row items-center gap-10 md:gap-16 lg:gap-24">
          {/* Image Side — no animation, renders instantly, no blink/flash on load */}
          <div className="lg:w-1/2 relative">
            <div className="relative rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.15)] bg-gray-50 aspect-[4/3]">
              <img
                src={growthImg}
                alt="Growth Machine Dashboard Transformation"
                className="w-full h-full object-cover"
                fetchPriority="high"
                decoding="sync"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#453abc]/20 via-transparent to-transparent pointer-events-none" />
            </div>
            {/* Decorative dot background */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#453abc]/5 rounded-full blur-3xl -z-10" />
          </div>

          {/* Points Side */}
          <div className="lg:w-1/2 space-y-10">
            {solutions.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group flex items-start gap-4 sm:gap-6 px-4 sm:px-6 rounded-xl sm:rounded-3xl hover:bg-gray-50 border border-transparent hover:border-gray-100 transition-all duration-300"
              >
                <div className={`w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-xl bg-gradient-to-br ${item.gradient} p-[1.5px] flex-shrink-0 group-hover:scale-110 transition-transform`}>
                  <div className="w-full h-full bg-white rounded-xl sm:rounded-xl flex items-center justify-center text-[#453abc]">
                    {item.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#191a23] mb-2 sm:mb-3 font-poppins group-hover:text-[#453abc] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm sm:text-base md:text-lg leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}