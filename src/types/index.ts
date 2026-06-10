export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'user';
}

export interface BlogPost {
  id: string;
  title: string;
  description: string;
  content?:
    | string
    | Array<{
        subtitle?: string;
        title?: string;
        paragraph?: string;
        content?: string;
        text?: string;
        image?: string;
        image_url?: string;
      }>;
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

export interface Subscriber {
  id: string;
  email: string;
  subscribedAt: string;
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

export interface CookieConsent {
  id?: string;
  visitorId: string;
  consentStatus: 'accepted' | 'rejected';
  timestamp: number;
  pageUrl: string;
  userAgent: string;
  source: string;
}

export interface PageVisit {
  id?: string;
  visitorId: string;
  pageUrl: string;
  timestamp: number;
}

export interface Lead {
  id?: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
  visitorId: string;
  source: string;
  timestamp: number;
}

export interface LeadScore {
  id?: string;
  visitorId: string;
  score: number;
  updatedAt: number;
}

export interface LeadWithDetails {
  visitorId: string;
  consent?: CookieConsent | null;
  pageVisits: PageVisit[];
  lead?: Lead | null;
  score: LeadScore | null;
}
