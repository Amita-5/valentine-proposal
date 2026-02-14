
import React from 'react';

export const GallerySection: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-rose-50">
      <div className="max-w-xl mx-auto text-center">
        <div className="bg-white p-4 rounded-3xl shadow-lg border-8 border-white mb-8 overflow-hidden">
          {/* Using a high-quality romantic GIF placeholder */}
          <img 
            src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbnY5bml4YmdhM2M1Nno1Z282enUyd3lyY3psZ2I5ZzNidXNyeGN2YiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/L4lvB77ltV3pM8MToz/giphy.gif" 
            alt="Cute blushing teddy bear"
            className="w-full h-auto rounded-2xl"
          />
        </div>
        <p className="font-handwriting text-3xl text-rose-600 mb-2 italic">
          "Me whenever you enter the room..."
        </p>
        <p className="text-rose-400 text-sm tracking-widest uppercase">
          Still blushing after all this time
        </p>
      </div>
    </section>
  );
};
