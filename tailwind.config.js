/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        summit: {
          orange: '#FF8C42',
          black: '#1B1B1B',
          beige: '#F5F0E6',
          yellow: '#F4C542',
          green: '#2C5E3A',
          blue: '#87CEEB'
        }
      },
      fontFamily: {
        mono: ['Courier New', 'monospace']
      }
    },
  },
  plugins: [],
};