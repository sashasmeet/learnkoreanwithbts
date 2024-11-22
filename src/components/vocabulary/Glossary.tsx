import React, { useState } from 'react';
import { Search, BookOpen } from 'lucide-react';
import { vocabularyData, VocabularyItem } from '../../data/vocabulary';

export function Glossary() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string | null>(null);

  const filteredWords = vocabularyData.filter(word => {
    const matchesSearch = searchTerm === '' || 
      word.korean.toLowerCase().includes(searchTerm.toLowerCase()) ||
      word.english.toLowerCase().includes(searchTerm.toLowerCase()) ||
      word.romanization.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesDifficulty = !selectedDifficulty || word.difficulty === selectedDifficulty;
    
    return matchesSearch && matchesDifficulty;
  });

  const groupedWords = filteredWords.reduce((acc, word) => {
    if (!acc[word.category]) {
      acc[word.category] = [];
    }
    acc[word.category].push(word);
    return acc;
  }, {} as Record<string, VocabularyItem[]>);

  return (
    <div className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 flex items-center justify-center">
            <BookOpen className="w-8 h-8 mr-3 text-purple-600" />
            Korean Vocabulary Glossary
          </h2>
          <p className="text-gray-600">
            Complete list of vocabulary words organized by category and difficulty
          </p>
        </div>

        <div className="mb-8 flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search words..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setSelectedDifficulty(null)}
              className={`px-4 py-2 rounded-lg ${
                !selectedDifficulty
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-100 text-gray-700'
              }`}
            >
              All
            </button>
            {['beginner', 'intermediate', 'advanced'].map((difficulty) => (
              <button
                key={difficulty}
                onClick={() => setSelectedDifficulty(difficulty)}
                className={`px-4 py-2 rounded-lg capitalize ${
                  selectedDifficulty === difficulty
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-100 text-gray-700'
                }`}
              >
                {difficulty}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-8">
          {Object.entries(groupedWords).map(([category, words]) => (
            <div key={category} className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4 capitalize">
                {category.replace('-', ' ')}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {words.map((word) => (
                  <div
                    key={word.id}
                    className="p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-bold text-lg">{word.korean}</h4>
                      <span className="text-xs px-2 py-1 rounded-full bg-purple-100 text-purple-600 capitalize">
                        {word.difficulty}
                      </span>
                    </div>
                    <p className="text-gray-600">{word.romanization}</p>
                    <p className="text-gray-800">{word.english}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}