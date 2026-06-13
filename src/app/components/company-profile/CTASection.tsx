import { motion } from "framer-motion";
import { Mail } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

export function CTASection() {
  return (
 <div className="max-w-5xl mx-auto px-6 md:px-8 pb-20 md:pb-32">
  <motion.div
  {...fadeUp}
  className="relative overflow-hidden bg-[#191a23] bg-gradient-to-br from-[#191a23] via-[#453abc]/20 to-[#191a23] rounded-[2.5rem] md:rounded-[3rem] p-8 md:p-12 text-center"
>
  <div className="absolute top-0 right-0 w-96 h-96 bg-[#453abc]/10 rounded-full blur-[100px]" />
  <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#60c3e3]/10 rounded-full blur-[100px]" />

  <div className="relative z-10">
    <h2 className="text-2xl md:text-3xl font-poppins text-white font-semibold mb-4">
      Let's Work Together
    </h2>

    <p className="text-white/70 max-w-xl mx-auto mb-8 leading-relaxed">
      Partner with a registered, certified technology company committed to
      your success.
    </p>

    <a
      href="/contact"
      className="inline-flex items-center gap-2 bg-gradient-to-r from-[#453abc] to-[#60c3e3] text-white px-8 py-3.5 rounded-xl font-poppins font-semibold shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
    >
      <Mail className="w-5 h-5" />
      Get in Touch
    </a>
  </div>
</motion.div>
 </div>
  );
}
