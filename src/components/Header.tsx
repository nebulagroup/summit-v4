import React from 'react';

export function Header() {
  return (
    <header className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 border-b border-summit-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <img 
              src="/summit-logo.svg" 
              alt="Summit Logo" 
              className="h-10 w-10"
            />
            <span className="text-xl font-bold text-summit-black font-mono">Summit</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            {['Features', 'How It Works', 'Testimonials', 'Pricing', 'FAQs'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-summit-black hover:text-summit-orange transition-colors font-mono"
              >
                {item}
              </a>
            ))}
          </nav>
          <button className="bg-summit-orange text-white px-4 py-2 rounded-lg hover:bg-summit-orange/90 transition-colors font-mono">
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
}