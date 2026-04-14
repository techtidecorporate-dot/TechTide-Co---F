import SupportImg from "@/assets/support, ticketing, booking & communication system.png";
import ApiIntegrationImg from "@/assets/Api.jpg";
import BrandingImg from "@/assets/branding-strategy-marketing-business-graphic-design.jpg";
import BusinessToolsImg from "@/assets/inventory-stock-manufacturing-assets-goods-concept.jpg";

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
}

export const systemsData: SystemItem[] = [
  {
    id: "s1",
    title: "Web and Software Development",
    shortDescription: "We build fast, secure, and scalable web applications tailored to your business needs.",
    description: "Our web development services cover everything from custom web applications to full-stack development using modern technologies. We focus on creating responsive and user-focused digital platforms.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Custom Web Application Development",
      "Full-Stack Development using modern technologies",
      "Responsive and user-focused digital platforms"
    ],
    slug: "web-software-development",
    color: "#453abc",
    bgColor: "#f8f9fa",
    seoTitle: "Web and Software Development Services",
    seoDescription: "Custom web and software development solutions for businesses.",
    seoKeywords: ["web development", "software development", "full stack"]
  },
  {
    id: "s2",
    title: "Mobile App Development",
    shortDescription: "High-performance mobile applications for Android and iOS.",
    description: "We create native and cross-platform mobile solutions that are user-friendly and scalable, ensuring a seamless experience across all devices.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Native and cross-platform app development",
      "User-friendly and scalable mobile solutions"
    ],
    slug: "mobile-app-development",
    color: "#453abc",
    bgColor: "#f8f9fa",
    seoTitle: "Mobile App Development Services",
    seoDescription: "Custom mobile app development for iOS and Android.",
    seoKeywords: ["mobile apps", "iOS development", "Android development"]
  },
  {
    id: "s3",
    title: "Enterprise Software and Automation",
    shortDescription: "Streamline operations with powerful enterprise-grade solutions.",
    description: "We help businesses optimize their workflows through ERP, CRM, and custom business process automation tools.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    features: [
      "ERP (Enterprise Resource Planning) systems",
      "CRM (Customer Relationship Management) software",
      "Business process automation"
    ],
    slug: "enterprise-software-automation",
    color: "#453abc",
    bgColor: "#f8f9fa",
    seoTitle: "Enterprise Software and Automation",
    seoDescription: "Optimize your business with custom enterprise software.",
    seoKeywords: ["ERP", "CRM", "automation"]
  },
  {
    id: "s4",
    title: "HRMS Software Development",
    shortDescription: "Efficiently manage your workforce with custom HR solutions.",
    description: "Our HRMS solutions include employee management, payroll tracking, and performance management tools tailored to your organizational needs.",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Employee management systems",
      "Payroll and attendance tracking",
      "Performance management tools"
    ],
    slug: "hrms-software-development",
    color: "#453abc",
    bgColor: "#f8f9fa",
    seoTitle: "HRMS Software Development",
    seoDescription: "Custom HR management systems for your business.",
    seoKeywords: ["HRMS", "payroll software", "employee management"]
  },
  {
    id: "s5",
    title: "Customer Support and Booking Systems",
    shortDescription: "Improve customer experience with smart communication platforms.",
    description: "We develop support ticketing systems, online booking solutions, and workflow automation tools to enhance customer satisfaction.",
    image: SupportImg,
    features: [
      "Support ticketing systems",
      "Online booking and scheduling solutions",
      "Workflow automation tools"
    ],
    slug: "support-booking-systems",
    color: "#453abc",
    bgColor: "#f8f9fa",
    seoTitle: "Customer Support and Booking Systems",
    seoDescription: "Smart booking and support systems for modern businesses.",
    seoKeywords: ["booking system", "ticketing system", "customer support"]
  },
  {
    id: "s6",
    title: "API Development and System Integration",
    shortDescription: "Connect your systems for seamless performance.",
    description: "We specialize in custom API development and third-party integrations to ensure secure data synchronization across all your platforms.",
    image: ApiIntegrationImg, // Replace with ApiIntegrationImg once file is in assets
    features: [
      "Custom API development",
      "Third-party integrations",
      "Secure data synchronization"
    ],
    slug: "api-integration",
    color: "#453abc",
    bgColor: "#f8f9fa",
    seoTitle: "API Development and Integration",
    seoDescription: "Connect your business systems with custom APIs.",
    seoKeywords: ["API", "system integration", "data sync"]
  },
  {
    id: "s7",
    title: "Digital Marketing Solutions",
    shortDescription: "Grow your online presence and reach the right audience.",
    description: "From SEO to performance marketing, we provide comprehensive digital marketing strategies to drive growth.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Search Engine Optimization (SEO)",
      "Performance marketing campaigns",
      "Social media marketing"
    ],
    slug: "digital-marketing",
    color: "#453abc",
    bgColor: "#f8f9fa",
    seoTitle: "Digital Marketing Solutions",
    seoDescription: "Data-driven digital marketing to grow your business.",
    seoKeywords: ["SEO", "digital marketing", "social media"]
  },
  {
    id: "s8",
    title: "Branding and UI/UX Strategy",
    shortDescription: "Create strong visual identity and better user experiences.",
    description: "We design brand identities and user journeys that resonate with your audience and improve conversion rates.",
    image: BrandingImg,
    features: [
      "UI/UX design for web and mobile",
      "Brand identity and design systems",
      "User journey optimization"
    ],
    slug: "branding-ui-ux",
    color: "#453abc",
    bgColor: "#f8f9fa",
    seoTitle: "Branding and UI/UX Strategy",
    seoDescription: "Premium branding and user experience design.",
    seoKeywords: ["UI/UX", "branding", "design system"]
  },
  {
    id: "s9",
    title: "SaaS Product Development",
    shortDescription: "Build scalable software products designed for long-term growth.",
    description: "We develop cloud-based, subscription-based SaaS platforms that are secure and highly scalable.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80",
    features: [
      "SaaS platform development",
      "Cloud-based applications",
      "Subscription-based systems"
    ],
    slug: "saas-product-development",
    color: "#453abc",
    bgColor: "#f8f9fa",
    seoTitle: "SaaS Product Development",
    seoDescription: "Build and scale your SaaS product with us.",
    seoKeywords: ["SaaS", "cloud apps", "software product"]
  },
  {
    id: "s10",
    title: "Custom Business Tools and Platforms",
    shortDescription: "Tailored solutions to optimize your internal operations.",
    description: "We develop custom dashboards and automation tools specifically designed to solve your unique business problems.",
    image: BusinessToolsImg,
    features: [
      "Custom dashboards and admin panels",
      "Workflow and process automation tools",
      "Business-specific software solutions"
    ],
    slug: "custom-business-tools",
    color: "#453abc",
    bgColor: "#f8f9fa",
    seoTitle: "Custom Business Tools",
    seoDescription: "Bespoke software tools for your business operations.",
    seoKeywords: ["business tools", "dashboards", "process automation"]
  }
];
