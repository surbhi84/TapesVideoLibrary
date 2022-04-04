module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      spacing: {
        notFull: "-100%",
      },
      colors: {
        // Configure your color palette here
        "custom-green": "#66bb6a",
        yy: "var(--a)",
      },
    },
  },

  plugins: [],
  darkMode: "class",
};
