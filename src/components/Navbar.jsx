import React, { useState, useEffect } from 'react';
import { Sparkles, Heart } from 'lucide-react';

export default function Navbar({ name = 'Raga Sruthi', sender = 'Vinay' }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#FFF5E1]/90 backdrop-blur-md py-3 shadow-sm border-b border-[#3E2723]/5'
          : 'bg-transparent py-5'
      }`}
      aria-label="Main Navigation"
    >
      <div className="max-w-5xl mx-auto px-6 flex items-center justify-between">
        <a
          href="#top"
          className="group flex items-center gap-2 text-chocolate font-fredoka font-semibold tracking-tight text-lg hover:text-primary-pink transition-colors"
        >
          <Sparkles className="w-5 h-5 text-primary-pink transition-transform group-hover:rotate-12" />
          <span className="whitespace-nowrap">{name}&apos;s Day</span>
          <span className="hidden sm:inline-block text-xs font-nunito font-bold text-muted-brown bg-primary-pink/15 px-2 py-0.5 rounded-full">
            from {sender}
          </span>
        </a>

        <div className="flex items-center gap-6 text-sm font-semibold text-muted-brown">
          <a
            href="#note"
            className="hover:text-chocolate transition-colors hidden sm:inline-block"
          >
            The Note
          </a>
          <a
            href="#prescription"
            className="hover:text-chocolate transition-colors hidden sm:inline-block"
          >
            Rx
          </a>
          <a
            href="#memes"
            className="hover:text-chocolate transition-colors inline-block"
          >
            Chaos Vault
          </a>
          <a
            href="#wishes"
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-primary-pink/15 text-chocolate hover:bg-primary-pink/25 transition-all text-xs font-bold uppercase tracking-wider"
          >
            <Heart className="w-3.5 h-3.5 fill-primary-pink text-primary-pink" />
            <span>Celebrate</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
