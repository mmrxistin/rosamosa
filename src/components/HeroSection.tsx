'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, ShieldCheck, ArrowRight } from 'lucide-react';
import { HeroContent, UIStrings } from '@/types/cms';

interface HeroSectionProps {
  hero: HeroContent;
  ui: UIStrings;
}

interface SlideItem {
  id: number;
  badge: string;
  title: string;
  highlightText: string;
  desc: string;
  imgUrl: string;
  btnText: string;
}

export default function HeroSection({ hero, ui }: HeroSectionProps): React.JSX.Element {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const slides = hero.slides;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const prevSlide = (): void => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = (): void => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const slide = slides[currentSlide];

  return (
    <section id="hero" className="relative min-h-[90vh] lg:min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        {/* Left Slide Content */}
        <div className="lg:col-span-7 space-y-6 sm:space-y-8 animate-cinematic-reveal">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#6A4C93]/10 dark:bg-white/10 text-[#6A4C93] dark:text-[#FF9A8B] border border-[#3D154B]/20 dark:border-white/10 text-[10px] sm:text-xs font-black tracking-[0.2em] uppercase">
            <span className="w-2 h-2 rounded-full bg-[#FF9A8B] animate-breathe animate-ping" />
            <span>{slide.badge}</span>
          </div>

          <div className="min-h-[160px] sm:min-h-[220px]">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-black text-[#4A3B52] dark:text-white leading-[1.15] tracking-tight">
              {slide.title}
            </h1>
            <p className="mt-3 text-lg sm:text-xl md:text-2xl font-serif italic text-[#FF9A8B]">
              {slide.highlightText}
            </p>
          </div>

          <p className="text-[#625368] dark:text-[#B2AAC0] text-sm sm:text-base md:text-lg font-medium leading-relaxed max-w-2xl min-h-[70px]">
            {slide.desc}
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
            <a
              href="#iletisim"
              className="bg-[#FF9A8B] hover:bg-[#FEC89A] animate-breathe text-white font-black text-xs sm:text-sm uppercase tracking-[0.15em] py-4 px-8 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 active:scale-95 flex items-center justify-center gap-3"
            >
              <span>{slide.btnType === 'support' ? ui.btnSupport : ui.btnExplore}</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#kurumsal"
              className="glass-panel text-[#6A4C93] dark:text-white hover:bg-[#6A4C93]/10 dark:hover:bg-white/10 font-bold text-xs sm:text-sm uppercase tracking-[0.15em] py-4 px-8 rounded-full transition-all duration-300 text-center"
            >
              {ui.btnExplore}
            </a>
          </div>

          {/* Carousel Controls */}
          <div className="flex items-center gap-4 pt-6 border-t border-gray-200 dark:border-white/10">
            <div className="flex items-center gap-2">
              <button
                onClick={prevSlide}
                aria-label={ui.ariaPrevSlide}
                className="p-2.5 rounded-full glass-panel text-[#6A4C93] dark:text-white hover:bg-[#6A4C93]/10 dark:hover:bg-white/10 transition-all"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                aria-label={ui.ariaNextSlide}
                className="p-2.5 rounded-full glass-panel text-[#6A4C93] dark:text-white hover:bg-[#6A4C93]/10 dark:hover:bg-white/10 transition-all"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Slide Dot Indicators */}
            <div className="flex items-center gap-2">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  aria-label={`Slayt ${idx + 1}`}
                  className={`h-2.5 rounded-full transition-all duration-500 ${currentSlide === idx ? 'w-8 bg-[#FF9A8B] animate-breathe' : 'w-2.5 bg-gray-300 dark:bg-white/20'}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Right Slide Graphic */}
        <div className="lg:col-span-5 relative flex items-center justify-center mt-6 lg:mt-0">
          <div className="relative w-full max-w-[420px] lg:max-w-none aspect-square rounded-[3rem] overflow-hidden glass-panel p-4 sm:p-6 border border-black/5 dark:border-white/10 shadow-2xl">
            <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden">
              <Image
                src={slide.imgUrl}
                alt={slide.title}
                fill
                priority
                className="object-cover transition-transform duration-1000 hover:scale-105"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
