import React from 'react';
import { motion } from 'framer-motion';
import { PartyPopper, ArrowUp, Heart } from 'lucide-react';

export default function FinalSurprise({ config, onCelebrateAgain }) {
  const name = config?.name || 'Raga Sruthi';
  const sender = config?.senderName || 'Vinay';
  const closingMessage =
    config?.content?.closingMessage ||
    'Stay wonderful. Stay chaotic. Never stop being you.';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="wishes"
      className="relative py-28 px-4 text-center flex flex-col items-center justify-center border-t border-chocolate/5 bg-gradient-to-b from-transparent to-white/30"
      aria-label="Closing Birthday Surprise"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="max-w-xl mx-auto flex flex-col items-center"
      >
        {/* Sweet Chocolate Bite Illustration */}
        <div className="w-16 h-16 mb-6 flex items-center justify-center">
          <svg
            width="56"
            height="56"
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="filter drop-shadow-sm"
          >
            <rect x="8" y="8" width="48" height="48" rx="8" fill="#3E2723" />
            <rect x="14" y="14" width="36" height="36" rx="4" fill="#4A312A" stroke="#2C1B18" strokeWidth="1.5" />
            <path
              d="M32 38 L25 31 C22 28 22 24 25 22 C28 20 31 21 32 24 C33 21 36 20 39 22 C42 24 42 28 39 31 Z"
              fill="#FF9A8B"
              opacity="0.9"
            />
          </svg>
        </div>

        {/* Heading */}
        <p className="text-xs uppercase font-bold tracking-[0.25em] text-muted-brown mb-3">
          One Last Thing for <span className="whitespace-nowrap">{name}</span>...
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-fredoka font-bold text-chocolate tracking-tight leading-snug mb-4">
          {closingMessage}
        </h2>

        <p className="text-muted-brown text-sm sm:text-base mb-10 max-w-md">
          May your year ahead be full of tail-wags, purrs, delicious treats, and boundless joy.
        </p>

        {/* Button Actions */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <motion.button
            whileHover={{ scale: 1.04, rotate: 1 }}
            whileTap={{ scale: 0.96 }}
            onClick={onCelebrateAgain}
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-primary-pink text-white font-fredoka font-medium text-base shadow-md hover:shadow-lg transition-all"
          >
            <PartyPopper className="w-5 h-5" />
            <span>Celebrate Again</span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full bg-white border border-chocolate/10 text-chocolate font-fredoka font-medium text-sm shadow-xs hover:bg-[#FFF5E1] transition-all"
          >
            <ArrowUp className="w-4 h-4 text-muted-brown" />
            <span>Back to Top</span>
          </motion.button>
        </div>

        {/* Small footer note */}
        <div className="mt-16 flex items-center gap-2 text-xs font-semibold text-muted-brown/70">
          <span>Crafted with</span>
          <Heart className="w-3.5 h-3.5 text-primary-pink fill-primary-pink" />
          <span>and endless love by {sender} for {name}</span>
        </div>
      </motion.div>
    </footer>
  );
}
