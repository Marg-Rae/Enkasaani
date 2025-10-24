/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        african: {
          gold: '#D4AF37',
          orange: '#FF8C00',
          red: '#DC143C',
          green: '#228B22',
          brown: '#8B4513',
          black: '#000000',
        },
        primary: {
          50: '#fef7f0',
          100: '#feeee0',
          200: '#fdd9c0',
          300: '#fab896',
          400: '#f6906a',
          500: '#f2704a',
          600: '#e3563f',
          700: '#bd4235',
          800: '#973631',
          900: '#7b2f2a',
        }
      },
      fontFamily: {
        'african': ['Nunito', 'sans-serif'],
      },
    },
  },
  plugins: [],
}