import { Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";

export function NotFoundState() {
  return (
    <div className="min-h-screen bg-white pt-40 px-6 text-center">
      <h1 className="text-2xl font-bold mb-4">Article Not Found</h1>
      <Link to="/blog" className="text-[#453abc] hover:underline flex items-center justify-center gap-2">
        <ChevronLeft size={20} /> Back to Blog
      </Link>
    </div>
  );
}
