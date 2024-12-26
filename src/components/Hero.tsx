import React from 'react';
import { QrCode, Apple, Smartphone } from 'lucide-react';

export function Hero() {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-summit-beige to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <div className="mb-12 lg:mb-0">
            <h1 className="text-5xl font-bold text-summit-black mb-6 font-mono">
              Reach Your Peak
            </h1>
            <p className="text-xl text-summit-black/80 mb-8 font-mono">
              Summit is your AI life coach that helps you organize & track your goals, hold you accountable, and strive for your 24/7 data-driven roadmap for success.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <button className="flex items-center px-6 py-3 bg-summit-orange text-white rounded-lg hover:bg-summit-orange/90 transition-colors font-mono">
                <Apple className="w-6 h-6 mr-2" />
                Download for iOS
              </button>
              <button className="flex items-center px-6 py-3 bg-summit-orange text-white rounded-lg hover:bg-summit-orange/90 transition-colors font-mono">
                <Smartphone className="w-6 h-6 mr-2" />
                Download for Android
              </button>
            </div>
            <div className="flex items-center gap-4">
              <QrCode className="w-24 h-24 text-summit-black" />
              <p className="text-sm text-summit-black/70 font-mono">Scan here to download</p>
            </div>
            <p className="mt-4 text-sm text-summit-black/70 font-mono">
              Rated 4.7+ on the App Store by thousands of climbers like you.
            </p>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-summit-yellow/20 to-summit-blue/20 rounded-2xl"></div>
            <img
              src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=1740"
              alt="Summit App Dashboard"
              className="rounded-2xl shadow-2xl relative z-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
}