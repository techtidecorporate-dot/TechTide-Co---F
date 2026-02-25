import { Route, Routes, useLocation } from "react-router-dom";
import { Footer } from "./components/ui/Footer";
import { Navbar } from "./components/ui/Navbar";
import LandingPage from "./pages/landing";
import TeamPage from "./pages/ourteam";
import ServicesPage from "./pages/services";
import BlogPage from "./pages/blog";
import CareerPage from "./pages/career";
import ContactPage from "./pages/contact";
import BlogDetailPage from "./pages/BlogDetail";
import ServiceDetailPage from "./pages/ServiceDetailPage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import CookiePolicy from "./pages/CookiePolicy";
import { PartnerWithUsDrawer } from "./components/ui/PartnerWithUsDrawer";
import SignInPage from "./components/ui/signin";
import { useState, useEffect } from "react";
import { AuthProvider } from "./context/AuthContext";
import { ScrollToTop } from "./components/ui/ScrollToTop";
import { FloatingCTA } from "./components/ui/FloatingCTA";
import { Toaster } from "sonner";

import AdminLayout from "./pages/admin/AdminLayout";
import Dashboard from "./pages/admin/Dashboard";
import TeamManagement from "./pages/admin/Teams";
import BlogManagement from "./pages/admin/Blogs";
import ServiceManagement from "./pages/admin/Services";
import ContactMessages from "./pages/admin/ContactSubmissions";
import UserManagement from "./pages/admin/Users";
import JobApplications from "./pages/admin/Jobs";
import TalentPool from "./pages/admin/TalentPool";
import JobListingManagement from "./pages/admin/JobListingManagement";
import PartnerSubmissions from "./pages/admin/PartnerSubmissions";

export default function App() {
  const location = useLocation();
  const [isPartnerDrawerOpen, setIsPartnerDrawerOpen] = useState(false);
  const isAdminPath = location.pathname.startsWith("/admin");
  const isSignInPath = location.pathname === "/signin";
  const hideNavFooter = isAdminPath || isSignInPath;

  useEffect(() => {
    const handleOpenDrawer = () => setIsPartnerDrawerOpen(true);
    window.addEventListener("open-partner-drawer", handleOpenDrawer);
    return () =>
      window.removeEventListener("open-partner-drawer", handleOpenDrawer);
  }, []);

  return (
    <AuthProvider>
      <ScrollToTop />
      <Toaster position="top-center" richColors />
      <div className="relative min-h-screen bg-white">
        {!hideNavFooter && <Navbar />}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/ourteam" element={<TeamPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/:slug" element={<ServiceDetailPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogDetailPage />} />
          <Route path="/career" element={<CareerPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />

          {/* Admin Routes */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="teams" element={<TeamManagement />} />
            <Route path="blogs" element={<BlogManagement />} />
            <Route path="services" element={<ServiceManagement />} />
            <Route path="messages" element={<ContactMessages />} />
            <Route path="users" element={<UserManagement />} />
            <Route path="job-positions" element={<JobListingManagement />} />
            <Route path="jobs" element={<JobApplications />} />
            <Route path="talent-pool" element={<TalentPool />} />
            <Route path="partners" element={<PartnerSubmissions />} />
          </Route>
        </Routes>
        {isPartnerDrawerOpen && (
          <PartnerWithUsDrawer
            isOpen={isPartnerDrawerOpen}
            onClose={() => setIsPartnerDrawerOpen(false)}
          />
        )}
        {!hideNavFooter && <FloatingCTA />}
        {!hideNavFooter && <Footer />}
      </div>
    </AuthProvider>
  );
}
