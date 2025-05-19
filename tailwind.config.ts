import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#9d4edd", // Purple color from the logo
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#18181b", // Dark zinc color
          foreground: "#ffffff",
        },
        destructive: {
          DEFAULT: "hsl(0, 84%, 60%)",
          foreground: "#ffffff",
        },
        muted: {
          DEFAULT: "#27272a", // Zinc-800
          foreground: "#a1a1aa", // Zinc-400
        },
        accent: {
          DEFAULT: "rgba(157, 78, 221, 0.1)", // Purple with opacity
          foreground: "#9d4edd",
        },
        popover: {
          DEFAULT: "#18181b", // Zinc-900
          foreground: "#ffffff",
        },
        card: {
          DEFAULT: "#18181b", // Zinc-900
          foreground: "#ffffff",
        },
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
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
