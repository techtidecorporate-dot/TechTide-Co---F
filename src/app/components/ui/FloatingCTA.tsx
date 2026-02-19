import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Handshake } from "lucide-react";

type Phase = "center" | "moving" | "settled";

export function FloatingCTA() {
  const [phase, setPhase] = useState<Phase>("center");

  useEffect(() => {
    // Show icon at centre for 2s, then start moving
    const t1 = setTimeout(() => setPhase("moving"), 2000);
    // After animation travel time (~900ms), switch to settled CTA
    const t2 = setTimeout(() => setPhase("settled"), 3000);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  const openDrawer = () => {
    window.dispatchEvent(new CustomEvent("open-partner-drawer"));
  };

  return (
    <>
      {/* ── Centre icon (phases: center + moving) ── */}
      <AnimatePresence>
        {(phase === "center" || phase === "moving") && (
          <motion.div
            key="center-icon"
            className="fixed z-50 pointer-events-none"
            style={{
              top: "40%",
              left: "50%",
              translateX: "-50%",
              translateY: "-50%",
            }}
            // Entrance: fade + scale in
            initial={{ opacity: 0, scale: 0.4 }}
            animate={
              phase === "center"
                ? { opacity: 1, scale: 1 }
                : {
                    // Fly to the right edge
                    opacity: 0,
                    scale: 0.6,
                    x: "calc(50vw - 28px)",
                    y: "0px",
                  }
            }
            exit={{ opacity: 0, scale: 0.3 }}
            transition={
              phase === "center"
                ? { duration: 0.5, ease: "easeOut" }
                : { duration: 0.9, ease: [0.4, 0, 0.2, 1] }
            }
          >
            {/* Glowing ring */}
            <motion.div
              className="relative flex items-center justify-center w-20 h-20 rounded-full"
              animate={
                phase === "center"
                  ? {
                      boxShadow: [
                        "0 0 0px 0px rgba(30,58,138,0.6)",
                        "0 0 50px 22px rgba(147,197,253,0.35)",
                        "0 0 0px 0px rgba(30,58,138,0.6)",
                      ],
                    }
                  : {}
              }
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            >
              {/* Outer ring pulse */}
              <motion.span
                className="absolute inset-0 rounded-full border-2 border-[#93c5fd]/70"
                animate={{ scale: [1, 1.6, 1], opacity: [0.8, 0, 0.8] }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                  ease: "easeInOut",
                }}
              />
              <motion.span
                className="absolute inset-0 rounded-full border border-[#e2e8f0]/40"
                animate={{ scale: [1, 2.2, 1], opacity: [0.5, 0, 0.5] }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                  ease: "easeInOut",
                  delay: 0.6,
                }}
              />

              {/* Icon bubble */}
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center shadow-2xl"
                style={{
                  background:
                    "linear-gradient(135deg, #0d1b3e 0%, #1e3a8a 45%, #93c5fd 100%)",
                  boxShadow:
                    "0 8px 40px rgba(13,27,62,0.6), 0 0 0 1px rgba(147,197,253,0.25)",
                }}
              >
                <Handshake
                  className="w-7 h-7 text-white ml-1.5"
                  strokeWidth={1.8}
                />
              </div>
            </motion.div>

            {/* Label below */}
            {phase === "center" && (
              <motion.p
                className="mt-3 text-center text-[14px] font-semibold tracking-widest uppercase"
                style={{
                  color: "#93c5fd",
                  textShadow: "0 0 14px rgba(147,197,253,0.6)",
                }}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Partner with Us
              </motion.p>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Settled CTA button on the right edge ── */}
      <AnimatePresence>
        {phase === "settled" && (
          <motion.div
            key="cta-button"
            className="fixed -right-2 top-1/2 -translate-y-1/2 z-40 h-[180px] w-[56px] flex items-center justify-center"
            initial={{ opacity: 0, x: 60, scale: 0.7 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }} // spring-like overshoot
          >
            <div className="rotate-[270deg]">
              <button
                onClick={openDrawer}
                className="
                  relative px-5 py-2.5 
                  rounded-tl-[22px] rounded-tr-[22px]
                  text-white font-semibold whitespace-nowrap
                  transition-all duration-300 ease-out
                  hover:-translate-y-0.5 active:translate-y-0
                  shadow-[0_12px_30px_-10px_rgba(69,58,188,0.7)]
                  hover:shadow-[0_18px_45px_-12px_rgba(96,195,227,0.9)]
                  focus:outline-none
                "
                style={{
                  background:
                    "linear-gradient(95deg, rgb(69, 58, 188) 0%, rgb(96, 195, 227) 100%)",
                }}
              >
                <span className="absolute inset-0 rounded-tl-[22px] rounded-tr-[22px] bg-white/10 opacity-0 hover:opacity-100 transition-opacity pointer-events-none" />
                <span className="relative z-10 tracking-wide">
                  Partner with Us
                </span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
