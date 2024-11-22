import React, { useState } from 'react';
import { X } from 'lucide-react';

interface Language {
  code: string;
  name: string;
}

const languages: Language[] = [
  { code: 'KR', name: 'Korean' },
  { code: 'RU', name: 'Russian' },
  { code: 'EN', name: 'English' }
];

interface CreateRoomModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CreateRoomModal({ isOpen, onClose }: CreateRoomModalProps) {
  const [roomName, setRoomName] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState<Language>(languages[0]);
  const [showLanguages, setShowLanguages] = useState(false);
  const [type, setType] = useState('Interaction');
  const [topic, setTopic] = useState('Make Friends');
  const [isPrivate, setIsPrivate] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-gray-900 rounded-xl p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-white">Create Room</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <input
          type="text"
          placeholder="Voice Room 윤찬영"
          className="w-full bg-gray-800 text-white rounded-lg p-3 mb-4"
          value={roomName}
          onChange={(e) => setRoomName(e.target.value)}
        />

        <div className="space-y-4">
          <div className="relative">
            <button
              onClick={() => setShowLanguages(!showLanguages)}
              className="w-full flex justify-between items-center p-3 bg-gray-800 rounded-lg text-white"
            >
              <span>Language</span>
              <span>{selectedLanguage.code} ›</span>
            </button>
            
            {showLanguages && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-gray-800 rounded-lg overflow-hidden">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setSelectedLanguage(lang);
                      setShowLanguages(false);
                    }}
                    className="w-full p-3 text-left text-white hover:bg-gray-700"
                  >
                    {lang.name} ({lang.code})
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="flex justify-between items-center p-3 bg-gray-800 rounded-lg text-white">
            <span>Type</span>
            <span>{type} ›</span>
          </div>

          <div className="flex justify-between items-center p-3 bg-gray-800 rounded-lg text-white">
            <span>Topic</span>
            <span>{topic} ›</span>
          </div>

          <div className="flex justify-between items-center p-3 bg-gray-800 rounded-lg text-white">
            <span>Private Room</span>
            <button
              onClick={() => setIsPrivate(!isPrivate)}
              className={`w-12 h-6 rounded-full transition-colors ${
                isPrivate ? 'bg-purple-600' : 'bg-gray-600'
              }`}
            >
              <div className={`w-5 h-5 bg-white rounded-full transform transition-transform ${
                isPrivate ? 'translate-x-6' : 'translate-x-1'
              }`} />
            </button>
          </div>
        </div>

        <textarea
          placeholder="Create room announcement..."
          className="w-full bg-gray-800 text-white rounded-lg p-3 mt-4 mb-6"
          rows={3}
        />

        <div className="flex space-x-4">
          <button
            onClick={onClose}
            className="flex-1 py-3 rounded-full bg-gray-800 text-white hover:bg-gray-700"
          >
            Cancel
          </button>
          <button
            className="flex-1 py-3 rounded-full bg-purple-600 text-white hover:bg-purple-700"
          >
            Start Voice Room
          </button>
        </div>
      </div>
    </div>
  );
}