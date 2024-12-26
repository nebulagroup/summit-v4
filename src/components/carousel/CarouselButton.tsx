import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselButtonProps {
  direction: 'prev' | 'next';
  onClick: () => void;
}

export function CarouselButton({ direction, onClick }: CarouselButtonProps) {
  return (
    <button
      onClick={onClick}
      className="absolute top-1/2 -translate-y-1/2 bg-white/90 p-2 rounded-full shadow-lg hover:bg-summit-orange hover:text-white transition-colors"
      style={{ [direction === 'prev' ? 'left' : 'right']: '-1rem' }}
    >
      {direction === 'prev' ? <ChevronLeft size={24} /> : <ChevronRight size={24} />}
    </button>
  );
}