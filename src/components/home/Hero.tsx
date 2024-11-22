import React from 'react';
import { BookOpen, MessageCircle, Bot, Crown } from 'lucide-react';

function FeatureCard({ icon: Icon, title, description }: {
  icon: any;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg text-center">
      <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mx-auto mb-4">
        <Icon className="h-6 w-6 text-purple-600" />
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export function Hero() {
  const scrollToLearn = () => {
    const element = document.getElementById('learn-section');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="pt-36 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-8">
            Learn Korean with
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
              {' '}BTS
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Master Korean language through interactive lessons, real conversations,
            and AI-powered practice with BTS content.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <FeatureCard
              icon={BookOpen}
              title="Interactive Lessons"
              description="Learn Korean with BTS content"
            />
            <FeatureCard
              icon={MessageCircle}
              title="Language Exchange"
              description="Practice with native speakers"
            />
            <FeatureCard
              icon={Bot}
              title="AI Conversation with VAN"
              description="Practice with AI assistant"
            />
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button 
              onClick={scrollToLearn}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:opacity-90 transition shadow-lg font-bold text-lg"
            >
              Get Started
            </button>
            <button 
              onClick={() => window.location.href = '/premium'}
              className="px-8 py-4 rounded-full bg-white text-gray-900 hover:bg-gray-50 transition shadow-lg font-bold text-lg border-2 border-gray-200 flex items-center justify-center space-x-2"
            >
              <Crown className="w-5 h-5 text-yellow-500" />
              <span>GO PREMIUM</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}