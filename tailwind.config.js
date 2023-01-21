/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "src/pages/**/*.{js,ts,jsx,tsx}",
    "src/components/**/*.{js,ts,jsx,tsx}",
    "src/common/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        firstScreen: "365px",
        secondScreen: "525px",
        thirdScreen: "768px",
        fourthScreen: "1024px",
        fifthScreen: "1280px",
      },
      boxShadow: {
        banner: "0px 4.03823px 4.03823px rgba(0, 0, 0, 0.25)",
      },
      fontFamily: {
        sans: ["Poppins"],
        salsa: ["Salsa"],
        caveat: ["Caveat"],
      },
      container: {
        center: true,
      },
    },
    plugins: [require("@tailwindcss/line-clamp")],
  },
};
