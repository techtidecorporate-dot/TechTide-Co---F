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
  ArrowRight,
  Briefcase,
  Lightbulb,
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
  Lock: Shield,
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
    if (typeof image === "string" && image.startsWith("http")) return image;
    return image;
  };

  const hasRichContent = (s: SystemItem) =>
    s.introContent || s.benefits || s.processSteps || s.industryUseCases || s.usps;

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

  /* ---- Rich SEO Page Layout ---- */
  if (hasRichContent(service)) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#f9fafb] via-[#fcfcfd] to-white">
        <SEO
          title={service.seoTitle || service.title}
          description={service.seoDescription || service.shortDescription}
          keywords={service.seoKeywords?.join(", ") || `${service.title}, web development, custom software`}
          ogImage={service.image}
          ogUrl={`https://techtidecorporate.com/services/${service.slug}`}
        />

        {/* ======== Hero Section ======== */}
        <div className="relative pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-[-10%] right-[-10%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[#453abc]/10 rounded-full blur-[80px] md:blur-[120px]" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[#60c3e3]/10 rounded-full blur-[80px] md:blur-[120px]" />
          </div>

          <div className="relative max-w-7xl mx-auto px-6 md:px-8">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-gray-500 hover:text-[#453abc] transition mb-10 font-medium"
            >
              <ArrowLeft size={20} />
              Back to Services
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div
                  className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full
                  bg-white/70 backdrop-blur border border-[#453abc]/10
                  text-[#453abc] font-semibold text-sm shadow-sm w-fit"
                >
                  {service.icon && iconMap[service.icon] ? (
                    (() => { const Icon = iconMap[service.icon]; return <Icon className="w-5 h-5" />; })()
                  ) : (
                    <Code className="w-5 h-5" />
                  )}
                  <span>Expert Solution</span>
                </div>

                <h1
                  className="text-3xl md:text-5xl lg:text-6xl font-poppins font-extrabold
                  text-[#191a23] leading-[1.08] tracking-tight"
                >
                  {service.title}
                </h1>

                <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl">
                  {service.shortDescription}
                </p>

                <button
                  onClick={() =>
                    window.dispatchEvent(new CustomEvent("open-partner-drawer"))
                  }
                  className="px-10 py-4 rounded-2xl font-poppins font-bold text-lg text-white
                    bg-gradient-to-r from-[#453abc] to-[#5f54e6]
                    shadow-[0_20px_60px_rgba(69,58,188,0.35)]
                    hover:shadow-[0_30px_80px_rgba(69,58,188,0.45)]
                    transition-all duration-300 transform hover:scale-[1.03]
                    inline-flex items-center gap-3"
                >
                  Get a Free Consultation
                  <ArrowRight size={20} />
                </button>
              </div>

              {service.image && (
                <div
                  className="relative rounded-[2.5rem] overflow-hidden
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
            </div>
          </div>
        </div>

        {/* ======== Introduction Section ======== */}
        {service.introContent && (
          <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-20">
            <div className="max-w-4xl mx-auto">
              <p className="text-gray-600 text-lg md:text-xl leading-[1.8] font-inter">
                {service.introContent}
              </p>
            </div>
          </div>
        )}

        {/* ======== Services Section (What We Offer) ======== */}
        {service.servicesContent && service.servicesContent.length > 0 && (
          <div className="bg-[#f4f5f7] py-20 md:py-28">
            <div className="max-w-7xl mx-auto px-6 md:px-8">
              <div className="text-center mb-16">
                <p className="font-poppins text-transparent bg-clip-text bg-gradient-to-r from-[#453abc] to-[#60c3e3] text-sm font-medium tracking-[0.2em] uppercase mb-4">
                  What We Offer
                </p>
                <h2 className="text-3xl md:text-5xl font-poppins font-bold text-[#191a23]">
                  Our {service.title.split("|")[0].trim().split("&")[0].trim()} Services
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {service.servicesContent.map((item, i) => {
                  const [title, ...descParts] = item.split(" — ");
                  const desc = descParts.join(" — ");
                  return (
                    <div
                      key={i}
                      className="bg-white rounded-2xl p-8 border border-gray-100
                        shadow-[0_10px_40px_rgba(0,0,0,0.04)]
                        hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]
                        hover:border-[#453abc]/10
                        transition-all duration-400 group"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#453abc] to-[#60c3e3] flex items-center justify-center shrink-0 mt-1">
                          <CheckCircle2 className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg font-poppins font-semibold text-[#191a23] mb-2 group-hover:text-[#453abc] transition-colors">
                            {title}
                          </h3>
                          {desc && (
                            <p className="text-gray-600 text-sm leading-relaxed">
                              {desc}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* ======== Benefits Section ======== */}
        {service.benefits && service.benefits.length > 0 && (
          <div className="py-20 md:py-28">
            <div className="max-w-7xl mx-auto px-6 md:px-8">
              <div className="text-center mb-16">
                <p className="font-poppins text-transparent bg-clip-text bg-gradient-to-r from-[#453abc] to-[#60c3e3] text-sm font-medium tracking-[0.2em] uppercase mb-4">
                  Why Choose Us
                </p>
                <h2 className="text-3xl md:text-5xl font-poppins font-bold text-[#191a23]">
                  Benefits of Working with TechTide
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {service.benefits.map((benefit, i) => (
                  <div
                    key={i}
                    className="relative bg-white rounded-[1.5rem] p-8 border border-gray-100
                      shadow-[0_15px_40px_rgba(0,0,0,0.04)]
                      hover:shadow-[0_25px_60px_rgba(0,0,0,0.08)]
                      transition-all duration-500 group overflow-hidden"
                  >
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#453abc] to-[#60c3e3] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="w-12 h-12 rounded-xl bg-[#453abc]/5 flex items-center justify-center mb-5">
                      <Lightbulb className="w-6 h-6 text-[#453abc]" />
                    </div>
                    <h3 className="text-xl font-poppins font-semibold text-[#191a23] mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ======== Process Section ======== */}
        {service.processSteps && service.processSteps.length > 0 && (
          <div className="bg-[#191a23] py-20 md:py-28 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#453abc]/15 rounded-full blur-[150px]" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#60c3e3]/10 rounded-full blur-[150px]" />

            <div className="relative max-w-7xl mx-auto px-6 md:px-8">
              <div className="text-center mb-16">
                <p className="font-poppins text-[#60c3e3] text-sm font-medium tracking-[0.2em] uppercase mb-4">
                  Our Process
                </p>
                <h2 className="text-3xl md:text-5xl font-poppins font-bold text-white">
                  How We Build Your Solution
                </h2>
              </div>

              <div className="space-y-6">
                {service.processSteps.map((step, i) => (
                  <div
                    key={i}
                    className="flex flex-col md:flex-row gap-6 md:gap-10 p-8 md:p-10
                      rounded-[1.5rem] bg-white/5 backdrop-blur border border-white/10
                      hover:bg-white/10 transition-all duration-500 group"
                  >
                    <div className="shrink-0">
                      <div
                        className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#453abc] to-[#60c3e3]
                        flex items-center justify-center text-white font-poppins font-bold text-xl
                        shadow-[0_10px_30px_rgba(69,58,188,0.3)]
                        group-hover:shadow-[0_15px_40px_rgba(69,58,188,0.5)]
                        transition-all duration-500"
                      >
                        {step.step}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-poppins font-semibold text-white mb-3">
                        {step.title}
                      </h3>
                      <p className="text-white/60 text-base leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ======== Industry Use Cases ======== */}
        {service.industryUseCases && service.industryUseCases.length > 0 && (
          <div className="py-20 md:py-28">
            <div className="max-w-7xl mx-auto px-6 md:px-8">
              <div className="text-center mb-16">
                <p className="font-poppins text-transparent bg-clip-text bg-gradient-to-r from-[#453abc] to-[#60c3e3] text-sm font-medium tracking-[0.2em] uppercase mb-4">
                  Industry Expertise
                </p>
                <h2 className="text-3xl md:text-5xl font-poppins font-bold text-[#191a23]">
                  Industries We Serve
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {service.industryUseCases.map((useCase, i) => (
                  <div
                    key={i}
                    className="p-8 rounded-2xl border border-gray-100 bg-white
                      shadow-[0_10px_30px_rgba(0,0,0,0.04)]
                      hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]
                      hover:border-[#453abc]/10 transition-all duration-500 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#453abc]/10 to-[#60c3e3]/10 flex items-center justify-center mb-5">
                      <Briefcase className="w-6 h-6 text-[#453abc]" />
                    </div>
                    <h3 className="text-lg font-poppins font-semibold text-[#191a23] mb-3 group-hover:text-[#453abc] transition-colors">
                      {useCase.industry}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {useCase.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ======== Why TechTide (USPs) ======== */}
        {service.usps && service.usps.length > 0 && (
          <div className="bg-[#f4f5f7] py-20 md:py-28">
            <div className="max-w-7xl mx-auto px-6 md:px-8">
              <div className="text-center mb-16">
                <p className="font-poppins text-transparent bg-clip-text bg-gradient-to-r from-[#453abc] to-[#60c3e3] text-sm font-medium tracking-[0.2em] uppercase mb-4">
                  Our Advantage
                </p>
                <h2 className="text-3xl md:text-5xl font-poppins font-bold text-[#191a23]">
                  Why TechTide Corporate?
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {service.usps.map((usp, i) => (
                  <div
                    key={i}
                    className="flex gap-5 p-8 rounded-2xl bg-white border border-gray-100
                      shadow-[0_10px_30px_rgba(0,0,0,0.04)]
                      hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]
                      transition-all duration-500 group"
                  >
                    <div className="shrink-0">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#453abc] to-[#60c3e3] flex items-center justify-center shadow-lg">
                        <Award className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-poppins font-semibold text-[#191a23] mb-2 group-hover:text-[#453abc] transition-colors">
                        {usp.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {usp.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ======== Key Features (compact) ======== */}
        {service.features && service.features.length > 0 && (
          <div className="py-20 md:py-28">
            <div className="max-w-7xl mx-auto px-6 md:px-8">
              <div className="text-center mb-16">
                <p className="font-poppins text-transparent bg-clip-text bg-gradient-to-r from-[#453abc] to-[#60c3e3] text-sm font-medium tracking-[0.2em] uppercase mb-4">
                  Core Capabilities
                </p>
                <h2 className="text-3xl md:text-5xl font-poppins font-bold text-[#191a23]">
                  Key Features
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
                {service.features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex gap-3 items-center p-5 bg-white rounded-xl
                      border border-gray-100
                      shadow-[0_5px_20px_rgba(0,0,0,0.03)]
                      hover:shadow-[0_10px_30px_rgba(0,0,0,0.06)]
                      transition-all duration-300"
                  >
                    <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                    <span className="text-gray-700 font-medium text-sm">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ======== CTA Section ======== */}
        <div className="max-w-7xl mx-auto px-6 md:px-8 pb-24 md:pb-32">
          <div className="relative overflow-hidden bg-[#191a23] bg-gradient-to-br from-[#191a23] via-[#453abc]/20 to-[#191a23] rounded-[2.5rem] md:rounded-[3.5rem] p-10 md:p-20 text-center">
            <div className="absolute top-0 right-0 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-[#453abc]/10 rounded-full blur-[100px] md:blur-[120px]" />
            <div className="absolute bottom-0 left-0 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-[#60c3e3]/10 rounded-full blur-[100px] md:blur-[120px]" />

            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-poppins font-medium text-white mb-6 md:mb-8 leading-tight">
                {service.ctaHeading || (
                  <>
                    Ready to Start Your{" "}
                    <span className="text-[#60c3e3]">Next Big Thing</span>?
                  </>
                )}
              </h2>
              <p className="text-white/70 text-base md:text-xl mb-10 max-w-3xl mx-auto leading-relaxed font-inter">
                {service.ctaDescription ||
                  "Join dozens of successful startups and enterprises who trust TechTide to build their most critical digital products."}
              </p>
              <button
                onClick={() =>
                  window.dispatchEvent(new CustomEvent("open-partner-drawer"))
                }
                className="px-12 py-4 rounded-2xl font-poppins font-bold text-lg text-white
                  bg-gradient-to-r from-[#453abc] to-[#6b5cff]
                  shadow-[0_20px_60px_rgba(69,58,188,0.4)]
                  hover:shadow-[0_30px_80px_rgba(69,58,188,0.5)]
                  transition-all duration-300 transform hover:scale-[1.03]
                  inline-flex items-center gap-3"
              >
                Get in Touch Today
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* ---- Fallback: Original Simple Layout ---- */
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
          {/* Left Content */}
          <div className="space-y-10">
            {/* Badge */}
            <div
              className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full
              bg-white/70 backdrop-blur border border-[#453abc]/10
              text-[#453abc] font-semibold text-sm shadow-sm w-fit"
            >
              {service.icon && iconMap[service.icon] ? (
                (() => { const Icon = iconMap[service.icon]; return <Icon className="w-5 h-5" />; })()
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

          {/* Right Side */}
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
                  We don't just build software we engineer scalable, secure, and
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
