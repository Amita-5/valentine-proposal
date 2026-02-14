
import React, { useState, useEffect, useRef } from 'react';
import { Sparkles } from 'lucide-react';

const message = `From the moment you walked into my life, everything became brighter. You are my best friend, my rock, and my home. I love the way you laugh, the way you look at me, and how you make even the most ordinary days feel magical. I want to spend every tomorrow by your side, creating more of these beautiful memories together. You are my forever and always.`;

export const LoveNote: React.FC = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [hasStarted, setHasStarted] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (hasStarted && displayedText.length < message.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(message.slice(0, displayedText.length + 1));
      }, 40);
      return () => clearTimeout(timeout);
    }
  }, [hasStarted, displayedText]);

  return (
    <section 
      ref={sectionRef}
      className="py-24 px-6 bg-rose-50 flex flex-col items-center justify-center min-h-[40vh]"
    >
      <div className="max-w-2xl w-full bg-white/60 backdrop-blur-sm p-10 md:p-14 rounded-[2rem] shadow-sm border border-rose-100/50 relative">
        <div className="absolute top-6 right-6 text-rose-200 animate-pulse">
          <Sparkles size={24} />
        </div>
        
        <h3 className="font-serif-romantic text-2xl text-rose-400 mb-8 text-center tracking-widest uppercase">My Dearest</h3>
        
        <p className="text-rose-800 text-xl md:text-2xl font-handwriting leading-relaxed min-h-[120px] text-center">
          {displayedText}
          <span className="inline-block w-1 h-6 bg-rose-300 ml-1 animate-pulse"></span>
        </p>
      </div>
    </section>
  );
};
