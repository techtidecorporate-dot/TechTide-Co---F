import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Clock, Search } from "lucide-react";
import { BlogPost } from "@/api";

interface BlogGridSectionProps {
  posts: BlogPost[];
  isLoading: boolean;
}

export function BlogGridSection({ posts, isLoading }: BlogGridSectionProps) {
  if (isLoading) {
    return (
      <div className="max-w-7xl mx-auto px-6 md:px-8 pb-20 md:pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {[1, 2, 3].map((n) => (
            <div key={n} className="bg-white rounded-2xl overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.03)] animate-pulse">
              <div className="h-56 bg-gray-200" />
              <div className="px-6 py-8 space-y-4">
                <div className="h-4 bg-gray-200 rounded w-3/4" />
                <div className="h-6 bg-gray-200 rounded w-full" />
                <div className="h-4 bg-gray-200 rounded w-full" />
                <div className="h-4 bg-gray-200 rounded w-2/3" />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <section className="pb-20 md:pb-32">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {posts.map((post) => (
            // <Link
            //   key={post.id}
            //   to={`/blog/${post.slug || post.id}`}
            //   className="bg-white rounded-2xl border border-transparent hover:border-[#453abc]/10 shadow-[0_15px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_30px_60px_rgba(0,0,0,0.08)] transition-all duration-500 overflow-hidden group flex flex-col"
            // >
            // </Link>
            <article
              key={post.id}
              className="bg-white rounded-2xl border border-transparent hover:border-[#453abc]/10 shadow-[0_15px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_30px_60px_rgba(0,0,0,0.08)] transition-all duration-500 overflow-hidden group flex flex-col"
            >
              <div className="relative h-56 overflow-hidden">
                <Link
                  to={`/blog/${post.slug || post.id}`}
                >
                  <img
                    src={post.image || "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop"}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </Link>
                <div className="absolute bottom-4 left-4 glass-dark px-3 py-1.5 rounded-xl text-white text-[10px]  tracking-wider uppercase backdrop-blur-sm">{(post.tags || [])[0] || "Blog"}</div>
              </div>

              <div className="px-6 py-8 flex flex-col flex-1">
                <div className="flex items-center gap-4 text-[10px] md:text-[11px] text-[#6b7280] font-medium uppercase tracking-wider mb-4">
                  <time className="flex items-center gap-1.5" dateTime={post.createdAt || ""}>
                    <Calendar className="w-3.5 h-3.5 text-[#453abc]" />
                    {post.createdAt
                      ? new Date(post.createdAt).toLocaleDateString()
                      : "N/A"}
                  </time>
                  <span className="w-1 h-1 rounded-full bg-gray-300" />
                  <time className="flex items-center gap-1.5" dateTime={post.readTime || ""}>
                    <Clock className="w-3.5 h-3.5 text-[#453abc]" />
                    {post.readTime}
                  </time>
                </div>

                <Link
                  to={`/blog/${post.slug || post.id}`}
                >
                  <h3 className="text-xl font-medium text-[#191a23] mb-4 line-clamp-2 leading-snug group-hover:text-[#453abc] transition-colors">{post.title}</h3>
                </Link>

                <p className="text-[#6b7280] text-sm mb-6 line-clamp-3 leading-relaxed">{post.description}</p>

                {/* <div className="flex flex-wrap gap-2 mb-4">
                {(post.tags || []).map((tag, idx) => (
                  <span
                    key={idx}
                    className="bg-[#f8f9fa] text-[#6b7280] px-3 py-1 rounded-lg text-[9px] md:text-[10px] font-medium tracking-wide uppercase"
                  >
                    #{tag}
                  </span>
                ))}
              </div> */}

                <div className="flex items-center justify-between border-t border-gray-50 pt-4">
                  <div className="flex items-center gap-3">
                    <div className="size-8 rounded-full bg-gradient-to-br from-[#453abc] to-[#60c3e3] flex items-center justify-center text-white text-[10px]  font-semibold">
                      {post.author.charAt(0)}
                    </div>
                    <p className="text-sm font-semibold text-[#191a23]">{post.author}</p>
                  </div>
                  <button className="text-[#453abc] font-medium text-xs flex items-center gap-1 hover:gap-2 transition-all">
                    Read More
                    <ArrowRight className="size-4" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {posts.length === 0 && (
          <div className="text-center py-24 md:py-32 glass rounded-[2rem]">
            <Search className="w-12 h-12 md:w-16 md:h-16 text-gray-200 mx-auto mb-4" />
            <h3 className="text-xl md:text-2xl font-medium text-[#191a23] mb-2">No articles found</h3>
            <p className="text-[#6b7280] text-sm md:text-base">Try adjusting your search or category filters.</p>
          </div>
        )}
      </div>
    </section>
  );
}

