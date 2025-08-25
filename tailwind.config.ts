import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./client/**/*.{ts,tsx}"],
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
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        // UnClub catchy colors
        unclub: {
          blue: "hsl(var(--unclub-blue))",
          pink: "hsl(var(--unclub-pink))",
          red: "hsl(var(--unclub-red))",
          electric: "hsl(var(--unclub-electric))",
          hotpink: "hsl(var(--unclub-hot-pink))",
          coral: "hsl(var(--unclub-coral))",
        },
        // Party vibes colors
        party: {
          blue: "hsl(var(--party-blue))",
          pink: "hsl(var(--party-pink))",
          red: "hsl(var(--party-red))",
          neon: "hsl(var(--neon-blue))",
          electric: "hsl(var(--electric-pink))",
          vibrant: "hsl(var(--vibrant-red))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        "neon-pulse": {
          "0%, 100%": {
            boxShadow: "0 0 20px rgba(168, 85, 247, 0.3), 0 0 40px rgba(168, 85, 247, 0.1)",
          },
          "50%": {
            boxShadow: "0 0 30px rgba(168, 85, 247, 0.5), 0 0 60px rgba(168, 85, 247, 0.2), 0 0 80px rgba(236, 72, 153, 0.1)",
          },
        },
        "glow-rotate": {
          "0%": {
            background: "linear-gradient(45deg, #a855f7, #ec4899, #ef4444, #f97316)",
          },
          "25%": {
            background: "linear-gradient(135deg, #ec4899, #ef4444, #f97316, #a855f7)",
          },
          "50%": {
            background: "linear-gradient(225deg, #ef4444, #f97316, #a855f7, #ec4899)",
          },
          "75%": {
            background: "linear-gradient(315deg, #f97316, #a855f7, #ec4899, #ef4444)",
          },
          "100%": {
            background: "linear-gradient(45deg, #a855f7, #ec4899, #ef4444, #f97316)",
          },
        },
        "shimmer": {
          "0%": {
            transform: "translateX(-100%)",
          },
          "100%": {
            transform: "translateX(100%)",
          },
        },
        "float": {
          "0%, 100%": {
            transform: "translateY(0px)",
          },
          "50%": {
            transform: "translateY(-10px)",
          },
        },
        "float-delayed": {
          "0%, 100%": {
            transform: "translateY(0px)",
          },
          "50%": {
            transform: "translateY(-15px)",
          },
        },
        "sparkle": {
          "0%": {
            transform: "scale(0) rotate(0deg)",
            opacity: "0",
          },
          "50%": {
            transform: "scale(1) rotate(180deg)",
            opacity: "1",
          },
          "100%": {
            transform: "scale(0) rotate(360deg)",
            opacity: "0",
          },
        },
        "confetti-fall": {
          "0%": {
            transform: "translateY(-100vh) rotateZ(0deg)",
            opacity: "1",
          },
          "100%": {
            transform: "translateY(100vh) rotateZ(720deg)",
            opacity: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "neon-pulse": "neon-pulse 2s ease-in-out infinite",
        "glow-rotate": "glow-rotate 4s ease-in-out infinite",
        "shimmer": "shimmer 2s linear infinite",
        "float": "float 3s ease-in-out infinite",
        "float-delayed": "float-delayed 3s ease-in-out infinite 1s",
        "sparkle": "sparkle 1.5s ease-in-out infinite",
        "confetti-fall": "confetti-fall 3s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
