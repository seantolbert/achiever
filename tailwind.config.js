module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#787878",
      },
      boxShadow: {
        hoverRoseShadow:
          "15px 15px 28px 0px rgba(241, 64, 92, 0.5), inset -8px -8px 16px 0px rgba(241, 64, 92, 0.6)",
        neu: "5px 5px 10px #494949, -5px -5px 10px #a7a7a7",
        pressedNeu:
          "inset 5px 5px 10px #494949, inset -5px -5px 10px #a7a7a7",
      },
    },
  },
  plugins: [],
};
