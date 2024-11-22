import React from 'react';
import { Play, BookOpen, Star } from 'lucide-react';
import ReactPlayer from 'react-player';

const lessons = [
  {
    id: 1,
    title: "Learn Korean with BTS - Lesson 1",
    description: "김태형과의 듣기 Lesson",
    url: "https://vk.com/video587934920_456239106",
    duration: "3:37"
  },
  {
    id: 2,
    title: "Learn Korean with BTS - Lesson 2",
    description: "치민 듣기 수업",
    url: "https://vk.com/video587934920_456239105",
    duration: "2:29"
  },
  {
    id: 3,
    title: "Learn Korean with BTS - Lesson 3",
    description: "진 듣기 레슨",
    url: "https://vk.com/video587934920_456239104",
    duration: "2:48"
  },
  {
    id: 4,
    title: "Learn Korean with BTS - Lesson 4",
    description: "제이호프와 함께하는 듣기 레슨",
    url: "https://vk.com/video587934920_456239103",
    duration: "3:42"
  },
  {
    id: 5,
    title: "Learn Korean with BTS - Lesson 5",
    description: "슈가 듣기",
    url: "https://vk.com/video587934920_456239102",
    duration: "3:21"
  }
];

export function BTSLessons() {
  const [selectedVideo, setSelectedVideo] = React.useState(lessons[0]);

  return (
    <div className="py-16 px-4 bg-gradient-to-b from-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 flex items-center justify-center">
            <BookOpen className="w-8 h-8 mr-3 text-purple-600" />
            Learn Korean with BTS Videos
          </h2>
          <p className="text-gray-600">
            Practice Korean listening with BTS members
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-4 border-purple-200">
              <div className="aspect-w-16 aspect-h-9 relative pt-[56.25%]">
                <ReactPlayer
                  url={selectedVideo.url}
                  width="100%"
                  height="100%"
                  controls
                  style={{ position: 'absolute', top: 0, left: 0 }}
                />
              </div>
              <div className="p-8 bg-gradient-to-r from-purple-50 to-pink-50">
                <h3 className="text-2xl font-bold mb-3 text-purple-800">{selectedVideo.title}</h3>
                <p className="text-lg text-purple-600">{selectedVideo.description}</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {lessons.map((lesson) => (
              <button
                key={lesson.id}
                onClick={() => setSelectedVideo(lesson)}
                className={`w-full text-left p-6 rounded-2xl transition-all duration-300 ${
                  selectedVideo.id === lesson.id
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white transform scale-105'
                    : 'bg-white hover:bg-purple-50'
                } shadow-xl hover:shadow-2xl border-2 border-purple-100`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <Play className={`w-6 h-6 ${
                      selectedVideo.id === lesson.id ? 'text-white' : 'text-purple-600'
                    }`} />
                    <span className="font-bold text-lg">Lesson {lesson.id}</span>
                  </div>
                  <span className={`text-sm font-medium ${
                    selectedVideo.id === lesson.id ? 'text-purple-200' : 'text-purple-600'
                  }`}>
                    {lesson.duration}
                  </span>
                </div>
                <p className={`text-lg ${
                  selectedVideo.id === lesson.id ? 'text-purple-100' : 'text-purple-800'
                }`}>
                  {lesson.description}
                </p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}