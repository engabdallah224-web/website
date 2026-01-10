// src/components/TokiyoChat.jsx
import { useState } from "react";
import { tokiyoAI } from "../lib/ai";

export default function TokiyoChat() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "👋 Salaam! Waxaan ahay *TOKIYO AI*. Maxaan ku caawin karaa?" }
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMsg = { sender: "user", text: input };
    const botMsg = { sender: "bot", text: tokiyoAI(input) };

    setMessages([...messages, userMsg, botMsg]);
    setInput("");
  };

  return (
    <>
      {/* Floating button */}
      <button className="ai-button" onClick={() => setOpen(true)}>
        🤖 TOKIYO AI
      </button>

      {open && (
        <div className="ai-window">
          <div className="ai-header">
            <span>TOKIYO AI Chat</span>
            <button className="close-btn" onClick={() => setOpen(false)}>✖</button>
          </div>

          <div className="ai-body">
            {messages.map((m, i) => (
              <div key={i} className={`msg ${m.sender}`}>
                {m.text}
              </div>
            ))}
          </div>

          <div className="ai-footer">
            <input
              placeholder="Ku qor su’aashaada..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={sendMessage}>Send</button>
          </div>
        </div>
      )}
    </>
  );
}
