import { useState, useEffect, useMemo } from "react";

import { jobPositionAPI, JobPosition } from "@/api";
import { JobApplicationForm } from "../components/career/JobApplicationForm";
import SEO from "../components/ui/SEO";
import { FAQ } from "../components/ui/FAQ";
import { careerFAQ } from "../data/faqData";
import {
  HeroSection,
  BenefitsSection,
  JobListingsSection,
  CultureSection,
} from "../components/career";

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
    </main>
  );
}
