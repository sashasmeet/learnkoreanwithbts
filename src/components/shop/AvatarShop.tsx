import React from 'react';
import { Star, Crown, Shield, ShoppingBag } from 'lucide-react';

interface AvatarItem {
  id: string;
  name: string;
  imageUrl: string;
  price: number;
  rarity: 'common' | 'rare' | 'legendary';
  levelRequired?: number;
}

const avatarItems: AvatarItem[] = [
  {
    id: 'bt21-rj',
    name: 'BT21 RJ',
    imageUrl: 'https://ibb.org.ru/1/f1vGxl',
    price: 1000,
    rarity: 'rare'
  },
  {
    id: 'bt21-koya',
    name: 'BT21 KOYA',
    imageUrl: 'https://ibb.org.ru/1/f1vJqv',
    price: 1200,
    rarity: 'rare'
  },
  {
    id: 'bt21-mang',
    name: 'BT21 MANG',
    imageUrl: 'https://ibb.org.ru/1/f1vQ6T',
    price: 1000,
    rarity: 'rare'
  },
  {
    id: 'bt21-shooky',
    name: 'BT21 SHOOKY',
    imageUrl: 'https://ibb.org.ru/1/f1vyT3',
    price: 1000,
    rarity: 'rare'
  },
  {
    id: 'bt21-cooky',
    name: 'BT21 COOKY',
    imageUrl: 'https://ibb.co/HxksVMX',
    price: 1500,
    rarity: 'rare'
  },
  {
    id: 'bt21-tata',
    name: 'BT21 TATA',
    imageUrl: 'https://ibb.co/Hn8zcqd',
    price: 1500,
    rarity: 'rare'
  },
  {
    id: 'bt21-chimmy',
    name: 'BT21 CHIMMY',
    imageUrl: 'https://ibb.co/R7zp6J5',
    price: 1500,
    rarity: 'rare'
  },
  {
    id: 'bts-butter',
    name: 'BTS Butter',
    imageUrl: 'https://ibb.org.ru/1/f1vXBC',
    price: 2000,
    rarity: 'legendary'
  },
  {
    id: 'bts-ptd',
    name: 'BTS Permission to Dance',
    imageUrl: 'https://ibb.org.ru/1/f1vccp',
    price: 2000,
    rarity: 'legendary'
  },
  {
    id: 'exclusive-10',
    name: 'Level 10 Exclusive Avatar',
    imageUrl: 'https://ibb.co/4Pn0rTR',
    price: 0,
    rarity: 'legendary',
    levelRequired: 10
  },
  {
    id: 'exclusive-15',
    name: 'Level 15 Exclusive Avatar',
    imageUrl: 'https://ibb.co/tzKJXkR',
    price: 0,
    rarity: 'legendary',
    levelRequired: 15
  }
];

export function AvatarShop() {
  return (
    <div className="min-h-screen pt-20 px-4">
      <div className="max-w-7xl mx-auto py-8">
        <div className="flex items-center justify-center space-x-3 mb-8">
          <ShoppingBag className="w-8 h-8 text-purple-600" />
          <h1 className="text-3xl font-bold">Avatar Shop</h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {avatarItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition"
            >
              <div className="relative mb-4">
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="w-full h-48 object-cover rounded-lg"
                />
                <span className={`absolute top-2 right-2 px-3 py-1 rounded-full text-sm font-medium ${
                  item.rarity === 'legendary'
                    ? 'bg-yellow-100 text-yellow-800'
                    : 'bg-purple-100 text-purple-800'
                }`}>
                  {item.rarity === 'legendary' ? (
                    <Crown className="w-4 h-4 inline-block mr-1" />
                  ) : (
                    <Star className="w-4 h-4 inline-block mr-1" />
                  )}
                  {item.rarity}
                </span>
              </div>

              <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  {item.levelRequired ? (
                    <div className="flex items-center text-purple-600">
                      <Shield className="w-5 h-5 mr-1" />
                      <span className="font-bold">Level {item.levelRequired}</span>
                    </div>
                  ) : (
                    <>
                      <Star className="w-5 h-5 fill-current mr-1 text-yellow-500" />
                      <span className="font-bold">{item.price}</span>
                    </>
                  )}
                </div>
                <button className="px-4 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition">
                  {item.levelRequired ? 'Unlock' : 'Purchase'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}