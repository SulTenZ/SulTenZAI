import React, { useState, useEffect } from "react";
import { requestToGroqAI } from "@/utilities/groq";
import ChatHeader from "@/components/ChatHeader";
import ChatForm from "@/components/ChatForm";
import ChatHistory from "@/components/ChatHistory";
import ChatFloating from "@/components/ChatFloating";
import Navbar from "@/components/Navbar";
import Head from "next/head";

const ChatAI = () => {
  const [input, setInput] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasHistory, setHasHistory] = useState(false);

  useEffect(() => {
    try {
      const savedHistory = JSON.parse(localStorage.getItem("chatHistory"));
      if (Array.isArray(savedHistory) && savedHistory.length > 0) {
        setChatHistory(savedHistory);
        setHasHistory(true);
      } else {
        setHasHistory(false);
      }
    } catch {
      setChatHistory([]);
      setHasHistory(false);
    }
  }, []);

  useEffect(() => {
    if (chatHistory.length > 0) {
      localStorage.setItem("chatHistory", JSON.stringify(chatHistory));
      setHasHistory(true);
    } else {
      localStorage.removeItem("chatHistory");
      setHasHistory(false);
    }
  }, [chatHistory]);

  const handleSend = async () => {
    if (!input.trim() || input.length > 500) return;

    const userMessage = { role: "user", content: input };
    setChatHistory((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const aiResponse = await requestToGroqAI(input);
      const aiMessage = { role: "ai", content: aiResponse };
      setChatHistory((prev) => [...prev, aiMessage]);
    } catch {
      setChatHistory((prev) => [
        ...prev,
        { role: "ai", content: "Sorry, an error occurred." },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClearHistory = () => {
    setChatHistory([]);
  };

  return (
    <div className="bg-[url('/assets/deepseek.png')] bg-center flex justify-center pt-32">
      <Head>
        <title></title>
      </Head>
      <div className="w-full sm:w-[720px]">
        <div className="flex flex-col min-h-screen">
          {/* <Navbar /> */}
          {!hasHistory && (
            <div>
              <ChatHeader />
              <ChatForm
                input={input}
                setInput={setInput}
                handleSend={handleSend}
                isLoading={isLoading}
              />
            </div>
          )}
          {hasHistory && (
            <ChatFloating
              input={input}
              setInput={setInput}
              handleSend={handleSend}
              isLoading={isLoading}
            />
          )}
          <ChatHistory
            chatHistory={chatHistory}
            isLoading={isLoading}
            handleClearHistory={handleClearHistory}
          />
        </div>
      </div>
    </div>
  );
};

export default ChatAI;
