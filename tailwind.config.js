/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      width: {
        cell: "60px",
      },
      minWidth: {
        cell: "60px",
      },
      maxWidth: {
        screen: "100vw",
      },
      minHeight: {
        screen: "100vh",
      },
      boxShadow: {
        "chart-bottom": "inset #9f4506 0px -90px 50px -80px",
      },
    },
  },
  plugins: [require("prettier-plugin-tailwindcss")],
};
