import { useState, useEffect, useMemo } from "react";

import { jobPositionAPI, JobPosition } from "@/api";
import { JobApplicationForm } from "../components/career/JobApplicationForm";
import SEO from "../components/ui/SEO";
import { FAQ } from "../components/ui/FAQ";
import { careerFAQ } from "../data/faqData";
import { Sparkles } from "lucide-react";
import {
  HeroSection,
  BenefitsSection,
  JobListingsSection,
  CultureSection,
} from "../components/career";

const CACHE_KEY = "career_jobs_cache_v1";
const CACHE_TTL = 5 * 60 * 1000; // 5 minutes

function getCachedJobs(): JobPosition[] | null {
  try {
    const raw = sessionStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    const { data, timestamp } = JSON.parse(raw);
    if (Date.now() - timestamp > CACHE_TTL) return null;
    return data;
  } catch {
    return null;
  }
}

function setCachedJobs(data: JobPosition[]) {
  try {
    sessionStorage.setItem(
      CACHE_KEY,
      JSON.stringify({ data, timestamp: Date.now() }),
    );
  } catch {
    // sessionStorage unavailable (private mode etc) — ignore silently
  }
}

export default function CareersPage() {
  const [selectedDepartment, setSelectedDepartment] = useState("All");

  // If we have cached jobs, show them immediately (no spinner) and
  // refresh in the background. Otherwise show the loading state.
  const cached = useMemo(() => getCachedJobs(), []);
  const [jobListings, setJobListings] = useState<JobPosition[]>(cached || []);
  const [loading, setLoading] = useState(!cached);
  const [selectedPosition, setSelectedPosition] = useState<JobPosition | null>(
    null,
  );
  const [isApplicationFormOpen, setIsApplicationFormOpen] = useState(false);

  useEffect(() => {
    fetchJobs(!cached);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchJobs = async (showSpinner: boolean) => {
    if (showSpinner) setLoading(true);
    try {
      const { data } = await jobPositionAPI.getActive();
      setJobListings(data);
      setCachedJobs(data);
    } catch (error) {
      console.error("Career Page fetchJobs error:", error);
    } finally {
      setLoading(false);
    }
  };

  const departments = useMemo(
    () => [
      "All",
      ...Array.from(new Set(jobListings.map((job) => job.department))),
    ],
    [jobListings],
  );

  const filteredJobs = useMemo(
    () =>
      selectedDepartment === "All"
        ? jobListings
        : jobListings.filter(
          (job) => job.department === selectedDepartment,
        ),
    [jobListings, selectedDepartment],
  );

  const handleApplyClick = (position: JobPosition) => {
    setSelectedPosition(position);
    setIsApplicationFormOpen(true);
  };

  const handleSpeculativeApply = () => {
    setSelectedPosition(null);
    setIsApplicationFormOpen(true);
  };

  const openStrategyDrawer = () => {
    window.dispatchEvent(new Event("open-strategy-drawer"));
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#f8f9fa] to-[#eef2f7]">
      <SEO
        title="Careers at TechTide"
        description="Join TechTide Corporate LLP and help us build the future of technology. Explore our current job openings and career opportunities."
        keywords="career at TechTide, remote tech jobs, software developer jobs, UI/UX design careers, hiring developers Lahore, join TechTide"
      />

      <HeroSection count={jobListings.length} />
      <BenefitsSection />
      <JobListingsSection
        jobs={filteredJobs}
        departments={departments}
        selectedDepartment={selectedDepartment}
        onDepartmentChange={setSelectedDepartment}
        onApply={handleApplyClick}
        loading={loading}
      />
      <CultureSection onSpeculativeApply={handleSpeculativeApply} />

      <JobApplicationForm
        isOpen={isApplicationFormOpen}
        onClose={() => setIsApplicationFormOpen(false)}
        position={selectedPosition}
      />

      <FAQ {...careerFAQ} />

      {/* Book Free Consultation CTA */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 pb-20 flex justify-center">
        <button
          onClick={openStrategyDrawer}
          className="inline-flex items-center gap-2 bg-gradient-to-r from-[#453abc] to-[#60c3e3] text-white px-8 py-4 rounded-xl font-poppins font-medium shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 active:scale-[0.98]"
        >
          <Sparkles className="w-5 h-5" />
          Book Free Consultation
        </button>
      </div>
    </main>
  );
}