import { motion } from "framer-motion";
import { MapPin, Building2, Globe, Clock, Phone } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const office = {
  city: "Lahore",
  address: "G3 Heaven Mall, Zaraar Shaheed Road",
  country: "Pakistan",
  isHeadquarters: true,
  phone: "+92 300 1234567",
  hours: "Mon-Sat: 11:00 AM - 7:00 PM",
};

export function OfficesSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 pb-20">
      <motion.div {...fadeUp} className="text-center mb-12">
        <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#453abc] to-[#60c3e3] text-sm font-medium tracking-[0.2em] uppercase mb-4">
          Our Office
        </p>
        <h2 className="text-3xl md:text-4xl font-poppins font-semibold text-[#191a23]">
          Visit Us
        </h2>
      </motion.div>

      <motion.div
        {...fadeUp}
        className="max-w-4xl mx-auto bg-white rounded-3xl border border-gray-100 shadow-lg overflow-hidden"
      >
        <div className="grid md:grid-cols-5">
          <div className="md:col-span-3 p-8 md:p-10 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#453abc] to-[#60c3e3] flex items-center justify-center text-white shrink-0">
                <Building2 className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-poppins font-semibold text-[#191a23]">
                    {office.city}
                  </h3>
                  <span className="text-xs font-medium text-[#453abc] bg-[#453abc]/10 px-2.5 py-0.5 rounded-full">
                    Headquarters
                  </span>
                </div>
                <p className="text-sm text-[#6b7280]">{office.country}</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#453abc] mt-0.5 shrink-0" />
                <p className="text-[#6b7280]">{office.address}</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#453abc] shrink-0" />
                <p className="text-[#6b7280]">{office.phone}</p>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-[#453abc] shrink-0" />
                <p className="text-[#6b7280]">{office.hours}</p>
              </div>
              <div className="flex items-start gap-3">
                <Globe className="w-5 h-5 text-[#453abc] mt-0.5 shrink-0" />
                <p className="text-[#6b7280]">Serving clients globally with a remote-first team</p>
              </div>
            </div>

            <a
              href="https://maps.google.com/?q=G3+Heaven+Mall+Zaraar+Shaheed+Road+Lahore"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 text-sm font-medium text-[#453abc] hover:text-[#3a2ea0] transition-colors w-fit"
            >
              <MapPin className="w-4 h-4" />
              View on Google Maps
            </a>
          </div>

          <div className="md:col-span-2 bg-gradient-to-br from-[#453abc]/5 to-[#60c3e3]/5 p-8 md:p-10 flex items-center justify-center">
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#453abc] to-[#60c3e3] flex items-center justify-center text-white mx-auto mb-4">
                <MapPin className="w-9 h-9" />
              </div>
              <p className="text-2xl font-poppins font-semibold text-[#191a23]">
                {office.city}
              </p>
              <p className="text-sm text-[#6b7280] mt-1">One team, one home</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
