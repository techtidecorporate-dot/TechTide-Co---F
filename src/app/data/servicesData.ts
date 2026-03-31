import SupportImg from "@/assets/support, ticketing, booking & communication system.png";
import EcommerceImg from "@/assets/ecommerce.jpg";
import { seoServicesData } from "./seoServicesData";
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
  // Rich SEO page fields (optional for backward compatibility)
  introContent?: string;
  servicesContent?: string[];
  benefits?: Benefit[];
  processSteps?: ProcessStep[];
  industryUseCases?: IndustryUseCase[];
  usps?: USP[];
  ctaHeading?: string;
  ctaDescription?: string;
  isLandingPage?: boolean;
}

export const systemsData: SystemItem[] = [
  {
  id: "6966067f23963ba3d561d58b",
  title: "CRM & Customer Engagement Systems",
  shortDescription:
    "Custom CRM software to manage customer relationships, sales pipelines, leads, communication, and customer data from one centralized platform.",
  description:
    "TechTide Corporate LLP offers CRM software development and Customer Relationship Management system solutions that help businesses improve sales, customer engagement, and retention. Our CRM platforms centralize customer data, automate sales workflows, track leads and opportunities, and provide actionable analytics for growth.",
  image:
    "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=1200&q=80",
  features: [
    "Centralized customer data management",
    "Sales pipeline & deal tracking",
    "Lead & opportunity management",
    "Automated follow-ups & reminders",
    "Customer interaction & communication history",
    "CRM analytics & performance dashboards",
    "Sales & support workflow automation",
  ],
  slug: "crm-software-development",
  color: "#000000",
  bgColor: "#ffffff",
  seoTitle:
    "CRM Software Development Company | Customer Relationship Management",
  seoDescription:
    "Grow your business with TechTide Corporate LLP’s CRM software development services. We build custom CRM systems to manage customers, automate sales, and improve customer relationships.",
  seoKeywords: [
    "CRM software development",
    "customer relationship management system",
    "custom CRM solutions",
    "sales automation software",
    "CRM system for businesses",
    "CRM development company",
    "CRM software company in Pakistan",
    "customer management and sales software",
  ],
}
,
 {
  id: "6966067f23963ba3d561d592",
  title: "User Management & App Security",
  shortDescription:
    "Custom user management and application security systems to control access, manage permissions, and protect business data with advanced security.",
  description:
    "TechTide Corporate LLP provides user management and application security system development for businesses and enterprises. Our solutions include secure authentication, role-based access control, multi-factor authentication, activity logging, and audit trails to protect applications and sensitive data.",
  image:
    "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80",
  features: [
    "Role-based access control (RBAC)",
    "Secure authentication & authorization",
    "Multi-factor authentication (MFA)",
    "User roles & permission management",
    "User activity logs & monitoring",
    "Audit trails & compliance support",
    "Enterprise-grade data security",
  ],
  slug: "user-management-application-security",
  color: "#000000",
  bgColor: "#ffffff",
  seoTitle:
    "User Management & Application Security Solutions Company",
  seoDescription:
    "Secure your applications with TechTide Corporate LLP. We build custom user management systems with role-based access, MFA, secure authentication, and enterprise-level security.",
  seoKeywords: [
    "user management system",
    "application security solutions",
    "role based access control",
    "authentication and authorization system",
    "secure login system",
    "identity and access management",
    "security software development company",
    "application security services in Pakistan",
  ],
},
  {
  id: "6966067f23963ba3d561d590",
  title: "Business Analytics & Reporting",
  shortDescription:
    "Custom business analytics and reporting systems that turn raw data into real-time dashboards, actionable insights, and performance reports.",
  description:
    "TechTide Corporate LLP provides custom business analytics and reporting system development to help organizations make data-driven decisions. Our solutions offer real-time dashboards, advanced data visualization, KPI tracking, and automated reports that improve performance, strategy, and operational efficiency.",
  image:
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
  features: [
    "Custom analytics dashboard development",
    "Real-time data monitoring",
    "Advanced data visualization",
    "KPI & performance tracking",
    "Business intelligence (BI) reporting",
    "Automated report generation",
    "Data export & sharing options",
  ],
  slug: "business-analytics-reporting-system",
  color: "#000000",
  bgColor: "#ffffff",
  seoTitle:
    "Business Analytics & Reporting System Development Company",
  seoDescription:
    "Make smarter decisions with TechTide Corporate LLP’s business analytics and reporting systems. We build custom BI dashboards, real-time analytics, and performance reporting solutions.",
  seoKeywords: [
    "business analytics system",
    "reporting system development",
    "business intelligence solutions",
    "custom analytics dashboard",
    "data visualization services",
    "BI reporting software",
    "analytics software development company",
    "business analytics services in Pakistan",
  ],
},
  {
  id: "6966067f23963ba3d561d58e",
  title: "E-Commerce & Order Management",
  shortDescription:
    "Custom e-commerce platforms and order management systems (OMS) to manage products, payments, and global fulfillment from a single dashboard.",
  description:
    "TechTide Corporate LLP offers professional e-commerce website development and custom Order Management System (OMS) solutions for businesses across the UK, USA, Canada, Germany, and Europe. Our platforms help you sell online, manage inventory, process orders, integrate secure payment gateways, and streamline fulfillment across multiple sales channels — built by our expert team in Pakistan.",
  image: EcommerceImg,
  features: [
    "Custom e-commerce website development",
    "Product & inventory management",
    "Order & fulfillment automation",
    "Secure payment gateway integration",
    "Multi-channel sales management",
    "Returns & refunds management",
    "Sales reports & performance analytics",
  ],
  slug: "ecommerce-website-development-oms",
  color: "#000000",
  bgColor: "#ffffff",
  seoTitle:
    "E-Commerce Website Development Company | OMS Solutions",
  seoDescription:
    "Grow your online business with TechTide Corporate LLP. We build custom e-commerce websites and order management systems (OMS) for secure payments, inventory control, and scalable online sales.",
  seoKeywords: [
    "e-commerce website development",
    "order management system",
    "OMS software development",
    "custom e-commerce solutions",
    "online store development",
    "inventory and order management system",
    "e-commerce development company",
    "ecommerce web development UK",
    "ecommerce web development company USA",
    "Shopify development company USA",
    "ecommerce web development Canada",
    "ecommerce development company Germany",
    "Shopify Entwicklung Deutschland",
  ],
},

{
  id: "6966067f23963ba3d561d58f",
  title: "Custom HRMS & HR Solutions",
  shortDescription:
    "Bespoke HRMS development to manage employees, payroll, attendance, and recruitment through a secure, tailored platform for UK and global companies.",
  description:
    "As a leading HR software development company based in Pakistan, TechTide Corporate LLP delivers custom HRMS software development and bespoke HR management system solutions for businesses across the United Kingdom. Whether you need employee management software development for a growing startup or an enterprise-grade human resource platform, our expert team builds scalable, secure, and fully tailored solutions that simplify workforce operations and drive organisational efficiency.",
  image:
    "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=80",
  features: [
    "Employee records & profile management",
    "Attendance, leave & shift tracking",
    "Payroll & compensation management",
    "Recruitment & onboarding workflows",
    "Performance evaluation & reviews",
    "HR analytics & reports",
    "Role-based access & data security",
    "Self-service employee portals",
    "Document & contract management",
    "UK employment law compliance tools",
  ],
  slug: "hrms-software-development",
  color: "#000000",
  bgColor: "#ffffff",
  seoTitle:
    "Custom HRMS Software Development UK | HR Software Company",
  seoDescription:
    "Leading HR software development company serving UK businesses. We build bespoke HR management systems, employee management software, and custom HRMS solutions.",
  seoKeywords: [
    "custom hrms software development",
    "hr software development company",
    "bespoke hr management system",
    "employee management software development",
    "HRMS software UK",
    "custom HR solutions",
    "payroll management system",
    "workforce management software",
    "human resource management system UK",
    "HR automation software",
  ],
  introContent:
    "Managing human resources efficiently is the backbone of every successful organisation. From recruitment and onboarding to payroll processing and performance reviews, HR operations demand precision, compliance, and scalability. Based in Pakistan and serving clients across the United Kingdom, TechTide Corporate LLP specialises in custom HRMS software development that empowers UK businesses to streamline their entire HR lifecycle. As a trusted HR software development company, we understand that no two organisations are alike — which is why every bespoke HR management system we build is tailored to your exact operational requirements, workforce size, and growth ambitions.",
  servicesContent: [
    "Employee Database & Records Management — Centralised, secure storage for all employee data, contracts, documents, and organisational charts with instant search and filtering.",
    "Attendance, Leave & Shift Management — Automated time tracking, leave requests, approval workflows, shift scheduling, and absence monitoring with real-time dashboards.",
    "Payroll & Compensation Processing — End-to-end payroll automation with tax calculations, National Insurance deductions, pension contributions, and HMRC-compliant payslip generation.",
    "Recruitment & Onboarding Automation — Applicant tracking systems (ATS), job posting management, interview scheduling, offer letter generation, and digital onboarding checklists.",
    "Performance Management & Appraisals — Goal setting, 360-degree feedback, performance review cycles, competency tracking, and automated appraisal reports.",
    "Employee Self-Service Portal — Empower your team with self-service access to payslips, leave balances, policy documents, training records, and personal information updates.",
    "HR Analytics & Workforce Reporting — Real-time dashboards tracking headcount, attrition, diversity metrics, overtime costs, and departmental performance KPIs.",
    "Compliance & Document Management — Automated policy distribution, e-signature collection, right-to-work verification, and UK employment law compliance tools.",
  ],
  benefits: [
    {
      title: "Fully Bespoke Solutions",
      description: "Every module, workflow, and dashboard is custom-built to match your organisation's specific HR processes — no forcing your business into a rigid template.",
    },
    {
      title: "UK Compliance Built-In",
      description: "Our systems are designed with HMRC regulations, GDPR requirements, and UK employment law at the core, ensuring you stay compliant effortlessly.",
    },
    {
      title: "Scalable Architecture",
      description: "Whether you have 20 employees or 20,000, our HRMS solutions scale seamlessly as your organisation grows, without performance degradation.",
    },
    {
      title: "Reduced Administrative Burden",
      description: "Automate repetitive tasks like payroll runs, leave approvals, and document generation — freeing your HR team to focus on strategic initiatives.",
    },
    {
      title: "Improved Employee Experience",
      description: "Self-service portals, mobile access, and intuitive interfaces boost employee satisfaction and reduce HR ticket volumes.",
    },
    {
      title: "Data-Driven Decision Making",
      description: "Real-time analytics and workforce insights help leadership make informed decisions about hiring, retention, and resource allocation.",
    },
  ],
  processSteps: [
    {
      step: "01",
      title: "Discovery & Requirements Analysis",
      description: "We conduct in-depth workshops to understand your HR workflows, compliance needs, integration requirements, and growth plans.",
    },
    {
      step: "02",
      title: "Solution Architecture & UX Design",
      description: "Our architects design a scalable system blueprint while UX designers create intuitive interfaces that your HR team and employees will love.",
    },
    {
      step: "03",
      title: "Agile Development & Integration",
      description: "We build your HRMS in iterative sprints, integrating with existing payroll providers, accounting tools, and communication platforms along the way.",
    },
    {
      step: "04",
      title: "Testing, Compliance & Data Migration",
      description: "Rigorous QA testing, GDPR compliance audits, and secure migration of your existing employee data into the new system.",
    },
    {
      step: "05",
      title: "Deployment, Training & Ongoing Support",
      description: "Smooth production launch with comprehensive training for HR staff and employees, followed by dedicated maintenance and feature updates.",
    },
  ],
  industryUseCases: [
    {
      industry: "Healthcare & NHS Trusts",
      description: "Manage complex shift patterns, compliance certifications, and large distributed workforces with specialised HR modules.",
    },
    {
      industry: "Financial Services & Banking",
      description: "Strict regulatory compliance, audit trails, and secure access controls for sensitive employee and organisational data.",
    },
    {
      industry: "Retail & Hospitality",
      description: "Seasonal workforce management, flexible scheduling, and high-volume recruitment automation for fast-paced environments.",
    },
    {
      industry: "Education & Universities",
      description: "Academic staff management, contract tracking, sabbatical planning, and integration with institutional systems.",
    },
    {
      industry: "Manufacturing & Logistics",
      description: "Workforce planning, overtime tracking, health & safety compliance, and multi-site employee management.",
    },
    {
      industry: "Technology & SaaS Companies",
      description: "Agile team management, remote workforce tools, equity tracking, and integration with project management platforms.",
    },
  ],
  usps: [
    {
      title: "Pakistan-Based, UK Market Experts",
      description: "Work directly with our skilled Pakistan-based team who understand UK business culture, employment regulations, and compliance requirements — delivering premium quality at competitive rates.",
    },
    {
      title: "MERN Stack Expertise",
      description: "We leverage MongoDB, Express.js, React, and Node.js to build lightning-fast, modern HR applications that outperform legacy systems.",
    },
    {
      title: "End-to-End Ownership",
      description: "From initial concept through to deployment and ongoing support, we take full responsibility for your HRMS project's success.",
    },
    {
      title: "Transparent & Agile Process",
      description: "Regular sprint demos, clear communication, and full visibility into project progress — no surprises, ever.",
    },
  ],
  ctaHeading: "Ready to Transform Your HR Operations?",
  ctaDescription: "Partner with TechTide Corporate LLP — your trusted software development partner in Pakistan — to build a bespoke HR management system tailored to your UK business. Let's discuss your requirements and create an HRMS that drives efficiency, compliance, and growth.",
},
 {
  id: "6966067f23963ba3d561d593",
  title: "Support, Booking & Ticketing",
  shortDescription:
    "Custom support ticketing and booking systems to centralize chats, schedules, and customer interactions for improved service efficiency.",
  description:
    "TechTide Corporate LLP provides customer support, ticketing, booking, and communication system development for businesses and startups. Our solutions centralize support tickets, live chat, bookings, automated responses, and customer feedback to improve response time, efficiency, and overall customer experience.",
  image: SupportImg,
  features: [
    "Support ticket & helpdesk management",
    "Online booking & appointment scheduling",
    "Live chat & messaging system",
    "Automated responses & notifications",
    "Customer feedback & satisfaction tracking",
    "Agent performance & analytics dashboards",
    "Multi-channel customer communication",
  ],
  slug: "customer-support-ticketing-booking-system",
  color: "#000000",
  bgColor: "#ffffff",
  seoTitle:
    "Customer Support, Ticketing & Booking System Development Company",
  seoDescription:
    "Improve customer experience with TechTide Corporate LLP. We build custom customer support, ticketing, booking, and live chat systems to streamline communication and support operations.",
  seoKeywords: [
    "customer support system",
    "support ticketing software",
    "helpdesk software development",
    "booking and scheduling system",
    "live chat system for websites",
    "customer communication platform",
    "customer support software company",
    "helpdesk software development in Pakistan",
  ],
}
, 

 {
  id: "6966067f23963ba3d561d58c",
  title: "Custom CMS & CRM Platforms",
  shortDescription:
    "Custom customer management systems (CMS) to centralize data, track engagement, and build stronger relationships through tailored CRM features.",
  description:
    "TechTide Corporate LLP provides Customer Management System (CMS) and CRM software development solutions that help businesses manage customer data, communication, and engagement efficiently. Our systems offer secure access, customer segmentation, activity tracking, and seamless integrations to support sales, marketing, and customer support teams.",
  image:
    "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1200&q=80",
  features: [
    "Centralized customer database",
    "Customer segmentation & profiling",
    "Customer activity & interaction tracking",
    "Secure role-based access controls",
    "Third-party system integrations",
    "Scalable & customizable architecture",
    "Sales & customer engagement insights",
  ],
  slug: "customer-management-system-crm",
  color: "#000000",
  bgColor: "#ffffff",
  seoTitle:
    "Customer Management System & CRM Software Development Company",
  seoDescription:
    "Manage customer data effectively with TechTide Corporate LLP. We build custom customer management systems and CRM software to improve customer engagement, sales, and retention.",
  seoKeywords: [
    "customer management system",
    "CRM software development",
    "customer relationship management system",
    "customer data management software",
    "custom CRM solutions",
    "customer management software for businesses",
    "CRM development company",
    "CRM software development in Pakistan",
  ],
}
,
  {
  id: "6966067f23963ba3d561d591",
  title: "Billing & Invoice Management",
  shortDescription:
    "Custom billing and invoice software to automate payments, track financial transactions, and maintain compliance through bespoke digital workflows.",
  description:
    "Looking for custom invoice software for your UK business? TechTide Corporate LLP is a specialist billing software development company based in Pakistan, delivering bespoke invoice management system development for businesses across the United Kingdom. Our tailored solutions automate invoicing workflows, simplify payment tracking, ensure VAT compliance, and provide real-time financial visibility — helping UK businesses of all sizes get paid faster and manage cash flow with confidence.",
  image:
    "https://images.unsplash.com/photo-1554224154-22dec7ec8818?auto=format&fit=crop&w=1200&q=80",
  features: [
    "Automated invoice generation & delivery",
    "Recurring billing & subscription management",
    "Payment tracking & bank reconciliation",
    "HMRC-compliant VAT & tax management",
    "Multi-currency & multi-payment gateway support",
    "Financial reports & cash flow analytics",
    "Secure billing & payment workflows",
    "Credit note & refund management",
    "Client portal with payment history",
    "Integration with UK accounting platforms",
  ],
  slug: "billing-invoice-software-development",
  color: "#000000",
  bgColor: "#ffffff",
  seoTitle:
    "Custom Invoice Software UK | Billing Software Development",
  seoDescription:
    "Leading billing software development company serving UK businesses. We build custom invoice software, invoice management systems, and billing solutions for the UK.",
  seoKeywords: [
    "custom invoice software UK",
    "invoice management system development UK",
    "billing software development company UK",
    "custom invoicing solution",
    "payment management system UK",
    "recurring billing software",
    "VAT compliant invoicing software",
    "accounts receivable automation",
    "financial software development UK",
    "invoice automation platform",
  ],
  introContent:
    "In today's fast-paced UK business landscape, manual invoicing and disconnected billing processes cost companies thousands in administrative overhead, delayed payments, and compliance risks. Based in Pakistan and proudly serving UK clients, TechTide Corporate LLP specialises in custom invoice software development and invoice management system development for businesses across the UK. As a dedicated billing software development company, we build tailored solutions that automate your entire billing lifecycle — from quote generation and invoice creation to payment collection and financial reporting — all while maintaining full HMRC compliance and Making Tax Digital (MTD) readiness.",
  servicesContent: [
    "Automated Invoice Generation & Delivery — Create professional, branded invoices automatically from quotes, orders, or time entries. Schedule delivery via email, client portals, or integrated platforms with automatic reminders for overdue payments.",
    "Recurring Billing & Subscription Management — Set up automated recurring invoices for retainers, subscriptions, and service contracts. Manage billing cycles, pro-rata calculations, and automatic payment collection with ease.",
    "Payment Tracking & Bank Reconciliation — Real-time visibility into outstanding payments, partial payments, and overdue accounts. Automated bank feed reconciliation reduces manual data entry and eliminates errors.",
    "HMRC-Compliant VAT & Tax Management — Built-in VAT calculation, reverse charge mechanisms, CIS deductions, and Making Tax Digital (MTD) compliance. Generate VAT returns and tax summaries ready for submission.",
    "Multi-Currency & Payment Gateway Integration — Accept payments in multiple currencies through Stripe, GoCardless, PayPal, and direct bank transfers. Automatic currency conversion and exchange rate tracking.",
    "Client Portal & Self-Service Access — Give your clients a branded portal to view invoices, download statements, make payments, and access their complete transaction history.",
    "Credit Notes, Refunds & Dispute Management — Handle credit notes, partial refunds, and payment disputes within a structured workflow that maintains accurate financial records.",
    "Financial Reporting & Cash Flow Analytics — Real-time dashboards for revenue tracking, aged debtors, cash flow forecasting, profit margins, and financial performance KPIs.",
  ],
  benefits: [
    {
      title: "Get Paid Faster",
      description: "Automated invoice delivery, payment reminders, and online payment options reduce your average payment cycle by up to 40%.",
    },
    {
      title: "Full HMRC & MTD Compliance",
      description: "Built-in VAT calculations, Making Tax Digital readiness, and automated tax reporting keep you compliant without the stress.",
    },
    {
      title: "Eliminate Manual Errors",
      description: "Automated calculations, bank reconciliation, and data validation eliminate the costly errors inherent in manual invoicing processes.",
    },
    {
      title: "Real-Time Financial Visibility",
      description: "Instant access to cash flow dashboards, aged debtor reports, and revenue analytics — empowering smarter financial decisions.",
    },
    {
      title: "Seamless Integration",
      description: "Connect your invoice system with Xero, QuickBooks, Sage, CRM tools, and banking platforms for a unified financial ecosystem.",
    },
    {
      title: "Scalable for Growth",
      description: "From sole traders to enterprise organisations, our billing solutions scale with your business without requiring platform migrations.",
    },
  ],
  processSteps: [
    {
      step: "01",
      title: "Financial Workflow Analysis",
      description: "We map your current invoicing processes, payment flows, compliance requirements, and integration needs to define the optimal solution architecture.",
    },
    {
      step: "02",
      title: "Solution Design & Prototyping",
      description: "Our team designs the system architecture, invoice templates, payment workflows, and user interfaces — validated with interactive prototypes.",
    },
    {
      step: "03",
      title: "Development & Payment Integration",
      description: "Agile development with iterative releases, integrating payment gateways, accounting platforms, and banking APIs throughout the build.",
    },
    {
      step: "04",
      title: "Compliance Testing & Data Migration",
      description: "Comprehensive testing for VAT accuracy, MTD compliance, security audits, and secure migration of existing financial data and client records.",
    },
    {
      step: "05",
      title: "Launch, Training & Support",
      description: "Production deployment with team training, documentation, and ongoing technical support to ensure smooth operation and continuous improvement.",
    },
  ],
  industryUseCases: [
    {
      industry: "Professional Services & Consultancies",
      description: "Time-based billing, project invoicing, retainer management, and expense tracking for law firms, accountants, and consultancies.",
    },
    {
      industry: "Construction & Trades",
      description: "CIS-compliant invoicing, milestone billing, materials tracking, and subcontractor payment management for construction businesses.",
    },
    {
      industry: "SaaS & Subscription Businesses",
      description: "Automated recurring billing, usage-based pricing, trial management, and subscription lifecycle automation.",
    },
    {
      industry: "E-Commerce & Retail",
      description: "Order-to-invoice automation, multi-channel sales reconciliation, refund processing, and marketplace settlement tracking.",
    },
    {
      industry: "Healthcare & Private Clinics",
      description: "Patient billing, insurance claim processing, appointment-based invoicing, and NHS/private payment splitting.",
    },
    {
      industry: "Creative & Marketing Agencies",
      description: "Project-based invoicing, retainer billing, time tracking integration, and multi-client financial management.",
    },
  ],
  usps: [
    {
      title: "Deep UK Financial Expertise",
      description: "Our Pakistan-based team has deep expertise in UK tax law, HMRC regulations, and Making Tax Digital requirements — built into every solution from day one.",
    },
    {
      title: "Modern Technology Stack",
      description: "We leverage the MERN stack (MongoDB, Express.js, React, Node.js) to build fast, responsive, and scalable billing platforms.",
    },
    {
      title: "Proven Track Record",
      description: "From our base in Pakistan, we've helped businesses across the UK automate their billing operations, reduce payment delays, and achieve compliance with confidence.",
    },
    {
      title: "Dedicated Support Team",
      description: "Post-launch maintenance, feature updates, and responsive support to keep your billing system running smoothly around the clock.",
    },
  ],
  ctaHeading: "Ready to Automate Your Invoicing?",
  ctaDescription: "Partner with TechTide Corporate LLP — your trusted software development partner in Pakistan — to build a custom invoice management system that streamlines billing, accelerates payments, and ensures compliance for your UK business. Let's discuss your requirements today.",
}
,
 {
  id: "6966067f23963ba3d561d58d",
  title: "Enterprise ERP Portal Solutions",
  shortDescription:
    "Custom ERP portals to centralize finance, operations, inventory, and business workflows into a scalable, high-performance enterprise platform.",
  description:
    "TechTide Corporate LLP provides custom ERP software development and ERP portal solutions designed for growing businesses and enterprises. Our ERP systems integrate finance, HR, inventory, operations, and analytics into a secure, scalable platform that improves efficiency, automation, and decision-making.",
  image:
    "https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&w=1200&q=80",
  features: [
    "Custom ERP software development",
    "Finance & accounting management",
    "Inventory & supply chain control",
    "Business process automation",
    "Role-based user access",
    "Real-time reports & analytics",
    "Scalable enterprise architecture",
  ],
  slug: "erp-software-development",
  color: "#000000",
  bgColor: "#ffffff",
  seoTitle:
    "ERP Software Development Company | Custom ERP Portal Solutions",
  seoDescription:
    "Looking for a reliable ERP software development company? TechTide Corporate LLP builds custom ERP portal solutions to automate business operations, finance, inventory, and reporting.",
  seoKeywords: [
    "ERP software development",
    "ERP portal development",
    "custom ERP system",
    "enterprise resource planning software",
    "ERP solutions for businesses",
    "business automation software",
    "ERP development company",
    "ERP software company in Pakistan",
  ],
},

 {
  id: "6966067f23963ba3d561d594",
  title: "API & System Integration",
  shortDescription:
    "Custom API development and system integration services to securely connect platforms, automate data flow, and synchronize business applications.",
  description:
    "TechTide Corporate LLP provides API development and system integration solutions for businesses and startups. Our services enable seamless communication between internal systems, third-party platforms, and web applications through REST & GraphQL APIs, secure authentication, webhooks, and scalable architectures.",
  image:
    "https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&w=1200&q=80",
  features: [
    "REST & GraphQL API development",
    "Third-party service integrations",
    "Secure authentication & authorization",
    "Real-time data synchronization",
    "Webhook & event-driven integrations",
    "Scalable & modular architecture",
    "Enterprise-grade API solutions",
  ],
  slug: "api-development-system-integration",
  color: "#000000",
  bgColor: "#ffffff",
  seoTitle:
    "API Development & System Integration Services Company",
  seoDescription:
    "Connect your applications and automate workflows with TechTide Corporate LLP. We build custom APIs and integration systems for secure, scalable, and real-time data synchronization.",
  seoKeywords: [
    "API development services",
    "system integration solutions",
    "API integration software",
    "data synchronization system",
    "custom API development company",
    "enterprise system integration",
    "API solutions for businesses",
    "API development services in Pakistan",
  ],
},

{
  id: "6966067f23963ba3d561d595",
  title: "AI & Machine Learning Solutions",
  shortDescription:
    "Custom AI-powered software and machine learning solutions to automate complex processes, unlock data insights, and enhance customer experiences.",
  description:
    "TechTide Corporate LLP is a specialist AI web development company based in Pakistan, delivering artificial intelligence software development for businesses across the UK, USA, Canada, Germany, and Europe. From intelligent web applications and machine learning models to natural language processing and predictive analytics platforms, our team builds custom AI solutions that automate operations, enhance customer experiences, and unlock data-driven growth.",
  image:
    "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80",
  features: [
    "AI-powered web application development",
    "Machine learning model development & deployment",
    "Natural language processing (NLP) solutions",
    "Computer vision & image recognition",
    "Predictive analytics & forecasting",
    "AI chatbot & virtual assistant development",
    "Intelligent automation & workflow optimisation",
    "Recommendation engine development",
    "AI API integration & custom model training",
    "Data pipeline & MLOps infrastructure",
  ],
  slug: "ai-web-development",
  color: "#000000",
  bgColor: "#ffffff",
  seoTitle:
    "AI Web Development Company UK | AI Software Development",
  seoDescription:
    "Leading AI web development company serving UK businesses. TechTide builds artificial intelligence software, machine learning solutions, and AI-powered web applications.",
  seoKeywords: [
    "AI web development company UK",
    "artificial intelligence software development UK",
    "AI software solutions",
    "machine learning development UK",
    "AI powered web applications",
    "custom AI solutions",
    "NLP development company",
    "AI chatbot development",
    "predictive analytics software UK",
    "intelligent automation solutions",
    "AI software development company USA",
    "AI web development agency USA",
    "AI web development company Canada",
    "AI app development Canada",
    "KI Softwareentwicklung Deutschland",
    "AI development company Germany",
    "AI software development Europe",
  ],
  introContent:
    "Artificial intelligence is no longer a futuristic concept — it's a competitive necessity. Businesses across the United Kingdom, United States, Canada, Germany, and Europe are leveraging AI to automate complex processes, deliver personalised customer experiences, extract actionable insights from data, and build products that were simply impossible just a few years ago. Based in Pakistan and serving clients globally, TechTide Corporate LLP is a leading AI web development company that combines deep expertise in artificial intelligence software development with modern web technologies to build intelligent applications that deliver real, measurable business impact. Whether you're looking to integrate AI capabilities into an existing platform or build an entirely new AI-powered product, our team has the technical depth and industry experience to bring your vision to life.",
  servicesContent: [
    "AI-Powered Web Application Development — We build web applications with embedded AI capabilities including smart search, content generation, automated decision-making, personalisation engines, and intelligent user interfaces that adapt to user behaviour.",
    "Machine Learning Model Development & Deployment — From data analysis and feature engineering to model training, validation, and production deployment, we develop custom ML models for classification, regression, clustering, and anomaly detection.",
    "Natural Language Processing (NLP) Solutions — Text analysis, sentiment detection, document summarisation, entity extraction, language translation, and conversational AI — we build NLP solutions that help machines understand human language.",
    "AI Chatbot & Virtual Assistant Development — Intelligent conversational agents for customer support, sales qualification, appointment booking, and internal helpdesk automation — powered by large language models and custom training data.",
    "Predictive Analytics & Forecasting — Transform historical data into future insights with predictive models for demand forecasting, customer churn prediction, financial modelling, and risk assessment.",
    "Computer Vision & Image Recognition — Object detection, image classification, facial recognition, document OCR, and visual quality inspection solutions for manufacturing, retail, healthcare, and security applications.",
    "Recommendation Engine Development — Personalised product, content, and service recommendations powered by collaborative filtering, content-based algorithms, and hybrid AI models.",
    "Intelligent Process Automation — Combine AI with robotic process automation (RPA) to automate complex business workflows, document processing, data extraction, and decision-making pipelines.",
  ],
  benefits: [
    {
      title: "Competitive Advantage Through AI",
      description: "AI-powered features differentiate your products and services, enabling you to deliver experiences and capabilities that competitors simply cannot match.",
    },
    {
      title: "Dramatically Reduce Operational Costs",
      description: "Intelligent automation of repetitive tasks, data processing, and decision-making reduces manual effort and operational expenditure across your organisation.",
    },
    {
      title: "Data-Driven Decision Making",
      description: "Predictive analytics and AI-generated insights transform raw data into actionable intelligence, enabling leaders to make confident, evidence-based decisions.",
    },
    {
      title: "Enhanced Customer Experiences",
      description: "Personalisation, intelligent recommendations, and conversational AI create memorable customer journeys that drive loyalty and revenue.",
    },
    {
      title: "Scalable & Future-Proof",
      description: "Our AI solutions are built on modern, scalable architectures that grow with your business and adapt to emerging AI technologies and models.",
    },
    {
      title: "Faster Time to Market",
      description: "Our proven AI development frameworks and pre-built components accelerate delivery, getting your intelligent applications into production faster.",
    },
  ],
  processSteps: [
    {
      step: "01",
      title: "AI Strategy & Feasibility Assessment",
      description: "We evaluate your business challenges, data assets, and objectives to identify the highest-impact AI opportunities and define a clear implementation roadmap.",
    },
    {
      step: "02",
      title: "Data Engineering & Preparation",
      description: "Our engineers collect, clean, structure, and enrich your data — building the robust data foundation that every successful AI project requires.",
    },
    {
      step: "03",
      title: "Model Development & Training",
      description: "We develop, train, and validate custom AI models using state-of-the-art algorithms, frameworks, and techniques — iterating until performance targets are achieved.",
    },
    {
      step: "04",
      title: "Application Integration & Testing",
      description: "AI models are integrated into your web applications with production-grade APIs, comprehensive testing, performance benchmarking, and user acceptance validation.",
    },
    {
      step: "05",
      title: "Deployment, Monitoring & Optimisation",
      description: "Production deployment with MLOps monitoring, model drift detection, A/B testing, and continuous optimisation to ensure sustained AI performance.",
    },
  ],
  industryUseCases: [
    {
      industry: "E-Commerce & Retail",
      description: "AI-powered product recommendations, dynamic pricing, visual search, demand forecasting, and personalised marketing automation.",
    },
    {
      industry: "Financial Services & FinTech",
      description: "Fraud detection, credit risk scoring, algorithmic trading signals, regulatory compliance automation, and intelligent customer onboarding.",
    },
    {
      industry: "Healthcare & Life Sciences",
      description: "Medical image analysis, patient risk prediction, drug discovery support, clinical document processing, and AI-assisted diagnostics.",
    },
    {
      industry: "Property & Real Estate",
      description: "Automated property valuation models, tenant screening, smart building management, and market trend prediction.",
    },
    {
      industry: "Legal & Professional Services",
      description: "Contract analysis, legal document review, case outcome prediction, and AI-powered research assistants for law firms.",
    },
    {
      industry: "Manufacturing & Supply Chain",
      description: "Predictive maintenance, quality inspection automation, supply chain optimisation, and production planning intelligence.",
    },
  ],
  usps: [
    {
      title: "Deep AI & ML Expertise",
      description: "Our engineers have hands-on experience with TensorFlow, PyTorch, OpenAI, Hugging Face, and custom model architectures — delivering AI that actually works in production.",
    },
    {
      title: "Full-Stack AI Capabilities",
      description: "We don't just build models — we build complete, production-ready AI applications with beautiful front-ends, robust APIs, and scalable infrastructure.",
    },
    {
      title: "Global Team, UK Market Expertise",
      description: "Based in Pakistan with deep understanding of UK market dynamics, regulatory requirements, and business culture — delivering world-class AI solutions at competitive rates.",
    },
    {
      title: "Responsible AI Development",
      description: "We follow ethical AI principles including transparency, fairness, privacy protection, and bias mitigation in every solution we build.",
    },
  ],
  ctaHeading: "Ready to Build Intelligent Software?",
  ctaDescription: "Partner with TechTide Corporate LLP — your trusted AI web development company in Pakistan, proudly serving businesses across the UK, USA, Canada, Germany, and Europe. Let's explore how artificial intelligence can transform your business operations, delight your customers, and give you a lasting competitive edge.",
},

...seoServicesData,
];
