import React, { useState } from 'react';
import { Heart, ChevronLeft, ChevronRight } from 'lucide-react';

const songs = [
  {
    title: 'Dynamite',
    description: 'Learn everyday phrases and expressions',
    duration: '3:44',
    thumbnail: 'https://ibb.co/F35Q8JV'
  },
  {
    title: 'Boy With Luv',
    description: 'Master common conversational patterns',
    duration: '4:13',
    thumbnail: 'https://ibb.co/h199c78'
  },
  {
    title: 'Life Goes On',
    description: 'Practice pronunciation with native audio',
    duration: '3:50',
    thumbnail: 'https://ibb.co/PC6jpg5'
  }
];

export function BTSPreview() {
  const [likedSongs, setLikedSongs] = useState<Set<string>>(new Set());

  const toggleLike = (songTitle: string) => {
    setLikedSongs(prev => {
      const newSet = new Set(prev);
      if (newSet.has(songTitle)) {
        newSet.delete(songTitle);
      } else {
        newSet.add(songTitle);
      }
      return newSet;
    });
  };

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-pink-50 to-purple-50">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Learn with BTS Content</h2>
          <p className="text-gray-600">
            Practice Korean with authentic BTS content, including music videos, interviews, and behind-the-scenes footage
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            {songs.map((song) => (
              <div
                key={song.title}
                className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow duration-200 flex items-center space-x-4"
              >
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <img
                    src={song.thumbnail}
                    alt={song.title}
                    className="w-8 h-8 object-cover rounded"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium">{song.title}</h3>
                  <p className="text-sm text-gray-500">{song.description}</p>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-sm text-gray-400">{song.duration}</span>
                  <button
                    onClick={() => toggleLike(song.title)}
                    className="p-2 hover:bg-gray-100 rounded-full transition"
                  >
                    <Heart
                      className={`w-5 h-5 ${
                        likedSongs.has(song.title)
                          ? 'stroke-red-500 text-red-500'
                          : 'stroke-gray-400'
                      }`}
                      fill={likedSongs.has(song.title) ? 'none' : 'none'}
                      strokeWidth={2}
                    />
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl aspect-video flex items-center justify-center">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <span className="text-purple-600">▶</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}