export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'user';
}

export interface TeamMember {
  id: string; // Required for existing members in admin panel
  name: string;
  role: string;
  category: string;
  department: string;
  image: any; 
  skills: string[];

  description?: string;
  social?: {
    linkedin?: string;
    email?: string;
    twitter?: string;
    github?: string;
  };
}

export interface TeamCategory {
  head: TeamMember[];
  senior: TeamMember[];
  junior: TeamMember[];
  intern: TeamMember[];
}

export interface BlogPost {
  id: string;
  title: string;
  description: string;
  content: string;
  author: string;
  readTime: string;
  image?: string;
  tags: string[];
  slug?: string;
  uploadedDate?: string;
  createdAt?: string;
  seoTitle?: string;
  seoDescription?: string;
  seoKeywords?: string[];
  metaTags?: string;
}

export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  image: string;
  features: string[];
  icon?: string;
  color?: string;
  bgColor?: string;
  slug: string;
  seoTitle?: string;
  seoDescription?: string;
  seoKeywords?: string[];
}

export interface JobPosition {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  salary?: string;
  description: string;
  responsibilities?: string[];
  requirements: string[];
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface JobApplication {
  id: string;
  name: string;
  email: string;
  phone: string;
  position: string;
  jobPosition?: string | JobPosition;
  coverLetter: string;
  resume?: string;
  areaOfInterest?: string;
  status: 'pending' | 'reviewed' | 'contacted' | 'rejected';
  createdAt: string;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  status: 'new' | 'read' | 'replied';
  createdAt: string;
}

export interface PartnerRequest {
  id: string;
  fullName: string;
  email: string;
  companyName?: string;
  phone: string;
  service: string;
  description: string;
  budget: string;
  status: 'new' | 'contacted' | 'resolved';
  createdAt: string;
}
