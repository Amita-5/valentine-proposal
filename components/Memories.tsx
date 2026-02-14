
import React from 'react';
import { Memory } from '../types';

const memories: Memory[] = [
  { id: 1, url: 'https://picsum.photos/seed/love-alt-1/800/800', caption: 'The moment it all began.' },
  { id: 2, url: 'https://picsum.photos/seed/love-alt-2/800/800', caption: 'Our favorite quiet afternoon.' },
  { id: 3, url: 'https://picsum.photos/seed/love-alt-3/800/800', caption: 'Always better together.' },
];

export const Memories: React.FC = () => {
  return (
    <section className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="font-serif-romantic text-4xl md:text-5xl text-rose-600 mb-4">A Few Special Moments</h2>
        <div className="w-16 h-0.5 bg-rose-200 mx-auto rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {memories.map((memory) => (
          <div 
            key={memory.id} 
            className="group relative overflow-hidden rounded-xl shadow-sm hover:shadow-xl transition-all duration-500 aspect-[4/5] bg-rose-50"
          >
            <img 
              src={memory.url} 
              alt={memory.caption}
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-white/10 group-hover:bg-transparent transition-colors duration-500"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/40 to-transparent">
              <p className="text-white text-xl font-handwriting text-center translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                {memory.caption}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
