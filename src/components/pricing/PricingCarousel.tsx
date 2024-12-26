import React, { useState } from 'react';
import { PricingCard } from './PricingCard';
import { CarouselButton } from '../carousel/CarouselButton';
import { pricingPlans } from './pricingData';

export function PricingCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((current) => (current + 1) % pricingPlans.length);
  };

  const prev = () => {
    setCurrentIndex((current) => (current - 1 + pricingPlans.length) % pricingPlans.length);
  };

  return (
    <div className="relative px-8">
      <div className="overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {pricingPlans.map((plan) => (
            <div key={plan.title} className="w-full flex-shrink-0 px-4">
              <PricingCard {...plan} />
            </div>
          ))}
        </div>
      </div>
      <CarouselButton direction="prev" onClick={prev} />
      <CarouselButton direction="next" onClick={next} />
    </div>
  );
}