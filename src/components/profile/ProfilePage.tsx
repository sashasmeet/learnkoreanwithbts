import React from 'react';
import { User, Star, Trophy, Users, Settings } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function ProfilePage() {
  const navigate = useNavigate();
  const userProfile = {
    username: "санёк юн чанён",
    level: 3,
    coins: 1250,
    playerId: "BTSLearner#1234",
    bio: "я люблю бтс и поэтому учу корейский! добавь меня в друзья и давай вместе учить корейский!!",
    experience: 1750,
    friends: 27,
    achievements: 8
  };

  const handleFriendsClick = () => {
    navigate('/friends');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-pink-100 pt-20">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-2xl shadow-xl p-6">
          {/* Profile Header */}
          <div className="flex items-center space-x-6 mb-8">
            <div className="relative">
              <img
                src="https://i.ibb.co/bRB0YND/koya.jpg"
                alt="Profile Avatar"
                className="w-24 h-24 rounded-full object-cover border-4 border-purple-200"
              />
              <button className="absolute bottom-0 right-0 bg-purple-600 text-white p-2 rounded-full">
                <Settings className="w-4 h-4" />
              </button>
            </div>
            <div>
              <h1 className="text-2xl font-bold">{userProfile.username}</h1>
              <p className="text-gray-600">Level {userProfile.level} • ID: {userProfile.playerId}</p>
              <p className="text-sm text-gray-500 mt-2">{userProfile.bio}</p>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <StatCard icon={Star} label="Coins" value={userProfile.coins} />
            <div onClick={handleFriendsClick} className="cursor-pointer">
              <StatCard icon={Users} label="Friends" value={userProfile.friends} />
            </div>
            <StatCard icon={Trophy} label="Achievements" value={userProfile.achievements} />
            <StatCard icon={Trophy} label="Experience" value={userProfile.experience} />
          </div>

          {/* Level Progress */}
          <div className="mb-8">
            <div className="flex justify-between mb-2">
              <span className="text-sm font-medium">Level Progress</span>
              <span className="text-sm text-gray-500">2500/3000 XP</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div className="bg-purple-600 h-2.5 rounded-full" style={{ width: '83%' }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({ icon: Icon, label, value }: { icon: any; label: string; value: number }) {
  return (
    <div className="bg-gray-50 rounded-xl p-4">
      <div className="flex items-center space-x-2 mb-2">
        <Icon className="w-4 h-4 text-purple-600" />
        <span className="text-sm text-gray-600">{label}</span>
      </div>
      <p className="text-xl font-bold">{value}</p>
    </div>
  );
}