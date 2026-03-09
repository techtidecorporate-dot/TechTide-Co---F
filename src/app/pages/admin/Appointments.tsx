import { useState, useEffect } from "react";
import { ref, onValue, update } from "firebase/database";
import { appointmentDatabase } from "@/firebase/appointmentConfig";
import {
  sendAppointmentEmail,
  type AppointmentEmailData,
} from "@/app/utils/appointmentEmailService";
import { toast } from "sonner";
import {
  Calendar,
  Clock,
  User,
  Mail,
  Phone,
  CheckCircle,
  XCircle,
  Loader2,
  Filter,
  Search,
  Briefcase,
  MessageSquare,
} from "lucide-react";

interface Appointment {
  id: string;
  clientName: string;
  clientEmail: string;
  clientPhone: string;
  date: string;
  time: string;
  service: string;
  message: string;
  status: "pending" | "confirmed" | "canceled";
  createdAt: string;
  updatedAt?: string;
}

export default function AppointmentManagement() {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<
    "all" | "pending" | "confirmed" | "canceled"
  >("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  useEffect(() => {
    const appointmentsRef = ref(appointmentDatabase, "appointments");

    const unsubscribe = onValue(appointmentsRef, (snapshot) => {
      const appointmentsData: Appointment[] = [];
      if (snapshot.exists()) {
        const data = snapshot.val();
        Object.keys(data).forEach((key) => {
          appointmentsData.push({ id: key, ...data[key] });
        });
        appointmentsData.sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
        );
      }
      setAppointments(appointmentsData);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const updateAppointmentStatus = async (
    appointmentId: string,
    newStatus: "confirmed" | "canceled",
    appointmentData: Appointment,
  ) => {
    try {
      const appointmentRef = ref(
        appointmentDatabase,
        `appointments/${appointmentId}`,
      );
      await update(appointmentRef, {
        status: newStatus,
        updatedAt: new Date().toISOString(),
      });

      try {
        const emailData: AppointmentEmailData = {
          clientName: appointmentData.clientName,
          clientEmail: appointmentData.clientEmail,
          clientPhone: appointmentData.clientPhone,
          date: appointmentData.date,
          time: appointmentData.time,
          service: appointmentData.service,
          message: appointmentData.message,
          status: newStatus,
        };
        await sendAppointmentEmail("status_update", emailData);
      } catch (emailError) {
        console.error("Error sending status update email:", emailError);
      }

      toast.success(
        `Appointment ${newStatus} successfully. Client will be notified via email.`,
      );
    } catch (error: any) {
      console.error("Error updating appointment:", error);
      toast.error(`Failed to update appointment: ${error.message}`);
    }
  };

  const filteredAppointments = appointments
    .filter((apt) => filter === "all" || apt.status === filter)
    .filter(
      (apt) =>
        !searchQuery ||
        apt.clientName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        apt.clientEmail.toLowerCase().includes(searchQuery.toLowerCase()) ||
        apt.service?.toLowerCase().includes(searchQuery.toLowerCase()),
    );

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending":
        return "bg-amber-500/15 text-amber-400 border-amber-500/30";
      case "confirmed":
        return "bg-emerald-500/15 text-emerald-400 border-emerald-500/30";
      case "canceled":
        return "bg-red-500/15 text-red-400 border-red-500/30";
      default:
        return "bg-white/10 text-gray-400 border-white/10";
    }
  };

  const counts = {
    all: appointments.length,
    pending: appointments.filter((a) => a.status === "pending").length,
    confirmed: appointments.filter((a) => a.status === "confirmed").length,
    canceled: appointments.filter((a) => a.status === "canceled").length,
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <Loader2 className="w-8 h-8 animate-spin text-[#453abc]" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-white">
          Appointment Management
        </h1>
        <p className="text-gray-400 mt-1">
          Manage and respond to appointment requests
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          {
            label: "Total",
            count: counts.all,
            color: "bg-[#453abc]/15 text-[#60c3e3] border-[#453abc]/30",
            icon: Calendar,
          },
          {
            label: "Pending",
            count: counts.pending,
            color: "bg-amber-500/10 text-amber-400 border-amber-500/20",
            icon: Clock,
          },
          {
            label: "Confirmed",
            count: counts.confirmed,
            color: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
            icon: CheckCircle,
          },
          {
            label: "Canceled",
            count: counts.canceled,
            color: "bg-red-500/10 text-red-400 border-red-500/20",
            icon: XCircle,
          },
        ].map((stat) => (
          <div
            key={stat.label}
            className={`${stat.color} border rounded-xl p-4 flex items-center gap-3`}
          >
            <stat.icon className="w-5 h-5" />
            <div>
              <p className="text-2xl font-bold">{stat.count}</p>
              <p className="text-xs font-medium opacity-75">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Filter & Search */}
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div className="flex items-center gap-1 bg-[#16161a] border border-white/5 rounded-xl p-1">
          {(["all", "pending", "confirmed", "canceled"] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                filter === f
                  ? "bg-[#453abc] text-white shadow-lg shadow-[#453abc]/25"
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              }`}
            >
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>

        <div className="relative w-full sm:w-72">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
          <input
            type="text"
            placeholder="Search appointments..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-4 py-3 bg-[#16161a] border border-white/5 rounded-xl text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#453abc]/50"
          />
        </div>
      </div>

      {/* Appointments List */}
      {filteredAppointments.length === 0 ? (
        <div className="text-center py-16 bg-[#16161a] rounded-2xl border border-white/5">
          <Filter className="w-12 h-12 text-gray-600 mx-auto mb-4" />
          <p className="text-gray-400 text-lg font-medium">
            No appointments found
          </p>
          <p className="text-gray-600 text-sm mt-1">
            {searchQuery
              ? "Try adjusting your search terms"
              : "New appointments will appear here"}
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          {filteredAppointments.map((appointment) => (
            <div
              key={appointment.id}
              className={`bg-[#16161a] border rounded-2xl overflow-hidden transition-all ${
                appointment.status === "pending"
                  ? "border-[#453abc]/30 bg-[#453abc]/5"
                  : "border-white/5 hover:border-white/10"
              }`}
            >
              {/* Main Row */}
              <div
                className="flex items-center justify-between p-5 cursor-pointer"
                onClick={() =>
                  setExpandedId(
                    expandedId === appointment.id ? null : appointment.id,
                  )
                }
              >
                <div className="flex items-center gap-4 min-w-0">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#453abc] to-[#60c3e3] flex items-center justify-center text-white font-semibold text-sm flex-shrink-0">
                    {appointment.clientName?.[0]?.toUpperCase() || "?"}
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-medium text-white truncate flex items-center gap-2">
                      {appointment.clientName}
                      {appointment.status === "pending" && (
                        <span className="text-[10px] bg-[#453abc] px-2 py-0.5 rounded text-white uppercase tracking-tighter">
                          New
                        </span>
                      )}
                    </h3>
                    <p className="text-sm text-gray-500 truncate">
                      {appointment.clientEmail}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 flex-shrink-0">
                  <div className="hidden md:flex items-center gap-2 text-sm text-gray-400">
                    <Calendar className="w-4 h-4" />
                    {formatDate(appointment.date)}
                  </div>
                  <div className="hidden md:flex items-center gap-2 text-sm text-gray-400">
                    <Clock className="w-4 h-4" />
                    {appointment.time}
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold border capitalize ${getStatusColor(
                      appointment.status,
                    )}`}
                  >
                    {appointment.status}
                  </span>
                </div>
              </div>

              {/* Expanded Details */}
              {expandedId === appointment.id && (
                <div className="border-t border-white/5 p-5 bg-white/[0.02]">
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
                    <div className="flex items-center gap-2 text-sm">
                      <User className="w-4 h-4 text-gray-500" />
                      <span className="text-gray-300">
                        {appointment.clientName}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Mail className="w-4 h-4 text-gray-500" />
                      <span className="text-gray-300">
                        {appointment.clientEmail}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Phone className="w-4 h-4 text-gray-500" />
                      <span className="text-gray-300">
                        {appointment.clientPhone || "N/A"}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="w-4 h-4 text-gray-500" />
                      <span className="text-gray-300">
                        {formatDate(appointment.date)}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="w-4 h-4 text-gray-500" />
                      <span className="text-gray-300">{appointment.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Briefcase className="w-4 h-4 text-gray-500" />
                      <span className="text-gray-300">
                        {appointment.service || "General Consultation"}
                      </span>
                    </div>
                  </div>

                  {appointment.message && (
                    <div className="flex items-start gap-2 text-sm mb-4 p-4 bg-white/5 rounded-xl border border-white/5">
                      <MessageSquare className="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-300">{appointment.message}</p>
                    </div>
                  )}

                  <div className="flex items-center gap-2 text-xs text-gray-500 mb-4">
                    Booked on{" "}
                    {new Date(appointment.createdAt).toLocaleDateString(
                      "en-US",
                      {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                      },
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    {appointment.status === "pending" && (
                      <>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            updateAppointmentStatus(
                              appointment.id,
                              "confirmed",
                              appointment,
                            );
                          }}
                          className="flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded-lg text-sm font-medium hover:bg-emerald-500 transition-colors"
                        >
                          <CheckCircle className="w-4 h-4" />
                          Confirm
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            updateAppointmentStatus(
                              appointment.id,
                              "canceled",
                              appointment,
                            );
                          }}
                          className="flex items-center gap-2 px-4 py-2 bg-red-600/80 text-white rounded-lg text-sm font-medium hover:bg-red-500 transition-colors"
                        >
                          <XCircle className="w-4 h-4" />
                          Cancel
                        </button>
                      </>
                    )}
                    {appointment.status === "confirmed" && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          updateAppointmentStatus(
                            appointment.id,
                            "canceled",
                            appointment,
                          );
                        }}
                        className="flex items-center gap-2 px-4 py-2 bg-red-600/80 text-white rounded-lg text-sm font-medium hover:bg-red-500 transition-colors"
                      >
                        <XCircle className="w-4 h-4" />
                        Cancel
                      </button>
                    )}
                    {appointment.status === "canceled" && (
                      <span className="text-sm text-gray-500 italic">
                        This appointment has been canceled.
                      </span>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
