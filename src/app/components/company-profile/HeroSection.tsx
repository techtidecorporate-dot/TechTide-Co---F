import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

export function HeroSection() {
  return (
    <header className="text-center mb-16 max-w-4xl mx-auto px-6">
      <motion.div {...fadeUp}>
        <div className="inline-flex items-center gap-2 mb-6">
          <span className="text-xs font-bold uppercase tracking-widest text-[#453abc]">
            Company Profile
          </span>
        </div>
        <h1 className="text-4xl md:text-6xl font-poppins font-bold text-[#191a23] mb-6">
          <span className="bg-gradient-to-r from-[#453abc] to-[#60c3e3] bg-clip-text text-transparent">
          TechTide {" "}
          </span>
           Corporate
            LLP
        </h1>
        <p className="text-[#6b7280] text-lg max-w-2xl mx-auto leading-relaxed mb-10">
          A registered Limited Liability Partnership dedicated to delivering
          innovative technology solutions across the globe.
        </p>
        <a
          href="/contact"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-poppins font-semibold text-white shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5"
          style={{
            background:
              "linear-gradient(95deg, rgb(69, 58, 188) 0%, rgb(96, 195, 227) 100%)",
          }}
        >
          Get in Touch
        </a>
      </motion.div>
    </header>
  );
}
