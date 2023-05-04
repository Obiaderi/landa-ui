/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite-react/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        bgwhite: "#FFFFFF",
        bgGray: "#F6F9FD",
        bgGrayBorder: "#E6E6E6",
        btnBlue: "#004CCC",
        btnSkyBlue: "#DDE7F8",
        textSlate: "#222222",
        textGray: "#959595",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
