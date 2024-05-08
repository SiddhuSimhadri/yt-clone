/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js, jxs, ts, tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/line-clamp")],
}
