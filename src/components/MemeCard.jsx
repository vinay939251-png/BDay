import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export default function MemeCard({
  meme,
  onMemeClick,
  onBringToFront,
  containerRef,
}) {
  const isDraggingRef = useRef(false);
  const dragStartTimeRef = useRef(0);
  const [imgError, setImgError] = useState(false);

  const handlePointerDown = () => {
    isDraggingRef.current = false;
    dragStartTimeRef.current = Date.now();
    if (onBringToFront) {
      onBringToFront(meme.id);
    }
  };

  const handleDragStart = () => {
    isDraggingRef.current = true;
  };

  const handleDragEnd = () => {
    setTimeout(() => {
      isDraggingRef.current = false;
    }, 80);
  };

  const handleClick = (e) => {
    e.stopPropagation();
    if (!isDraggingRef.current && Date.now() - dragStartTimeRef.current < 400) {
      onMemeClick(meme.id);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      e.stopPropagation();
      onMemeClick(meme.id);
    }
  };

  const cardCaption = meme.caption || `Chaos Item #${meme.spawnOrder + 1}`;

  return (
    <motion.div
      drag
      dragConstraints={containerRef}
      dragElastic={0.15}
      dragMomentum={false}
      onPointerDown={handlePointerDown}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-label={`${cardCaption}. Click to unleash more chaos, or drag to reposition.`}
      initial={{
        scale: 0.2,
        opacity: 0,
        x: meme.x,
        y: meme.y,
        rotate: meme.rotation - 15,
      }}
      animate={{
        scale: 1,
        opacity: 1,
        x: meme.x,
        y: meme.y,
        rotate: meme.rotation,
      }}
      exit={{
        scale: 0.1,
        opacity: 0,
        y: meme.y - 100,
        transition: { duration: 0.35, ease: 'easeInOut' },
      }}
      transition={{
        type: 'spring',
        damping: 18,
        stiffness: 180,
      }}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: meme.zIndex,
        touchAction: 'none',
      }}
      className="polaroid-frame rounded-md cursor-grab active:cursor-grabbing focus:outline-none focus:ring-2 focus:ring-primary-pink/80 select-none group w-52 sm:w-64"
    >
      {/* Polaroid Image Box */}
      <div className="relative aspect-square w-full bg-[#FDFAF5] rounded-xs overflow-hidden border border-chocolate/5 flex items-center justify-center">
        {!imgError ? (
          <img
            src={meme.src}
            alt={cardCaption}
            className="w-full h-full object-cover pointer-events-none transition-transform duration-300 group-hover:scale-[1.02]"
            loading="lazy"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center p-4 text-center bg-white">
            <span className="text-4xl mb-2">🎉</span>
            <p className="font-fredoka text-sm font-bold text-chocolate">
              {cardCaption}
            </p>
            <p className="text-xs text-muted-brown mt-1">Tap to keep spawning!</p>
          </div>
        )}

        {/* Small Click Hint Pill on Hover */}
        <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded-full bg-white/90 shadow-xs border border-chocolate/10 text-[10px] font-bold text-chocolate opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
          <Sparkles className="w-2.5 h-2.5 text-primary-pink" />
          <span>Tap to multiply!</span>
        </div>
      </div>

      {/* Polaroid bottom caption */}
      <div className="pt-2.5 text-center">
        <p className="font-fredoka text-xs text-chocolate/85 font-semibold tracking-wide">
          {cardCaption}
        </p>
      </div>
    </motion.div>
  );
}
