import { motion } from "framer-motion";
import missionImg from "@/assets/landing/Hero Image.webp";

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

export function MissionVisionSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-8 pb-20 md:pb-32">
      {/* Mission */}
      <motion.div {...fadeIn} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20 md:mb-28">
        <div>
          <div className="w-12 h-1 bg-gradient-to-r from-[#453abc] to-[#60c3e3] rounded-full mb-6" />
          <h3 className="text-2xl md:text-3xl font-poppins font-bold text-[#191a23] mb-6">
            Our Mission
          </h3>
          <p className="text-[#6b7280] text-base md:text-lg leading-relaxed">
            To empower businesses with innovative, high-quality digital
            solutions that streamline operations, enhance customer
            experiences, and drive sustainable growth in an increasingly
            connected world.
          </p>
        </div>
        <div className="rounded-[2rem] overflow-hidden shadow-xl">
          <img
            src={missionImg}
            alt="Our Mission"
            className="w-full h-72 md:h-96 object-cover"
          />
        </div>
      </motion.div>

      {/* Vision */}
      <motion.div {...fadeIn} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="order-last lg:order-first">
          <div className="rounded-[2rem] overflow-hidden shadow-xl">
            <img
              src={missionImg}
              alt="Our Vision"
              className="w-full h-72 md:h-96 object-cover"
            />
          </div>
        </div>
        <div>
          <div className="w-12 h-1 bg-gradient-to-r from-[#453abc] to-[#60c3e3] rounded-full mb-6" />
          <h3 className="text-2xl md:text-3xl font-poppins font-bold text-[#191a23] mb-6">
            Our Vision
          </h3>
          <p className="text-[#6b7280] text-base md:text-lg leading-relaxed">
            To be a trusted global partner in digital transformation —
            recognized for our technical expertise, creative problem-solving,
            and unwavering commitment to delivering value for every client we
            serve.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
