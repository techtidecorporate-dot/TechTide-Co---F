import { useState, useEffect } from "react";
import { strategyCallAPI } from "@/api";
import { Search, Mail, Phone, Trash2, CheckCircle, Clock } from "lucide-react";
import { toast } from "sonner";

export default function StrategyCallSubmissions() {
  const [calls, setCalls] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchCalls();
  }, []);

  const fetchCalls = async () => {
    try {
      const { data } = await strategyCallAPI.getAll();
      setCalls(data);
    } catch (error) {
      toast.error("Failed to fetch strategy calls");
    } finally {
      setLoading(false);
    }
  };

  const handleStatusUpdate = async (id: string, status: string) => {
    try {
      await strategyCallAPI.updateStatus(id, status);
      toast.success(`Call marked as ${status}`);
      fetchCalls();
    } catch (error) {
      toast.error("Status update failed");
    }
  };

  const handleDelete = async (id: string) => {
    if (window.confirm("Are you sure you want to delete this call request?")) {
      try {
        await strategyCallAPI.delete(id);
        toast.success("Request removed");
        fetchCalls();
      } catch (error) {
        toast.error("Delete failed");
      }
    }
  };

  const filteredCalls = calls.filter(c => 
    c.fullName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.phone?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold">Strategy Calls</h2>
        <p className="text-gray-400">Consultation requests from potential clients.</p>
      </div>

      <div className="relative">
        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"><Search size={20} /></span>
        <input type="text" placeholder="Search by name, email or phone..." className="w-full pl-12 pr-4 py-3 bg-[#16161a] border border-white/5 rounded-xl focus:ring-2 focus:ring-[#453abc]/50" 
          value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
      </div>

      <div className="grid grid-cols-1 gap-6">
        {loading ? (
          <div className="p-12 text-center text-gray-500">Loading...</div>
        ) : filteredCalls.length === 0 ? (
          <div className="p-12 text-center text-gray-500">No calls found</div>
        ) : (
          filteredCalls.map((call) => (
            <div key={call.id} className="bg-[#16161a] border border-white/5 rounded-2xl p-6 shadow-xl space-y-4">
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#453abc] to-[#60c3e3] flex items-center justify-center font-bold">{call.fullName?.[0]}</div>
                  <div>
                    <h3 className="font-bold text-lg">{call.fullName}</h3>
                    <div className="flex items-center gap-4 text-xs text-gray-400">
                      <span className="flex items-center gap-1"><Mail size={12} /> {call.email}</span>
                      <span className="flex items-center gap-1"><Phone size={12} /> {call.phone}</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xs text-gray-500">{new Date(call.createdAt).toLocaleDateString()}</p>
                  <span className={`text-[10px] px-2 py-1 rounded uppercase font-bold mt-2 inline-block ${call.status === 'pending' ? 'bg-yellow-500/20 text-yellow-500' : 'bg-green-500/20 text-green-500'}`}>
                    {call.status}
                  </span>
                </div>
              </div>

              <div className="bg-white/5 p-4 rounded-xl">
                 <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">Goals / Notes</p>
                 <p className="text-gray-300 text-sm leading-relaxed">{call.goals || "No notes provided."}</p>
              </div>

              <div className="flex justify-end gap-2">
                <button onClick={() => handleStatusUpdate(call.id, 'scheduled')} className="p-2 hover:bg-yellow-500/10 rounded-lg text-yellow-500" title="Mark as Scheduled"><Clock size={18} /></button>
                <button onClick={() => handleStatusUpdate(call.id, 'completed')} className="p-2 hover:bg-green-500/10 rounded-lg text-green-500" title="Mark as Completed"><CheckCircle size={18} /></button>
                <div className="w-[1px] h-6 bg-white/10 mx-1"></div>
                <button onClick={() => handleDelete(call.id)} className="p-2 hover:bg-red-500/10 rounded-lg text-gray-500 hover:text-red-500"><Trash2 size={18} /></button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
