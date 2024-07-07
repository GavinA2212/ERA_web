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
      colors: {},
      fontFamily: {
        DMSans: ["DM Sans", "sans-serif"],
      },
      fontSize: {},
      spacing: {
        13: "3.25rem",
        34: "8.5rem",
        33: "8.25rem",
        500: "31.25rem",
      },
      screens: {},
      flex: {
        2: "2 2 0%",
        3: "3 3 0%",
      },
      borderRadius: {},
    },
  },
  plugins: [],
};
