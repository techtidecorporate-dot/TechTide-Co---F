import { Briefcase } from "lucide-react";

interface UseCase {
  industry: string;
  description: string;
}

interface UseCasesSectionProps {
  industryUseCases: UseCase[];
}

export function UseCasesSection({ industryUseCases }: UseCasesSectionProps) {
  return (
    <div className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-16">
          <p className=" text-transparent bg-clip-text bg-gradient-to-r from-[#453abc] to-[#60c3e3] text-sm font-medium tracking-[0.2em] uppercase mb-4">
            Industry Expertise
          </p>
          <h2 className="text-3xl md:text-5xl  font-bold text-[#191a23]">
            Industries We Serve
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industryUseCases.map((useCase, i) => (
            <div
              key={i}
              className="p-8 rounded-2xl border border-gray-100 bg-white
              shadow-[0_10px_30px_rgba(0,0,0,0.04)]
              hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]
              hover:border-[#453abc]/10 transition-all duration-500 group"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#453abc]/10 to-[#60c3e3]/10 flex items-center justify-center mb-5">
                <Briefcase className="w-6 h-6 text-[#453abc]" />
              </div>
              <h3 className="text-lg  font-semibold text-[#191a23] mb-3 group-hover:text-[#453abc] transition-colors">
                {useCase.industry}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {useCase.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

