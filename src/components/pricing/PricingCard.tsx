import React from 'react';
import type { PricingPlan } from './types';

type PricingCardProps = PricingPlan;

export function PricingCard({ title, price, period, features, ctaText, highlighted }: PricingCardProps) {
  return (
    <div className={`p-8 rounded-xl ${highlighted ? 'bg-summit-orange/10 border-2 border-summit-orange' : 'bg-summit-beige'}`}>
      <h3 className="text-2xl font-bold text-summit-black mb-4 font-mono">{title}</h3>
      <div className="mb-6">
        <span className="text-4xl font-bold text-summit-black font-mono">{price}</span>
        <span className="text-summit-black/70 font-mono">/{period}</span>
      </div>
      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start font-mono text-summit-black/80">
            <span className="mr-2">•</span>
            {feature.text}
          </li>
        ))}
      </ul>
      <button className={`w-full py-3 px-6 rounded-lg font-mono transition-colors ${
        highlighted 
          ? 'bg-summit-orange text-white hover:bg-summit-orange/90' 
          : 'bg-summit-black text-white hover:bg-summit-black/90'
      }`}>
        {ctaText}
      </button>
    </div>
  );
}