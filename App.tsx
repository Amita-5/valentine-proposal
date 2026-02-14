
import React, { useState, useEffect, useRef } from 'react';
import { Hero } from './components/Hero';
import { Memories } from './components/Memories';
import { LoveNote } from './components/LoveNote';
import { Proposal } from './components/Proposal';
import { GallerySection } from './components/GallerySection';
import { Footer } from './components/Footer';
import { Heart, Download, Volume2, VolumeX } from 'lucide-react';
import html2canvas from 'html2canvas';

const App: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [clickHearts, setClickHearts] = useState<{id: number, x: number, y: number}[]>([]);
  const [trail, setTrail] = useState<{id: number, x: number, y: number}[]>([]);
  const mainRef = useRef<HTMLDivElement>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Background Music Toggle
  const toggleMusic = () => {
    if (!audioRef.current) {
      // Using a soft romantic piano track
      audioRef.current = new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3');
      audioRef.current.loop = true;
    }
    
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(e => console.log("Audio playback failed", e));
    }
    setIsPlaying(!isPlaying);
  };

  // Cursor Trail Effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const newTrailItem = { id: Date.now() + Math.random(), x: e.clientX, y: e.clientY };
      setTrail(prev => [...prev.slice(-15), newTrailItem]);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Click Effect: Floating Hearts
  const handleClick = (e: React.MouseEvent) => {
    const newHeart = {
      id: Date.now(),
      x: e.clientX,
      y: e.clientY
    };
    setClickHearts(prev => [...prev, newHeart]);
    setTimeout(() => {
      setClickHearts(prev => prev.filter(h => h.id !== newHeart.id));
    }, 2000);
  };

  // Download Page as Image
  const downloadPage = async () => {
    if (mainRef.current) {
      const canvas = await html2canvas(mainRef.current, {
        useCORS: true,
        backgroundColor: '#fffafb',
        logging: false
      });
      const link = document.createElement('a');
      link.download = 'VigneshProposalMemory.png';
      link.href = canvas.toDataURL('image/png');
      link.click();
    }
  };

  return (
    <div 
      className="relative min-h-screen overflow-x-hidden cursor-none"
      onClick={handleClick}
    >
      {/* Custom Cursor Trail */}
      {trail.map((t, i) => (
        <div 
          key={t.id}
          className="fixed pointer-events-none text-rose-300 opacity-50 z-[10000]"
          style={{ 
            left: t.x, 
            top: t.y, 
            transform: `translate(-50%, -50%) scale(${(trail.length - i) / trail.length})`,
            transition: 'opacity 0.2s'
          }}
        >
          <Heart size={12} fill="currentColor" />
        </div>
      ))}

      {/* Persistent Controls */}
      <div className="fixed top-6 right-6 z-50 flex flex-col gap-3">
        <button 
          onClick={(e) => { e.stopPropagation(); toggleMusic(); }}
          className="p-3 bg-white/80 backdrop-blur-md rounded-full shadow-lg border border-pink-100 text-pink-500 hover:scale-110 transition-transform cursor-pointer"
          title="Toggle Music"
        >
          {isPlaying ? <Volume2 size={24} /> : <VolumeX size={24} />}
        </button>
        <button 
          onClick={(e) => { e.stopPropagation(); downloadPage(); }}
          className="p-3 bg-white/80 backdrop-blur-md rounded-full shadow-lg border border-pink-100 text-pink-500 hover:scale-110 transition-transform cursor-pointer"
          title="Download Memory"
        >
          <Download size={24} />
        </button>
      </div>

      <main ref={mainRef}>
        <Hero />
        <Memories />
        <LoveNote />
        <Proposal />
        <GallerySection />
        <Footer />
      </main>

      {/* Floating Click Hearts */}
      {clickHearts.map(heart => (
        <div 
          key={heart.id}
          className="fixed pointer-events-none text-rose-500 transition-all duration-1000 ease-out z-[9999]"
          style={{ 
            left: heart.x, 
            top: heart.y,
            transform: `translate(-50%, -50%)`,
            animation: 'clickHeartUp 2s forwards'
          }}
        >
          <Heart size={24} fill="currentColor" />
        </div>
      ))}

      <style>{`
        @keyframes clickHeartUp {
          0% { opacity: 1; transform: translate(-50%, -50%) scale(0.5); }
          100% { opacity: 0; transform: translate(-50%, -200px) scale(1.5) rotate(20deg); }
        }
        body { cursor: none; }
        .cursor-pointer { cursor: pointer; }
      `}</style>
    </div>
  );
};

export default App;
