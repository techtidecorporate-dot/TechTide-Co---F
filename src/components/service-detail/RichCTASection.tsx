import { ArrowRight } from "lucide-react";
import { SystemItem } from "../..//data/servicesData";

interface RichCTASectionProps {
  service: SystemItem;
}

export function RichCTASection({ service }: RichCTASectionProps) {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-8 pb-16 md:pb-20">
      <div className="relative overflow-hidden bg-[#191a23] bg-gradient-to-br from-[#191a23] via-[#453abc]/20 to-[#191a23] rounded-[2.5rem] md:rounded-[3.5rem] p-8 md:p-12 text-center">
        <div className="absolute top-0 right-0 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-[#453abc]/10 rounded-full blur-[100px] md:blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-[#60c3e3]/10 rounded-full blur-[100px] md:blur-[120px]" />

        <div className="relative z-10">
          <h2 className="text-3xl md:text-5xl lg:text-6xl  font-medium text-white mb-6 md:mb-8 leading-tight">
            {service.ctaHeading || (
              <>
                Ready to Start Your{" "}
                <span className="text-[#60c3e3]">Next Big Thing</span>?
              </>
            )}
          </h2>
          <p className="text-white/70 text-base md:text-xl mb-10 max-w-3xl mx-auto leading-relaxed">
            {service.ctaDescription ||
              "Join dozens of successful startups and enterprises who trust TechTide to build their most critical digital products."}
          </p>
          <button
            onClick={() =>
              window.dispatchEvent(new CustomEvent("open-partner-drawer"))
            }
            className="px-12 py-4 rounded-2xl  font-bold text-lg text-white
            bg-gradient-to-r from-[#453abc] to-[#6b5cff]
            shadow-[0_20px_60px_rgba(69,58,188,0.4)]
            hover:shadow-[0_30px_80px_rgba(69,58,188,0.5)]
            transition-all duration-300 transform hover:scale-[1.03]
            inline-flex items-center gap-3"
          >
            Get in Touch Today
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}

