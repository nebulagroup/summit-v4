import React from 'react';
import { Target, Brain, Trophy, Users } from 'lucide-react';

const features = [
  {
    icon: Target,
    title: 'Home for Your Biggest Goals',
    description: 'Easily organize your most important personal and professional goals in one place. Track your climb in real-time with achievable milestones and insights.'
  },
  {
    icon: Brain,
    title: 'Your Personal AI Coach That Knows You',
    description: 'Personalized coaching tailored to your strengths and growth areas. AI suggestions help you balance productivity and personal development.'
  },
  {
    icon: Trophy,
    title: 'Gamified Productivity',
    description: 'Earn rewards like "Elevation Points" and unlock scenic milestones as you achieve goals. Stay motivated with visual progress tracking and fun challenges.'
  },
  {
    icon: Users,
    title: 'Accountability Partner',
    description: 'Get 24/7 AI-driven accountability or invite friends and mentors for shared goal tracking.'
  }
];

export function Features() {
  return (
    <section className="py-20 bg-white" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-summit-black mb-4 font-mono">
            Achieve Your Goals for Real This Time
          </h2>
          <p className="text-xl text-summit-black/80 font-mono">
            Summit combines powerful AI insights, gamification, and personalized coaching to help you succeed.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="p-6 rounded-xl bg-summit-beige hover:bg-summit-yellow/20 transition-colors">
              <feature.icon className="w-12 h-12 text-summit-orange mb-4" />
              <h3 className="text-xl font-semibold text-summit-black mb-2 font-mono">{feature.title}</h3>
              <p className="text-summit-black/70 font-mono">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}