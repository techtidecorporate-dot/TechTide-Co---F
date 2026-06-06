import { Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";

export function BackNavigation() {
  return (
    <Link
      to="/blog"
      className="flex items-center gap-1 text-gray-400 hover:text-[#453abc] transition-colors text-sm mb-10"
    >
      <ChevronLeft size={16} />
      Back to Blog
    </Link>
  );
}
