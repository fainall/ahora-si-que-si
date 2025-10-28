'use client';

import { useState, useEffect } from 'react';

export default function Hero() {
  const [currentText, setCurrentText] = useState('DESIGN');
  const texts = ['DESIGN', 'FINANCE', 'MARKETING', 'STRATEGY'];
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % texts.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setCurrentText(texts[textIndex]);
  }, [textIndex]);

  return (
    <section className="min-h-screen bg-black text-white pt-20 pb-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Greeting */}
        <div className="mb-12">
          <p className="text-lg text-gray-400">Hi there! we are exolax agency</p>
        </div>

        {/* Main Headline */}
        <div className="mb-16">
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold leading-none mb-4">
            <span className="inline-block transition-all duration-500 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              {currentText}
            </span>
          </h1>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-gray-300">
            .how can we help you?
          </h2>
        </div>

        {/* Service Pills */}
        <div className="flex flex-wrap gap-4 mb-20">
          <button className="px-8 py-3 bg-white text-black rounded-full font-medium hover:bg-gray-200 transition-all duration-300 hover:scale-105">
            Website Design
          </button>
          <button className="px-8 py-3 bg-zinc-900 text-white rounded-full font-medium hover:bg-zinc-800 transition-all duration-300 hover:scale-105 border border-zinc-700">
            Product Design
          </button>
          <button className="px-8 py-3 bg-zinc-900 text-white rounded-full font-medium hover:bg-zinc-800 transition-all duration-300 hover:scale-105 border border-zinc-700">
            Branding & Strategy
          </button>
        </div>

        {/* Social Proof */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div>
            <h3 className="text-5xl sm:text-6xl font-bold mb-2">2.5M+</h3>
            <p className="text-gray-400 text-lg">SATISFIED CLIENTS</p>
          </div>
          <div>
            <p className="text-gray-400 text-lg mb-4">WE WORKED WORLDWIDE WITH 200+ COMPANIES</p>
            <div className="flex flex-wrap gap-6 items-center opacity-50">
              <div className="w-24 h-12 bg-zinc-800 rounded flex items-center justify-center text-xs">LOGO</div>
              <div className="w-24 h-12 bg-zinc-800 rounded flex items-center justify-center text-xs">LOGO</div>
              <div className="w-24 h-12 bg-zinc-800 rounded flex items-center justify-center text-xs">LOGO</div>
              <div className="w-24 h-12 bg-zinc-800 rounded flex items-center justify-center text-xs">LOGO</div>
              <div className="w-24 h-12 bg-zinc-800 rounded flex items-center justify-center text-xs">LOGO</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
