import React from 'react';
import { FeatureCard } from './features/FeatureCard';
import { features } from './features/featureData';

export function HowItWorks() {
  return (
    <section className="py-20 bg-gradient-to-br from-white to-summit-beige" id="how-it-works">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-summit-black mb-4 font-mono">
            Start Climbing Your Personal Summit Today
          </h2>
          <p className="text-xl text-summit-black/80 font-mono">
            Everything you need to reach your goals, one step at a time
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              emoji={feature.emoji}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}