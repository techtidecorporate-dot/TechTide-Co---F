import { useState, useEffect } from "react";
import { getAllSubscribers, unsubscribeSubscriber } from "@/app/utils/newsletterStorage";
import { Mail, Trash2, Search, Download, Calendar, UserCheck } from "lucide-react";
import { toast } from "sonner";
import type { Subscriber } from "@/types";

export default function SubscribersManagement() {
  const [subscribers, setSubscribers] = useState<Subscriber[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  const fetchSubscribers = async () => {
    try {
      setLoading(true);
      const data = await getAllSubscribers();
      // Sort by date (latest first)
      const sortedData = data.sort((a, b) => {
        return new Date(b.subscribedAt || 0).getTime() - new Date(a.subscribedAt || 0).getTime();
      });
      setSubscribers(sortedData);
    } catch (error) {
      toast.error("Failed to fetch subscribers");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSubscribers();
  }, []);

  const handleDelete = async (email: string) => {
    if (!window.confirm(`Are you sure you want to remove ${email} from the mailing list?`)) {
      return;
    }

    try {
      await unsubscribeSubscriber(email);
      toast.success("Subscriber removed successfully");
      setSubscribers(prev => prev.filter(s => s.email !== email));
    } catch (error) {
      toast.error("Failed to remove subscriber");
    }
  };

  const filteredSubscribers = subscribers.filter(s => 
    s.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const exportToCSV = () => {
    const headers = ["Email", "Subscription Date"];
    const rows = filteredSubscribers.map(s => [
      s.email,
      new Date(s.subscribedAt || "").toLocaleString()
    ]);

    const csvContent = [
      headers.join(","),
      ...rows.map(row => row.join(","))
    ].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", `subscribers_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Newsletter Subscribers</h1>
          <p className="text-gray-400">Manage your mailing list and export data.</p>
        </div>
        <button
          onClick={exportToCSV}
          className="flex items-center gap-2 bg-[#453abc] hover:bg-[#5a4fee] text-white px-6 py-3 rounded-xl transition-all shadow-lg shadow-[#453abc]/20 font-medium w-fit"
        >
          <Download size={20} />
          Export CSV
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-[#453abc]/20 rounded-xl flex items-center justify-center text-[#453abc]">
              <Mail size={24} />
            </div>
            <div>
              <p className="text-gray-400 text-sm uppercase tracking-widest font-bold">Total Subscribers</p>
              <h2 className="text-3xl font-bold text-white mt-1">{subscribers.length}</h2>
            </div>
          </div>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center text-green-500">
              <UserCheck size={24} />
            </div>
            <div>
              <p className="text-gray-400 text-sm uppercase tracking-widest font-bold">Active List</p>
              <h2 className="text-3xl font-bold text-white mt-1">100%</h2>
            </div>
          </div>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center text-blue-500">
              <Calendar size={24} />
            </div>
            <div>
              <p className="text-gray-400 text-sm uppercase tracking-widest font-bold">New This Month</p>
              <h2 className="text-3xl font-bold text-white mt-1">
                {subscribers.filter(s => {
                  const subDate = new Date(s.subscribedAt || "");
                  const now = new Date();
                  return subDate.getMonth() === now.getMonth() && subDate.getFullYear() === now.getFullYear();
                }).length}
              </h2>
            </div>
          </div>
        </div>
      </div>

      {/* Main Container */}
      <div className="bg-white/5 border border-white/10 rounded-[2rem] overflow-hidden backdrop-blur-xl">
        {/* Search Bar */}
        <div className="p-6 border-b border-white/10 bg-white/5 flex items-center gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
            <input
              type="text"
              placeholder="Search by email..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#0a0a0c] border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none focus:ring-2 focus:ring-[#453abc]/30 transition-all"
            />
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto no-scrollbar">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-white/5">
                <th className="px-8 py-5 text-gray-400 font-bold uppercase tracking-widest text-[11px]">Subscriber Email</th>
                <th className="px-8 py-5 text-gray-400 font-bold uppercase tracking-widest text-[11px]">Joined Date</th>
                <th className="px-8 py-5 text-gray-400 font-bold uppercase tracking-widest text-[11px] text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {loading ? (
                Array.from({ length: 5 }).map((_, idx) => (
                  <tr key={idx} className="animate-pulse">
                    <td className="px-8 py-6"><div className="h-4 bg-white/10 rounded w-48"></div></td>
                    <td className="px-8 py-6"><div className="h-4 bg-white/10 rounded w-32"></div></td>
                    <td className="px-8 py-6"><div className="h-4 bg-white/10 rounded w-8 ml-auto"></div></td>
                  </tr>
                ))
              ) : filteredSubscribers.length > 0 ? (
                filteredSubscribers.map((subscriber) => (
                  <tr key={subscriber.id} className="hover:bg-white/5 transition-colors group">
                    <td className="px-8 py-6">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#453abc] to-[#60c3e3] flex items-center justify-center text-xs font-bold text-white">
                          {subscriber.email[0].toUpperCase()}
                        </div>
                        <span className="text-white font-medium">{subscriber.email}</span>
                      </div>
                    </td>
                    <td className="px-8 py-6 text-gray-400">
                      {new Date(subscriber.subscribedAt || "").toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric"
                      })}
                    </td>
                    <td className="px-8 py-6 text-right">
                      <button
                        onClick={() => handleDelete(subscriber.email)}
                        className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-500/10 rounded-lg transition-all"
                        title="Remove Subscriber"
                      >
                        <Trash2 size={18} />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={3} className="px-8 py-20 text-center text-gray-500">
                    <Mail size={48} className="mx-auto mb-4 opacity-20" />
                    <p className="text-xl font-medium">No subscribers found</p>
                    <p className="text-sm mt-1">Try adjusting your search or check back later.</p>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
