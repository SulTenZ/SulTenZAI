import ChatMessage from "@/components/ChatMessage";
import { Icon } from "@iconify/react";

const ChatHistory = ({ chatHistory, isLoading, handleClearHistory }) => (
  <div className="flex-col pb-64 animate-fade-in">
    {chatHistory.length === 0 ? (
      <div className="mt-5 text-center">
        <Icon icon="mdi:alert-circle-outline" width="24" height="24" className="text-white/50 mx-auto mb-2" />
        <p className="text-xs font-light leading-[120%] text-white/50">
          Jika ada pesan yang tidak sepantasnya,<br />
          silakan lapor <u><a href="https://github.com/yogawan/jawiraiv1.6.3" target="_blank" rel="noopener noreferrer" className="hover:text-white">di sini</a></u> yaaaaaaa...
        </p>
      </div>
    ) : (
      chatHistory.map((message, index) => (
        <ChatMessage key={index} message={message} index={index} />
      ))
    )}

    {isLoading && (
      <div className="flex items-start gap-2 m-5 animate-pulse">
        <Icon icon="line-md:loading-twotone-loop" width="18" height="18" className="text-white mt-2" />
        <div className="w-fit text-xs p-3 rounded-r-xl rounded-bl-xl bg-white/5 text-white/60 border border-white/15">
          Typing...
        </div>
      </div>
    )}

    {chatHistory.length > 0 && (
      <div className="flex justify-center p-5">
        <button
          onClick={handleClearHistory}
          className="flex items-center gap-2 px-5 py-3 border border-white/10 text-xs text-white rounded-full hover:bg-white/10 transition"
        >
          <Icon icon="material-symbols:delete-outline" width="16" height="16" />
          Clear History
        </button>
      </div>
    )}
  </div>
);

export default ChatHistory;
