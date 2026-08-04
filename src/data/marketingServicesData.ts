import { SystemItem } from "./servicesData";
import FunnelImage from "../assets/funnel infographics.webp";
import LeadImage from "../assets/lead Generation.webp";
import BrandpositionImage from "../assets/top-viewtop-view-manager-employee-doing-teamwork-business-office-looking-charts-laptop-display.webp";
import SocialMediaImage from "../assets/businesswoman-working-laptop.jpg (1).webp";

export const marketingExpertise: SystemItem[] = [
  {
    id: "m4",
    title: "Paid Ads Strategy",
    shortDescription: "ROI-driven ad campaigns across Google, Meta, and LinkedIn that deliver qualified leads.",
    description: "We manage end-to-end paid media campaigns with precise targeting, compelling creative, and relentless optimization. Every dollar of ad spend is tracked and attributed to real business outcomes.",
    image: SocialMediaImage,
    features: [
      "Google Ads & PPC Management",
      "Meta (Facebook & Instagram) Advertising",
      "LinkedIn Lead Gen Campaigns",
      "Audience Targeting & Segmentation",
      "Ad Creative & Copy Development",
      "A/B Testing & Landing Page Alignment",
      "Conversion Tracking & Attribution",
      "ROAS & CAC Optimization"
    ],
    slug: "paid-ads-strategy",
    color: "#453abc",
    bgColor: "#f8f9fa",
    seoTitle: "Paid Ads Strategy Google, Meta & LinkedIn",
    seoDescription: "ROI-driven ad campaigns across Google, Meta, and LinkedIn that deliver qualified leads and measurable results.",
    seoKeywords: ["paid ads", "Google Ads", "Facebook advertising", "LinkedIn ads", "PPC management", "lead generation ads"]
  },
  {
    id: "m5",
    title: "Brand Positioning & Messaging",
    shortDescription: "Distinct brand positioning and messaging that differentiates you in crowded markets.",
    description: "We help you define who you are, what you stand for, and how you communicate it. From brand voice to value propositions, we craft messaging that resonates with your ideal customers and sets you apart from competitors.",
    image: BrandpositionImage,
    features: [
      "Brand Voice & Tone Development",
      "Unique Value Proposition (UVP) Definition",
      "Competitive Positioning Analysis",
      "Messaging Architecture & Hierarchy",
      "Brand Storytelling & Narrative",
      "Visual Identity Alignment",
      "Go-to-Market Messaging Strategy",
      "Customer-Facing Collateral Creation"
    ],
    slug: "brand-positioning-messaging",
    color: "#453abc",
    bgColor: "#f8f9fa",
    seoTitle: "Brand Positioning & Messaging Services",
    seoDescription: "Strategic brand positioning and messaging that differentiates your business and resonates with your audience.",
    seoKeywords: ["brand positioning", "brand messaging", "brand strategy", "value proposition", "brand voice"]
  }
];

