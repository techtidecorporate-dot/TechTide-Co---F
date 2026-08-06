import { motion } from "framer-motion";

interface CultureSectionProps {
  onSpeculativeApply: () => void;
}

export function CultureSection({ onSpeculativeApply }: CultureSectionProps) {
  return (
    <div className="max-w-5xl mx-auto px-6 md:px-8 pb-16">
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 30 }}
        viewport={{ once: true, margin: "-50px" }}
        className="relative overflow-hidden bg-[#191a23] rounded-3xl p-8 md:p-12 text-center"
      >
        <div className="absolute top-[-20%] right-[-10%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-white/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#60c3e3]/10 rounded-full blur-[100px]" />

        <div className="relative z-10">
          <h2 className="text-3xl md:text-5xl lg:text-6xl  font-medium text-white mb-6 md:mb-8 leading-tight">
            Don't See Your <span className="text-[#60c3e3]">Ideal Role</span>?
          </h2>
          <p className="text-white/70 text-base md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed ">We're always looking for brilliant minds to join us. Send us your portfolio and tell us how you can help us reshape the digital landscape.</p>
          <div className="flex justify-center">
            <button
              onClick={onSpeculativeApply}
              className="w-full sm:w-auto bg-white text-[#191a23] px-10 md:px-12 py-4.5 md:py-5 rounded-xl font-medium hover:shadow-[0_15px_40px_rgba(255,255,255,0.1)] transition-all hover:-translate-y-1"
            >
              Speculative Application
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

