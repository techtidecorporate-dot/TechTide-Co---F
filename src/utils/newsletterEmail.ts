import emailjs from "@emailjs/browser";
import type { BlogPost } from "@/types";
import { getBlogExcerpt } from "./excerpt";

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const BLOG_BASE_URL = import.meta.env.VITE_BLOG_BASE_URL || "https://techtidecorporate.com";

export type BlogNotificationPayload = Pick<
  BlogPost,
  "title" | "slug" | "description" | "content" | "id" | "author" | "readTime"
>;

if (
  !EMAILJS_SERVICE_ID ||
  !EMAILJS_TEMPLATE_ID ||
  !EMAILJS_PUBLIC_KEY
) {
  console.warn("EmailJS env vars missing blog notifications will be skipped");
} else {
  emailjs.init(EMAILJS_PUBLIC_KEY);
}

export const sendBlogNotificationEmail = async (
  subscriberEmail: string,
  blog: BlogNotificationPayload,
) => {

  if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
    throw new Error("EmailJS not configured check VITE_EMAILJS_* env vars");
  }

  const emailLink = `${BLOG_BASE_URL}/blog/${blog.slug || blog.id}`;
  const excerpt = getBlogExcerpt(blog as any, 180);

  const templateParams = {
    blog_title: blog.title,
    blog_excerpt: excerpt,
    author: blog.author || "TechTide Corporate Team",
    read_time: blog.readTime || "—",
    blog_link: emailLink,
    email: subscriberEmail,
    subscriber_email: subscriberEmail,
    to_email: subscriberEmail,
    subject: `New Insight: ${blog.title} - TechTide Corporate`,
  };

  return emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams, EMAILJS_PUBLIC_KEY);
};
