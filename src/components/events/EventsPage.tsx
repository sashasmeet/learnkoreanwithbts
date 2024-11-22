// Add imports for new icons and update the component
import { Calendar, Trophy, Gift, Star, Clock, Users, Crown, Award, Medal, Calendar as CalendarIcon } from 'lucide-react';
import { useState } from 'react';

// ... rest of the imports

interface Event {
  icon: React.ElementType;
  title: string;
  date: string;
  participants: number;
  description: string;
  reward: string;
  daysRemaining: number;
}

export function EventsPage() {
  const [participatingEvents, setParticipatingEvents] = useState<Set<string>>(new Set());

  const currentEvents: Event[] = [
    {
      icon: Trophy,
      title: "Weekly Challenge",
      date: "5 days remaining",
      participants: 234,
      description: "Complete daily tasks for 7 days straight",
      reward: "500 coins + Special Avatar Frame",
      daysRemaining: 5
    },
    {
      icon: Star,
      title: "BTS Quiz Competition",
      date: "2 days remaining",
      participants: 156,
      description: "Test your knowledge about BTS and Korean culture",
      reward: "1000 coins + Exclusive BTS Profile Badge",
      daysRemaining: 2
    }
  ];

  const upcomingEvents = [
    {
      icon: CalendarIcon,
      title: "Summer Learning Festival",
      startsIn: "3 days",
      description: "Join our biggest learning event of the summer with special BTS-themed lessons"
    },
    {
      icon: Trophy,
      title: "Korean Speaking Challenge",
      startsIn: "1 week",
      description: "Practice speaking Korean with other learners and win prizes"
    }
  ];

  const toggleParticipation = (eventTitle: string) => {
    setParticipatingEvents(prev => {
      const newSet = new Set(prev);
      if (newSet.has(eventTitle)) {
        newSet.delete(eventTitle);
      } else {
        newSet.add(eventTitle);
      }
      return newSet;
    });
  };

  return (
    <div className="min-h-screen pt-20 px-4">
      <div className="max-w-4xl mx-auto py-8">
        <div className="flex items-center space-x-3 mb-8">
          <Trophy className="w-8 h-8 text-purple-600" />
          <h1 className="text-3xl font-bold">Special Events</h1>
        </div>

        <div className="grid gap-6 mb-8">
          {currentEvents.map((event) => (
            <div key={event.title} className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <event.icon className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold">{event.title}</h3>
                  <p className="text-sm text-gray-600">{event.description}</p>
                </div>
              </div>
              
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center text-sm text-gray-600">
                  <Users className="w-4 h-4 mr-1" />
                  <span>{event.participants} participants</span>
                </div>
                <div className="text-sm text-purple-600">
                  <Clock className="w-4 h-4 inline mr-1" />
                  {event.daysRemaining} days remaining
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-600">
                  <Gift className="w-4 h-4 inline mr-1" />
                  Reward: {event.reward}
                </div>
                <button
                  onClick={() => toggleParticipation(event.title)}
                  className={`px-4 py-2 rounded-full text-sm transition ${
                    participatingEvents.has(event.title)
                      ? 'bg-green-100 text-green-700'
                      : 'bg-purple-600 text-white hover:bg-purple-700'
                  }`}
                >
                  {participatingEvents.has(event.title)
                    ? 'Participating'
                    : 'Join Event'}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl p-6 shadow-lg mb-8">
          <h2 className="text-xl font-bold mb-4 flex items-center">
            <CalendarIcon className="w-5 h-5 mr-2 text-purple-600" />
            Upcoming Events
          </h2>
          <div className="space-y-4">
            {upcomingEvents.map((event) => (
              <div key={event.title} className="p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3 mb-2">
                  <event.icon className="w-5 h-5 text-purple-600" />
                  <h3 className="font-semibold">{event.title}</h3>
                </div>
                <p className="text-sm text-purple-600 mb-2">Starts in {event.startsIn}</p>
                <p className="text-sm text-gray-600">{event.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Rest of the component remains the same */}
      </div>
    </div>
  );
}