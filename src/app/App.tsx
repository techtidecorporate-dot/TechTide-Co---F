import { lazy, Suspense, useState, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Navbar } from "./components/ui/Navbar";
import { Footer } from "./components/ui/Footer";
import { AuthProvider } from "./context/AuthContext";
import { ScrollToTop } from "./components/ui/ScrollToTop";
import { Toaster } from "sonner";

// Lazy load pages
const LandingPage = lazy(() => import("./pages/landing"));
const TeamPage = lazy(() => import("./pages/ourteam"));
const ServicesPage = lazy(() => import("./pages/services"));
const BlogPage = lazy(() => import("./pages/blog"));
const CareerPage = lazy(() => import("./pages/career"));
const ContactPage = lazy(() => import("./pages/contact"));
const BlogDetailPage = lazy(() => import("./pages/BlogDetail"));
const ServiceDetailPage = lazy(() => import("./pages/ServiceDetailPage"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsOfService = lazy(() => import("./pages/TermsOfService"));
const CookiePolicy = lazy(() => import("./pages/CookiePolicy"));
const SignInPage = lazy(() => import("./components/ui/signin"));

// Admin Routes
const AdminLayout = lazy(() => import("./pages/admin/AdminLayout"));
const Dashboard = lazy(() => import("./pages/admin/Dashboard"));
const BlogManagement = lazy(() => import("./pages/admin/Blogs"));
const ServiceManagement = lazy(() => import("./pages/admin/Services"));
const ContactMessages = lazy(() => import("./pages/admin/ContactSubmissions"));
const UserManagement = lazy(() => import("./pages/admin/Users"));
const JobListingManagement = lazy(() => import("./pages/admin/JobListingManagement"));
const JobApplications = lazy(() => import("./pages/admin/Jobs"));
const TalentPool = lazy(() => import("./pages/admin/TalentPool"));
const PartnerSubmissions = lazy(() => import("./pages/admin/PartnerSubmissions"));
const AuditSubmissions = lazy(() => import("./pages/admin/AuditSubmissions"));
const StrategyCallSubmissions = lazy(() => import("./pages/admin/StrategyCallSubmissions"));
const SubscribersManagement = lazy(() => import("@/app/pages/admin/Subscribers"));

// Drawers
const PartnerWithUsDrawer = lazy(() => import("./components/ui/PartnerWithUsDrawer").then(m => ({ default: m.PartnerWithUsDrawer })));
const AuditDrawer = lazy(() => import("./components/ui/AuditDrawer").then(m => ({ default: m.AuditDrawer })));
const StrategyCallDrawer = lazy(() => import("./components/ui/StrategyCallDrawer").then(m => ({ default: m.StrategyCallDrawer })));

// Loading Component
const PageLoading = () => (
  <div className="flex items-center justify-center min-h-screen bg-white">
    <div className="w-12 h-12 border-4 border-[#453abc] border-t-transparent rounded-full animate-spin"></div>
  </div>
);

export default function App() {
  const location = useLocation();
  const [isPartnerDrawerOpen, setIsPartnerDrawerOpen] = useState(false);
  const [isAuditDrawerOpen, setIsAuditDrawerOpen] = useState(false);
  const [isStrategyDrawerOpen, setIsStrategyDrawerOpen] = useState(false);
  
  const isAdminPath = location.pathname.startsWith("/admin");
  const isSignInPath = location.pathname === "/signin";
  const hideNavFooter = isAdminPath || isSignInPath;

  useEffect(() => {
    const handleOpenPartner = () => setIsPartnerDrawerOpen(true);
    const handleOpenAudit = () => setIsAuditDrawerOpen(true);
    const handleOpenStrategy = () => setIsStrategyDrawerOpen(true);
    
    window.addEventListener("open-partner-drawer", handleOpenPartner);
    window.addEventListener("open-audit-drawer", handleOpenAudit);
    window.addEventListener("open-strategy-drawer", handleOpenStrategy);
    
    return () => {
      window.removeEventListener("open-partner-drawer", handleOpenPartner);
      window.removeEventListener("open-audit-drawer", handleOpenAudit);
      window.removeEventListener("open-strategy-drawer", handleOpenStrategy);
    };
  }, []);

  return (
    <AuthProvider>
      <ScrollToTop />
      <Toaster position="top-center" richColors />
      <div className="relative min-h-screen bg-white font-poppins">
        {!hideNavFooter && <Navbar />}
        <Suspense fallback={<PageLoading />}>
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
              <Route path="blogs" element={<BlogManagement />} />
              <Route path="services" element={<ServiceManagement />} />
              <Route path="messages" element={<ContactMessages />} />
              <Route path="users" element={<UserManagement />} />
              <Route path="job-positions" element={<JobListingManagement />} />
              <Route path="jobs" element={<JobApplications />} />
              <Route path="talent-pool" element={<TalentPool />} />
              <Route path="partners" element={<PartnerSubmissions />} />
              <Route path="audits" element={<AuditSubmissions />} />
              <Route path="strategy-calls" element={<StrategyCallSubmissions />} />
              <Route path="subscribers" element={<SubscribersManagement />} />
            </Route>
          </Routes>
        </Suspense>
        
        {isPartnerDrawerOpen && (
          <Suspense fallback={null}>
            <PartnerWithUsDrawer
              isOpen={isPartnerDrawerOpen}
              onClose={() => setIsPartnerDrawerOpen(false)}
            />
          </Suspense>
        )}
        
        {isAuditDrawerOpen && (
          <Suspense fallback={null}>
            <AuditDrawer
              isOpen={isAuditDrawerOpen}
              onClose={() => setIsAuditDrawerOpen(false)}
            />
          </Suspense>
        )}
        
        {isStrategyDrawerOpen && (
          <Suspense fallback={null}>
            <StrategyCallDrawer
              isOpen={isStrategyDrawerOpen}
              onClose={() => setIsStrategyDrawerOpen(false)}
            />
          </Suspense>
        )}
        
        {!hideNavFooter && <Footer />}
      </div>
    </AuthProvider>
  );
}


