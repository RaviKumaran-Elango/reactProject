// Chatbox.js

import React, { useState } from 'react';
import Message from './mes';

const Chatbox = () => {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState('');

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  const handleSendMessage = () => {
    if (userInput.trim() !== '') {
      setMessages([...messages, { text: userInput, type: 'user' }]);
      // Here you can send the user's message to a backend for processing
      // and receive a bot's response to update the messages state.
      // For simplicity, we'll only add the user message in this example.
      setUserInput('');
    }
  };

  return (
    <div className="chatbox">
      <div className="messages">
        {messages.map((message, index) => (
          <Message key={index} text={message.text} type={message.type} />
        ))}
      </div>
      <div className="input-area">
        <input
          type="text"
          value={userInput}
          onChange={handleInputChange}
          placeholder="Type your message..."
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chatbox;
