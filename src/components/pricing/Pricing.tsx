import React from 'react';
import { PricingCard } from './PricingCard';
import { pricingPlans } from './pricingData';

export function Pricing() {
  return (
    <section className="py-20 bg-white" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-summit-black mb-4 font-mono">
            Choose the Plan That Suits Your Ascent
          </h2>
          <p className="text-xl text-summit-black/80 font-mono">
            Start your journey with our free plan or unlock more features as you grow
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {pricingPlans.map((plan) => (
            <PricingCard key={plan.title} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
}