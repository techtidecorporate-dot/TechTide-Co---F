import { useState, useMemo } from "react";
import {
  Users, Building2, GraduationCap, HeartPulse, Package, ShoppingCart,
  UtensilsCrossed, Dumbbell, UserCheck, Warehouse, Truck, Home,
  CalendarCheck, Key, CalendarRange, BookOpen, Share2, Pizza, Car,
  Store, Code, ShoppingBag, type LucideIcon
} from "lucide-react";
import { SolutionCategory } from "../../data/servicesData";

const iconMap: Record<string, LucideIcon> = {
  Users, Building2, GraduationCap, HeartPulse, Package, ShoppingCart,
  UtensilsCrossed, Dumbbell, UserCheck, Warehouse, Truck, Home,
  CalendarCheck, Key, CalendarRange, BookOpen, Share2, Pizza, Car,
  Store, Code, ShoppingBag
};

interface SolutionsSectionProps {
  solutionCategories: SolutionCategory[];
}

export function SolutionsSection({ solutionCategories }: SolutionsSectionProps) {
  const [showAll, setShowAll] = useState(false);

  const totalSolutions = useMemo(
    () => solutionCategories.reduce((sum, cat) => sum + cat.solutions.length, 0),
    [solutionCategories]
  );

  const initialCount = 10;

  let cumulative = 0;
  const visibleCategories = solutionCategories
    .map((cat) => {
      if (showAll) return cat;
      const start = cumulative;
      cumulative += cat.solutions.length;
      if (start >= initialCount) return null;
      const end = Math.min(cat.solutions.length, initialCount - start);
      return { ...cat, solutions: cat.solutions.slice(0, end) };
    })
    .filter(Boolean) as SolutionCategory[];

  const hasMore = totalSolutions > initialCount && !showAll;

  return (
    <div className="bg-[#f4f5f7] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-16">
          <p className="font-poppins text-transparent bg-clip-text bg-gradient-to-r from-[#453abc] to-[#60c3e3] text-sm font-medium tracking-[0.2em] uppercase mb-4">
            What We Offer
          </p>
          <h2 className="text-3xl md:text-5xl font-poppins font-bold text-[#191a23]">
            Applications We Build
          </h2>
        </div>

        <div className="space-y-16">
          {visibleCategories.map((cat, ci) => (
            <div key={ci}>
              <h3 className="text-lg font-poppins font-semibold text-[#453abc] mb-8 flex items-center gap-3">
                <span className="w-8 h-0.5 bg-gradient-to-r from-[#453abc] to-[#60c3e3] rounded-full shrink-0" />
                {cat.category}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {cat.solutions.map((sol, si) => {
                  const Icon = iconMap[sol.icon] || Code;
                  return (
                    <div
                      key={si}
                      className="group bg-white rounded-2xl p-6 border border-gray-100
                        shadow-[0_10px_40px_rgba(0,0,0,0.04)]
                        hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]
                        hover:border-[#453abc]/10
                        transition-all duration-400 flex flex-col"
                    >
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#453abc]/10 to-[#60c3e3]/10 flex items-center justify-center mb-4 group-hover:from-[#453abc]/20 group-hover:to-[#60c3e3]/20 transition-colors">
                        <Icon className="w-5 h-5 text-[#453abc]" />
                      </div>
                      <h4 className="text-base font-poppins font-semibold text-[#191a23] mb-2 group-hover:text-[#453abc] transition-colors">
                        {sol.title}
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed flex-1">
                        {sol.description}
                      </p>
                      {sol.href && (
                        <a
                          href={sol.href}
                          className="mt-3 text-xs font-poppins font-medium text-[#453abc] hover:text-[#60c3e3] transition-colors inline-flex items-center gap-1"
                        >
                          Learn More &rarr;
                        </a>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {hasMore && (
          <div className="text-center mt-12">
            <button
              onClick={() => setShowAll(true)}
              className="px-10 py-4 rounded-2xl font-poppins font-bold text-base text-white
                bg-gradient-to-r from-[#453abc] to-[#5f54e6]
                shadow-[0_15px_40px_rgba(69,58,188,0.3)]
                hover:shadow-[0_25px_60px_rgba(69,58,188,0.4)]
                transition-all duration-300 transform hover:scale-[1.03]
                inline-flex items-center gap-3"
            >
              View All Solutions ({totalSolutions})
            </button>
          </div>
        )}
      </div>
    </div>
  );
}