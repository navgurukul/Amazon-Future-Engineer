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

        "grey-200": "#F7F7F7",
        "grey-300": "#dedede",
        "grey-400": "#949494",

        "web-light-text-primary": "#2e2e2e",

        "midnight-blue-main": "#29458c",
        "midnight-blue-dark": "#192954",
        "midnight-blue-light": "#D4DAE8",
        "midnight-blue-contrasttext": "#FFF",
        "midnight-blue-gradient":
          "linear-gradient(90deg, rgba(41, 69, 140, 0.72) 0%, #192954 100%)",

        "incandescent-main": "#F55C38",
        "incandescent-dark": "#933722",
        "incandescent-light": "#FDDED7",
        "incandescent-contrasttext": "#FFF",
        "incandescent-gradient":
          "linear-gradient(90deg, rgba(245, 92, 56, 0.72) 0%, #933722 100%)",

        "pink-main": "#F091B2",
        "pink-dark": "#FCE9F0",
        "pink-light": "#FDDED7",
        "pink-contrasttext": "#FFF",

        "typhoon-main": "#049796",
        "typhoon-dark": "#025B5A",
        "typhoon-light": "#CDEAEA",
        "typhoon-contrasttext": "#FFF",

        "orange-main": "#FFAD33",
        "orange-dark": "#99681F",
        "orange-light": "#FFEFD6",
        "orange-contrasttext": "#FFF",

        "twilight-main": "#FFF2F2",
        "twilight-dark": "#999191",
        "twilight-light": "#FFF7F7",
        "twilight-contrastText": "#FFF",

        "error-main": "#F44336",
        "error-dark": "#C3362B",
        "error-light": "#FFE5E3",
        "error-contrastText": "#FFF",

        "success-main": "#48A145",
        "success-dark": "#3A8137",
        "success-light": "#E9F5E9",
        "success-contrastText": "#FFF",

        "text-primary": "#2e2e2e",
        "text-secondary": "#2e2e2e",
        "text-disabled": "#2e2e2e",
        "text-hint": "#2e2e2e",
        // "incandescent-light": "#fdded7",
        // "orange-main": "#ffad33",
        tomato: "#f55c38",
        // "incandescent-contrasttext": "#fff",
        whitesmoke: {
          "100": "#f0f0f0",
          "200": "rgba(240, 240, 240, 0.72)",
        },

        darkslategray: "#3a3a3a",
        // "error-main": "#f44336",
        // "text-secondary": "#6d6d6d",
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
      fill: {
        paper: "var(--bg-surface-paper, #FFF)",
        default: "var(--bg-surface-default, #FFF)",
        elevated8dp: "var(--bg-surface-elevated-8, #FFF)",
      },
      stroke: {
        paper: "var(--Text-Primary, #3A3A3A)",
        default: "var(--Text-Primary, #3A3A3A)",
        elevated8dp: "var(--Text-Primary, #3A3A3A)",
      },
      strokeWidth: {
        "1": "1px",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        "81xl": "100px",
      },
      fontFamily: {
        "amazon-ember": [
          "Amazon Ember",
          "Amazon Ember Display",
          "sans-serif",
        ],
        // "webtypestyles-buttonlarge": "'Amazon Ember'",
        // "webtypestyles-h6": "'Amazon Ember Display'",
        // "webtypestyles-body2": "'Amazon Ember'",
        // "webtypestyles-h5": "'Amazon Ember Display'",
        // "webtypestyles-body1": "'Amazon Ember'",
        // "webtypestyles-buttonsmall": "'Amazon Ember'",
        // use these fonts
        "heading1-bold": ["Amazon Ember Display", "sans-serif"],
        "heading2-bold": ["Amazon Ember Display", "sans-serif"],
        "heading3-bold": ["Amazon Ember Display", "sans-serif"],
        "heading4-bold": ["Amazon Ember Display", "sans-serif"],
        "heading5-bold": ["Amazon Ember Display", "sans-serif"],
        "heading6-bold": ["Amazon Ember Display", "sans-serif"],
        "subTitle1-bold": ["Amazon Ember", "sans-serif"],
        "subTitle2-bold": ["Amazon Ember", "sans-serif"],
        "body1-regular": ["Amazon Ember", "sans-serif"],
        "body2-regular": ["Amazon Ember", "sans-serif"],
        "button1-bold": ["Amazon Ember", "sans-serif"],
        "button2-bold": ["Amazon Ember", "sans-serif"],
      },
      screens: {
        xs: "320px",
        sm: "375px",
      },
    },
    fontSize: {
      lg: "18px",
      sm: "14px",
      "5xl": "24px",
      "13xl": "32px",
      inherit: "inherit",
      // Sizes corresponding to each style metioned above
      heading1: ["96px", { fontWeight: "800" },],
      heading2: ["72px", { fontWeight: "800" }],
      heading3: ["56px", { fontWeight: "800" }],
      heading4: ["42px", { fontWeight: "800" }],
      heading5: ["32px", { fontWeight: "800" }],
      heading6: ["24px", { fontWeight: "800" }],
      subTitle1: ["18px", { fontWeight: "800" }],
      subTitle2: ["14px", { fontWeight: "800" }],
      body1: ["18px", { fontWeight: "500" }],
      body2: ["14px", { fontWeight: "500" }],
      button1: ["18px", { fontWeight: "500" }],
      button2: ["14px", { fontWeight: "500" }],
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;