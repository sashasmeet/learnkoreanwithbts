import React from 'react';
import { Crown, Trophy, Medal } from 'lucide-react';

interface LeaderboardEntry {
  rank: number;
  username: string;
  avatar: string;
  score: number;
}

interface LeaderboardProps {
  entries: LeaderboardEntry[];
}

export function Leaderboard({ entries }: LeaderboardProps) {
  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Crown className="h-5 w-5 text-yellow-400" />;
      case 2:
        return <Trophy className="h-5 w-5 text-gray-400" />;
      case 3:
        return <Medal className="h-5 w-5 text-amber-600" />;
      default:
        return <span className="text-gray-500">#{rank}</span>;
    }
  };

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
      <h3 className="font-semibold text-lg mb-6">Top Learners</h3>
      <div className="space-y-4">
        {entries.map((entry) => (
          <div
            key={entry.rank}
            className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-50 transition"
          >
            <div className="w-8 flex justify-center">{getRankIcon(entry.rank)}</div>
            <img
              src={entry.avatar}
              alt={entry.username}
              className="w-10 h-10 rounded-full"
            />
            <div className="flex-1">
              <p className="font-medium">{entry.username}</p>
              <p className="text-sm text-gray-500">{entry.score} points</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}