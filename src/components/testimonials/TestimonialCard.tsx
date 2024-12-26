import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  emoji: string;
  name: string;
  role: string;
  quote: string;
}

export function TestimonialCard({ emoji, name, role, quote }: TestimonialCardProps) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg transform transition-all duration-300 hover:-translate-y-1">
      <div className="text-6xl mb-4">{emoji}</div>
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-5 h-5 text-summit-yellow fill-current" />
        ))}
      </div>
      <p className="text-summit-black/80 mb-6 font-mono">{quote}</p>
      <div className="font-mono">
        <p className="font-bold text-summit-black">{name}</p>
        <p className="text-summit-black/60">{role}</p>
      </div>
    </div>
  );
}