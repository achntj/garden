module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx, mdx}",
    "./components/**/*.{js,ts,jsx,tsx, mdx}",
  ],
  theme: {
    fontFamily: {
      sans: [
        "Helvetica Neue",
        "Helvetica",
        "BlinkMacSystemFont",
        "Segoe UI",
        "Roboto",
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
            a: {
              textDecoration: "none",
            },
            p: {
              marginTop: "1em",
              marginBottom: "1em",
              fontSize: "1.125em",
            },
            h2: {
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
