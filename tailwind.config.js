/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        neu: "5px 5px 20px rgba(255, 255, 255, 0.5)",
      },
      keyframes: {
        twitch: {
          "0%, 100%": { transform: "rotate(57deg)" },
          "50%": { transform: "rotate(63deg)" },
        },
      },
    },
  },
  plugins: [],
};
