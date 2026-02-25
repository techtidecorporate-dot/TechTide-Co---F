import {
  ArrowUpRight,
  Briefcase,
  Clock,
  DollarSign,
  MapPin,
  MapPinned,
  Users,
  Zap,
} from "lucide-react";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { jobPositionAPI, JobPosition } from "@/api";
import { JobApplicationForm } from "../components/career/JobApplicationForm";
import { toast } from "sonner";
import SEO from "../components/ui/SEO";

export default function CareersPage() {
  const [selectedDepartment, setSelectedDepartment] = useState("All");
  const [jobListings, setJobListings] = useState<JobPosition[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedPosition, setSelectedPosition] = useState<JobPosition | null>(
    null,
  );
  const [isApplicationFormOpen, setIsApplicationFormOpen] = useState(false);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const { data } = await jobPositionAPI.getActive();
      setJobListings(data);
    } catch (error) {
      console.error("Career Page fetchJobs error:", error);
    } finally {
      setLoading(false);
    }
  };

  const departments = [
    "All",
    ...Array.from(new Set(jobListings.map((job) => job.department))),
  ];

  const filteredJobs =
    selectedDepartment === "All"
      ? jobListings
      : jobListings.filter((job) => job.department === selectedDepartment);

  const handleApplyClick = (position: JobPosition) => {
    setSelectedPosition(position);
    setIsApplicationFormOpen(true);
  };

  const benefits = [
    {
      icon: <MapPinned className="w-6 h-6" />,
      title: "Remote Work",
      description: "Work from anywhere in the world",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Team Events",
      description: "Regular team building and social events",
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Competitive Salary",
      description: "Industry-leading compensation packages",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f8f9fa] to-[#eef2f7]">
      <SEO
        title="Careers at TechTide"
        description="Join TechTide Corporate LLP and help us build the future of technology. Explore our current job openings and career opportunities."
        keywords="career at TechTide, remote tech jobs, software developer jobs, UI/UX design careers, hiring developers Lahore, join TechTide"
      />
      {/* Hero Section */}
      <div className="relative pt-32 pb-16 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] right-[-10%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[#453abc]/10 rounded-full blur-[80px] md:blur-[120px]" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[#60c3e3]/10 rounded-full blur-[80px] md:blur-[120px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <p className="font-poppins text-transparent bg-clip-text bg-gradient-to-r from-[#453abc] to-[#60c3e3] text-sm font-medium tracking-[0.2em] uppercase mb-4">
              Careers
            </p>
            <h1 className="text-4xl md:text-7xl font-poppins font-medium text-[#191a23] mb-6 leading-tight md:leading-[1.1]">
              Build Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#453abc] to-[#60c3e3]">
                Career
              </span>{" "}
              With Us
            </h1>
            <p className="text-[#6b7280] text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
              Join a mission-driven team dedicated to building the future of
              technology. We're looking for passionate individuals who want to
              make a real impact.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 mt-10 text-[#6b7280]">
              <div className="glass px-6 py-3 rounded-2xl flex items-center gap-3">
                <Briefcase className="w-5 h-5 text-[#453abc]" />
                <span className="font-poppins font-medium text-sm text-[#191a23]">
                  {loading ? "..." : jobListings.length} Position
                  {jobListings.length !== 1 ? "s" : ""}
                </span>
              </div>
              <div className="glass px-6 py-3 rounded-2xl flex items-center gap-3">
                <MapPinned className="w-5 h-5 text-[#453abc]" />
                <span className="font-poppins font-medium text-sm text-[#191a23]">
                  Remote First
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-20">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl lg:text-4xl font-poppins font-medium text-[#191a23] mb-4">
            Why TechTide?
          </h2>
          <p className="text-[#6b7280] text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            We've built an environment where you can grow, learn, and do your
            best work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-[2.5rem] border border-transparent shadow-[0_15px_40px_rgba(0,0,0,0.03)] p-8 md:p-10 hover:shadow-[0_40px_80px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-500 group"
            >
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-[#453abc]/5 flex items-center justify-center text-[#453abc] mb-6 md:mb-8 group-hover:bg-[#453abc] group-hover:text-white transition-all duration-500">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-poppins font-medium text-[#191a23] mb-4">
                {benefit.title}
              </h3>
              <p className="text-[#6b7280] leading-relaxed text-sm">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Job Listings Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 pb-32">
        <div className="mb-12">
          <h2 className="text-3xl font-poppins font-medium text-[#191a23] mb-8 text-center md:text-left">
            Latest Opportunities
          </h2>

          {/* Department Filter */}
          {jobListings.length > 0 && (
            <div className="flex items-center gap-2 overflow-x-auto pb-4 no-scrollbar">
              {departments.map((dept) => (
                <button
                  key={dept}
                  onClick={() => setSelectedDepartment(dept)}
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

        {/* Job Cards */}
        {loading ? (
          <div className="text-center py-20">
            <div className="inline-block w-12 h-12 border-4 border-[#453abc]/20 border-t-[#453abc] rounded-full animate-spin"></div>
            <p className="mt-4 text-gray-500">Loading positions...</p>
          </div>
        ) : filteredJobs.length === 0 ? (
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
            {filteredJobs.map((job) => {
              return (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white rounded-2xl border border-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_60px_rgba(69,58,188,0.1)] hover:border-[#453abc]/15 transition-all duration-400 overflow-hidden group"
                >
                  {/* Top colour bar */}
                  <div className="h-1 w-full bg-gradient-to-r from-[#453abc] to-[#60c3e3]" />

                  <div className="p-6 md:p-8 lg:p-10">
                    {/* Header row */}
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

                      {/* Apply button – top right on desktop */}
                      <button
                        onClick={() => handleApplyClick(job)}
                        className="hidden sm:flex items-center gap-2 flex-shrink-0 bg-[#191a23] text-white text-sm font-poppins font-medium px-5 py-2.5 rounded-xl hover:bg-[#453abc] hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
                      >
                        Apply Now
                        <ArrowUpRight className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Role Overview */}
                    <p className="text-[#6b7280] text-sm md:text-[15px] leading-relaxed mb-5">
                      {job.description}
                    </p>

                    {/* Key Responsibilities – numbered list */}
                    {job.responsibilities &&
                      job.responsibilities.length > 0 && (
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

                    {/* Requirements */}
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

                    {/* Mobile apply button */}
                    <button
                      onClick={() => handleApplyClick(job)}
                      className="sm:hidden mt-5 w-full flex items-center justify-center gap-2 bg-[#191a23] text-white text-sm font-poppins font-medium px-5 py-3 rounded-xl hover:bg-[#453abc] transition-all duration-300"
                    >
                      Apply Now
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>

      {/* Culture Section / CTA */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 pb-24">
        <div className="relative overflow-hidden bg-[#191a23] rounded-[2.5rem] md:rounded-[3.5rem] p-10 md:p-20 text-center">
          <div className="absolute top-[-20%] right-[-10%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-white/5 rounded-full blur-[100px]" />
          <div className="absolute bottom-[-20%] left-[-10%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#60c3e3]/10 rounded-full blur-[100px]" />

          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-poppins font-medium text-white mb-6 md:mb-8 leading-tight">
              Don't See Your <span className="text-[#60c3e3]">Ideal Role</span>?
            </h2>
            <p className="text-white/70 text-base md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed font-inter">
              We're always looking for brilliant minds to join us. Send us your
              portfolio and tell us how you can help us reshape the digital
              landscape.
            </p>
            <div className="flex justify-center">
              <button
                onClick={() => {
                  setSelectedPosition(null);
                  setIsApplicationFormOpen(true);
                }}
                className="w-full sm:w-auto bg-white text-[#191a23] px-10 md:px-12 py-4.5 md:py-5 rounded-xl font-poppins font-medium hover:shadow-[0_15px_40px_rgba(255,255,255,0.1)] transition-all hover:-translate-y-1"
              >
                Speculative Application
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Application Form Modal */}
      <JobApplicationForm
        isOpen={isApplicationFormOpen}
        onClose={() => setIsApplicationFormOpen(false)}
        position={selectedPosition}
      />
    </div>
  );
}
