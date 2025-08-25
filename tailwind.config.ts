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
        // Aesthetic color scheme
        aesthetic: {
          violet: "hsl(var(--electric-violet))",
          cyan: "hsl(var(--aesthetic-cyan))",
          electric: "hsl(var(--electric-blue))",
          magenta: "hsl(var(--soft-magenta))",
        },
        // UnClub refined colors
        unclub: {
          blue: "hsl(var(--unclub-blue))",
          pink: "hsl(var(--unclub-pink))",
          red: "hsl(var(--unclub-red))",
          electric: "hsl(var(--unclub-electric))",
          hotpink: "hsl(var(--unclub-hot-pink))",
          coral: "hsl(var(--unclub-coral))",
        },
        // Party vibes colors (refined)
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
        "aesthetic-pulse": {
          "0%, 100%": {
            boxShadow:
              "0 0 15px rgba(115, 115, 175, 0.25), 0 0 30px rgba(100, 200, 255, 0.15)",
          },
          "50%": {
            boxShadow:
              "0 0 25px rgba(115, 115, 175, 0.4), 0 0 45px rgba(100, 200, 255, 0.25), 0 0 65px rgba(150, 150, 200, 0.15)",
          },
        },
        "glow-rotate": {
          "0%": {
            background:
              "linear-gradient(45deg, hsl(270, 65%, 65%), hsl(180, 75%, 55%), hsl(220, 85%, 60%), hsl(300, 70%, 60%))",
          },
          "25%": {
            background:
              "linear-gradient(135deg, hsl(180, 75%, 55%), hsl(220, 85%, 60%), hsl(300, 70%, 60%), hsl(270, 65%, 65%))",
          },
          "50%": {
            background:
              "linear-gradient(225deg, hsl(220, 85%, 60%), hsl(300, 70%, 60%), hsl(270, 65%, 65%), hsl(180, 75%, 55%))",
          },
          "75%": {
            background:
              "linear-gradient(315deg, hsl(300, 70%, 60%), hsl(270, 65%, 65%), hsl(180, 75%, 55%), hsl(220, 85%, 60%))",
          },
          "100%": {
            background:
              "linear-gradient(45deg, hsl(270, 65%, 65%), hsl(180, 75%, 55%), hsl(220, 85%, 60%), hsl(300, 70%, 60%))",
          },
        },
        shimmer: {
          "0%": {
            transform: "translateX(-100%)",
          },
          "100%": {
            transform: "translateX(100%)",
          },
        },
        float: {
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
        sparkle: {
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
        "aesthetic-pulse": "aesthetic-pulse 2.5s ease-in-out infinite",
        "glow-rotate": "glow-rotate 4s ease-in-out infinite",
        shimmer: "shimmer 2s linear infinite",
        float: "float 3s ease-in-out infinite",
        "float-delayed": "float-delayed 3s ease-in-out infinite 1s",
        sparkle: "sparkle 1.5s ease-in-out infinite",
        "confetti-fall": "confetti-fall 3s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
