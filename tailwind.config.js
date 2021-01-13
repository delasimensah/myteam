module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        lightCoral: "#f67e7e",
        rapBlue: "#79c8c7",
        polBlue: "#2c6269",
        midGreen: "#014e56",
        djGreen: "#004047",
        ssGreen: "#012f34",
        darkGreen: "#002529",
      },
      fontSize: {
        15: "15px",
        18: "18px",
        33: "33px",
        48: "48px",
        64: "64px",
        100: "100px",
      },
      spacing: {
        "76%": "76%",
        "88%": "88%",
      },
    },
  },
  variants: {
    extend: {
      borderWidth: ["hover"],
      display: ["group-hover"],
    },
  },
  plugins: [],
};
