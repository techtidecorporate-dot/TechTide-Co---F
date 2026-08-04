export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQCategory {
  faqs: FAQItem[];
  title: string;
  subtitle: string;
  tag: string;
}

export const servicesFAQ: FAQCategory = {
  tag: "Services FAQ",
  title: "Service Questions",
  subtitle: "Everything you need to know about our digital services and how we deliver results.",
  faqs: [
    {
      question: "What web development services do you offer?",
      answer: "We offer end-to-end web development including custom websites, web applications, e-commerce platforms, ERP systems, CRM portals, and API integrations. Our tech stack includes React, Next.js, Node.js, and modern frameworks tailored to your project needs."
    },
    {
      question: "How long does it take to build a custom website or web app?",
      answer: "Timelines vary by complexity. A standard business website takes 2-4 weeks, a custom web application 6-12 weeks, and a full ERP system 3-6 months. We provide a detailed timeline during our discovery phase."
    },
    {
      question: "Do you offer mobile app development?",
      answer: "Yes, we build cross platform mobile apps using React Native and Flutter, as well as native iOS and Android apps. Our mobile solutions integrate seamlessly with your existing web platforms and backend systems."
    },
    {
      question: "What is the cost of developing a custom software solution?",
      answer: "Pricing is project dependent. We provide transparent quotes after understanding your requirements during a free consultation. Costs are influenced by features, complexity, timeline, and technology stack."
    },
    {
      question: "Do you provide post-launch support and maintenance?",
      answer: "Absolutely. We offer comprehensive maintenance packages including security updates, performance monitoring, content updates, bug fixes, and 24/7 technical support to keep your digital products running smoothly."
    }
  ]
};

export const aboutFAQ: FAQCategory = {
  tag: "About TechTide",
  title: "About TechTide Corporate",
  subtitle: "Get to know who we are, what we stand for, and why businesses trust us.",
  faqs: [
    {
      question: "What is TechTide Corporate LLP?",
      answer: "TechTide Corporate LLP is a full-service digital agency and software development company based in Lahore, Pakistan. We specialize in building high-converting websites, custom web applications, ERP/CRM systems, mobile apps, and digital growth solutions for businesses worldwide."
    },
    {
      question: "What industries do you serve?",
      answer: "We work with startups, SMEs, and enterprises across various industries including e-commerce, healthcare, finance, education, real estate, logistics, and professional services. Our solutions are tailored to each industry's specific needs."
    },
    {
      question: "Where is TechTide located?",
      answer: "Our office is located at G3 Heaven Mall, Zaraar Shaheed Road, Lahore, Pakistan. We operate with a remote-first culture, serving clients globally with team members working across different time zones."
    },
    {
      question: "What makes TechTide different from other agencies?",
      answer: "We combine technical excellence with a deep focus on business outcomes. Our approach is consultative we don't just build what you ask for; we help you define the right strategy, choose the best technology, and create solutions that drive measurable growth."
    },
    {
      question: "How big is your team?",
      answer: "Our team comprises experienced developers, UI/UX designers, project managers, and digital strategists. We maintain a lean, agile structure that allows us to deliver high-quality work efficiently while keeping communication direct and transparent."
    }
  ]
};

export const careerFAQ: FAQCategory = {
  tag: "Careers FAQ",
  title: "Career Questions",
  subtitle: "Find answers about working at TechTide, our culture, and the application process.",
  faqs: [
    {
      question: "What is the hiring process at TechTide?",
      answer: "Our hiring process typically includes an initial screening, a technical assessment or portfolio review, a culture-fit interview with the team, and a final discussion with leadership. We aim to complete the process within 1-2 weeks."
    },
    {
      question: "Do you offer remote work options?",
      answer: "Yes, we are a remote-first company. Our team members can work from anywhere, though we have office space in Lahore for those who prefer in-person collaboration. We use modern tools to stay connected and productive."
    },
    {
      question: "What technologies will I work with?",
      answer: "Our tech stack includes React, Next.js, Node.js, TypeScript, Python, Firebase, AWS, and various AI/ML tools. We encourage continuous learning and provide opportunities to work with emerging technologies."
    },
    {
      question: "What growth opportunities are available?",
      answer: "We offer clear career progression paths, mentorship programs, access to online learning platforms, and opportunities to work on challenging projects. We promote from within and support team members in achieving their professional goals."
    },
    {
      question: "How can I apply if I don't see an open position?",
      answer: "We're always looking for talented individuals. You can submit a speculative application through our careers page by clicking the 'Speculative Application' button. Tell us about yourself and how you can contribute to our team."
    }
  ]
};

export const contactFAQ: FAQCategory = {
  tag: "Contact FAQ",
  title: "Getting in Touch",
  subtitle: "Common questions about reaching us and how we work with clients.",
  faqs: [
    {
      question: "How quickly do you respond to inquiries?",
      answer: "We aim to respond to all inquiries within 24 hours during business days. For urgent matters, we recommend calling us directly at +92 324 7991484."
    },
    {
      question: "What information should I include in my inquiry?",
      answer: "To help us understand your project better, please include a brief description of your project, your timeline, budget range (if any), and any specific requirements or features you need."
    },
    {
      question: "Do you offer free consultations?",
      answer: "Yes, we offer a free initial discovery call to understand your project, discuss potential solutions, and determine if we're the right fit. There's no obligation to proceed afterward."
    },
    {
      question: "Can you work with our existing development team?",
      answer: "Absolutely. We frequently collaborate with in-house teams to augment their capabilities, provide specialized expertise, or take on specific project modules. We integrate smoothly with existing workflows."
    },
    {
      question: "What is your project management process?",
      answer: "We follow an agile methodology with regular sprint cycles, daily stand-ups, and transparent progress reporting. You'll have a dedicated project manager and access to our project management tools to track progress in real time."
    }
  ]
};

export const blogFAQ: FAQCategory = {
  tag: "Blog FAQ",
  title: "Blog Questions",
  subtitle: "Common questions about our blog content, subscriptions, and contributions.",
  faqs: [
    {
      question: "How often do you publish new blog posts?",
      answer: "We publish new articles weekly, covering topics in web development, mobile apps, UI/UX design, digital marketing, AI, and business technology trends."
    },
    {
      question: "Can I contribute a guest post?",
      answer: "We welcome guest contributions from industry experts. Please reach out via our contact page with your topic proposal and writing samples. We review all submissions and will respond within a week."
    },
    {
      question: "How do I subscribe to the newsletter?",
      answer: "You can subscribe by entering your email in the newsletter form at the bottom of our blog page. You'll receive weekly updates with our latest articles, industry insights, and exclusive content."
    },
    {
      question: "Can I share your blog content?",
      answer: "Absolutely! We encourage sharing our content. Please give proper attribution by linking back to the original article on our site when sharing on social media, your blog, or other platforms."
    }
  ]
};
