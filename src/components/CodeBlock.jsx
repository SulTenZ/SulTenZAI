import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
const dracula =
  require("react-syntax-highlighter/dist/cjs/styles/prism/dracula").default;

const CodeBlock = ({ content }) => {
  const [copiedIndex, setCopiedIndex] = useState(null);
  const parts = content.split(/(```[\s\S]*?```)/g); // split markdown code blocks

  const handleCopyCode = (code, index) => {
    navigator.clipboard.writeText(code);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="text-xs overflow-x-auto">
      {parts.map((part, index) => {
        if (part.startsWith("```")) {
          const languageMatch = part.match(/```(\w+)?/);
          const language = languageMatch ? languageMatch[1] : "plaintext";
          const code = part.replace(/```[a-z]*\n?/i, "").replace(/```$/, "");

          return (
            <div
              key={index}
              className="relative border border-white/10 text-white rounded-xl mb-5 p-4 bg-[#1e1e1e] overflow-x-auto"
            >
              <button
                onClick={() => handleCopyCode(code, index)}
                className="absolute top-2 right-2 border border-white/15 text-white text-[10px] px-2 py-1 rounded hover:bg-gray-600 transition-all duration-150"
              >
                {copiedIndex === index ? "Copied!" : "Copy"}
              </button>

              <SyntaxHighlighter
                language={language}
                style={dracula}
                className="rounded-xl !bg-transparent"
                customStyle={{
                  margin: 0,
                  fontSize: "0.75rem",
                  background: "transparent",
                }}
              >
                {code}
              </SyntaxHighlighter>
            </div>
          );
        }

        return <FormattedText key={index} text={part} />;
      })}
    </div>
  );
};

const FormattedText = ({ text }) => {
  return (
    <div className="text-white/80 mb-2 leading-relaxed">
      {text.split("\n").map((line, index) => (
        <p key={index} className="whitespace-pre-wrap">
          {line}
        </p>
      ))}
    </div>
  );
};

export default CodeBlock;
