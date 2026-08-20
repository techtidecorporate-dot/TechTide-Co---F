import { Mail, Linkedin, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import { teamData } from "@/components/team/teamData";
import { toast } from "react-hot-toast";

export function LeadershipSection() {
  const ceo = teamData.find((m) => m.category === "CEO");
  if (!ceo) return null;

  const handleEmailClick = (e: React.MouseEvent, email: string) => {
    e.preventDefault();
    if (!email) return;
    navigator.clipboard.writeText(email);
    toast.success("Email copied to clipboard!");
  };

  return (
    <section
      id="leadership"
      className="relative bg-white py-20 px-6 overflow-hidden"
    >
      <div className="container">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-16">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left px-4">
            {/* Heading with animated underline */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 relative inline-block text-gray-800 animate-fadeInUp">
              Message from the{" "}
              <span className="text-[#4F46E5]">CEO</span>
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-500 mx-auto lg:mx-0 mb-8 rounded-full animate-slideIn" />

            {/* Name & Role */}
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 relative animate-fadeInUp delay-200">{ceo.name}</h3>
            <p className="text-xl md:text-2xl text-indigo-600 font-semibold mb-8 uppercase tracking-wide text-center lg:text-left animate-fadeInUp delay-400">{ceo.role}</p>

            {/* Quote Icon */}
            <div className="relative mb-10 px-4 lg:px-0 animate-fadeInUp delay-600">
              <div className="absolute -top-4 -left-6 text-4xl text-indigo-300 opacity-50 font-serif animate-bounce">
                &ldquo;
              </div>
              <p className="text-gray-600 text-lg italic leading-relaxed px-4">"{ceo.message || ""}"</p>
              <div className="absolute -bottom-4 -right-6 text-4xl text-indigo-300 opacity-50 font-serif animate-bounce">&rdquo;</div>
            </div>

            {/* Social Icons */}
            <div className="flex justify-center lg:justify-start gap-4 animate-fadeInUp delay-800">
              {/* Gmail */}
              <button
                onClick={(e) => handleEmailClick(e, ceo.social?.gmail || "")}
                className="p-3 rounded-full bg-white shadow-lg hover:bg-gradient-to-r from-pink-400 to-purple-600 transition-transform transform hover:scale-110"
                aria-label="Gmail"
              >
                <Mail className="w-5 h-5 text-gray-700" />
              </button>
              {/* LinkedIn */}
              <Link
                to={ceo.social?.linkedin || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white shadow-lg hover:bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 transition-transform transform hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-gray-700" />
              </Link>
              {/* Instagram */}
              <Link
                to={ceo.social?.instagram || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white shadow-lg hover:bg-gradient-to-r from-pink-500 via-purple-500 to-purple-700 transition-transform transform hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-gray-700" />
              </Link>
            </div>
          </div>

          {/* Image Section */}
          <div className="flex-1 flex justify-center px-4">
            <div className="w-full max-w-sm aspect-[4/5] rounded-3xl shadow-xl overflow-hidden bg-gray-800 duration-300 ease-in-out">
              <img
                src={ceo.image}
                alt={ceo.name}
                className="w-full h-full object-cover object-top"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style>{`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slideIn {
          0% {
            width: 0;
            opacity: 0;
          }
          100% {
            width: 64px;
            opacity: 1;
          }
        }
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 100% 50%;
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 1s forwards;
        }
        .animate-slideIn {
          animation: slideIn 1s forwards;
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s linear infinite;
        }
      `}</style>
    </section>
  );
}