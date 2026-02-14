
import React from 'react';

export const GallerySection: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-rose-50/50">
      <div className="max-w-xl mx-auto text-center">
        {/* GIF Container with improved shadow and border */}
        <div className="bg-white p-4 rounded-[2.5rem] shadow-2xl border-[12px] border-white mb-10 overflow-hidden transform hover:scale-105 transition-transform duration-500">
          <img 
            src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExM3BvMmtuM3BvMmtuM3BvMmtuM3BvMmtuM3BvMmtuM3BvMmtuJmVwPXYxX2ludGVybmFsX2dpZl9ieV9pZCZjdD1n/MDJ9IbxxvDUQM/giphy.gif" 
            alt="Cute Waiting Animation"
            className="w-full h-auto rounded-[1.5rem]"
            onError={(e) => {
              // If Giphy link is still problematic, fallback to a reliable static heart image
              e.currentTarget.src = "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?q=80&w=800&auto=format&fit=crop";
            }}
          />
        </div>
        
        {/* Personalized Caption */}
        <div className="space-y-4 animate-bounce-slow">
          <p className="font-handwriting text-4xl md:text-5xl text-rose-600 mb-2 italic drop-shadow-sm font-bold px-2 leading-tight">
            "Me waiting for your answer, Vignesh 🥺"
          </p>
          <div className="flex justify-center items-center gap-3 text-rose-300">
            <span className="text-2xl animate-pulse">✨</span>
            <p className="text-rose-400 text-sm tracking-[0.3em] uppercase font-bold">
              Pretty please?
            </p>
            <span className="text-2xl animate-pulse">✨</span>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};
