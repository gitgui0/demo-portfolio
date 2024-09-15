/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"], // Replace 'Inter' with your preferred font
      },
      keyframes: {
        "slide-up": {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "slide-down": {
          "0%": { transform: "translateY(-20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(0)' },
          '25%, 75%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      },
      animation: {
        "slide-up": "slide-up 0.5s ease-out",
        "slide-up-fast": "slide-up 0.25s ease-out",
        "slide-down": "slide-down 0.25s ease-out",
        "wiggle": 'wiggle 1s ease-in-out forwards',
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
