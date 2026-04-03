import React from "react";
import { motion } from "framer-motion";
import { TeamMember } from "@/types";

interface TeamMemberCardProps {
  member: TeamMember;
  color?: string;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member }) => {
  const imageUrl =
    typeof member.image === "string" && member.image.startsWith("/uploads")
      ? `http://localhost:5000${member.image}`
      : member.image;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
    >
      <div className="group relative w-64 h-80 rounded-2xl overflow-hidden shadow-xl transition-all duration-300 hover:shadow-2xl">
        {/* Full Image Background (transparent-friendly) */}
        <img
          src={imageUrl}
          alt={`Profile photo of ${member.name}, ${member.role}`}
          className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110 bg-transparent"
          style={{ backgroundColor: "transparent" }}
        />

        {/* Optional overlay removed so image background remains intact */}

        {/* Content - Slides up from bottom on hover */}
        <div className="absolute bottom-0 w-full p-5 transform translate-y-full transition-transform duration-500 group-hover:translate-y-0">
          <div className="backdrop-blur-xl px-4 py-3 border border-white/10 bg-black/40">
            <h3 className="text-lg font-semibold text-white leading-tight">
              {member.name}
            </h3>
            <p className="text-xs uppercase tracking-wide text-white/90 mt-1">
              {member.role}
            </p>

            {/* Skills - Shown on hover */}
            {member.skills && (
              <div className="flex flex-wrap gap-1.5 mt-3">
                {member.skills.slice(0, 3).map((skill, i) => (
                  <span
                    key={i}
                    className="text-xs px-2 py-1 rounded-full bg-white/10 text-white"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TeamMemberCard;
