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
      backgroundImage: {
        cities: "url('/assets/images/cities.jpg')",
        beach: "url('/assets/images/beach.jpg')",
        forest: "url('/assets/images/forest.jpg')",
        island: "url('/assets/images/island.jpg')",
        landscape: "url('/assets/images/landscape.jpg')",
        mountains: "url('/assets/images/mountains.jpg')",
        skyscrapers: "url('/assets/images/skyscrapers.jpg')",
        wildlife: "url('/assets/images/wildlife.jpg')",
        nature: "url('/assets/images/nature.jpg')",
      },
    },
  },
};
