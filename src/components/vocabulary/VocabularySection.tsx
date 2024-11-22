import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { VocabularyCard } from './VocabularyCard';
import { VocabularyProgress } from './VocabularyProgress';
import { CategorySelector } from './CategorySelector';
import { DifficultyFilter } from './DifficultyFilter';
import { Glossary } from './Glossary';
import { BTSLessons } from './BTSLessons';
import { vocabularyData, categories } from '../../data/vocabulary';
import { Mic } from 'lucide-react';

export function VocabularySection() {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [masteredWords, setMasteredWords] = useState<Set<string>>(new Set());
  const [selectedCategory, setSelectedCategory] = useState<string>('greetings');
  const [selectedDifficulty, setSelectedDifficulty] = useState<'beginner' | 'intermediate' | 'advanced' | null>(null);

  const filteredWords = vocabularyData.filter(word => {
    const categoryMatch = selectedCategory ? word.category === selectedCategory : true;
    const difficultyMatch = selectedDifficulty ? word.difficulty === selectedDifficulty : true;
    return categoryMatch && difficultyMatch;
  });

  const stats = {
    wordsLearned: masteredWords.size,
    totalWords: filteredWords.length,
    streak: 5,
    accuracy: 85,
  };

  const handleNext = () => {
    if (filteredWords.length > 0) {
      setCurrentIndex((prev) => (prev + 1) % filteredWords.length);
    }
  };

  const handlePrevious = () => {
    if (filteredWords.length > 0) {
      setCurrentIndex((prev) => (prev - 1 + filteredWords.length) % filteredWords.length);
    }
  };

  const handleMastered = () => {
    if (filteredWords.length > 0) {
      setMasteredWords((prev) => new Set([...prev, filteredWords[currentIndex].id]));
    }
  };

  return (
    <div id="learn-section" className="min-h-screen bg-gradient-to-b from-purple-100 to-pink-100 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Learn with BTS</h2>
          <p className="text-gray-600">
            Master Korean vocabulary with voice-overs from your favorite BTS members
          </p>
        </div>

        <VocabularyProgress stats={stats} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <CategorySelector
              categories={categories}
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
            />
            <DifficultyFilter
              selectedDifficulty={selectedDifficulty}
              onSelectDifficulty={setSelectedDifficulty}
            />
          </div>

          <div className="lg:col-span-2">
            {filteredWords.length > 0 ? (
              <VocabularyCard
                word={filteredWords[currentIndex]}
                onNext={handleNext}
                onPrevious={handlePrevious}
                onMastered={handleMastered}
              />
            ) : (
              <div className="text-center p-8 bg-white rounded-xl shadow-lg">
                <p className="text-gray-600">No words found for the selected filters.</p>
              </div>
            )}
          </div>
        </div>

        <div className="mt-16">
          <Glossary />
        </div>

        <div className="mt-16">
          <BTSLessons />
        </div>

        {/* Voice Chat Button */}
        <div className="fixed bottom-8 right-8">
          <button
            onClick={() => navigate('/voice')}
            className="bg-purple-600 text-white p-4 rounded-full shadow-lg hover:bg-purple-700 transition-all transform hover:scale-105"
          >
            <Mic className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
}