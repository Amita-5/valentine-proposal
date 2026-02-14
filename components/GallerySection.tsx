
import React from 'react';

export const GallerySection: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-rose-50/50">
      <div className="max-w-xl mx-auto text-center">
        <div className="bg-white p-4 rounded-[2.5rem] shadow-xl border-[12px] border-white mb-10 overflow-hidden transform hover:rotate-2 transition-transform duration-500">
          <img 
            src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbnY5bml4YmdhM2M1Nno1Z282enUyd3lyY3psZ2I5ZzNidXNyeGN2YiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/L4lvB77ltV3pM8MToz/giphy.gif" 
            alt="Cute blushing teddy bear"
            className="w-full h-auto rounded-[1.5rem]"
          />
        </div>
        
        <div className="space-y-4 animate-bounce-slow">
          <p className="font-handwriting text-4xl md:text-5xl text-rose-600 mb-2 italic drop-shadow-sm font-bold">
            "Me waiting for your answer, Vignesh 🥺"
          </p>
          <div className="flex justify-center gap-2 text-rose-300">
            <span>✨</span>
            <p className="text-rose-400 text-sm tracking-[0.2em] uppercase font-semibold">
              Pretty please?
            </p>
            <span>✨</span>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};
