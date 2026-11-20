/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
        warm: {
          50: '#fffbf5',
          100: '#fff5e6',
          900: '#26160c',
          950: '#170c06',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Outfit', 'Plus Jakarta Sans', 'sans-serif'],
      },
      boxShadow: {
        'crisp': '0 10px 25px -5px rgba(217, 119, 6, 0.15), 0 8px 10px -6px rgba(217, 119, 6, 0.1)',
        'soft-glow': '0 0 30px rgba(245, 158, 11, 0.25)',
      }
    },
  },
  plugins: [],
}
