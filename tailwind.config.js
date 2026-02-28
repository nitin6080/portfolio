export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        cormorant: ["Cormorant Garamond", "serif"],
        playwrite: ["Playwrite Deutschland Grundschrift", "cursive"],
      },
      colors: {
        peacock: {
          50: "#e6fbff",
          100: "#c2f3ff",
          200: "#8ee9ff",
          300: "#54dbff",
          400: "#21c8ff",
          500: "#00b4d8",
          600: "#0096c7",
          700: "#0077b6",
          800: "#023e8a",
          900: "#03045e",
        },
        accent: {
          purple: "#7c3aed",
          indigo: "#4f46e5",
          neon: "#22d3ee",
        },
      },
    },
  },
  plugins: [],
};
