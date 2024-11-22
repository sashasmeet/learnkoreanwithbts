export interface VocabularyItem {
  id: string;
  korean: string;
  romanization: string;
  english: string;
  audioUrl?: string;
  imageUrl: string;
  category: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
}