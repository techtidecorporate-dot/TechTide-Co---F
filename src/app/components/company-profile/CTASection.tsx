import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

export function CTASection() {
  return (
    <section className="max-w-4xl mx-auto px-6">
      <motion.div
        {...fadeUp}
        className="bg-gradient-to-r from-[#453abc] to-[#60c3e3] rounded-[2rem] p-8 md:p-10 text-center text-white shadow-xl"
      >
        <h2 className="text-2xl md:text-3xl font-poppins font-semibold mb-4">
          Let's Work Together
        </h2>
        <p className="text-white/80 max-w-xl mx-auto mb-8 leading-relaxed">
          Partner with a registered, certified technology company committed to
          your success.
        </p>
        <a
          href="mailto:info@techtidecorporate.com"
          className="inline-flex items-center gap-2 bg-white text-[#453abc] px-8 py-3.5 rounded-xl font-poppins font-semibold shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
        >
          Get in Touch
        </a>
      </motion.div>
    </section>
  );
}
