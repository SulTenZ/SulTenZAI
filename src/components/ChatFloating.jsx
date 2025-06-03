import { Icon } from "@iconify/react";
import { useRef, useEffect } from "react";

const ChatFloating = ({ input, setInput, handleSend, isLoading }) => {
  const textareaRef = useRef(null);

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      if (!isLoading) handleSend();
    }
  };

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [input]);

  return (
    <div className="z-50 fixed bottom-4 left-4 right-4 lg:left-[360px] lg:right-[360px] bg-white/5 backdrop-blur border border-white/15 rounded-3xl p-3">
      <div className="relative">
        <textarea
          ref={textareaRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Masukkan pesan di sini..."
          className="bg-transparent text-white/70 placeholder-white/30 rounded-2xl w-full max-h-[200px] pr-14 p-4 resize-none focus:outline-none text-sm"
          rows={1}
          disabled={isLoading}
        />

        <button
          onClick={handleSend}
          disabled={isLoading}
          className={`absolute bottom-2.5 right-3 p-2 rounded-full transition ${
            isLoading ? "text-white/30 cursor-not-allowed" : "hover:bg-white/10 text-white"
          }`}
        >
          <Icon
            icon={isLoading ? "line-md:loading-twotone-loop" : "line-md:arrow-small-right"}
            width="24"
            height="24"
          />
        </button>
      </div>
    </div>
  );
};

export default ChatFloating;
