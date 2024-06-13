/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      screens: {
        DEFAULT: '100%',
        sm: '640px',
        md: '768px',
      },
    },
    extend: {},
  },
  plugins: [],
}

