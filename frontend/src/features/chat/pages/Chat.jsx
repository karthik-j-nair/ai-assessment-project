import React, { useState, useRef, useEffect } from "react";
import Navbar from "../../shared/components/Navbar";
import { useChat } from "../hooks/useChat"; // Adjust path as needed
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const Chat = () => {
  const { chats, handleSendChat } = useChat();
  const [inputValue, setInputValue] = useState("");
  const [isSending, setIsSending] = useState(false);
  const messagesEndRef = useRef(null);

  // Auto-scroll to the bottom when chats update or when sending a message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chats, isSending]);

  const onSend = async (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const messageToSend = inputValue;
    setInputValue("");
    setIsSending(true);

    try {
      await handleSendChat({ message: messageToSend });
    } catch (error) {
      console.error("Failed to send message:", error);
      // Optional: Handle error UI here
    } finally {
      setIsSending(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      onSend(e);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-slate-50 font-sans text-slate-800 selection:bg-indigo-100 selection:text-indigo-900">
      {/* Keeping Navbar at the top */}
      <div className="shrink-0 shadow-sm bg-white z-10 relative">
        <Navbar showLaunchApp={false}/>
      </div>

      {/* Main Chat Interface */}
      <main className="flex-1 overflow-hidden flex flex-col container mx-auto max-w-5xl p-4 md:p-6">
        <div className="flex-1 bg-white border border-slate-200 rounded-2xl shadow-sm flex flex-col overflow-hidden">
          {/* Chat Messages Area */}
          <div className="chat-message-area flex-1 overflow-y-auto p-4 md:p-6 space-y-6 bg-slate-50/50">
            {/* Empty State */}
            {(!chats || chats.length === 0) && !isSending && (
              <div className="h-full flex flex-col items-center justify-center text-center opacity-70">
                <div className="w-16 h-16 bg-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center mb-4 text-3xl shadow-sm">
                  👋
                </div>
                <h2 className="text-2xl font-bold text-slate-800 mb-2">
                  Welcome to <span className="text-indigo-600">AI CHAT BOT!</span>
                </h2>
                <p className="text-slate-500 max-w-md">
                  I'm your AI assistant. Ask me anything about programming,
                  tools etc.
                </p>
              </div>
            )}

            {/* Chat Bubbles */}
            {chats &&
              chats.map((chatRecord) => {
                const [id, userText, botText] = chatRecord;

                return (
                  <React.Fragment key={id}>
                    {/* User Message */}
                    <div className="flex justify-end">
                      <div className="bg-indigo-600 text-white px-5 py-3.5 rounded-2xl rounded-tr-sm max-w-[85%] md:max-w-[75%] shadow-sm">
                        <p className="whitespace-pre-wrap">{userText}</p>
                      </div>
                    </div>

                    {/* Bot Message */}
                    <div className="flex justify-start">
                      <div className="bg-white border border-slate-200 text-slate-800 px-5 py-3.5 rounded-2xl rounded-tl-sm max-w-[90%] md:max-w-[80%] shadow-sm prose prose-slate prose-p:leading-relaxed prose-pre:bg-slate-800 prose-pre:text-slate-50">
                        {/* using ReactMarkdown to format the bold text, lists, and code blocks from your backend */}
                        <ReactMarkdown remarkPlugins={[remarkGfm]}>
                          {botText}
                        </ReactMarkdown>
                      </div>
                    </div>
                  </React.Fragment>
                );
              })}

            {/* Loading Indicator */}
            {isSending && (
              <div className="flex justify-start">
                <div className="bg-white border border-slate-200 px-5 py-4 rounded-2xl rounded-tl-sm shadow-sm flex items-center gap-2">
                  <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                  <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                  <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce"></div>
                </div>
              </div>
            )}

            {/* Invisible div to scroll to */}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="shrink-0 p-4 bg-white border-t border-slate-100">
            <form
              onSubmit={onSend}
              className="relative flex items-end gap-2 bg-slate-50 border border-slate-300 rounded-3xl p-1.5 focus-within:ring-2 focus-within:ring-indigo-500/20 focus-within:border-indigo-500 transition-all shadow-inner"
            >
              <textarea
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask here..."
                className="flex-1 max-h-32 min-h-11 bg-transparent border-none focus:ring-0 resize-none px-4 py-3 text-slate-800 placeholder-slate-400 outline-none"
                rows="1"
              />
              <button
                type="submit"
                disabled={!inputValue.trim() || isSending}
                className={`p-3 rounded-full flex items-center justify-center transition-all ${
                  inputValue.trim() && !isSending
                    ? "bg-indigo-600 text-white hover:bg-indigo-700 shadow-md"
                    : "bg-slate-200 text-slate-400 cursor-not-allowed"
                }`}
              >
                {/* Send Icon SVG */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M3.478 2.404a.75.75 0 00-.926.941l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.404z" />
                </svg>
              </button>
            </form>
            <div className="text-center mt-2">
              <span className="text-xs text-slate-400">
                AI can make mistakes. Verify important information.
              </span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Chat;
