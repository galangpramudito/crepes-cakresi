/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Palet hanya 3 keluarga warna: cream (latar), choco (teks/gelap), caramel (aksen)
      colors: {
        // Latar krem hangat
        cream: {
          50: '#FFFCF7',
          100: '#FFF7EC',
          200: '#FCEBD3',
          300: '#F6DCB8',
        },
        // Teks & latar gelap (cokelat)
        choco: {
          50: '#F8F2ED',
          100: '#EFE3D9',
          200: '#DDC8B8',
          300: '#B89A86',
          500: '#7A5C4A',
          600: '#5E4334',
          700: '#47301F',
          800: '#33221A',
          900: '#241812',
          950: '#170F0B',
        },
        // Aksen (karamel / kulit crepes panggang)
        // 600 = warna tombol (teks putih kontras AA). 300 = aksen di latar cokelat.
        caramel: {
          50: '#FFF4E8',
          100: '#FFE6CC',
          200: '#FDCB9A',
          300: '#F9A95E',
          400: '#F08A33',
          500: '#E2711B',
          600: '#BB5410',
          700: '#9A4410',
          800: '#7A3612',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Bricolage Grotesque"', '"Plus Jakarta Sans"', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 1px 2px rgba(36, 24, 18, 0.04), 0 8px 24px -8px rgba(36, 24, 18, 0.12)',
        lift: '0 2px 4px rgba(36, 24, 18, 0.05), 0 24px 48px -16px rgba(36, 24, 18, 0.28)',
      },
    },
  },
  plugins: [],
}
