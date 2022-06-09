module.exports = {
  darkMode: "class",
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
      header: [
        "Source Sans Pro",
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
      animation: {
        "gradient-x": "gradient-x 16s ease infinite",
        "gradient-y": "gradient-y 8s ease infinite",
        "gradient-xy": "gradient-xy 8s ease infinite",
      },
      keyframes: {
        "gradient-y": {
          "0%, 100%": {
            "background-size": "800% 800%",
            "background-position": "center top",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "center center",
          },
        },
        "gradient-x": {
          "0%, 100%": {
            "background-size": "800% 800%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "800% 800%",
            "background-position": "right center",
          },
        },
        "gradient-xy": {
          "0%, 100%": {
            "background-size": "400% 400%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
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
