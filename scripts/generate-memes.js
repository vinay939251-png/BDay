import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const outDir = path.resolve('public', 'memes');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// Exactly ONE meme includes "bhanu" (#1)
// Exactly ONE meme includes "Vinay" (#2)
// The remaining 8 do not include either name.
const memeData = [
  {
    bg: '#FFF0F5',
    accent: '#FF9A8B',
    title: 'DR. BHANU (THE DOGGO)',
    quote: '"I reviewed Raga Sruthi\'s chart:\nOfficially 100% awesome."',
    sub: '🐾 Board Certified Good Boy',
    emoji: '🐶🩺',
  },
  {
    bg: '#E8F8F5',
    accent: '#B5EAD7',
    title: 'CAT VINAY REPORTING',
    quote: '"Waiting for Raga Sruthi\nto ask for whatever she wants."',
    sub: '👑 Dedicated to your happiness',
    emoji: '🐱👑',
  },
  {
    bg: '#FFF8E7',
    accent: '#F6D186',
    title: 'GIFT AUDIT',
    quote: '"I brought zero practical gifts,\nonly maximum chaotic joy."',
    sub: '🎾 High energy level: 1000%',
    emoji: '🐕🎉',
  },
  {
    bg: '#F5EEF8',
    accent: '#D7BDE2',
    title: 'CLINICAL TRIAL',
    quote: '"Official finding:\nPetting dogs cures all stress."',
    sub: '💉 Proven veterinary science',
    emoji: '🥼🐕',
  },
  {
    bg: '#FDEDEC',
    accent: '#F1948A',
    title: 'FELINE PROTOCOL',
    quote: '"I knocked over the cup\nout of pure celebration."',
    sub: '😼 It was in the trajectory of fun',
    emoji: '🐈💥',
  },
  {
    bg: '#EAF2F8',
    accent: '#85C1E9',
    title: 'SWEET PRESCRIPTION',
    quote: '"One bar of dark chocolate\nevery 2 hours until bedtime."',
    sub: '🍫 Doctor\'s official orders',
    emoji: '🍫🎂',
  },
  {
    bg: '#FEF9E7',
    accent: '#F9E79F',
    title: 'PARTY ANIMAL',
    quote: '"I have no idea what\'s happening,\nbut I am wearing this cone hat."',
    sub: '🥳 Pure celebratory vibes',
    emoji: '🐶🎩',
  },
  {
    bg: '#E8F6F3',
    accent: '#A3E4D7',
    title: 'SHOCKED KITTEN',
    quote: '"Wait... we are supposed to\nact mature this year?!"',
    sub: '🙀 Absolutely not happening',
    emoji: '🙀🎈',
  },
  {
    bg: '#FDFEFE',
    accent: '#FF9A8B',
    title: 'THE MYSTERY CAKE',
    quote: '"The cake didn\'t vanish...\nit relocated to my belly."',
    sub: '🍰 Case closed, detective',
    emoji: '🐕🍰',
  },
  {
    bg: '#F4ECF7',
    accent: '#C39BD3',
    title: 'CHAOS UNLEASHED!',
    quote: '"Another year older,\nexponentially more chaotic!"',
    sub: '🚀 Happy Birthday Raga Sruthi!',
    emoji: '🎉✨',
  },
];

async function generateAll() {
  for (let i = 0; i < memeData.length; i++) {
    const m = memeData[i];
    const num = i + 1;
    const svg = `
    <svg width="600" height="600" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad${num}" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="${m.bg}" />
          <stop offset="100%" stop-color="#FFFFFF" />
        </linearGradient>
      </defs>
      
      <!-- Card Background -->
      <rect width="600" height="600" fill="url(#grad${num})" />
      <rect x="20" y="20" width="560" height="560" rx="28" fill="none" stroke="${m.accent}" stroke-width="4" stroke-dasharray="8 8" />
      
      <!-- Top Pill -->
      <rect x="120" y="55" width="360" height="42" rx="21" fill="${m.accent}" opacity="0.3" />
      <text x="300" y="82" font-family="sans-serif" font-size="15" font-weight="bold" fill="#3E2723" text-anchor="middle" letter-spacing="1.5">
        ${m.title}
      </text>

      <!-- Center Big Emoji Avatar -->
      <circle cx="300" cy="220" r="90" fill="#FFFFFF" stroke="${m.accent}" stroke-width="6" />
      <text x="300" y="245" font-family="sans-serif" font-size="70" text-anchor="middle">
        ${m.emoji}
      </text>

      <!-- Quote -->
      <text x="300" y="380" font-family="sans-serif" font-size="25" font-weight="bold" fill="#3E2723" text-anchor="middle">
        ${m.quote.split('\n')[0]}
      </text>
      <text x="300" y="420" font-family="sans-serif" font-size="25" font-weight="bold" fill="#3E2723" text-anchor="middle">
        ${m.quote.split('\n')[1] || ''}
      </text>

      <!-- Footer Subtitle -->
      <rect x="70" y="480" width="460" height="48" rx="12" fill="#3E2723" />
      <text x="300" y="510" font-family="sans-serif" font-size="15" font-weight="600" fill="#FFF5E1" text-anchor="middle">
        ${m.sub}
      </text>

      <!-- Watermark stamp -->
      <text x="300" y="565" font-family="sans-serif" font-size="12" font-weight="bold" fill="#8C756B" text-anchor="middle" opacity="0.75">
        BIRTHDAY MEME VAULT • ITEM #${num}/10
      </text>
    </svg>`;

    const dest = path.join(outDir, `${num}.jpg`);
    await sharp(Buffer.from(svg))
      .jpeg({ quality: 92 })
      .toFile(dest);
    console.log(`Generated ${dest}`);
  }
}

generateAll().catch(console.error);
