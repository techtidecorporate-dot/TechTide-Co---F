import { TrendingUp } from "lucide-react";

interface BusinessOutcome {
  title: string;
  description: string;
}

interface BusinessOutcomesSectionProps {
  businessOutcomes: BusinessOutcome[];
}

export function BusinessOutcomesSection({ businessOutcomes }: BusinessOutcomesSectionProps) {
  return (
    <div className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-16">
          <p className=" text-transparent bg-clip-text bg-gradient-to-r from-[#453abc] to-[#60c3e3] text-sm font-medium tracking-[0.2em] uppercase mb-4">
            Business Value
          </p>
          <h2 className="text-3xl md:text-5xl  font-bold text-[#191a23]">
            Business Outcomes You Can Expect
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {businessOutcomes.map((outcome, i) => (
            <div
              key={i}
              className="relative bg-white rounded-[1.5rem] p-8 border border-gray-100
                shadow-[0_15px_40px_rgba(0,0,0,0.04)]
                hover:shadow-[0_25px_60px_rgba(0,0,0,0.08)]
                transition-all duration-500 group overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#453abc] to-[#60c3e3] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#453abc]/10 to-[#60c3e3]/10 flex items-center justify-center mb-5">
                <TrendingUp className="w-6 h-6 text-[#453abc]" />
              </div>
              <h3 className="text-xl  font-semibold text-[#191a23] mb-3 group-hover:text-[#453abc] transition-colors">
                {outcome.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {outcome.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
