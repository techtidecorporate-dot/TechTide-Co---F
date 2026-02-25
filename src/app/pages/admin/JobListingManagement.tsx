import React, { useState, useEffect } from "react";
import { jobPositionAPI, JobPosition } from "@/api";
import {
  Plus,
  Edit2,
  Trash2,
  Search,
  Briefcase,
  MapPin,
  Clock,
  DollarSign,
  CheckCircle,
  XCircle,
  ListOrdered,
  ShieldCheck,
} from "lucide-react";
import { toast } from "sonner";

const emptyForm = {
  title: "",
  department: "",
  location: "",
  type: "Full-time",
  salary: "",
  description: "",
  responsibilities: [] as string[],
  requirements: [] as string[],
  isActive: true,
};

export default function JobListingManagement() {
  const [positions, setPositions] = useState<JobPosition[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [editingPosition, setEditingPosition] = useState<JobPosition | null>(
    null,
  );
  const [formData, setFormData] = useState(emptyForm);

  // Separate input states for list items
  const [responsibilityInput, setResponsibilityInput] = useState("");
  const [requirementInput, setRequirementInput] = useState("");

  useEffect(() => {
    fetchPositions();
  }, []);

  const fetchPositions = async () => {
    try {
      const { data } = await jobPositionAPI.getAll();
      setPositions(data);
    } catch {
      toast.error("Failed to fetch job positions");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (editingPosition) {
        await jobPositionAPI.update(editingPosition.id, formData);
        toast.success("Position updated successfully");
      } else {
        await jobPositionAPI.create(formData);
        toast.success("Position created successfully");
      }
      fetchPositions();
      handleCloseModal();
    } catch {
      toast.error("Failed to save position");
    }
  };

  const handleDelete = async (id: string) => {
    if (window.confirm("Are you sure you want to delete this position?")) {
      try {
        await jobPositionAPI.delete(id);
        toast.success("Position deleted");
        fetchPositions();
      } catch {
        toast.error("Delete failed");
      }
    }
  };

  const handleEdit = (position: JobPosition) => {
    setEditingPosition(position);
    setFormData({
      title: position.title,
      department: position.department,
      location: position.location,
      type: position.type,
      salary: position.salary || "",
      description: position.description,
      responsibilities: position.responsibilities || [],
      requirements: position.requirements || [],
      isActive: position.isActive,
    });
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setEditingPosition(null);
    setFormData(emptyForm);
    setResponsibilityInput("");
    setRequirementInput("");
  };

  // ── Responsibilities ──────────────────────────────────────────────────────
  const addResponsibility = () => {
    if (responsibilityInput.trim()) {
      setFormData((prev) => ({
        ...prev,
        responsibilities: [
          ...prev.responsibilities,
          responsibilityInput.trim(),
        ],
      }));
      setResponsibilityInput("");
    }
  };
  const removeResponsibility = (i: number) =>
    setFormData((prev) => ({
      ...prev,
      responsibilities: prev.responsibilities.filter((_, idx) => idx !== i),
    }));

  // ── Requirements ─────────────────────────────────────────────────────────
  const addRequirement = () => {
    if (requirementInput.trim()) {
      setFormData((prev) => ({
        ...prev,
        requirements: [...prev.requirements, requirementInput.trim()],
      }));
      setRequirementInput("");
    }
  };
  const removeRequirement = (i: number) =>
    setFormData((prev) => ({
      ...prev,
      requirements: prev.requirements.filter((_, idx) => idx !== i),
    }));

  const filteredPositions = positions.filter(
    (p) =>
      p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.department.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  /* ── shared input style ─────────────────────────────────────────────── */
  const inputCls =
    "w-full px-4 py-2.5 bg-[#0d0d0f] border border-white/10 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#453abc]/50 placeholder:text-white/20";

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold">Job Positions</h2>
          <p className="text-gray-400">Manage job openings and postings.</p>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="flex items-center gap-2 bg-gradient-to-r from-[#453abc] to-[#60c3e3] text-white px-6 py-3 rounded-xl hover:shadow-xl transition-all"
        >
          <Plus size={20} />
          Add New Position
        </button>
      </div>

      {/* Search */}
      <div className="relative">
        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
          <Search size={20} />
        </span>
        <input
          type="text"
          placeholder="Search by title or department..."
          className="w-full pl-12 pr-4 py-3 bg-[#16161a] border border-white/5 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#453abc]/50"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* List */}
      <div className="grid grid-cols-1 gap-4">
        {loading ? (
          <div className="p-12 text-center text-gray-500">Loading...</div>
        ) : filteredPositions.length === 0 ? (
          <div className="p-12 text-center text-gray-500">
            No positions found
          </div>
        ) : (
          filteredPositions.map((position) => (
            <div
              key={position.id}
              className="bg-[#16161a] border border-white/5 rounded-2xl p-6 shadow-xl hover:border-white/10 transition-all"
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#453abc] to-[#60c3e3] flex items-center justify-center flex-shrink-0">
                    <Briefcase className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-1">{position.title}</h3>
                    <div className="flex flex-wrap gap-3 text-sm text-gray-400 mb-2">
                      <span className="flex items-center gap-1">
                        <Briefcase size={13} /> {position.department}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin size={13} /> {position.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={13} /> {position.type}
                      </span>
                      {position.salary && (
                        <span className="flex items-center gap-1">
                          <DollarSign size={13} /> {position.salary}
                        </span>
                      )}
                    </div>
                    <p className="text-gray-300 text-sm line-clamp-1 mb-1">
                      {position.description}
                    </p>
                    <div className="flex gap-3 text-xs text-gray-500">
                      {position.responsibilities &&
                        position.responsibilities.length > 0 && (
                          <span className="flex items-center gap-1">
                            <ListOrdered size={12} />
                            {position.responsibilities.length} Responsibilit
                            {position.responsibilities.length === 1
                              ? "y"
                              : "ies"}
                          </span>
                        )}
                      {position.requirements &&
                        position.requirements.length > 0 && (
                          <span className="flex items-center gap-1">
                            <ShieldCheck size={12} />
                            {position.requirements.length} Requirement
                            {position.requirements.length !== 1 ? "s" : ""}
                          </span>
                        )}
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <span
                    className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest ${
                      position.isActive
                        ? "text-green-400 bg-green-500/10"
                        : "text-gray-400 bg-gray-500/10"
                    }`}
                  >
                    {position.isActive ? (
                      <span className="flex items-center gap-1">
                        <CheckCircle size={14} /> Active
                      </span>
                    ) : (
                      <span className="flex items-center gap-1">
                        <XCircle size={14} /> Inactive
                      </span>
                    )}
                  </span>

                  <div className="flex items-center gap-2 border-l border-white/10 pl-3">
                    <button
                      onClick={() => handleEdit(position)}
                      className="p-2 hover:bg-blue-500/10 rounded-lg text-blue-400 transition-all"
                      title="Edit"
                    >
                      <Edit2 size={18} />
                    </button>
                    <button
                      onClick={() => handleDelete(position.id)}
                      className="p-2 hover:bg-red-500/10 rounded-lg text-red-400 transition-all"
                      title="Delete"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* ── Modal ───────────────────────────────────────────────────────────── */}
      {showModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-[#13131a] border border-white/10 rounded-2xl w-full max-w-2xl max-h-[92vh] overflow-y-auto shadow-2xl">
            {/* Modal header */}
            <div className="sticky top-0 z-10 bg-[#13131a] px-6 py-5 border-b border-white/10 flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold">
                  {editingPosition ? "Edit Position" : "Add New Position"}
                </h3>
                <p className="text-xs text-gray-500 mt-0.5">
                  Fill in the details below to{" "}
                  {editingPosition ? "update" : "publish"} this job listing
                </p>
              </div>
              <button
                type="button"
                onClick={handleCloseModal}
                className="p-2 hover:bg-white/5 rounded-lg text-gray-400 hover:text-white transition-all"
              >
                <XCircle size={20} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-5">
              {/* ── Section: Basic Info ─────────────────────────────────── */}
              <SectionLabel
                icon={<Briefcase size={14} />}
                label="Basic Information"
              />

              {/* Title */}
              <div>
                <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5">
                  Job Title <span className="text-[#453abc]">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.title}
                  onChange={(e) =>
                    setFormData({ ...formData, title: e.target.value })
                  }
                  className={inputCls}
                  placeholder="e.g., Senior Full Stack Developer"
                />
              </div>

              {/* Department + Type */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5">
                    Department <span className="text-[#453abc]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.department}
                    onChange={(e) =>
                      setFormData({ ...formData, department: e.target.value })
                    }
                    className={inputCls}
                    placeholder="e.g., Engineering"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5">
                    Job Type <span className="text-[#453abc]">*</span>
                  </label>
                  <select
                    required
                    value={formData.type}
                    onChange={(e) =>
                      setFormData({ ...formData, type: e.target.value })
                    }
                    className={inputCls}
                  >
                    <option value="Full-time">Full-time</option>
                    <option value="Part-time">Part-time</option>
                    <option value="Contract">Contract</option>
                    <option value="Internship">Internship</option>
                  </select>
                </div>
              </div>

              {/* Location + Salary */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5">
                    Location <span className="text-[#453abc]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.location}
                    onChange={(e) =>
                      setFormData({ ...formData, location: e.target.value })
                    }
                    className={inputCls}
                    placeholder="e.g., Remote / Karachi"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5">
                    Salary Range
                  </label>
                  <input
                    type="text"
                    value={formData.salary}
                    onChange={(e) =>
                      setFormData({ ...formData, salary: e.target.value })
                    }
                    className={inputCls}
                    placeholder="e.g., $80k – $120k or PKR 1.5L"
                  />
                </div>
              </div>

              {/* ── Section: Description ────────────────────────────────── */}
              <div className="border-t border-white/5 pt-5">
                <SectionLabel
                  icon={<ListOrdered size={14} />}
                  label="Job Description"
                />
              </div>

              {/* Overview */}
              <div>
                <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5">
                  Role Overview <span className="text-[#453abc]">*</span>
                </label>
                <textarea
                  required
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                  rows={3}
                  className={inputCls}
                  placeholder="A short 1–2 sentence summary of the role and its purpose..."
                />
                <p className="text-[10px] text-gray-600 mt-1">
                  Keep this brief — use "Key Responsibilities" below for the
                  numbered bullet points.
                </p>
              </div>

              {/* Key Responsibilities */}
              <div>
                <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5">
                  Key Responsibilities
                </label>
                <div className="flex gap-2 mb-2">
                  <input
                    type="text"
                    value={responsibilityInput}
                    onChange={(e) => setResponsibilityInput(e.target.value)}
                    onKeyDown={(e) =>
                      e.key === "Enter" &&
                      (e.preventDefault(), addResponsibility())
                    }
                    className={inputCls + " flex-1"}
                    placeholder="e.g., Lead SEO, SEM and social media campaigns"
                  />
                  <button
                    type="button"
                    onClick={addResponsibility}
                    className="px-4 py-2.5 bg-[#453abc] text-white text-sm rounded-xl hover:bg-[#3a2f9e] transition-all whitespace-nowrap"
                  >
                    + Add
                  </button>
                </div>
                {formData.responsibilities.length > 0 && (
                  <div className="space-y-1.5 mt-2">
                    {formData.responsibilities.map((r, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-3 bg-[#0d0d0f] border border-white/5 px-4 py-2.5 rounded-xl group"
                      >
                        <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#453abc]/20 text-[#453abc] text-[10px] font-bold flex items-center justify-center mt-0.5">
                          {i + 1}
                        </span>
                        <span className="text-sm text-gray-200 flex-1">
                          {r}
                        </span>
                        <button
                          type="button"
                          onClick={() => removeResponsibility(i)}
                          className="text-red-400/50 hover:text-red-400 transition-colors opacity-0 group-hover:opacity-100"
                        >
                          <XCircle size={15} />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
                {formData.responsibilities.length === 0 && (
                  <p className="text-[11px] text-gray-600 mt-1">
                    Add each responsibility as a separate point — they'll appear
                    as a numbered list on the career page.
                  </p>
                )}
              </div>

              {/* ── Section: Requirements ───────────────────────────────── */}
              <div className="border-t border-white/5 pt-5">
                <SectionLabel
                  icon={<ShieldCheck size={14} />}
                  label="Requirements"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5">
                  Key Requirements
                </label>
                <div className="flex gap-2 mb-2">
                  <input
                    type="text"
                    value={requirementInput}
                    onChange={(e) => setRequirementInput(e.target.value)}
                    onKeyDown={(e) =>
                      e.key === "Enter" &&
                      (e.preventDefault(), addRequirement())
                    }
                    className={inputCls + " flex-1"}
                    placeholder="e.g., 5+ years of full-stack experience"
                  />
                  <button
                    type="button"
                    onClick={addRequirement}
                    className="px-4 py-2.5 bg-[#453abc] text-white text-sm rounded-xl hover:bg-[#3a2f9e] transition-all whitespace-nowrap"
                  >
                    + Add
                  </button>
                </div>
                {formData.requirements.length > 0 && (
                  <div className="space-y-1.5 mt-2">
                    {formData.requirements.map((req, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 bg-[#0d0d0f] border border-white/5 px-4 py-2.5 rounded-xl group"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#60c3e3] flex-shrink-0" />
                        <span className="text-sm text-gray-200 flex-1">
                          {req}
                        </span>
                        <button
                          type="button"
                          onClick={() => removeRequirement(i)}
                          className="text-red-400/50 hover:text-red-400 transition-colors opacity-0 group-hover:opacity-100"
                        >
                          <XCircle size={15} />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* ── Visibility toggle ───────────────────────────────────── */}
              <div className="border-t border-white/5 pt-4">
                <label className="flex items-center gap-3 cursor-pointer group w-fit">
                  <div className="relative">
                    <input
                      type="checkbox"
                      id="isActive"
                      checked={formData.isActive}
                      onChange={(e) =>
                        setFormData({ ...formData, isActive: e.target.checked })
                      }
                      className="sr-only"
                    />
                    <div
                      className={`w-10 h-5 rounded-full transition-all duration-300 ${
                        formData.isActive ? "bg-[#453abc]" : "bg-white/10"
                      }`}
                    />
                    <div
                      className={`absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full shadow transition-all duration-300 ${
                        formData.isActive ? "translate-x-5" : "translate-x-0"
                      }`}
                    />
                  </div>
                  <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                    Active — visible on career page
                  </span>
                </label>
              </div>

              {/* ── Action buttons ──────────────────────────────────────── */}
              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="flex-1 px-6 py-3 bg-white/5 hover:bg-white/10 rounded-xl text-sm transition-all"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-[#453abc] to-[#60c3e3] text-white rounded-xl font-medium text-sm hover:shadow-xl hover:shadow-[#453abc]/20 transition-all"
                >
                  {editingPosition ? "Update Position" : "Publish Position"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

/* ── tiny helper component ──────────────────────────────────────────────── */
function SectionLabel({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <div className="flex items-center gap-2 mb-3">
      <span className="text-[#453abc]">{icon}</span>
      <span className="text-xs font-bold uppercase tracking-widest text-gray-400">
        {label}
      </span>
      <div className="flex-1 h-px bg-white/5" />
    </div>
  );
}
