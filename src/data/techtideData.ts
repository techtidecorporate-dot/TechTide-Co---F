/**
 * TechTide Corporate — Chatbot Knowledge Base
 *
 * All content is sourced from existing TechTide website components and data files.
 * Nothing is invented. Do NOT add fictional pricing, timelines, or guarantees.
 */

export const techtideKnowledge = {
  // ─── Company ──────────────────────────────────────────────────────────────
  company: {
    name: "TechTide Corporate LLP",
    tagline: "High-Converting Websites & Digital Sales Systems",
    description:
      "TechTide Corporate LLP is a full-service digital agency and software development company based in Lahore, Pakistan. We specialize in building high-converting websites, custom web applications, ERP/CRM systems, mobile apps, and digital growth solutions for businesses worldwide.",
    overview:
      "Founded with a vision to bridge the gap between technology and business growth, we partner with startups, SMEs, and enterprises to build scalable, secure, and results-driven digital products. From web and mobile applications to enterprise systems, digital marketing, and business automation, our goal is to create solutions that deliver measurable impact.",
    team: "Our team comprises experienced developers, UI/UX designers, project managers, and digital strategists. We maintain a lean, agile structure that allows us to deliver high-quality work efficiently while keeping communication direct and transparent.",
    industries:
      "We work with startups, SMEs, and enterprises across various industries including e-commerce, healthcare, finance, education, real estate, logistics, and professional services.",
    differentiator:
      "We combine technical excellence with a deep focus on business outcomes. Our approach is consultative — we don't just build what you ask for; we help you define the right strategy, choose the best technology, and create solutions that drive measurable growth.",
  },

  // ─── Mission & Vision ─────────────────────────────────────────────────────
  mission:
    "TechTide Corporate LLP is committed to crafting exceptional digital solutions and reinvesting our growth where it matters — into the youth, into critical job creation, and into open access to education. We stand for progress with intent and partnerships that make a difference.",

  vision:
    "TechTide Corporate LLP is committed to setting a global standard in technological excellence. More than a software company, we serve as a trusted partner in innovation and meaningful impact — using advanced technology to uplift communities and build a future-ready world from Pakistan outward.",

  // ─── Contact ──────────────────────────────────────────────────────────────
  contact: {
    email: "info@techtidecorporate.com",
    phone: "+92 324 7991484",
    address: "G3 Heaven Mall, Zaraar Shaheed Road, Lahore, Pakistan",
    responseTime:
      "We aim to respond to all inquiries within 24 hours during business days. For urgent matters, we recommend calling us directly at +92 324 7991484.",
    consultation:
      "Yes, we offer a free initial discovery call to understand your project, discuss potential solutions, and determine if we're the right fit. There's no obligation to proceed afterward.",
    linkedin: "https://www.linkedin.com/company/techtideco/",
    instagram: "https://www.instagram.com/techtidecorporatellp/",
    contactPage: "/contact",
    mapsLink:
      "https://www.google.com/maps/place/Techtide+Corporate+LLP/@31.548828,74.3988149,606m",
  },

  // ─── Services Overview ────────────────────────────────────────────────────
  servicesOverview: {
    summary:
      "TechTide offers a comprehensive range of digital services including web and mobile development, SaaS, custom software, e-commerce, AI & automation, API integration, UI/UX design, brand identity, SEO, social media marketing, performance marketing, and business growth systems.",
    categories: [
      "Development (Web, Mobile, SaaS, Custom Software, E-Commerce)",
      "AI & Automation (AI Automation, Machine Learning, Generative AI)",
      "Integration & Workflow Automation (API Integration, CRM, ERP)",
      "Design (UI/UX, Brand Identity)",
      "Marketing (SEO, Social Media, Performance Marketing)",
      "Business Growth (Lead Generation, Conversion Optimization, Growth Marketing)",
    ],
    servicesPage: "/services",
  },

  // ─── Development Services ─────────────────────────────────────────────────
  services: {
    webApplications: {
      title: "Web Application Development",
      description:
        "We turn business processes, product ideas, and platforms into fast, reliable web applications engineered for real users and built to scale as your business grows. From internal tools to customer-facing platforms, we handle everything from start to finish.",
      features: [
        "React & Next.js Frontends",
        "Node.js & Python Backends",
        "Cloud-Native Architecture",
        "Responsive & Accessible UI",
      ],
      examples:
        "CRM Systems, ERP Solutions, HR & Payroll Systems, Inventory Management, POS Systems, E-Commerce Platforms, Multi-Vendor Marketplaces, School & College Management, Hospital & Clinic Management, Online Learning (LMS), Appointment Booking Systems, Real Estate Platforms, Courier & Logistics Systems.",
      techStack:
        "React, Next.js, Tailwind CSS (Frontend); Node.js, Express.js, Python (Backend); MongoDB, PostgreSQL, MySQL (Database); AWS, Azure, Google Cloud; Docker, CI/CD, Kubernetes.",
      processSteps: [
        "Discovery & Requirements",
        "UI/UX Design & Prototyping",
        "Agile Development",
        "Testing & Quality Assurance",
        "Deployment & Launch",
      ],
      slug: "/services/web-applications",
    },

    mobileApplications: {
      title: "Mobile Applications",
      description:
        "We build Android and iOS applications that are fast, beautiful, and built to scale. From cross-platform apps using Flutter and React Native to fully native experiences in Swift and Kotlin, we deliver apps your users will love.",
      features: [
        "iOS & Android Native Development",
        "React Native & Flutter",
        "App Store Optimization",
        "Push Notifications & Real-Time Sync",
      ],
      examples:
        "Food Delivery Apps, Taxi Booking Apps, E-Commerce Apps, Healthcare Apps, LMS & Learning Apps, Real Estate Apps, Courier & Delivery Apps, Custom Enterprise Apps.",
      techStack:
        "React Native, Flutter, Swift, Kotlin (Frontend); Node.js, Python (Backend); MongoDB, Firebase, PostgreSQL (Database); AWS, Google Cloud.",
      slug: "/services/mobile-applications",
    },

    saas: {
      title: "SaaS Product Development",
      description:
        "We build scalable SaaS platforms from the ground up with user accounts, subscription billing, dashboards, and everything needed to launch, grow, and support real customers.",
      features: [
        "Multi-tenant Architecture",
        "Subscription Management",
        "Cloud Infrastructure",
        "MVP to Scale Support",
      ],
      faqs: [
        {
          q: "Can you help us launch a lean MVP first?",
          a: "Yes, we focus on building a core version quickly so you can get to market, gather user feedback, and validate your idea.",
        },
        {
          q: "How do you handle recurring billing?",
          a: "We integrate flexible billing engines like Stripe or Paddle to automate subscriptions, tiers, and invoices.",
        },
      ],
      slug: "/services/saas-product-development",
    },

    customSoftware: {
      title: "Custom Software Development",
      description:
        "Off-the-shelf software doesn't always fit. We build fully customized solutions tailored to how your business actually operates — whether that's a management system, a client portal, an admin dashboard, or something entirely unique to your industry.",
      features: [
        "Requirement-Driven Architecture",
        "Full-Stack Development",
        "Legacy System Modernization",
        "Ongoing Support & Maintenance",
      ],
      slug: "/services/custom-software",
    },

    ecommerce: {
      title: "E-Commerce Development",
      description:
        "We build online stores focused on conversion — smooth checkouts, easy product management, and secure payments. Whether you're launching your first store or scaling an existing one, we build it to sell.",
      features: [
        "Shopify & WooCommerce Development",
        "Custom E-Commerce Engines",
        "Secure Payment Integration",
        "Inventory & Accounting Sync",
      ],
      slug: "/services/ecommerce-development",
    },

    apiIntegration: {
      title: "Integration & Workflow Automation",
      description:
        "We connect your website or application with payment gateways, CRMs, inventory systems, shipping providers, and other third-party services so your business runs smoother without the manual work.",
      features: [
        "Custom API Development",
        "Third-party Integrations",
        "Real-time Data Sync",
        "Legacy System Connection",
      ],
      faqs: [
        {
          q: "Can you connect tools that do not have a built-in integration?",
          a: "Yes, we use custom APIs and middleware like Zapier to bridge the gap and sync your tools automatically.",
        },
        {
          q: "How much manual data entry can we realistically eliminate?",
          a: "We routinely automate up to 90% of repetitive tasks, from lead routing to invoice creation.",
        },
      ],
      slug: "/services/api-integration",
    },

    businessAutomation: {
      title: "Business Automation Systems",
      description:
        "Optimize your internal workflows through custom ERP, CRM, and automation tools designed to save time and reduce operational costs.",
      features: [
        "Workflow Process Automation",
        "Custom ERP & CRM Solutions",
        "Internal Tool Development",
        "Operational Efficiency Training",
      ],
      slug: "/services/business-automation-systems",
    },
  },

  // ─── AI & Automation ──────────────────────────────────────────────────────
  ai: {
    overview:
      "TechTide offers a full suite of AI and automation services to help businesses leverage intelligent technology, automate complex workflows, and unlock insights from data.",

    aiAutomation: {
      title: "AI Automation",
      description:
        "Deploy AI-powered automation to handle repetitive tasks, streamline operations, and free your team to focus on high-value work.",
      features: [
        "Intelligent Process Automation",
        "AI-Powered Chatbots",
        "Document Processing & OCR",
        "Workflow Orchestration",
      ],
      slug: "/services/ai-automation",
    },

    machineLearning: {
      title: "Machine Learning",
      description:
        "Leverage machine learning to analyze patterns, predict outcomes, and automate decision-making — turning raw data into a strategic advantage.",
      features: [
        "Predictive Analytics Models",
        "Natural Language Processing",
        "Computer Vision Solutions",
        "ML Pipeline Automation",
      ],
      slug: "/services/machine-learning",
    },

    generativeAI: {
      title: "Generative AI",
      description:
        "Unlock the creative potential of generative AI to produce marketing content, design assets, code, and prototypes at unprecedented speed.",
      features: [
        "LLM Integration & Fine-Tuning",
        "AI Content Generation",
        "Synthetic Data Generation",
        "Generative Design Prototyping",
      ],
      slug: "/services/generative-ai",
    },
  },

  // ─── Design ───────────────────────────────────────────────────────────────
  design: {
    overview:
      "TechTide offers end-to-end design services covering UI/UX design and brand identity creation.",

    uiux: {
      title: "UI/UX Design",
      description:
        "We design interfaces that are clean, intuitive, and built around how real people interact with your product across desktop and mobile. Good design is the difference between a user completing a task or leaving your site.",
      features: [
        "User Research & Personas",
        "Wireframing & Prototyping",
        "Visual Design & Design Systems",
        "Usability Testing & Iteration",
      ],
      faqs: [
        {
          q: "How do we preview the design before you start coding?",
          a: "We provide interactive, clickable prototypes in Figma so you can approve the exact look and feel beforehand.",
        },
        {
          q: "Do you handle both visual branding and navigation flow?",
          a: "Yes, we design the entire user journey alongside the visual assets, typography, and color schemes.",
        },
      ],
      slug: "/services/ui-ux-design",
    },

    brandIdentity: {
      title: "Brand Identity",
      description:
        "From logo design to complete brand guidelines, we craft cohesive visual identities that communicate your values and differentiate you in the market.",
      features: [
        "Logo & Visual Identity Design",
        "Brand Strategy & Positioning",
        "Brand Guidelines & Assets",
        "Packaging & Collateral Design",
      ],
      slug: "/services/brand-identity",
    },
  },

  // ─── Marketing ────────────────────────────────────────────────────────────
  marketing: {
    overview:
      "TechTide provides comprehensive digital marketing services including SEO, social media marketing, performance marketing (paid ads), and lead generation.",

    seo: {
      title: "SEO",
      description:
        "Our SEO services combine technical audits, content strategy, and link building to improve your visibility on search engines and drive qualified organic traffic.",
      features: [
        "Technical SEO Audits",
        "On-Page Optimization",
        "Content Strategy & Link Building",
        "Local SEO & Google Maps Optimization",
      ],
      slug: "/services/seo",
    },

    socialMedia: {
      title: "Social Media Marketing",
      description:
        "We create compelling social media strategies across platforms to increase brand awareness, foster community engagement, and drive conversions.",
      features: [
        "Platform-Specific Content Strategy",
        "Community Management",
        "Paid Social Campaigns",
        "Influencer & Partnership Marketing",
      ],
      slug: "/services/social-media-marketing",
    },

    performanceMarketing: {
      title: "Performance Marketing",
      description:
        "Maximize your ad spend with data-driven performance marketing campaigns across Google, Meta, LinkedIn, and more — optimized for conversions.",
      features: [
        "PPC & Google Ads Management",
        "Facebook & Instagram Advertising",
        "LinkedIn & B2B Campaigns",
        "Conversion Tracking & Analytics",
      ],
      slug: "/services/performance-marketing",
    },
  },

  // ─── Business Growth ──────────────────────────────────────────────────────
  businessGrowth: {
    leadGeneration: {
      title: "Lead Generation Websites",
      description:
        "We design and build bespoke websites optimized for conversion. Every element is strategically placed to guide users toward your primary CTA, ensuring a steady stream of leads for your business.",
      features: [
        "Conversion-Optimized Layouts",
        "High-Speed Performance",
        "Strategic CTA Placement",
        "Lead Capture Integration",
      ],
      slug: "/services/lead-generation-websites",
    },

    conversionOptimization: {
      title: "Conversion Optimization",
      description:
        "Our conversion optimization services focus on the user journey. We analyze behavior, identify friction points, and implement design changes that significantly increase your conversion rates.",
      features: [
        "User Experience (UX) Audits",
        "A/B Testing & Analysis",
        "High-Fidelity UI Design",
        "Performance Optimization",
      ],
      slug: "/services/conversion-optimization",
    },

    growthMarketing: {
      title: "Growth Marketing Systems",
      description:
        "We build digital marketing systems that combine SEO, performance marketing, and automation to create a predictable flow of new business opportunities.",
      features: [
        "Predictable Growth Funnels",
        "Automated Email Sequences",
        "Performance Analytics",
        "SEO & Content Strategy",
      ],
      slug: "/services/growth-marketing-systems",
    },
  },

  // ─── Support ──────────────────────────────────────────────────────────────
  support: {
    description:
      "We offer comprehensive maintenance packages including security updates, performance monitoring, content updates, bug fixes, and 24/7 technical support to keep your digital products running smoothly.",
    agile:
      "We follow an agile methodology with regular sprint cycles, daily stand-ups, and transparent progress reporting. You'll have a dedicated project manager and access to our project management tools to track progress in real time.",
  },

  // ─── Suggested Questions (for UI chips) ──────────────────────────────────
  suggestedQuestions: [
    "What services does TechTide offer?",
    "Tell me about TechTide.",
    "Do you provide AI services?",
    "Do you develop websites?",
    "Do you develop mobile apps?",
    "How can I contact TechTide?",
  ],

  // ─── Greeting ─────────────────────────────────────────────────────────────
  greeting:
    "👋 Hi! I'm TechTide's virtual assistant. I can answer questions about TechTide, our services, AI & automation, web & mobile development, design, marketing, and how to get in touch. What would you like to know?",
};
