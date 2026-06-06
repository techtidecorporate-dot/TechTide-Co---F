import { CheckCircle2 } from "lucide-react";

interface FeaturesSectionProps {
  features: string[];
}

export function FeaturesSection({ features }: FeaturesSectionProps) {
  return (
    <div className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-16">
          <p className="font-poppins text-transparent bg-clip-text bg-gradient-to-r from-[#453abc] to-[#60c3e3] text-sm font-medium tracking-[0.2em] uppercase mb-4">
            Core Capabilities
          </p>
          <h2 className="text-3xl md:text-5xl font-poppins font-bold text-[#191a23]">
            Key Features
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex gap-3 items-center p-5 bg-white rounded-xl
              border border-gray-100
              shadow-[0_5px_20px_rgba(0,0,0,0.03)]
              hover:shadow-[0_10px_30px_rgba(0,0,0,0.06)]
              transition-all duration-300"
            >
              <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
              <span className="text-gray-700 font-medium text-sm">
                {feature}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
