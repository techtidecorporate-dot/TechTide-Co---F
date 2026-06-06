import { Award } from "lucide-react";

interface USP {
  title: string;
  description: string;
}

interface WhyTechTideSectionProps {
  usps: USP[];
}

export function WhyTechTideSection({ usps }: WhyTechTideSectionProps) {
  return (
    <div className="bg-[#f4f5f7] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-16">
          <p className="font-poppins text-transparent bg-clip-text bg-gradient-to-r from-[#453abc] to-[#60c3e3] text-sm font-medium tracking-[0.2em] uppercase mb-4">
            Our Advantage
          </p>
          <h2 className="text-3xl md:text-5xl font-poppins font-bold text-[#191a23]">
            Why TechTide Corporate?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {usps.map((usp, i) => (
            <div
              key={i}
              className="flex gap-5 p-8 rounded-2xl bg-white border border-gray-100
              shadow-[0_10px_30px_rgba(0,0,0,0.04)]
              hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]
              transition-all duration-500 group"
            >
              <div className="shrink-0">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#453abc] to-[#60c3e3] flex items-center justify-center shadow-lg">
                  <Award className="w-6 h-6 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-poppins font-semibold text-[#191a23] mb-2 group-hover:text-[#453abc] transition-colors">
                  {usp.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {usp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
