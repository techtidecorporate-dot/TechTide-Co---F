import { Tag } from "lucide-react";

export function ArticleFooter({ tags }: { tags: string[] }) {
  return (
    <footer className="pt-10 border-t border-gray-100">
      <div className="flex flex-wrap items-center gap-4">
        <Tag size={16} className="text-gray-300" />
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-xs font-bold text-gray-400 hover:text-[#453abc] cursor-pointer transition-colors uppercase tracking-wider"
          >
            #{tag.replace(/\s+/g, "")}
          </span>
        ))}
      </div>
    </footer>
  );
}
