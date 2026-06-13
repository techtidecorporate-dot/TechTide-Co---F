import { motion } from "framer-motion";
import { ScrollText, ShieldCheck, Award, Cloud } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const certifications = [
  { title: "Registered LLP", body: "Fully registered Limited Liability Partnership compliant with SECP regulations.", icon: <ScrollText className="w-5 h-5" /> },
  { title: "Data Protection Compliant", body: "Adhering to international data protection standards including GDPR guidelines.", icon: <ShieldCheck className="w-5 h-5" /> },
  { title: "ISO-aligned Processes", body: "Our development and delivery processes follow ISO 9001 quality management standards.", icon: <Award className="w-5 h-5" /> },
  { title: "Cloud Certified Team", body: "Team members hold certifications in AWS, Google Cloud, and Microsoft Azure.", icon: <Cloud className="w-5 h-5" /> },
];

export function CertificationsSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 pb-20">
      <motion.div {...fadeUp} className="text-center mb-12">
        <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#453abc] to-[#60c3e3] text-sm font-medium tracking-[0.2em] uppercase mb-4">
          Quality & Compliance
        </p>
        <h2 className="text-3xl md:text-4xl font-poppins font-semibold text-[#191a23]">
          Certifications & Standards
        </h2>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {certifications.map((cert, i) => (
          <motion.div
            key={i}
            {...fadeUp}
            transition={{ delay: i * 0.1 }}
            className="bg-white rounded-2xl border border-gray-100 p-6 shadow-md hover:shadow-xl transition-all"
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-[#453abc] to-[#60c3e3] flex items-center justify-center text-white mb-4">
              {cert.icon}
            </div>
            <h3 className="text-base font-poppins font-semibold text-[#191a23] mb-2">
              {cert.title}
            </h3>
            <p className="text-sm text-[#6b7280] leading-relaxed">
              {cert.body}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
