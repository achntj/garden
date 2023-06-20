module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx, mdx}",
    "./components/**/*.{js,ts,jsx,tsx, mdx}",
  ],
  theme: {
    screens: {
      xs: "300px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    fontFamily: {
      title: ["Recife"],
      sans: [
        "Helvetica Neue",
        "Helvetica",
        "BlinkMacSystemFont",
        "Roboto",
        "Segoe UI",
        "system-ui",
        "sans-serif",
      ],
      body: [
        "Epilogue",
        "Helvetica Neue",
        "Helvetica",
        "BlinkMacSystemFont",
        "Roboto",
        "Segoe UI",
        "system-ui",
        "sans-serif",
      ],
    },
    extend: {
      fontSize: {
        base: "1.125em",
      },
      colors: {
        accent: "#5e03fc",
      },
      typography: {
        DEFAULT: {
          css: {
            "img + em": {
              display: "block",
              textAlign: "center",
              margin: "20px",
              color: "#666",
            },
            p: {
              marginTop: "1em",
              marginBottom: "1em",
              fontSize: "1.125em",
            },
            "h2, h3": {
              marginTop: "1em",
            },
          },
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    // ...
  ],
};
