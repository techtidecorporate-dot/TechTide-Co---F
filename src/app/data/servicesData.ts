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
    id: "6966067f23963ba3d561d58d",
    title: "ERP (Enterprise Resource Planning) Portal",
    shortDescription:
      "Integrate and manage core business operations through a unified ERP portal for enterprises.",
    description:
      "TechTide Co.'s ERP portals streamline business processes by integrating finance, operations, inventory, and reporting into a single system.",
    image:
      "https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Finance and accounting",
      "Inventory management",
      "Process automation",
      "Role-based access",
      "Real-time reporting",
      "Enterprise scalability",
    ],
    slug: "erp-portal-system",
    color: "#000000",
    bgColor: "#ffffff",
    seoTitle: "ERP Portal Solutions for Enterprises | TechTide Co.",
    seoDescription:
      "Optimize business operations with TechTide Co.'s scalable ERP portal solutions.",
    seoKeywords: [
      "ERP system",
      "enterprise resource planning",
      "business automation",
      "TechTide Co",
    ],
  },
  {
    id: "6966067f23963ba3d561d58e",
    title: "E-Commerce / OMS (Order Management System)",
    shortDescription:
      "Manage online sales, orders, inventory, and fulfillment with powerful e-commerce and OMS solutions.",
    description:
      "TechTide Co. delivers robust e-commerce platforms and OMS solutions to handle high-volume transactions and real-time inventory.",
    image: EcommerceImg,
    features: [
      "Product and inventory management",
      "Order processing",
      "Payment gateway integration",
      "Multi-channel sales",
      "Returns management",
      "Sales analytics",
    ],
    slug: "ecommerce-order-management-system",
    color: "#000000",
    bgColor: "#ffffff",
    seoTitle: "E-Commerce & Order Management Solutions | TechTide Co.",
    seoDescription:
      "Scale your online business with TechTide Co.'s e-commerce and order management solutions.",
    seoKeywords: [
      "e-commerce system",
      "order management system",
      "online sales platform",
      "TechTide Co",
    ],
  },
  {
    id: "6966067f23963ba3d561d590",
    title: "Analytics & Reporting System",
    shortDescription:
      "Transform business data into actionable insights with advanced analytics and reporting tools.",
    description:
      "TechTide Co.'s analytics systems deliver real-time dashboards and data-driven insights for smarter decisions.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Real-time dashboards",
      "Custom reports",
      "Data visualization",
      "Performance tracking",
      "Business intelligence",
      "Export & sharing",
    ],
    slug: "analytics-reporting-system",
    color: "#000000",
    bgColor: "#ffffff",
    seoTitle: "Business Analytics & Reporting Solutions | TechTide Co.",
    seoDescription:
      "Gain actionable insights with TechTide Co.'s analytics and reporting solutions.",
    seoKeywords: [
      "business analytics",
      "reporting system",
      "data visualization",
      "TechTide Co",
    ],
  },
  {
    id: "6966067f23963ba3d561d58f",
    title: "HRMS (Human Resource Management System)",
    shortDescription:
      "Streamline HR operations, employee management, and payroll with a modern HRMS.",
    description:
      "TechTide Co.'s HRMS solutions simplify workforce management from recruitment to performance evaluation.",
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Employee records",
      "Attendance and leave tracking",
      "Payroll management",
      "Performance reviews",
      "Recruitment workflows",
      "HR analytics",
    ],
    slug: "human-resource-management-system",
    color: "#000000",
    bgColor: "#ffffff",
    seoTitle: "HRMS Solutions for Workforce Management | TechTide Co.",
    seoDescription:
      "Optimize HR processes with TechTide Co.'s scalable HRMS solutions.",
    seoKeywords: [
      "HRMS system",
      "human resource management",
      "payroll system",
      "TechTide Co",
    ],
  },
  {
    id: "6966067f23963ba3d561d592",
    title: "User Management & Security System",
    shortDescription:
      "Control access, manage users, and protect systems with enterprise-grade security solutions.",
    description:
      "TechTide Co.'s user management systems ensure secure authentication, authorization, and access control.",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Role-based access",
      "Multi-factor authentication",
      "Permission management",
      "User activity logs",
      "Secure login",
      "Audit trails",
    ],
    slug: "user-management-security-system",
    color: "#000000",
    bgColor: "#ffffff",
    seoTitle: "User Management & Security Solutions | TechTide Co.",
    seoDescription:
      "Protect applications with TechTide Co.'s secure user management systems.",
    seoKeywords: [
      "user management system",
      "application security",
      "access control",
      "TechTide Co",
    ],
  },
  {
    id: "6966067f23963ba3d561d58c",
    title: "CMS (Customer Management System)",
    shortDescription:
      "Centralize customer records and manage customer lifecycles with secure and scalable CMS solutions.",
    description:
      "TechTide Co.'s Customer Management Systems enable organizations to manage customer profiles, preferences, and engagement history from a single platform.",
    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Centralized customer database",
      "Customer segmentation",
      "Activity tracking",
      "Secure access controls",
      "System integrations",
      "Scalable architecture",
    ],
    slug: "customer-management-system",
    color: "#000000",
    bgColor: "#ffffff",
    seoTitle: "Customer Management System (CMS) | TechTide Co.",
    seoDescription:
      "Manage and organize customer data efficiently with TechTide Co.'s secure CMS solutions.",
    seoKeywords: [
      "customer management system",
      "CMS platform",
      "customer data management",
      "TechTide Co",
    ],
  },
  {
    id: "6966067f23963ba3d561d591",
    title: "Billing & Invoice System for Businesses",
    shortDescription:
      "Automate billing, invoicing, and payment tracking with secure financial systems for businesses.",
    description:
      "TechTide Co.'s billing systems automate invoices, payments, and financial reporting securely.",
    image:
      "https://images.unsplash.com/photo-1554224154-22dec7ec8818?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Automated invoices",
      "Recurring billing",
      "Payment tracking",
      "Tax management",
      "Multi-currency support",
      "Financial reports",
    ],
    slug: "billing-invoice-system",
    color: "#000000",
    bgColor: "#ffffff",
    seoTitle: "Billing & Invoicing Software Solutions | TechTide Co.",
    seoDescription:
      "Automate billing and invoicing with TechTide Co.'s secure financial systems.",
    seoKeywords: [
      "billing system",
      "invoice software",
      "payment management",
      "TechTide Co",
    ],
  },
  {
    id: "6966067f23963ba3d561d58b",
    title: "CRM (Customer Relationship Management)",
    shortDescription:
      "Manage customer relationships, sales pipelines, and communication efficiently with a centralized CRM system.",
    description:
      "TechTide Co.'s CRM solutions help businesses build stronger customer relationships by centralizing customer data, tracking interactions, and automating sales and support workflows.",
    image:
      "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Customer data management",
      "Sales pipeline tracking",
      "Lead and opportunity management",
      "Automated follow-ups",
      "Customer interaction history",
      "Analytics dashboards",
    ],
    slug: "crm-customer-relationship-management",
    color: "#000000",
    bgColor: "#ffffff",
    seoTitle: "CRM Solutions for Business Growth | TechTide Co.",
    seoDescription:
      "Streamline customer relationships and sales operations with TechTide Co.'s powerful CRM solutions.",
    seoKeywords: [
      "CRM system",
      "customer relationship management",
      "sales automation",
      "TechTide Co",
    ],
  },
  {
    id: "6966067f23963ba3d561d593",
    title: "Support, Ticketing, Booking & Communication System",
    shortDescription:
      "Manage support tickets, bookings, chat, and messaging from a unified platform for businesses.",
    description:
      "TechTide Co.'s integrated support systems improve customer experience through centralized communication.",
    image: SupportImg ,
    features: [
      "Ticket management",
      "Booking & scheduling",
      "Live chat",
      "Automated responses",
      "Customer feedback",
      "Agent analytics",
    ],
    slug: "support-ticketing-booking-chat-system",
    color: "#000000",
    bgColor: "#ffffff",
    seoTitle: "Customer Support & Ticketing Systems | TechTide Co.",
    seoDescription:
      "Deliver exceptional customer support with TechTide Co.'s communication systems.",
    seoKeywords: [
      "support ticketing system",
      "customer support software",
      "live chat system",
      "TechTide Co",
    ],
  },
   {
    id: "6966067f23963ba3d561d594",
    title: "API & Integration System",
    shortDescription:
      "Connect applications and automate workflows with secure and scalable API integrations.",
    description:
      "TechTide Co.'s API solutions enable seamless communication between internal systems and third-party services.",
    image:
      "https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&w=1200&q=80",
    features: [
      "REST & GraphQL APIs",
      "Third-party integrations",
      "Secure authentication",
      "Data synchronization",
      "Webhooks",
      "Scalable architecture",
    ],
    slug: "api-integration-system",
    color: "#000000",
    bgColor: "#ffffff",
    seoTitle: "API & System Integration Solutions | TechTide Co.",
    seoDescription:
      "Enable seamless system integration with TechTide Co.'s secure API solutions.",
    seoKeywords: [
      "API integration",
      "system integration",
      "data synchronization",
      "TechTide Co",
    ],
  },
];
