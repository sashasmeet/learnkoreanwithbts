import React, { useState } from 'react';
import { Volume2, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import type { VocabularyItem } from '../../types/learning';

interface VocabularyCardProps {
  word: VocabularyItem;
  onNext: () => void;
  onPrevious: () => void;
  onMastered: () => void;
}

export function VocabularyCard({ word, onNext, onPrevious, onMastered }: VocabularyCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const playAudio = () => {
    if (word.audioUrl) {
      setIsPlaying(true);
      const audio = new Audio(word.audioUrl);
      audio.play().finally(() => setIsPlaying(false));
    }
  };

  return (
    <div className="max-w-md w-full mx-auto">
      <div
        className={`relative h-96 w-full cursor-pointer perspective-1000 transition-transform duration-500 transform-style-3d ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        {/* Front of card */}
        <div className={`absolute inset-0 backface-hidden ${
          isFlipped ? 'invisible' : ''
        }`}>
          <div className="h-full bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden">
            <div className="h-1/2 bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center">
              <h2 className="text-4xl font-bold text-gray-800">{word.korean}</h2>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-3xl font-bold">{word.korean}</h2>
                {word.audioUrl && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      playAudio();
                    }}
                    className={`p-3 rounded-full bg-purple-100 hover:bg-purple-200 transition ${
                      isPlaying ? 'animate-pulse' : ''
                    }`}
                  >
                    <Volume2 className="h-6 w-6 text-purple-600" />
                  </button>
                )}
              </div>
              <p className="text-xl text-gray-600 mb-2">{word.romanization}</p>
              <span className="inline-block px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-600">
                {word.category}
              </span>
            </div>
          </div>
        </div>

        {/* Back of card */}
        <div className={`absolute inset-0 backface-hidden rotate-y-180 ${
          !isFlipped ? 'invisible' : ''
        }`}>
          <div className="h-full bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-4">Translation</h3>
            <p className="text-3xl text-gray-800 mb-6">{word.english}</p>
            <div className="space-y-4">
              <p className="text-gray-600">
                <span className="font-semibold">Korean:</span> {word.korean}
              </p>
              <p className="text-gray-600">
                <span className="font-semibold">Romanization:</span> {word.romanization}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation controls */}
      <div className="flex justify-between items-center mt-6">
        <button
          onClick={onPrevious}
          className="p-3 rounded-full bg-white/80 hover:bg-white transition shadow"
        >
          <ChevronLeft className="h-6 w-6 text-gray-600" />
        </button>

        <button
          onClick={onMastered}
          className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:opacity-90 transition shadow flex items-center space-x-2"
        >
          <Star className="h-5 w-5" />
          <span>Mark as Mastered</span>
        </button>

        <button
          onClick={onNext}
          className="p-3 rounded-full bg-white/80 hover:bg-white transition shadow"
        >
          <ChevronRight className="h-6 w-6 text-gray-600" />
        </button>
      </div>
    </div>
  );
}