'use client';

import React, { useEffect, useCallback } from 'react';
import { ShieldAlert, ExternalLink } from 'lucide-react';

export const SafeExitButton: React.FC = () => {
  const handleSafeExit = useCallback(() => {
    try {
      sessionStorage.clear();
      localStorage.removeItem('rosa_draft');
    } catch {
      // Ignore storage errors if restricted
    }
    // Fast redirect with history replacement to protect user safety
    window.location.replace('https://www.google.com/search?q=hava+durumu');
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleSafeExit();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleSafeExit]);

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[9999] flex items-center gap-2 animate-bounce-short">
      <button
        onClick={handleSafeExit}
        type="button"
        title="Bu siteden anında ayrılmak ve Google Hava Durumu sayfasına gitmek için tıklayın veya ESC tuşuna basın"
        aria-label="Acil Çıkış (ESC)"
        className="group relative flex items-center gap-2.5 px-4 py-2.5 sm:px-5 sm:py-3 rounded-full bg-[#D92638] hover:bg-[#B81D2E] text-white font-display text-xs sm:text-sm font-bold tracking-wide shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-[#D92638]/40"
      >
        <ShieldAlert className="w-4 h-4 sm:w-5 sm:h-5 text-white animate-pulse" />
        <span>ACİL ÇIKIŞ</span>
        <span className="hidden md:inline-block px-1.5 py-0.5 text-[10px] bg-white/20 rounded font-mono font-medium">
          ESC
        </span>
        <ExternalLink className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100 transition-opacity" />
      </button>
    </div>
  );
};

export default SafeExitButton;
