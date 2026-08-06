import { TechStackGroup } from "../..//data/servicesData";

interface TechnologyStackSectionProps {
  technologyStack: TechStackGroup[];
}

export function TechnologyStackSection({ technologyStack }: TechnologyStackSectionProps) {
  return (
    <div className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-16">
          <p className=" text-transparent bg-clip-text bg-gradient-to-r from-[#453abc] to-[#60c3e3] text-sm font-medium tracking-[0.2em] uppercase mb-4">
            Technology Stack
          </p>
          <h2 className="text-3xl md:text-5xl  font-bold text-[#191a23]">
            Built With Modern Technologies
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
          {technologyStack.map((group, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 border border-gray-100
                shadow-[0_10px_30px_rgba(0,0,0,0.04)]
                hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]
                hover:border-[#453abc]/10
                transition-all duration-300"
            >
              <h3 className="text-xs  font-semibold tracking-[0.12em] uppercase text-[#453abc]/60 mb-4">
                {group.category}
              </h3>
              <ul className="space-y-2">
                {group.items.map((item, j) => (
                  <li
                    key={j}
                    className="text-sm  font-medium text-gray-700 bg-gray-50 rounded-lg px-3 py-1.5"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
