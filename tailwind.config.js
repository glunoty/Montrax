/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Neue Montreal"', "sans-serif"],
        neuemedium: ['"Neue Montreal medium"', "sans-serif"],
      },
      colors: {
        montraxblack: "#111827",
      },
    },
  },
  plugins: [],
};
