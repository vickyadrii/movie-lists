/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-blue": "#0EA5E9",
      },
      fontFamily: {
        roboto: ['"Roboto", sans-serif'],
        inter: ['"Inter", sans-serif'],
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        scaleUp: {
          "0%": { transform: "scale(0.95)" },
          "100%": { transform: "scale(1)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.3s ease-out",
        scaleUp: "scaleUp 0.3s ease-out",
      },
    },
  },
  plugins: [],
};
