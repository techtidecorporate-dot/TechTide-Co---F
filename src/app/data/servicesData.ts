import SupportImg from "@/assets/support, ticketing, booking & communication system.png";
import EcommerceImg from "@/assets/ecommerce.jpg";
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
  id: "6966067f23963ba3d561d58b",
  title: "CRM Software Development & Customer Relationship Management System",
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
  title: "User Management & Application Security System Development",
  shortDescription:
    "Custom user management and application security systems to control access, manage permissions, and protect business applications.",
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
  title: "Business Analytics & Reporting System Development",
  shortDescription:
    "Custom business analytics and reporting systems that turn raw data into real-time dashboards, insights, and performance reports.",
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
  title: "E-Commerce Website Development & Order Management System (OMS)",
  shortDescription:
    "Custom e-commerce website development and order management systems to manage products, orders, payments, inventory, and fulfillment efficiently.",
  description:
    "TechTide Corporate LLP offers professional e-commerce website development and custom Order Management System (OMS) solutions for businesses of all sizes. Our platforms help you sell online, manage inventory, process orders, integrate secure payment gateways, and streamline fulfillment across multiple sales channels.",
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
    "e-commerce website development in Pakistan",
  ],
},

{
  id: "6966067f23963ba3d561d58f",
  title: "HRMS Software Development & Human Resource Management System",
  shortDescription:
    "Custom HRMS software to manage employees, payroll, attendance, recruitment, and performance from a single centralized platform.",
  description:
    "TechTide Corporate LLP provides custom HRMS software development and Human Resource Management System solutions for businesses of all sizes. Our HRMS platforms streamline employee records, attendance, payroll, recruitment, and performance management while delivering actionable HR analytics.",
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
  ],
  slug: "hrms-software-development",
  color: "#000000",
  bgColor: "#ffffff",
  seoTitle:
    "HRMS Software Development Company | Payroll & HR Solutions",
  seoDescription:
    "Simplify workforce management with TechTide Corporate LLP. We build custom HRMS software for payroll, attendance, recruitment, and employee performance management.",
  seoKeywords: [
    "HRMS software development",
    "human resource management system",
    "payroll management system",
    "employee management software",
    "attendance and leave management system",
    "HR software development company",
    "custom HRMS solutions",
    "HRMS software in Pakistan",
  ],
},
 {
  id: "6966067f23963ba3d561d593",
  title: "Customer Support, Ticketing, Booking & Communication System Development",
  shortDescription:
    "Custom customer support, ticketing, booking, and communication systems to manage tickets, chats, schedules, and customer interactions from one platform.",
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
  title: "Customer Management System (CMS) & CRM Software Development",
  shortDescription:
    "Custom customer management and CRM software to centralize customer data, track interactions, and improve customer engagement.",
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
  title: "Billing & Invoice Software Development for Businesses",
  shortDescription:
    "Custom billing and invoicing software to automate invoices, manage recurring payments, track transactions, and generate financial reports.",
  description:
    "TechTide Corporate LLP provides billing and invoice software development for businesses looking to automate invoicing, recurring billing, payment tracking, and financial reporting. Our secure systems support tax management, multi-currency payments, and integrations with accounting and payment gateways.",
  image:
    "https://images.unsplash.com/photo-1554224154-22dec7ec8818?auto=format&fit=crop&w=1200&q=80",
  features: [
    "Automated invoice generation",
    "Recurring billing & subscriptions",
    "Payment tracking & reconciliation",
    "Tax & VAT management",
    "Multi-currency & multi-payment support",
    "Financial reports & analytics",
    "Secure billing & payment workflows",
  ],
  slug: "billing-invoice-software-development",
  color: "#000000",
  bgColor: "#ffffff",
  seoTitle:
    "Billing & Invoice Software Development Company",
  seoDescription:
    "Automate your billing with TechTide Corporate LLP. We build custom billing and invoicing software for businesses, including recurring payments, tax management, and financial reporting.",
  seoKeywords: [
    "billing software development",
    "invoice software development",
    "billing and invoicing system",
    "payment management system",
    "recurring billing software",
    "business invoicing software",
    "billing software company",
    "invoice software development in Pakistan",
  ],
}
,
 {
  id: "6966067f23963ba3d561d58d",
  title: "ERP Software Development & Enterprise ERP Portal Solutions",
  shortDescription:
    "Custom ERP software and portal solutions to manage finance, operations, inventory, and business workflows from one centralized system.",
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
  title: "API Development & System Integration Solutions",
  shortDescription:
    "Custom API development and system integration services to connect applications, automate workflows, and synchronize data securely.",
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

];
