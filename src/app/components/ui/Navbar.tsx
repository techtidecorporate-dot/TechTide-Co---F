import { useState, useEffect, useRef, memo } from "react";

import imgVector from "@/assets/brand-logo-dark.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, LogOut, LayoutDashboard } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "@/app/context/AuthContext";

const aboutDropdownItems = [
  { href: "/about#overview", label: "Overview" },
  { href: "/about#products", label: "Products" },
  { href: "/about#leadership", label: "Leadership" },
  { href: "/company-profile", label: "Company Profile" },
];

const servicesDropdownItems = [
  { href: "/services/lead-generation-websites", label: "Lead Generation Websites", description: "High-converting websites that generate qualified leads 24/7." },
  { href: "/services/conversion-optimization", label: "Conversion Optimization", description: "Data-driven UI/UX strategies to turn traffic into customers." },
  { href: "/services/growth-marketing-systems", label: "Growth Marketing Systems", description: "Scalable marketing infra for predictable growth and high ROI." },
  { href: "/services/business-automation-systems", label: "Business Automation Systems", description: "Custom automation tools to streamline operations." },
  { href: "/services/saas-product-development", label: "Scalable SaaS Products", description: "Build and scale profitable SaaS products from scratch." },
  { href: "/services/api-integration", label: "API & System Integration", description: "Connect your tech stack for seamless data flow." },
];

const navItems = [
  { href: "/blog", label: "Blog", isRoute: true },
  { href: "/career", label: "Career", isRoute: true },
  { href: "/contact", label: "Contact Us", isRoute: true },
];

