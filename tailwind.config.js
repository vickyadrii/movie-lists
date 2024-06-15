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
    },
  },
  plugins: [],
};
