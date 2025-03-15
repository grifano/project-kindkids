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
          lightPurple: "#A88BCB1a",
          yellow: "#F5C278",
          pink: "#F3A9B1",
          deepBlue: "#365A75",
          beige: "#F7EAD7",
          lightBlue: "#94C6E4",
          black: "#241E2C",
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        border: "hsl(var(--border))",
        system: {
          success: "#7AC74F",
          error: "#FF4500",
        },
        action: {
          whiteBtnHover: "#94C6E41a",
        },
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        small: "8px",
        regular: "16px",
        medium: "20px",
        large: "24px",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        xxlarge: "0 32px 64px -12px rgba(54, 90, 117, 0.14)",
        medium: "0 16px 32px -8px rgba(54, 90, 117, 0.10)",
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
  plugins: [require("tailwindcss-animate")],
};

export default config;
