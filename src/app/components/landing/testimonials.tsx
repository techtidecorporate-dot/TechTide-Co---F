import { MessageSquare, Clock, Target, Users, Heart, Users2 } from "lucide-react";
import { motion } from "framer-motion";

const choices = [
  {
    title: "Clear communication throughout the project",
    icon: <MessageSquare className="w-6 h-6 text-[#453abc]" />,
  },
  {
    title: "Fast response times and consistent updates",
    icon: <Clock className="w-6 h-6 text-[#453abc]" />,
  },
  {
    title: "Focus on business outcomes, not just design",
    icon: <Target className="w-6 h-6 text-[#453abc]" />,
  },
  {
    title: "Flexible approach based on client needs",
    icon: <Users className="w-6 h-6 text-[#453abc]" />,
  },
  {
    title: "Strong long-term working relationships",
    icon: <Heart className="w-6 h-6 text-[#453abc]" />,
  },
];

export function TeamSection() {
  return (
    <section className="bg-white py-20 px-6 md:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-poppins font-bold mb-4 text-[#191a23]">
            Why Clients <span className="text-[#453abc]">Choose to Work</span> With Us
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto italic">
            "Clients work with us because we make things simple, reliable, and effective."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {choices.map((choice, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-start gap-5 p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-lg transition-all"
            >
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm border border-gray-100 flex-shrink-0">
                {choice.icon}
              </div>
              <h3 className="text-lg font-poppins font-bold text-[#191a23] leading-tight">
                {choice.title}
              </h3>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-[#453abc] to-[#60c3e3] p-1 rounded-3xl"
        >
          <div className="bg-white px-8 py-10 rounded-[calc(1.5rem-1px)] text-center flex flex-col md:flex-row items-center justify-center gap-6">
            <div className="w-16 h-16 bg-[#453abc]/10 rounded-full flex items-center justify-center">
              <Users2 className="w-8 h-8 text-[#453abc]" />
            </div>
            <p className="text-xl md:text-2xl font-poppins font-semibold text-gray-900">
              We are not just a service provider. <span className="text-[#453abc]">We act as an extension of your team.</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
