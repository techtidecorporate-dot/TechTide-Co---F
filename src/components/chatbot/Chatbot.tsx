/**
 * Chatbot — root component that orchestrates all chatbot state and behaviour.
 *
 * Architecture:
 *  - UI state: isOpen, isMinimized, inputValue, messages[], isTyping, unread
 *  - Knowledge: imported from techtideData.ts (no external API)
 *  - Matching: delegated to chatbotMatcher.ts (no if/else here)
 *  - Components: ChatButton, ChatWindow (which composes Header/Messages/Input/Suggestions)
 */

import React, { useState, useCallback, useRef, useEffect } from "react";
import { ChatButton } from "./ChatButton";
import { ChatWindow } from "./ChatWindow";
import type { Message } from "./ChatMessage";
import { matchUserInput } from "@/utils/chatbotMatcher";
import { techtideKnowledge } from "@/data/techtideData";

/** Generate a simple unique ID without external deps */
function uid(): string {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}

function createBotMessage(text: string): Message {
  return { id: uid(), role: "bot", text, timestamp: new Date() };
}

function createUserMessage(text: string): Message {
  return { id: uid(), role: "user", text, timestamp: new Date() };
}

/** Simulated typing delay (ms) — makes it feel natural, not instant */
const TYPING_DELAY = 800;

export const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [unreadCount, setUnreadCount] = useState(1); // greeting counts as 1

  const [messages, setMessages] = useState<Message[]>([
    createBotMessage(techtideKnowledge.greeting),
  ]);

  // Suggestions are shown until the user sends their first real message
  const [showSuggestions, setShowSuggestions] = useState(true);

  // We need a ref to track if the component is mounted (to avoid state updates after unmount)
  const isMounted = useRef(true);
  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);

  // Clear unread count when the window opens
  useEffect(() => {
    if (isOpen) {
      setUnreadCount(0);
    }
  }, [isOpen]);


  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  const handleMinimize = useCallback(() => {
    setIsMinimized(true);
    setIsOpen(false);
  }, []);

  const handleToggle = useCallback(() => {
    setIsOpen((prev) => {
      const nextOpen = !prev;
      if (nextOpen) {
        // Re-opening: always reset minimized
        setIsMinimized(false);
      }
      return nextOpen;
    });
  }, []);

  /** Core send flow — called for both typed messages and suggested questions */
  const sendMessage = useCallback(
    (text: string) => {
      const trimmed = text.trim();
      if (!trimmed || isTyping) return;

      // 1. Add user message immediately
      const userMsg = createUserMessage(trimmed);
      setMessages((prev) => [...prev, userMsg]);
      setInputValue("");
      setShowSuggestions(false);

      // 2. Show typing indicator
      setIsTyping(true);

      // 3. After delay, add bot response
      setTimeout(() => {
        if (!isMounted.current) return;

        const { response } = matchUserInput(trimmed);
        const botMsg = createBotMessage(response);

        setMessages((prev) => [...prev, botMsg]);
        setIsTyping(false);

        // If window is closed/minimized, increment unread
        if (!isOpen) {
          setUnreadCount((c) => c + 1);
        }
      }, TYPING_DELAY);
    },
    [isTyping, isOpen],
  );

  const handleSend = useCallback(() => {
    sendMessage(inputValue);
  }, [inputValue, sendMessage]);

  const handleSuggestionSelect = useCallback(
    (question: string) => {
      sendMessage(question);
    },
    [sendMessage],
  );

  return (
    <>
      {/* Floating launcher */}
      <ChatButton
        isOpen={isOpen && !isMinimized}
        unreadCount={unreadCount}
        onClick={handleToggle}
      />

      {/* Chat panel */}
      <ChatWindow
        isOpen={isOpen && !isMinimized}
        messages={messages}
        isTyping={isTyping}
        inputValue={inputValue}
        showSuggestions={showSuggestions}
        onClose={handleClose}
        onMinimize={handleMinimize}
        onInputChange={setInputValue}
        onSend={handleSend}
        onSuggestionSelect={handleSuggestionSelect}
      />
    </>
  );
};
