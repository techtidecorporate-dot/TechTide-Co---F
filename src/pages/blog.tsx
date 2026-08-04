import { useState, useEffect } from "react";
import { useNewsletter } from "@/hooks/useNewsletter";
import { blogAPI, BlogPost } from "../api";
import SEO from "../components/ui/SEO";
import { FAQ } from "../components/ui/FAQ";
import { blogFAQ } from "../data/faqData";
import { HeroSection, FeaturedPostSection, BlogGridSection, NewsletterSection } from "../components/blog";

export default function BlogPage() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setIsLoading(true);
        const { data } = await blogAPI.getAll();
        setBlogPosts(data || []);
      } catch (error) {
        console.error("Failed to fetch blogs", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  const featuredPost = blogPosts[0];
  const {
    email: newsletterEmail,
    setEmail: setNewsletterEmail,
    loading: newsletterLoading,
    subscribe: handleNewsletterSubscribe,
  } = useNewsletter();

  return (
    <main className="bg-gradient-to-b from-[#f8f9fa] to-[#eef2f7]">
      <SEO
        title="Blog & Insights"
        description="Stay updated with the latest trends in web development, mobile apps, and digital innovation from TechTide Corporate LLP."
        keywords="web development blog, tech news, mobile app development trends, digital marketing insights, TechTide insights, software engineering blog"
      />

      <HeroSection />

      {!isLoading && featuredPost && <FeaturedPostSection post={featuredPost} />}

      <BlogGridSection posts={blogPosts} isLoading={isLoading} />

      <NewsletterSection
        email={newsletterEmail}
        onEmailChange={(e) => setNewsletterEmail(e.target.value)}
        onSubmit={handleNewsletterSubscribe}
        loading={newsletterLoading}
      />

      <FAQ {...blogFAQ} />
    </main>
  );
}