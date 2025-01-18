/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}","./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2196F3",
        buttonActive: "#1E88E5",
        heartHover: "#F24E1E",
        heartActive: "#FF3A00",
      }
    },
  },
  plugins: [],
}

