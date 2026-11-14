import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Stethoscope, CheckCircle2, Award, Heart, ShieldCheck } from 'lucide-react';
import Lottie from 'lottie-react';

function AnimalIllustrationFallback() {
  return (
    <div className="w-56 h-56 sm:w-64 sm:h-64 flex items-center justify-center relative">
      <svg
        viewBox="0 0 200 200"
        className="w-full h-full drop-shadow-md"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Soft ground shadow */}
        <ellipse cx="100" cy="180" rx="80" ry="12" fill="#3E2723" fillOpacity="0.08" />

        {/* Cute Dog (Left) */}
        <g transform="translate(30, 60)">
          {/* Dog Body */}
          <rect x="25" y="55" width="45" height="50" rx="18" fill="#FF9A8B" fillOpacity="0.85" />
          {/* Dog Head */}
          <circle cx="47" cy="40" r="24" fill="#FF9A8B" />
          {/* Ears */}
          <ellipse cx="28" cy="42" rx="7" ry="16" fill="#3E2723" fillOpacity="0.8" transform="rotate(-15 28 42)" />
          <ellipse cx="66" cy="42" rx="7" ry="16" fill="#3E2723" fillOpacity="0.8" transform="rotate(15 66 42)" />
          {/* Eyes & Nose */}
          <circle cx="40" cy="38" r="2.5" fill="#3E2723" />
          <circle cx="54" cy="38" r="2.5" fill="#3E2723" />
          <ellipse cx="47" cy="45" rx="3.5" ry="2.5" fill="#3E2723" />
          {/* Cheerful blush */}
          <circle cx="35" cy="44" r="3" fill="#FFFFFF" fillOpacity="0.6" />
          <circle cx="59" cy="44" r="3" fill="#FFFFFF" fillOpacity="0.6" />
        </g>

        {/* Cute Cat (Right, snuggled) */}
        <g transform="translate(95, 75)">
          {/* Cat Body */}
          <rect x="20" y="45" width="40" height="45" rx="16" fill="#B5EAD7" />
          {/* Cat Head */}
          <circle cx="40" cy="35" r="20" fill="#B5EAD7" />
          {/* Ears */}
          <polygon points="23,28 32,15 36,29" fill="#3E2723" fillOpacity="0.7" />
          <polygon points="44,29 48,15 57,28" fill="#3E2723" fillOpacity="0.7" />
          {/* Sleeping Eyes */}
          <path d="M31 35 Q35 39 39 35" stroke="#3E2723" strokeWidth="2" strokeLinecap="round" fill="none" />
          <path d="M43 35 Q47 39 51 35" stroke="#3E2723" strokeWidth="2" strokeLinecap="round" fill="none" />
          {/* Nose */}
          <polygon points="40,39 42,37 38,37" fill="#FF9A8B" />
          {/* Tail */}
          <path d="M60 75 Q75 60 70 45" stroke="#B5EAD7" strokeWidth="7" strokeLinecap="round" fill="none" />
        </g>

        {/* Small floating hearts */}
        <path
          d="M100 45 C100 35 115 35 115 45 C115 55 100 65 100 65 C100 65 85 55 85 45 C85 35 100 35 100 45 Z"
          fill="#FF9A8B"
          transform="scale(0.3) translate(230, 40)"
        />
      </svg>
    </div>
  );
}

