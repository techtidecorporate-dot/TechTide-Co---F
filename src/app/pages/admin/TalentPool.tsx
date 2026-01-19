import { useState, useEffect } from "react";
import { talentPoolAPI } from "@/api";
import {
  CheckCircle,
  XCircle,
  Clock,
  Trash2,
  Search,
  Mail,
  Phone,
  User,
  Eye,
  X,
  Target,
} from "lucide-react";
import { toast } from "sonner";

export default function TalentPool() {
  const [submissions, setSubmissions] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedResume, setSelectedResume] = useState<string | null>(null);

  useEffect(() => {
    fetchSubmissions();
  }, []);

  const fetchSubmissions = async () => {
    try {
      const { data } = await talentPoolAPI.getAll();
      setSubmissions(data);
    } catch (error) {
      toast.error("Failed to fetch talent pool");
    } finally {
      setLoading(false);
    }
  };

  const getFileUrl = (path: string | undefined) => {
    if (!path) return "";
    if (path.startsWith("http") || path.startsWith("data:")) return path;
    return `http://localhost:5000${path}`;
  };

  const handleStatusUpdate = async (id: string, status: string) => {
    try {
      await talentPoolAPI.updateStatus(id, status);
      toast.success(`Submission marked as ${status}`);
      fetchSubmissions();
    } catch (error) {
      toast.error("Status update failed");
    }
  };

  const handleDelete = async (id: string) => {
    if (window.confirm("Are you sure you want to delete this submission?")) {
      try {
        await talentPoolAPI.delete(id);
        toast.success("Submission removed");
        fetchSubmissions();
      } catch (error) {
        toast.error("Delete failed");
      }
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "reviewed":
        return "text-blue-400 bg-blue-500/10";
      case "contacted":
        return "text-green-400 bg-green-500/10";
      case "rejected":
        return "text-red-400 bg-red-500/10";
      default:
        return "text-orange-400 bg-orange-500/10";
    }
  };

  const filteredSubmissions = submissions.filter(
    (s) =>
      s.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.areaOfInterest?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.email?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold">Talent Pool</h2>
          <p className="text-gray-400 text-lg">
            Manage speculative applications and future talent.
          </p>
        </div>
      </div>

      <div className="relative">
        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
          <Search size={20} />
        </span>
        <input
          type="text"
          placeholder="Search by name, email or area of interest..."
          className="w-full pl-12 pr-4 py-4 bg-[#16161a] border border-white/5 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#453abc]/50 text-white"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 gap-4">
        {loading ? (
          <div className="p-12 text-center text-gray-500">
            <div className="animate-spin w-8 h-8 border-4 border-[#453abc] border-t-transparent rounded-full mx-auto mb-4"></div>
            Loading talent pool...
          </div>
        ) : filteredSubmissions.length === 0 ? (
          <div className="p-12 text-center text-gray-500 bg-[#16161a] border border-white/5 rounded-2xl">
            No submissions found in talent pool
          </div>
        ) : (
          filteredSubmissions.map((sub) => (
            <div
              key={sub.id}
              className="bg-[#16161a] border border-white/5 rounded-2xl p-6 shadow-xl hover:border-white/10 transition-all group"
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#453abc] to-[#60c3e3] flex items-center justify-center font-bold text-xl shadow-lg shadow-[#453abc]/20 transform group-hover:scale-110 transition-transform">
                    {sub.name?.[0] || "?"}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <h3 className="text-xl font-bold text-white">
                        {sub.name}
                      </h3>
                      <span className="px-3 py-1 bg-[#453abc]/10 text-[#453abc] text-xs font-bold rounded-lg flex items-center gap-1">
                        <Target size={12} /> {sub.areaOfInterest}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-4 mt-2 text-sm text-gray-400">
                      <span className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer">
                        <Mail size={14} /> {sub.email}
                      </span>
                      <span className="flex items-center gap-1.5 hover:text-white transition-colors">
                        <Phone size={14} /> {sub.phone}
                      </span>
                    </div>

                    {sub.coverLetter && (
                      <div className="mt-4 p-4 bg-white/[0.03] rounded-xl border border-white/5 group-hover:bg-white/[0.05] transition-all">
                        <p className="text-[10px] uppercase tracking-widest text-[#453abc] font-bold mb-2">
                          Cover Letter
                        </p>
                        <p className="text-sm text-gray-300 leading-relaxed italic">
                          "{sub.coverLetter}"
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4">
                  <span
                    className={`px-5 py-2 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] shadow-sm ${getStatusColor(
                      sub.status
                    )}`}
                  >
                    {sub.status || "pending"}
                  </span>

                  <div className="flex items-center gap-2 bg-white/5 p-1.5 rounded-xl border border-white/5">
                    <button
                      onClick={() => handleStatusUpdate(sub.id, "reviewed")}
                      className="p-2.5 hover:bg-blue-500/20 rounded-lg text-blue-400 transition-all group/btn"
                      title="Mark as Reviewed"
                    >
                      <Clock
                        size={20}
                        className="group-hover/btn:scale-110 transition-transform"
                      />
                    </button>
                    <button
                      onClick={() => handleStatusUpdate(sub.id, "contacted")}
                      className="p-2.5 hover:bg-green-500/20 rounded-lg text-green-400 transition-all group/btn"
                      title="Mark as Contacted"
                    >
                      <CheckCircle
                        size={20}
                        className="group-hover/btn:scale-110 transition-transform"
                      />
                    </button>
                    <button
                      onClick={() => handleStatusUpdate(sub.id, "rejected")}
                      className="p-2.5 hover:bg-red-500/20 rounded-lg text-red-400 transition-all group/btn"
                      title="Mark as Rejected"
                    >
                      <XCircle
                        size={20}
                        className="group-hover/btn:scale-110 transition-transform"
                      />
                    </button>
                    <div className="w-[1px] h-6 bg-white/10 mx-1"></div>
                    <button
                      onClick={() => handleDelete(sub.id)}
                      className="p-2.5 hover:bg-red-500/10 rounded-lg text-gray-500 hover:text-red-500 transition-all group/btn"
                      title="Delete"
                    >
                      <Trash2
                        size={20}
                        className="group-hover/btn:scale-110 transition-transform"
                      />
                    </button>
                  </div>

                  {(sub.resumeLink || sub.resume) && (
                    <button
                      onClick={() =>
                        setSelectedResume(
                          getFileUrl(sub.resumeLink || sub.resume)
                        )
                      }
                      className="flex items-center gap-2 bg-[#453abc] hover:bg-[#3a2f9e] px-6 py-3 rounded-xl text-sm font-bold text-white transition-all shadow-lg shadow-[#453abc]/20 hover:shadow-[#453abc]/40 active:scale-95"
                    >
                      <Eye size={18} />
                      View CV
                    </button>
                  )}
                </div>
              </div>
              <div className="mt-5 pt-4 border-t border-white/5 flex items-center justify-between text-[10px] text-gray-500 font-medium">
                <span className="flex items-center gap-2 italic">
                  Submitted via Talent Pool
                </span>
                <span>
                  {new Date(sub.createdAt).toLocaleDateString()} at{" "}
                  {new Date(sub.createdAt).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </span>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Resume Viewer Modal */}
      {selectedResume && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/95 backdrop-blur-md">
          <div className="bg-[#16161a] border border-white/10 w-full max-w-6xl h-[90vh] rounded-3xl flex flex-col shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
            <div className="p-6 flex items-center justify-between border-b border-white/10 bg-[#16161a]">
              <div>
                <h3 className="text-2xl font-bold text-white">
                  Resume Preview
                </h3>
                <p className="text-sm text-gray-400 mt-1">
                  Viewing application document
                </p>
              </div>
              <button
                onClick={() => setSelectedResume(null)}
                className="p-3 hover:bg-white/10 rounded-2xl transition-all hover:rotate-90"
              >
                <X size={28} className="text-gray-400" />
              </button>
            </div>

            <div className="flex-1 bg-white relative">
              <iframe
                src={selectedResume}
                className="w-full h-full"
                title="Resume PDF"
              />
            </div>

            <div className="p-4 bg-[#1c1c21] text-center">
              <p className="text-xs text-gray-500 font-medium tracking-widest uppercase">
                Document securely stored in TechTide Realtime Database
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
