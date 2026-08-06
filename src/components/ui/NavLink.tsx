import { Link } from "react-router-dom";

interface NavLinkProps {
  href: string;
  label: string;
  isActive: boolean;
  shouldBeTransparent: boolean;
  onClick?: () => void;
}

export function NavLink({ href, label, isActive, shouldBeTransparent, onClick }: NavLinkProps) {
  return (
    <Link
      to={href}
      onClick={onClick}
      className={`relative  py-1 transition-all duration-300 group ${
        isActive
          ? shouldBeTransparent
            ? "text-white font-medium"
            : "text-[#453abc] font-medium"
          : shouldBeTransparent
            ? "text-white/80 hover:text-white"
            : "text-gray-600 hover:text-gray-900"
      }`}
    >
      <span className="relative z-10">{label}</span>
      <span
        className={`absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-[#453abc] to-[#60c3e3] transition-all duration-300 ${
          isActive
            ? "w-full opacity-100"
            : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"
        }`}
      />
    </Link>
  );
}

