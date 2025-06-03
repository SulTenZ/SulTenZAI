import { Icon } from "@iconify/react";
import CodeBlock from "./CodeBlock";

const ChatMessage = ({ message, index }) => {
  const isUser = message.role === "user";

  return (
    <div
      className={`flex m-5 ${
        isUser ? "justify-end" : "justify-start"
      } animate-fade-in`}
    >
      {!isUser && (
        <div className="flex items-start text-white/60 mr-2">
          <Icon icon="fluent-emoji:robot-face" width="24" height="24" />
        </div>
      )}

      <div className="flex-col max-w-[80%]">
        <div
          className={`text-sm whitespace-pre-wrap leading-relaxed px-4 py-3 border transition-all duration-200 ${
            isUser
              ? "bg-white/5 text-white border-white/15 rounded-l-2xl rounded-tr-2xl"
              : "bg-white/10 text-white/90 border-white/10 rounded-r-2xl rounded-tl-2xl"
          }`}
        >
          {message.role === "ai" ? (
            <CodeBlock content={message.content} />
          ) : (
            <p>{message.content || "Error: No message content"}</p>
          )}
        </div>
      </div>

      {isUser && (
        <div className="flex items-start text-white/60 ml-2">
          <Icon
            icon="fluent-emoji:man-technologist-medium-light"
            width="24"
            height="24"
          />
        </div>
      )}
    </div>
  );
};

export default ChatMessage;
