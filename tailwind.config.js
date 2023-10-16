module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      black: "#000000",
      grey: "#1d1d1d",
      lightGrey: "#52575A",
      white: "#f4f4f4",
      orange: "#ed6f07",
    },
    screens: {
      md: "840px",
    },
    extend: {
      fontFamily: {
        custom: ["Blackhawk", "sans"],
      },
    },
  },
  plugins: [],
};
