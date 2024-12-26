export interface PricingFeature {
  text: string;
}

export interface PricingPlan {
  title: string;
  price: string;
  period: string;
  features: PricingFeature[];
  ctaText: string;
  highlighted?: boolean;
}