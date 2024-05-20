/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        colorful:
          "0 4px 6px -1px rgba(255, 0, 0, 0.5), 0 2px 4px -1px rgba(0, 255, 0, 0.5), 0 1px 3px -1px rgba(0, 0, 255, 0.5)",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
