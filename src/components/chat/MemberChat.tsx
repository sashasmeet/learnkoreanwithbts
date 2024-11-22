import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Send, ArrowLeft, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const memberMessages = {
  'taehyung': [
    '안녕하세요! 오늘 한국어 공부하셨나요?',
    '화이팅! 열심히 해봐요!',
    '저도 영어 공부중이에요 ㅎㅎ',
    '한국 음식 좋아하세요?',
    '다음에 또 얘기해요!',
    '나랑 사귈래? ♡',
    '보고 싶어 ˗ˏˋ ♡ ˎˊ˗',
    '내 마음이 알지? ♥︎',
    '뭐 하니? 🧸ིྀ',
    '나랑 데이트 할래? ♡',
    '나랑 결혼할래 ㅎ?',
    '보고 싶다 ♡',
    '오늘도 예쁘네요 ♡',
    '같이 카페 갈래요? ♡',
    '당신을 생각하면 행복해요 ♡'
  ],
  'jimin': [
    '안녕하세요~ 오늘도 좋은 하루 보내세요!',
    '한국어 실력이 늘고 있네요!',
    '질문 있으시면 언제든 물어보세요!',
    '파이팅! 잘 하실 수 있어요!',
    '같이 공부하니까 재미있어요!',
    '우리 같이 춤출래요? ♡',
    '나랑 영화 볼래? ♡',
    '오늘 날씨처럼 예쁘네요 ♡',
    '내 맘에 들어와줄래? ♡',
    '같이 있고 싶어요 ♡',
    '당신이 좋아요 ♡',
    '우리 손잡고 걸을까요? ♡',
    '내 마음이 들리나요? ♡',
    '오늘도 행복하세요 ♡',
    '당신을 위한 노래를 불러드릴게요 ♡'
  ],
  'jungkook': [
    '안녕하세요! 오늘도 열심히 해봐요!',
    '한국어 어렵지 않죠?',
    '저랑 같이 연습해요!',
    '실력이 많이 늘었어요!',
    '다음에 또 봐요!',
    '나랑 운동할래요? ♡',
    '같이 게임할래요? ♡',
    '오늘 기분이 좋네요 ♡',
    '당신이 특별해요 ♡',
    '우리 친구할래요? ♡',
    '같이 노래할까요? ♡',
    '당신의 미소가 예뻐요 ♡',
    '오늘도 화이팅! ♡',
    '함께 있어서 행복해요 ♡',
    '우리 같이 꿈꿀래요? ♡'
  ]
};

const memberData = {
  'taehyung': {
    name: '김태형',
    avatar: 'https://i.ibb.co/bRB0YND/koya.jpg'
  },
  'jimin': {
    name: '박지민',
    avatar: 'https://i.ibb.co/C0ZFx8X/image.jpg'
  },
  'jungkook': {
    name: '전정국',
    avatar: 'https://i.ibb.co/P6KkR8b/mang.jpg'
  }
};

const friendMessages = [
  '안녕하세요!',
  '네, 알겠습니다!',
  '좋아요 ^^',
  '감사합니다!',
  '화이팅!',
  '다음에 또 봐요!',
  '재미있네요!',
  '그렇군요~',
  '저도 그렇게 생각해요',
  '좋은 하루 보내세요!'
];

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'member';
  timestamp: Date;
}

export function MemberChat() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  const isBTSMember = id && id in memberData;
  const member = isBTSMember ? memberData[id as keyof typeof memberData] : null;
  const memberResponses = isBTSMember ? memberMessages[id as keyof typeof memberMessages] : friendMessages;

  useEffect(() => {
    const interval = setInterval(() => {
      const randomResponse = memberResponses[Math.floor(Math.random() * memberResponses.length)];
      setMessages(prev => [...prev, {
        id: Date.now(),
        text: randomResponse,
        sender: 'member',
        timestamp: new Date()
      }]);
    }, 10000);

    return () => clearInterval(interval);
  }, [id, memberResponses]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = () => {
    if (inputText.trim()) {
      setMessages(prev => [...prev, {
        id: Date.now(),
        text: inputText,
        sender: 'user',
        timestamp: new Date()
      }]);
      setInputText('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Chat Header */}
      <div className="fixed top-16 left-0 right-0 bg-white border-b z-10">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center space-x-4">
            <button onClick={() => navigate(-1)} className="p-2 hover:bg-gray-100 rounded-full">
              <ArrowLeft className="w-6 h-6" />
            </button>
            {member ? (
              <img
                src={member.avatar}
                alt={member.name}
                className="w-10 h-10 rounded-full"
              />
            ) : (
              <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                <User className="w-6 h-6 text-gray-500" />
              </div>
            )}
            <div>
              <h2 className="font-semibold">{member ? member.name : id}</h2>
              <p className="text-sm text-green-500">Online</p>
            </div>
          </div>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="max-w-4xl mx-auto px-4 pt-24 pb-24">
        <div className="space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[70%] rounded-lg p-3 ${
                  message.sender === 'user'
                    ? 'bg-purple-600 text-white'
                    : 'bg-white'
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

      {/* Chat Input */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-4">
        <div className="max-w-4xl mx-auto flex items-center space-x-4">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type your message..."
            className="flex-1 border border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:border-purple-400"
          />
          <button
            onClick={handleSend}
            className="p-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
          >
            <Send className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
}