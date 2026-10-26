/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./lib/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#104789",
          "blue-hover": "#0c376d",
          "blue-light": "#eaf2fb",
          green: "#08713E",
          "green-hover": "#065931",
          "green-light": "#edf7f1",
          yellow: "#FFD600",
          "yellow-hover": "#e6c100",
          "yellow-light": "#fffde6",
          dark: "#172033",
          muted: "#667085",
          border: "#E7ECE8",
          bg: "#FFFFFF",
          "bg-subtle": "#F8FAF7",
        },
      },
      fontFamily: {
        sans: [
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "'Segoe UI'",
          "Roboto",
          "Oxygen",
          "Ubuntu",
          "Cantarell",
          "'Open Sans'",
          "'Helvetica Neue'",
          "sans-serif",
        ],
      },
      boxShadow: {
        card: "0 4px 20px -2px rgba(16, 71, 137, 0.06), 0 2px 6px -1px rgba(0, 0, 0, 0.04)",
        "card-hover": "0 12px 30px -4px rgba(16, 71, 137, 0.12), 0 4px 12px -2px rgba(0, 0, 0, 0.06)",
        badge: "0 2px 8px rgba(8, 113, 62, 0.15)",
      },
    },
  },
  plugins: [],
};
