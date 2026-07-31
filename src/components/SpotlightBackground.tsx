'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export default function SpotlightBackground(): React.JSX.Element {
  const [mousePos, setMousePos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  useEffect(() => {
    let animationFrameId: number;
    let ticking = false;

    const handleMouseMove = (e: MouseEvent): void => {
      if (!ticking) {
        animationFrameId = requestAnimationFrame(() => {
          setMousePos({ x: e.clientX, y: e.clientY });
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 overflow-hidden mix-blend-multiply dark:mix-blend-screen opacity-50 dark:opacity-30"
      >
        <div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] bg-[#FF9A8B] rounded-full mix-blend-multiply filter blur-[100px] animate-slow-pan opacity-25" />
        <div className="absolute top-[20%] right-[-10%] w-[50vw] h-[50vw] bg-[#6A4C93] rounded-full mix-blend-multiply filter blur-[120px] animate-slow-pan opacity-50" style={{ animationDelay: '-10s', animationDirection: 'reverse' }} />
        <div className="absolute bottom-[-20%] left-[20%] w-[70vw] h-[70vw] bg-[#FEC89A] rounded-full mix-blend-multiply filter blur-[140px] animate-slow-pan opacity-30" style={{ animationDelay: '-20s' }} />
      </div>
      
      <div className="fixed top-0 right-[-10%] w-[800px] h-screen pointer-events-none z-10 opacity-30 dark:opacity-15 animate-float">
        <Image src="/about.png" alt="Rosa Anka" fill unoptimized className="object-contain object-right-top" />
      </div>
    </>
  );
}
