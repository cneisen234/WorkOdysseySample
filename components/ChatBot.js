import { useState } from "react";
import styles from "../styles/ChatBot.module.css";

export default function ChatBot({ userType }) {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: `Hello! I'm your AI assistant. How can I help you with your ${
        userType === "employer" ? "hiring" : "job search"
      } today?`,
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      // This will connect to your OpenAI API in production
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [...messages, userMessage],
          userType,
        }),
      });

      const data = await response.json();
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.response },
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Sorry, I encountered an error. This is a mock implementation - in production this will connect to OpenAI API.",
        },
      ]);
    }

    setIsLoading(false);
  };

  return (
    <div className={styles.chatBot}>
      <div className={styles.chatHeader}>
        <h3>AI Assistant</h3>
        <span className={styles.mockBadge}>Mock OpenAI Integration</span>
      </div>
      <div className={styles.chatMessages}>
        {messages.map((message, index) => (
          <div
            key={index}
            className={`${styles.message} ${styles[message.role]}`}>
            {message.content}
          </div>
        ))}
        {isLoading && <div className={styles.loading}>AI is typing...</div>}
      </div>
      <div className={styles.chatInput}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          placeholder="Ask me anything..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}
