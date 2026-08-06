import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import {
  Package, Building2, Cloud, Code2, Workflow, Settings,
} from "lucide-react";

const products = [
  {
    icon: <Package className="w-6 h-6" />,
    title: "SaaS Products",
    description: "Multi-tenant, cloud-native SaaS platforms built to scale from MVP to enterprise-grade.",
    features: ["Multi-tenant Architecture", "Subscription Billing", "Cloud Infrastructure", "Analytics Dashboard"],
  },
  {
    icon: <Building2 className="w-6 h-6" />,
    title: "ERP & CRM Systems",
    description: "Custom enterprise resource planning and CRM systems tailored to your unique workflows.",
    features: ["Custom Workflows", "Inventory Management", "Customer Portals", "Reporting & Analytics"],
  },
  {
    icon: <Cloud className="w-6 h-6" />,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure with CI/CD pipelines, monitoring, and auto-scaling.",
    features: ["Cloud Migration", "CI/CD Pipelines", "Auto Scaling", "24/7 Monitoring"],
  },
  {
    icon: <Code2 className="w-6 h-6" />,
    title: "Web Applications",
    description: "Feature-rich web apps built with modern frameworks for performance and user experience.",
    features: ["Single Page Apps", "Progressive Web Apps", "Real-time Features", "API-first Design"],
  },
  {
    icon: <Workflow className="w-6 h-6" />,
    title: "Automation Tools",
    description: "Custom automation that eliminates manual work and streamlines business operations.",
    features: ["Process Automation", "Email Automation", "Data Sync", "Approval Workflows"],
  },
  {
    icon: <Settings className="w-6 h-6" />,
    title: "Integration Platforms",
    description: "Connect your existing tools with custom API integrations for seamless data flow.",
    features: ["Custom APIs", "Third-party Integrations", "Data Transformation", "Legacy System Connectors"],
  },
];

export function ProductsSection() {
  return (
    <section id="products" className="max-w-7xl mx-auto px-6 md:px-8 pb-20 md:pb-32 scroll-mt-24">
      <div className="text-center mb-14">
        <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#453abc] to-[#60c3e3] text-sm font-medium tracking-[0.2em] uppercase mb-4">
          Our Products
        </p>
        <h2 className="text-3xl md:text-4xl  font-semibold text-[#191a23] mb-4">
          Digital Products Built to Scale
        </h2>
        <p className="text-[#6b7280] text-base max-w-xl mx-auto">
          From SaaS platforms to enterprise automation, we build products
          that solve real problems and drive measurable results.
        </p>
      </div>

      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: true }}
        // pagination={{ clickable: true }}
        loop={true}
        spaceBetween={24}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="pb-12"
      >
        {products.map((product, i) => (
          <SwiperSlide key={i}>
            <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-md hover:shadow-xl transition-all group h-full flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-[#453abc] to-[#60c3e3] flex items-center justify-center text-white mb-5 group-hover:scale-110 transition-transform shadow-lg">
                {product.icon}
              </div>
              <h3 className="text-xl  font-semibold text-[#191a23] mb-3">
                {product.title}
              </h3>
              <p className="text-[#6b7280] text-sm leading-relaxed mb-6 flex-1">
                {product.description}
              </p>
              <ul className="space-y-2">
                {product.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm text-[#6b7280]">
                    <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#453abc] to-[#60c3e3]" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

