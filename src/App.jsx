import React, { useState, useEffect, useCallback } from 'react';
import Confetti from 'react-confetti';
import configData from './data/config.json';
import ErrorBoundary from './components/ErrorBoundary';
import Cursor from './components/Cursor';
import FloatingAnimals from './components/FloatingAnimals';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BirthdayNote from './components/BirthdayNote';
import VetCard from './components/VetCard';
import MemeVault from './components/MemeVault';
import FinalSurprise from './components/FinalSurprise';

export default function App() {
  const [windowDimensions, setWindowDimensions] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 1200,
    height: typeof window !== 'undefined' ? window.innerHeight : 800,
  });

  const [isCelebrating, setIsCelebrating] = useState(false);
  const [celebrationMessage, setCelebrationMessage] = useState('');

  // Handle window resize for Confetti
  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener('resize', handleResize, { passive: true });
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Trigger Confetti & celebratory message
  const triggerCelebration = useCallback(() => {
    setIsCelebrating(true);
    const messages = [
      '🎉 Wish granted! Maximum joy inbound!',
      '✨ May your year be as extraordinary as you!',
      '🎂 Have the sweetest and happiest birthday ever!',
      '🐾 Big hugs, loud purrs, and unlimited chocolate!',
    ];
    const picked = messages[Math.floor(Math.random() * messages.length)];
    setCelebrationMessage(picked);

    setTimeout(() => {
      setIsCelebrating(false);
    }, 4500);
  }, []);

  const confettiColors = ['#3E2723', '#FF9A8B', '#B5EAD7', '#F6D186', '#FFFFFF'];

  return (
    <ErrorBoundary fallback={<div className="p-8 text-center font-fredoka text-xl text-chocolate">Happy Birthday! Something went wrong, but the joy remains!</div>}>
      <div className="relative min-h-screen bg-[#FFF5E1] text-[#3E2723] overflow-x-hidden selection:bg-[#FF9A8B]/30">
        {/* Global Interactive Custom Cursor */}
        <Cursor />

        {/* Ambient Floating Animal Icons in Background */}
        <FloatingAnimals />

        {/* Confetti Burst Overlay */}
        {isCelebrating && (
          <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden" aria-hidden="true">
            <Confetti
              width={windowDimensions.width}
              height={windowDimensions.height}
              recycle={false}
              numberOfPieces={260}
              gravity={0.18}
              colors={confettiColors}
            />
          </div>
        )}

        {/* Sticky Navigation */}
        <Navbar name={configData.name} sender={configData.senderName} />

        {/* Main Single-Page Sections */}
        <main className="relative z-10 flex flex-col">
          {/* Section A: Hero */}
          <Hero
            config={configData}
            onTriggerCelebration={triggerCelebration}
            isCelebrating={isCelebrating}
            celebrationMessage={celebrationMessage}
          />

          {/* Section B: Birthday Note */}
          <BirthdayNote config={configData} />

          {/* Section C: Future Veterinarian Prescription */}
          <VetCard config={configData} />

          {/* Section D: Meme Vault (Controlled Chaos) */}
          <MemeVault config={configData} />

          {/* Section E: Final Surprise */}
          <FinalSurprise
            config={configData}
            onCelebrateAgain={triggerCelebration}
          />
        </main>
      </div>
    </ErrorBoundary>
  );
}
