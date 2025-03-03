/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [
    require("@spartan-ng/brain/hlm-tailwind-preset"),
    require("@angular/cdk/overlay-prebuilt.css"),
  ],
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
