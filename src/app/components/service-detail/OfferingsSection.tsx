import { CheckCircle2 } from "lucide-react";

interface OfferingsSectionProps {
  servicesContent: string[];
  title: string;
}

export function OfferingsSection({ servicesContent, title }: OfferingsSectionProps) {
  return (
    <div className="bg-[#f4f5f7] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-16">
          <p className="font-poppins text-transparent bg-clip-text bg-gradient-to-r from-[#453abc] to-[#60c3e3] text-sm font-medium tracking-[0.2em] uppercase mb-4">
            What We Offer
          </p>
          <h2 className="text-3xl md:text-5xl font-poppins font-bold text-[#191a23]">
            Our {title} Services
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {servicesContent.map((item, i) => {
            const [offerTitle, ...descParts] = item.split(" — ");
            const desc = descParts.join(" — ");
            return (
              <div
                key={i}
                className="bg-white rounded-2xl p-8 border border-gray-100
                shadow-[0_10px_40px_rgba(0,0,0,0.04)]
                hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]
                hover:border-[#453abc]/10
                transition-all duration-400 group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#453abc] to-[#60c3e3] flex items-center justify-center shrink-0 mt-1">
                    <CheckCircle2 className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-poppins font-semibold text-[#191a23] mb-2 group-hover:text-[#453abc] transition-colors">
                      {offerTitle}
                    </h3>
                    {desc && (
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {desc}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
