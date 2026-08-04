import type { BlogPost } from "@/types";

export const getBlogExcerpt = (blog: BlogPost, length: number = 160): string => {
  if (blog.description && blog.description.trim()) {
    return blog.description.trim();
  }

  if (typeof blog.content === "string") {
    return blog.content.trim().slice(0, length);
  }

  if (Array.isArray(blog.content)) {
    const text = blog.content
      .map((block) => block.paragraph || block.content || block.text)
      .filter(Boolean)
      .join(" ");
    return text.slice(0, length).trim();
  }

  return "A new blog post has been published. Read it now on TechTide Corporate LLP.";
};
