/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FFF5E1",
        "primary-pink": "#FF9A8B",
        "mint-green": "#B5EAD7",
        "chocolate": "#3E2723",
        "muted-brown": "#8C756B",
        "soft-white": "#FFFFFF",
        "warm-gold": "#F6D186",
      },
      fontFamily: {
        fredoka: ['Fredoka', 'sans-serif', 'cursive'],
        nunito: ['Nunito', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 8px 30px rgba(62, 39, 35, 0.08)',
        'polaroid': '0 10px 25px -5px rgba(62, 39, 35, 0.15), 0 8px 10px -6px rgba(62, 39, 35, 0.1)',
        'prescription': '0 15px 35px -5px rgba(62, 39, 35, 0.12), 0 0 0 1px rgba(62, 39, 35, 0.05)',
      },
    },
  },
  plugins: [],
}

