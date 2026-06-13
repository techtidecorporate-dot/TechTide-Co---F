import ApiIntegrationImg from "../../assets/Services/Api.webp";
import BrandingImg from "../../assets/Services/branding-strategy-marketing-business-graphic-design.webp";
import AutomationImg from "../../assets/Services/Automation.webp";
import LeadGenerationImg from '../../assets/Services/lead-generation-service-in-pan-india-digital-marketing-1000x1000.webp'
import SAASImage from '../../assets/Services/Marketing/SAAS Image (1).webp'

export interface FAQItem {
  question: string;
  answer: string;
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
  servicesContent?: string[];
  ctaHeading?: string;
  ctaDescription?: string;
  faqs?: FAQItem[];
  benefits?: { title: string; description: string }[];
  processSteps?: { step: string; title: string; description: string }[];
  industryUseCases?: { industry: string; description: string }[];
  usps?: { title: string; description: string }[];
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
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
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
    image: SAASImage,
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
    seoKeywords: ["SaaS", "software product", "cloud apps"],
    faqs: [
      { question: "Can you help us launch a lean MVP to test the market first?", answer: "Yes, we focus on building a core version quickly so you can get to market, gather user feedback, and validate your idea." },
      { question: "How do you handle automated recurring billing and customer upgrades?", answer: "We integrate flexible billing engines like Stripe or Paddle to automate subscriptions, tiers, and invoices." },
      { question: "How do you prevent users from seeing other customers' data?", answer: "We use high-security, multi-tenant architecture to completely isolate data between different user accounts." },
    ],
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
    seoKeywords: ["API", "integration", "software sync"],
    faqs: [
      { question: "Can you connect tools that do not have a built-in integration?", answer: "Yes, we use custom APIs and middleware like Zapier to bridge the gap and sync your tools automatically." },
      { question: "Will automating these workflows cause duplicate data or lost leads?", answer: "No, we build strict error-handling and data validation rules into every integration to ensure perfect accuracy." },
      { question: "How much manual data entry can we realistically eliminate?", answer: "We routinely automate up to 90% of repetitive tasks, from lead routing to invoice creation." },
    ],
  },
  {
    id: "s9",
    title: "Web Applications",
    shortDescription: "Custom web applications built with modern frameworks and industry best practices.",
    description: "We build high-performance web applications using cutting-edge technologies, ensuring scalability, security, and a seamless user experience tailored to your business needs.",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=800&q=80",
    features: [
      "React & Next.js Frontends",
      "Node.js & Python Backends",
      "Cloud-Native Architecture",
      "Responsive & Accessible UI"
    ],
    slug: "web-applications",
    color: "#453abc",
    bgColor: "#f8f9fa",
    seoTitle: "Custom Web Application Development Services",
    seoDescription: "Build scalable, secure web applications with modern tech stacks.",
    seoKeywords: ["web applications", "custom web development", "React", "Next.js"],
    faqs: [
      { question: "How do we know if we need a web application or just a regular website?", answer: "If your users need to log in, manage accounts, and manipulate data (like a portal or dashboard), you need a web application." },
      { question: "Will the application work smoothly on mobile phones?", answer: "Yes, we build everything with responsive design so it functions perfectly on all screens and mobile devices." },
      { question: "How do you ensure the system won't crash during high-traffic spikes?", answer: "We build on cloud-based, scalable infrastructure that automatically adjusts to handle surges in active users." },
    ],
  },
  {
    id: "s10",
    title: "Mobile Applications",
    shortDescription: "Native and cross-platform mobile apps that deliver exceptional user experiences.",
    description: "From iOS and Android native apps to cross-platform solutions, we craft mobile applications that engage users and drive business growth.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80",
    features: [
      "iOS & Android Native Development",
      "React Native & Flutter",
      "App Store Optimization",
      "Push Notifications & Real-Time Sync"
    ],
    slug: "mobile-applications",
    color: "#453abc",
    bgColor: "#f8f9fa",
    seoTitle: "Mobile App Development Services",
    seoDescription: "Engaging mobile applications for iOS and Android platforms.",
    seoKeywords: ["mobile apps", "iOS development", "Android development", "React Native"],
    faqs: [
      { question: "Do we have to pay for two separate apps for iOS and Android?", answer: "No, we use cross-platform frameworks to build one codebase that deploys beautifully to both stores, saving you time and budget." },
      { question: "Will you handle the process of getting our app approved by Apple and Google?", answer: "Yes, we manage the entire submission lifecycle and ensure compliance with all privacy and technical guidelines." },
      { question: "Can you build the mobile app to work when users are offline?", answer: "Yes, we can design local data caching so users retain core features without internet and sync once reconnected." },
    ],
  },
  {
    id: "s11",
    title: "Custom Software",
    shortDescription: "Tailored software solutions engineered for your unique business requirements.",
    description: "We design and develop custom software that aligns perfectly with your workflows, helping you automate processes and gain a competitive edge.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
    features: [
      "Requirement-Driven Architecture",
      "Full-Stack Development",
      "Legacy System Modernization",
      "Ongoing Support & Maintenance"
    ],
    slug: "custom-software",
    color: "#453abc",
    bgColor: "#f8f9fa",
    seoTitle: "Custom Software Development Services",
    seoDescription: "Bespoke software solutions built for your unique business needs.",
    seoKeywords: ["custom software", "bespoke development", "enterprise software"],
    faqs: [
      { question: "Why should we invest in custom software instead of a cheaper off-the-shelf tool?", answer: "Custom software fits your exact workflow, meaning you don't pay for unused features or alter your business to fit someone else's system." },
      { question: "Do we retain ownership of the software once it is built?", answer: "Yes, you receive 100% ownership of the source code and intellectual property with zero ongoing licensing fees." },
      { question: "Can you connect this new software with our legacy systems?", answer: "Yes, we specialize in securely migrating your existing data and syncing new tools with your current setup." },
    ],
  },
  {
    id: "s12",
    title: "Machine Learning",
    shortDescription: "Intelligent ML models that unlock actionable insights from your data.",
    description: "Leverage machine learning to analyze patterns, predict outcomes, and automate decision-making, turning raw data into a strategic advantage.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
    features: [
      "Predictive Analytics Models",
      "Natural Language Processing",
      "Computer Vision Solutions",
      "ML Pipeline Automation"
    ],
    slug: "machine-learning",
    color: "#453abc",
    bgColor: "#f8f9fa",
    seoTitle: "Machine Learning Development Services",
    seoDescription: "Advanced ML models and AI solutions for data-driven businesses.",
    seoKeywords: ["machine learning", "AI", "predictive analytics", "deep learning"]
  },
  {
    id: "s13",
    title: "AI Automation",
    shortDescription: "Automate complex workflows and reduce manual effort with intelligent AI agents.",
    description: "Deploy AI-powered automation to handle repetitive tasks, streamline operations, and free your team to focus on high-value work.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80",
    features: [
      "Intelligent Process Automation",
      "AI-Powered Chatbots",
      "Document Processing & OCR",
      "Workflow Orchestration"
    ],
    slug: "ai-automation",
    color: "#453abc",
    bgColor: "#f8f9fa",
    seoTitle: "AI Automation Services",
    seoDescription: "Automate workflows and reduce manual effort with AI-powered solutions.",
    seoKeywords: ["AI automation", "intelligent automation", "RPA", "chatbots"]
  },
  {
    id: "s14",
    title: "Generative AI",
    shortDescription: "Harness generative AI for content creation, design, and product innovation.",
    description: "Unlock the creative potential of generative AI to produce marketing content, design assets, code, and prototypes at unprecedented speed.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80",
    features: [
      "LLM Integration & Fine-Tuning",
      "AI Content Generation",
      "Synthetic Data Generation",
      "Generative Design Prototyping"
    ],
    slug: "generative-ai",
    color: "#453abc",
    bgColor: "#f8f9fa",
    seoTitle: "Generative AI Services",
    seoDescription: "Leverage generative AI for content, design, and product innovation.",
    seoKeywords: ["generative AI", "LLM", "AI content", "GPT integration"]
  },
  {
    id: "s15",
    title: "SEO",
    shortDescription: "Data-driven SEO strategies to boost your organic search rankings and traffic.",
    description: "Our SEO services combine technical audits, content strategy, and link building to improve your visibility on search engines and drive qualified organic traffic.",
    image: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?auto=format&fit=crop&w=800&q=80",
    features: [
      "Technical SEO Audits",
      "On-Page Optimization",
      "Content Strategy & Link Building",
      "Local SEO & Google Maps Optimization"
    ],
    slug: "seo",
    color: "#453abc",
    bgColor: "#f8f9fa",
    seoTitle: "SEO Services - Search Engine Optimization",
    seoDescription: "Data-driven SEO strategies to boost rankings and drive organic traffic.",
    seoKeywords: ["SEO", "search engine optimization", "organic traffic", "link building"]
  },
  {
    id: "s16",
    title: "Social Media Marketing",
    shortDescription: "Engaging social media campaigns that build your brand presence and community.",
    description: "We create compelling social media strategies across platforms to increase brand awareness, foster community engagement, and drive conversions.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80",
    features: [
      "Platform-Specific Content Strategy",
      "Community Management",
      "Paid Social Campaigns",
      "Influencer & Partnership Marketing"
    ],
    slug: "social-media-marketing",
    color: "#453abc",
    bgColor: "#f8f9fa",
    seoTitle: "Social Media Marketing Services",
    seoDescription: "Build your brand with engaging social media campaigns and strategies.",
    seoKeywords: ["social media marketing", "SMM", "content strategy", "brand awareness"]
  },
  {
    id: "s17",
    title: "Performance Marketing",
    shortDescription: "Result-driven paid campaigns with measurable ROI and real-time optimization.",
    description: "Maximize your ad spend with data-driven performance marketing campaigns across Google, Meta, LinkedIn, and more, optimized for conversions.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    features: [
      "PPC & Google Ads Management",
      "Facebook & Instagram Advertising",
      "LinkedIn & B2B Campaigns",
      "Conversion Tracking & Analytics"
    ],
    slug: "performance-marketing",
    color: "#453abc",
    bgColor: "#f8f9fa",
    seoTitle: "Performance Marketing Services",
    seoDescription: "ROI-driven paid advertising campaigns across all major platforms.",
    seoKeywords: ["performance marketing", "PPC", "Google Ads", "paid advertising"]
  },
  {
    id: "s18",
    title: "UI/UX Design",
    shortDescription: "Intuitive interfaces and seamless user experiences that delight your customers.",
    description: "We design user-centric interfaces that balance aesthetic appeal with usability, ensuring your digital products are both beautiful and functional.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80",
    features: [
      "User Research & Personas",
      "Wireframing & Prototyping",
      "Visual Design & Design Systems",
      "Usability Testing & Iteration"
    ],
    slug: "ui-ux-design",
    color: "#453abc",
    bgColor: "#f8f9fa",
    seoTitle: "UI/UX Design Services",
    seoDescription: "User-centered design that creates intuitive and engaging digital experiences.",
    seoKeywords: ["UI/UX design", "user experience", "interface design", "product design"],
    faqs: [
      { question: "How do we preview and test the design before you start coding?", answer: "We provide interactive, clickable prototypes in Figma so you can approve the exact look and feel beforehand." },
      { question: "How do you ensure the design appeals to our specific target audience?", answer: "We base our layouts on user research and behavioral psychology to ensure the interface drives conversions." },
      { question: "Do you handle both the visual branding and the actual navigation flow?", answer: "Yes, we design the entire user journey alongside the visual assets, typography, and color schemes." },
    ],
  },
  {
    id: "s19",
    title: "Brand Identity",
    shortDescription: "Distinctive brand identities that leave lasting impressions and build trust.",
    description: "From logo design to complete brand guidelines, we craft cohesive visual identities that communicate your values and differentiate you in the market.",
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=800&q=80",
    features: [
      "Logo & Visual Identity Design",
      "Brand Strategy & Positioning",
      "Brand Guidelines & Assets",
      "Packaging & Collateral Design"
    ],
    slug: "brand-identity",
    color: "#453abc",
    bgColor: "#f8f9fa",
    seoTitle: "Brand Identity Design Services",
    seoDescription: "Cohesive brand identities that communicate your values and build trust.",
    seoKeywords: ["brand identity", "logo design", "branding", "visual identity"]
  },
  {
    id: "s20",
    title: "E-Commerce Development",
    shortDescription: "Conversion-focused e-commerce stores with smooth checkouts and secure payments.",
    description: "We build high-converting online stores on Shopify, WooCommerce, or custom engines — with seamless product management, secure payment gateways, and inventory integration.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80",
    features: [
      "Shopify & WooCommerce Development",
      "Custom E-Commerce Engines",
      "Secure Payment Integration",
      "Inventory & Accounting Sync"
    ],
    slug: "ecommerce-development",
    color: "#453abc",
    bgColor: "#f8f9fa",
    seoTitle: "E-Commerce Development Services",
    seoDescription: "Build conversion-focused online stores with secure payments and inventory management.",
    seoKeywords: ["e-commerce", "online store", "Shopify", "WooCommerce", "payment integration"],
    faqs: [
      { question: "Which e-commerce platforms do you build your stores on?", answer: "We build on Shopify, WooCommerce, or entirely custom engines depending on your inventory size and sales goals." },
      { question: "How do you keep our customers' payment data secure?", answer: "We implement strict SSL encryption and integrate only with top-tier, PCI-compliant payment gateways like Stripe." },
      { question: "Can our store automatically update our inventory and accounting systems?", answer: "Yes, we connect your storefront directly to your backend tools for real-time stock and financial tracking." },
    ],
  },
  {
    id: "s21",
    title: "Ongoing Maintenance & Support",
    shortDescription: "Keep your website or application secure, updated, and running smoothly.",
    description: "We provide proactive security monitoring, regular updates, backups, and new feature development to ensure your digital products stay reliable and current.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?auto=format&fit=crop&w=800&q=80",
    features: [
      "Security Monitoring & Patches",
      "Software Updates & Backups",
      "Performance Optimization",
      "New Feature Development"
    ],
    slug: "maintenance-support",
    color: "#453abc",
    bgColor: "#f8f9fa",
    seoTitle: "Ongoing Maintenance & Support Services",
    seoDescription: "Keep your digital products secure, updated, and running with proactive maintenance and support.",
    seoKeywords: ["maintenance", "support", "website maintenance", "software support", "security updates"],
    faqs: [
      { question: "What kind of support do we get after our project goes live?", answer: "We offer ongoing maintenance plans that cover proactive security monitoring, software updates, and regular backups." },
      { question: "How fast can we expect a fix if something critical breaks?", answer: "Our support agreements include dedicated response times to guarantee urgent issues are addressed immediately." },
      { question: "Why do we need a maintenance plan if the application is working fine?", answer: "Browsers, plugins, and security compliance standards update constantly; regular maintenance prevents sudden breakages." },
    ],
  }
];

