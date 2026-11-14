import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ShoppingBag, Crown, Check, X, Heart } from 'lucide-react';

export default function WishModal({ isOpen, onClose, config }) {
  const [copiedIndex, setCopiedIndex] = useState(null);

  const name = config?.name || 'Raga Sruthi';
  const sender = config?.senderName || 'Vinay';
  const wishes = config?.wishes || [
    {
      id: 'blinkit',
      badge: '🛵 Instant Snack Voucher',
      title: 'Blinkit On Demand',
      promise: 'Order anything you want from Blinkit (max Rs.200) from me',
      subtext: 'Valid anytime. Chocolates, ice cream, chips — bill goes straight to Vinay!',
    },
    {
      id: 'golden-pass',
      badge: '👑 Vinay\'s Golden Pass',
      title: 'The Ultimate Birthday Promise',
      promise: 'You can ask me to do anything, and I will do it for you',
      subtext: 'No questions asked, no expiry date. Simply tell Vinay what you want.',
    },
  ];

  const handleCopy = (text, idx) => {
    navigator.clipboard?.writeText(text);
    setCopiedIndex(idx);
    setTimeout(() => setCopiedIndex(null), 2500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#3E2723]/60 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: 'spring', damping: 22, stiffness: 260 }}
            className="relative w-full max-w-lg bg-[#FFF5E1] rounded-3xl p-6 sm:p-8 shadow-2xl border-4 border-white z-10 overflow-hidden"
          >
            {/* Soft decorative background glow */}
            <div className="absolute -top-20 -right-20 w-44 h-44 rounded-full bg-primary-pink/20 filter blur-2xl pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-44 h-44 rounded-full bg-mint-green/25 filter blur-2xl pointer-events-none" />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/80 hover:bg-white border border-chocolate/10 flex items-center justify-center text-chocolate transition-colors"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Header */}
            <div className="text-center mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-pink/15 text-chocolate text-xs font-bold uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5 text-primary-pink" />
                <span>Birthday Wish Unlocked</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-fredoka font-bold text-chocolate tracking-tight">
                Granted for <span className="whitespace-nowrap">{name}</span>! ✨
              </h3>
              <p className="text-sm text-muted-brown mt-1">
                From {sender} with all my heart. Here are your official birthday perks:
              </p>
            </div>

            {/* Birthday Vouchers / Promises */}
            <div className="space-y-4 my-6">
              {wishes.map((item, idx) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.15 }}
                  className="relative p-5 rounded-2xl bg-white border-2 border-chocolate/10 shadow-sm hover:shadow-md transition-shadow group"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-2">
                      {idx === 0 ? (
                        <div className="w-8 h-8 rounded-full bg-mint-green/30 flex items-center justify-center text-chocolate">
                          <ShoppingBag className="w-4 h-4 text-chocolate" />
                        </div>
                      ) : (
                        <div className="w-8 h-8 rounded-full bg-warm-gold/40 flex items-center justify-center text-chocolate">
                          <Crown className="w-4 h-4 text-chocolate" />
                        </div>
                      )}
                      <span className="text-xs font-bold text-muted-brown uppercase tracking-wider">
                        {item.badge}
                      </span>
                    </div>

                    <button
                      onClick={() => handleCopy(item.promise, idx)}
                      className="text-xs font-bold px-2.5 py-1 rounded-lg bg-[#FFF5E1] hover:bg-primary-pink hover:text-white transition-colors text-chocolate flex items-center gap-1 shrink-0"
                    >
                      {copiedIndex === idx ? (
                        <>
                          <Check className="w-3 h-3 text-green-600" />
                          <span>Copied!</span>
                        </>
                      ) : (
                        <span>Copy Wish</span>
                      )}
                    </button>
                  </div>

                  {/* Main Promise Text */}
                  <p className="mt-3 font-fredoka text-lg sm:text-xl font-medium text-chocolate leading-snug">
                    “{item.promise}”
                  </p>

                  <p className="text-xs text-muted-brown mt-1.5 font-medium">
                    {item.subtext}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Footer Action */}
            <div className="flex flex-col items-center gap-3 pt-2 text-center">
              <button
                onClick={onClose}
                className="w-full py-3.5 rounded-full bg-primary-pink text-white font-fredoka font-medium text-base shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <Heart className="w-4 h-4 fill-white" />
                <span>Accept Wishes &amp; Keep Celebrating</span>
              </button>
              <p className="text-[11px] text-muted-brown font-semibold">
                Guaranteed by Vinay • Sealed with love
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

