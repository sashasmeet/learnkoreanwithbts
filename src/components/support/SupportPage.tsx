import React from 'react';
import { MessageCircle, Mail, Globe, Book, HelpCircle } from 'lucide-react';

export function SupportPage() {
  return (
    <div className="min-h-screen pt-20 px-4">
      <div className="max-w-4xl mx-auto py-8">
        <h1 className="text-3xl font-bold mb-8">Support & Help</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <SupportCard
            icon={MessageCircle}
            title="Live Chat"
            description="Chat with our support team"
            action="Start Chat"
            link="https://t.me/wangchangy"
          />
          <SupportCard
            icon={Mail}
            title="Email Support"
            description="Send us an email"
            action="Send Email"
            link="mailto:vanuyto2004@mail.ru"
          />
        </div>

        <div className="bg-white rounded-xl p-6 shadow-lg mb-8">
          <h2 className="text-xl font-bold mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <FaqItem
              question="How do I earn coins?"
              answer="You can earn coins by completing lessons, maintaining daily streaks, participating in events, and achieving milestones."
            />
            <FaqItem
              question="What are the premium features?"
              answer="Premium members get access to exclusive BTS content, unlimited AI chat practice, voice chat features, and special avatar items."
            />
            <FaqItem
              question="How do I track my progress?"
              answer="Your progress is automatically tracked in your profile. You can view your achievements, level progress, and learning statistics."
            />
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-lg">
          <h2 className="text-xl font-bold mb-4">Contact Developer</h2>
          <p className="text-gray-600 mb-4">
            Have questions or suggestions? Contact the developer directly:
          </p>
          <div className="space-y-2">
            <a
              href="https://t.me/wangchangy"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-purple-600 hover:text-purple-700"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Telegram: @wangchangy</span>
            </a>
            <div className="flex items-center space-x-2 text-purple-600">
              <Mail className="w-5 h-5" />
              <span>Email: vanuyto2004@mail.ru</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SupportCard({ icon: Icon, title, description, action, link }: {
  icon: any;
  title: string;
  description: string;
  action: string;
  link: string;
}) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg">
      <div className="flex items-center space-x-3 mb-4">
        <div className="p-2 bg-purple-100 rounded-lg">
          <Icon className="w-6 h-6 text-purple-600" />
        </div>
        <div>
          <h2 className="text-xl font-semibold">{title}</h2>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
      </div>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
      >
        {action}
      </a>
    </div>
  );
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="border-b border-gray-200 pb-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full text-left"
      >
        <span className="font-medium">{question}</span>
        <HelpCircle className={`w-5 h-5 transform transition-transform ${
          isOpen ? 'rotate-180' : ''
        }`} />
      </button>
      {isOpen && (
        <p className="mt-2 text-gray-600">{answer}</p>
      )}
    </div>
  );
}