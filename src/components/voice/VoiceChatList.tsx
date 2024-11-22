import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mic, Users, MessageCircle, Crown, Home, User, HelpCircle } from 'lucide-react';
import { CreateRoomModal } from './CreateRoomModal';

const rooms = [
  {
    id: 'room-1',
    name: "K-pop Fans Chat Room",
    host: {
      name: 'Карина 선배💖',
      avatar: 'https://i.ibb.co/bRB0YND/koya.jpg',
      language: 'ko'
    },
    participants: 28,
    language: 'Korean'
  },
  {
    id: 'room-2',
    name: "K-drama Discussion",
    host: {
      name: 'Пилипенко Валерия🥺',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=a2',
      language: 'ru'
    },
    participants: 15,
    language: 'Russian'
  },
  {
    id: 'room-3',
    name: "Korean Language Study Group",
    host: {
      name: 'Ася Чонвонова😴',
      avatar: 'https://i.ibb.co/P6KkR8b/mang.jpg',
      language: 'ko'
    },
    participants: 22,
    language: 'Korean'
  },
  {
    id: 'room-4',
    name: "BTS Music & Korean Study",
    host: {
      name: 'Даша Мордвинова ㅎㅎ',
      avatar: 'https://i.ibb.co/bRB0YND/koya.jpg',
      language: 'ko'
    },
    participants: 19,
    language: 'Korean'
  },
  {
    id: 'room-5',
    name: "Русский с K-pop",
    host: {
      name: 'Дарья Радаева',
      avatar: 'https://i.ibb.co/C0ZFx8X/image.jpg',
      language: 'ru'
    },
    participants: 12,
    language: 'Russian'
  }
];

function NavButton({ icon: Icon, label, onClick }: { icon: any; label: string; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="flex flex-col items-center space-x-1 text-gray-300 hover:text-white transition"
    >
      <Icon className="w-6 h-6" />
      <span className="text-xs">{label}</span>
    </button>
  );
}

export function VoiceChatList() {
  const navigate = useNavigate();
  const [filter, setFilter] = useState<'All' | 'Korean' | 'Russian'>('All');
  const [showCreateModal, setShowCreateModal] = useState(false);

  const filteredRooms = rooms.filter(room => 
    filter === 'All' ? true : room.language === filter
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-purple-900 pt-20">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold flex items-center text-white">
            <Mic className="w-8 h-8 mr-3 text-purple-400" />
            Voice Chat Rooms
          </h1>
          <button
            onClick={() => setShowCreateModal(true)}
            className="px-4 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition flex items-center space-x-2"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Create Room</span>
          </button>
        </div>

        <div className="flex space-x-4 mb-8">
          {['All', 'Korean', 'Russian'].map((option) => (
            <button
              key={option}
              onClick={() => setFilter(option as 'All' | 'Korean' | 'Russian')}
              className={`px-4 py-2 rounded-full ${
                filter === option
                  ? 'bg-purple-600 text-white'
                  : 'bg-white/10 text-white hover:bg-white/20'
              } transition`}
            >
              {option}
            </button>
          ))}
        </div>

        <div className="space-y-4 mb-20">
          {filteredRooms.map((room) => (
            <div
              key={room.id}
              onClick={() => navigate(`/voice/room/${room.id}`)}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-4 shadow-lg hover:bg-white/20 transition cursor-pointer"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={room.host.avatar}
                  alt={room.host.name}
                  className="w-12 h-12 rounded-full"
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-lg text-white">{room.name}</h3>
                  <div className="flex items-center space-x-2 text-sm text-gray-300">
                    <span>{room.host.name}</span>
                    <span className="px-2 py-0.5 rounded-full bg-purple-600/20 text-purple-300 text-xs">
                      {room.language}
                    </span>
                  </div>
                </div>
                <div className="flex items-center space-x-2 text-gray-300">
                  <Users className="w-5 h-5" />
                  <span>{room.participants}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Navigation */}
        <div className="fixed bottom-0 left-0 right-0 bg-black/30 backdrop-blur-sm py-6">
          <div className="max-w-4xl mx-auto px-4">
            <div className="flex justify-around">
              <NavButton icon={HelpCircle} label="Help" onClick={() => navigate('/support')} />
              <NavButton icon={Users} label="Friends" onClick={() => navigate('/friends')} />
              <NavButton icon={Home} label="Home" onClick={() => navigate('/')} />
              <NavButton icon={Crown} label="Premium" onClick={() => navigate('/premium')} />
              <NavButton icon={User} label="Profile" onClick={() => navigate('/profile')} />
            </div>
          </div>
        </div>
      </div>

      <CreateRoomModal 
        isOpen={showCreateModal} 
        onClose={() => setShowCreateModal(false)} 
      />
    </div>
  );
}