import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What exactly do you do?",
    answer: "We build custom, high-converting digital solutions tailored to your business. This includes modern websites, dynamic web applications, mobile apps, and robust backend systems designed to scale and optimize your operations."
  },
  {
    question: "How long does a typical project take?",
    answer: "Timelines vary based on the complexity of the project. A simple website might take 2-4 weeks, while a comprehensive web application or mobile app could take 3-6 months. We provide detailed timelines during the initial strategy phase."
  },
  {
    question: "Do you offer ongoing support after launch?",
    answer: "Absolutely. We believe in building long-term partnerships. We offer various maintenance and support packages to ensure your digital products remain secure, up-to-date, and continue to perform at their best."
  },
  {
    question: "How much do your services cost?",
    answer: "Our pricing is tailored to the specific needs and scope of each project. We don't believe in one-size-fits-all solutions. Reach out for a free discovery call where we can discuss your requirements and provide a detailed, transparent proposal."
  },
  {
    question: "What technologies do you specialize in?",
    answer: "We utilize modern, scalable technologies including React, Next.js, Node.js, Python, and various AI integrations. Our tech stack is chosen based on what best suits your project's specific performance and scalability requirements."
  }
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-white py-32 px-6 md:px-16 relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16 opacity-0 animate-fade-up">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-[#453abc]/10 bg-[#453abc]/5 backdrop-blur-md">
            <span className="text-xs font-bold text-[#453abc] uppercase tracking-[0.3em]">Common Questions</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-poppins font-bold text-[#191a23] mb-6 leading-tight">
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#453abc] to-[#60c3e3]">Questions</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto font-light">
            Everything you need to know about our services, process, and how we can help your business grow.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index}
                className={`border rounded-2xl overflow-hidden transition-all duration-300 opacity-0 animate-fade-up ${isOpen ? 'border-[#453abc]/30 bg-[#453abc]/[0.02] shadow-sm' : 'border-gray-100 bg-white hover:border-gray-200'}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <button
                  className="w-full px-6 py-6 flex items-center justify-between text-left focus:outline-none"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <span className={`text-lg font-semibold font-poppins transition-colors ${isOpen ? 'text-[#453abc]' : 'text-gray-900'}`}>
                    {faq.question}
                  </span>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${isOpen ? 'bg-[#453abc] text-white' : 'bg-gray-100 text-gray-500'}`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 text-gray-600 leading-relaxed font-light">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
