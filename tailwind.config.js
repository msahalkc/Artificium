const {nextui} = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",

  ],  theme: {
    extend: {
      colors: {
        'stem-green': '#B6F09C',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(117.58deg, rgba(215, 237, 237, 0.16) -47.79%, rgba(204, 235, 235, 0) 100%)',
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}