export default function VetCard({ config }) {
  const [lottieData, setLottieData] = useState(null);
  const [lottieFailed, setLottieFailed] = useState(false);

  const name = config?.name || 'Raga Sruthi';
  const diagnosis = config?.diagnosis || 'Too Awesome & Extraordinary';
  const treatment = config?.prescriptionText || 'Unlimited Chocolates';
  const vetHeading = config?.content?.vetHeading || `Future Dr. ${name} in the Making`;

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const fetchLottie = async () => {
      try {
        const timeout = setTimeout(() => controller.abort(), 2500);
        const res = await fetch('https://assets3.lottiefiles.com/packages/lf20_syqnfe7c.json', {
          signal: controller.signal,
        });
        clearTimeout(timeout);
        if (res.ok) {
          const json = await res.json();
          if (isMounted) setLottieData(json);
        } else {
          if (isMounted) setLottieFailed(true);
        }
      } catch {
        if (isMounted) setLottieFailed(true);
      }
    };

    fetchLottie();

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, []);

  return (
    <section
      id="prescription"
      className="relative py-24 px-4 sm:px-6 max-w-5xl mx-auto"
      aria-label="Veterinary Prescription"
    >
      {/* Section Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-mint-green/30 border border-mint-green/50 text-chocolate text-xs font-bold uppercase tracking-wider mb-3">
          <Stethoscope className="w-3.5 h-3.5 text-chocolate" />
          <span>Clinical Excellence</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-fredoka font-bold text-chocolate tracking-tight">
          {vetHeading}
        </h2>
        <p className="text-muted-brown text-base sm:text-lg max-w-md mx-auto mt-2 font-medium">
          An official medical document issued by the highest veterinary standards.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16">
        {/* Prescription Document Pad */}
        <motion.div
          initial={{ opacity: 0, y: 40, rotate: 0 }}
          whileInView={{ opacity: 1, y: 0, rotate: -1.5 }}
          viewport={{ once: true, margin: '-60px' }}
          whileHover={{ rotate: 0, scale: 1.01 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="w-full max-w-lg paper-texture rounded-xl p-6 sm:p-9 shadow-prescription border-2 border-chocolate/10 relative overflow-hidden"
        >
          {/* Header */}
          <div className="border-b-2 border-chocolate/15 pb-5 mb-6 flex items-start justify-between">
            <div>
              <div className="flex items-center gap-2 text-chocolate font-fredoka font-bold text-xl sm:text-2xl">
                <div className="w-6 h-6 rounded-md bg-chocolate text-[#FDFAF5] flex items-center justify-center font-bold text-sm">
                  Rx
                </div>
                <span>DEPARTMENT OF VETERINARY MEDICINE</span>
              </div>
              <p className="text-xs uppercase tracking-widest text-muted-brown font-semibold mt-1">
                Official Birthday Care &amp; Happiness Directive
              </p>
            </div>
            <Award className="w-8 h-8 text-warm-gold shrink-0 opacity-80" />
          </div>

          {/* Form Fields */}
          <div className="space-y-5 text-sm sm:text-base font-nunito">
            {/* Patient & Date */}
            <div className="grid grid-cols-2 gap-4 pb-4 border-b border-chocolate/10">
              <div>
                <span className="block text-xs font-bold uppercase tracking-wider text-muted-brown">
                  Patient Name
                </span>
                <span className="font-fredoka font-semibold text-lg text-chocolate whitespace-nowrap">
                  {name}
                </span>
              </div>
              <div>
                <span className="block text-xs font-bold uppercase tracking-wider text-muted-brown">
                  Date of Issue
                </span>
                <span className="font-medium text-chocolate">
                  {new Date().toLocaleDateString(undefined, {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </span>
              </div>
            </div>

            {/* Diagnosis */}
            <div className="pb-4 border-b border-chocolate/10">
              <span className="block text-xs font-bold uppercase tracking-wider text-muted-brown">
                Primary Diagnosis
              </span>
              <div className="mt-1 flex items-center gap-2 text-primary-pink font-fredoka font-bold text-xl">
                <Heart className="w-5 h-5 fill-primary-pink" />
                <span>{diagnosis}</span>
              </div>
            </div>

            {/* Treatment */}
            <div className="pb-4 border-b border-chocolate/10">
              <span className="block text-xs font-bold uppercase tracking-wider text-muted-brown">
                Prescribed Treatment
              </span>
              <div className="mt-1 font-fredoka text-lg sm:text-xl text-chocolate font-bold bg-mint-green/25 px-3 py-2 rounded-lg border border-mint-green/40">
                🍫 {treatment}
              </div>
            </div>

            {/* Clinical Directives without any Bhanu or Vinay */}
            <div>
              <span className="block text-xs font-bold uppercase tracking-wider text-muted-brown mb-2">
                Mandatory Clinical Directives:
              </span>
              <ul className="space-y-2 text-sm text-chocolate/90 font-medium">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary-pink shrink-0 mt-0.5" />
                  <span>Continue being uniquely wonderful, energetic, and extraordinarily kind.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary-pink shrink-0 mt-0.5" />
                  <span>Pet every friendly dog encountered in public spaces.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary-pink shrink-0 mt-0.5" />
                  <span>Provide immediate affection and cuddles to cats demanding attention.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary-pink shrink-0 mt-0.5" />
                  <span>Never stop chasing your dream of becoming Dr. {name}, DVM.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary-pink shrink-0 mt-0.5" />
                  <span>Repeat birthday celebrations annually without exception.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Footer & Official Seal */}
          <div className="mt-8 pt-5 border-t-2 border-dashed border-chocolate/15 flex items-center justify-between">
            <div>
              <p className="text-[11px] font-bold text-muted-brown uppercase tracking-wider">
                Authorized Signature
              </p>
              <p className="font-serif italic text-base text-chocolate mt-0.5">
                Chief of Veterinary Smiles, DVM
              </p>
            </div>

            {/* Official Stamp */}
            <div className="stamp-seal w-28 h-28 p-2 text-center flex flex-col justify-center">
              <ShieldCheck className="w-5 h-5 mx-auto text-chocolate mb-0.5" />
              <span className="text-[7.5px] font-bold leading-tight">
                APPROVED BY
              </span>
              <span className="text-[9px] font-extrabold text-primary-pink">
                THE HIGHEST
              </span>
              <span className="text-[7.5px] font-bold leading-tight">
                CHOCOLATE AUTH.
              </span>
            </div>
          </div>
        </motion.div>

        {/* Pet Illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="flex flex-col items-center text-center max-w-xs"
        >
          <div className="w-64 h-64 flex items-center justify-center">
            {lottieData && !lottieFailed ? (
              <Lottie
                animationData={lottieData}
                loop={true}
                className="w-full h-full"
              />
            ) : (
              <AnimalIllustrationFallback />
            )}
          </div>
          <p className="text-xs uppercase tracking-widest font-bold text-muted-brown mt-4">
            Patiently Approved by All Paws 🐾
          </p>
          <p className="text-sm text-chocolate/80 mt-1">
            Certified 100% happy tail-wags, loud purrs, and unconditional love.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
