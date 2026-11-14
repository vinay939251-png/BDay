# 🎂 An Interactive, Editorial-Quality Birthday Experience

A sophisticated, highly interactive, visually memorable single-page birthday web application crafted with an editorial design sensibility. It combines warm minimalist aesthetics, delightful micro-interactions, responsive physics-driven card dragging, veterinary-themed details, and a controlled chaotic meme vault.

---

## ✨ Features

- **Editorial Aesthetic & Warm Palette**: Curated cream (`#FFF5E1`), chocolate brown (`#3E2723`), pastel pink (`#FF9A8B`), and mint green (`#B5EAD7`).
- **Interactive 3D Centerpiece**: Spline 3D birthday cake with interactive orbit and an elegant custom vector fallback for instant offline/low-spec reliability.
- **Letter-by-Letter Entrance Typography**: Smooth spring-based character reveal powered by Framer Motion.
- **Dynamic Birthday Confetti**: Multi-colored celebration burst triggered by wishes and replay interactions.
- **Veterinary Department Prescription (Rx)**: Custom paper-textured clinical prescription pad celebrating the recipient's dream of becoming a Doctor of Veterinary Medicine, accompanied by an animal illustration.
- **The Meme Vault (Controlled Chaos)**:
  - Interactive "DO NOT CLICK" sequence.
  - Spawns Polaroid-framed photo cards within bounding constraints.
  - Clicking any card unleashes exponential chaos up to configured memes.
  - Full touch and mouse dragging with active layer elevation.
  - "CLEAR THE CHAOS" trigger with a falling chocolate bar animation and emergency chocolate delivery toast.
- **Custom SVG Paw-Print Cursor & Trail**: Smoothly tracks mouse movements with fading paw prints (automatically disabled on touch devices and for users with `prefers-reduced-motion`).
- **Ambient Floating Pets**: Gentle background cat and dog outlines ascending periodically.
- **Centralized Configuration**: All personalized text, diagnosis, prescription, colors, and meme images are controlled from a single JSON file without altering React components.
- **Zero Layout Shifts & Mobile Responsive**: Optimized layouts tested across desktop, tablet, and mobile screens.

---

## 🛠️ Technology Stack

