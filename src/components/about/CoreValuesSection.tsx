import { motion } from "framer-motion";
import { Lightbulb, Trophy, Eye, Target, TrendingUp } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const values = [
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: "Client Success First",
    description: "Our clients are at the center of everything we do. We measure our success by the value, growth, and results we help our clients achieve through technology, strategy, and innovation.",
  },
  {
    icon: <Trophy className="w-6 h-6" />,
    title: " Innovation with Purpose",
    description: "We don't adopt technology for the sake of trends. We leverage modern tools, frameworks, and strategies to create practical solutions that solve real business challenges and drive measurable outcomes.",
  },
  {
    icon: <Eye className="w-6 h-6" />,
    title: "Trust & Transparency",
    description: "Strong partnerships are built on honesty, accountability, and clear communication. We maintain complete transparency throughout every project, ensuring our clients are informed, involved, and confident at every stage.",
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: " Excellence in Execution",
    description: "From concept to deployment, we are committed to delivering high-quality solutions that are secure, scalable, reliable, and aligned with our clients' business objectives.",
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Continuous Growth",
    description: "Technology evolves rapidly, and so do we. We embrace learning, innovation, and process optimization to ensure our clients always benefit from the latest industry best practices.",
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Global Perspective, Local Commitment",
    description: " We work with businesses across diverse industries and markets, bringing a global mindset while understanding the unique needs of every client and project.",
  },


];

export function CoreValuesSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-8 pb-20 md:pb-32">
      <div className="text-center mb-16">
        <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#453abc] to-[#60c3e3] text-sm font-medium tracking-[0.2em] uppercase mb-4">
          What We Stand For
        </p>
        <h2 className="text-3xl md:text-4xl font-poppins font-semibold text-[#191a23] mb-4">
          What We Stand For
        </h2>
        <p className="text-[#6b7280] text-base max-w-xl mx-auto">
          These principles guide everything we do from how we collaborate
          with clients to how we build our products.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
        {values.map((value, i) => (
          <motion.div
            key={i}
            {...fadeUp}
            transition={{ delay: i * 0.1 }}
            className="bg-white rounded-2xl border border-gray-100 p-8 shadow-md hover:shadow-xl transition-all group"
          >
            {/* <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-[#453abc] to-[#60c3e3] flex items-center justify-center text-white mb-5 group-hover:scale-110 transition-transform shadow-lg">
              {value.icon}
            </div> */}
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
