import { motion } from "framer-motion";
import { Heart, Zap, Users, Award } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const values = [
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Integrity",
    description: "We uphold transparency and honesty in every project, building trust through ethical practices and reliable delivery.",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Innovation",
    description: "We stay ahead of the technology curve, constantly exploring new tools and methodologies to deliver cutting-edge solutions.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Collaboration",
    description: "We work closely with our clients, treating their vision as our own and fostering partnerships that drive mutual success.",
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "Excellence",
    description: "We are committed to delivering high-quality work that exceeds expectations, with meticulous attention to every detail.",
  },
];

export function CoreValuesSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-8 pb-20 md:pb-32">
      <div className="text-center mb-16">
        <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#453abc] to-[#60c3e3] text-sm font-medium tracking-[0.2em] uppercase mb-4">
          What Drives Us
        </p>
        <h2 className="text-3xl md:text-4xl font-poppins font-semibold text-[#191a23] mb-4">
          Our Core Values
        </h2>
        <p className="text-[#6b7280] text-base max-w-xl mx-auto">
          These principles guide everything we do — from how we collaborate
          with clients to how we build our products.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {values.map((value, i) => (
          <motion.div
            key={i}
            {...fadeUp}
            transition={{ delay: i * 0.1 }}
            className="bg-white rounded-2xl border border-gray-100 p-8 shadow-md hover:shadow-xl transition-all group"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-[#453abc] to-[#60c3e3] flex items-center justify-center text-white mb-5 group-hover:scale-110 transition-transform shadow-lg">
              {value.icon}
            </div>
            <h3 className="text-lg font-poppins font-semibold text-[#191a23] mb-3">
              {value.title}
            </h3>
            <p className="text-[#6b7280] text-sm leading-relaxed">
              {value.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
