import imgVector from "@/assets/brand-logo-dark.svg";
import { Link } from "react-router-dom";
import { type MouseEvent } from "react";
import {
  FaLinkedinIn,
  FaInstagram,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaArrowRight,
} from "react-icons/fa";
import { toast } from "sonner";
import { useNewsletter } from "@/app/hooks/useNewsletter";

import { systemsData } from "@/app/data/servicesData";

const footerLinks = {
  quicklinks: [
    { label: "Services", href: "/services" },
    { label: "Our Team", href: "/ourteam" },
    { label: "Careers", href: "/career" },
    { label: "Contact", href: "/contact" },
  ],
  services: systemsData.slice(0, 4).map(s => ({
    label: s.title,
    href: `/services/${s.slug}`
  })),
  legal: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
};

export function Footer() {
  const {
    email: footerEmail,
    setEmail: setFooterEmail,
    loading: footerLoading,
    subscribe: handleFooterSubscribe,
  } = useNewsletter();

  const handleCopyEmail = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    navigator.clipboard.writeText("techtidecorporate@gmail.com");
    toast.success("Email copied to clipboard!");
  };

  return (
    <footer className="bg-gray-900 text-white pt-8 md:pt-16 pb-14 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2 text-center md:text-left">
            <div className="flex justify-center md:justify-start">
              <Link to="/">
                <img
                  src={imgVector}
                  className="h-8 md:h-10 w-auto"
                  alt="TechTide Corporate LLP – TechTide Co. Software & Digital Solutions Company"
                  title="TechTide Corporate LLP | TechTide Co."
                  loading="eager"
                  decoding="async"
                />
              </Link>
            </div>
            <p className="text-gray-400 text-sm mt-6 max-w-md mx-auto md:mx-0 leading-relaxed">
              Based in Pakistan, Serving the World. We build high-performance
              web, mobile, and SaaS solutions for businesses across the UK, USA, 
              Canada, Germany, and Europe.
            </p>

            {/* Social Links */}
            <div className="flex justify-center md:justify-start gap-4 mt-8">
              <a
                href="mailto:info@techtidecorporate.com"
                onClick={handleCopyEmail}
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#EA4335] flex items-center justify-center transition-all hover:-translate-y-1"
              >
                <FaEnvelope className="text-white w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/company/techtideco/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#453abc] flex items-center justify-center transition-all hover:-translate-y-1"
              >
                <FaLinkedinIn className="text-white w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/techtidecorporatellp/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#c13584] flex items-center justify-center transition-all hover:-translate-y-1"
              >
                <FaInstagram className="text-white w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links Columns */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:col-span-3 gap-8 text-left">
            <div>
              <h4 className="text-white font-poppins font-medium mb-6">
                Quick Links
              </h4>
              <ul className="space-y-4">
                {footerLinks.quicklinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.href}
                      className="text-gray-400 text-sm hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="flex flex-col">
              <h4 className="text-white font-poppins font-medium mb-6">
                Services
              </h4>
              <ul className="space-y-4 mb-6">
                {footerLinks.services.map((service, index) => (
                  <li key={index}>
                    <Link
                      to={service.href}
                      className="text-gray-400 text-sm hover:text-white transition-colors"
                    >
                      {service.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl border border-white/10 text-white text-sm font-medium hover:bg-white/5 transition-all w-fit"
              >
                <span>Explore More</span>
                <FaArrowRight size={14} className="text-[#453abc]" />
              </Link>
            </div>

            {/* Contact Information */}
            <div>
              <h4 className="text-white font-poppins font-medium mb-6">
                Contact
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <a
                    href="mailto:info@techtidecorporate.com"
                    onClick={handleCopyEmail}
                    className="flex items-center gap-2 text-gray-400 text-sm hover:text-white transition-colors"
                  >
                    <FaEnvelope className="text-[#453abc]" size={14} />
                    info@techtidecorporate.com
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <a
                    href="tel:+923247991484"
                    className="flex items-center gap-2 text-gray-400 text-sm hover:text-white transition-colors"
                  >
                    <FaPhone className="text-[#453abc]" size={14} />
                    +92 324 7991484
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <a
                    href="https://www.google.com/maps/place/Techtide+Corporate+LLP/@31.548828,74.3988149,606m/data=!3m1!1e3!4m16!1m9!3m8!1s0x3919050017953d65:0x4946f90f8a3851c2!2sTechtide+Corporate+LLP!8m2!3d31.548828!4d74.4013898!9m1!1b1!16s%2Fg%2F11yn8dzf8z!3m5!1s0x3919050017953d65:0x4946f90f8a3851c2!8m2!3d31.548828!4d74.4013898!16s%2Fg%2F11yn8dzf8z?entry=ttu&g_ep=EgoyMDI2MDQxNS4wIKXMDSoASAFQAw%3D%3D"
                    className="flex items-center gap-2 text-gray-400 text-sm leading-relaxed"
                  >
                    <FaMapMarkerAlt
                      className="text-[#453abc] mt-1 flex-shrink-0"
                      size={14}
                    />
                    G3 heaven mall zaraar
                    <br />
                    shaheed road lahore
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-white/5 py-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="text-center lg:text-left">
              <h3 className="text-xl font-poppins font-medium mb-2">
                Subscribe to our Newsletter
              </h3>
              <p className="text-gray-400 text-sm">
                Stay updated with our latest news and offers
              </p>
            </div>
            <form onSubmit={handleFooterSubscribe} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={footerEmail}
                onChange={(event) => setFooterEmail(event.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#453abc] transition-all"
              />
              <button
                type="submit"
                disabled={footerLoading}
                className="px-8 py-3 rounded-xl font-medium text-white transition-all hover:shadow-[0_10px_30px_-5px_rgba(69,58,188,0.4)] hover:-translate-y-0.5 active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-60"
                style={{
                  backgroundImage:
                    "linear-gradient(93.1835deg, rgb(69, 58, 188) 0%, rgb(96, 195, 227) 103.41%)",
                }}
              >
                {footerLoading ? "Subscribing..." : "Subscribe"}
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-sm text-center">
            © 2025 TechTideCo. All rights reserved.
          </p>

          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2">
            {[
              { label: "Privacy Policy", href: "/privacy-policy" },
              { label: "Terms of Service", href: "/terms-of-service" },
              { label: "Cookie Policy", href: "/cookie-policy" },
            ].map((link, index) => (
              <Link
                key={index}
                to={link.href}
                className="text-gray-500 text-xs hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
