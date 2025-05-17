import React, { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import stringSimilarity from 'string-similarity';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [chat, setChat] = useState([]);
  const [input, setInput] = useState('');

  const faq = {
    "how do i sell my license": "Just upload your license — we’ll evaluate it and send payment once approved!",
    "what types of licenses do you accept": "We accept Microsoft Office, Adobe Creative Suite, AutoCAD, and more.",
    "how long does it take": "Once verified, you'll get paid within 24–48 hours.",
    "is this safe": "Absolutely. We use secure channels and work only with verified buyers.",
    "hello": "Hello there! 👋 I'm here to help.",
    "hi": "Hi! 😊 How can I assist you today?",
    "what's your name": "I'm SoftBot — your friendly assistant from SoftSell."
  };

  useEffect(() => {
    if (isOpen && chat.length === 0) {
      setChat([
        { bot: "👋 Hi there! I'm SoftBot. How can I help you today?" },
         ]);
    }
  }, [isOpen]);

  const handleSend = () => {
    const question = input.trim().toLowerCase();
    if (!question) return;

    const keys = Object.keys(faq);
    const match = stringSimilarity.findBestMatch(question, keys).bestMatch;

    const response =
      match.rating > 0.4
        ? faq[match.target]
        : "🤔 I'm not sure I understood. Could you rephrase that?";

    setChat([...chat, { user: input, bot: response }]);
    setInput('');
  };

  return (
    <div style={{ position: 'fixed', bottom: 20, right: 20, zIndex: 1000 }}>
      {isOpen && (
        <div
          className="p-3 shadow rounded"
          style={{
            width: 300,
            maxHeight: 400,
            backgroundColor: 'var(--bs-body-bg)',
            color: 'var(--bs-body-color)',
            border: '1px solid #ccc',
            overflowY: 'auto',
            marginBottom: '10px'
          }}
        >
          <div><strong>SoftBot 🤖</strong></div>
          <div style={{ fontSize: '0.9rem', marginTop: '10px' }}>
            {chat.map((c, i) => (
              <div key={i} className="mb-2">
                {c.user && <div><strong>You:</strong> {c.user}</div>}
                {c.bot && <div><strong>Bot:</strong> {c.bot}</div>}
              </div>
            ))}
          </div>
          <Form.Control
            type="text"
            placeholder="Ask a question..."
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && handleSend()}
            className="mt-2"
          />
          <Button variant="primary" className="mt-2 w-100" onClick={handleSend}>Send</Button>
        </div>
      )}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        variant="primary"
        className="rounded-circle shadow"
        style={{ width: 56, height: 56, padding: 0 }}
        title={isOpen ? 'Close chat' : 'Open chat'}
      >
        {isOpen ? '×' : '💬'}
      </Button>
    </div>
  );
};

export default ChatWidget;
