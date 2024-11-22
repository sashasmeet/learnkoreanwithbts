import { useState, useEffect } from 'react';

type ViewMode = 'desktop' | 'mobile';

export function useViewMode() {
  const [viewMode, setViewMode] = useState<ViewMode>(() => {
    const savedMode = localStorage.getItem('viewMode');
    return (savedMode as ViewMode) || 'desktop';
  });

  useEffect(() => {
    if (viewMode === 'mobile') {
      document.documentElement.classList.add('mobile-view');
    } else {
      document.documentElement.classList.remove('mobile-view');
    }
    localStorage.setItem('viewMode', viewMode);
  }, [viewMode]);

  const toggleViewMode = () => {
    setViewMode(prevMode => prevMode === 'desktop' ? 'mobile' : 'desktop');
  };

  return { viewMode, toggleViewMode };
}