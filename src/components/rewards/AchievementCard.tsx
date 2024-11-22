import React from 'react';
import { Trophy, Lock } from 'lucide-react';
import type { Achievement } from '../../types/rewards';

interface AchievementCardProps {
  achievement: Achievement;
  progress: number;
  isUnlocked: boolean;
}

export function AchievementCard({ achievement, progress, isUnlocked }: AchievementCardProps) {
  const progressPercentage = Math.min((progress / achievement.requirement.value) * 100, 100);

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg relative overflow-hidden">
      <div className={`absolute inset-0 bg-gradient-to-r ${
        isUnlocked ? 'from-purple-500/10 to-pink-500/10' : 'from-gray-100 to-gray-200'
      }`} />
      
      <div className="relative">
        <div className="flex items-center justify-between mb-4">
          <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-full p-3">
            {isUnlocked ? (
              <Trophy className="h-6 w-6 text-purple-600" />
            ) : (
              <Lock className="h-6 w-6 text-gray-400" />
            )}
          </div>
          <span className="text-sm font-medium text-gray-500">
            {progress}/{achievement.requirement.value}
          </span>
        </div>

        <h3 className="text-lg font-semibold mb-2">{achievement.title}</h3>
        <p className="text-gray-600 text-sm mb-4">{achievement.description}</p>

        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="h-full rounded-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-500"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
      </div>
    </div>
  );
}