import { XCircle, AlertTriangle, TrendingDown } from "lucide-react";

const problems = [
  {
    id: "01",
    title: "Weak Online Presence",
    description: "Your website feels like a generic company profile that doesn't clearly communicate your value or differentiate you from competitors.",
    icon: <XCircle className="w-8 h-8" />,
    gradient: "from-blue-500 to-cyan-400"
  },
  {
    id: "02",
    title: "Poor Lead Generation",
    description: "You're getting traffic but no conversions. Your visitors leave without taking action because there's no defined user journey.",
    icon: <TrendingDown className="w-8 h-8" />,
    gradient: "from-purple-500 to-indigo-400"
  },
  {
    id: "03",
    title: "Lack of Trust & Authority",
    description: "Minimal proof of results, no strong case studies, and generic messaging make it hard for prospects to trust you with their business.",
    icon: <AlertTriangle className="w-8 h-8" />,
    gradient: "from-indigo-500 to-[#453abc]"
  },
];

export function ProblemSection() {
  return (
    <section className="bg-[#f8f9fa] py-16 md:py-32 px-6 md:px-16 relative overflow-hidden">
      {/* Self-contained animation keyframes so this section never depends on
          an external Tailwind config having these defined. This fixes the
          bug where the badge/heading/paragraph stayed invisible (opacity: 0)
          because animate-fade-up had no matching @keyframes anywhere. */}
      <style>{`
        @keyframes ps-fade-up {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes ps-gradient-x {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .ps-fade-up {
          opacity: 0;
          animation: ps-fade-up 0.6s ease-out forwards;
        }
        .ps-gradient-x {
          animation: ps-gradient-x 3s ease infinite;
        }
      `}</style>

      {/* Abstract Background Orbs for Light Theme */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#453abc]/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12 md:mb-24">
          <div
            className="inline-block px-4 py-1.5 mb-6 rounded-full border border-[#453abc]/10 bg-[#453abc]/5 backdrop-blur-md ps-fade-up"
          >
            <span className="text-xs font-bold text-[#453abc] uppercase tracking-[0.3em]">The Opportunity Cost</span>
          </div>

          <h2
            className="text-[1.75rem] sm:text-4xl md:text-6xl lg:text-7xl font-poppins font-bold text-[#191a23] mb-6 md:mb-8 leading-[1.1] ps-fade-up"
            style={{ animationDelay: "0.15s" }}
          >
            Is Your Website <br />
            <span className="relative inline-block mt-2">
              <span className="ps-gradient-x relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-[#453abc] via-[#60c3e3] to-[#453abc] bg-[length:200%_auto]">
                Costing You
              </span>
              <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 445 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 5.5C127.667 2.16667 381 -2.1 444 6.5" stroke="url(#paint0_linear)" strokeWidth="2" strokeLinecap="round" />
                <defs>
                  <linearGradient id="paint0_linear" x1="1" y1="5.5" x2="444" y2="5.5" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#453abc" />
                    <stop offset="1" stopColor="#60c3e3" />
                  </linearGradient>
                </defs>
              </svg>
            </span> Business?
          </h2>

          <p
            className="text-gray-600 text-sm sm:text-lg md:text-xl max-w-xl mx-auto leading-relaxed font-light ps-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            A generic profile is a liability. We help you transition from being "just another option" to the only logical choice.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="group relative ps-fade-up"
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              {/* Outer Glow Effect for Light Theme */}
              <div className="absolute -inset-2 bg-gradient-to-b from-[#453abc]/10 to-transparent rounded-xl transition-opacity duration-500 opacity-0 group-hover:opacity-100 blur-xl" />

              <div className="relative h-full flex flex-col p-6 sm:p-10 md:p-12 rounded-xl bg-white border border-gray-100 overflow-hidden transition-all duration-500 group-hover:shadow-[0_40px_80px_-20px_rgba(69,58,188,0.15)] group-hover:-translate-y-2">
                {/* Large Background ID Number for Light Theme */}
                <div
                  aria-hidden="true"
                  className="absolute -top-6 -right-4 text-9xl font-bold text-gray-400/10 select-none group-hover:text-[#453abc]/10 transition-colors pointer-events-none font-poppins"
                >
                  {problem.id}
                </div>

                {/* Card Icon */}
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${problem.gradient} p-[1.5px] mb-10 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-[#453abc]/10 shrink-0`}>
                  <div className="w-full h-full bg-white rounded-xl flex items-center justify-center text-gray-800 transition-colors group-hover:bg-transparent group-hover:text-white">
                    {problem.icon}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-[#191a23] mb-6 font-poppins leading-tight tracking-tight capitalize shrink-0">
                  {problem.title}
                </h3>

                <p className="text-gray-600 leading-relaxed text-base font-light mb-10 group-hover:text-gray-700 transition-colors">
                  {problem.description}
                </p>

                <div className="pt-8 border-t border-gray-100 mt-auto flex items-center justify-between shrink-0">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em] mb-1">Financial Impact</span>
                    <span className="text-lg font-bold text-[#453abc] tracking-tight">Revenue Loss</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}