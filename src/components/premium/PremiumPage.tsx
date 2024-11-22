import React, { useState } from 'react';
import { Crown, Star, Clock, MessageCircle, Video, Sparkles } from 'lucide-react';
import toast from 'react-hot-toast';

export function PremiumPage() {
  const [purchaseState, setPurchaseState] = useState('');
  const messages = ["ура я богат", "ура деньгеее"];
  const [messageIndex, setMessageIndex] = useState(0);

  const handlePurchase = () => {
    setPurchaseState('purchased');
    toast.success('Premium subscription activated!');
    
    // Toggle between messages
    const interval = setInterval(() => {
      setMessageIndex(prev => (prev + 1) % messages.length);
    }, 2000);

    // Cleanup interval after 10 seconds
    setTimeout(() => {
      clearInterval(interval);
    }, 10000);
  };

  return (
    <div className="min-h-screen pt-20 px-4">
      <div className="max-w-4xl mx-auto py-8">
        <div className="text-center mb-12">
          <Crown className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
          <h1 className="text-4xl font-bold mb-4">Premium Membership</h1>
          <p className="text-xl text-gray-600">
            Unlock exclusive features and enhance your learning experience
          </p>
        </div>

        {/* Rest of the component remains the same until the button */}
        <div className="bg-white rounded-xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-center">Premium Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <PlanCard
              title="Monthly"
              price="$9.99"
              period="per month"
              features={[
                "Unlimited AI and voice chat practice",
                "Exclusive avatars and features",
                "Premium study materials",
                "Ad-free experience" 
              ]}
              onPurchase={handlePurchase}
              purchaseState={purchaseState}
              buttonText={purchaseState === 'purchased' ? messages[messageIndex] : 'Get Started'}
            />
            <PlanCard
              title="Yearly"
              price="$89.99"
              period="per year"
              features={[
                "All Monthly features",
                "A date with Jungkook ♡",
                "Exclusive BTS content",
                "Priority support"
              ]}
              recommended
              onPurchase={handlePurchase}
              purchaseState={purchaseState}
              buttonText={purchaseState === 'purchased' ? messages[messageIndex] : 'Get Started'}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function PlanCard({ 
  title, 
  price, 
  period, 
  features, 
  recommended = false,
  onPurchase,
  purchaseState,
  buttonText
}: {
  title: string;
  price: string;
  period: string;
  features: string[];
  recommended?: boolean;
  onPurchase: () => void;
  purchaseState: string;
  buttonText: string;
}) {
  return (
    <div className={`relative rounded-xl p-6 ${
      recommended ? 'bg-gradient-to-br from-purple-600 to-pink-600 text-white' : 'bg-white'
    }`}>
      {recommended && (
        <div className="absolute top-0 right-0 bg-yellow-400 text-black text-sm font-medium px-3 py-1 rounded-bl-xl rounded-tr-xl">
          Best Value
        </div>
      )}
      <div className="text-center mb-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <div className="text-3xl font-bold mb-1">{price}</div>
        <div className={`text-sm ${recommended ? 'text-white/80' : 'text-gray-600'}`}>
          {period}
        </div>
      </div>
      <ul className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center space-x-2">
            <Star className="w-5 h-5 flex-shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <button 
        onClick={onPurchase}
        className={`w-full py-3 rounded-lg font-medium transition ${
          recommended
            ? 'bg-white text-purple-600 hover:bg-gray-100'
            : 'bg-purple-600 text-white hover:bg-purple-700'
        }`}
      >
        {buttonText}
      </button>
    </div>
  );
}