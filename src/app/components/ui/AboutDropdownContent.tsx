import { Link, useLocation } from "react-router-dom";

const aboutDropdownItems = [
  { href: "/about#overview", label: "Overview" },
  { href: "/about#leadership", label: "Leadership" },
  { href: "/company-profile", label: "Company Profile" },
];

const descriptions: Record<string, string> = {
  Overview: "Learn about our story, mission, and values.",
  Leadership: "Meet the experts driving our success.",
  "Company Profile": "View our company details and registration.",
};

interface AboutDropdownContentProps {
  onClose: () => void;
}

export function AboutDropdownContent({ onClose }: AboutDropdownContentProps) {
  const location = useLocation();

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
      <div className="grid grid-cols-4 gap-8">
        {aboutDropdownItems.map((item, i) => {
          const isActive = location.pathname + location.hash === item.href;
          return (
            <Link
              key={i}
              to={item.href}
              onClick={onClose}
              className={`group p-5 rounded-xl transition-all duration-300 ${
                isActive
                  ? "bg-gradient-to-br from-[#453abc]/5 to-[#60c3e3]/5 border border-[#453abc]/15"
                  : "hover:bg-gray-50 border border-transparent"
              }`}
            >
              <h3 className={`font-poppins font-semibold text-lg mb-1.5 transition-colors ${
                isActive ? "text-[#453abc]" : "text-[#191a23] group-hover:text-[#453abc]"
              }`}>
                {item.label}
              </h3>
              <p className="text-sm text-[#6b7280] leading-relaxed">
                {descriptions[item.label]}
              </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
