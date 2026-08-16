/**
 * ChatMessage — renders a single message bubble (user or bot).
 *
 * Bot messages support a simple markdown-like rendering:
 *  - **bold** → <strong>
 *  - Lines starting with • → list items
 *  - [text](/path) → internal links
 */

import React from "react";

export interface Message {
  id: string;
  role: "user" | "bot";
  text: string;
  timestamp: Date;
}

interface ChatMessageProps {
  message: Message;
}

/** Parse **bold** text */
function parseBold(text: string): React.ReactNode[] {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    }
    return part;
  });
}

/** Parse [link text](/path) into anchor tags */
function parseLinks(
  nodes: React.ReactNode[],
): React.ReactNode[] {
  return nodes.flatMap((node, nodeIdx) => {
    if (typeof node !== "string") return [node];
    const parts = node.split(/(\[[^\]]+\]\([^)]+\))/g);
    return parts.map((part, i) => {
      const match = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
      if (match) {
        return (
          <a
            key={`${nodeIdx}-${i}`}
            href={match[2]}
            className="text-[#453abc] underline hover:text-[#60c3e3] transition-colors"
            // Internal links — same tab; external links — new tab would need more logic
          >
            {match[1]}
          </a>
        );
      }
      return part;
    });
  });
}

/** Render a single line that may contain bold + links */
function renderInline(line: string): React.ReactNode {
  const withBold = parseBold(line);
  const withLinks = parseLinks(withBold);
  return <>{withLinks}</>;
}

/** Parse bot message text into structured React nodes */
function renderBotText(text: string): React.ReactNode {
  const lines = text.split("\n");
  const elements: React.ReactNode[] = [];
  let bulletBuffer: string[] = [];

  const flushBullets = () => {
    if (bulletBuffer.length > 0) {
      elements.push(
        <ul key={`ul-${elements.length}`} className="mt-1 space-y-1">
          {bulletBuffer.map((b, i) => (
            <li key={i} className="flex gap-1.5">
              <span className="mt-0.5 text-[#453abc] flex-shrink-0">•</span>
              <span>{renderInline(b)}</span>
            </li>
          ))}
        </ul>,
      );
      bulletBuffer = [];
    }
  };

  lines.forEach((line, idx) => {
    const trimmed = line.trim();
    if (!trimmed) {
      flushBullets();
      // Only add spacing if not the last line
      if (idx < lines.length - 1) {
        elements.push(<div key={`sp-${idx}`} className="h-1" />);
      }
    } else if (trimmed.startsWith("• ")) {
      bulletBuffer.push(trimmed.slice(2));
    } else {
      flushBullets();
      elements.push(
        <p key={`p-${idx}`} className="leading-relaxed">
          {renderInline(trimmed)}
        </p>,
      );
    }
  });

  flushBullets();
  return elements;
}

export const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const isBot = message.role === "bot";

  return (
    <div
      className={`flex gap-2 ${isBot ? "justify-start" : "justify-end"} group`}
    >
      {/* Bot avatar */}
      {isBot && (
        <div
          className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-md mt-0.5"
          style={{
            background: "linear-gradient(135deg, #453abc 0%, #60c3e3 100%)",
          }}
          aria-hidden="true"
        >
          T
        </div>
      )}

      {/* Bubble */}
      <div
        className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm shadow-sm ${
          isBot
            ? "bg-white border border-gray-100 text-gray-700 rounded-tl-sm"
            : "text-white rounded-tr-sm"
        }`}
        style={
          !isBot
            ? {
                background:
                  "linear-gradient(135deg, #453abc 0%, #60c3e3 100%)",
              }
            : undefined
        }
        role={isBot ? "status" : undefined}
        aria-live={isBot ? "polite" : undefined}
      >
        <div className="space-y-1">
          {isBot ? renderBotText(message.text) : <p>{message.text}</p>}
        </div>

        {/* Timestamp */}
        <p
          className={`text-[10px] mt-1.5 ${isBot ? "text-gray-400" : "text-white/60"} text-right`}
        >
          {message.timestamp.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </p>
      </div>
    </div>
  );
};
