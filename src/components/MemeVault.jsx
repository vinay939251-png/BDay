import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertTriangle, Flame, RotateCcw, Sparkles } from 'lucide-react';
import MemeCard from './MemeCard';
import ChocolateAnimation from './ChocolateAnimation';

// Distinct captions: ONLY item #1 mentions Bhanu, and ONLY item #2 mentions Vinay
const CARD_CAPTIONS = [
  '🐾 Dog Bhanu\'s Special Entry',
  '🐱 Cat Vinay\'s Official Entry',
  '🎾 High Energy Zoomies Protocol',
  '🩺 Veterinary Hugs Directive',
  '💥 Feline Physics Experiment',
  '🍫 Dark Chocolate Dispatch',
  '🥳 Certified Party Animal',
  '🙀 Anti-Adulting Society',
  '🍰 The Case of the Vanished Cake',
  '🚀 Maximum Chaos Reached',
];

export default function MemeVault({ config }) {
  const memesList = config?.memes || [];
  const maxMemes = memesList.length;

  const containerRef = useRef(null);
  const [activeMemes, setActiveMemes] = useState([]);
  const [highestZ, setHighestZ] = useState(10);
  const [chaosStarted, setChaosStarted] = useState(false);
  const [showChocolate, setShowChocolate] = useState(false);

  const isAllSpawned = activeMemes.length >= maxMemes && maxMemes > 0;

  const getRandomCoords = useCallback(() => {
    if (!containerRef.current) {
      return { x: 30, y: 50, rotation: 0 };
    }
    const { clientWidth, clientHeight } = containerRef.current;
    const cardW = Math.min(240, clientWidth * 0.7);
    const cardH = 280;

    const maxX = Math.max(10, clientWidth - cardW - 20);
    const maxY = Math.max(10, clientHeight - cardH - 20);

    const x = Math.floor(Math.random() * maxX) + 10;
    const y = Math.floor(Math.random() * maxY) + 10;
    const rotation = Math.floor(Math.random() * 22) - 11;

    return { x, y, rotation };
  }, []);

  const handleInitialClick = () => {
    if (chaosStarted || maxMemes === 0) return;
    setChaosStarted(true);

    const { x, y, rotation } = getRandomCoords();
    const firstMeme = {
      id: `meme-0-${Date.now()}`,
      src: memesList[0],
      x,
      y,
      rotation,
      zIndex: 11,
      spawnOrder: 0,
      caption: CARD_CAPTIONS[0],
    };

    setHighestZ(12);
    setActiveMemes([firstMeme]);
  };

  const handleMemeClick = useCallback(
    (clickedId) => {
      setActiveMemes((current) => {
        const count = current.length;
        if (count >= maxMemes) return current;

        const toAddCount = Math.min(2, maxMemes - count);
        const newMemes = [];
        let nextZ = highestZ + 1;

        for (let i = 0; i < toAddCount; i++) {
          const nextIndex = count + i;
          const { x, y, rotation } = getRandomCoords();
          const caption = CARD_CAPTIONS[nextIndex] || `Chaos Entry #${nextIndex + 1}`;

          newMemes.push({
            id: `meme-${nextIndex}-${Date.now()}-${i}`,
            src: memesList[nextIndex],
            x,
            y,
            rotation,
            zIndex: nextZ++,
            spawnOrder: nextIndex,
            caption,
          });
        }

        setHighestZ(nextZ);
        return [...current, ...newMemes];
      });
    },
    [maxMemes, memesList, highestZ, getRandomCoords]
  );

  const handleBringToFront = useCallback((id) => {
    setHighestZ((prevZ) => {
      const nextZ = prevZ + 1;
      setActiveMemes((memes) =>
        memes.map((m) => (m.id === id ? { ...m, zIndex: nextZ } : m))
      );
      return nextZ;
    });
  }, []);

  const handleClearChaos = () => {
    setActiveMemes([]);
    setChaosStarted(false);
    setShowChocolate(true);
  };

  useEffect(() => {
    if (showChocolate) {
      const timer = setTimeout(() => setShowChocolate(false), 3800);
      return () => clearTimeout(timer);
    }
  }, [showChocolate]);

  return (
    <section
      id="memes"
      className="relative py-24 px-4 sm:px-6 max-w-6xl mx-auto"
      aria-label="The Meme Vault"
    >
      {/* Header & Warning */}
      <div className="text-center mb-8 flex flex-col items-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-pink/15 border border-primary-pink/30 text-chocolate text-xs font-bold uppercase tracking-wider mb-4">
          <AlertTriangle className="w-3.5 h-3.5 text-primary-pink" />
          <span>Warning: Extremely Unstable Content</span>
        </div>

        <h2 className="text-4xl sm:text-5xl md:text-6xl font-fredoka font-bold text-chocolate tracking-tight">
          {config?.content?.memeHeading || 'Chaos Unleashed'}
        </h2>

        <p className="text-muted-brown text-base sm:text-lg max-w-md mx-auto mt-2 font-medium">
          Some things are better left untouched. Click at your own risk.
        </p>

        {/* Action Controls */}
        <div className="mt-8 flex flex-col items-center gap-3">
          {!chaosStarted ? (
            <div className="flex flex-col items-center gap-2">
              <motion.button
                whileHover={{ scale: 1.05, rotate: 1 }}
                whileTap={{ scale: 0.96 }}
                onClick={handleInitialClick}
                className="px-8 py-4 rounded-full bg-chocolate text-[#FFF5E1] font-fredoka font-semibold text-lg sm:text-xl shadow-lg hover:bg-black transition-colors flex items-center gap-2.5"
              >
                <Flame className="w-5 h-5 text-primary-pink" />
                <span>{config?.content?.memeButton || 'DO NOT CLICK'}</span>
              </motion.button>
              <span className="text-xs text-muted-brown italic">
                (Seriously. We warned you.)
              </span>
            </div>
          ) : isAllSpawned ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center gap-3"
            >
              <div className="px-5 py-2 rounded-full bg-primary-pink/20 border border-primary-pink text-chocolate font-fredoka font-bold text-sm sm:text-base flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-primary-pink" />
                <span>YOU HAVE OFFICIALLY LOST CONTROL.</span>
              </div>
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={handleClearChaos}
                className="px-6 py-3 rounded-full bg-primary-pink text-white font-fredoka font-medium text-base shadow-md hover:shadow-lg transition-all flex items-center gap-2"
              >
                <RotateCcw className="w-4 h-4" />
                <span>CLEAR THE CHAOS</span>
              </motion.button>
            </motion.div>
          ) : (
            <div className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-chocolate/80 bg-white/80 px-4 py-2 rounded-full border border-chocolate/5 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-primary-pink animate-ping" />
              <span>
                Chaos unleashed ({activeMemes.length}/{maxMemes}) — Tap any card to multiply!
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Controlled Chaos Arena */}
      <div
        ref={containerRef}
        className={`relative w-full rounded-2xl border-2 transition-all duration-300 min-h-[480px] sm:min-h-[580px] overflow-hidden ${
          chaosStarted
            ? 'bg-white/40 border-primary-pink/30 shadow-inner'
            : 'bg-white/10 border-dashed border-chocolate/10 flex items-center justify-center'
        }`}
      >
        {!chaosStarted && (
          <div className="text-center p-8 text-muted-brown/50 pointer-events-none select-none">
            <p className="font-fredoka text-xl font-medium">Vault is currently sealed.</p>
            <p className="text-sm mt-1">Press the warning button above to unleash chaos.</p>
          </div>
        )}

        <AnimatePresence>
          {activeMemes.map((meme) => (
            <MemeCard
              key={meme.id}
              meme={meme}
              onMemeClick={handleMemeClick}
              onBringToFront={handleBringToFront}
              containerRef={containerRef}
            />
          ))}
        </AnimatePresence>
      </div>

      {/* Chocolate Drop Animation */}
      <ChocolateAnimation
        active={showChocolate}
        onComplete={() => setShowChocolate(false)}
      />
    </section>
  );
}
