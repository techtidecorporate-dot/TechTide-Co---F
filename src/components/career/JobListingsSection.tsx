import { ArrowUpRight, Briefcase, Clock, DollarSign, MapPin, Zap } from "lucide-react";
import { motion } from "framer-motion";
import type { JobPosition } from "@/api";

interface JobListingsSectionProps {
  jobs: JobPosition[];
  departments: string[];
  selectedDepartment: string;
  onDepartmentChange: (dept: string) => void;
  onApply: (position: JobPosition) => void;
  loading: boolean;
}

export function JobListingsSection({
  jobs,
  departments,
  selectedDepartment,
  onDepartmentChange,
  onApply,
  loading,
}: JobListingsSectionProps) {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-8 pb-32">
      <div className="mb-12">
        <h2 className="text-3xl font-poppins font-medium text-[#191a23] mb-8 text-center md:text-left">
          Latest Opportunities
        </h2>

        {jobs.length > 0 && (
          <div className="flex items-center gap-2 overflow-x-auto pb-4 no-scrollbar">
            {departments.map((dept) => (
              <button
                key={dept}
                onClick={() => onDepartmentChange(dept)}
                className={`px-6 py-3 rounded-2xl font-poppins text-xs md:text-sm font-medium transition-all whitespace-nowrap ${
                  selectedDepartment === dept
                    ? "bg-[#191a23] text-white shadow-xl"
                    : "bg-white text-[#6b7280] hover:bg-[#f8f9fa] border border-gray-100"
                }`}
              >
                {dept}
              </button>
            ))}
          </div>
        )}
      </div>

      {loading ? (
        <div className="text-center py-20">
          <div className="inline-block w-12 h-12 border-4 border-[#453abc]/20 border-t-[#453abc] rounded-full animate-spin" />
          <p className="mt-4 text-gray-500">Loading positions...</p>
        </div>
      ) : jobs.length === 0 ? (
        <div className="text-center py-20">
          <Briefcase className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-2xl font-poppins font-medium text-[#191a23] mb-2">
            No Current Positions Available
          </h3>
          <p className="text-gray-500">
            We don't have any open positions at the moment. Check back soon!
          </p>
        </div>
      ) : (
        <div className="space-y-5 md:space-y-6">
          {jobs.map((job) => (
            <motion.article
              key={job.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              className="bg-white rounded-2xl border border-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_60px_rgba(69,58,188,0.1)] hover:border-[#453abc]/15 transition-all duration-400 overflow-hidden group"
            >
              <div className="h-1 w-full bg-gradient-to-r from-[#453abc] to-[#60c3e3]" />

              <div className="p-6 md:p-8 lg:p-10">
                <div className="flex flex-col sm:flex-row sm:items-start gap-4 mb-5">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#453abc] to-[#60c3e3] flex items-center justify-center text-white flex-shrink-0 shadow-md">
                    <Briefcase className="w-5 h-5" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg md:text-xl lg:text-2xl font-poppins font-semibold text-[#191a23] group-hover:text-[#453abc] transition-colors leading-snug mb-2">
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-2.5 py-1 rounded-md bg-[#453abc]/8 text-[#453abc] text-[10px] font-bold uppercase tracking-wider">
                        {job.department}
                      </span>
                      <span className="flex items-center gap-1 text-[11px] text-[#6b7280] font-medium bg-gray-50 px-2.5 py-1 rounded-md">
                        <MapPin className="w-3 h-3" />
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1 text-[11px] text-[#6b7280] font-medium bg-gray-50 px-2.5 py-1 rounded-md">
                        <Clock className="w-3 h-3" />
                        {job.type}
                      </span>
                      {job.salary && (
                        <span className="flex items-center gap-1 text-[11px] text-emerald-700 font-semibold bg-emerald-50 px-2.5 py-1 rounded-md">
                          <DollarSign className="w-3 h-3" />
                          {job.salary}
                        </span>
                      )}
                    </div>
                  </div>

                  <button
                    onClick={() => onApply(job)}
                    className="hidden sm:flex items-center gap-2 flex-shrink-0 bg-[#191a23] text-white text-sm font-poppins font-medium px-5 py-2.5 rounded-xl hover:bg-[#453abc] hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
                  >
                    Apply Now
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>

                <p className="text-[#6b7280] text-sm md:text-[15px] leading-relaxed mb-5">
                  {job.description}
                </p>

                {job.responsibilities && job.responsibilities.length > 0 && (
                  <div className="mb-5">
                    <div className="border-t border-gray-100 mb-4" />
                    <p className="text-[10px] font-bold uppercase tracking-widest text-[#6b7280] mb-3">
                      Key Responsibilities
                    </p>
                    <ol className="space-y-2">
                      {job.responsibilities.map((resp, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-br from-[#453abc] to-[#60c3e3] text-white text-[10px] font-bold flex items-center justify-center mt-0.5">
                            {idx + 1}
                          </span>
                          <span className="text-[#374151] text-sm leading-relaxed">
                            {resp}
                          </span>
                        </li>
                      ))}
                    </ol>
                  </div>
                )}

                {job.requirements && job.requirements.length > 0 && (
                  <>
                    <div className="border-t border-gray-100 mb-4" />
                    <p className="text-[10px] font-bold uppercase tracking-widest text-[#6b7280] mb-3">
                      Key Requirements
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {job.requirements.map((req, idx) => (
                        <span
                          key={idx}
                          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#f4f3ff] text-[#453abc] text-xs font-medium"
                        >
                          <Zap className="w-3 h-3 flex-shrink-0" />
                          {req}
                        </span>
                      ))}
                    </div>
                  </>
                )}

                <button
                  onClick={() => onApply(job)}
                  className="sm:hidden mt-5 w-full flex items-center justify-center gap-2 bg-[#191a23] text-white text-sm font-poppins font-medium px-5 py-3 rounded-xl hover:bg-[#453abc] transition-all duration-300"
                >
                  Apply Now
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      )}
    </div>
  );
}
