/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    borderWidth: {
      default: "1px",
      0: "0",
      1: "1px",
      2: "2px",
      2.5: "2.5px",
      3: "3px",
      4: "4px",
      6: "6px",
      8: "8px",
    },
    extend: {
      colors: {
        grayT50: "rgba(255,255,255,.5)",
        grayT70: "rgba(255,255,255,.7)",
        grayT90: "rgba(255,255,255,.9)",
        darkbg: "#141416",
      },
      fontFamily: {
        Merriweather: ["Merriweather", "sans-serif"],
      },
      fontSize: {},
      spacing: {
        13: "3.25rem",
        34: "8.5rem",
        33: "8.25rem",
        100: "25rem",
        500: "31.25rem",
      },
      screens: {},
      flex: {
        2: "2 2 0%",
        3: "3 3 0%",
      },
      borderRadius: {},
      animation: {
        dot: "dot 1.4s infinite ease-in-out both",
        fadeIn: "fadeIn .5s ease-out forwards",
        containerFadeIn: "containerFadeIn 1s ease-in-out forwards",
      },
    },
  },
  plugins: [
    // Custom plugin for animation delays
    function ({ addUtilities }) {
      const newUtilities = {
        ".animation-delay-200": {
          animationDelay: "0.2s",
        },
        ".animation-delay-400": {
          animationDelay: "0.4s",
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
