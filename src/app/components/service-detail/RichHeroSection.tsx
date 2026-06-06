import { Link } from "react-router-dom";
import { ArrowLeft, Code, ArrowRight } from "lucide-react";
import { SystemItem } from "../../data/servicesData";

interface RichHeroSectionProps {
  service: SystemItem;
}

export function RichHeroSection({ service }: RichHeroSectionProps) {
  return (
    <header className="relative pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[#453abc]/10 rounded-full blur-[80px] md:blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[#60c3e3]/10 rounded-full blur-[80px] md:blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-8">
        <Link
          to="/services"
          className="inline-flex items-center gap-2 text-gray-500 hover:text-[#453abc] transition mb-10 font-medium"
        >
          <ArrowLeft size={20} />
          Back to Services
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div
              className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full
              bg-white/70 backdrop-blur border border-[#453abc]/10
              text-[#453abc] font-semibold text-sm shadow-sm w-fit"
            >
              <Code className="w-5 h-5" />
              <span>Expert Solution</span>
            </div>

            <h1
              className="text-3xl md:text-5xl lg:text-6xl font-poppins font-extrabold
              text-[#191a23] leading-[1.08] tracking-tight"
            >
              {service.title}
            </h1>

            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl">
              {service.shortDescription}
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() =>
                  window.dispatchEvent(new CustomEvent("open-partner-drawer"))
                }
                className="px-10 py-4 rounded-2xl font-poppins font-bold text-lg text-white
                bg-gradient-to-r from-[#453abc] to-[#5f54e6]
                shadow-[0_20px_60px_rgba(69,58,188,0.35)]
                hover:shadow-[0_30px_80px_rgba(69,58,188,0.45)]
                transition-all duration-300 transform hover:scale-[1.03]
                inline-flex items-center gap-3"
              >
                Get a Free Consultation
                <ArrowRight size={20} />
              </button>
              <a
                href="/contact"
                className="px-10 py-4 rounded-2xl font-poppins font-bold text-lg text-[#453abc]
                border-2 border-[#453abc]
                hover:bg-[#453abc] hover:text-white
                transition-all duration-300 transform hover:scale-[1.03]
                inline-flex items-center gap-3"
              >
                Get in Touch
              </a>
            </div>
          </div>

          {service.image && (
            <div
              className="relative rounded-[2.5rem] overflow-hidden
              shadow-[0_40px_100px_rgba(0,0,0,0.12)]
              ring-1 ring-black/5"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full aspect-[4/3] object-cover
                hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
