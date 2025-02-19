/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        'float-1': {
          '0%': { transform: 'translate(0, 0)' },
          '25%': { transform: 'translate(40px, -30px)' },
          '50%': { transform: 'translate(60px, 20px)' },
          '75%': { transform: 'translate(20px, 40px)' },
          '100%': { transform: 'translate(0, 0)' },
        },
        'float-2': {
          '0%': { transform: 'translate(0, 0)' },
          '33%': { transform: 'translate(50px, 40px)' },
          '66%': { transform: 'translate(20px, -40px)' },
          '100%': { transform: 'translate(0, 0)' },
        },
        'float-3': {
          '0%': { transform: 'translate(0, 0)' },
          '25%': { transform: 'translate(-30px, 40px)' },
          '50%': { transform: 'translate(40px, 20px)' },
          '75%': { transform: 'translate(30px, -20px)' },
          '100%': { transform: 'translate(0, 0)' },
        },
      },
      animation: {
        'float-slow-1': 'float-1 15s ease-in-out infinite',
        'float-slow-2': 'float-2 18s ease-in-out infinite',
        'float-slow-3': 'float-3 20s ease-in-out infinite',
      },
    },
  },
  plugins: [],
} 