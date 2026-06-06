import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <header className="relative h-screen pt-32 pb-16 md:pt-48 md:pb-32 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[#453abc]/10 rounded-full blur-[80px] md:blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[#60c3e3]/10 rounded-full blur-[80px] md:blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <p className="font-poppins text-transparent bg-clip-text bg-gradient-to-r from-[#453abc] to-[#60c3e3] text-sm font-medium tracking-[0.2em] uppercase mb-4">
            About TechTide Corporate LLP
          </p>
          <h1 className="text-4xl md:text-6xl xl:text-7xl 2xl:text-8xl font-poppins font-medium mb-6 leading-tight md:leading-[1.1] ">
            Building Digital Solutions That <span className="bg-gradient-to-r from-[#453abc] via-[#60c3e3] to-[#453abc] bg-clip-text text-transparent"> Drive Business Growth</span>
          </h1>
          <p className="text-[#6b7280] text-base md:text-lg xl:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
            We are a team of passionate developers, designers, and strategists
            dedicated to helping businesses thrive in the digital age through
            innovative technology solutions.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-poppins font-semibold text-white shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5"
            style={{
              background:
                "linear-gradient(95deg, rgb(69, 58, 188) 0%, rgb(96, 195, 227) 100%)",
            }}
          >
           Let's Connect
          </a>
        </motion.div>
      </div>
    </header>
  );
}
