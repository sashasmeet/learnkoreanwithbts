import type { VocabularyItem } from '../types/learning';

export const categories = [
  { id: 'greetings', name: 'Greetings', count: 15 },
  { id: 'daily-life', name: 'Daily Life', count: 20 },
  { id: 'food', name: 'Food & Drinks', count: 25 },
  { id: 'emotions', name: 'Emotions', count: 15 },
];

export const vocabularyData: VocabularyItem[] = [
  // Beginner Level - Greetings
  {
    id: 'b-greet-1',
    korean: '안녕하세요',
    romanization: 'annyeonghaseyo',
    english: 'Hello (formal)',
    category: 'greetings',
    difficulty: 'beginner'
  },
  {
    id: 'b-greet-2',
    korean: '안녕',
    romanization: 'annyeong',
    english: 'Hi (informal)',
    category: 'greetings',
    difficulty: 'beginner'
  },
  {
    id: 'b-greet-3',
    korean: '감사합니다',
    romanization: 'gamsahamnida',
    english: 'Thank you (formal)',
    category: 'greetings',
    difficulty: 'beginner'
  },

  // Beginner Level - Daily Life
  {
    id: 'b-daily-1',
    korean: '학교',
    romanization: 'hakgyo',
    english: 'School',
    category: 'daily-life',
    difficulty: 'beginner'
  },
  {
    id: 'b-daily-2',
    korean: '집',
    romanization: 'jip',
    english: 'House/Home',
    category: 'daily-life',
    difficulty: 'beginner'
  },

  // Beginner Level - Food
  {
    id: 'b-food-1',
    korean: '물',
    romanization: 'mul',
    english: 'Water',
    category: 'food',
    difficulty: 'beginner'
  },
  {
    id: 'b-food-2',
    korean: '밥',
    romanization: 'bap',
    english: 'Rice',
    category: 'food',
    difficulty: 'beginner'
  },

  // Beginner Level - Emotions
  {
    id: 'b-emo-1',
    korean: '행복',
    romanization: 'haengbok',
    english: 'Happiness',
    category: 'emotions',
    difficulty: 'beginner'
  },
  {
    id: 'b-emo-2',
    korean: '슬픔',
    romanization: 'seulpeum',
    english: 'Sadness',
    category: 'emotions',
    difficulty: 'beginner'
  },

  // Intermediate Level - Greetings
  {
    id: 'i-greet-1',
    korean: '처음 뵙겠습니다',
    romanization: 'cheoeum boepgesseumnida',
    english: 'Nice to meet you (formal)',
    category: 'greetings',
    difficulty: 'intermediate'
  },
  {
    id: 'i-greet-2',
    korean: '오랜만이에요',
    romanization: 'oraenmanieyo',
    english: 'Long time no see',
    category: 'greetings',
    difficulty: 'intermediate'
  },

  // Intermediate Level - Daily Life
  {
    id: 'i-daily-1',
    korean: '지하철역',
    romanization: 'jihacheoryeok',
    english: 'Subway station',
    category: 'daily-life',
    difficulty: 'intermediate'
  },
  {
    id: 'i-daily-2',
    korean: '도서관',
    romanization: 'doseogwan',
    english: 'Library',
    category: 'daily-life',
    difficulty: 'intermediate'
  },

  // Intermediate Level - Food
  {
    id: 'i-food-1',
    korean: '김치찌개',
    romanization: 'kimchijjigae',
    english: 'Kimchi stew',
    category: 'food',
    difficulty: 'intermediate'
  },
  {
    id: 'i-food-2',
    korean: '불고기',
    romanization: 'bulgogi',
    english: 'Korean BBQ',
    category: 'food',
    difficulty: 'intermediate'
  },

  // Intermediate Level - Emotions
  {
    id: 'i-emo-1',
    korean: '스트레스',
    romanization: 'seuteureseu',
    english: 'Stress',
    category: 'emotions',
    difficulty: 'intermediate'
  },
  {
    id: 'i-emo-2',
    korean: '우울해요',
    romanization: 'uulhaeyo',
    english: 'Depressed',
    category: 'emotions',
    difficulty: 'intermediate'
  },

  // Advanced Level - Greetings
  {
    id: 'a-greet-1',
    korean: '안녕히 주무셨어요?',
    romanization: 'annyeonghi jumusyeosseoyo',
    english: 'Did you sleep well?',
    category: 'greetings',
    difficulty: 'advanced'
  },
  {
    id: 'a-greet-2',
    korean: '건강하세요',
    romanization: 'geonganghaseyo',
    english: 'Stay healthy',
    category: 'greetings',
    difficulty: 'advanced'
  },

  // Advanced Level - Daily Life
  {
    id: 'a-daily-1',
    korean: '출퇴근 시간',
    romanization: 'chultoegeun sigan',
    english: 'Rush hour',
    category: 'daily-life',
    difficulty: 'advanced'
  },
  {
    id: 'a-daily-2',
    korean: '휴가를 내다',
    romanization: 'hyugareul naeda',
    english: 'Take a vacation',
    category: 'daily-life',
    difficulty: 'advanced'
  },

  // Advanced Level - Food
  {
    id: 'a-food-1',
    korean: '식사하셨어요?',
    romanization: 'siksahasyeosseoyo',
    english: 'Have you eaten?',
    category: 'food',
    difficulty: 'advanced'
  },
  {
    id: 'a-food-2',
    korean: '맛있게 드세요',
    romanization: 'masissge deuseyo',
    english: 'Enjoy your meal',
    category: 'food',
    difficulty: 'advanced'
  },

  // Advanced Level - Emotions
  {
    id: 'a-emo-1',
    korean: '그리워하다',
    romanization: 'geuriwohada',
    english: 'To miss someone',
    category: 'emotions',
    difficulty: 'advanced'
  },
  {
    id: 'a-emo-2',
    korean: '설레다',
    romanization: 'seolleda',
    english: 'To feel butterflies',
    category: 'emotions',
    difficulty: 'advanced'
  }
];