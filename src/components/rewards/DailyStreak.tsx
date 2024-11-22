import React from 'react';
import { Calendar, Star } from 'lucide-react';

interface DailyStreakProps {
  currentStreak: number;
  bestStreak: number;
  daysThisWeek: boolean[];
}

export function DailyStreak({ currentStreak, bestStreak, daysThisWeek }: DailyStreakProps) {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <Calendar className="h-5 w-5 text-purple-600" />
          <h3 className="font-semibold text-lg">Daily Streak</h3>
        </div>
        <div className="flex items-center space-x-1">
          <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
          <span className="text-sm text-gray-600">Best: {bestStreak} days</span>
        </div>
      </div>

      <div className="flex justify-between mb-6">
        {daysThisWeek.map((isComplete, index) => (
          <div
            key={index}
            className={`flex flex-col items-center ${
              isComplete ? 'text-purple-600' : 'text-gray-400'
            }`}
          >
            <div className={`w-8 h-8 rounded-full flex items-center justify-center mb-1 ${
              isComplete
                ? 'bg-purple-100'
                : 'bg-gray-100'
            }`}>
              <Star
                className={`h-4 w-4 ${
                  isComplete ? 'fill-purple-600' : ''
                }`}
              />
            </div>
            <span className="text-xs">
              {['M', 'T', 'W', 'T', 'F', 'S', 'S'][index]}
            </span>
          </div>
        ))}
      </div>

      <div className="text-center">
        <div className="text-3xl font-bold text-purple-600 mb-1">
          {currentStreak}
        </div>
        <p className="text-sm text-gray-600">Days in a row</p>
      </div>
    </div>
  );
}