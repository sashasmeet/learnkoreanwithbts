import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Mic, MicOff, Gift, Send, ArrowLeft, User, Hand } from 'lucide-react';
import toast from 'react-hot-toast';

const participants = [
  { name: "Пилипенко Валерия🥺", id: "bakaesliche", flag: "ru" },
  { name: "Ковальская Татьяна 😊", id: "tanya_k", flag: "ru" },
  { name: "Цой Карина 🐣", id: "yoorinaya", flag: "kr" },
  { name: "Ася Чонвонова😴", id: "starberryg", flag: "kr" },
  { name: "Дарья Радаева", id: "dakotahadhas", flag: "ru" },
  { name: "Даша Щербакова", id: "s_daryy", flag: "ru" },
  { name: "Даша Мордвинова ㅎㅎ", id: "got7page", flag: "ru" },
  { name: "Дана Дебыш 😻", id: "safereli", flag: "ru" },
  { name: "Левина Тася", id: "tasia_l", flag: "ru" },
  { name: "Катя Макарова", id: "jjield", flag: "ru" },
  { name: "Алиса Пономаренко 🍓", id: "kettu0301", flag: "kr" },
  { name: "Уля Черткова", id: "ulya_ch", flag: "ru" },
  { name: "Переяслова Лаура 🦔", id: "lalilum", flag: "ru" },
  { name: "Карина 선배💖", id: "yslover", flag: "kr" },
  { name: "Ксюша Черненко ㅠㅠ <3", id: "ksujesha", flag: "ru" },
  { name: "Катя Кафка", id: "kirschrauch", flag: "ru" }
];

