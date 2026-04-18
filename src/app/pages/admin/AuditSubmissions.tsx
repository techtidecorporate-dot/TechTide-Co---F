import { useState, useEffect } from "react";
import { auditAPI } from "@/api";
import { Search, Mail, Building, Globe, Trash2, CheckCircle, Clock } from "lucide-react";
import { toast } from "sonner";

export default function AuditSubmissions() {
  const [audits, setAudits] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchAudits();
  }, []);

  const fetchAudits = async () => {
    try {
      const { data } = await auditAPI.getAll();
      setAudits(data);
    } catch (error) {
      toast.error("Failed to fetch audits");
    } finally {
      setLoading(false);
    }
  };

  const handleStatusUpdate = async (id: string, status: string) => {
    try {
      await auditAPI.updateStatus(id, status);
      toast.success(`Audit marked as ${status}`);
      fetchAudits();
    } catch (error) {
      toast.error("Status update failed");
    }
  };

  const handleDelete = async (id: string) => {
    if (window.confirm("Are you sure you want to delete this audit request?")) {
      try {
        await auditAPI.delete(id);
        toast.success("Audit removed");
        fetchAudits();
      } catch (error) {
        toast.error("Delete failed");
      }
    }
  };

  const filteredAudits = audits.filter(a => 
    a.companyName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    a.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    a.websiteLink?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold">Website Audits</h2>
        <p className="text-gray-400">Requests for free website analysis.</p>
      </div>

      <div className="relative">
        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"><Search size={20} /></span>
        <input type="text" placeholder="Search by company, email or link..." className="w-full pl-12 pr-4 py-3 bg-[#16161a] border border-white/5 rounded-xl focus:ring-2 focus:ring-[#453abc]/50" 
          value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
      </div>

      <div className="grid grid-cols-1 gap-4">
        {loading ? (
          <div className="p-12 text-center text-gray-500">Loading...</div>
        ) : filteredAudits.length === 0 ? (
          <div className="p-12 text-center text-gray-500">No audits found</div>
        ) : (
          filteredAudits.map((audit) => (
            <div key={audit.id} className="bg-[#16161a] border border-white/5 rounded-2xl p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div className="flex-1 space-y-2">
                <div className="flex items-center gap-3">
                   <div className="w-10 h-10 rounded-xl bg-[#453abc]/20 flex items-center justify-center text-[#60c3e3]"><Building size={20} /></div>
                   <div>
                      <h3 className="font-bold text-lg">{audit.companyName}</h3>
                      <div className="flex items-center gap-4 text-xs text-gray-400">
                        <span className="flex items-center gap-1"><Mail size={12} /> {audit.email}</span>
                        <a href={audit.websiteLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-[#60c3e3] hover:underline">
                          <Globe size={12} /> Visit Site
                        </a>
                      </div>
                   </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className={`text-[10px] px-2 py-1 rounded uppercase font-bold ${audit.status === 'new' ? 'bg-[#453abc] text-white' : 'bg-green-500/20 text-green-500'}`}>
                  {audit.status}
                </div>
                <div className="flex items-center gap-2">
                   <button onClick={() => handleStatusUpdate(audit.id, 'completed')} className="p-2 hover:bg-green-500/10 rounded-lg text-green-500"><CheckCircle size={18} /></button>
                   <button onClick={() => handleDelete(audit.id)} className="p-2 hover:bg-red-500/10 rounded-lg text-gray-500 hover:text-red-500"><Trash2 size={18} /></button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
