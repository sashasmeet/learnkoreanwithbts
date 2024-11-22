import React from 'react';
import { BookOpen, Star, BarChart3 } from 'lucide-react';

interface ProgressStats {
  wordsLearned: number;
  totalWords: number;
  streak: number;
  accuracy: number;
}

interface VocabularyProgressProps {
  stats: ProgressStats;
}

export function VocabularyProgress({ stats }: VocabularyProgressProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
      <ProgressCard
        icon={BookOpen}
        title="Words Learned"
        value={`${stats.wordsLearned}/${stats.totalWords}`}
        subtitle="Keep going!"
      />
      <ProgressCard
        icon={Star}
        title="Daily Streak"
        value={`${stats.streak} days`}
        subtitle="Practice daily"
      />
      <ProgressCard
        icon={BarChart3}
        title="Accuracy"
        value={`${Math.round(stats.accuracy)}%`}
        subtitle="Getting better!"
      />
    </div>
  );
}

function ProgressCard({ icon: Icon, title, value, subtitle }: {
  icon: any;
  title: string;
  value: string;
  subtitle: string;
}) {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
      <div className="flex items-center space-x-4">
        <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
          <Icon className="h-6 w-6 text-purple-600" />
        </div>
        <div>
          <h3 className="font-semibold text-gray-900">{title}</h3>
          <p className="text-sm text-gray-600">{subtitle}</p>
        </div>
      </div>
      <div className="mt-4">
        <span className="text-2xl font-bold text-purple-600">{value}</span>
      </div>
    </div>
  );
}