- **Framework**: [React 18](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Motion & Physics**: [Framer Motion](https://www.framer.com/motion/)
- **Celebration Effects**: [react-confetti](https://github.com/alampros/react-confetti)
- **3D Graphics**: [@splinetool/react-spline](https://spline.design/)
- **Lottie Animations**: [lottie-react](https://github.com/Gamote/lottie-react)
- **Icons**: [lucide-react](https://lucide.dev/)

---

## 🚀 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed (version 18 or higher recommended).

### 1. Installation

Clone or navigate to the project directory and install dependencies:

```bash
npm install
```

### 2. Start the Development Server

Start Vite's local dev server:

```bash
npm run dev
```

Open your browser at `http://localhost:5173/` (or the port indicated in your terminal).

---

## ⚙️ Customization Guide

All personalization settings are centralized in:

📂 `src/data/config.json`

```json
{
  "name": "Raga Sruthi",
  "senderName": "Vinay",
  "petDog": "Bhanu",
  "petCat": "Vinay",
  "age": null,
  "memes": [
    "/memes/1.jpg",
    "/memes/2.jpg",
    "/memes/3.jpg",
    "/memes/4.jpg",
    "/memes/5.jpg",
    "/memes/6.jpg",
    "/memes/7.jpg",
    "/memes/8.jpg",
    "/memes/9.jpg",
    "/memes/10.jpg"
  ],
  "prescriptionText": "Unlimited chocolates & Blinkit snacks from Vinay",
  "diagnosis": "Too Awesome & Extraordinary",
  "birthdayMessage": "Another year of being wonderfully chaotic, brilliantly kind, and endlessly special.",
  "wishes": [
    {
      "id": "blinkit",
      "badge": "🛵 Instant Snack Voucher",
      "title": "Blinkit On Demand",
      "promise": "Order anything you want from Blinkit (max Rs.200) from me",
      "subtext": "Valid anytime today. Chocolates, ice cream, chips — bill goes straight to Vinay!"
    },
    {
      "id": "golden-pass",
      "badge": "👑 Vinay's Golden Pass",
      "title": "The Ultimate Birthday Promise",
      "promise": "You can ask me to do anything, and I will do it for you",
      "subtext": "No questions asked, no expiry date. Simply tell Vinay what you want."
    }
  ],
  "themeColors": {
    "bg": "#FFF5E1",
    "primary": "#FF9A8B",
    "secondary": "#B5EAD7",
    "chocolate": "#3E2723",
    "white": "#FFFFFF",
    "muted": "#8C756B"
  },
  "content": {
    "heroSubtitle": "A little celebration for someone extraordinary — with love from Vinay.",
    "heroButton": "Make a Wish",
    "vetHeading": "Future Dr. Raga Sruthi in the Making",
    "memeHeading": "Chaos Unleashed",
    "memeButton": "DO NOT CLICK",
    "closingMessage": "Stay wonderful. Stay chaotic. Never stop being you."
  }
}
```

### How to Change the Recipient's Name
Change the `"name"` field in `src/data/config.json`:
```json
"name": "Sarah"
```
The website will automatically update the hero heading ("Happy Birthday, Sarah!"), the veterinary prescription document, and the navbar title.

### How to Replace the Meme Images
1. Place your images (JPEG, PNG, WebP, or SVG) in the `public/memes/` folder (e.g. `1.jpg`, `2.jpg`, etc.).
2. Update the `"memes"` array in `src/data/config.json` with the matching image paths:
```json
"memes": [
  "/memes/my-dog.jpg",
  "/memes/vacation-funny.jpg",
  "/memes/chocolate-cat.jpg"
]
```
The Meme Vault will dynamically adapt to the number of images configured.

### How to Customize the Birthday Message & Prescription
- Edit `"birthdayMessage"` for the editorial quote section.
- Edit `"prescriptionText"` and `"diagnosis"` to personalize the official Veterinary Rx pad.
- Edit `"content"` keys (`heroSubtitle`, `closingMessage`, etc.) to tailor the tone.

### How to Customize the Color Palette
Update `"themeColors"` in `src/data/config.json` and adjust the matching color tokens in `tailwind.config.js`:
- `cream`: Default background color (`#FFF5E1`)
- `primary-pink`: Main button accents & confetti (`#FF9A8B`)
- `mint-green`: Secondary badges & prescription accents (`#B5EAD7`)
- `chocolate`: Primary typography & borders (`#3E2723`)

---

## 📦 Building for Production

To create an optimized, minified production build:

```bash
npm run build
```

The output will be placed in the `dist/` directory. You can preview the production build locally with:

```bash
npm run preview
```

---

## 🌐 Deploying on Vercel

The repository is pre-configured for zero-config deployment on Vercel with SPA routing enabled via `vercel.json`.

### Option A: Via Vercel CLI
```bash
npm i -g vercel
vercel
```

### Option B: Via Vercel Web Dashboard
1. Push your repository to GitHub, GitLab, or Bitbucket.
2. Sign in to [Vercel](https://vercel.com/) and click **"Add New Project"**.
3. Import your repository.
4. Framework preset will automatically detect **Vite**.
5. Click **"Deploy"**.

SPA rewrites are handled by `vercel.json`:
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

---

## 📁 Project Structure

```text
BDay/
├── public/
│   └── memes/                 # Meme photos (1.jpg - 10.jpg)
├── src/
│   ├── components/
│   │   ├── BirthdayNote.jsx       # Section B: Editorial birthday quote
│   │   ├── ChocolateAnimation.jsx # Custom SVG chocolate drop animation
│   │   ├── Cursor.jsx             # Custom paw cursor & fading trail
│   │   ├── FinalSurprise.jsx      # Section E: Closing section & celebration replay
│   │   ├── FloatingAnimals.jsx    # Ambient background floating animals
│   │   ├── Hero.jsx               # Section A: 3D Spline cake, title animation & wish button
│   │   ├── MemeCard.jsx           # Polaroid draggable physics card
│   │   ├── MemeVault.jsx          # Section D: Controlled chaos meme engine
│   │   ├── Navbar.jsx             # Minimalist glass navigation
│   │   └── VetCard.jsx            # Section C: Official veterinary prescription
│   ├── data/
│   │   └── config.json            # Central single source of truth for all content
│   ├── hooks/
│   │   └── useReducedMotionPreference.js
│   ├── styles/
│   │   └── index.css              # Typography, custom scrollbars, paper textures
│   ├── App.jsx                    # SPA container, confetti & state
│   └── main.jsx                   # React root mount
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vercel.json
├── vite.config.js
├── SPEC.md
└── README.md
```

---

## 💝 License

Created as a personalized birthday gift experience. Feel free to adapt and share the love!
