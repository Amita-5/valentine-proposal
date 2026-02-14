
import React, { useEffect, useState } from 'react';
import { ChevronDown, Heart } from 'lucide-react';

export const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center text-center px-4 overflow-hidden bg-gradient-to-b from-rose-50 to-cream-50">
      {/* Background Floating Hearts */}
      <div className="absolute inset-0 z-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="heart-particle text-pink-200"
            style={{
              left: `${Math.random() * 100}%`,
              bottom: `-50px`,
              '--duration': `${15 + Math.random() * 20}s`,
              fontSize: `${20 + Math.random() * 30}px`
            } as any}
          >
            <Heart fill="currentColor" />
          </div>
        ))}
      </div>

      <div className={`z-10 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <h1 className="font-serif-romantic text-5xl md:text-7xl lg:text-8xl text-rose-600 mb-6 drop-shadow-sm">
          My Heart for You
        </h1>
        <p className="max-w-2xl mx-auto text-rose-400 text-lg md:text-xl font-light mb-12 italic leading-relaxed px-4">
          I'm sorry it took me so long to find the perfect way to say this. 
          Sometimes words aren't enough, but I hope this little space shows you even a fraction of what you mean to me.
        </p>
        
        <button 
          onClick={scrollNext}
          className="group relative inline-flex items-center gap-2 bg-rose-500 text-white px-10 py-4 rounded-full text-lg font-medium shadow-xl hover:bg-rose-600 transition-all duration-300 hover:scale-105 active:scale-95 overflow-hidden"
        >
          <span className="z-10 flex items-center gap-2">
            Open My Heart <Heart size={20} fill="white" className="group-hover:animate-pulse" />
          </span>
          <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
        </button>
      </div>

      <div className="absolute bottom-10 animate-bounce cursor-pointer text-rose-300" onClick={scrollNext}>
        <ChevronDown size={32} />
      </div>
    </section>
  );
};
