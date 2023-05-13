/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        "light-white": "#f2f2f2",
        "lighter-white": "rgba(255, 255, 255, 0.66)",
        "lightest-white": "#efefef",
        "light-black": "#0c0c0c",
        "light-green": "#00ffb0",
      },
    },
  },
  plugins: [],
};
