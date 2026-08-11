import { motion } from "framer-motion";
import { Building2, FileText, Calendar, Landmark, Globe, Phone, Mail, Fingerprint } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const corporateInfo = [
  { icon: <Building2 className="w-5 h-5" />, label: "Legal Name", value: "TechTide Corporate LLP" },
  { icon: <FileText className="w-5 h-5" />, label: "Entity Type", value: "Limited Liability Partnership (LLP)" },
  { icon: <Fingerprint className="w-5 h-5" />, label: "Registration No", value: "Z-25-17381/25" },
  { icon: <Calendar className="w-5 h-5" />, label: "Year Established", value: "2025" },
  { icon: <Landmark className="w-5 h-5" />, label: "Jurisdiction", value: "Registered under the laws of Pakistan" },
  { icon: <Globe className="w-5 h-5" />, label: "Service Area", value: "Worldwide (Remote & On-site)" },
  { icon: <Phone className="w-5 h-5" />, label: "Phone", value: "+92 300 1234567" },
  { icon: <Mail className="w-5 h-5" />, label: "Email", value: "info@techtidecorporate.com" },
];

export function CorporateInfoSection() {
  return (
    <section className="max-w-5xl mx-auto px-6 pb-20 mt-16">
      <motion.div {...fadeUp} className="text-center mb-12">
        <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#453abc] to-[#60c3e3] text-sm font-medium tracking-[0.2em] uppercase mb-4">Corporate Information</span>
        <h2 className="text-3xl md:text-4xl font-semibold text-[#191a23]">Company Details</h2>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {corporateInfo.map((item, i) => (
          <motion.div
            key={i}
            {...fadeUp}
            transition={{ delay: i * 0.05 }}
            className="bg-white rounded-lg border border-gray-100 p-5 shadow-md hover:shadow-lg transition-all flex items-center gap-4"
          >
            <div className="w-10 h-10 rounded-md bg-gradient-to-r from-[#453abc] to-[#60c3e3] flex items-center justify-center text-white shrink-0">{item.icon}</div>
            <div>
              <p className="text-xs font-semibold tracking-wider uppercase text-[#6b7280]">{item.label}</p>
              <h6 className="text-sm font-medium text-[#191a23]">{item.value}</h6>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

