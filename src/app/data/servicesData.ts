import ApiIntegrationImg from "@/assets/Api.jpg";
import BrandingImg from "@/assets/branding-strategy-marketing-business-graphic-design.jpg";
import AutomationImg from "@/assets/automation.jpg";
import LeadGenerationImg from '@/assets/lead-generation-service-in-pan-india-digital-marketing-1000x1000.webp'
export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface Benefit {
  title: string;
  description: string;
}

export interface IndustryUseCase {
  industry: string;
  description: string;
}

export interface USP {
  title: string;
  description: string;
}

export interface SystemItem {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  image: string;
  features: string[];
  icon?: string;
  slug: string;
  color: string;
  bgColor: string;
  seoTitle: string;
  seoDescription: string;
  seoKeywords: string[];
  isLandingPage?: boolean;
  introContent?: string;
  benefits?: Benefit[];
  processSteps?: ProcessStep[];
  industryUseCases?: IndustryUseCase[];
  usps?: USP[];
  servicesContent?: string[];
  ctaHeading?: string;
  ctaDescription?: string;
}

export const systemsData: SystemItem[] = [
  {
    id: "s1",
    title: "Lead Generation Websites",
    shortDescription: "Transform your website into a high-converting sales asset that generates qualified leads 24/7.",
    description: "We design and build bespoke websites optimized for conversion. Every element is strategically placed to guide users toward your primary CTA, ensuring a steady stream of leads for your business.",
    image: LeadGenerationImg,
    features: [
      "Conversion-Optimized Layouts",
      "High-Speed Performance",
      "Strategic CTA Placement",
      "Lead Capture Integration"
    ],
    slug: "lead-generation-websites",
    color: "#453abc",
    bgColor: "#f8f9fa",
    seoTitle: "Lead Generation Website Development Services",
    seoDescription: "Custom websites designed to generate leads and grow your business.",
    seoKeywords: ["lead generation", "conversion optimization", "sales website"]
  },
  {
    id: "s8",
    title: "Conversion Optimization",
    shortDescription: "Turn more existing traffic into paying customers with data-driven UI/UX strategies.",
    description: "Our conversion optimization services focus on the user journey. We analyze behavior, identify friction points, and implement design changes that significantly increase your conversion rates.",
    image: BrandingImg,
    features: [
      "User Experience (UX) Audits",
      "A/B Testing & Analysis",
      "High-Fidelity UI Design",
      "Performance Optimization"
    ],
    slug: "conversion-optimization",
    color: "#453abc",
    bgColor: "#f8f9fa",
    seoTitle: "Conversion Rate Optimization & UI/UX Design",
    seoDescription: "Professional UI/UX and CRO services to boost your sales.",
    seoKeywords: ["CRO", "UI/UX design", "conversion rate"]
  },
  {
    id: "s7",
    title: "Growth Marketing Systems",
    shortDescription: "Scalable marketing infrastructures that drive predictable growth and high ROI.",
    description: "We build digital marketing systems that combine SEO, performance marketing, and automation to create a predictable flow of new business opportunities.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Predictable Growth Funnels",
      "Automated Email Sequences",
      "Performance Analytics",
      "SEO & Content Strategy"
    ],
    slug: "growth-marketing-systems",
    color: "#453abc",
    bgColor: "#f8f9fa",
    seoTitle: "Growth Marketing and Digital Sales Funnels",
    seoDescription: "Data-driven marketing systems to scale your company.",
    seoKeywords: ["growth marketing", "sales funnels", "automated marketing"]
  },
  {
    id: "s3",
    title: "Business Automation Systems",
    shortDescription: "Streamline operations and reduce manual work with custom automation tools.",
    description: "Optimize your internal workflows through custom ERP, CRM, and automation tools designed to save time and reduce operational costs.",
    image: AutomationImg,
    features: [
      "Workflow Process Automation",
      "Custom ERP & CRM Solutions",
      "Internal Tool Development",
      "Operational Efficiency Training"
    ],
    slug: "business-automation-systems",
    color: "#453abc",
    bgColor: "#f8f9fa",
    seoTitle: "Enterprise Software and Automation",
    seoDescription: "Optimize your business with custom enterprise software.",
    seoKeywords: ["ERP", "CRM", "automation"]
  },
  {
    id: "s2",
    title: "Scalable SaaS Products",
    shortDescription: "Build and scale profitable software-as-a-service products from scratch.",
    description: "We help founders and enterprises build secure, scalable, and multi-tenant SaaS platforms that are ready for mass adoption.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Multi-tenant Architecture",
      "Subscription Management",
      "Cloud Infrastructure",
      "MVP to Scale Support"
    ],
    slug: "saas-product-development",
    color: "#453abc",
    bgColor: "#f8f9fa",
    seoTitle: "SaaS Product Development Services",
    seoDescription: "Custom SaaS development for modern software products.",
    seoKeywords: ["SaaS", "software product", "cloud apps"]
  },
  {
    id: "s6",
    title: "API & System Integration",
    shortDescription: "Connect your tech stack for seamless data flow and zero manual entry.",
    description: "We integrate your existing tools and build custom APIs to ensure your systems talk to each other, improving data accuracy and speed.",
    image: ApiIntegrationImg,
    features: [
      "Custom API Development",
      "Third-party Integrations",
      "Real-time Data Sync",
      "Legacy System Connection"
    ],
    slug: "api-integration",
    color: "#453abc",
    bgColor: "#f8f9fa",
    seoTitle: "API Development and System Integration",
    seoDescription: "Secure and scalable API integrations for your business.",
    seoKeywords: ["API", "integration", "software sync"]
  }
];

