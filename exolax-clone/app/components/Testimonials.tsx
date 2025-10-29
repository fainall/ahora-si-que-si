'use client';

import { useState } from 'react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'DANIEL SMITH',
      title: 'Senior Engineer',
      quote: 'This digital agency completely transformed our online presence. Their expertise, creativity, and attention to detail exceeded all our expectations. We highly recommend their outstanding services!'
    },
    {
      name: 'SARAH JOHNSON',
      title: 'Marketing Director',
      quote: 'Working with this team has been an absolute pleasure. They delivered exceptional results that drove real business growth. Their strategic approach and creative solutions are unmatched.'
    },
    {
      name: 'MICHAEL CHEN',
      title: 'CEO & Founder',
      quote: 'The level of professionalism and expertise demonstrated by this agency is remarkable. They understood our vision and brought it to life beyond our expectations. Truly a game-changing partnership.'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="bg-black text-white py-32 px-4 sm:px-6 lg:px-8 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20">
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4 md:mb-0">
            OUR CLIENTS<br />AWESOME<br />TESTIMONIALS
          </h2>
          <div className="text-center">
            <div className="w-32 h-32 rounded-full border-4 border-white flex items-center justify-center mb-4">
              <span className="text-5xl font-bold">5.0</span>
            </div>
            <p className="text-gray-400">1200+ Clients Rating</p>
          </div>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative">
          <div className="bg-zinc-900 rounded-2xl p-8 md:p-12 min-h-[300px] flex flex-col justify-between">
            <div className="mb-8">
              <p className="text-2xl md:text-3xl leading-relaxed text-gray-300 mb-8">
                "{testimonials[currentIndex].quote}"
              </p>
            </div>
            <div>
              <h4 className="text-2xl font-bold mb-1">{testimonials[currentIndex].name}</h4>
              <p className="text-gray-400">{testimonials[currentIndex].title}</p>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full border border-zinc-700 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
            >
              ←
            </button>
            <button
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full border border-zinc-700 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
            >
              →
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-white w-8' : 'bg-zinc-700'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
