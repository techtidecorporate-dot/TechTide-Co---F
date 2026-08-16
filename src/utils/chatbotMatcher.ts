/**
 * TechTide Chatbot — Intent Matcher
 *
 * Handles input normalization, keyword detection, intent classification,
 * and response generation using the local TechTide knowledge base.
 *
 * No AI APIs. No backend. Purely frontend, browser-only.
 */

import { techtideKnowledge } from "@/data/techtideData";

// ─── Types ────────────────────────────────────────────────────────────────────

export type Intent =
  | "greeting"
  | "about"
  | "services"
  | "webDev"
  | "mobileDev"
  | "saas"
  | "customSoftware"
  | "ecommerce"
  | "aiAutomation"
  | "machineLearning"
  | "generativeAI"
  | "apiIntegration"
  | "design"
  | "uiux"
  | "branding"
  | "marketing"
  | "seo"
  | "paidAds"
  | "leadGen"
  | "businessGrowth"
  | "support"
  | "contact"
  | "fallback";

export interface MatchResult {
  intent: Intent;
  response: string;
}

// ─── Normalization ────────────────────────────────────────────────────────────

/**
 * Normalize user input: lowercase, strip punctuation, collapse spaces.
 */
function normalize(input: string): string {
  return input
    .toLowerCase()
    .replace(/[^\w\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/**
 * Check whether the normalized text contains ANY of the provided keywords.
 */
function hasAny(text: string, keywords: string[]): boolean {
  return keywords.some((kw) => text.includes(kw));
}

// ─── Keyword Maps ─────────────────────────────────────────────────────────────

const intentKeywords: Record<Intent, string[]> = {
  greeting: [
    "hi",
    "hello",
    "hey",
    "good morning",
    "good afternoon",
    "good evening",
    "howdy",
    "greetings",
    "sup",
    "what's up",
    "whats up",
    "hiya",
  ],

  about: [
    "who are you",
    "who is techtide",
    "about techtide",
    "about you",
    "tell me about",
    "what is techtide",
    "what do you do",
    "company overview",
    "company info",
    "company background",
    "what kind of company",
    "overview",
    "techtide corporate",
    "founded",
    "team",
    "staff",
    "employees",
    "where are you",
    "where is techtide",
    "based in",
    "location",
    "lahore",
    "pakistan",
    "mission",
    "vision",
    "values",
    "stand for",
    "what do you stand",
    "culture",
  ],

  services: [
    "services",
    "what do you offer",
    "what do you provide",
    "offerings",
    "capabilities",
    "what can you do",
    "what do you build",
    "solutions",
    "service list",
    "all services",
    "full list",
    "everything you do",
  ],

  webDev: [
    "web development",
    "web app",
    "web application",
    "website",
    "websites",
    "build website",
    "make website",
    "develop website",
    "web platform",
    "crm",
    "erp",
    "portal",
    "dashboard",
    "booking system",
    "lms",
    "learning management",
    "school system",
    "hospital system",
    "marketplace",
    "ecommerce platform",
    "react",
    "next.js",
    "nextjs",
    "node",
    "full stack",
    "fullstack",
  ],

  mobileDev: [
    "mobile app",
    "mobile application",
    "ios",
    "android",
    "app development",
    "flutter",
    "react native",
    "smartphone",
    "phone app",
    "native app",
    "cross platform",
    "cross-platform",
    "app store",
    "play store",
    "food delivery app",
    "taxi app",
    "ride hailing",
  ],

  saas: [
    "saas",
    "software as a service",
    "subscription software",
    "subscription app",
    "saas product",
    "saas platform",
    "mvp",
    "minimum viable product",
    "subscription billing",
    "multi tenant",
    "multi-tenant",
  ],

  customSoftware: [
    "custom software",
    "bespoke software",
    "custom solution",
    "custom development",
    "tailor made",
    "tailored software",
    "legacy system",
    "modernize",
    "enterprise software",
    "internal tool",
    "internal tools",
    "admin dashboard",
    "client portal",
    "management system",
  ],

  ecommerce: [
    "ecommerce",
    "e-commerce",
    "online store",
    "online shop",
    "shopify",
    "woocommerce",
    "shopping cart",
    "product catalog",
    "sell online",
    "payment integration",
    "checkout",
    "inventory management",
    "retail platform",
  ],

  aiAutomation: [
    "ai automation",
    "artificial intelligence",
    "ai services",
    "automation",
    "automate",
    "intelligent automation",
    "rpa",
    "chatbot",
    "document processing",
    "ocr",
    "workflow automation",
    "process automation",
    "ai powered",
    "ai-powered",
  ],

  machineLearning: [
    "machine learning",
    "ml",
    "predictive analytics",
    "prediction",
    "deep learning",
    "nlp",
    "natural language processing",
    "computer vision",
    "data science",
    "data model",
    "train model",
    "ai model",
  ],

  generativeAI: [
    "generative ai",
    "gen ai",
    "llm",
    "large language model",
    "gpt",
    "content generation",
    "ai content",
    "fine tuning",
    "fine-tuning",
    "synthetic data",
    "generative design",
    "chatgpt",
    "openai",
  ],

  apiIntegration: [
    "api",
    "integration",
    "integrate",
    "connect systems",
    "third party",
    "third-party",
    "zapier",
    "webhook",
    "data sync",
    "crm integration",
    "payment gateway",
    "shipping integration",
    "workflow",
  ],

  design: [
    "design",
    "ui",
    "ux",
    "user interface",
    "user experience",
    "branding",
    "brand",
    "logo",
    "visual identity",
    "graphic design",
    "figma",
    "prototype",
    "wireframe",
    "design system",
  ],

  uiux: [
    "ui ux",
    "ui/ux",
    "user interface",
    "user experience",
    "ux audit",
    "usability",
    "wireframe",
    "prototype",
    "figma",
    "interaction design",
    "product design",
  ],

  branding: [
    "brand identity",
    "branding",
    "logo design",
    "logo",
    "visual identity",
    "brand guidelines",
    "brand strategy",
    "brand positioning",
    "packaging design",
    "collateral",
  ],

  marketing: [
    "marketing",
    "digital marketing",
    "social media",
    "content marketing",
    "influencer",
    "paid ads",
    "ads",
    "advertising",
    "campaign",
    "google ads",
    "facebook ads",
    "instagram ads",
    "linkedin ads",
    "ppc",
    "performance marketing",
  ],

  seo: [
    "seo",
    "search engine optimization",
    "search engine",
    "organic traffic",
    "organic search",
    "google ranking",
    "rank higher",
    "link building",
    "on page",
    "technical seo",
    "local seo",
    "google maps",
    "keyword",
  ],

  paidAds: [
    "paid ads",
    "paid advertising",
    "google ads",
    "facebook ads",
    "instagram ads",
    "linkedin ads",
    "ppc",
    "pay per click",
    "performance marketing",
    "ad spend",
    "roi",
    "b2b campaign",
  ],

  leadGen: [
    "lead generation",
    "lead gen",
    "leads",
    "funnel",
    "sales funnel",
    "conversion rate",
    "cro",
    "conversion optimization",
    "growth marketing",
    "growth system",
    "email sequence",
    "capture leads",
  ],

  businessGrowth: [
    "business growth",
    "scale",
    "grow business",
    "revenue",
    "profit",
    "business development",
    "digital strategy",
    "strategy",
    "growth",
    "results",
    "roi",
  ],

  support: [
    "support",
    "maintenance",
    "after launch",
    "post launch",
    "ongoing support",
    "bug fix",
    "update",
    "security update",
    "monitoring",
    "help",
    "assistance",
    "keep running",
  ],

  contact: [
    "contact",
    "get in touch",
    "reach out",
    "talk to",
    "speak to",
    "phone",
    "email",
    "call",
    "office",
    "address",
    "meet",
    "consultation",
    "free consultation",
    "hire",
    "work with",
    "quote",
    "estimate",
    "how to start",
    "get started",
  ],

  // fallback has no keywords — it's the catch-all
  fallback: [],
};

// ─── Intent Detection ─────────────────────────────────────────────────────────

/**
 * Ordered priority list for intent detection.
 * More specific intents must come BEFORE broader ones.
 */
const intentPriority: Intent[] = [
  "greeting",
  // specific AI sub-intents first
  "machineLearning",
  "generativeAI",
  "aiAutomation",
  // specific dev sub-intents
  "saas",
  "customSoftware",
  "ecommerce",
  "mobileDev",
  "webDev",
  // specific design sub-intents
  "uiux",
  "branding",
  // specific marketing sub-intents
  "seo",
  "paidAds",
  "leadGen",
  // integration
  "apiIntegration",
  // broader categories
  "design",
  "marketing",
  "businessGrowth",
  "support",
  "contact",
  "about",
  "services",
];

export function detectIntent(userInput: string): Intent {
  const text = normalize(userInput);

  for (const intent of intentPriority) {
    if (hasAny(text, intentKeywords[intent])) {
      return intent;
    }
  }

  return "fallback";
}

// ─── Response Generator ───────────────────────────────────────────────────────

function formatList(items: string[]): string {
  return items.map((item) => `• ${item}`).join("\n");
}

export function generateResponse(intent: Intent): string {
  const k = techtideKnowledge;

  switch (intent) {
    case "greeting":
      return k.greeting;

    case "about":
      return (
        `**TechTide Corporate LLP** is a full-service digital agency and software development company based in Lahore, Pakistan.\n\n` +
        `${k.company.overview}\n\n` +
        `**Our Mission:** ${k.mission}\n\n` +
        `**Our Vision:** ${k.vision}\n\n` +
        `We serve startups, SMEs, and enterprises across e-commerce, healthcare, finance, education, real estate, logistics, and more.`
      );

    case "services":
      return (
        `TechTide offers a wide range of digital services:\n\n` +
        formatList(k.servicesOverview.categories) +
        `\n\nYou can explore all our services at [techtidecorporate.com/services](/services). Feel free to ask me about any specific service!`
      );

    case "webDev":
      return (
        `**Web Application Development** 🌐\n\n` +
        `${k.services.webApplications.description}\n\n` +
        `**Key capabilities:**\n${formatList(k.services.webApplications.features)}\n\n` +
        `**Examples we build:** CRM Systems, ERP Solutions, HR & Payroll, Inventory Management, Marketplaces, LMS Platforms, Hospital Systems, Booking Systems, and more.\n\n` +
        `**Tech Stack:** React, Next.js, Node.js, Python, MongoDB, PostgreSQL, AWS.\n\n` +
        `Learn more at [/services/web-applications](/services/web-applications)`
      );

    case "mobileDev":
      return (
        `**Mobile Application Development** 📱\n\n` +
        `${k.services.mobileApplications.description}\n\n` +
        `**Key capabilities:**\n${formatList(k.services.mobileApplications.features)}\n\n` +
        `**Examples:** Food Delivery Apps, Taxi Booking, E-Commerce Apps, Healthcare Apps, LMS Apps, Real Estate Apps.\n\n` +
        `**Tech Stack:** React Native, Flutter, Swift, Kotlin.\n\n` +
        `Learn more at [/services/mobile-applications](/services/mobile-applications)`
      );

    case "saas":
      return (
        `**SaaS Product Development** ☁️\n\n` +
        `${k.services.saas.description}\n\n` +
        `**Key capabilities:**\n${formatList(k.services.saas.features)}\n\n` +
        `We can help you launch a lean MVP to test the market, then scale from there. We integrate billing engines like Stripe or Paddle for automated subscriptions.\n\n` +
        `Learn more at [/services/saas-product-development](/services/saas-product-development)`
      );

    case "customSoftware":
      return (
        `**Custom Software Development** 🛠️\n\n` +
        `${k.services.customSoftware.description}\n\n` +
        `**Key capabilities:**\n${formatList(k.services.customSoftware.features)}\n\n` +
        `You retain 100% ownership of the source code and intellectual property — no licensing fees, no vendor lock-in.\n\n` +
        `Learn more at [/services/custom-software](/services/custom-software)`
      );

    case "ecommerce":
      return (
        `**E-Commerce Development** 🛒\n\n` +
        `${k.services.ecommerce.description}\n\n` +
        `**Key capabilities:**\n${formatList(k.services.ecommerce.features)}\n\n` +
        `We work with Shopify, WooCommerce, and custom-built commerce engines depending on your needs.\n\n` +
        `Learn more at [/services/ecommerce-development](/services/ecommerce-development)`
      );

    case "aiAutomation":
      return (
        `**AI & Automation Services** 🤖\n\n` +
        `${k.ai.overview}\n\n` +
        `Our AI offerings include:\n\n` +
        `**AI Automation:** ${k.ai.aiAutomation.description}\n${formatList(k.ai.aiAutomation.features)}\n\n` +
        `**Machine Learning:** ${k.ai.machineLearning.description}\n\n` +
        `**Generative AI:** ${k.ai.generativeAI.description}\n\n` +
        `Want to know more about a specific AI service?`
      );

    case "machineLearning":
      return (
        `**Machine Learning** 🧠\n\n` +
        `${k.ai.machineLearning.description}\n\n` +
        `**Key capabilities:**\n${formatList(k.ai.machineLearning.features)}\n\n` +
        `Learn more at [/services/machine-learning](/services/machine-learning)`
      );

    case "generativeAI":
      return (
        `**Generative AI** ✨\n\n` +
        `${k.ai.generativeAI.description}\n\n` +
        `**Key capabilities:**\n${formatList(k.ai.generativeAI.features)}\n\n` +
        `Learn more at [/services/generative-ai](/services/generative-ai)`
      );

    case "apiIntegration":
      return (
        `**Integration & Workflow Automation** 🔗\n\n` +
        `${k.services.apiIntegration.description}\n\n` +
        `**Key capabilities:**\n${formatList(k.services.apiIntegration.features)}\n\n` +
        `We routinely automate up to 90% of repetitive tasks — from lead routing to invoice creation.\n\n` +
        `Learn more at [/services/api-integration](/services/api-integration)`
      );

    case "design":
    case "uiux":
      return (
        `**UI/UX Design** 🎨\n\n` +
        `${k.design.uiux.description}\n\n` +
        `**Key capabilities:**\n${formatList(k.design.uiux.features)}\n\n` +
        `We provide interactive Figma prototypes so you can approve the design before development begins.\n\n` +
        `We also offer **Brand Identity** services — logo design, brand guidelines, brand strategy, and more.\n\n` +
        `Learn more at [/services/ui-ux-design](/services/ui-ux-design)`
      );

    case "branding":
      return (
        `**Brand Identity** 🎯\n\n` +
        `${k.design.brandIdentity.description}\n\n` +
        `**Key capabilities:**\n${formatList(k.design.brandIdentity.features)}\n\n` +
        `Learn more at [/services/brand-identity](/services/brand-identity)`
      );

    case "marketing":
      return (
        `**Digital Marketing Services** 📣\n\n` +
        `${k.marketing.overview}\n\n` +
        `**SEO:** ${k.marketing.seo.description}\n\n` +
        `**Social Media Marketing:** ${k.marketing.socialMedia.description}\n\n` +
        `**Performance Marketing (Paid Ads):** ${k.marketing.performanceMarketing.description}\n\n` +
        `Want details on a specific marketing service? Ask me about SEO, paid ads, or social media.`
      );

    case "seo":
      return (
        `**SEO — Search Engine Optimization** 🔍\n\n` +
        `${k.marketing.seo.description}\n\n` +
        `**Key capabilities:**\n${formatList(k.marketing.seo.features)}\n\n` +
        `Learn more at [/services/seo](/services/seo)`
      );

    case "paidAds":
      return (
        `**Performance Marketing & Paid Ads** 📊\n\n` +
        `${k.marketing.performanceMarketing.description}\n\n` +
        `**Key capabilities:**\n${formatList(k.marketing.performanceMarketing.features)}\n\n` +
        `Learn more at [/services/performance-marketing](/services/performance-marketing)`
      );

    case "leadGen":
      return (
        `**Lead Generation & Business Growth** 📈\n\n` +
        `${k.businessGrowth.leadGeneration.description}\n\n` +
        `**Lead Generation Websites:**\n${formatList(k.businessGrowth.leadGeneration.features)}\n\n` +
        `**Conversion Optimization:**\n${formatList(k.businessGrowth.conversionOptimization.features)}\n\n` +
        `**Growth Marketing Systems:**\n${formatList(k.businessGrowth.growthMarketing.features)}\n\n` +
        `Learn more at [/services/lead-generation-websites](/services/lead-generation-websites)`
      );

    case "businessGrowth":
      return (
        `**Business Growth Solutions** 🚀\n\n` +
        `TechTide builds systems to accelerate your business growth:\n\n` +
        `• **Lead Generation Websites** — conversion-optimized sites that capture qualified leads 24/7\n` +
        `• **Conversion Optimization** — UX audits and A/B testing to turn more visitors into customers\n` +
        `• **Growth Marketing Systems** — SEO, automation, and performance marketing combined\n` +
        `• **Business Automation** — custom ERP, CRM, and workflow tools to save time and reduce costs\n\n` +
        `Ask me more about any of these!`
      );

    case "support":
      return (
        `**Ongoing Support & Maintenance** 🛡️\n\n` +
        `${k.support.description}\n\n` +
        `We don't disappear after launch. Our maintenance and support plans keep your application secure, updated, and evolving with your business.\n\n` +
        `We follow an agile methodology with regular sprint cycles, daily stand-ups, and transparent progress reporting. You'll have a dedicated project manager throughout.`
      );

    case "contact":
      return (
        `**Contact TechTide** 📬\n\n` +
        `📧 **Email:** ${k.contact.email}\n` +
        `📞 **Phone:** ${k.contact.phone}\n` +
        `📍 **Address:** ${k.contact.address}\n\n` +
        `We also offer a **free initial consultation** — no obligation to proceed afterward.\n\n` +
        `${k.contact.responseTime}\n\n` +
        `👉 [Visit our Contact Page](/contact) to send us a message directly.`
      );

    case "fallback":
    default:
      return `I'm sorry, I don't have that information in my TechTide knowledge base. You can ask me about:\n\n• TechTide & our company\n• Web & mobile development\n• SaaS & custom software\n• AI & automation\n• Design & branding\n• Marketing & SEO\n• Business growth\n• Contact information\n\nWhat would you like to know?`;
  }
}

// ─── Main Matcher Export ──────────────────────────────────────────────────────

export function matchUserInput(userInput: string): MatchResult {
  const intent = detectIntent(userInput);
  const response = generateResponse(intent);
  return { intent, response };
}
