import React from 'react';
import { Hash } from 'lucide-react';

interface Category {
  id: string;
  name: string;
  count: number;
}

interface CategorySelectorProps {
  categories: Category[];
  selectedCategory: string;
  onSelectCategory: (categoryId: string) => void;
}

export function CategorySelector({ 
  categories, 
  selectedCategory, 
  onSelectCategory 
}: CategorySelectorProps) {
  return (
    <div className="mb-8">
      <div className="flex items-center space-x-2 mb-4">
        <Hash className="h-5 w-5 text-purple-600" />
        <h3 className="font-semibold">Categories</h3>
      </div>
      <div className="flex flex-wrap gap-3">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onSelectCategory(category.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition ${
              selectedCategory === category.id
                ? 'bg-purple-600 text-white'
                : 'bg-white/80 text-gray-600 hover:bg-purple-50'
            }`}
          >
            {category.name} ({category.count})
          </button>
        ))}
      </div>
    </div>
  );
}