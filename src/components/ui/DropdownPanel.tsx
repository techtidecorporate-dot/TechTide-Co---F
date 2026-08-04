import { useRef, type ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface DropdownPanelProps {
  isOpen: boolean;
  onClose: () => void;
  onStayOpen: () => void;
  children: ReactNode;
  maxWidth?: string;
}

export function DropdownPanel({ isOpen, onClose, onStayOpen, children, maxWidth = "max-w-7xl" }: DropdownPanelProps) {
  const panelRef = useRef<HTMLDivElement>(null);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <div
            className="absolute left-0 right-0 z-40"
            style={{ top: "80px", height: "16px" }}
            onMouseEnter={onStayOpen}
            onMouseLeave={onClose}
          />
          <motion.div
            ref={panelRef}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute left-0 right-0 z-40"
            style={{ top: "calc(80px + 16px)" }}
            onMouseEnter={onStayOpen}
            onMouseLeave={onClose}
          >
            <div className={`${maxWidth} mx-auto px-6 md:px-10`}>
              {children}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
