/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  themes: [
    {
      mytheme: {
        primary: "#08d6a9",

        secondary: "#e8a46d",

        accent: "#42a9b2",

        neutral: "#262028",

        "base-100": "#2A3060",

        info: "#6BB6D6",

        success: "#55EC9E",

        warning: "#9D7007",

        error: "#EF6B67",
      },
    },
  ],
  plugins: [require("daisyui")],
};
