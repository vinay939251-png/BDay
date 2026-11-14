import React, { useState, useEffect, Suspense, lazy } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ChevronDown, PartyPopper } from 'lucide-react';
import ErrorBoundary from './ErrorBoundary';
import WishModal from './WishModal';

const SPLINE_SCENE_URL = 'https://prod.spline.design/qBvV8-UoQjZ-Zc3l/scene.splinecode';

const Spline = lazy(() => import('@splinetool/react-spline'));

function CakeFallback({ onBlowCandle, candleBlown }) {
  return (
    <div
      onClick={onBlowCandle}
      className="relative w-72 h-72 sm:w-80 sm:h-80 mx-auto flex items-center justify-center cursor-pointer select-none group"
      role="button"
      tabIndex={0}
      aria-label="Interactive Birthday Cake. Click to blow out candle."
    >
      <div className="absolute inset-0 rounded-full bg-primary-pink/15 filter blur-3xl group-hover:bg-primary-pink/25 transition-all duration-500 animate-pulse" />

      <motion.div
        whileHover={{ scale: 1.03, y: -4 }}
        whileTap={{ scale: 0.97 }}
        className="relative z-10 flex flex-col items-center"
      >
        {/* Candle Flame & Wick */}
        <div className="relative flex flex-col items-center h-12 justify-end">
          <AnimatePresence>
            {!candleBlown ? (
              <motion.div
                key="flame"
                initial={{ scale: 0 }}
                animate={{
                  scale: [1, 1.18, 0.95, 1],
                  y: [0, -2, 1, 0],
                  filter: ['drop-shadow(0 0 10px #F6D186)', 'drop-shadow(0 0 18px #FF9A8B)', 'drop-shadow(0 0 10px #F6D186)'],
                }}
                exit={{ scale: 0, opacity: 0, y: -10 }}
                transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
                className="w-5 h-8 bg-gradient-to-t from-primary-pink via-warm-gold to-white rounded-full flex items-center justify-center relative shadow-[0_0_15px_#F6D186]"
              >
                <div className="w-1.5 h-3 bg-white rounded-full opacity-90" />
              </motion.div>
            ) : (
              <motion.div
                key="smoke"
                initial={{ opacity: 0, y: 0, scale: 0.5 }}
                animate={{ opacity: [0, 0.8, 0], y: -25, scale: [0.5, 1.2, 1.5], x: [0, 6, -4, 2] }}
                transition={{ duration: 1.2 }}
                className="text-xs text-muted-brown font-bold"
              >
                💨
              </motion.div>
            )}
          </AnimatePresence>
          <div className="w-0.5 h-3 bg-chocolate/80" />
        </div>

        {/* Candle Body */}
        <div className="w-4 h-10 bg-white rounded-t-sm border border-chocolate/20 flex flex-col justify-between py-1 shadow-xs overflow-hidden relative">
          <div className="h-1 bg-primary-pink w-full -rotate-12 scale-125" />
          <div className="h-1 bg-mint-green w-full -rotate-12 scale-125" />
          <div className="h-1 bg-warm-gold w-full -rotate-12 scale-125" />
        </div>

        {/* Top Cake Tier */}
        <div className="w-40 h-16 bg-white rounded-t-2xl border-b-4 border-chocolate/10 shadow-md relative flex items-center justify-center overflow-hidden">
          <div className="absolute top-0 inset-x-0 h-5 bg-primary-pink/30 rounded-b-xl flex justify-around">
            <span className="w-2.5 h-3 bg-primary-pink/30 rounded-b-full" />
            <span className="w-3 h-4 bg-primary-pink/30 rounded-b-full" />
            <span className="w-2 h-3.5 bg-primary-pink/30 rounded-b-full" />
            <span className="w-3.5 h-4 bg-primary-pink/30 rounded-b-full" />
          </div>
          <div className="flex gap-2.5 text-primary-pink mt-2">
            <span className="w-2 h-2 rounded-full bg-primary-pink shadow-xs" />
            <span className="w-2 h-2 rounded-full bg-mint-green shadow-xs" />
            <span className="w-2 h-2 rounded-full bg-warm-gold shadow-xs" />
            <span className="w-2 h-2 rounded-full bg-primary-pink shadow-xs" />
          </div>
        </div>

        {/* Bottom Cake Tier */}
        <div className="w-56 h-20 bg-[#FDFAF5] rounded-t-2xl border-t-2 border-primary-pink/30 shadow-lg relative flex items-center justify-center overflow-hidden">
          <div className="absolute top-0 inset-x-0 h-6 bg-mint-green/25 rounded-b-xl flex justify-around">
            <span className="w-3 h-4 bg-mint-green/30 rounded-b-full" />
            <span className="w-3 h-5 bg-mint-green/30 rounded-b-full" />
            <span className="w-2 h-3 bg-mint-green/30 rounded-b-full" />
            <span className="w-4 h-4 bg-mint-green/30 rounded-b-full" />
            <span className="w-3 h-5 bg-mint-green/30 rounded-b-full" />
          </div>
          <div className="flex gap-4 mt-3">
            <span className="w-2.5 h-2.5 rounded-full bg-primary-pink/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-warm-gold" />
            <span className="w-2.5 h-2.5 rounded-full bg-chocolate/30" />
            <span className="w-2.5 h-2.5 rounded-full bg-mint-green" />
            <span className="w-2.5 h-2.5 rounded-full bg-primary-pink/70" />
          </div>
        </div>

        {/* Cake Platter */}
        <div className="w-64 h-3.5 bg-white rounded-full border border-chocolate/10 shadow-sm mt-0.5" />
        <div className="w-24 h-3 bg-chocolate/10 rounded-b-lg shadow-inner" />

        <p className="text-[11px] font-bold text-muted-brown/70 mt-3 tracking-wider uppercase group-hover:text-primary-pink transition-colors">
          {candleBlown ? '✨ Wish Made! Tap to view perks' : '🎂 Tap cake to make a wish'}
        </p>
      </motion.div>
    </div>
  );
}

