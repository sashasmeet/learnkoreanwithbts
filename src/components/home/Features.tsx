import React from 'react';
import { Star, Trophy, Users, Sparkles } from 'lucide-react';

export function Features() {
  return (
    <div className="py-16 bg-white/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Learn with Us?</h2>
          <p className="text-gray-600">
            Experience a unique way to master Korean language with BTS
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard
            icon={Star}
            title="Daily Rewards"
            description="Earn points and unlock exclusive content"
          />
          <FeatureCard
            icon={Trophy}
            title="Achievement System"
            description="Track your progress with fun milestones"
          />
          <FeatureCard
            icon={Users}
            title="Community"
            description="Connect with fellow learners worldwide"
          />
          <FeatureCard
            icon={Sparkles}
            title="BTS Integration"
            description="Learn with your favorite BTS content"
          />
        </div>
      </div>
    </div>
  );
}

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