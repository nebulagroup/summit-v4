import React, { useState } from 'react';
import { TestimonialCard } from './testimonials/TestimonialCard';
import { CarouselButton } from './carousel/CarouselButton';
import { testimonials } from './testimonials/testimonialData';

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((current) => (current + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((current) => (current - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-summit-beige" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-summit-black mb-4 font-mono">
            But don't take just our word for it
          </h2>
          <p className="text-xl text-summit-black/80 font-mono">
            Join thousands of other Summiteers working towards their goals
          </p>
        </div>
        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.name} className="w-full flex-shrink-0 px-4">
                  <TestimonialCard {...testimonial} />
                </div>
              ))}
            </div>
          </div>
          <CarouselButton direction="prev" onClick={prev} />
          <CarouselButton direction="next" onClick={next} />
        </div>
      </div>
    </section>
  );
}