export default function Hero({ config, onTriggerCelebration, isCelebrating, celebrationMessage }) {
  const [canAttemptSpline, setCanAttemptSpline] = useState(false);
  const [splineLoaded, setSplineLoaded] = useState(false);
  const [candleBlown, setCandleBlown] = useState(false);
  const [isWishModalOpen, setIsWishModalOpen] = useState(false);

  const name = config?.name || 'Raga Sruthi';
  const phrase1 = 'Happy Birthday,';
  const phrase2 = `${name}!`;

  useEffect(() => {
    let active = true;
    const controller = new AbortController();

    const verifySplineScene = async () => {
      try {
        const timeout = setTimeout(() => controller.abort(), 2000);
        const res = await fetch(SPLINE_SCENE_URL, {
          method: 'GET',
          signal: controller.signal,
          headers: { Range: 'bytes=0-10' },
        });
        clearTimeout(timeout);
        if (active && (res.status === 200 || res.status === 206)) {
          setCanAttemptSpline(true);
        } else {
          if (active) setCanAttemptSpline(false);
        }
      } catch {
        if (active) setCanAttemptSpline(false);
      }
    };

    verifySplineScene();

    return () => {
      active = false;
      controller.abort();
    };
  }, []);

  const handleMakeWishClick = () => {
    onTriggerCelebration();
    setIsWishModalOpen(true);
  };

  const handleBlowCandle = () => {
    setCandleBlown(true);
    onTriggerCelebration();
    setIsWishModalOpen(true);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04,
        delayChildren: 0.15,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: -25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 14,
        stiffness: 120,
      },
    },
  };

  return (
    <>
      <header
        id="top"
        className="relative min-h-[92vh] flex flex-col justify-between items-center pt-24 pb-12 px-4 text-center overflow-hidden"
      >
        {/* Top Header Content */}
        <div className="max-w-5xl mx-auto flex flex-col items-center z-10 px-2">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 border border-chocolate/5 shadow-xs mb-6"
          >
            <Sparkles className="w-3.5 h-3.5 text-primary-pink" />
            <span className="text-xs font-bold tracking-widest text-muted-brown uppercase">
              A little something for you from Vinay
            </span>
          </motion.div>

          <motion.h1
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-3xl sm:text-5xl md:text-6xl lg:text-[4.2rem] xl:text-7xl font-fredoka font-bold text-chocolate tracking-tight leading-[1.2] mb-5 flex flex-wrap items-center justify-center gap-x-3 sm:gap-x-4 gap-y-2 text-center"
          >
            {/* Phrase 1: Happy Birthday, */}
            <span className="whitespace-nowrap inline-flex">
              {Array.from(phrase1).map((char, index) => (
                <motion.span
                  key={`p1-${char}-${index}`}
                  variants={letterVariants}
                  className={char === ' ' ? 'inline-block w-2.5 sm:w-3.5' : 'inline-block'}
                >
                  {char}
                </motion.span>
              ))}
            </span>

            {/* Phrase 2: Full Name (Raga Sruthi!) - Strictly kept together on one line */}
            <span className="whitespace-nowrap inline-flex text-primary-pink sm:text-chocolate">
              {Array.from(phrase2).map((char, index) => (
                <motion.span
                  key={`p2-${char}-${index}`}
                  variants={letterVariants}
                  className={char === ' ' ? 'inline-block w-2.5 sm:w-3.5' : 'inline-block'}
                >
                  {char}
                </motion.span>
              ))}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: 'easeOut' }}
            className="text-lg sm:text-xl text-muted-brown max-w-xl mx-auto font-medium"
          >
            {config?.content?.heroSubtitle ||
              'A little celebration for someone extraordinary — with all my love, Vinay.'}
          </motion.p>
        </div>

        {/* Centerpiece / Interactive Cake */}
        <div className="relative w-full max-w-lg h-72 sm:h-84 md:h-96 my-4 flex items-center justify-center z-10">
          <ErrorBoundary
            fallback={<CakeFallback onBlowCandle={handleBlowCandle} candleBlown={candleBlown} />}
          >
            {canAttemptSpline ? (
              <Suspense
                fallback={<CakeFallback onBlowCandle={handleBlowCandle} candleBlown={candleBlown} />}
              >
                <div className="w-full h-full relative cursor-grab active:cursor-grabbing">
                  {!splineLoaded && (
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <CakeFallback onBlowCandle={handleBlowCandle} candleBlown={candleBlown} />
                    </div>
                  )}
                  <Spline
                    scene={SPLINE_SCENE_URL}
                    onLoad={() => setSplineLoaded(true)}
                    onError={() => setCanAttemptSpline(false)}
                    style={{
                      width: '100%',
                      height: '100%',
                      opacity: splineLoaded ? 1 : 0,
                      transition: 'opacity 0.6s ease',
                    }}
                  />
                </div>
              </Suspense>
            ) : (
              <CakeFallback onBlowCandle={handleBlowCandle} candleBlown={candleBlown} />
            )}
          </ErrorBoundary>
        </div>

        {/* Primary Action Button */}
        <div className="flex flex-col items-center gap-4 z-10">
          <motion.button
            whileHover={{ scale: 1.04, rotate: -1 }}
            whileTap={{ scale: 0.97 }}
            onClick={handleMakeWishClick}
            className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-primary-pink text-white font-fredoka font-medium text-lg sm:text-xl shadow-[0_8px_25px_rgba(255,154,139,0.4)] hover:shadow-[0_12px_30px_rgba(255,154,139,0.55)] transition-all duration-200"
          >
            <PartyPopper className="w-5 h-5 transition-transform group-hover:rotate-12" />
            <span>{config?.content?.heroButton || 'Make a Wish'}</span>
          </motion.button>

          <AnimatePresence>
            {isCelebrating && celebrationMessage && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                className="px-5 py-2 rounded-full bg-white/95 border border-primary-pink/30 shadow-md text-sm font-semibold text-chocolate flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-warm-gold" />
                <span>{celebrationMessage}</span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Subtle Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="mt-6 flex flex-col items-center gap-1 text-muted-brown/60 z-10"
        >
          <span className="text-[11px] font-bold uppercase tracking-widest">Scroll to explore</span>
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </header>

      {/* Birthday Wish Perks Modal */}
      <WishModal
        isOpen={isWishModalOpen}
        onClose={() => setIsWishModalOpen(false)}
        config={config}
      />
    </>
  );
}
