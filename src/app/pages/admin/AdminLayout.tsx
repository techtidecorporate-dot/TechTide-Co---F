import React, { useEffect } from "react";
import { Link, useNavigate, useLocation, Outlet } from "react-router-dom";
import { useAuth } from "@/app/context/AuthContext";
import brandLogoLight from "@/assets/brand-logo-dark.svg";
import {
  Users,
  Briefcase,
  BookOpen,
  Mail,
  LogOut,
  LayoutDashboard,
  Box,
  Handshake,
  Target,
  CalendarCheck,
  TrendingUp,
} from "lucide-react";

interface SidebarLinkProps {
  to: string;
  icon: any;
  label: string;
  active: boolean;
}

const SidebarLink: React.FC<SidebarLinkProps> = ({
  to,
  icon: Icon,
  label,
  active,
}) => (
  <li>
    <Link
      to={to}
      className={`flex items-center gap-3 p-4 transition-all ${active
        ? "bg-gradient-to-r from-[#453abc] to-[#60c3e3] text-white shadow-lg shadow-[#453abc]/20"
        : "text-gray-400 hover:text-white hover:bg-white/10"
        } rounded-lg`}
    >
      <Icon size={20} />
      <span className="font-medium">{label}</span>
    </Link>
  </li>
);

export default function AdminLayout() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    logout();
    navigate("/signin");
  };

  useEffect(() => {
    if (!user) {
      navigate("/signin");
    }
  }, [user, navigate]);

  if (!user) return null;

  const menuItems = [
    { to: "/admin", icon: LayoutDashboard, label: "Dashboard" },
    { to: "/admin/audits", icon: Box, label: "Audits" },
    { to: "/admin/strategy-calls", icon: CalendarCheck, label: "Strategy Calls" },
    { to: "/admin/users", icon: Users, label: "Users" },
    { to: "/admin/job-positions", icon: Briefcase, label: "Job Positions" },
    { to: "/admin/jobs", icon: Briefcase, label: "Job Applications" },
    { to: "/admin/talent-pool", icon: Target, label: "Talent Pool" },
    { to: "/admin/blogs", icon: BookOpen, label: "Blogs" },
    { to: "/admin/services", icon: Box, label: "Services" },
    { to: "/admin/partners", icon: Handshake, label: "Partners" },
    { to: "/admin/subscribers", icon: Mail, label: "Subscribers" },
    { to: "/admin/messages", icon: Mail, label: "Messages" },
    { to: "/admin/leads", icon: TrendingUp, label: "Leads" },
  ];

  return (
    <div className="flex min-h-screen bg-[#0a0a0c] text-white">
      {/* Sidebar */}
      <aside className="w-72 border-r border-white/10 flex flex-col sticky top-0 h-screen bg-[#09090c]">
        <Link
          to="/"
          className="flex flex-col gap-3 items-center p-6"
        >
          <img src={brandLogoLight} alt="TechTide" className="w-auto h-10 object-contain" />
          <div>
            <p className="text-xs text-gray-400 uppercase tracking-[0.35em] font-semibold">Admin Panel</p>
          </div>
        </Link>

        <nav className="flex-1 overflow-y-auto p-4 no-scrollbar">
          <ul className="flex flex-col gap-1">
            {menuItems.map((item) => (
              <SidebarLink
                key={item.to}
                to={item.to}
                icon={item.icon}
                label={item.label}
                active={location.pathname === item.to}
              />
            ))}
          </ul>
        </nav>

        <div className="p-4 border-t border-white/10">
          <div className="flex items-center gap-3 px-4 py-3 mb-4">
            <div className="w-10 h-10 rounded-md bg-gradient-primary-to-r flex items-center justify-center text-sm font-bold text-white">
              {user?.name?.[0]}
            </div>
            <div className="overflow-hidden">
              <p className="text-sm font-medium truncate">{user?.name}</p>
              <p className="text-xs text-gray-500 truncate">{user?.email}</p>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 text-white bg-gradient-primary-to-r hover:shadow-lg hover:shadow-[#453abc]/20 rounded-lg transition-all"
          >
            <LogOut size={20} />
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto bg-[#0f0f12]">
        <div className="p-8 max-w-7xl mx-auto">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
