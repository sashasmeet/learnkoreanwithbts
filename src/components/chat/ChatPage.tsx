import React, { useState, useEffect, useRef } from 'react';
import { Send, Mic, User, Bot } from 'lucide-react';

const botMessages = [
  "안녕하세요! 한국어를 연습하고 싶으세요?",
  "오늘은 어떤 주제로 대화하고 싶으세요?",
  "한국어 실력이 많이 늘었네요!",
  "새로운 단어를 배워볼까요?",
  "한국 문화에 대해 이야기해볼까요?",
  "BTS 노래로 한국어를 배워보는 건 어떨까요?",
  "오늘도 열심히 공부하시네요!",
  "질문이 있으시다면 언제든 물어보세요!",
  "한국어로 대화하는 게 재미있죠?",
  "좋아하는 K-pop 가수가 있나요?",
  "한국 드라마를 보면서 공부하면 더 재미있어요!",
  "발음이 정말 좋아졌어요!",
  "오늘은 어떤 한국어 표현을 배우고 싶으세요?",
  "한국 여행 가보고 싶으신가요?",
  "한국어로 일기를 써보는 건 어떨까요?"
];

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([
    { 
      id: 1, 
      text: "안녕하세요! 한국어를 연습하고 싶으세요?", 
      sender: "bot",
      timestamp: new Date()
    },
    {
      id: 2,
      text: "네, 연습하고 싶어요!",
      sender: "user",
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomMessage = botMessages[Math.floor(Math.random() * botMessages.length)];
      setMessages(prev => [...prev, {
        id: Date.now(),
        text: randomMessage,
        sender: 'bot',
        timestamp: new Date()
      }]);
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = () => {
    if (inputText.trim()) {
      setMessages([
        ...messages,
        { 
          id: Date.now(), 
          text: inputText, 
          sender: "user",
          timestamp: new Date()
        }
      ]);
      setInputText("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-4xl mx-auto h-screen p-4 flex flex-col">
        <div className="bg-white rounded-t-xl shadow-lg p-4">
          <div className="flex items-center space-x-3">
            <img
              src="https://i.ibb.co/C0ZFx8X/image.jpg"
              alt="AI Assistant"
              className="w-10 h-10 rounded-full"
            />
            <div>
              <h2 className="font-bold">VAN - Korean Practice Bot</h2>
              <p className="text-sm">
                <span className="text-emerald-500 font-medium">● Online</span> - Ready to help
              </p>
            </div>
          </div>
        </div>

        <div className="flex-1 bg-gray-50 p-4 overflow-y-auto">
          <div className="space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${
                  message.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[70%] rounded-xl p-3 ${
                    message.sender === "user"
                      ? "bg-purple-600 text-white"
                      : "bg-white"
                  }`}
                >
                  <p>{message.text}</p>
                  <p className="text-xs mt-1 opacity-70">
                    {message.timestamp.toLocaleTimeString()}
                  </p>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
        </div>

        <div className="bg-white rounded-b-xl shadow-lg p-4">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsRecording(!isRecording)}
              className={`p-2 rounded-full ${
                isRecording ? "bg-red-100 text-red-600" : "bg-gray-100"
              }`}
            >
              <Mic className="w-6 h-6" />
            </button>
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message..."
              className="flex-1 border border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:border-purple-400"
            />
            <button
              onClick={sendMessage}
              className="p-2 bg-purple-600 text-white rounded-full hover:bg-purple-700"
            >
              <Send className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}