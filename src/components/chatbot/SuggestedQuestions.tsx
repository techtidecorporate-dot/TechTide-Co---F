/**
 * SuggestedQuestions — clickable chips shown below the initial greeting.
 * Clicking a chip behaves exactly like the user typing and sending that message.
 */

import React from "react";
import { techtideKnowledge } from "@/data/techtideData";

interface SuggestedQuestionsProps {
  onSelect: (question: string) => void;
  /** Hide after the first user message */
  visible: boolean;
}

export const SuggestedQuestions: React.FC<SuggestedQuestionsProps> = ({
  onSelect,
  visible,
}) => {
  if (!visible) return null;

  return (
    <div
      className="flex-shrink-0 px-4 pb-3"
      role="group"
      aria-label="Suggested questions"
    >
      <p className="text-[10px] text-gray-400 uppercase tracking-wide mb-2 font-medium">
        Quick questions
      </p>
      <div className="flex flex-wrap gap-2">
        {techtideKnowledge.suggestedQuestions.map((question) => (
          <button
            key={question}
            type="button"
            onClick={() => onSelect(question)}
            className="text-xs px-3 py-1.5 rounded-full border border-[#453abc]/30 text-[#453abc] bg-[#453abc]/5 hover:bg-[#453abc]/10 hover:border-[#453abc]/50 transition-all duration-200 font-medium focus:outline-none focus:ring-2 focus:ring-[#453abc]/40 active:scale-95"
          >
            {question}
          </button>
        ))}
      </div>
    </div>
  );
};
