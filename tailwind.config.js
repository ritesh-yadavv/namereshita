/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        scrolling: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        spinslow: "spin 10s linear infinite",
        "loop-scroll": "scrolling 10s linear infinite",
      },
      fontFamily: {
        PlusJakartaSans: ["Plus Jakarta Sans", "sans-serif"],
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".text-gradient": {
          background: "linear-gradient(to right, #14509F, #045F62)",
          "-webkit-background-clip": "text",
          "-webkit-text-fill-color": "transparent",
        },
      });
    },
    plugin(({ addUtilities }) => {
      addUtilities({
        ".paused": { animationPlayState: "paused" },
      });
    }),
   
  ],
};
