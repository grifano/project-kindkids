import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          purple: "#A88BCB",
          lightPurple: "#EEE8F5",
          yellow: "#F5C278",
          pink: "#F3A9B1",
          deepBlue: "#365A75",
          beige: "#F7EAD7",
          lightBlue: "#94C6E4",
          black: "#241E2C",
        },
        border: {
          purple: "#A88BCB",
          beige: "#F7EAD7",
          lightBlue: "#94C6E4",
        },
        system: {
          success: "#7AC74F",
          error: "#FF4500",
        },
        action: {
          headerHover: "#4A6B83",
        },
      },
      borderRadius: {
        small: "8px",
        regular: "16px",
        medium: "20px",
        large: "24px",
      },
      boxShadow: {
        xxlarge: "0 32px 64px -12px rgba(54, 90, 117, 0.14)",
      },
      fontFamily: {
        lora: ["var(--font-lora-serif)"],
        quicksandSans: ["var(--font-quicksand-sans)"],
      },
    },
  },
  // plugins: [
  //   require("tailwindcss-animate"),
  //   require("@tailwindcss/typography"),
  // ],
};

export default config;
