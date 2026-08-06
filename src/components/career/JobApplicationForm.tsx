import React, { useState } from "react";
import { X, Upload, FileText } from "lucide-react";
import { jobAPI, talentPoolAPI, JobPosition } from "@/api";
import { toast } from "sonner";

interface JobApplicationFormProps {
  isOpen: boolean;
  onClose: () => void;
  position: JobPosition | null;
}

export function JobApplicationForm({
  isOpen,
  onClose,
  position,
}: JobApplicationFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    coverLetter: "",
    areaOfInterest: "",
  });
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  if (!isOpen) return null;

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Full name is required";
    } else if (formData.name.trim().length < 3) {
      newErrors.name = "Name must be at least 3 characters";
    } else if (/\d/.test(formData.name)) {
      newErrors.name = "Name must not contain numbers";
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address";
    }

    // Phone validation
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\+?[0-9\s-]{7,15}$/.test(formData.phone.trim())) {
      newErrors.phone = "Please enter a valid phone number";
    }

    // Area of interest validation (only for speculative applications)
    if (!position && !formData.areaOfInterest) {
      newErrors.areaOfInterest = "Please select an area of interest";
    }

    // Cover letter validation
    if (!formData.coverLetter.trim()) {
      newErrors.coverLetter = "Cover letter is required";
    }

    // CV file validation
    if (!cvFile) {
      newErrors.cvFile = "Please upload your CV";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error("Please fix the errors in the form");
      return;
    }

    setIsSubmitting(true);

    try {
      if (position) {
        // Specific Job Application
        const formDataToSend = new FormData();
        formDataToSend.append("name", formData.name);
        formDataToSend.append("email", formData.email);
        formDataToSend.append("phone", formData.phone);
        formDataToSend.append("position", position.title);
        formDataToSend.append("jobPosition", position.id);
        formDataToSend.append("coverLetter", formData.coverLetter);
        formDataToSend.append("resume", cvFile as File);

        await jobAPI.create(formDataToSend);
      } else {
        // Speculative Application (Talent Pool)
        const speculativeData = {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          areaOfInterest: formData.areaOfInterest,
          coverLetter: formData.coverLetter,
          resume: cvFile, // This will be handled by talentPoolAPI.create
        };

        await talentPoolAPI.create(speculativeData);
      }

      toast.success("Application submitted successfully!");
      handleClose();
    } catch (error: any) {
      toast.error(
        error.response?.data?.message || "Failed to submit application"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      coverLetter: "",
      areaOfInterest: "",
    });
    setCvFile(null);
    setErrors({});
    onClose();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      validateAndSetFile(file);
    }
  };

  const validateAndSetFile = (file: File) => {
    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];
    const maxSize = 5 * 1024 * 1024; // 5MB

    if (!allowedTypes.includes(file.type)) {
      toast.error("Only PDF, DOC, and DOCX files are allowed");
      return;
    }

    if (file.size > maxSize) {
      toast.error("File size must be less than 5MB");
      return;
    }

    setCvFile(file);
    setErrors((prev) => ({ ...prev, cvFile: "" }));
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);

    const file = e.dataTransfer.files[0];
    if (file) {
      validateAndSetFile(file);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white  max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white p-6 border-b border-gray-100 flex items-center justify-between rounded-t-[2rem]">
          <div>
            <h3 className="text-2xl  font-medium text-[#191a23]">
              {position
                ? `Apply for ${position.title}`
                : "Speculative Application"}
            </h3>
            <p className="text-sm text-gray-500 mt-1">
              {position
                ? `${position.department} • ${position.location}`
                : "Join our talent pool"}
            </p>
          </div>
          <button
            onClick={handleClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-all"
          >
            <X className="w-6 h-6 text-gray-500" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-[#191a23] mb-2">
                Full Name *
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => {
                  setFormData({ ...formData, name: e.target.value });
                  if (errors.name) setErrors((prev) => ({ ...prev, name: "" }));
                }}
                className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:border-transparent ${
                  errors.name
                    ? "border-red-400 focus:ring-red-300"
                    : "border-gray-200 focus:ring-[#453abc]/50"
                }`}
                placeholder="John Doe"
              />
              {errors.name && (
                <p className="text-xs text-red-500 mt-1">{errors.name}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-[#191a23] mb-2">
                Email Address *
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => {
                  setFormData({ ...formData, email: e.target.value });
                  if (errors.email) setErrors((prev) => ({ ...prev, email: "" }));
                }}
                className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:border-transparent ${
                  errors.email
                    ? "border-red-400 focus:ring-red-300"
                    : "border-gray-200 focus:ring-[#453abc]/50"
                }`}
                placeholder="john@example.com"
              />
              {errors.email && (
                <p className="text-xs text-red-500 mt-1">{errors.email}</p>
              )}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-[#191a23] mb-2">
              Phone Number *
            </label>
            <input
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => {
                setFormData({ ...formData, phone: e.target.value });
                if (errors.phone) setErrors((prev) => ({ ...prev, phone: "" }));
              }}
              className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:border-transparent ${
                errors.phone
                  ? "border-red-400 focus:ring-red-300"
                  : "border-gray-200 focus:ring-[#453abc]/50"
              }`}
              placeholder="+92 300 1234567"
            />
            {errors.phone && (
              <p className="text-xs text-red-500 mt-1">{errors.phone}</p>
            )}
          </div>

          {!position && (
            <div>
              <label className="block text-sm font-medium text-[#191a23] mb-2">
                Area of Interest *
              </label>
              <select
                required
                value={formData.areaOfInterest}
                onChange={(e) => {
                  setFormData({ ...formData, areaOfInterest: e.target.value });
                  if (errors.areaOfInterest)
                    setErrors((prev) => ({ ...prev, areaOfInterest: "" }));
                }}
                className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:border-transparent ${
                  errors.areaOfInterest
                    ? "border-red-400 focus:ring-red-300"
                    : "border-gray-200 focus:ring-[#453abc]/50"
                }`}
              >
                <option value="">Select an area</option>
                <option value="Web Development">Web Development</option>
                <option value="Mobile Apps">Mobile Apps</option>
                <option value="UI/UX Design">UI/UX Design</option>
                <option value="Marketing">Marketing</option>
                <option value="Project Management">Project Management</option>
                <option value="Human Resources">Human Resources</option>
                <option value="Other">Other</option>
              </select>
              {errors.areaOfInterest && (
                <p className="text-xs text-red-500 mt-1">
                  {errors.areaOfInterest}
                </p>
              )}
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-[#191a23] mb-2">
              Cover Letter *
            </label>
            <textarea
              required
              value={formData.coverLetter}
              onChange={(e) => {
                setFormData({ ...formData, coverLetter: e.target.value });
                if (errors.coverLetter)
                  setErrors((prev) => ({ ...prev, coverLetter: "" }));
              }}
              rows={6}
              className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:border-transparent resize-none ${
                errors.coverLetter
                  ? "border-red-400 focus:ring-red-300"
                  : "border-gray-200 focus:ring-[#453abc]/50"
              }`}
              placeholder="Tell us why you're a great fit for this position..."
            />
            {errors.coverLetter && (
              <p className="text-xs text-red-500 mt-1">{errors.coverLetter}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-[#191a23] mb-2">
              Upload CV/Resume *
            </label>
            <div
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              className={`border-2 border-dashed rounded-xl p-8 text-center transition-all ${
                isDragging
                  ? "border-[#453abc] bg-[#453abc]/5"
                  : errors.cvFile
                  ? "border-red-400"
                  : "border-gray-200 hover:border-[#453abc]/50"
              }`}
            >
              {cvFile ? (
                <div className="flex items-center justify-center gap-3">
                  <FileText className="w-8 h-8 text-[#453abc]" />
                  <div className="text-left">
                    <p className="font-medium text-[#191a23]">{cvFile.name}</p>
                    <p className="text-sm text-gray-500">
                      {(cvFile.size / 1024 / 1024).toFixed(2)} MB
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setCvFile(null)}
                    className="ml-4 p-2 hover:bg-red-50 rounded-full text-red-500"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              ) : (
                <>
                  <Upload className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                  <p className="text-[#191a23] font-medium mb-1">
                    Drop your CV here or click to browse
                  </p>
                  <p className="text-sm text-gray-500 mb-4">
                    PDF, DOC, or DOCX (max 5MB)
                  </p>
                  <input
                    type="file"
                    id="cv-upload"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                  <label
                    htmlFor="cv-upload"
                    className="inline-block px-6 py-3 bg-[#453abc] text-white rounded-xl hover:bg-[#3a2f9e] cursor-pointer transition-all"
                  >
                    Choose File
                  </label>
                </>
              )}
            </div>
            {errors.cvFile && (
              <p className="text-xs text-red-500 mt-1">{errors.cvFile}</p>
            )}
          </div>

          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={handleClose}
              className="flex-1 px-6 py-4 border border-gray-200 text-[#191a23] rounded-xl hover:bg-gray-50 transition-all font-medium"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 px-6 py-4 bg-gradient-to-r from-[#453abc] to-[#60c3e3] text-white rounded-xl hover:shadow-xl transition-all font-medium disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Submitting..." : "Submit Application"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
