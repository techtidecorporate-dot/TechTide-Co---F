import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import type { FAQItem } from "@/app/data/faqData";

interface FAQProps {
  faqs: FAQItem[];
  title?: string;
  subtitle?: string;
  tag?: string;
}

export function FAQ({ faqs, title = "Frequently Asked Questions", subtitle, tag = "Common Questions" }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section style={{contentVisibility: 'auto', containIntrinsicSize: '500px'}} className="bg-gradient-to-b from-[#f8f9fa] to-[#eef2f7] py-32 px-6 md:px-16 relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16 opacity-0 animate-fade-up">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-[#453abc]/10 bg-[#453abc]/5 backdrop-blur-md">
            <span className="text-xs font-bold text-[#453abc] uppercase tracking-[0.3em]">{tag}</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-poppins font-bold text-[#191a23] mb-6 leading-tight">
            {title.split(" ").map((word, i, arr) =>
              i === arr.length - 1 ? (
                <span key={i} className="text-transparent bg-clip-text bg-gradient-to-r from-[#453abc] to-[#60c3e3]">{word}</span>
              ) : (
                <span key={i}>{word} </span>
              )
            )}
          </h2>
          {subtitle && (
            <p className="text-gray-600 text-lg max-w-2xl mx-auto font-light">
              {subtitle}
            </p>
          )}
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
