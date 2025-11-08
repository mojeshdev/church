/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
       fontFamily: {
           heading: ['"Anton"', "sans-serif"],
           body: ['"Open Sans"', "sans-serif"],
  },
    },
  },
  plugins: [],
};
