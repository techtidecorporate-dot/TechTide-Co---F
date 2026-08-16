/**
 * ChatInput — controlled text input with send button and Enter-key support.
 */

import React, { useRef, useEffect } from "react";
import { Send } from "lucide-react";

interface ChatInputProps {
  value: string;
  onChange: (value: string) => void;
  onSend: () => void;
  disabled?: boolean;
}

export const ChatInput: React.FC<ChatInputProps> = ({
  value,
  onChange,
  onSend,
  disabled = false,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  // Focus on mount
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (!disabled && value.trim()) {
        onSend();
      }
    }
  };

  const canSend = !disabled && value.trim().length > 0;

  return (
    <div className="flex-shrink-0 px-4 py-3 border-t border-gray-100 bg-white rounded-b-2xl">
      <div className="flex items-center gap-2">
        <label htmlFor="chatbot-input" className="sr-only">
          Type your message
        </label>
        <input
          id="chatbot-input"
          ref={inputRef}
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={handleKeyDown}
          disabled={disabled}
          placeholder="Ask me anything about TechTide…"
          autoComplete="off"
          className="flex-1 px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 text-base sm:text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#453abc]/40 focus:border-[#453abc] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        />
        <button
          type="button"
          onClick={onSend}
          disabled={!canSend}
          aria-label="Send message"
          className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-white transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:translate-y-0 shadow-md hover:shadow-lg"
          style={{
            background: canSend
              ? "linear-gradient(135deg, #453abc 0%, #60c3e3 100%)"
              : "#d1d5db",
          }}
        >
          <Send size={16} />
        </button>
      </div>
      <p className="text-[10px] text-gray-400 mt-1.5 text-center">
        Press <kbd className="font-sans">Enter</kbd> to send
      </p>
    </div>
  );
};