const getRoomData = (roomId: string) => {
  const rooms = {
    'room-1': {
      name: "K-pop Fans Chat Room",
      messages: [
        '안녕하세요! 오늘 새로 나온 앨범 들으셨나요?',
        '네! 타이틀곡 너무 좋아요 ♡',
        '저도요! 특히 춤 동작이 너무 멋있어요',
        '다들 최애가 누구세요?',
        '저는 뷔요! 목소리가 너무 좋아요',
        '전 지민! 춤선이 너무 예뻐요',
        '정국이요! 올라운더라서 멋있어요',
        '다음 콘서트 가시는 분?',
        '네! 저 1일차 티켓팅 성공했어요',
        '우와~ 부럽다',
        '저도 가고 싶은데 매진됐어요 ㅠㅠ',
        '혹시 팬미팅도 가시나요?',
        '네! 다음 달에 있는 거 갈 예정이에요',
        '저도요! 같이 가요',
        '새 앨범 어떠세요?',
        '타이틀곡 너무 좋아요!',
        '안무도 진짜 멋있어요',
        '춤 연습하시는 분?',
        '네! 저는 댄스 학원 다녀요',
        '저도 배우고 싶어요'
      ]
    },
    'room-2': {
      name: "K-drama Discussion",
      messages: [
        'Какую дораму сейчас смотрите?',
        'Я начала "Королевство"! Очень затягивает',
        'О, я тоже хочу посмотреть! Стоит начинать?',
        'Какую дораму сейчас смотрите?',
        'Я смотрю "Королевство"!',
        'О, я тоже хочу посмотреть',
        'Актёрский состав шикарный',
        'Кто смотрел "Наследники"?',
        'Я! Ли Мин Хо красавчик',
        'А мне Пак Шин Хе нравится',
        'Что думаете о новой дораме?',
        'Сюжет интересный, но грустный',
        'Саундтрек просто волшебный',
        'Кто ваш любимый актёр?',
        'Сон Джун Ки! ♡',
        'Ли Джон Сок тоже хорош',
        'Новую серию видели?',
        'Да, концовка шокировала!',
        'Однозначно да! Особенно если любите исторические',
        'А я "Наследников" пересматриваю',
        'Классика! Ли Мин Хо там такой красивый',
        'Кто-нибудь "Паразитов" смотрел?',
        'Да! Потрясающий фильм',
        'Согласна, заслуженный Оскар',
        'Что думаете о новой дораме с Ким Со Хён?',
        'Пока только первые две серии посмотрела',
        'А мне очень нравится! Особенно саундтрек',
        'Кстати о саундтреках, кто любит OST?',
        'Я! Особенно из "Токкэби"',
        'О да, Stay With Me - шедевр!',
        'А я все песни из "Потомков солнца" знаю',
        'Давайте устроим марафон дорам?',
        'Я за! С чего начнем?',
        'Может "Цветок зла"?',
        'Отличный выбор!'
      ]
    },
    'room-3': {
      name: "Korean Language Study Group",
      messages: [
        '한국어 공부하신지 얼마나 되셨어요?',
        '저는 1년 정도 됐어요',
        '한국어 공부하신지 얼마나 되셨어요?',
        '저는 2년 정도 됐어요!',
        'TOPIK 시험 준비하시는 분?',
        '네, 저는 TOPIK 2급 목표예요',
        '화이팅하세요! 잘 하실 거예요',
        '한국 드라마로 공부하시나요?',
        '네, 자막 없이 보려고 노력중이에요',
        '대단하세요! 저도 그렇게 되고 싶어요',
        '학원 다니시나요?',
        '온라인으로 배우고 있어요',
        '독학하기 쉽지 않죠 ㅠㅠ',
        '같이 스터디하면 좋을 것 같아요!',
        '네, 스터디 그룹 만들어요',
        '카톡방 있나요?',
        '링크 공유해드릴게요!',
        'TOPIK 시험 준비하시는 분?',
        '네! 저는 TOPIK 2급 준비중이에요',
        '저도요! 같이 공부해요',
        '학원 다니시나요?',
        '네, 일주일에 두 번 가요',
        '독학하시는 분들은 어떻게 공부하세요?',
        '저는 유튜브로 많이 배워요',
        '추천하는 채널 있으세요?',
        '한국언니 Korean Unnie 추천해요!',
        '감사합니다 ^^',
        '다음 주에 스터디 모임 하실래요?',
        '네! 좋아요',
        '장소는 어디가 좋을까요?',
        '도서관은 어떠세요?',
        '좋아요! 시간은 언제가 괜찮으세요?',
        '토요일 오후는 어떠신가요?',
        '네, 저도 괜찮아요',
        '다들 화이팅!'
      ]
    },
    'room-4': {
      name: "BTS Music & Korean Study",
      messages: [
        'BTS 노래로 한국어 배우시는 분?',
        '네! Spring Day 가사 완벽하게 외웠어요',
        '대단하세요! 저는 아직 발음이 어려워요',
        'Life Goes On도 좋아요',
        '맞아요! 발음하기 쉬운 편이에요',
        '다들 최애곡이 뭐예요?',
        '안녕하세요! 오늘 BTS 신곡 들으셨나요?',
        '네, 진짜 대박이에요! ♡',
        '춤 연습하시는 분 계신가요?',
        '저요! 댄스 커버 준비중이에요',
        '와~ 멋있으세요!',
        '다음 주 팬미팅 가시는 분?',
        '저요! 티켓 구하기 너무 힘들었어요 ㅠㅠ',
        '축하드려요! 저도 가고 싶었는데...',
        '최애가 누구세요?',
        '저는 뷔오빠요! ♡',
        '전 지민씨! 춤선이 너무 예뻐요',
        '정국이는 올라운더라서 진짜 대단해요',
        '새 앨범 어떠세요?',
        '타이틀곡 너무 좋아요!',
        'B사이드도 다 좋더라구요',
        '저는 봄날이요!',
        '전 Butter! 영어라 쉽네요 ㅋㅋ',
        'DNA 안무 따라하시는 분?',
        '네! 연습중이에요',
        '저도요! 어려운 부분이 많네요',
        '같이 연습할래요?',
        '좋아요! 언제 만날까요?',
        '주말에 시간 되시나요?',
        '네! 토요일 어떠세요?',
        '좋아요! 장소는 어디가 좋을까요?',
        '댄스 연습실 알아요',
        '와~ 완전 좋아요!',
        '저도 가고 싶어요',
        '다같이 가요!'
      ]
    },
    'room-5': {
      name: "Русский с K-pop",
      messages: [
        'Привет! Кто какие группы слушает?',
        'Я в основном BTS и BLACKPINK',
        'А я сейчас увлеклась TWICE',
        'О, у них новый альбом вышел!',
        'Да, уже все песни выучила',
        'Кто на концерт собирается?',
        'Я! Билеты уже купила',
        'Везёт! А я ещё думаю',
        'Может вместе поедем?',
        'Давайте! Будет веселее',
        'Кстати, кто корейский учит?',
        'Я! Уже год занимаюсь',
        'А я только начала',
        'Может вместе позанимаемся?',
        'Отличная идея!',
        'Давайте группу создадим',
        'Я за! Будем помогать друг другу',
        'И песни переводить вместе',
        'Супер! Когда начинаем?',
        'Хоть сейчас!'
      ]
    }
  };

  return rooms[roomId as keyof typeof rooms] || rooms['room-1'];
};

