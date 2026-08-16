/**
 * ChatButton — the floating launcher button that opens/closes the chat window.
 * Fixed bottom-right with a gradient matching the TechTide brand.
 */

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";

interface ChatButtonProps {
  isOpen: boolean;
  unreadCount: number;
  onClick: () => void;
}

export const ChatButton: React.FC<ChatButtonProps> = ({
  isOpen,
  unreadCount,
  onClick,
}) => {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      aria-label={isOpen ? "Close chatbot" : "Open chatbot"}
      aria-expanded={isOpen}
      aria-haspopup="dialog"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[61] w-12 h-12 sm:w-14 sm:h-14 rounded-full text-white flex items-center justify-center shadow-[0_8px_30px_rgba(69,58,188,0.5)] hover:shadow-[0_12px_40px_rgba(69,58,188,0.65)] transition-shadow focus:outline-none focus:ring-4 focus:ring-[#453abc]/40"
      style={{
        background: "linear-gradient(135deg, #453abc 0%, #60c3e3 100%)",
      }}
    >
      {/* Pulse ring — only when closed */}
      {!isOpen && (
        <span className="absolute inset-0 rounded-full animate-ping opacity-20 bg-[#453abc]" />
      )}

      {/* Icon swap with animation */}
      <AnimatePresence mode="wait" initial={false}>
        {isOpen ? (
          <motion.span
            key="close"
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <X size={22} />
          </motion.span>
        ) : (
          <motion.span
            key="open"
            initial={{ rotate: 90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: -90, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <MessageCircle size={22} />
          </motion.span>
        )}
      </AnimatePresence>

      {/* Unread badge */}
      <AnimatePresence>
        {unreadCount > 0 && !isOpen && (
          <motion.span
            key="badge"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-red-500 text-white text-[10px] font-bold flex items-center justify-center shadow-md"
            aria-label={`${unreadCount} unread message${unreadCount > 1 ? "s" : ""}`}
          >
            {unreadCount > 9 ? "9+" : unreadCount}
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
};
