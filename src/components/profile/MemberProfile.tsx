import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { User, MessageCircle, UserPlus, Star, Trophy, Users } from 'lucide-react';
import toast from 'react-hot-toast';

interface MemberData {
  name: string;
  username: string;
  avatar: string;
  bio: string;
  level: number;
  experience: number;
  friends: number;
  achievements: number;
}

const memberData: Record<string, MemberData> = {
  'taehyung': {
    name: '김태형',
    username: 'v',
    avatar: 'https://i.ibb.co/bRB0YND/koya.jpg',
    bio: '안녕하세요! 저는 러시아어를 가르치는 것을 좋아해요. 함께 공부해요!',
    level: 30,
    experience: 15000,
    friends: 500,
    achievements: 25
  },
  'jimin': {
    name: '박지민',
    username: 'jimin',
    avatar: 'https://i.ibb.co/C0ZFx8X/image.jpg',
    bio: '안녕하세요! 저는 한국어를 가르치는 것을 좋아해요. 함께 공부해요!',
    level: 28,
    experience: 14000,
    friends: 450,
    achievements: 23
  },
  'jungkook': {
    name: '전정국',
    username: 'jungkook',
    avatar: 'https://i.ibb.co/P6KkR8b/mang.jpg',
    bio: '안녕하세요! 저는 운동하는 것을 좋아해요. 함께 운동해요!',
    level: 25,
    experience: 12500,
    friends: 400,
    achievements: 20
  }
};

export function MemberProfile() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isFriend, setIsFriend] = useState(false);

  if (!id || !memberData[id]) {
    return <div>Member not found</div>;
  }

  const member = memberData[id];

  const handleAddFriend = () => {
    setIsFriend(true);
    toast.success('Friend request sent!');
  };

  const handleMessage = () => {
    navigate(`/chat/${id}`);
  };

  return (
    <div className="min-h-screen pt-20 px-4">
      <div className="max-w-4xl mx-auto py-8">
        <div className="bg-white rounded-2xl shadow-xl p-6">
          {/* Profile Header */}
          <div className="flex items-center space-x-6 mb-8">
            <div className="relative">
              <img
                src={member.avatar}
                alt={member.name}
                className="w-24 h-24 rounded-full object-cover border-4 border-purple-200"
              />
            </div>
            <div>
              <h1 className="text-2xl font-bold">{member.name}</h1>
              <p className="text-gray-600">@{member.username}</p>
              <p className="text-sm text-gray-500 mt-2">{member.bio}</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-4 mb-8">
            <button
              onClick={handleAddFriend}
              className={`flex items-center space-x-2 px-4 py-2 rounded-full ${
                isFriend
                  ? 'bg-green-100 text-green-700'
                  : 'bg-purple-600 text-white hover:bg-purple-700'
              } transition`}
            >
              <UserPlus className="w-5 h-5" />
              <span>{isFriend ? 'Friend Request Sent' : 'Add Friend'}</span>
            </button>
            <button
              onClick={handleMessage}
              className="flex items-center space-x-2 px-4 py-2 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 transition"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Send Message</span>
            </button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <StatCard icon={Star} label="Level" value={member.level} />
            <StatCard icon={Trophy} label="Experience" value={member.experience} />
            <StatCard icon={Users} label="Friends" value={member.friends} />
            <StatCard icon={Trophy} label="Achievements" value={member.achievements} />
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