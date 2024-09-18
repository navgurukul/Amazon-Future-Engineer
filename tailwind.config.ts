import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "web-light-background-default": "#fff",
        "grey-300": "#dedede",
        "web-light-text-primary": "#2e2e2e",
        "incandescent-main": "#f55c38",
        "midnight-blue-main": "#29458c",
        "text-primary": "#2e2e2e",
        "grey-400": "#949494",
        "incandescent-light": "#fdded7",
        "orange-main": "#ffad33",
        tomato: "#f55c38",
        "incandescent-contrasttext": "#fff",
        whitesmoke: {
          "100": "#f0f0f0",
          "200": "rgba(240, 240, 240, 0.72)",
        },

        darkslategray: "#3a3a3a",
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
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
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
        border: "hsl(var(--border))",
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
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        "81xl": "100px",
      },
      fontFamily: {
        "web-typography-button": "'Noto Sans'",
        "webtypestyles-buttonlarge": "'Amazon Ember'",
        "webtypestyles-h6": "'Amazon Ember Display'",
        "webtypestyles-body2": "'Amazon Ember'",
        "webtypestyles-h5": "'Amazon Ember Display'",
        "webtypestyles-body1": "'Amazon Ember'",
        "webtypestyles-buttonsmall": "'Amazon Ember'",
        "web-body-1": "'Noto Sans'",
      },
    },
    fontSize: {
      lg: "18px",
      sm: "14px",
      "5xl": "24px",
      "13xl": "32px",
      inherit: "inherit",
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
