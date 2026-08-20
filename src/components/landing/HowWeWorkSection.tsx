import { motion } from "framer-motion";
import { Search, PenTool, Rocket, TrendingUp } from "lucide-react";

const steps = [
    {
        number: "01",
        title: "Discover",
        description: "Understand your business, goals, and current processes.",
        icon: Search,
        gradient: "from-[#453abc] to-[#60c3e3]"
    },
    {
        number: "02",
        title: "Design",
        description: "Map practical automation opportunities and define the right solution.",
        icon: PenTool,
        gradient: "from-[#60c3e3] to-[#453abc]"
    },
    {
        number: "03",
        title: "Build",
        description: "Implement AI, automation, and integrations around your operations.",
        icon: Rocket,
        gradient: "from-[#453abc] via-[#60c3e3] to-[#453abc]"
    },
    {
        number: "04",
        title: "Improve",
        description: "Monitor performance and refine workflows as your business evolves.",
        icon: TrendingUp,
        gradient: "from-[#60c3e3] to-[#453abc]"
    },
];

export function HowWeWorkSection() {
    return (
        <section className="relative bg-gradient-to-b from-white to-[#f8f9fa] py-16 md:py-24 px-4 sm:px-6 overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-[#453abc]/5 rounded-full blur-3xl opacity-40" />
                <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#60c3e3]/5 rounded-full blur-3xl opacity-40" />
            </div>

            <div className="relative container">
                {/* Header Section */}
                <div className="text-center mb-12 md:mb-20">
                    <motion.span
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block text-xs font-semibold tracking-[0.2em] text-[#453abc] uppercase mb-4 px-3 py-1.5 rounded-full bg-[#453abc]/10"
                    >
                        How We Work
                    </motion.span>

                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-[1.75rem] sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#191a23] mb-4 md:mb-6 leading-tight"
                    >
                        Four steps from first conversation <br className="hidden sm:block" /> to{" "}
                        <span className="bg-gradient-to-r from-[#453abc] to-[#60c3e3] bg-clip-text text-transparent">
                            measurable improvement
                        </span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-[#6b7280] text-base md:text-lg max-w-3xl mx-auto leading-relaxed"
                    >
                        Each step has a defined output, so you always know what is being decided and what happens next.
                    </motion.p>
                </div>

                {/* Steps Grid */}
                <div className="relative">
                    {/* Connecting line (desktop only) */}
                    <div className="hidden lg:block absolute w-[78%] top-6 left-0 right-0 h-0.5 bg-gray-300 z-0" />

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 relative z-10">
                        {steps.map((step, index) => {
                            const IconComponent = step.icon;
                            return (
                                <motion.div
                                    key={step.number}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="group flex flex-col items-center sm:items-start text-center sm:text-left"
                                >
                                    {/* Icon Circle */}
                                    <motion.div
                                        whileHover={{ scale: 1.1 }}
                                        className={`size-12 rounded-full bg-gradient-to-br ${step.gradient} p-0.5 mb-6 group-hover:shadow-lg transition-shadow flex-shrink-0 relative z-10 bg-white`}
                                    >
                                        <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
                                            <IconComponent className="size-6 text-[#453abc]" />
                                        </div>
                                    </motion.div>

                                    {/* Title */}
                                    <h3 className="text-xl md:text-2xl font-bold text-[#191a23] mb-3 group-hover:text-[#453abc] transition-colors">
                                        {step.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-sm md:text-base text-[#6b7280] leading-relaxed flex-1 max-w-xs">
                                        {step.description}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
