module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // if using /src
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
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      fontFamily: {
        // Default sans using CSS variable (like Poppins via @next/font or Google Fonts)
        sans: ["var(--font-poppin)", "sans-serif"],

        // Custom fonts
        blackhawk: ['"Blackhawk"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
