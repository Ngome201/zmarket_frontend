/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        current: "currentColor",
        transparent: "transparent",
        white: "#FFFFFF",
        black: "#090E34",
        dark: "#1D2144",
        secondary: "#4A6CF7",
        yellow: "#FBB040",
        orange:"#FF963B",
        "body-color": "#959CB1",
      },
    },
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      xxl: "1400px",
      "3xl": "1600px",
      "4xl": "1800px",
    },
  },

  plugins: [],
};
