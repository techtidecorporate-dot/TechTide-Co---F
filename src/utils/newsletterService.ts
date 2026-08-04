import type { BlogPost } from "@/types";
import { getAllSubscribers } from "./newsletterStorage";
import { sendBlogNotificationEmail } from "./newsletterEmail";
import { getBlogExcerpt } from "./excerpt";

const BATCH_SIZE = 8;
const BATCH_DELAY_MS = 1200;

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const chunkArray = <T>(items: T[], size: number): T[][] => {
  const chunks: T[][] = [];
  for (let i = 0; i < items.length; i += size) {
    chunks.push(items.slice(i, i + size));
  }
  return chunks;
};

export const sendNewBlogNotification = async (blog: BlogPost) => {
  const subscribers = await getAllSubscribers();
  if (!subscribers.length) {
    return {
      successCount: 0,
      failureCount: 0,
      errors: [],
    };
  }

  const batches = chunkArray(subscribers, BATCH_SIZE);
  const result = {
    successCount: 0,
    failureCount: 0,
    errors: [] as Array<{ email: string; message: string }>,
  };

  for (const [batchIndex, batch] of batches.entries()) {
    const batchResults = await Promise.allSettled(
      batch.map((subscriber) =>
        sendBlogNotificationEmail(subscriber.email, {
          title: blog.title,
          slug: blog.slug || blog.id,
           description: getBlogExcerpt(blog),
          content: blog.content,
          author: blog.author || "TechTide Corporate Team",
          readTime: blog.readTime || "—",
          id: blog.id,
        }),
      ),
    );

    batchResults.forEach((settled, index) => {
      const { email } = batch[index];
      if (settled.status === "fulfilled") {
        result.successCount += 1;
        console.info(`Newsletter sent to ${email}`);
      } else {
        result.failureCount += 1;
        const message = settled.reason?.message || "Unknown error";
        console.error(`Failed to send newsletter to ${email}:`, message);
        result.errors.push({ email, message });
      }
    });

    if (batchIndex < batches.length - 1) {
      await sleep(BATCH_DELAY_MS);
    }
  }

  return result;
};
