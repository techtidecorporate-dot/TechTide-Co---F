import DOMPurify from "dompurify";
import { BlogPost } from "@/api";

export function ArticleContent({ post }: { post: BlogPost }) {
  if (!post.content) return null;

  if (typeof post.content === "string" && post.content.includes("<")) {
    return (
      <div
        className="blog-content-container"
        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post.content) }}
      />
    );
  }

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
}
