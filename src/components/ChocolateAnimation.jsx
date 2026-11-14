import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export default function ChocolateAnimation({ active, onComplete }) {
  return (
    <AnimatePresence onExitComplete={onComplete}>
      {active && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 pointer-events-none flex flex-col items-center justify-center overflow-hidden"
          aria-live="polite"
        >
          {/* Falling Illustrated Chocolate Bar */}
          <motion.div
            initial={{ y: '-120vh', rotate: -35, scale: 0.8 }}
            animate={{
              y: [null, '0vh', '-4vh', '0vh'],
              rotate: [-35, 12, -4, 0],
              scale: [0.8, 1.1, 0.98, 1],
            }}
            transition={{
              duration: 1.2,
              times: [0, 0.65, 0.85, 1],
              ease: 'easeOut',
            }}
            className="flex flex-col items-center"
          >
            {/* Custom SVG Chocolate Bar with Wrapper */}
            <div className="filter drop-shadow-[0_20px_40px_rgba(62,39,35,0.4)]">
              <svg
                width="220"
                height="150"
                viewBox="0 0 220 150"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Chocolate Core */}
                <rect x="20" y="15" width="180" height="120" rx="8" fill="#3E2723" />

                {/* Chocolate Grid Squares */}
                {[
                  [28, 23], [68, 23], [108, 23], [148, 23],
                  [28, 60], [68, 60], [108, 60], [148, 60],
                  [28, 97], [68, 97], [108, 97], [148, 97],
                ].map(([cx, cy], idx) => (
                  <g key={idx}>
                    <rect
                      x={cx}
                      y={cy}
                      width="34"
                      height="30"
                      rx="3"
                      fill="#4A312A"
                      stroke="#2C1B18"
                      strokeWidth="1.5"
                    />
                    <path
                      d={`M ${cx + 2} ${cy + 2} L ${cx + 32} ${cy + 2} L ${cx + 28} ${cy + 6} L ${cx + 6} ${cy + 6} Z`}
                      fill="#63433A"
                    />
                  </g>
                ))}

                {/* Golden Foil Tear / Wrapper Layer */}
                <path
                  d="M 15 80 Q 50 65 90 75 Q 130 85 205 70 L 205 138 Q 205 142 200 142 L 20 142 Q 15 142 15 138 Z"
                  fill="#FF9A8B"
                  stroke="#E88374"
                  strokeWidth="2"
                />
                <path
                  d="M 15 78 Q 50 63 90 73 Q 130 83 205 68 L 205 82 Q 130 97 90 87 Q 50 77 15 92 Z"
                  fill="#F6D186"
                />
                
                {/* Wrapper Label */}
                <rect x="50" y="100" width="120" height="28" rx="6" fill="#FFF5E1" />
                <text
                  x="110"
                  y="118"
                  fontFamily="sans-serif"
                  fontSize="10"
                  fontWeight="bold"
                  fill="#3E2723"
                  textAnchor="middle"
                  letterSpacing="1.5"
                >
                  PREMIUM COCOA
                </text>
              </svg>
            </div>

            {/* Reassuring Toast Message */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.4 }}
              className="mt-6 px-6 py-3 rounded-full bg-white/95 border-2 border-chocolate/10 shadow-xl text-chocolate font-fredoka font-semibold text-base sm:text-lg flex items-center gap-2 pointer-events-auto"
            >
              <Sparkles className="w-5 h-5 text-warm-gold fill-warm-gold" />
              <span>Emergency chocolate supply delivered.</span>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

