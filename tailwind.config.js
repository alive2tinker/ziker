/** @type {import('tailwindcss').Config} */
export default {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily:{
        almarai: ['almarai'],
        almaraibold: ['almarai-bold'],
        almaraiextrabold: ['almarai-extrabold'],
        almarailight: ['almarai-light'],
      }
    },
  },
  plugins: [],
}

