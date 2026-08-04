import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { blogAPI, BlogPost } from "../api";
import SEO from "../components/ui/SEO";
import { LoadingState, NotFoundState, BackNavigation, ArticleHeader, ArticleContent, ArticleFooter, BlogStyles } from "../components/blog-detail";

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

  if (loading) return <LoadingState />;
  if (!post) return <NotFoundState />;

  return (
    <main className="bg-white min-h-screen pt-32 pb-24">
      <SEO
        title={post.seoTitle || post.title}
        description={post.seoDescription || post.description}
        keywords={(post.seoKeywords || post.tags || []).join(", ")}
        ogImage={post.image}
      />

      <div className="max-w-4xl mx-auto px-6">
        <BackNavigation />
        <ArticleHeader post={post} />
        <article className="mb-20">
          <ArticleContent post={post} />
        </article>
        <ArticleFooter tags={post.tags || []} />
      </div>

      <BlogStyles />
    </main>
  );
}
