import React from 'react';
import { BookOpen, Star, Trophy, Calendar, Gift, Heart, MessageCircle, Crown, Award, Medal, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Mission {
  id: string;
  title: string;
  description: string;
  reward: number;
  progress: number;
  total: number;
  type: 'daily' | 'weekly' | 'achievement';
  icon: React.ElementType;
}

export function MissionsPage() {
  const dailyMissions: Mission[] = [
    {
      id: 'daily-1',
      title: 'Complete 3 Lessons',
      description: 'Study and complete three vocabulary lessons',
      reward: 50,
      progress: 1,
      total: 3,
      type: 'daily',
      icon: BookOpen
    },
    {
      id: 'daily-2',
      title: 'Practice Speaking',
      description: 'Complete one speaking practice session',
      reward: 30,
      progress: 1,
      total: 1,
      type: 'daily',
      icon: MessageCircle
    },
    {
      id: 'daily-3',
      title: 'Review Vocabulary',
      description: 'Review your learned words',
      reward: 40,
      progress: 15,
      total: 20,
      type: 'daily',
      icon: Star
    }
  ];

  const weeklyMissions: Mission[] = [
    {
      id: 'weekly-1',
      title: 'Maintain 5-day Streak',
      description: 'Keep your learning streak for 7 days',
      reward: 200,
      progress: 5,
      total: 7,
      type: 'weekly',
      icon: Calendar
    },
    {
      id: 'weekly-2',
      title: 'Learn 50 New Words',
      description: 'Master new vocabulary',
      reward: 150,
      progress: 23,
      total: 50,
      type: 'weekly',
      icon: BookOpen
    }
  ];

  const achievements: Mission[] = [
    {
      id: 'achievement-1',
      title: 'Vocabulary Master',
      description: 'Learn 1000 words',
      reward: 500,
      progress: 234,
      total: 1000,
      type: 'achievement',
      icon: Crown
    },
    {
      id: 'achievement-2',
      title: 'Social Butterfly',
      description: 'Make 30 friends',
      reward: 300,
      progress: 27,
      total: 30,
      type: 'achievement',
      icon: Heart
    },
    {
      id: 'achievement-3',
      title: 'Perfect Streak',
      description: 'Maintain a 30-day streak',
      reward: 1000,
      progress: 5,
      total: 30,
      type: 'achievement',
      icon: Award
    }
  ];

  const topLearners = [
    { 
      rank: 1, 
      name: '김태형', 
      username: 'taehyung',
      score: 2500, 
      avatar: 'https://i.ibb.co/bRB0YND/koya.jpg' 
    },
    { 
      rank: 2, 
      name: '전정국', 
      username: 'jungkook',
      score: 2300, 
      avatar: 'https://i.ibb.co/P6KkR8b/mang.jpg' 
    },
    { 
      rank: 3, 
      name: '박지민', 
      username: 'jimin',
      score: 2100, 
      avatar: 'https://i.ibb.co/C0ZFx8X/image.jpg' 
    }
  ];

  return (
    <div className="min-h-screen pt-20 px-4">
      <div className="max-w-4xl mx-auto py-8">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-3">
            <Trophy className="w-8 h-8 text-purple-600" />
            <h1 className="text-3xl font-bold">Missions & Quests</h1>
          </div>
          <div className="flex items-center space-x-2">
            <Star className="w-5 h-5 text-yellow-400" />
            <span className="font-medium">1250 coins</span>
          </div>
        </div>

        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <Calendar className="w-5 h-5 mr-2 text-purple-600" />
              Daily Missions
            </h2>
            <div className="grid gap-4">
              {dailyMissions.map(mission => (
                <MissionCard key={mission.id} mission={mission} />
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <Trophy className="w-5 h-5 mr-2 text-purple-600" />
              Weekly Challenges
            </h2>
            <div className="grid gap-4">
              {weeklyMissions.map(mission => (
                <MissionCard key={mission.id} mission={mission} />
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <Medal className="w-5 h-5 mr-2 text-purple-600" />
              Achievements
            </h2>
            <div className="grid gap-4">
              {achievements.map(achievement => (
                <MissionCard key={achievement.id} mission={achievement} />
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <Crown className="w-5 h-5 mr-2 text-purple-600" />
              Leaderboard
            </h2>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="space-y-4">
                {topLearners.map((learner) => (
                  <div key={learner.rank} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                    <span className="font-bold text-gray-500">#{learner.rank}</span>
                    <Link to={`/member/${learner.username}`} className="flex items-center space-x-4 flex-1 hover:opacity-80 transition">
                      <img 
                        src={learner.avatar} 
                        alt={learner.name} 
                        className="w-10 h-10 rounded-full"
                      />
                      <div>
                        <h3 className="font-medium">{learner.name}</h3>
                        <p className="text-sm text-gray-600">{learner.score} points</p>
                      </div>
                    </Link>
                    <Link
                      to={`/member/${learner.username}`}
                      className="px-4 py-2 bg-purple-600 text-white rounded-full text-sm hover:bg-purple-700 transition"
                    >
                      View Profile
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

function MissionCard({ mission }: { mission: Mission }) {
  const progress = Math.round((mission.progress / mission.total) * 100);
  const Icon = mission.icon;

  return (
    <div className="bg-white rounded-xl p-6 shadow-lg">
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-purple-100 rounded-lg">
            <Icon className="w-5 h-5 text-purple-600" />
          </div>
          <div>
            <h3 className="font-semibold">{mission.title}</h3>
            <p className="text-sm text-gray-600">{mission.description}</p>
          </div>
        </div>
        <div className="flex items-center space-x-1">
          <Star className="w-4 h-4 text-yellow-400" />
          <span className="font-medium">{mission.reward}</span>
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Progress</span>
          <span className="font-medium">{mission.progress}/{mission.total}</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className={`h-2 rounded-full transition-all duration-300 ${
              mission.id === 'daily-2' ? 'bg-green-500' : 'bg-purple-600'
            }`}
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}