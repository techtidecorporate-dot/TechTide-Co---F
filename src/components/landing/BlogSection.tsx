import { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { blogAPI, BlogPost } from "../../api";
export function BlogSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const { data } = await blogAPI.getAll();
        setBlogPosts(data || []);
      } catch (error) {
        console.error("Failed to fetch blogs", error);
      }
    };
    fetchBlogs();
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Different speeds for each column
  const slow = useSpring(useTransform(scrollYProgress, [0, 1], [0, -60]), {
    stiffness: 100,
    damping: 30,
  });

  const medium = useSpring(useTransform(scrollYProgress, [0, 1], [0, -120]), {
    stiffness: 100,
    damping: 30,
  });

  const fast = useSpring(useTransform(scrollYProgress, [0, 1], [0, -180]), {
    stiffness: 100,
    damping: 30,
  });

  return (
    <section
      ref={containerRef}
      style={{ contentVisibility: 'auto', containIntrinsicSize: '500px' }}
      className="relative bg-white pt-16 pb-6 md:pt-24 md:pb-0 overflow-hidden"
    >
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-16">
          {/* LEFT TEXT */}
          <div className="lg:w-2/5 text-center lg:text-left">
            <span className="block text-sm font-medium tracking-widest text-[#453abc] uppercase mb-3">Blog Section</span>

            <h2 className="text-[1.75rem] sm:text-3xl md:text-5xl  font-bold leading-tight mb-4 md:mb-6 text-[#191a23]">
              Insights and <span className="text-[#453abc]">Digital Growth</span>
            </h2>

            <p className="text-gray-500 text-sm sm:text-base md:text-lg mb-6 md:mb-8 max-w-2xl mx-auto lg:mx-0">Stay informed with practical insights, industry trends, and expert perspectives on web development, software solutions, and digital marketing.</p>

            <Link
              to="/blog"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#453abc] to-[#60c3e3] text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all font-medium"
            >
              Explore More
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* RIGHT EDITORIAL LAYOUT - DESKTOP */}
          <div className="relative hidden lg:grid lg:grid-cols-[1.1fr_1fr_1fr] gap-4 lg:w-3/5 items-start">
            {/* LEFT — FEATURED */}
            <div className="flex flex-col justify-start pt-16">
              {blogPosts[0] && (
                <motion.div style={{ y: slow }}>
                  <BlogCard blog={blogPosts[0]} variant="featured" />
                </motion.div>
              )}
            </div>

            {/* CENTER — 3 STACK */}
            <motion.div
              style={{ y: medium }}
              className="flex flex-col gap-4"
            >
              {blogPosts.slice(1, 4).map((blog) => (
                <BlogCard key={blog.id} blog={blog} variant="medium" />
              ))}
            </motion.div>

            {/* RIGHT — 2 LARGE */}
            <motion.div
              style={{ y: fast }}
              className="flex flex-col gap-4 pt-16"
            >
              {blogPosts.slice(4, 6).map((blog) => (
                <BlogCard key={blog.id} blog={blog} variant="large" />
              ))}
            </motion.div>
          </div>

          {/* MOBILE LIST - VISIBLE ONLY ON SMALL SCREENS */}
          <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-6 sm:mt-8">
            {blogPosts.slice(0, 4).map((blog) => (
              <div key={blog.id} className="h-56 sm:h-64 md:h-72">
                <BlogCard blog={blog} variant="mobile" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function BlogCard({
  blog,
  variant,
}: {
  blog: any;
  variant: "featured" | "medium" | "large" | "mobile";
}) {
  const variantClasses = {
    mobile: "h-full",
    featured: "h-[360px] md:h-[420px] lg:h-[420px]",
    medium: "h-[180px] md:h-[210px]",
    large: "h-[220px] md:h-[250px] lg:h-[260px]",
  };

  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      className={`relative ${variantClasses[variant]} rounded-3xl overflow-hidden shadow-lg group cursor-pointer`}
    >
      <Link to={`/blog/${blog.slug || blog.id}`}>
        <img
          src={blog.image || "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop"}
          alt={blog.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform blur-none duration-700 group-hover:blur-sm group-hover:scale-110"
          loading="lazy"
          decoding="async"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

        <div className="absolute bottom-0 p-6">
          <h3 className="text-lg font-bold text-white leading-snug">
            {blog.title.split(" ").length > 6
              ? blog.title.split(" ").slice(0, 6).join(" ") + "..."
              : blog.title}
          </h3>

          <div className="mt-3 flex items-center text-white/80 text-sm">
            Explore More
            <ArrowRight className="w-3 h-3 ml-2" />
          </div>
        </div>
      </Link>
    </motion.article>
  );
}

