import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { BlogPost } from "@/api";

export function FeaturedPostSection({ post }: { post: BlogPost }) {
  return (
    <article className="max-w-7xl mx-auto px-6 md:px-8 mb-16 md:mb-20 md:mt-10">
      <div className="glass rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] overflow-hidden group transition-all duration-500 hover:shadow-[0_40px_80px_rgba(0,0,0,0.1)]">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="relative h-64 sm:h-80 lg:h-full overflow-hidden">
            <img
              src={post.image || "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop"}
              alt={post.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#191a23]/40 to-transparent" />
            <div className="absolute top-6 left-6 glass-dark px-4 py-2 rounded-xl text-white text-[10px] md:text-xs  tracking-wider uppercase backdrop-blur-md">Featured Article</div>
          </div>
          <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
            <div className="flex flex-wrap items-center gap-4 md:gap-6 text-[10px] md:text-xs text-[#6b7280] mb-6">
              <span className="bg-[#453abc]/5 text-[#453abc] px-4 py-1.5 rounded-full font-medium">
                {(post.tags || [])[0] || "Blog"}
              </span>
              <time className="flex items-center gap-2" dateTime={post.createdAt || ""}>
                <Calendar className="w-3.5 h-3.5 md:w-4 md:h-4 text-[#453abc]" />
                {post.createdAt
                  ? new Date(post.createdAt).toLocaleDateString()
                  : "N/A"}
              </time>
              <time className="flex items-center gap-2" dateTime={post.readTime || ""}>
                <Clock className="w-3.5 h-3.5 md:w-4 md:h-4 text-[#453abc]" />
                {post.readTime}
              </time>
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-[#191a23] mb-6 leading-tight group-hover:text-[#453abc] transition-colors">{post.title}</h2>
            <p className="text-[#6b7280] text-base md:text-lg mb-8 leading-relaxed line-clamp-4">{post.description}</p>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-8 mt-auto">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-white shadow-sm overflow-hidden bg-gradient-to-br from-[#453abc] to-[#60c3e3] p-[2px]">
                  <div className="w-full h-full rounded-full bg-white flex items-center justify-center text-[#453abc]  font-semibold text-sm md:text-base">
                    {post.author.charAt(0)}
                  </div>
                </div>
                <div>
                  <h6 className="block text-sm font-semibold text-[#191a23]">{post.author}</h6>
                  <p className="text-[10px] md:text-xs text-[#6b7280]">Staff Writer</p>
                </div>
              </div>
              <Link
                to={`/blog/${post.slug || post.id}`}
                className="w-full sm:w-auto bg-[#191a23] text-white px-8 py-4 rounded-lg font-medium hover:bg-[#453abc] transition-all duration-300 hover:translate-x-2 flex items-center justify-center gap-3"
              >
                Read More
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

