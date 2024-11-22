import React from 'react';
import { MessageCircle, User, ExternalLink } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

interface Friend {
  name: string;
  id?: string;
  note?: string;
  avatar?: string;
}

export function FriendsList() {
  const navigate = useNavigate();
  
  const friends: Friend[] = [
    { name: "Пилипенко Валерия🥺", id: "bakaesliche" },
    { name: "Ковальская Татьяна 😊", id: "tanya_k" },
    { name: "Цой Карина 🐣", id: "yoorinaya" },
    { name: "Ася Чонвонова😴", id: "starberryg" },
    { name: "Дарья Радаева", id: "dakotahadhas" },
    { name: "Даша Щербакова", id: "s_daryy" },
    { name: "Даша Мордвинова ㅎㅎ", id: "got7page" },
    { name: "Дана Дебыш 😻", id: "safereli" },
    { name: "Левина Тася", id: "tasia_l" },
    { name: "Катя Макарова", id: "jjield" },
    { name: "Алиса Пономаренко 🍓", id: "kettu0301" },
    { name: "Уля Черткова", id: "ulya_ch" },
    { name: "Переяслова Лаура 🦔", id: "lalilum" },
    { name: "Карина 선배💖", id: "yslover", note: "Dating 박지민" },
    { name: "Ксюша Черненко ㅠㅠ <3", id: "ksujesha" },
    { name: "Катя Кафка", id: "kirschrauch" },
    { name: "Дарья Шин", id: "darya_shin" },
    { name: "Ксения Игоревна", id: "ksenia_i" },
    { name: "Татьяна Игоревна", id: "tatiana_i" },
    { name: "Ким Хван오빠", id: "kim_hwan" },
    { name: "Алиса Сарелайнен", id: "alisa_s" },
    { name: "슬기김 선생님", id: "seulgi_kim" },
    { name: "조지숙 선생님", id: "jisook_cho" },
    { name: "Валентина Бледная", id: "valentina_b" },
    { name: "Александр Слепцов", id: "alex_s" },
    { name: "Лейла Багманова ⋆.˚🦋༘⋆", id: "leylosbb" },
    { name: "Полякова Кристина Евгеньевна", id: "the_best_teacher" }
  ];

  const btsMembers = [
    { name: "김태형", id: "taehyung", avatar: "https://i.ibb.co/bRB0YND/koya.jpg" },
    { name: "박지민", id: "jimin", avatar: "https://i.ibb.co/C0ZFx8X/image.jpg" },
    { name: "전정국", id: "jungkook", avatar: "https://i.ibb.co/P6KkR8b/mang.jpg" }
  ];

  const handleMessage = (id: string) => {
    navigate(`/chat/${id}`);
  };

  return (
    <div className="min-h-screen pt-20 px-4">
      <div className="max-w-4xl mx-auto py-8">
        <h1 className="text-3xl font-bold mb-8">Friends ({friends.length})</h1>
        
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="space-y-4">
            {friends.map((friend) => (
              <div key={friend.id} className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg transition">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                    <User className="w-6 h-6 text-gray-500" />
                  </div>
                  <div>
                    <h3 className="font-medium">{friend.name}</h3>
                    <p className="text-sm text-gray-500">@{friend.id}</p>
                    {friend.note && (
                      <p className="text-sm text-purple-600">{friend.note}</p>
                    )}
                  </div>
                </div>
                <button
                  onClick={() => handleMessage(friend.id || '')}
                  className="p-2 text-purple-600 hover:bg-purple-50 rounded-full transition"
                >
                  <MessageCircle className="w-5 h-5" />
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-bold mb-4">Special Friends</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {btsMembers.map((member) => (
              <Link
                key={member.id}
                to={`/member/${member.id}`}
                className="flex items-center space-x-4 p-4 hover:bg-gray-50 rounded-lg transition"
              >
                <img src={member.avatar} alt={member.name} className="w-10 h-10 rounded-full" />
                <div>
                  <h3 className="font-medium">{member.name}</h3>
                  <p className="text-sm text-gray-500">@{member.id}</p>
                </div>
                <ExternalLink className="w-5 h-5 text-gray-400" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}