export function VoiceChatRoom() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [isMicOn, setIsMicOn] = useState(false);
  const [handRaised, setHandRaised] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const roomData = getRoomData(id || 'room-1');

  // Shuffle and select random participants for seats
  const shuffledParticipants = [...participants].sort(() => Math.random() - 0.5);
  const initialSeats = shuffledParticipants.slice(0, 7); // Leave one seat empty
  const otherParticipants = shuffledParticipants.slice(7, 11); // 4 participants for Others in Room

  const [seats, setSeats] = useState<Seat[]>(
    Array.from({ length: 8 }, (_, i) => ({
      id: i + 1,
      isOccupied: i < initialSeats.length,
      participant: i < initialSeats.length ? {
        id: initialSeats[i].id,
        name: initialSeats[i].name,
        avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${initialSeats[i].id}`,
        isSpeaking: Math.random() > 0.7,
        isOnStage: true,
        flag: initialSeats[i].flag,
        micOff: Math.random() > 0.5
      } : undefined
    }))
  );

  const [audience, setAudience] = useState<Participant[]>([
    {
      id: 'you',
      name: 'You',
      avatar: 'https://i.ibb.co/bRB0YND/koya.jpg',
      isSpeaking: false,
      isOnStage: false,
      flag: 'ru',
      micOff: false
    },
    ...otherParticipants.map(p => ({
      id: p.id,
      name: p.name,
      avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${p.id}`,
      isSpeaking: false,
      isOnStage: false,
      flag: p.flag,
      micOff: Math.random() > 0.5
    }))
  ]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    if (roomData.messages) {
      const interval = setInterval(() => {
        const randomSpeaker = seats
          .filter(seat => seat.isOccupied)
          .map(seat => seat.participant!)[
          Math.floor(Math.random() * seats.filter(seat => seat.isOccupied).length)
        ];
        const randomMessage = roomData.messages[Math.floor(Math.random() * roomData.messages.length)];

        setMessages(prev => [...prev, {
          id: Date.now(),
          text: randomMessage,
          sender: {
            name: randomSpeaker.name,
            avatar: randomSpeaker.avatar,
            flag: randomSpeaker.flag
          },
          timestamp: new Date()
        }]);
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [seats, roomData.messages]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      setMessages(prev => [...prev, {
        id: Date.now(),
        text: message,
        sender: {
          name: 'You',
          avatar: 'https://i.ibb.co/bRB0YND/koya.jpg',
          flag: 'ru'
        },
        timestamp: new Date()
      }]);
      setMessage('');
    }
  };

  const toggleMic = () => {
    setIsMicOn(!isMicOn);
    toast.success(isMicOn ? 'Microphone turned off' : 'Microphone turned on');
  };

  const toggleHandRaise = () => {
    setHandRaised(!handRaised);
    
    if (!handRaised) {
      const emptySeatIndex = seats.findIndex(seat => !seat.isOccupied);
      if (emptySeatIndex !== -1) {
        const newSeats = [...seats];
        newSeats[emptySeatIndex] = {
          ...newSeats[emptySeatIndex],
          isOccupied: true,
          participant: {
            id: 'you',
            name: 'You',
            avatar: 'https://i.ibb.co/bRB0YND/koya.jpg',
            isSpeaking: false,
            isOnStage: true,
            flag: 'ru',
            micOff: !isMicOn
          }
        };
        setSeats(newSeats);
        setAudience(audience.filter(p => p.id !== 'you'));
        toast.success('You are now on stage!');
      } else {
        toast.error('No empty seats available');
      }
    } else {
      const newSeats = seats.map(seat => 
        seat.participant?.id === 'you' 
          ? { ...seat, isOccupied: false, participant: undefined }
          : seat
      );
      setSeats(newSeats);
      setAudience([
        {
          id: 'you',
          name: 'You',
          avatar: 'https://i.ibb.co/bRB0YND/koya.jpg',
          isSpeaking: false,
          isOnStage: false,
          flag: 'ru',
          micOff: !isMicOn
        },
        ...audience.filter(p => p.id !== 'you')
      ]);
      toast.success('You left the stage');
    }
  };

  const handleProfileClick = (participant: Participant) => {
    navigate(`/member/${participant.id}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-purple-900 text-white">
      <div className="fixed top-0 left-0 right-0 bg-black/30 backdrop-blur-sm z-10">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <button 
              onClick={() => navigate('/voice')} 
              className="p-2 hover:bg-white/10 rounded-full"
            >
              <ArrowLeft className="w-6 h-6" />
            </button>
          </div>
          <h1 className="text-xl font-bold text-center mt-4">{roomData.name}</h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 pt-28 pb-32">
        <div className="grid grid-cols-4 gap-4 mb-8">
          {seats.map((seat) => (
            <div key={seat.id} className="text-center">
              {seat.isOccupied && seat.participant ? (
                <div 
                  className="relative inline-block cursor-pointer"
                  onClick={() => handleProfileClick(seat.participant!)}
                >
                  <img
                    src={seat.participant.avatar}
                    alt={seat.participant.name}
                    className="w-16 h-16 rounded-full mx-auto mb-2"
                  />
                  {seat.participant.isSpeaking && (
                    <div className="absolute inset-0 border-2 border-green-400 rounded-full animate-pulse" />
                  )}
                  <img
                    src={`https://flagcdn.com/w20/${seat.participant.flag === 'kr' ? 'kr' : 'ru'}.png`}
                    alt={`${seat.participant.flag} flag`}
                    className="absolute bottom-2 right-0 w-5 h-5 rounded-full border-2 border-gray-900"
                  />
                  {seat.participant.micOff && (
                    <div className="absolute -top-1 -right-1 bg-red-500 rounded-full p-1">
                      <MicOff className="w-4 h-4" />
                    </div>
                  )}
                </div>
              ) : (
                <div className="w-16 h-16 rounded-full bg-gray-700/50 mx-auto mb-2 flex items-center justify-center">
                  <User className="w-6 h-6 text-gray-400" />
                </div>
              )}
              <p className="font-medium text-sm truncate px-2">
                {seat.isOccupied && seat.participant ? seat.participant.name : 'Empty Seat'}
              </p>
            </div>
          ))}
        </div>

        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4">Others in Room</h3>
          <div className="flex flex-wrap gap-6">
            {audience.map((person) => (
              <div 
                key={person.id} 
                className="text-center cursor-pointer"
                onClick={() => handleProfileClick(person)}
              >
                <div className="relative inline-block">
                  <img
                    src={person.avatar}
                    alt={person.name}
                    className="w-12 h-12 rounded-full mb-1"
                  />
                  <img
                    src={`https://flagcdn.com/w20/${person.flag === 'kr' ? 'kr' : 'ru'}.png`}
                    alt={`${person.flag} flag`}
                    className="absolute bottom-0 right-0 w-4 h-4 rounded-full border-2 border-gray-900"
                  />
                  {person.micOff && (
                    <div className="absolute -top-1 -right-1 bg-red-500 rounded-full p-1">
                      <MicOff className="w-3 h-3" />
                    </div>
                  )}
                </div>
                <p className="text-sm truncate max-w-[120px]">{person.name}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-black/20 rounded-lg p-4 h-96 overflow-y-auto">
          {messages.map((msg) => (
            <div key={msg.id} className="flex items-start space-x-3 mb-4">
              <div className="relative">
                <img src={msg.sender.avatar} alt={msg.sender.name} className="w-8 h-8 rounded-full" />
                <img
                  src={`https://flagcdn.com/w20/${msg.sender.flag === 'kr' ? 'kr' : 'ru'}.png`}
                  alt={`${msg.sender.flag} flag`}
                  className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-gray-900"
                />
              </div>
              <div>
                <p className="font-medium">{msg.sender.name}</p>
                <p className="text-white/90">{msg.text}</p>
                <p className="text-xs text-white/60">
                  {msg.timestamp.toLocaleTimeString()}
                </p>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-black/30 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <form onSubmit={handleSendMessage} className="flex items-center space-x-4">
            <button
              type="button"
              onClick={toggleHandRaise}
              className={`p-3 rounded-full ${
                handRaised ? 'bg-yellow-500' : 'bg-gray-600'
              }`}
            >
              <Hand className="w-6 h-6" />
            </button>
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type a message..."
              className="flex-1 bg-white/10 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <button
              type="button"
              onClick={toggleMic}
              className={`p-3 rounded-full ${
                isMicOn ? 'bg-green-500' : 'bg-gray-600'
              }`}
            >
              {isMicOn ? <Mic className="w-6 h-6" /> : <MicOff className="w-6 h-6" />}
            </button>
            <button
              type="button"
              onClick={() => toast.success('Gift sent! 🎁')}
              className="p-3 rounded-full bg-purple-600"
            >
              <Gift className="w-6 h-6" />
            </button>
            <button
              type="submit"
              className="p-3 rounded-full bg-purple-600"
            >
              <Send className="w-6 h-6" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}