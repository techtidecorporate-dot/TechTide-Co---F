import { Calendar, User, Clock, Share2 } from "lucide-react";
import { BlogPost } from "@/api";

export function ArticleHeader({ post }: { post: BlogPost }) {
  return (
    <header className="mb-12">
      <div className="flex flex-wrap gap-4 mb-8">
        {(post.tags || []).map((tag) => (
          <span
            key={tag}
            className="text-[#453abc] text-[11px] font-black uppercase tracking-[0.2em]"
          >
            {tag}
          </span>
        ))}
      </div>

      <h1 className="text-4xl md:text-6xl font-bold text-[#191a23] mb-10 leading-[1.1] tracking-tight">
        {post.title}
      </h1>

      <div className="flex flex-wrap items-center justify-between gap-6 py-6 border-y border-gray-100">
        <div className="flex flex-wrap items-center gap-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#453abc]/10 flex items-center justify-center text-[#453abc]">
              <User size={18} />
            </div>
            <div>
              <p className="text-[10px] text-gray-400 uppercase font-black tracking-widest leading-none mb-1">Author</p>
              <p className="text-sm font-bold text-[#191a23] leading-none">{post.author}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400">
              <Calendar size={18} />
            </div>
            <div>
              <p className="text-[10px] text-gray-400 uppercase font-black tracking-widest leading-none mb-1">Published</p>
              <p className="text-sm font-bold text-[#191a23] leading-none">
                {new Date(post.uploadedDate || post.createdAt || new Date()).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric"
                })}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400">
              <Clock size={18} />
            </div>
            <div>
              <p className="text-[10px] text-gray-400 uppercase font-black tracking-widest leading-none mb-1">Read Time</p>
              <p className="text-sm font-bold text-[#191a23] leading-none">{post.readTime}</p>
            </div>
          </div>
        </div>

        <button className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center text-gray-400 hover:text-[#453abc] hover:border-[#453abc]/20 transition-all">
          <Share2 size={18} />
        </button>
      </div>
    </header>
  );
}
