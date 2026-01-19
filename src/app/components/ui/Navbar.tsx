import { useState, useEffect } from "react";

import imgVector from "@/assets/brand-logo-dark.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, LogOut, LayoutDashboard } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "@/app/context/AuthContext";

const navItems = [
  { href: "/services", label: "Services", isRoute: true },
  { href: "/blog", label: "Blog", isRoute: true },
  { href: "/ourteam", label: "Our team", isRoute: true },
  { href: "/career", label: "Career", isRoute: true },
  { href: "/contact", label: "Contact Us", isRoute: true },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const isLandingPage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Force white background on all pages except landing
  const shouldBeTransparent = isLandingPage && !isScrolled;

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
            alt="TechTide Corporate LLP Logo – TechTide Co. Software & Digital Solutions Company"
            title="TechTide Corporate LLP | TechTide Co."
            loading="eager"
            decoding="async"
          />
        </Link>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center gap-10">
        {navItems.map((item, index) => {
          const isActive = location.pathname === item.href;
          return (
            <Link
              key={index}
              to={item.href}
              className={`relative font-inter py-1 transition-all duration-300 group ${
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
              <span className="font-medium text-white">{user.name}</span>
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
          <Link
            to="/signin"
            className="relative px-7 py-2.5 rounded-lg font-medium text-white 
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
            <span className="relative z-10">Sign in</span>
          </Link>
        )}
      </div>

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
              <Link
                to="/signin"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full py-4 rounded-xl text-center text-white font-poppins font-medium shadow-lg"
                style={{
                  background:
                    "linear-gradient(95deg, rgb(69, 58, 188) 0%, rgb(96, 195, 227) 100%)",
                }}
              >
                Sign in
              </Link>

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
}
