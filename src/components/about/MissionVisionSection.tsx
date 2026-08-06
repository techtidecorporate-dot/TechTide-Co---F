import { motion } from "framer-motion";
import missionImg from "@/assets/Our Mission.webp";
import VisionImg from "@/assets/Our Vision.webp";

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
          <h3 className="text-2xl md:text-3xl  font-bold text-[#191a23]">Our Mission</h3>
          <div className="w-12 h-1 bg-gradient-to-r from-[#453abc] to-[#60c3e3] rounded-full mt-2 mb-3" />
          <p className="text-[#6b7280] text-base md:text-lg leading-relaxed">Techtide Corporate LLP is committed to crafting exceptional digital solutions and reinvesting our growth where it matters into the youth, into critical job creation, and into open access to education. We stand for progress with intent and partnerships that make a difference.</p>
        </div>
        <div className="rounded-3xl overflow-hidden shadow-xl">
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
          <div className="rounded-3xl overflow-hidden shadow-xl">
            <img
              src={VisionImg}
              alt="Our Vision"
              className="w-full h-72 md:h-96 object-cover"
            />
          </div>
        </div>
        <div>
          <h3 className="text-2xl md:text-3xl  font-bold text-[#191a23]">
            Our Vision
          </h3>
          <div className="w-12 h-1 bg-gradient-to-r from-[#453abc] to-[#60c3e3] rounded-full mt-2 mb-3" />
          <p className="text-[#6b7280] text-base md:text-lg leading-relaxed">Techtide Corporate LLP is committed to setting a global standard in technological excellence. More than a software company, we serve as a trusted partner in innovation and meaningful impact using advanced technology to uplift communities and build a future-ready world from Pakistan outward.</p>
        </div>
      </motion.div>
    </section>
  );
}

