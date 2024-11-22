import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Mic, Users, ArrowRight } from 'lucide-react';

export function VoiceChatPreview() {
  const navigate = useNavigate();
  
  const activeRooms = [
    {
      name: "Korean Practice with BTS Songs",
      participants: 28,
      language: "Korean"
    },
    {
      name: "K-Drama Discussion",
      participants: 15,
      language: "Korean"
    }
  ];

  return (
    <div className="py-16 px-4 bg-gradient-to-b from-purple-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 flex items-center justify-center">
            <Mic className="w-8 h-8 mr-3 text-purple-600" />
            Voice Chat Rooms
          </h2>
          <p className="text-gray-600">
            Practice speaking Korean with native speakers and fellow learners
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {activeRooms.map((room, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition cursor-pointer"
              onClick={() => navigate('/voice')}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-lg">{room.name}</h3>
                <span className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm">
                  {room.language}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 text-gray-600">
                  <Users className="w-5 h-5" />
                  <span>{room.participants} participants</span>
                </div>
                <ArrowRight className="w-5 h-5 text-purple-600" />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={() => navigate('/voice')}
            className="px-6 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition inline-flex items-center space-x-2"
          >
            <Mic className="w-5 h-5" />
            <span>Join Voice Chat</span>
          </button>
        </div>
      </div>
    </div>
  );
}