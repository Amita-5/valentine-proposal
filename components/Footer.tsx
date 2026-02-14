
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-32 px-6 text-center bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-rose-50 to-transparent opacity-50 z-0"></div>
      
      <div className="relative z-10 max-w-2xl mx-auto">
        <h4 className="font-serif-romantic text-4xl md:text-5xl text-rose-600 mb-8 glowing-text">
          Forever Yours, Always.
        </h4>
        
        <p className="text-rose-400 text-xl font-light italic mb-12">
          "In all the world, there is no heart for me like yours. In all the world, there is no love for you like mine."
        </p>
        
        <div className="text-rose-200 text-sm uppercase tracking-[0.3em] font-medium">
          Valentine's Day 2024
        </div>
      </div>

      <style>{`
        .glowing-text {
          text-shadow: 0 0 10px rgba(255, 182, 193, 0.5), 0 0 20px rgba(255, 182, 193, 0.3);
          animation: glow 3s ease-in-out infinite alternate;
        }
        @keyframes glow {
          from { text-shadow: 0 0 10px rgba(255, 182, 193, 0.3); }
          to { text-shadow: 0 0 25px rgba(255, 135, 135, 0.6), 0 0 40px rgba(255, 135, 135, 0.2); }
        }
        .bg-gradient-radial {
          background-image: radial-gradient(circle, var(--tw-gradient-from) 0%, var(--tw-gradient-to) 70%);
        }
      `}</style>
    </footer>
  );
};
