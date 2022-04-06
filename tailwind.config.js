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
    },
  },

  plugins: [],
  darkMode: "class",
};
