import ProtectedImage from "@/components/ProtectedImage";

const ChatHeader = () => (
  <div className="pl-5 pr-5 pb-5 bg-none">
    {/* <ProtectedImage
      src="/brand/logo.png"
      alt="logo"
      className="h-16 mb-3"
    /> */}
    <p className="text-3xl font-thin text-white">SulTenZAI</p>
    <p className="text-xl font-thin text-white/75">
      <u>
        <a href="https://github.com/yogawan/jawiraiv1.6.3">Open Source</a>
      </u>
      <i className="text-white">User Interface</i>
      to interact with AI Model
    </p>
  </div>
);

export default ChatHeader;
