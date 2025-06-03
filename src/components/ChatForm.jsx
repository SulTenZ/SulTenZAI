import { Icon } from "@iconify/react";

const ChatForm = ({ input, setInput, handleSend, isLoading }) => {
  const handleKeyDown = (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      if (!isLoading) handleSend();
    }
  };

  return (
    <div className="w-full bg-white/5 backdrop-blur-md border border-white/15 rounded-3xl shadow-xl transition-all duration-300">
      <div className="relative">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Tulis pesan kamu disini..."
          disabled={isLoading}
          className="bg-transparent text-white placeholder-white/40 rounded-3xl w-full h-20 sm:h-28 p-5 pr-16 resize-none focus:outline-none focus:ring-2 focus:ring-white/20 transition duration-200"
        />

        <button
          onClick={handleSend}
          disabled={isLoading}
          className={`absolute bottom-4 right-4 p-3 rounded-full flex items-center justify-center shadow-md transition-all duration-200 ${
            isLoading
              ? "bg-white/10 text-white cursor-not-allowed animate-pulse"
              : "bg-gradient-to-br from-white/10 to-white/20 hover:from-white/20 hover:to-white/30 text-white hover:scale-110"
          }`}
        >
          <Icon
            icon={
              isLoading ? "line-md:loading-twotone-loop" : "line-md:arrow-right"
            }
            width="24"
            height="24"
          />
        </button>
      </div>
    </div>
  );
};

export default ChatForm;
