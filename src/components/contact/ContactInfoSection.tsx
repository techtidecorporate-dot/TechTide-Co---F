import { Mail, MapPin, Phone } from "lucide-react";
import { toast } from "sonner";
import { motion } from "framer-motion";

const contactInfoData = [
  {
    icon: <Mail className="w-6 h-6" />,
    title: "Email Us",
    content: "info@techtidecorporate.com",
    link: "mailto:info@techtidecorporate.com",
    onClick: (
      e: React.MouseEvent<HTMLAnchorElement>,
      content: string,
    ) => {
      e.preventDefault();
      navigator.clipboard.writeText(content);
      toast.success("Email copied to clipboard!");
    },
  },
  {
    icon: <Phone className="w-6 h-6" />,
    title: "Call Us",
    content: "+92 324 7991484",
    link: "tel:+92 324 7991484",
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    title: "Visit Us",
    content: "G3 heaven mall, zaraar shaheed road, lahore",
    link: "https://www.google.com/maps/place/Techtide+Corporate+LLP/@31.548828,74.3988149,606m/data=!3m1!1e3!4m16!1m9!3m8!1s0x3919050017953d65:0x4946f90f8a3851c2!2sTechtide+Corporate+LLP!8m2!3d31.548828!4d74.4013898!9m1!1b1!16s%2Fg%2F11yn8dzf8z!3m5!1s0x3919050017953d65:0x4946f90f8a3851c2!8m2!3d31.548828!4d74.4013898!16s%2Fg%2F11yn8dzf8z?entry=ttu&g_ep=EgoyMDI2MDQxNS4wIKXMDSoASAFQAw%3D%3D",
  },
];

export function ContactInfoSection() {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-8 mt-6 mb-12 md:mb-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {contactInfoData.map((info, index) => (
          <motion.a
            key={index}
            href={info.link}
            onClick={(e) => {
              if (info.title === "Email Us" && "onClick" in info) {
                info.onClick!(e as React.MouseEvent<HTMLAnchorElement>, info.content);
              }
            }}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            viewport={{ once: true, margin: "-50px" }}
            className="bg-white rounded-2xl border border-gray-100 p-8 shadow-md hover:shadow-xl transition-all group"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-[#453abc] to-[#60c3e3] flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform shadow-lg">
              {info.icon}
            </div>
            <h3 className="text-[#191a23] font-poppins font-semibold mb-2 text-lg">
              {info.title}
            </h3>
            <p className="text-[#6b7280] text-sm leading-relaxed">
              {info.content}
            </p>
          </motion.a>
        ))}
      </div>
    </div>
  );
}
