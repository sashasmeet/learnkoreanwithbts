export interface Achievement {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  requirement: {
    type: 'streak' | 'vocabulary' | 'practice' | 'social';
    value: number;
  };
}

export interface Avatar {
  id: string;
  name: string;
  type: 'bt21' | 'bts';
  imageUrl: string;
  price: number;
  category: 'character' | 'frame' | 'accessory';
}