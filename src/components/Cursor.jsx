import React, { useEffect, useState, useRef } from 'react';
import { useReducedMotionPreference } from '../hooks/useReducedMotionPreference';

export default function Cursor() {
  const prefersReduced = useReducedMotionPreference();
  const [enabled, setEnabled] = useState(false);
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [trail, setTrail] = useState([]);
  const lastTrailPos = useRef({ x: -100, y: -100 });

  useEffect(() => {
    // Only activate on devices with fine pointer (mouse) and if reduced-motion is false
    const media = window.matchMedia('(pointer: fine)');
    if (!media.matches || prefersReduced) {
      setEnabled(false);
      return;
    }
    setEnabled(true);
    document.documentElement.classList.add('custom-cursor-active');

    const handleMouseMove = (e) => {
      const { clientX: x, clientY: y } = e;
      setPos({ x, y });

      const dist = Math.hypot(x - lastTrailPos.current.x, y - lastTrailPos.current.y);
      if (dist >= 90) {
        lastTrailPos.current = { x, y };
        const id = Date.now() + Math.random();
        setTrail((prev) => [...prev.slice(-15), { id, x, y, createdAt: Date.now() }]);
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    const interval = setInterval(() => {
      const now = Date.now();
      setTrail((prev) => prev.filter((p) => now - p.createdAt < 1000));
    }, 150);

    return () => {
      document.documentElement.classList.remove('custom-cursor-active');
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(interval);
    };
  }, [prefersReduced]);

  if (!enabled) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden" aria-hidden="true">
      {/* Paw Trails */}
      {trail.map((p) => {
        const age = Date.now() - p.createdAt;
        const opacity = Math.max(0, 1 - age / 1000) * 0.35;
        return (
          <div
            key={p.id}
            className="absolute -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300 pointer-events-none"
            style={{
              left: `${p.x}px`,
              top: `${p.y}px`,
              opacity,
            }}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="#FF9A8B"
              xmlns="http://www.w3.org/2000/svg"
            >
              <ellipse cx="6.5" cy="8" rx="2" ry="3" />
              <ellipse cx="12" cy="5" rx="2" ry="3" />
              <ellipse cx="17.5" cy="8" rx="2" ry="3" />
              <ellipse cx="4" cy="14" rx="2" ry="2.5" />
              <ellipse cx="20" cy="14" rx="2" ry="2.5" />
              <path d="M7 16C7 13.5 9 11.5 12 11.5C15 11.5 17 13.5 17 16C17 18.5 14.5 20.5 12 20.5C9.5 20.5 7 18.5 7 16Z" />
            </svg>
          </div>
        );
      })}

      {/* Main Cursor Paw */}
      <div
        className="fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 pointer-events-none transition-transform duration-75 ease-out"
        style={{
          transform: `translate3d(${pos.x}px, ${pos.y}px, 0)`,
        }}
      >
        <svg
          width="26"
          height="26"
          viewBox="0 0 24 24"
          fill="#3E2723"
          className="filter drop-shadow-[0_2px_4px_rgba(255,154,139,0.5)]"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Paw Pads */}
          <ellipse cx="6.5" cy="8" rx="2" ry="3" fill="#FF9A8B" />
          <ellipse cx="12" cy="5" rx="2" ry="3" fill="#FF9A8B" />
          <ellipse cx="17.5" cy="8" rx="2" ry="3" fill="#FF9A8B" />
          <path
            d="M7.5 15.5C7.5 13 9.5 11 12 11C14.5 11 16.5 13 16.5 15.5C16.5 18 14.5 19.8 12 19.8C9.5 19.8 7.5 18 7.5 15.5Z"
            fill="#3E2723"
          />
        </svg>
      </div>
    </div>
  );
}

