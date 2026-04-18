import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Building2, Mail, Globe, CheckCircle2, ArrowRight } from "lucide-react";
import { auditAPI } from "@/api";
import { toast } from "sonner";

interface AuditDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AuditDrawer({ isOpen, onClose }: AuditDrawerProps) {
  const [formData, setFormData] = useState({
    companyName: "",
    email: "",
    websiteLink: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await auditAPI.create(formData);
      setIsSubmitted(true);
      toast.success("Audit request submitted!");
    } catch (error) {
      toast.error("Failed to submit request.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[100]"
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            className="fixed top-0 right-0 h-full w-full sm:w-[450px] bg-white z-[101] shadow-2xl flex flex-col"
          >
            <div className="p-6 flex items-center justify-between border-b border-gray-100">
              <h2 className="text-2xl font-poppins font-semibold text-[#453abc]">Free Website Audit</h2>
              <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full"><X size={24} /></button>
            </div>

            <div className="flex-1 overflow-y-auto p-6">
              {isSubmitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                  <CheckCircle2 className="w-16 h-16 text-green-500" />
                  <h3 className="text-2xl font-bold">Request Received!</h3>
                  <p className="text-gray-500">We'll analyze your website and send the report to {formData.email}.</p>
                  <button onClick={onClose} className="px-8 py-3 bg-[#453abc] text-white rounded-xl">Close</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-4">
                    <div>
                      <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Company Name</label>
                      <div className="relative mt-1">
                        <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input name="companyName" required value={formData.companyName} onChange={handleChange} className="w-full pl-11 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#453abc]" placeholder="TechTide Solutions" />
                      </div>
                    </div>
                    <div>
                      <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Gmail / Work Email</label>
                      <div className="relative mt-1">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input type="email" name="email" required value={formData.email} onChange={handleChange} className="w-full pl-11 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#453abc]" placeholder="john@gmail.com" />
                      </div>
                    </div>
                    <div>
                      <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Website Link</label>
                      <div className="relative mt-1">
                        <Globe className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input type="url" name="websiteLink" required value={formData.websiteLink} onChange={handleChange} className="w-full pl-11 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#453abc]" placeholder="https://yourwebsite.com" />
                      </div>
                    </div>
                  </div>
                  <button type="submit" disabled={loading} className="w-full bg-[#453abc] text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 group">
                    {loading ? "Submitting..." : "Get My Free Audit"}
                    {!loading && <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
