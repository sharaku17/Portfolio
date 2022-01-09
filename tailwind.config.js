module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  plugins: [require("@tailwindcss/aspect-ratio")],
  theme: {
    extend: {
      zIndex: {
        "-1": "-1",
      },
      colors: {
        body: "#1B1D25",
        gradient_blue: "#4C98DE",
        gradient_indigo: "#8A1FDE",
      },
      fontFamily: {
        poppins: ["'Poppins'", "sans-serif"],
      },
      width: {
        "1/7": "14.2857143%",
        "2/7": "28.5714286%",
        "3/7": "42.8571429%",
        "4/7": "57.1428571%",
        "5/7": "71.4285714%",
        "6/7": "85.7142857%",
        120: "40rem",
        110: "30rem",
        115: "35rem",
        140: "60rem",
      },
      height: {
        inherit: "inherit",
        110: "30rem",
        115: "35rem",
      },
    },
  },
  variants: {
    extend: {
      rotate: ["group-hover"],
      translate: ["group-hover"],
      scale: ["group-hover"],
    },
  },
};
