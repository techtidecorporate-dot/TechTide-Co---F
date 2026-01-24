import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  CheckCircle2,
  Code,
  Users,
  Database,
  BarChart,
  Shield,
  Link as TrendingUp,
  Zap,
  Sparkles,
  Target,
  Award,
  Globe,
  Cpu,
  Cloud,
  Settings,
  MessageSquare,
} from "lucide-react";
import { systemsData, SystemItem } from "../data/servicesData";
import SEO from "../components/ui/SEO";

const iconMap: Record<string, any> = {
  Sparkles,
  Shield,
  Zap,
  Target,
  Users,
  TrendingUp,
  Award,
  Globe,
  Code,
  Cpu,
  Database,
  Cloud,
  Lock,
  BarChart,
  Settings,
  MessageSquare,
};

export default function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [service, setService] = useState<SystemItem | null>(null);

  useEffect(() => {
    if (slug) {
      const foundService = systemsData.find((s) => s.slug === slug);
      setService(foundService || null);
    }
  }, [slug]);

  const getImageUrl = (image: string) => {
    // If it's already a full URL (http/https), return as is
    if (typeof image === "string" && image.startsWith("http")) return image;
    // Otherwise, it's either an imported asset or a path - return as is
    return image;
  };

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f8f9fa]">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Service Not Found
          </h2>
          <button
            onClick={() => navigate("/services")}
            className="text-[#453abc] hover:underline"
          >
            Back to Services
          </button>
        </div>
      </div>
    );
  }

  /* ---------------- Page ---------------- */
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f9fafb] via-[#fcfcfd] to-white pt-32 pb-24">
      <SEO
        title={service.title}
        description={service.shortDescription}
        keywords={`${service.title}, web development, custom software, ${service.features?.slice(0, 3).join(", ")}`}
        ogImage={service.image}
        ogUrl={`https://techtidecorporate.com/services/${service.slug}`}
      />
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Back Button */}
        <Link
          to="/services"
          className="inline-flex items-center gap-2 text-gray-500 hover:text-[#453abc]
            transition mb-14 font-medium"
        >
          <ArrowLeft size={20} />
          Back to Services
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* ---------------- Left Content ---------------- */}
          <div className="space-y-10">
            {/* Badge */}
            <div
              className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full
              bg-white/70 backdrop-blur border border-[#453abc]/10
              text-[#453abc] font-semibold text-sm shadow-sm w-fit"
            >
              {service.icon && iconMap[service.icon] ? (
                iconMap[service.icon]
              ) : (
                <Code className="w-5 h-5" />
              )}
              <span>Expert Solution</span>
            </div>

            {/* Title */}
            <h1
              className="text-4xl md:text-6xl font-poppins font-extrabold
              text-[#191a23] leading-[1.05] tracking-tight"
            >
              {service.title}
            </h1>

            {/* Short Description */}
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl">
              {service.shortDescription}
            </p>

            {/* Description */}
            <div className="prose prose-lg text-gray-600 max-w-none">
              <p className="whitespace-pre-wrap leading-relaxed">
                {service.description}
              </p>
            </div>

            {/* Features */}
            {service.features && service.features.length > 0 && (
              <div className="space-y-6 pt-4">
                <h3 className="text-2xl font-poppins font-bold text-[#191a23]">
                  Key Features
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {service.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex gap-4 items-start p-5 bg-white rounded-2xl
                        border border-gray-100
                        shadow-[0_10px_30px_rgba(0,0,0,0.04)]
                        hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]
                        transition-all duration-300"
                    >
                      <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0 mt-0.5" />
                      <span className="text-gray-700 font-medium">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* CTA */}
            <div className="pt-10">
              <button
                onClick={() =>
                  window.dispatchEvent(new CustomEvent("open-partner-drawer"))
                }
                className="px-12 py-4 rounded-2xl font-poppins font-bold text-lg text-white
                  bg-gradient-to-r from-[#453abc] to-[#5f54e6]
                  shadow-[0_20px_60px_rgba(69,58,188,0.35)]
                  hover:shadow-[0_30px_80px_rgba(69,58,188,0.45)]
                  transition-all duration-300 transform hover:scale-[1.03]"
              >
                Inquire About {service.title}
              </button>
            </div>
          </div>

          {/* ---------------- Right Side ---------------- */}
          <div className="space-y-14">
            {/* Image */}
            {service.image && (
              <div
                className="relative rounded-[3rem] overflow-hidden
                shadow-[0_40px_100px_rgba(0,0,0,0.12)]
                ring-1 ring-black/5"
              >
                <img
                  src={getImageUrl(service.image)}
                  alt={service.title}
                  className="w-full aspect-[4/3] object-cover
                    hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
              </div>
            )}

            {/* Sidebar Card */}
            <div
              className="relative rounded-[2.5rem] p-10 md:p-14
              bg-gradient-to-br from-[#151622] via-[#191a23] to-[#0f1020]
              text-white overflow-hidden
              shadow-[0_40px_100px_rgba(0,0,0,0.4)]"
            >
              <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#453abc]/30 rounded-full blur-[120px]" />

              <div className="relative z-10 space-y-6">
                <h4 className="text-2xl font-poppins font-bold">
                  Why TechTide?
                </h4>

                <p className="text-white/70 leading-relaxed">
                  We don’t just build software we engineer scalable, secure, and
                  future-ready solutions that help businesses grow with
                  confidence.
                </p>

                <div className="pt-6 border-t border-white/10">
                  <div className="flex items-center gap-5">
                    <div
                      className="relative w-14 h-14 rounded-full
    bg-gradient-to-br from-[#453abc] to-[#6b5cff]
    flex items-center justify-center
    shadow-lg"
                    >
                      {/* Icon */}
                      <Shield className="w-6 h-6 text-white" />
                    </div>

                    <div>
                      <div className="font-bold text-white">
                        Expert Consulting
                      </div>
                      <div className="text-sm text-white/50">
                        Priority Client Support
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
