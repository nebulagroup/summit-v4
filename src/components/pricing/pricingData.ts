import { PricingPlan } from './types';

export const pricingPlans: PricingPlan[] = [
  {
    title: 'Free Plan',
    price: '$0',
    period: 'month',
    features: [
      { text: 'Access to basic task management and goal-setting tools' },
      { text: 'Daily AI task prioritization' },
      { text: 'Focus sessions with time tracking' },
      { text: 'Limited scenic milestones' }
    ],
    ctaText: 'Get Started for Free'
  },
  {
    title: 'Pro Plan',
    price: '$9.99',
    period: 'month',
    features: [
      { text: 'Everything in the Free Plan' },
      { text: 'Unlimited task management and goal tracking' },
      { text: 'Personalized AI growth insights and analytics' },
      { text: 'Access to the reward system and all scenic milestones' },
      { text: 'Integration with calendars (Google Calendar, Outlook)' },
      { text: 'Priority support' }
    ],
    ctaText: 'Unlock Your Potential',
    highlighted: true
  },
  {
    title: 'Team Plan',
    price: '$19.99',
    period: 'user/month',
    features: [
      { text: 'Everything in the Pro Plan' },
      { text: 'Collaborative goal tracking and shared progress dashboards' },
      { text: 'Group accountability challenges' },
      { text: 'Team growth analytics and insights' },
      { text: 'Dedicated account manager' }
    ],
    ctaText: 'Level Up Your Team'
  }
];