/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        amber: {
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
          950: '#451a03',
        },
        warmcream: {
          50: '#FFFDF9',
          100: '#FFF9EE',
          200: '#FFF2DB',
          300: '#FFE6BF',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Outfit', 'Plus Jakarta Sans', 'sans-serif'],
      },
      boxShadow: {
        'warm': '0 4px 20px -2px rgba(180, 83, 9, 0.08), 0 2px 6px -1px rgba(180, 83, 9, 0.04)',
        'warm-hover': '0 12px 30px -4px rgba(180, 83, 9, 0.16), 0 4px 10px -2px rgba(180, 83, 9, 0.08)',
      }
    },
  },
  plugins: [],
}
