import React from 'react';

const faqs = [
  {
    question: 'How is my data secured in Summit?',
    answer: 'Summit employs industry-standard end-to-end encryption, ensuring your personal information and progress data remain private and secure. We also comply with GDPR and CCPA regulations.'
  },
  {
    question: "How does Summit's AI work?",
    answer: 'Our AI analyzes your goals, habits, and task history to provide dynamic prioritization, personalized growth insights, and actionable suggestions—all while maintaining data privacy.'
  },
  {
    question: 'What devices is Summit available on?',
    answer: 'Summit is available on iOS and Android devices. A web version is in development to expand accessibility.'
  },
  {
    question: 'Is there a free trial for Pro and Team plans?',
    answer: 'Yes, we offer a 7-day free trial for both the Pro and Team plans so you can explore all premium features before committing.'
  },
  {
    question: 'Can I use Summit offline?',
    answer: "You can track tasks and goals offline, and your data will sync with our servers when you're back online."
  },
  {
    question: 'How do I cancel my subscription?',
    answer: "You can cancel your subscription anytime via your account settings. You'll retain access to premium features until the end of your billing cycle."
  }
];

export function FAQ() {
  return (
    <section className="py-20 bg-summit-beige" id="faqs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-summit-black mb-4 font-mono">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {faqs.map((faq) => (
            <div key={faq.question} className="bg-white p-8 rounded-xl">
              <h3 className="text-xl font-bold text-summit-black mb-4 font-mono">
                {faq.question}
              </h3>
              <p className="text-summit-black/80 font-mono">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}