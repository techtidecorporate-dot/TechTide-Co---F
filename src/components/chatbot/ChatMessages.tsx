/**
 * ChatMessages — scrollable message list with auto-scroll and typing indicator.
 */

import React, { useEffect, useRef } from "react";
import { ChatMessage, type Message } from "./ChatMessage";

interface ChatMessagesProps {
  messages: Message[];
  isTyping: boolean;
}

/** Animated three-dot typing indicator */
const TypingIndicator: React.FC = () => (
  <div className="flex gap-2 justify-start" aria-label="Bot is typing">
    {/* Bot avatar */}
    <div
      className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-md mt-0.5"
      style={{
        background: "linear-gradient(135deg, #453abc 0%, #60c3e3 100%)",
      }}
      aria-hidden="true"
    >
      T
    </div>
    {/* Bubble */}
    <div className="bg-white border border-gray-100 rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm flex items-center gap-1.5">
      <span
        className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"
        style={{ animationDelay: "0ms" }}
      />
      <span
        className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"
        style={{ animationDelay: "150ms" }}
      />
      <span
        className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"
        style={{ animationDelay: "300ms" }}
      />
    </div>
  </div>
);

export const ChatMessages: React.FC<ChatMessagesProps> = ({
  messages,
  isTyping,
}) => {
  const bottomRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom on new messages or typing state change
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  return (
    <div
      className="flex-1 overflow-y-auto px-4 py-4 space-y-4 scroll-smooth"
      role="log"
      aria-label="Chat messages"
      aria-live="polite"
    >
      {messages.map((msg) => (
        <ChatMessage key={msg.id} message={msg} />
      ))}

      {isTyping && <TypingIndicator />}

      {/* Scroll anchor */}
      <div ref={bottomRef} aria-hidden="true" />
    </div>
  );
};
