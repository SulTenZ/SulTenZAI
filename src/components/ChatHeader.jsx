import ProtectedImage from "@/components/ProtectedImage";
import { Icon } from "@iconify/react";

const ChatHeader = () => (
  <div className="pt-32 px-5 pb-5 bg-none animate-fade-in">
    <div className="flex items-center gap-3">
      <Icon
        icon="carbon:robot"
        width="32"
        height="32"
        className="text-white/90"
      />
      <p className="text-5xl font-bold text-white text-center tracking-wide">
        SulTenZ_AI
      </p>
    </div>

    <div className="flex items-center gap-2 mt-2 text-white/75 text-xl font-light">
      <Icon icon="mdi:github" width="20" height="20" />
      <a
        href="https://github.com/yogawan/jawiraiv1.6.3"
        target="_blank"
        rel="noopener noreferrer"
        className="underline hover:text-white transition"
      >
        Open Source
      </a>
      <span className="mx-1 text-white/50">|</span>
      <Icon
        icon="material-symbols:smart-toy-outline-rounded"
        width="20"
        height="20"
      />
      <span className="italic text-white">
        User Interface to interact with AI Model
      </span>
    </div>
  </div>
);

export default ChatHeader;
