import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { blogAPI, BlogPost } from "../../api";
import { Calendar, User, Clock, ChevronLeft, Share2, Tag } from "lucide-react";
import SEO from "../components/ui/SEO";
import DOMPurify from 'dompurify';

export default function BlogDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        const { data } = await blogAPI.getAll();
        const normalizedSlug = slug?.toLowerCase().trim();
        const foundPost = data.find(
          (p: BlogPost) =>
            p.slug?.toLowerCase().trim() === normalizedSlug ||
            p.id === slug,
        );
        if (foundPost) {
          setPost(foundPost);
        }
      } catch (error) {
        console.error("Failed to fetch post", error);
      } finally {
        setLoading(false);
      }
    };
    if (slug) fetchPost();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-[#453abc]"></div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-white pt-40 px-6 text-center">
        <h1 className="text-2xl font-bold mb-4">Article Not Found</h1>
        <Link to="/blog" className="text-[#453abc] hover:underline flex items-center justify-center gap-2">
          <ChevronLeft size={20} /> Back to Blog
        </Link>
      </div>
    );
  }

  const renderContent = () => {
    if (!post.content) return null;

    // New HTML Content logic
    if (typeof post.content === 'string' && post.content.includes('<')) {
      return (
        <div 
          className="blog-content-container"
          dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post.content) }} 
        />
      );
    }

    // Legacy Array Content logic (Matches the Screenshot structure)
    const sections = Array.isArray(post.content) ? post.content : [];
    
    return (
      <div className="space-y-12">
        {sections.map((section: any, idx: number) => {
          const title = section.title || section.subtitle;
          const imageUrl = section.image || section.image_url;
          const text = section.content || section.paragraph || section.text;

          return (
            <div key={idx} className="space-y-6">
              {title && (
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-8 bg-[#453abc] rounded-full" />
                  <h2 className="text-2xl md:text-3xl font-bold text-[#191a23]">
                    {title}
                  </h2>
                </div>
              )}
              {imageUrl && (
                <div className="rounded-[2rem] overflow-hidden shadow-sm">
                  <img
                    src={imageUrl}
                    alt={title || "Section image"}
                    className="w-full object-cover max-h-[500px]"
                    loading="lazy"
                  />
                </div>
              )}
              {text && (
                <p className="text-gray-600 leading-[1.8] text-lg">
                  {text}
                </p>
              )}
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <main className="bg-white min-h-screen pt-32 pb-24">
      <SEO
        title={post.seoTitle || post.title}
        description={post.seoDescription || post.description}
        keywords={(post.seoKeywords || post.tags || []).join(", ")}
        ogImage={post.image}
      />
      
      <div className="max-w-4xl mx-auto px-6">
        {/* Navigation */}
        <Link
          to="/blog"
          className="flex items-center gap-1 text-gray-400 hover:text-[#453abc] transition-colors text-sm mb-10"
        >
          <ChevronLeft size={16} />
          Back to Blog
        </Link>

        {/* Header Section */}
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

        {/* Content Section */}
        <article className="mb-20">
          {renderContent()}
        </article>

        {/* Footer Tags */}
        <footer className="pt-10 border-t border-gray-100">
          <div className="flex flex-wrap items-center gap-4">
             <Tag size={16} className="text-gray-300" />
             {(post.tags || []).map(tag => (
               <span key={tag} className="text-xs font-bold text-gray-400 hover:text-[#453abc] cursor-pointer transition-colors uppercase tracking-wider">
                 #{tag.replace(/\s+/g, '')}
               </span>
             ))}
          </div>
        </footer>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .blog-content-container p {
          margin-bottom: 1.25rem;
          line-height: 1.8;
          color: #4b5563;
          font-size: 1.125rem;
        }
        .blog-content-container h2, .blog-content-container h3 {
          color: #191a23;
          font-weight: 700;
          margin-top: 2rem;
          margin-bottom: 1rem;
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .blog-content-container h2::before {
          content: "";
          display: block;
          width: 5px;
          height: 1.3em;
          background-color: #453abc;
          border-radius: 99px;
        }
        .blog-content-container h2 { font-size: 1.875rem; }
        .blog-content-container h3 { font-size: 1.5rem; }
        .blog-content-container img {
          width: 100%;
          border-radius: 2rem;
          margin: 1.5rem 0;
          display: block;
        }
        .blog-content-container ul, .blog-content-container ol {
          margin-bottom: 1.5rem;
          padding-left: 1.5rem;
          color: #4b5563;
        }
        .blog-content-container ul {
          list-style-type: disc;
        }
        .blog-content-container ol {
          list-style-type: decimal;
        }
        .blog-content-container li {
          margin-bottom: 0.5rem;
          padding-left: 0.5rem;
        }
        .blog-content-container blockquote {
          border-left: 4px solid #453abc;
          padding: 1.25rem 2rem;
          background: #f9fafb;
          border-radius: 0 1rem 1rem 0;
          margin: 2rem 0;
          font-style: italic;
          font-size: 1.25rem;
          color: #374151;
        }
      ` }} />
    </main>
  );
}
