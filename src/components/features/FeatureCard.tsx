import React from 'react';

interface FeatureCardProps {
  emoji: string;
  title: string;
  description: string;
}

export function FeatureCard({ emoji, title, description }: FeatureCardProps) {
  return (
    <div className="relative p-6 bg-summit-beige rounded-xl hover:bg-summit-yellow/20 transition-all duration-300 transform hover:-translate-y-1">
      <div className="text-4xl mb-4">{emoji}</div>
      <h3 className="text-xl font-bold text-summit-black mb-2 font-mono">{title}</h3>
      <p className="text-summit-black/70 font-mono">{description}</p>
    </div>
  );
}