/**
 * ChatHeader — top bar of the chat window.
 * Shows bot avatar, name, status, and close button.
 */

import React from "react";
import { X, Minus } from "lucide-react";

interface ChatHeaderProps {
  onClose: () => void;
  onMinimize: () => void;
}

export const ChatHeader: React.FC<ChatHeaderProps> = ({
  onClose,
  onMinimize,
}) => {
  return (
    <div
      className="flex-shrink-0 flex items-center justify-between px-4 py-3 rounded-t-2xl"
      style={{
        background: "linear-gradient(135deg, #453abc 0%, #60c3e3 100%)",
      }}
    >
      {/* Bot info */}
      <div className="flex items-center gap-3">
        {/* Avatar */}
        <div className="relative">
          <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center text-white font-bold text-base shadow-inner">
            T
          </div>
          {/* Online indicator */}
          <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-green-400 border-2 border-white" />
        </div>

        <div>
          <p className="text-white font-semibold text-sm leading-none">
            TechTide Assistant
          </p>
          <p className="text-white/70 text-xs mt-0.5">Online · Instant reply</p>
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center gap-1">
        <button
          type="button"
          onClick={onMinimize}
          aria-label="Minimize chat"
          className="w-7 h-7 rounded-full flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-all focus:outline-none focus:ring-2 focus:ring-white/50"
        >
          <Minus size={14} />
        </button>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close chat"
          className="w-7 h-7 rounded-full flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-all focus:outline-none focus:ring-2 focus:ring-white/50"
        >
          <X size={14} />
        </button>
      </div>
    </div>
  );
};
