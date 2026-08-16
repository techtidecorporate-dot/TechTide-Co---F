/**
 * ChatWindow — the full chat panel that slides into view.
 * Desktop: floating panel anchored bottom-right.
 * Mobile: full-screen overlay.
 */

import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChatHeader } from "./ChatHeader";
import { ChatMessages } from "./ChatMessages";
import { SuggestedQuestions } from "./SuggestedQuestions";
import { ChatInput } from "./ChatInput";
import type { Message } from "./ChatMessage";

interface ChatWindowProps {
  isOpen: boolean;
  messages: Message[];
  isTyping: boolean;
  inputValue: string;
  showSuggestions: boolean;
  onClose: () => void;
  onMinimize: () => void;
  onInputChange: (value: string) => void;
  onSend: () => void;
  onSuggestionSelect: (question: string) => void;
}

export const ChatWindow: React.FC<ChatWindowProps> = ({
  isOpen,
  messages,
  isTyping,
  inputValue,
  showSuggestions,
  onClose,
  onMinimize,
  onInputChange,
  onSend,
  onSuggestionSelect,
}) => {
  return (
    <>
      {/* Mobile backdrop — separate AnimatePresence instance */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-[59] sm:hidden"
            onClick={onClose}
            aria-hidden="true"
          />
        )}
      </AnimatePresence>

      {/* Chat panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="chat-panel"
            role="dialog"
            aria-label="TechTide chatbot"
            aria-modal="true"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 30,
            }}
            className="fixed z-[60] flex flex-col bg-gray-50 shadow-2xl overflow-hidden inset-x-0 bottom-0 h-[100dvh] sm:inset-auto sm:bottom-24 sm:right-6 sm:w-[380px] sm:h-[600px] sm:max-h-[80vh] sm:rounded-2xl md:w-[400px] lg:w-[420px] xl:w-[450px]"
          >
            <ChatHeader onClose={onClose} onMinimize={onMinimize} />

            <ChatMessages messages={messages} isTyping={isTyping} />

            <SuggestedQuestions
              visible={showSuggestions}
              onSelect={onSuggestionSelect}
            />

            <ChatInput
              value={inputValue}
              onChange={onInputChange}
              onSend={onSend}
              disabled={isTyping}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
