import React, { useEffect, useState } from "react";
import { useAuth } from "@/app/context/AuthContext";
import { Users, Briefcase, BookOpen, Mail, LucideIcon } from "lucide-react";
import { authAPI, blogAPI, jobAPI, contactAPI, talentPoolAPI } from "@/api";

interface StatCardProps {
  label: string;
  value: string | number;
  icon: LucideIcon;
  color: string;
  loading?: boolean;
}

const StatCard: React.FC<StatCardProps> = ({
  label,
  value,
  icon: Icon,
  color,
  loading,
}) => (
  <div className="bg-[#16161a] p-6 rounded-2xl border border-white/5 shadow-xl">
    <div className="flex items-center justify-between mb-4">
      <div className={`p-3 rounded-xl ${color}`}>
        <Icon size={24} className="text-white" />
      </div>
      {loading && (
        <div className="w-4 h-4 border-2 border-white/20 border-t-white/60 rounded-full animate-spin" />
      )}
    </div>
    <h3 className="text-gray-400 text-sm font-medium">{label}</h3>
    <p className="text-3xl font-bold mt-1">
      {loading ? (
        <span className="inline-block w-12 h-8 bg-white/5 rounded animate-pulse" />
      ) : (
        value
      )}
    </p>
  </div>
);

export default function Dashboard() {
  const { user } = useAuth();
  const [stats, setStats] = useState({
    users: 0,
    jobs: 0,
    blogs: 0,
    messages: 0,
    talentPool: 0,
  });
  const [loading, setLoading] = useState(true);
  const [recentActivity, setRecentActivity] = useState<
    { label: string; time: string }[]
  >([]);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const [usersRes, jobsRes, blogsRes, messagesRes, talentRes] =
          await Promise.allSettled([
            authAPI.getUsers(),
            jobAPI.getAll(),
            blogAPI.getAll(),
            contactAPI.getAll(),
            talentPoolAPI.getAll(),
          ]);

        const get = (res: PromiseSettledResult<any>) =>
          res.status === "fulfilled" ? (res.value?.data?.length ?? 0) : 0;

        setStats({
          users: get(usersRes),
          jobs: get(jobsRes),
          blogs: get(blogsRes),
          messages: get(messagesRes),
          talentPool: get(talentRes),
        });

        // Build recent activity
        const getRelativeTime = (iso?: string) => {
          if (!iso) return "Recently";
          const diff = Date.now() - new Date(iso).getTime();
          const mins = Math.floor(diff / 60000);
          if (mins < 60) return `${mins}m ago`;
          const hrs = Math.floor(mins / 60);
          if (hrs < 24) return `${hrs}h ago`;
          return `${Math.floor(hrs / 24)}d ago`;
        };

        const activity: { label: string; time: string }[] = [];

        if (blogsRes.status === "fulfilled") {
          const blogsData = blogsRes.value?.data ?? [];
          if (blogsData.length > 0) {
            const latest = blogsData[blogsData.length - 1];
            activity.push({
              label: `Blog post: "${latest.title?.slice(0, 40) ?? "Untitled"}"`,
              time: getRelativeTime(latest.createdAt),
            });
          }
        }

        if (messagesRes.status === "fulfilled") {
          const messagesData = messagesRes.value?.data ?? [];
          if (messagesData.length > 0) {
            const latest = messagesData[messagesData.length - 1];
            activity.push({
              label: `Contact form from ${latest.name ?? "Unknown"}`,
              time: getRelativeTime(latest.createdAt),
            });
          }
        }

        if (jobsRes.status === "fulfilled") {
          const jobsData = jobsRes.value?.data ?? [];
          if (jobsData.length > 0) {
            const latest = jobsData[jobsData.length - 1];
            activity.push({
              label: `Job application from ${latest.name ?? "Unknown"}`,
              time: getRelativeTime(latest.createdAt),
            });
          }
        }

        if (talentRes.status === "fulfilled") {
          const talentData = talentRes.value?.data ?? [];
          if (talentData.length > 0) {
            const latest = talentData[talentData.length - 1];
            activity.push({
              label: `Talent Pool entry from ${latest.name ?? "Unknown"}`,
              time: getRelativeTime(latest.createdAt),
            });
          }
        }

        if (activity.length === 0) {
          activity.push({ label: "No recent activity yet", time: "" });
        }

        setRecentActivity(activity);
      } catch (err) {
        console.error("Failed to load dashboard stats", err);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold">Welcome back, {user?.name}!</h2>
        <p className="text-gray-400 mt-1">Here is what's happening today.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          label="Total Users"
          value={stats.users}
          icon={Users}
          color="bg-blue-500"
          loading={loading}
        />
        <StatCard
          label="Job Applications"
          value={stats.jobs}
          icon={Briefcase}
          color="bg-purple-500"
          loading={loading}
        />
        <StatCard
          label="Blog Posts"
          value={stats.blogs}
          icon={BookOpen}
          color="bg-green-500"
          loading={loading}
        />
        <StatCard
          label="Messages"
          value={stats.messages}
          icon={Mail}
          color="bg-orange-500"
          loading={loading}
        />
        <StatCard
          label="Talent Pool"
          value={stats.talentPool}
          icon={Briefcase}
          color="bg-blue-600"
          loading={loading}
        />
      </div>

      <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-[#16161a] p-8 rounded-2xl border border-white/5">
          <h3 className="text-xl font-bold mb-6">Recent Activity</h3>
          <div className="space-y-4">
            {loading
              ? [1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between p-4 bg-white/5 rounded-xl animate-pulse"
                  >
                    <div className="h-4 w-48 bg-white/10 rounded" />
                    <div className="h-3 w-12 bg-white/10 rounded" />
                  </div>
                ))
              : recentActivity.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between p-4 bg-white/5 rounded-xl"
                  >
                    <span className="text-sm">{item.label}</span>
                    {item.time && (
                      <span className="text-xs text-gray-500">{item.time}</span>
                    )}
                  </div>
                ))}
          </div>
        </div>

        <div className="bg-[#16161a] p-8 rounded-2xl border border-white/5">
          <h3 className="text-xl font-bold mb-6">Resources</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-gradient-to-br from-[#453abc]/20 to-transparent border border-[#453abc]/30 rounded-xl">
              <h4 className="font-bold text-[#60c3e3]">Guide</h4>
              <p className="text-xs text-gray-400 mt-1">
                How to manage teams and content.
              </p>
            </div>
            <div className="p-4 bg-gradient-to-br from-[#60c3e3]/20 to-transparent border border-[#60c3e3]/30 rounded-xl">
              <h4 className="font-bold text-[#453abc]">Support</h4>
              <p className="text-xs text-gray-400 mt-1">
                Contact technical administration.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
