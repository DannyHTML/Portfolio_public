/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "background-image": "url('/images/background-image.jpg')",
      },
      colors: {
        primary: "#FCA311",
        secondary: "#c4c3c3",
        primaryOutline: "rgba(252, 163, 72, 0.5)",
      },
    },
    fontFamily: {
      "main-font": ["'Poppins', sans-serif"],
    },
  },
  plugins: [],
};
