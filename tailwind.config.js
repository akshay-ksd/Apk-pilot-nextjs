/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: "PoppinsMedium",
        primaryBold: "PoppinsBold"
      },
    },
    colors: {
      primaryText:"#251427",
      grayText : '#A6A6A6',
      black: "#111321",
      white: "#fff",
      primaryM: "#71357B",
      primary:"#251427",
      secondary: "#95D0D4",
      tertiary: "#FE7E51",
      secondaryBackground :"#FEF5F0",
      green:"#228B22",
      red:"#e11d48",
      lightGray:"#f9f9f9",
      lightBlue:"#ADD8E6"
    },
  },
  plugins: [],
}

