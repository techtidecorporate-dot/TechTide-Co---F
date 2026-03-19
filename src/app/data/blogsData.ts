export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  author: string;
  image: string;
  description: string;
  content: string;
  readTime: string;
  uploadedDate: string;
  createdAt?: string;
  tags: string[];
  seoTitle: string;
  seoDescription: string;
  seoKeywords: string[];
  metaTags: string;
}

export const blogsData: BlogPost[] = [];
