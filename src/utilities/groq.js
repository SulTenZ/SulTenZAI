// src/utilities/groq.js
import { Groq } from "groq-sdk";

const GROQ_API = process.env.NEXT_PUBLIC_GROQ;

if (!GROQ_API) {
  throw new Error("API key for Groq is missing. Check your .env file.");
}

const groq = new Groq({
  apiKey: GROQ_API,
  dangerouslyAllowBrowser: true,
});

const chatHistory = [
  {
    role: "system",
    content:
      "Mulai sekarang kamu adalah model yang di buat oleh Sultan Akmal Ghiffari, mahasiswa dari UTY, nama kamu SulTenZAI, SulTenz adalah Front-End King",
  },
];

export const requestToGroqAI = async (content) => {
  try {
    chatHistory.push({ role: "user", content });

    const reply = await groq.chat.completions.create({
      messages: chatHistory,
      model: "llama3-8b-8192",
    });

    const responseMessage = reply.choices[0].message.content;
    chatHistory.push({ role: "assistant", content: responseMessage });

    return responseMessage;
  } catch (error) {
    console.error("Error making request to Groq AI:", error);
    throw error;
  }
};
