import { Briefcase, MapPinned } from "lucide-react";
import { motion } from "framer-motion";

export function HeroSection({ count }: { count: number }) {
  return (
    <section className="relative pt-32 pb-16 md:pt-48 md:pb-32 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[#453abc]/10 rounded-full blur-[80px] md:blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[#60c3e3]/10 rounded-full blur-[80px] md:blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#453abc] to-[#60c3e3] text-sm font-medium tracking-[0.2em] uppercase mb-4">Careers</span>
          <h1 className="text-4xl md:text-6xl xl:text-7xl font-medium text-[#191a23] mb-6 leading-tight md:leading-[1.1]">
            Build Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#453abc] to-[#60c3e3]">
              Career
            </span>{" "}
            With Us
          </h1>
          <p className="text-[#6b7280] text-base md:text-lg xl:text-xl max-w-3xl mx-auto leading-relaxed">Join a mission-driven team dedicated to building the future of technology. We're looking for passionate individuals who want to make a real impact.</p>
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 mt-10 text-[#6b7280]">
            <div className="glass px-6 py-3 rounded-lg flex items-center gap-3">
              <Briefcase className="size-5 text-[#453abc]" />
              <span className=" font-medium text-sm text-[#191a23]">
                {count} Position{count !== 1 ? "s" : ""}
              </span>
            </div>
            <div className="glass px-6 py-3 rounded-lg flex items-center gap-3">
              <MapPinned className="size-5 text-[#453abc]" />
              <span className=" font-medium text-sm text-[#191a23]">
                Remote First
              </span>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}

