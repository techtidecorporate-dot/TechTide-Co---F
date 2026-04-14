import { FloatingCTA } from "../../components/ui/FloatingCTA";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export function HeroSection() {
  const navigate = useNavigate();

  return (
    <section className="relative h-screen px-6 md:px-[70px] flex items-center justify-center text-center overflow-hidden bg-gray-900">
      <FloatingCTA />

      {/* Background Technology Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80"
          alt="Technology Background"
          className="w-full h-full object-cover"
        />
        {/* Dark Premium Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0c]/90 via-[#0a0a0c]/70 to-[#0a0a0c]" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 w-full">
        <div className="max-w-[1100px] mx-auto pt-20">
          

          {/* Main Heading */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8 leading-[1.15]"
          >
            <span className="font-poppins block text-white text-3xl md:text-[3.5rem] lg:text-[4.5rem] font-bold tracking-tight">
              Turn Your Ideas Into
            </span>
            <span className="font-poppins block bg-gradient-to-r from-[#453abc] via-[#60c3e3] to-[#453abc] bg-clip-text text-transparent text-3xl md:text-[3.5rem] lg:text-[4.5rem] font-bold tracking-tight">
              Scalable Products
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-3xl mx-auto space-y-4 md:space-y-2 text-base md:text-xl leading-relaxed text-white/70 font-medium"
          >
            <p>
              We build high-performance websites, custom software, and digital solutions that help businesses grow and scale in a technology-driven world.
            </p> 
          </motion.div>

          {/* Action Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col md:flex-row items-center justify-center gap-6 mt-12"
          >
            <button
              className="group relative w-full md:w-auto px-12 py-5 rounded-full overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95 text-white font-bold text-lg shadow-[0_0_20px_rgba(69,58,188,0.3)] hover:shadow-[0_0_30px_rgba(69,58,188,0.6)]"
              onClick={() => navigate("/contact")}
            >
              <div 
                className="absolute inset-0 transition-transform duration-300 group-hover:scale-110"
                style={{
                  backgroundImage: "linear-gradient(93.1835deg, rgb(69, 58, 188) 0%, rgb(96, 195, 227) 103.41%)",
                }}
              />
              <span className="relative z-10">Start Your Project</span>
            </button>
            <button
              className="w-full md:w-auto px-12 py-5 rounded-full border border-white/20 hover:border-white/40 hover:bg-white/10 transition-all duration-300 text-white font-bold text-lg backdrop-blur-md"
              onClick={() => navigate("/services")}
            >
              Explore Services
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
