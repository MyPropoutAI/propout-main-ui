/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/Pages/dApp/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "header-gradient":
          "linear-gradient(225deg, #310052 0%, #41245bcf 50%, #310052 100%)",
      },
    },
  },

  plugins: [],
};
