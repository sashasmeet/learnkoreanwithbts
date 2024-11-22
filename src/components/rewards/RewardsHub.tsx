import React from 'react';
import { Trophy, Star, Gift, Crown } from 'lucide-react';

export function RewardsHub() {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Rewards & Achievements</h2>
          <p className="text-gray-600">
            Track your progress and earn exclusive rewards
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <RewardCard
            icon={Trophy}
            title="Daily Streak"
            progress={7}
            total={10}
            description="Complete 10 days in a row"
          />
          <RewardCard
            icon={Star}
            title="Vocabulary Master"
            progress={45}
            total={100}
            description="Learn 100 new words"
          />
          <RewardCard
            icon={Gift}
            title="Quiz Champion"
            progress={8}
            total={10}
            description="Score perfect in 10 quizzes"
          />
          <RewardCard
            icon={Crown}
            title="Community Leader"
            progress={25}
            total={50}
            description="Help 50 other learners"
          />
        </div>
      </div>
    </div>
  );
}

function RewardCard({ icon: Icon, title, progress, total, description }: {
  icon: any;
  title: string;
  progress: number;
  total: number;
  description: string;
}) {
  const percentage = (progress / total) * 100;

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
      <div className="flex items-center space-x-4 mb-4">
        <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
          <Icon className="h-6 w-6 text-purple-600" />
        </div>
        <div>
          <h3 className="font-semibold">{title}</h3>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
      </div>
      <div className="relative pt-1">
        <div className="flex mb-2 items-center justify-between">
          <div>
            <span className="text-xs font-semibold inline-block text-purple-600">
              {Math.round(percentage)}%
            </span>
          </div>
          <div className="text-right">
            <span className="text-xs font-semibold inline-block text-gray-600">
              {progress}/{total}
            </span>
          </div>
        </div>
        <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-purple-100">
          <div
            style={{ width: `${percentage}%` }}
            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-600"
          ></div>
        </div>
      </div>
    </div>
  );
}