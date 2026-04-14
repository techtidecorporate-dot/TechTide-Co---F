import React from "react";
import { CheckCircle2, Target, TrendingUp, Zap, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

const reasons = [
  {
    title: "Tailored & Flexible",
    description: "Every project is built around your specific goals with a flexible approach based on your unique needs",
    icon: <Target className="w-6 h-6 text-[#453abc]" />,
  },
  {
    title: "Business-Outcome Focused",
    description: "We align technology with your strategy, focusing on measurable business outcomes, not just design",
    icon: <TrendingUp className="w-6 h-6 text-[#453abc]" />,
  },
  {
    title: "Clear Communication",
    description: "Fast response times and consistent updates throughout the entire development lifecycle",
    icon: <Zap className="w-6 h-6 text-[#453abc]" />,
  },
  {
    title: "Reliable Execution",
    description: "Clear timelines and consistent delivery without unnecessary delays or technical debt",
    icon: <ShieldCheck className="w-6 h-6 text-[#453abc]" />,
  },
  {
    title: "Long-Term Partnerships",
    description: "We stay involved after launch to ensure continued performance and strong working relationships",
    icon: <CheckCircle2 className="w-6 h-6 text-[#453abc]" />,
  },
];

export function WhyChooseUs() {
  return (
    <section className="bg-[#f8f9fa] py-20 px-6 md:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Top Header - Centered */}
        <div className="text-center mb-16 md:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#453abc] font-bold tracking-[0.3em] uppercase text-sm mb-4 block"
          >
            Why Choose Us
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-poppins font-bold text-[#191a23] leading-[1.1] mb-8"
          >
            A Digital Partner That <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#453abc] to-[#60c3e3]">
              Focuses on Results
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
          >
            We focus on what actually matters to your business. We move beyond
            basic digital presence to build efficient, reliable systems.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Column: Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-[6px] border-white">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
                alt="Expert digital team collaborating on scalable solutions"
                className="w-full h-full object-cover aspect-[4/5] md:aspect-auto md:h-[650px] hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#191a23]/30 to-transparent" />
            </div>
            {/* Minimalist Floating Card */}
            <div className="absolute -bottom-8 -left-8 bg-white px-8 py-6 rounded-3xl shadow-2xl border border-gray-100 hidden md:block max-w-[220px]">
              <p className="text-[#453abc] font-bold text-3xl mb-1">100%</p>
              <p className="text-gray-500 text-sm font-medium leading-tight">Result-Driven Strategy & Execution</p>
            </div>
          </motion.div>

          {/* Right Column: Cards */}
          <div className="space-y-4 pt-4">
            {reasons.map((reason, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 10 }}
                  className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex items-start gap-5 hover:shadow-md transition-all group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#453abc]/5 flex items-center justify-center text-[#453abc] flex-shrink-0 group-hover:scale-110 transition-transform">
                    {reason.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-poppins font-bold text-[#191a23] mb-1 group-hover:text-[#453abc] transition-colors">
                      {reason.title}
                    </h4>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        {/* Brand Punchline */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ delay: 0.5 }}
           className="mt-24 text-center"
        >
          <p className="text-xl md:text-3xl text-[#191a23] font-poppins font-medium italic opacity-80">
            "Clients work with us because we make things <span className="text-[#453abc]">simple</span>, <span className="text-[#453abc]">reliable</span>, and <span className="text-[#453abc]">effective</span>."
          </p>
  
        </motion.div>
      </div>
    </section>
  );
}
