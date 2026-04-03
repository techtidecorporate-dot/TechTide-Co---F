import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { blogAPI, BlogPost } from "../../api";
import { Calendar, User, Clock, ChevronLeft, Share2, Tag } from "lucide-react";
import SEO from "../components/ui/SEO";

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
      <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4">
        <div className="text-gray-500 text-lg">Loading...</div>
      </div>
    );
  }

  const renderContentBlock = () => {
    const raw = post?.content;

    if (!raw) return [];

    const sections = (() => {
      if (Array.isArray(raw)) return raw;

      if (typeof raw === "string") {
        const trimmed = raw.trim();
        if (!trimmed) return [];

        try {
          const parsed = JSON.parse(trimmed);
          if (Array.isArray(parsed)) return parsed;
          if (typeof parsed === "string") return [{ paragraph: parsed }];
          if (typeof parsed === "object" && parsed !== null) return [parsed];
        } catch {
          // not JSON
        }

        return trimmed
          .split("\n")
          .map((line) => line.trim())
          .filter(Boolean)
          .map((line) => ({ paragraph: line }));
      }

      if (typeof raw === "object") return [raw];

      return [];
    })();

    return sections.map((section: any, idx: number) => {
      if (typeof section === "string") {
        return <p key={idx}>{section}</p>;
      }

      const subtitle = section.subtitle || section.title;
      const imageUrl = section.image || section.image_url;
      const paragraphText =
        section.paragraph || section.content || section.text || "";

      const paragraphs = Array.isArray(paragraphText)
        ? paragraphText
        : typeof paragraphText === "string"
        ? paragraphText.split("\n").map((line: string) => line.trim()).filter(Boolean)
        : [JSON.stringify(paragraphText)];

      return (
        <div key={idx} className="space-y-4">
          {subtitle && (
            <div className="flex items-center gap-3">
              <span className="block h-6 w-1 rounded-full bg-gradient-to-b from-[#453abc] via-[#60c3e3] to-[#a1d1ff]" />
              <h2 className="text-2xl font-semibold text-gray-900">{subtitle}</h2>
            </div>
          )}
          {imageUrl && (
            <img
              src={imageUrl}
              alt={subtitle || `section-${idx}`}
              className="w-full max-h-96 object-cover rounded-xl"
            />
          )}
          {paragraphs.map((line: string, pIndex: number) => (
            <p key={pIndex} className="text-base leading-relaxed text-gray-600">
              {line}
            </p>
          ))}
        </div>
      );
    });
  };

  if (!post) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4">
        <SEO title="Post Not Found" />
        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          Blog Post Not Found
        </h1>
        <Link
          to="/blog"
          className="text-[#453abc] hover:underline flex items-center gap-2"
        >
          <ChevronLeft size={20} />
          Back to Blogs
        </Link>
      </div>
    );
  }

  return (
    <main className="pt-24 pb-20 bg-white">
      <SEO
        title={post.seoTitle || post.title}
        description={post.seoDescription || post.description}
        keywords={(post.seoKeywords || post.tags).join(", ")}
        ogImage={post.image}
        ogUrl={`https://techtidecorporate.com/blog/${post.slug}`}
      />
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <nav className="mb-8">
          <Link
            to="/blog"
            className="text-gray-500 hover:text-[#453abc] transition-colors flex items-center gap-2 text-sm font-medium"
          >
            <ChevronLeft size={18} />
            Back to Blog
          </Link>
        </nav>

        {/* Header */}
        <header className="mb-10">
          <div className="flex flex-wrap items-center gap-4 mb-6">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-[#453abc]/5 text-[#453abc] text-xs font-bold uppercase tracking-wider rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-4 mb-8">
            <span className="block h-8 w-1" />
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
              {post.title}
            </h1>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-6 py-6 border-y border-gray-100">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#453abc]/10 rounded-full flex items-center justify-center text-[#453abc]">
                  <User size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium">Author</p>
                  <p className="text-sm font-bold text-gray-900">
                    {post.author}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-gray-400">
                  <Calendar size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium">Published</p>
                  <p className="text-sm font-bold text-gray-900">
                    {new Date(
                      post.uploadedDate || post.createdAt || new Date(),
                    ).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-gray-400">
                  <Clock size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium">Read Time</p>
                  <p className="text-sm font-bold text-gray-900">
                    {post.readTime}
                  </p>
                </div>
              </div>
            </div>

            <button className="p-3 text-gray-400 hover:text-[#453abc] hover:bg-[#453abc]/5 rounded-full transition-all">
              <Share2 size={20} />
            </button>
          </div>
        </header>

        {/* Content */}
        <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-6">
          {renderContentBlock()}
        </div>

        {/* Footer info */}
        <footer className="mt-16 pt-10 border-t border-gray-100">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-sm font-bold text-gray-400 uppercase tracking-widest mr-2 flex items-center gap-2">
              <Tag size={16} />
              Tags:
            </span>
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-gray-50 text-gray-500 text-xs font-medium rounded-lg"
              >
                #{tag}
              </span>
            ))}
          </div>
        </footer>
      </article>
    </main>
  );
}
