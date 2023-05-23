/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        peavault: {
          primary: "#8FFF00",
        },
      },
      fontFamily: {
        "oatmeal-sans": [
          "var(--font-oatmeal-sans)",
          "Oatmeal Sans",
          "sans-serif",
        ],
        "circular-std": ["var(--font-circular-std)"],
        // sans: ["var(--font-oatmeal-sans)"],
      },
    },
  },
  plugins: [],
};
