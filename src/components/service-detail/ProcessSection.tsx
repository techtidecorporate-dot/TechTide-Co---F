interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

interface ProcessSectionProps {
  processSteps: ProcessStep[];
}

export function ProcessSection({ processSteps }: ProcessSectionProps) {
  return (
    <div className="bg-[#191a23] py-20 md:py-28 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#453abc]/15 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#60c3e3]/10 rounded-full blur-[150px]" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-16">
          <p className=" text-[#60c3e3] text-sm font-medium tracking-[0.2em] uppercase mb-4">
            Our Process
          </p>
          <h2 className="text-3xl md:text-5xl  font-bold text-white">
            How We Build Your Solution
          </h2>
        </div>

        <div className="space-y-6">
          {processSteps.map((step, i) => (
            <div
              key={i}
              className="flex flex-col md:flex-row gap-6 md:gap-10 p-8 md:p-10
              rounded-[1.5rem] bg-white/5 backdrop-blur border border-white/10
              hover:bg-white/10 transition-all duration-500 group"
            >
              <div className="shrink-0">
                <div
                  className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#453abc] to-[#60c3e3]
                  flex items-center justify-center text-white  font-bold text-xl
                  shadow-[0_10px_30px_rgba(69,58,188,0.3)]
                  group-hover:shadow-[0_15px_40px_rgba(69,58,188,0.5)]
                  transition-all duration-500"
                >
                  {step.step}
                </div>
              </div>
              <div>
                <h3 className="text-xl md:text-2xl  font-semibold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-white/60 text-base leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

