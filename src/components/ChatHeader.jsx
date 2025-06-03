import { Icon } from "@iconify/react";

const ChatHeader = () => (
  <header className="pt-24 px-6 pb-6 bg-gradient-to-b from-[#000080]/70 to-transparent animate-fade-in">
    <div className="max-w-3xl mx-auto flex flex-col items-center">
      <div className="flex items-center gap-4">
        <Icon
          icon="mdi:brain"
          width={40}
          height={40}
          className="text-white/90"
          aria-label="Brain Icon"
        />
        <h1 className="text-6xl font-extrabold text-white tracking-tight select-none">
          SulTenZ AI
        </h1>
      </div>

      <p className="mt-2 text-lg text-white/70 italic text-center max-w-md">
        Boost your productivity with a smart and responsive AI assistant
      </p>

      <nav className="mt-5 flex items-center gap-4 text-white/70 text-sm font-medium select-none">
        <Icon icon="mdi:github" width={20} height={20} aria-hidden="true" />
        <a
          href="https://github.com/username/prodai-assistant"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-white transition-colors"
        >
          Visit our GitHub
        </a>
      </nav>
    </div>
  </header>
);

export default ChatHeader;
