import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },

    container: {
      center: true,
      padding: "16px",
    },

    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },

        //
        bg: {
          blog: {
            DEFAULT: "#f8f8f8",
          },
        },
      },

      fontSize: {
        "heading-1": ["2.5rem", { lineHeight: "1.6", fontWeight: 500 }],
        "heading-2": ["2rem", { fontWeight: 500 }],
        "heading-3": ["1.75rem", { fontWeight: 500 }],
        "heading-4": ["1.5rem", { fontWeight: 500 }],
        "heading-5": ["1.25rem", { fontWeight: 500 }],
        "heading-6": ["1.15rem", { fontWeight: 500 }],
        "heading-7": ["0.7rem", { fontWeight: 500 }],
        "heading-xs": ["0.4rem", { fontWeight: 200 }],
        "description-1": [".8rem", { fontWeight: 200 }],
        "description-2": ["1.2rem", { fontWeight: 200 }],
        "big-size": ["4rem", { fontWeight: 600 }],
      },

      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },

      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },

      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      zIndex: {
        header: "100",
        modal: "9999",
        toast: "99999",
      },
    },
  },
  // eslint-disable-next-line global-require
  plugins: [require("tailwindcss-animate")],
  safelist: ["shadow-sm", "mt-4"],
};
export default config;