export const businessGrowthExpertise: SystemItem[] = [
  {
    id: "b1",
    title: "Lead Generation Systems",
    shortDescription: "End-to-end lead generation systems that deliver a predictable flow of qualified prospects.",
    description: "We design and deploy integrated lead generation systems combining multi-channel strategies, automation, and CRM integration. The result is a consistent, measurable stream of high-quality leads that your sales team can convert.",
    image: LeadImage,
    features: [
      "Multi-Channel Lead Generation Strategy",
      "Lead Capture & Nurture Automation",
      "CRM Integration & Lead Scoring",
      "Outbound & Inbound Campaign Design",
      "Lead Qualification Frameworks",
      "Pipeline Management Setup",
      "Performance Dashboards & Reporting",
      "Scalable Growth Infrastructure"
    ],
    slug: "lead-generation-systems",
    color: "#453abc",
    bgColor: "#f8f9fa",
    seoTitle: "Lead Generation Systems & Pipeline Automation",
    seoDescription: "End-to-end lead generation systems delivering predictable, qualified prospects through multi-channel automation.",
    seoKeywords: ["lead generation", "lead generation systems", "B2B lead generation", "sales pipeline", "lead automation"],
    faqs: [
      { question: "What actionable insights do we get from a Growth Audit?", answer: "You receive a step-by-step roadmap exposing where your funnel loses leads and showing how to unlock hidden revenue." },
      { question: "How do you fix the disconnect between our marketing leads and our sales team?", answer: "We map your funnel tools straight to your CRM, setting up instant alerts so sales reps can act the moment a lead is hot." },
      { question: "How do you determine which tech tools we should implement to scale?", answer: "We analyze your operational costs and team bottlenecks, then consult on specific automations that cut overhead and boost efficiency." },
    ],
  },
  {
    id: "b2",
    title: "Sales Funnel & Customer Journey Design",
    shortDescription: "Strategically designed sales funnels and customer journeys that guide prospects to purchase.",
    description: "We map and design every touchpoint of your customer journey from first awareness to post-purchase retention. Our funnels are built to reduce friction, increase engagement, and maximize lifetime value.",
    image: FunnelImage,
    features: [
      "Full-Funnel Strategy & Design",
      "Awareness to Conversion Mapping",
      "Lead Nurture Sequence Design",
      "Customer Journey Analytics",
      "Friction Point Identification",
      "Retention & Upsell Funnel Design",
      "Multi-Touch Attribution Setup",
      "LTV Optimization Strategies"
    ],
    slug: "sales-funnel-customer-journey",
    color: "#453abc",
    bgColor: "#f8f9fa",
    seoTitle: "Sales Funnel & Customer Journey Design Services",
    seoDescription: "Strategically designed funnels and journeys that guide prospects seamlessly from awareness to purchase.",
    seoKeywords: ["sales funnel", "customer journey", "funnel design", "lead nurture", "customer journey mapping"]
  },
  {
    id: "b3",
    title: "Marketing + Sales Alignment",
    shortDescription: "Unify your marketing and sales teams around shared goals, processes, and data.",
    description: "We help break down silos between marketing and sales by implementing shared KPIs, integrated technology stacks, and aligned processes. The result is a seamless handoff from lead to customer and higher conversion rates across the board.",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80",
    features: [
      "Smarketing Strategy & Workshops",
      "Shared KPI & SLA Definition",
      "Lead Handoff Process Design",
      "Unified CRM & Marketing Automation",
      "Closed-Loop Reporting Setup",
      "Lead Scoring & Qualification Alignment",
      "Regular Cadence & Communication Frameworks",
      "Revenue Attribution Modeling"
    ],
    slug: "marketing-sales-alignment",
    color: "#453abc",
    bgColor: "#f8f9fa",
    seoTitle: "Marketing & Sales Alignment Services",
    seoDescription: "Unify marketing and sales around shared goals, integrated technology, and aligned processes for higher conversions.",
    seoKeywords: ["sales alignment", "marketing alignment", "smarketing", "revenue operations", "lead handoff"]
  },
  {
    id: "b5",
    title: "Growth Audits & Scaling Strategy",
    shortDescription: "Comprehensive growth audits and data-backed scaling strategies for sustainable expansion.",
    description: "We conduct deep-dive audits of your current marketing, sales, and operations to identify growth bottlenecks and opportunities. Then we build a prioritized scaling roadmap that addresses the highest-impact areas first.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
    features: [
      "Full Marketing & Sales Funnel Audit",
      "Growth Bottleneck Identification",
      "Customer Acquisition Cost Analysis",
      "Channel Performance Evaluation",
      "Competitive Landscape Assessment",
      "Technology Stack Review & Recommendations",
      "Prioritized Growth Roadmap",
      "Quarterly OKR & KPI Alignment"
    ],
    slug: "growth-audits-scaling-strategy",
    color: "#453abc",
    bgColor: "#f8f9fa",
    seoTitle: "Growth Audits & Scaling Strategy Services",
    seoDescription: "Data-backed growth audits and scaling roadmaps to identify opportunities and drive sustainable expansion.",
    seoKeywords: ["growth audit", "scaling strategy", "growth consulting", "funnel audit", "business growth"]
  },
  {
    id: "b6",
    title: "Tech-Driven Business Consulting",
    shortDescription: "Strategic technology consulting to align your tech stack with your business growth goals.",
    description: "We advise leadership teams on how to leverage technology for competitive advantage. From digital transformation roadmaps to tool selection and implementation strategy, we help you make informed tech decisions that drive real business outcomes.",
    image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&w=800&q=80",
    features: [
      "Digital Transformation Roadmapping",
      "Technology Stack Audit & Optimization",
      "Build vs. Buy Analysis",
      "MarTech & SalesTech Strategy",
      "Data Infrastructure & Analytics Setup",
      "Process Digitization & Automation Planning",
      "Vendor Evaluation & Selection",
      "ROI-Focused Technology Investment Planning"
    ],
    slug: "tech-business-consulting",
    color: "#453abc",
    bgColor: "#f8f9fa",
    seoTitle: "Tech-Driven Business Consulting Services",
    seoDescription: "Strategic technology consulting to align your tech stack with business goals and drive measurable outcomes.",
    seoKeywords: ["tech consulting", "digital transformation", "business consulting", "MarTech strategy", "technology roadmap"]
  }
];