import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles } from 'lucide-react';

export default function BirthdayNote({ config }) {
  const message =
    config?.birthdayMessage ||
    'Another year of being wonderfully chaotic, intensely kind, and endlessly brilliant.';

  return (
    <section
      id="note"
      className="relative py-28 px-6 max-w-4xl mx-auto flex flex-col items-center text-center"
      aria-label="Birthday Note"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="w-full flex flex-col items-center"
      >
        {/* Minimal Emblem */}
        <div className="w-12 h-12 rounded-full bg-white border border-chocolate/5 shadow-xs flex items-center justify-center mb-8">
          <Heart className="w-5 h-5 text-primary-pink fill-primary-pink/30" />
        </div>

        {/* Editorial Subtitle */}
        <p className="text-xs uppercase font-bold tracking-[0.25em] text-muted-brown mb-6">
          A Moment of Appreciation
        </p>

        {/* The Quote / Note */}
        <blockquote className="relative max-w-2xl">
          <span className="absolute -top-10 -left-6 text-6xl text-primary-pink/20 font-serif select-none pointer-events-none">
            “
          </span>
          <p className="text-2xl sm:text-3xl md:text-4xl font-fredoka font-medium text-chocolate leading-relaxed tracking-tight">
            {message}
          </p>
          <span className="absolute -bottom-12 -right-4 text-6xl text-primary-pink/20 font-serif select-none pointer-events-none">
            ”
          </span>
        </blockquote>

        {/* Divider detail */}
        <div className="flex items-center gap-3 mt-12 opacity-60">
          <div className="w-12 h-[1px] bg-chocolate/20" />
          <Sparkles className="w-3.5 h-3.5 text-primary-pink" />
          <div className="w-12 h-[1px] bg-chocolate/20" />
        </div>
      </motion.div>
    </section>
  );
}

