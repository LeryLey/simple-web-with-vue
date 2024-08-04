/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "#77e3dd",
      secondary: "#e5e5e3",
      accent: "#ffefe2",
      black: "#000000",
      white: "#ffffff",
      gray: {
        DEFAULT: "#f8f9fa",
        100: "#f1f3f5",
        200: "#e9ecef",
        300: "#dee2e6",
        400: "#ced4da",
        500: "#adb5bd",
        600: "#868e96",
        700: "#545b62",
        800: "#343a40",
        900: "#212121",
      },
      // blue
      blue: {
        DEFAULT: "#007bff",
        100: "#d9e9f7",
        200: "#b8d9e9",
        300: "#9cc3d5",
        400: "#85c1dc",
        500: "#63b3d9",
        600: "#48a6d8",
        700: "#3085d6",
        800: "#2166b5",
        900: "#134394",
      },
      transparent: "transparent",
    },
    screens: {
      sm: "760px",
      // => @media (min-width: 640px) { ... }

      md: "1024px",
      // => @media (min-width: 1024px) { ... }

      lg: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      animation: {
        bounce: "bounce 3s infinite",
      },
      keyframes: {
        bounce: {
          "0%, 100%": {
            transform: "translateY(-5%)",
            "animation-timing-function": "cubic-bezier(0.8, 0, 1, 1)",
          },
          "50%": {
            transform: "translateY(0)",
            "animation-timing-function": "cubic-bezier(0, 0, 0.2, 1)",
          },
        },
      },
    },
  },
  plugins: [],
};
