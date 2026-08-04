// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { toast } from "sonner";
// import { Mail, Linkedin, Instagram } from "lucide-react";
// import { teamData } from "@/components/team/teamData";

// const leaders = teamData.filter((m) =>
//   ["CEO", "CTO", "CFO", "COO", "Head"].includes(m.category)
// );

// export function LeadershipSection() {
//   const [current, setCurrent] = useState(0);

//   // If no leaders available, don't render the section
//   if (!leaders || leaders.length === 0) return null;

//   // Rotate leaders every 5 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % leaders.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   const handleEmailClick = (e: React.MouseEvent, email: string) => {
//     e.preventDefault();
//     if (!email) return;
//     navigator.clipboard.writeText(email);
//     toast.success("Email copied to clipboard!");
//   };

//   return (
//     <section
//       id="leadership"
//       style={{contentVisibility: 'auto', containIntrinsicSize: '500px'}}
//       className="relative min-h-screen bg-white py-16 md:py-20 overflow-hidden"
//     >
//       <div className="text-center mb-10 md:mb-20 px-4 sm:px-6">
//         <h2 className="text-[1.75rem] sm:text-3xl md:text-5xl font-poppins font-bold mb-3 md:mb-4 text-[#191a23]">
//           Leadership and <span className="text-[#453abc]">Management</span>
//         </h2>
//         <h3 className="text-lg sm:text-xl md:text-2xl font-poppins font-bold text-gray-800 mb-3 md:mb-4">
//           Leadership That Understands Both Technology and Business
//         </h3>
//         <p className="text-sm sm:text-lg text-gray-500 max-w-2xl mx-auto">
//           We combine technical expertise with business insight to build market-ready solutions.
//         </p>
//       </div>

//       <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-8 flex flex-col-reverse lg:flex-row items-center gap-8 md:gap-12 lg:gap-28">
//         {/* Text Section */}
//         <div className="flex-1 max-w-full lg:max-w-[500px] text-center lg:text-left">
//           <h3
//             className="text-2xl sm:text-4xl md:text-5xl font-bold mb-2 leading-tight"
//             style={{
//               WebkitTextFillColor: "transparent",
//               backgroundImage:
//                 "linear-gradient(95.6204deg, rgb(69, 58, 188) 0%, rgb(96, 195, 227) 103.41%)",
//               backgroundClip: "text",
//             }}
//           >
//             {leaders[current].name}
//           </h3>
//           <p className="text-base sm:text-xl md:text-2xl font-semibold text-gray-800 mb-4 md:mb-6 uppercase tracking-wide">
//             {leaders[current].role}
//           </p>
//           <div className="relative mb-10">
//             <span className="absolute -left-6 -top-4 text-4xl text-[#453abc] opacity-20 font-serif">
//               "
//             </span>
//             <p className="text-[#4b5563] text-lg leading-relaxed ">
//               {leaders[current].message || ""}
//             </p>
//             <span className="absolute -right-2 -bottom-4 text-4xl text-[#453abc] opacity-20 font-serif">
//               "
//             </span>
//           </div>

//           {/* Social Links */}
//           <div className="flex justify-center lg:justify-start gap-4">
//             <a
//               href=""
//               onClick={(e) =>
//                 handleEmailClick(e, leaders[current].social?.gmail || "")
//               }
//               className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-[#453abc] hover:text-white transition-all duration-300"
//               aria-label="Gmail"
//             >
//               <Mail className="w-5 h-5" />
//             </a>
//             <a
//               href={leaders[current].social?.linkedin || "#"}
//               className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-[#0077b5] hover:text-white transition-all duration-300"
//               aria-label="LinkedIn"
//             >
//               <Linkedin className="w-5 h-5" />
//             </a>
//             <a
//               href={leaders[current].social?.instagram || "#"}
//               className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-[#E1306C] hover:text-white transition-all duration-300"
//               aria-label="Instagram"
//             >
//               <Instagram className="w-5 h-5" />
//             </a>
//           </div>
//         </div>

//         {/* Image Section */}
//         <div className="flex-1 relative w-full h-[350px] md:h-[500px] flex justify-center items-center">
//           {/* Mobile View: Simple Fade */}
//           <div className="lg:hidden relative w-full aspect-[4/5] flex justify-center items-center">
//             <AnimatePresence mode="wait">
//               <motion.img
//                 key={leaders[current].name}
//                 src={leaders[current].image}
//                 alt={leaders[current].name}
//                 initial={{ opacity: 0, x: 20 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 exit={{ opacity: 0, x: -20 }}
//                 transition={{ duration: 0.5 }}
//                 onClick={() =>
//                   setCurrent((prev) => (prev + 1) % leaders.length)
//                 }
//                 className="w-full h-full object-cover drop-shadow-xl cursor-pointer rounded-2xl"
//                 loading="lazy"
//                 decoding="async"
//               />
//             </AnimatePresence>
//           </div>

//           {/* Desktop View: 3D Carousel */}
//           <div className="hidden lg:block relative w-full max-w-sm h-full perspective-1000">
//             {leaders.map((leader, index) => {
//               const isCenter = index === current;
//               const rightIndex = (current + 1) % leaders.length;
//               const leftIndex = (current - 1 + leaders.length) % leaders.length;

//               let xOffset = 0;
//               let scale = 1;
//               let blur = "0px";
//               let rotateY = 0;
//               let zIndex = 30;
//               let opacity = 1;

//               if (isCenter) {
//                 xOffset = 0;
//                 scale = 1;
//                 rotateY = 0;
//                 zIndex = 30;
//                 opacity = 1;
//                 blur = "0px";
//               } else if (index === rightIndex) {
//                 xOffset = 180;
//                 scale = 0.8;
//                 rotateY = -25;
//                 zIndex = 20;
//                 opacity = 0.55;
//                 blur = "6px";
//               } else if (index === leftIndex) {
//                 xOffset = -180;
//                 scale = 0.8;
//                 rotateY = 25;
//                 zIndex = 20;
//                 opacity = 0.55;
//                 blur = "6px";
//               } else {
//                 xOffset = 0;
//                 scale = 0;
//                 rotateY = 0;
//                 zIndex = 1;
//                 opacity = 0;
//                 blur = "0px";
//               }

//               return (
//                 <motion.img
//                   key={leader.name}
//                   src={leader.image}
//                   alt={leader.name}
//                   initial={{ opacity: 0, scale: 0.8 }}
//                   animate={{
//                     opacity,
//                     scale,
//                     x: xOffset,
//                     zIndex,
//                     filter: `blur(${blur})`,
//                     rotateY,
//                   }}
//                   transition={{ duration: 0.8, ease: "easeInOut" }}
//                   onClick={() => setCurrent(index)}
//                   className="absolute top-0 left-0 w-full h-full object-cover object-top cursor-pointer rounded-2xl"
//                   loading="lazy"
//                   decoding="async"
//                 />
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
