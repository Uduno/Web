/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      // si la largeur d'écran n'est pas précisée c'est pour les écrans inférieurs à 576px
      'sm': '576px',
      // => @media (min-width: 576px) { ... } à partir de 576px

      'md': '960px',
      // => @media (min-width: 960px) { ... } à partir de 960px

      'lg': '1440px',
      // => @media (min-width: 1440px) { ... } à partir de 1440px
    },
    extend: {
      fontFamily: {
        'antika': ['Inknut Antiqua', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

