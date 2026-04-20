import { motion } from "framer-motion";
import { Search, ArrowRight, BarChart, Globe, Zap } from "lucide-react";

export function AuditSection() {
  return (
    <section className="bg-gradient-to-br from-[#453abc] to-[#60c3e3] py-20 px-6 md:px-16 text-white overflow-hidden relative">
      {/* Decorative Circles */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-64 h-64 bg-white/10 rounded-full blur-2xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          <div className="lg:w-3/5">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-poppins font-bold mb-6 leading-tight"
            >
              Stop Guessing. <br /> Get Your <span className="text-gray-900/20 underline decoration-white underline-offset-8">Free Website Audit</span>
            </motion.h2>
            <p className="text-xl text-white/90 mb-10 leading-relaxed max-w-2xl">
              We'll analyze your current website's performance, conversion flow, and technical SEO. You'll receive a detailed report with actionable steps to increase your leads by 2x or more.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                   <BarChart className="w-5 h-5" />
                </div>
                <span className="font-semibold text-sm">Conversion Audit</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                   <Globe className="w-5 h-5" />
                </div>
                <span className="font-semibold text-sm">SEO Analysis</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                   <Zap className="w-5 h-5" />
                </div>
                <span className="font-semibold text-sm">Performance Score</span>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.dispatchEvent(new CustomEvent("open-partner-drawer"))}
              className="bg-white text-[#453abc] px-10 py-5 rounded-full font-bold text-lg flex items-center gap-2 shadow-2xl hover:bg-gray-50 transition-colors"
            >
              Claim Your Free Audit <ArrowRight className="w-5 h-5" />
            </motion.button>
            <p className="mt-4 text-sm text-white/70 italic">*Limited to 5 audits per week. No obligation.</p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-2/5 relative"
          >
             <div className="bg-white/5 backdrop-blur-md rounded-3xl p-2 border border-white/20 shadow-2xl">
                <div className="bg-gray-50 rounded-2xl p-8 text-gray-900">
                    <div className="flex items-center justify-between mb-8">
                        <div className="w-12 h-12 bg-[#453abc] rounded-xl flex items-center justify-center text-white">
                            <Search className="w-6 h-6" />
                        </div>
                        <div className="text-right">
                            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Audit Status</p>
                            <p className="text-green-500 font-bold">Available Now</p>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <div className="h-4 bg-gray-200 rounded-full w-full animate-pulse"></div>
                        <div className="h-4 bg-gray-200 rounded-full w-4/5 animate-pulse"></div>
                        <div className="h-4 bg-gray-200 rounded-full w-3/4 animate-pulse"></div>
                        <div className="h-20 bg-[#453abc]/10 rounded-xl flex items-center justify-center">
                            <p className="text-[#453abc] font-bold">Scanning Your URL...</p>
                        </div>
                    </div>
                </div>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
