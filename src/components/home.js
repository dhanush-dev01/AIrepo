import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { FaPaperPlane, FaUser, FaRobot } from 'react-icons/fa';
import './Home.css';

const Home = () => {
  const [prompt, setPrompt] = useState('');
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!prompt.trim()) return;

    const userMessage = { sender: 'user', text: prompt };
    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);
    setPrompt('');

    try {
      const res = await fetch('http://127.0.0.1:5000/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt }),
      });

      if (!res.body) throw new Error('No response body received.');

      const reader = res.body.getReader();
      const decoder = new TextDecoder('utf-8');
      let result = '';

      while (true) {
        const { value, done } = await reader.read();
        if (done) break;
        result += decoder.decode(value, { stream: true });

        setMessages((prev) => {
          const lastMessage = prev[prev.length - 1];
          if (lastMessage.sender === 'bot') {
            return [...prev.slice(0, -1), { sender: 'bot', text: result }];
          } else {
            return [...prev, { sender: 'bot', text: result }];
          }
        });
      }
    } catch (error) {
      console.error('Error:', error);
      setMessages((prev) => [...prev, { sender: 'bot', text: 'An error occurred.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-header">Solve IT</div>
      <div className="chat-box">
        {messages.map((msg, index) => (
          <div key={index} className={`chat-message ${msg.sender}`}>
            {msg.sender === 'user' ? <FaUser className="icon user" /> : <FaRobot className="icon bot" />}
            <div className="message-content">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>{msg.text}</ReactMarkdown>
            </div>
          </div>
        ))}
        {isLoading && <div className="loading">Typing<span className="dots">...</span></div>}
      </div>
      <form className="chat-input" onSubmit={handleSubmit}>
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Type a message..."
          rows="2"
          disabled={isLoading}
        />
        <button type="submit" disabled={isLoading}>
          <FaPaperPlane />
        </button>
      </form>
    </div>
  );
};

export default Home;
