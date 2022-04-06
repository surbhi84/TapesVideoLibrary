module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        "auto-fit": "repeat(auto-fit, 280px)",
      },
      spacing: {
        notFull: "-100%",
      },
      fontFamily: {
        Lato: ["Lato", "sans-serif"],
        Poppins: ["Poppins", "sans-serif"],
      },
    },
  },

  plugins: [],
  darkMode: "class",
};