let scrollTick = false;
const Navbar = memo(function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const isLandingPage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      if (scrollTick) return;
      scrollTick = true;
      requestAnimationFrame(() => {
        setIsScrolled(window.scrollY > 20);
        scrollTick = false;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Force white background on all pages except landing
  const shouldBeTransparent = isLandingPage && !isScrolled;

  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const aboutDropdownRef = useRef<HTMLDivElement>(null);
  const aboutTriggerRef = useRef<HTMLButtonElement>(null);

  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const servicesDropdownRef = useRef<HTMLDivElement>(null);
  const servicesTriggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        aboutDropdownRef.current &&
        !aboutDropdownRef.current.contains(e.target as Node) &&
        aboutTriggerRef.current &&
        !aboutTriggerRef.current.contains(e.target as Node)
      ) {
        setIsAboutDropdownOpen(false);
      }
      if (
        servicesDropdownRef.current &&
        !servicesDropdownRef.current.contains(e.target as Node) &&
        servicesTriggerRef.current &&
        !servicesTriggerRef.current.contains(e.target as Node)
      ) {
        setIsServicesDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    logout();
    setShowUserMenu(false);
    navigate("/");
  };

  return (
    <motion.nav
      initial={false}
      animate={{
        backgroundColor: shouldBeTransparent
          ? "rgba(255, 255, 255, 0)"
          : "rgba(255, 255, 255, 0.95)",
        backdropFilter: shouldBeTransparent ? "blur(0px)" : "blur(12px)",
        boxShadow: shouldBeTransparent
          ? "0 0 0 rgba(0, 0, 0, 0)"
          : "0 10px 30px -10px rgba(0, 0, 0, 0.1)",
        height: "80px",
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10"
    >
      <div className="flex-shrink-0">
        <Link to="/" className="flex items-center">
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

      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center gap-10">
        {/* About Us with Dropdown */}
        <div
          className="relative"
          onMouseEnter={() => { setIsAboutDropdownOpen(true); setIsServicesDropdownOpen(false); }}
          onMouseLeave={() => setIsAboutDropdownOpen(false)}
        >
          <button
            ref={aboutTriggerRef}
            className={`relative font-poppins py-1 transition-all duration-300 group cursor-pointer ${
              location.pathname.startsWith("/about") || location.pathname.startsWith("/company-profile")
                ? shouldBeTransparent
                  ? "text-white font-medium"
                  : "text-[#453abc] font-medium"
                : shouldBeTransparent
                  ? "text-white/80 hover:text-white"
                  : "text-gray-600 hover:text-gray-900"
            }`}
          >
            <span className="relative z-10 flex items-center gap-1.5">
              About Us
              <svg
                className={`w-3.5 h-3.5 transition-transform duration-300 ${
                  isAboutDropdownOpen ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </span>
            <span
              className={`absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-[#453abc] to-[#60c3e3] transition-all duration-300 ${
                location.pathname.startsWith("/about") || location.pathname.startsWith("/company-profile")
                  ? "w-full opacity-100"
                  : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"
              }`}
            />
          </button>
        </div>

        {/* Services with Dropdown */}
        <div
          className="relative"
          onMouseEnter={() => { setIsServicesDropdownOpen(true); setIsAboutDropdownOpen(false); }}
          onMouseLeave={() => setIsServicesDropdownOpen(false)}
        >
          <button
            ref={servicesTriggerRef}
            className={`relative font-poppins py-1 transition-all duration-300 group cursor-pointer ${
              location.pathname.startsWith("/services")
                ? shouldBeTransparent
                  ? "text-white font-medium"
                  : "text-[#453abc] font-medium"
                : shouldBeTransparent
                  ? "text-white/80 hover:text-white"
                  : "text-gray-600 hover:text-gray-900"
            }`}
          >
            <span className="relative z-10 flex items-center gap-1.5">
              Services
              <svg
                className={`w-3.5 h-3.5 transition-transform duration-300 ${
                  isServicesDropdownOpen ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </span>
            <span
              className={`absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-[#453abc] to-[#60c3e3] transition-all duration-300 ${
                location.pathname.startsWith("/services")
                  ? "w-full opacity-100"
                  : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"
              }`}
            />
          </button>
        </div>

        {navItems.map((item, index) => {
          const isActive = location.pathname === item.href;
          return (
            <Link
              key={index}
              to={item.href}
              className={`relative font-poppins py-1 transition-all duration-300 group ${
                isActive
                  ? shouldBeTransparent
                    ? "text-white font-medium"
                    : "text-[#453abc] font-medium"
                  : shouldBeTransparent
                    ? "text-white/80 hover:text-white"
                    : "text-gray-600 hover:text-gray-900"
              }`}
            >
              <span className="relative z-10">{item.label}</span>
              <span
                className={`absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-[#453abc] to-[#60c3e3] transition-all duration-300 ${
                  isActive
                    ? "w-full opacity-100"
                    : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"
                }`}
              />
            </Link>
          );
        })}
      </div>

      <div className="hidden lg:block">
        {user ? (
          <div className="relative">
            <button
              onClick={() => setShowUserMenu(!showUserMenu)}
              className="flex text-white items-center gap-3 px-4 py-2 rounded-lg transition-colors"
            >
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#453abc] to-[#60c3e3] flex items-center justify-center text-white font-semibold">
                {user.name?.[0]?.toUpperCase() || "U"}
              </div>
              <span className="font-medium text-blue-600">{user.name}</span>
            </button>

            {showUserMenu && (
              <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50">
                <div className="px-4 py-3 border-b border-gray-100">
                  <p className="text-sm font-medium text-gray-900">
                    {user.name}
                  </p>
                  <p className="text-xs text-gray-500 truncate">{user.email}</p>
                </div>
                {user.role === "admin" && (
                  <Link
                    to="/admin"
                    onClick={() => setShowUserMenu(false)}
                    className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    <LayoutDashboard size={16} />
                    Admin Dashboard
                  </Link>
                )}
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-3 w-full px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 transition-colors"
                >
                  <LogOut size={16} />
                  Sign Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <button
            onClick={() => window.dispatchEvent(new CustomEvent("open-partner-drawer"))}
            className="relative flex items-center gap-2 px-7 py-2.5 rounded-lg font-medium text-white 
               transition-all duration-300 
               hover:-translate-y-0.5 active:translate-y-0 
               shadow-[0_10px_30px_-10px_rgba(69,58,188,0.6)]
               hover:shadow-[0_18px_45px_-16px_rgba(96,195,227,0.8)]
               focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#60c3e3]"
            style={{
              background:
                "linear-gradient(95deg, rgb(69, 58, 188) 0%, rgb(96, 195, 227) 100%)",
            }}
          >
            <span className="absolute inset-0 rounded-lg bg-white/10 opacity-0 hover:opacity-100 transition-opacity pointer-events-none" />
            <span className="relative z-10">Partner with Us</span>
          </button>
        )}
      </div>

      {/* About Us Dropdown */}
      <AnimatePresence>
        {isAboutDropdownOpen && (
          <>
            {/* Invisible bridge to keep hover active */}
            <div
              className="absolute left-0 right-0 z-40"
              style={{ top: "80px", height: "16px" }}
              onMouseEnter={() => setIsAboutDropdownOpen(true)}
              onMouseLeave={() => setIsAboutDropdownOpen(false)}
            />
            <motion.div
              ref={aboutDropdownRef}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute left-0 right-0 z-40"
              style={{ top: "calc(80px + 16px)" }}
              onMouseEnter={() => setIsAboutDropdownOpen(true)}
              onMouseLeave={() => setIsAboutDropdownOpen(false)}
            >
              <div className="max-w-7xl mx-auto px-6 md:px-10">
                <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
                  <div className="grid grid-cols-4 gap-8">
                    {aboutDropdownItems.map((item, i) => {
                      const isActive = location.pathname + location.hash === item.href;
                      return (
                        <Link
                          key={i}
                          to={item.href}
                          onClick={() => setIsAboutDropdownOpen(false)}
                          className={`group p-5 rounded-xl transition-all duration-300 ${
                            isActive
                              ? "bg-gradient-to-br from-[#453abc]/5 to-[#60c3e3]/5 border border-[#453abc]/15"
                              : "hover:bg-gray-50 border border-transparent"
                          }`}
                        >
                          <h3 className={`font-poppins font-semibold text-lg mb-1.5 transition-colors ${
                            isActive ? "text-[#453abc]" : "text-[#191a23] group-hover:text-[#453abc]"
                          }`}>
                            {item.label}
                          </h3>
                          <p className="text-sm text-[#6b7280] leading-relaxed">
                            {item.label === "Overview" && "Learn about our story, mission, and values."}
                            {item.label === "Leadership" && "Meet the experts driving our success."}
                            {item.label === "Products" && "Explore our digital products and solutions."}
                            {item.label === "Company Profile" && "View our company details and registration."}
                          </p>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Services Dropdown */}
      <AnimatePresence>
        {isServicesDropdownOpen && (
          <>
            <div
              className="absolute left-0 right-0 z-40"
              style={{ top: "80px", height: "16px" }}
              onMouseEnter={() => setIsServicesDropdownOpen(true)}
              onMouseLeave={() => setIsServicesDropdownOpen(false)}
            />
            <motion.div
              ref={servicesDropdownRef}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute left-0 right-0 z-40"
              style={{ top: "calc(80px + 16px)" }}
              onMouseEnter={() => setIsServicesDropdownOpen(true)}
              onMouseLeave={() => setIsServicesDropdownOpen(false)}
            >
              <div className="max-w-7xl mx-auto px-6 md:px-10">
                <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
                  <div className="grid grid-cols-3 gap-8">
                    {servicesDropdownItems.map((item, i) => {
                      const isActive = location.pathname === item.href;
                      return (
                        <Link
                          key={i}
                          to={item.href}
                          onClick={() => setIsServicesDropdownOpen(false)}
                          className={`group p-5 rounded-xl transition-all duration-300 ${
                            isActive
                              ? "bg-gradient-to-br from-[#453abc]/5 to-[#60c3e3]/5 border border-[#453abc]/15"
                              : "hover:bg-gray-50 border border-transparent"
                          }`}
                        >
                          <h3 className={`font-poppins font-semibold text-lg mb-1.5 transition-colors ${
                            isActive ? "text-[#453abc]" : "text-[#191a23] group-hover:text-[#453abc]"
                          }`}>
                            {item.label}
                          </h3>
                          <p className="text-sm text-[#6b7280] leading-relaxed">
                            {item.description}
                          </p>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Mobile Menu Toggle */}
      <button
        className={`lg:hidden p-2 rounded-lg transition-colors ${
          shouldBeTransparent
            ? "text-white hover:bg-white/10"
            : "text-gray-900 hover:bg-gray-100"
        }`}
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle mobile menu"
      >
        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 top-[80px] h-full z-40 lg:hidden"
          >
            <div className="flex flex-col p-8 gap-6 bg-white h-[400px] overflow-y-auto pb-20">
              {/* About Us section in mobile */}
              <div className="space-y-1">
                <p className="text-xs font-semibold tracking-[0.15em] uppercase text-[#453abc] px-2">
                  About Us
                </p>
                {aboutDropdownItems.map((item, i) => {
                  const isActive = location.pathname === item.href;
                  return (
                    <Link
                      key={i}
                      to={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`block text-lg font-poppins font-medium p-2 transition-colors rounded-lg ${
                        isActive
                          ? "text-[#453abc] bg-[#453abc]/5"
                          : "text-gray-700 hover:text-[#453abc] hover:bg-gray-50"
                      }`}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </div>
              <hr className="border-gray-100" />
              {/* Services section in mobile */}
              <div className="space-y-1">
                <p className="text-xs font-semibold tracking-[0.15em] uppercase text-[#453abc] px-2">
                  Services
                </p>
                {servicesDropdownItems.map((item, i) => {
                  const isActive = location.pathname === item.href;
                  return (
                    <Link
                      key={i}
                      to={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`block text-lg font-poppins font-medium p-2 transition-colors rounded-lg ${
                        isActive
                          ? "text-[#453abc] bg-[#453abc]/5"
                          : "text-gray-700 hover:text-[#453abc] hover:bg-gray-50"
                      }`}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </div>
              <hr className="border-gray-100" />
              {navItems.map((item, index) => {
                const isActive = location.pathname === item.href;
                return (
                  <Link
                    key={index}
                    to={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-2xl font-poppins font-medium p-2 transition-colors ${
                      isActive ? "text-[#453abc]" : "text-gray-800"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <hr className="border-gray-100 my-4" />
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  window.dispatchEvent(new CustomEvent("open-partner-drawer"));
                }}
                className="w-full py-4 rounded-xl text-center text-white font-poppins font-medium shadow-lg flex items-center justify-center gap-2"
                style={{
                  background:
                    "linear-gradient(95deg, rgb(69, 58, 188) 0%, rgb(96, 195, 227) 100%)",
                }}
              >
                Partner with Us
              </button>

              <div className="mt-auto pt-8">
                <p className="text-gray-400 text-sm mb-4">
                  Connecting you to the future of technology.
                </p>
                <div className="flex gap-4">
                  {/* Social icons could go here */}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
});

export { Navbar }
