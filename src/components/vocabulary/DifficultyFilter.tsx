import React from 'react';
import { Filter } from 'lucide-react';

type Difficulty = 'beginner' | 'intermediate' | 'advanced';

interface DifficultyFilterProps {
  selectedDifficulty: Difficulty | null;
  onSelectDifficulty: (difficulty: Difficulty | null) => void;
}

export function DifficultyFilter({
  selectedDifficulty,
  onSelectDifficulty,
}: DifficultyFilterProps) {
  const difficulties = [
    { value: 'beginner', label: 'Beginner (초급1-2)' },
    { value: 'intermediate', label: 'Intermediate (중급3-4)' },
    { value: 'advanced', label: 'Advanced (고급5-6)' }
  ];

  return (
    <div className="mb-8">
      <div className="flex items-center space-x-2 mb-4">
        <Filter className="h-5 w-5 text-purple-600" />
        <h3 className="font-semibold">Difficulty</h3>
      </div>
      <div className="flex space-x-4">
        <button
          onClick={() => onSelectDifficulty(null)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition ${
            selectedDifficulty === null
              ? 'bg-purple-600 text-white'
              : 'bg-white/80 text-gray-600 hover:bg-purple-50'
          }`}
        >
          All
        </button>
        {difficulties.map(({ value, label }) => (
          <button
            key={value}
            onClick={() => onSelectDifficulty(value as Difficulty)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition ${
              selectedDifficulty === value
                ? 'bg-purple-600 text-white'
                : 'bg-white/80 text-gray-600 hover:bg-purple-50'
            }`}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}