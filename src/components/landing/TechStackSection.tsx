import { motion } from "framer-motion";
import reactLogo from "@/assets/react-logo.svg";
import nextjsLogo from "@/assets/next.js-logo.svg";
import wordpressLogo from "@/assets/wordpress-logo.svg";
import mongodbLogo from "@/assets/mongodb-logo.svg";
import expressLogo from "@/assets/express-js-logo.svg";
import nodejsLogo from "@/assets/nodejs-logo.svg";
import typescriptLogo from "@/assets/typescript-logo.svg";
import awsLogo from "@/assets/aws-logo.svg";
import claudeLogo from "@/assets/claude-ai-logo.svg";
import stripeLogo from "@/assets/stripe-logo.svg";
import reactNativeLogo from "@/assets/react-native-logo.svg";

const technologies = [
    {
        name: "React",
        logo: reactLogo
    },
    {
        name: "Next.js",
        logo: nextjsLogo
    },
    {
        name: "WordPress",
        logo: wordpressLogo
    },
    {
        name: "MongoDB",
        logo: mongodbLogo
    },
    {
        name: "Express.js",
        logo: expressLogo
    },
    {
        name: "Node.js",
        logo: nodejsLogo
    },
    {
        name: "TypeScript",
        logo: typescriptLogo
    },
    {
        name: "AWS",
        logo: awsLogo
    },
    {
        name: "Claude",
        logo: claudeLogo
    },
    {
        name: "Stripe",
        logo: stripeLogo
    },
    {
        name: "React Native",
        logo: reactNativeLogo
    },
];

export function TechStackSection() {
    return (
        <section className="relative bg-white py-16 md:py-24 px-4 sm:px-6 overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#453abc]/5 rounded-full blur-3xl opacity-40" />
                <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-[#60c3e3]/5 rounded-full blur-3xl opacity-40" />
            </div>

            <div className="relative container">
                {/* Header Section */}
                <div className="text-center mb-12 md:mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block text-xs font-semibold tracking-[0.2em] text-[#453abc] uppercase mb-4"
                    >
                        Technology Ecosystem
                    </motion.span>

                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#191a23] mb-4 md:mb-6"
                    >
                        Technologies We Build With
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-[#6b7280] text-base md:text-lg max-w-3xl mx-auto"
                    >
                        We integrate with trusted platforms to create reliable, scalable business systems.
                    </motion.p>
                </div>

                {/* Technologies Grid */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-8 md:gap-10 max-w-6xl mx-auto"
                >
                    {technologies.map((tech, index) => (
                        <motion.div
                            key={tech.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="group flex flex-col items-center text-center"
                        >
                            <div className="mb-4">
                                <img
                                    src={tech.logo}
                                    alt={tech.name}
                                    className="w-10 h-10 md:w-12 md:h-12 object-contain group-hover:scale-110 transition-transform"
                                    style={{ filter: "grayscale(100%)" }}
                                />
                            </div>
                            <h3 className="text-sm md:text-base font-semibold text-[#191a23] group-hover:text-[#453abc] transition-colors">
                                {tech.name}
                            </h3>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Bottom accent line */}
                <div className="mt-12 md:mt-16 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
            </div>
        </section>
    );
}
