import { useState, useEffect, useRef, memo } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, LogOut, LayoutDashboard } from "lucide-react";
import { motion } from "framer-motion";
import { useAuth } from "@/app/context/AuthContext";
import { NavLink } from "./NavLink";
import { DropdownPanel } from "./DropdownPanel";
import { AboutDropdownContent } from "./AboutDropdownContent";
import { ServicesDropdownContent } from "./ServicesDropdownContent";
import { MobileMenu } from "./MobileMenu";

import imgVector from "@/assets/brand-logo-dark.svg";

const navItems = [
  { href: "/products", label: "Products" },
  { href: "/blog", label: "Blog" },
  { href: "/career", label: "Career" },
  { href: "/contact", label: "Contact Us" },
];

let scrollTick = false;

const Navbar = memo(function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const aboutTriggerRef = useRef<HTMLButtonElement>(null);
  const servicesTriggerRef = useRef<HTMLButtonElement>(null);

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

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        aboutTriggerRef.current &&
        !aboutTriggerRef.current.contains(e.target as Node)
      ) {
        setIsAboutDropdownOpen(false);
      }
      if (
        servicesTriggerRef.current &&
        !servicesTriggerRef.current.contains(e.target as Node)
      ) {
        setIsServicesDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const shouldBeTransparent = isLandingPage && !isScrolled;

  const textClasses = (isActive: boolean) =>
    isActive
      ? shouldBeTransparent
        ? "text-white font-medium"
        : "text-[#453abc] font-medium"
      : shouldBeTransparent
        ? "text-white/80 hover:text-white"
        : "text-gray-600 hover:text-gray-900";

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
      <Link to="/" className="flex-shrink-0 flex items-center">
        <img
          src={imgVector}
          className="h-8 md:h-10 w-auto"
          alt="TechTide Corporate LLP"
          loading="eager"
        />
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center gap-10">
        {/* About Us */}
        <div
          className="relative"
          onMouseEnter={() => { setIsAboutDropdownOpen(true); setIsServicesDropdownOpen(false); }}
          onMouseLeave={() => setIsAboutDropdownOpen(false)}
        >
          <button
            ref={aboutTriggerRef}
            className={`relative font-poppins py-1 transition-all duration-300 group cursor-pointer ${textClasses(
              location.pathname.startsWith("/about") || location.pathname.startsWith("/company-profile"),
            )}`}
          >
            <span className="relative z-10 flex items-center gap-1.5">
              About Us
              <svg className={`w-3.5 h-3.5 transition-transform ${isAboutDropdownOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </span>
            <span className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-[#453abc] to-[#60c3e3] transition-all duration-300" style={{ width: location.pathname.startsWith("/about") || location.pathname.startsWith("/company-profile") ? "100%" : "0%", opacity: location.pathname.startsWith("/about") || location.pathname.startsWith("/company-profile") ? 1 : 0 }} />
          </button>
        </div>

        {/* Services */}
        <div
          className="relative"
          onMouseEnter={() => { setIsServicesDropdownOpen(true); setIsAboutDropdownOpen(false); }}
          onMouseLeave={() => setIsServicesDropdownOpen(false)}
        >
          <button
            ref={servicesTriggerRef}
            className={`relative font-poppins py-1 transition-all duration-300 group cursor-pointer ${textClasses(
              location.pathname.startsWith("/services"),
            )}`}
          >
            <span className="relative z-10 flex items-center gap-1.5">
              Services
              <svg className={`w-3.5 h-3.5 transition-transform ${isServicesDropdownOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </span>
            <span className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-[#453abc] to-[#60c3e3] transition-all duration-300" style={{ width: location.pathname.startsWith("/services") ? "100%" : "0%", opacity: location.pathname.startsWith("/services") ? 1 : 0 }} />
          </button>
        </div>

        {navItems.map((item) => (
          <NavLink
            key={item.href}
            href={item.href}
            label={item.label}
            isActive={location.pathname === item.href}
            shouldBeTransparent={shouldBeTransparent}
          />
        ))}
      </div>

      {/* Desktop Auth */}
      <div className="hidden lg:block">
        {user ? (
          <div className="relative">
            <button
              onClick={() => setShowUserMenu(!showUserMenu)}
              className="flex items-center gap-3 px-4 py-2 rounded-lg transition-colors"
            >
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#453abc] to-[#60c3e3] flex items-center justify-center text-white font-semibold">
                {user.name?.[0]?.toUpperCase() || "U"}
              </div>
              <span className="font-medium text-blue-600">{user.name}</span>
            </button>
            {showUserMenu && (
              <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50">
                <div className="px-4 py-3 border-b border-gray-100">
                  <p className="text-sm font-medium text-gray-900">{user.name}</p>
                  <p className="text-xs text-gray-500 truncate">{user.email}</p>
                </div>
                {user.role === "admin" && (
                  <Link to="/admin" onClick={() => setShowUserMenu(false)}
                    className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    <LayoutDashboard size={16} /> Admin Dashboard
                  </Link>
                )}
                <button onClick={handleLogout}
                  className="flex items-center gap-3 w-full px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 transition-colors"
                >
                  <LogOut size={16} /> Sign Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <button
            onClick={() => window.dispatchEvent(new CustomEvent("open-partner-drawer"))}
            className="relative flex items-center gap-2 px-7 py-2.5 rounded-lg font-medium text-white transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 shadow-[0_10px_30px_-10px_rgba(69,58,188,0.6)] hover:shadow-[0_18px_45px_-16px_rgba(96,195,227,0.8)]"
            style={{ background: "linear-gradient(95deg, rgb(69, 58, 188) 0%, rgb(96, 195, 227) 100%)" }}
          >
            <span className="absolute inset-0 rounded-lg bg-white/10 opacity-0 hover:opacity-100 transition-opacity pointer-events-none" />
            <span className="relative z-10">Partner with Us</span>
          </button>
        )}
      </div>

      {/* About Dropdown */}
      <DropdownPanel
        isOpen={isAboutDropdownOpen}
        onClose={() => setIsAboutDropdownOpen(false)}
        onStayOpen={() => setIsAboutDropdownOpen(true)}
      >
        <AboutDropdownContent onClose={() => setIsAboutDropdownOpen(false)} />
      </DropdownPanel>

      {/* Services Dropdown */}
      <DropdownPanel
        isOpen={isServicesDropdownOpen}
        onClose={() => setIsServicesDropdownOpen(false)}
        onStayOpen={() => setIsServicesDropdownOpen(true)}
        maxWidth="max-w-[1400px]"
      >
        <ServicesDropdownContent onClose={() => setIsServicesDropdownOpen(false)} />
      </DropdownPanel>

      {/* Mobile Toggle */}
      <button
        className={`lg:hidden p-2 rounded-lg transition-colors ${
          shouldBeTransparent ? "text-white hover:bg-white/10" : "text-gray-900 hover:bg-gray-100"
        }`}
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle mobile menu"
      >
        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </motion.nav>
  );
});

export { Navbar }
