import React, { useEffect, useState } from 'react';
import { Cat, Dog } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useReducedMotionPreference } from '../hooks/useReducedMotionPreference';

export default function FloatingAnimals() {
  const prefersReduced = useReducedMotionPreference();
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    if (prefersReduced) return;

    // Detect mobile: if small screen, reduce spawn rate
    const isMobile = window.innerWidth < 768;
    const intervalTime = isMobile ? 6500 : 3500;

    const interval = setInterval(() => {
      setAnimals((current) => {
        if (current.length >= 6) return current;
        const id = Date.now() + Math.random();
        const type = Math.random() > 0.5 ? 'cat' : 'dog';
        const left = Math.floor(Math.random() * 85) + 5; // 5% to 90%
        const size = Math.floor(Math.random() * 14) + 20; // 20px to 34px
        const duration = Math.floor(Math.random() * 8) + 14; // 14s to 22s
        const rotation = Math.floor(Math.random() * 40) - 20;

        return [...current, { id, type, left, size, duration, rotation }];
      });
    }, intervalTime);

    return () => clearInterval(interval);
  }, [prefersReduced]);

  const removeAnimal = (id) => {
    setAnimals((prev) => prev.filter((a) => a.id !== id));
  };

  if (prefersReduced) return null;

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      <AnimatePresence>
        {animals.map((item) => (
          <motion.div
            key={item.id}
            initial={{ y: '105vh', opacity: 0, rotate: item.rotation - 10 }}
            animate={{
              y: '-10vh',
              opacity: [0, 0.18, 0.22, 0.18, 0],
              rotate: item.rotation + 10,
            }}
            transition={{
              duration: item.duration,
              ease: 'linear',
            }}
            onAnimationComplete={() => removeAnimal(item.id)}
            style={{
              position: 'absolute',
              left: `${item.left}%`,
            }}
            className="text-chocolate"
          >
            {item.type === 'cat' ? (
              <Cat size={item.size} strokeWidth={1.5} />
            ) : (
              <Dog size={item.size} strokeWidth={1.5} />
            )}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

