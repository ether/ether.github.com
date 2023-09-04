/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
      "./src/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#44b492',
        'secondary': '#f0f0f0',
        'secondary-dark':'rgba(15,17,17,1)'
      }
    },
  },
  plugins: [],
}

