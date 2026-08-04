interface PerfectForSectionProps {
  perfectFor: string[];
}

export function PerfectForSection({ perfectFor }: PerfectForSectionProps) {
  return (
    <div className="border-y border-gray-100 bg-white/50">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-8 md:py-10">
        <div className="flex flex-wrap items-center gap-3 justify-center">
          <span className="text-sm font-poppins font-semibold text-gray-400 tracking-[0.1em] uppercase mr-2">
            Perfect For
          </span>
          {perfectFor.map((item, i) => (
            <span
              key={i}
              className="inline-flex items-center px-4 py-2 rounded-full text-sm font-poppins font-medium
                bg-gradient-to-r from-[#453abc]/5 to-[#60c3e3]/5
                text-[#453abc] border border-[#453abc]/10
                hover:from-[#453abc]/10 hover:to-[#60c3e3]/10
                hover:border-[#453abc]/20
                transition-all duration-300"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}