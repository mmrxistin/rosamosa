import React from 'react';

export default function GridBackground(): React.JSX.Element {
  return (
    <div className="fixed inset-0 pointer-events-none z-10 flex justify-center">
      <div className="w-full max-w-7xl mx-auto px-6 h-full grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-6 lg:gap-10">
        {Array.from({ length: 12 }).map((_, i) => (
          <div 
            key={i} 
            className={`h-full border-x border-[#3D154B]/[0.02] dark:border-white/[0.015] ${
              i >= 4 && i < 8 ? 'hidden md:block' : ''
            } ${i >= 8 ? 'hidden lg:block' : ''}`}
          ></div>
        ))}
      </div>
    </div>
  );
}
