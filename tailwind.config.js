/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cwsBlue: "#005f84",
        cwsGreen: "#4ABA2E",
      },
      fontFamily: {
        // sans: "Roboto Condensed",
      },
    },
  },
  plugins: [],
};
