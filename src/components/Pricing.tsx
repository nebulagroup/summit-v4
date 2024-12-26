import React from 'react';
import { PricingCarousel } from './pricing/PricingCarousel';

export function Pricing() {
  return (
    <section className="py-20 bg-white" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-summit-black mb-4 font-mono">
            Choose Your Path to the Summit
          </h2>
          <p className="text-xl text-summit-black/80 font-mono">
            Start your journey with our free plan or unlock more features as you grow
          </p>
        </div>
        <PricingCarousel />
      </div>
    </section>
  );
}