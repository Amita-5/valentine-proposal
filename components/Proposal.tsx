
import React, { useState, useEffect } from 'react';
import { Heart, X } from 'lucide-react';
import canvasConfetti from 'https://cdn.skypack.dev/canvas-confetti';

export const Proposal: React.FC = () => {
  const [noButtonPos, setNoButtonPos] = useState({ x: 0, y: 0 });
  const [isYes, setIsYes] = useState(false);
  const [noCount, setNoCount] = useState(0);

  const moveNoButton = () => {
    const x = Math.random() * 200 - 100;
    const y = Math.random() * 200 - 100;
    setNoButtonPos({ x, y });
    setNoCount(prev => prev + 1);
  };

  const handleYes = () => {
    setIsYes(true);
    canvasConfetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#ff0000', '#ff69b4', '#ffffff', '#ffd700']
    });
  };

  const getNoText = () => {
    const texts = ["No 🙈", "Are you sure? 🥺", "Really? 💔", "Think again! 🌹", "Please? 🧸", "Wrong button! 😂"];
    return texts[Math.min(noCount, texts.length - 1)];
  };

  return (
    <section id="proposal" className="py-32 px-6 flex flex-col items-center justify-center bg-white overflow-hidden">
      {!isYes ? (
        <div className="text-center max-w-xl animate-fade-in">
          <div className="mb-8 flex justify-center">
            <div className="p-4 bg-rose-50 rounded-full animate-bounce">
              <Heart size={64} className="text-rose-500" fill="currentColor" />
            </div>
          </div>
          
          <h2 className="font-serif-romantic text-5xl md:text-6xl text-rose-700 mb-12">
            Will you be my Valentine?
          </h2>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 relative h-32">
            <button 
              onClick={handleYes}
              className="z-10 bg-rose-500 text-white px-12 py-4 rounded-full text-2xl font-bold shadow-xl hover:bg-rose-600 hover:scale-110 active:scale-95 transition-all duration-300"
            >
              Yes! 💖
            </button>
            
            <button 
              onMouseEnter={moveNoButton}
              onClick={moveNoButton}
              style={{ transform: `translate(${noButtonPos.x}px, ${noButtonPos.y}px)` }}
              className="bg-gray-100 text-gray-500 px-8 py-4 rounded-full text-xl font-medium shadow-md transition-all duration-200 whitespace-nowrap"
            >
              {getNoText()}
            </button>
          </div>
        </div>
      ) : (
        <div className="text-center animate-scale-up">
          <div className="text-9xl mb-8 animate-bounce">💖</div>
          <h2 className="font-serif-romantic text-6xl md:text-7xl text-rose-600 mb-6">
            Yaaaay! 🎉
          </h2>
          <p className="text-rose-500 text-2xl md:text-3xl font-handwriting italic mb-8">
            You just made me the happiest person in the world!
          </p>
          <div className="flex justify-center gap-2">
            {[...Array(5)].map((_, i) => (
              <Heart key={i} className="text-rose-400 animate-pulse" size={32} fill="currentColor" />
            ))}
          </div>
        </div>
      )}

      <style>{`
        @keyframes scale-up {
          0% { transform: scale(0.5); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
        .animate-scale-up {
          animation: scale-up 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
        }
        .animate-fade-in {
          animation: fadeIn 1s ease-out forwards;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};
