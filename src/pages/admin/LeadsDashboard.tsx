import { useEffect, useState } from "react";
import { ref, get } from "firebase/database";
import { database } from "@/firebase/config";
import SEO from "@/components/ui/SEO";

interface LeadRecord {
  id: string;
  visitorId: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
  timestamp: number;
}

interface ConsentRecord {
  id: string;
  visitorId: string;
  consentStatus: string;
  timestamp: number;
}

interface VisitRecord {
  id: string;
  visitorId: string;
  pageUrl: string;
  timestamp: number;
}

interface ScoreRecord {
  visitorId: string;
  score: number;
  updatedAt: number;
}

interface MergedLead {
  visitorId: string;
  lead?: LeadRecord;
  consent?: ConsentRecord;
  visits: string[];
  visitCount: number;
  score: number;
  hasForm: boolean;
  lastActive: number;
}

type FilterMode = "score" | "recent" | "leads" | "accepted";

export default function LeadsDashboard() {
  const [allLeads, setAllLeads] = useState<MergedLead[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<FilterMode>("score");

  useEffect(() => {
    loadData();
  }, []);

  async function loadData() {
    setLoading(true);
    try {
      const [leadSnap, consentSnap, visitSnap, scoreSnap] = await Promise.all([
        get(ref(database, "leads")),
        get(ref(database, "cookie_consents")),
        get(ref(database, "page_visits")),
        get(ref(database, "lead_scores")),
      ]);

      const leadsMap: Record<string, LeadRecord> = {};
      const consentMap: Record<string, ConsentRecord> = {};
      const visitsMap: Record<string, VisitRecord[]> = {};
      const scoresMap: Record<string, number> = {};

      if (leadSnap.exists()) {
        Object.entries(leadSnap.val() as Record<string, Omit<LeadRecord, "id">>).forEach(([id, v]) => {
          leadsMap[v.visitorId] = { id, ...v };
        });
      }

      if (consentSnap.exists()) {
        Object.entries(consentSnap.val() as Record<string, Omit<ConsentRecord, "id">>).forEach(([id, v]) => {
          if (!consentMap[v.visitorId]) consentMap[v.visitorId] = { id, ...v };
        });
      }

      if (visitSnap.exists()) {
        Object.entries(visitSnap.val() as Record<string, Omit<VisitRecord, "id">>).forEach(([id, v]) => {
          if (!visitsMap[v.visitorId]) visitsMap[v.visitorId] = [];
          visitsMap[v.visitorId].push({ id, ...v });
        });
      }

      if (scoreSnap.exists()) {
        Object.entries(scoreSnap.val() as Record<string, ScoreRecord>).forEach(([visitorId, v]) => {
          scoresMap[visitorId] = v.score;
        });
      }

      const allVisitorIds = new Set([
        ...Object.keys(leadsMap),
        ...Object.keys(consentMap),
        ...Object.keys(visitsMap),
        ...Object.keys(scoresMap),
      ]);

      const merged: MergedLead[] = Array.from(allVisitorIds)
        .map((visitorId) => {
          const visits = visitsMap[visitorId] || [];
          const sortedVisits = visits.sort(
            (a, b) => (b.timestamp || 0) - (a.timestamp || 0),
          );
          return {
            visitorId,
            lead: leadsMap[visitorId],
            consent: consentMap[visitorId],
            visits: sortedVisits.map((v) => v.pageUrl),
            visitCount: visits.length,
            score: scoresMap[visitorId] ?? 0,
            hasForm: !!leadsMap[visitorId],
            lastActive: sortedVisits[0]?.timestamp || consentMap[visitorId]?.timestamp || 0,
          };
        })
        .filter((item) => {
          if (item.consent?.consentStatus === "rejected") return false;
          return true;
        });

      setAllLeads(merged);
    } catch (err) {
      console.error("Failed to load lead data:", err);
    } finally {
      setLoading(false);
    }
  }

  const filtered = [...allLeads]
    .filter((l) => {
      if (filter === "accepted") return l.consent?.consentStatus === "accepted";
      if (filter === "leads") return l.hasForm;
      return true;
    })
    .sort((a, b) => {
      if (filter === "recent") return b.lastActive - a.lastActive;
      return b.score - a.score;
    });

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="w-8 h-8 border-4 border-[#453abc] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <>
      <SEO title="Leads Dashboard" noindex nofollow />
      <div>
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-white">Lead Tracking</h1>
            <p className="text-gray-400 text-sm mt-1">
              {filtered.length} visitor{filtered.length !== 1 && "s"}
            </p>
          </div>

          <div className="flex gap-2">
            {(["score", "recent", "leads", "accepted"] as FilterMode[]).map((mode) => (
              <button
                key={mode}
                onClick={() => setFilter(mode)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors ${filter === mode
                    ? "bg-[#453abc] text-white"
                    : "bg-white/5 text-gray-400 hover:bg-white/10"
                  }`}
              >
                {mode === "score"
                  ? "Highest Lead Score"
                  : mode === "recent"
                    ? "Recent Visitors"
                    : mode === "leads"
                      ? "Leads Only"
                      : "Accepted Consent"}
              </button>
            ))}
          </div>
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-20 text-gray-500">
            <p className="text-lg">No lead data yet.</p>
            <p className="text-sm mt-1">Data will appear once visitors interact with the site.</p>
          </div>
        ) : (
          <div className="grid gap-4">
            {filtered.map((item) => (
              <div
                key={item.visitorId}
                className="bg-[#16161a] border border-white/5 rounded-2xl p-6"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="text-white font-semibold truncate max-w-[300px]">
                        {item.lead?.name || "Anonymous Visitor"}
                      </h3>
                      <span
                        className={`text-xs px-2 py-0.5 rounded-full font-medium ${item.consent?.consentStatus === "accepted"
                            ? "bg-green-500/20 text-green-400"
                            : "bg-gray-500/20 text-gray-400"
                          }`}
                      >
                        {item.consent?.consentStatus || "No Response"}
                      </span>
                    </div>
                    <p className="text-gray-500 text-xs font-mono truncate max-w-[300px]">
                      {item.visitorId}
                    </p>
                  </div>

                  <div className="text-right">
                    <p className="text-2xl font-bold text-[#60c3e3]">
                      {item.score}
                    </p>
                    <p className="text-xs text-gray-500">Lead Score</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                  {item.lead && (
                    <>
                      <div>
                        <p className="text-xs text-gray-500 mb-0.5">Email</p>
                        <p className="text-sm text-gray-300 truncate">
                          {item.lead.email}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 mb-0.5">Phone</p>
                        <p className="text-sm text-gray-300">{item.lead.phone}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 mb-0.5">Company</p>
                        <p className="text-sm text-gray-300">
                          {item.lead.company}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 mb-0.5">Visits</p>
                        <p className="text-sm text-gray-300">
                          {item.visitCount} page{item.visitCount !== 1 && "s"}
                        </p>
                      </div>
                    </>
                  )}
                  {!item.lead && (
                    <div className="col-span-4">
                      <p className="text-xs text-gray-500 mb-0.5">Pages Visited</p>
                      <p className="text-sm text-gray-300">
                        {item.visitCount} page{item.visitCount !== 1 && "s"}
                      </p>
                    </div>
                  )}
                </div>

                {item.visits.length > 0 && (
                  <div>
                    <p className="text-xs text-gray-500 mb-1.5">Pages Visited</p>
                    <div className="flex flex-wrap gap-1.5">
                      {[...new Set(item.visits)].slice(0, 10).map((url) => (
                        <span
                          key={url}
                          className="text-xs bg-white/5 text-gray-400 px-2 py-1 rounded-md"
                        >
                          {url || "/"}
                        </span>
                      ))}
                      {[...new Set(item.visits)].length > 10 && (
                        <span className="text-xs text-gray-600 px-2 py-1">
                          +{[...new Set(item.visits)].length - 10} more
                        </span>
                      )}
                    </div>
                  </div>
                )}

                {item.lead?.message && (
                  <div className="mt-4 pt-4 border-t border-white/5">
                    <p className="text-xs text-gray-500 mb-1">Message</p>
                    <p className="text-sm text-gray-400 line-clamp-2">
                      {item.lead.message}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
