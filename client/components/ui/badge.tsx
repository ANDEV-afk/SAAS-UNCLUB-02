import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
        // Neon category variants with glow effects
        "neon-music": [
          "border-transparent bg-gradient-to-r from-purple-500 to-pink-500 text-white",
          "shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50",
          "hover:scale-105 hover:from-purple-600 hover:to-pink-600",
          "animate-neon-pulse"
        ],
        "neon-tech": [
          "border-transparent bg-gradient-to-r from-blue-500 to-cyan-500 text-white",
          "shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50",
          "hover:scale-105 hover:from-blue-600 hover:to-cyan-600",
          "animate-neon-pulse"
        ],
        "neon-food": [
          "border-transparent bg-gradient-to-r from-orange-500 to-red-500 text-white",
          "shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50",
          "hover:scale-105 hover:from-orange-600 hover:to-red-600",
          "animate-neon-pulse"
        ],
        "neon-art": [
          "border-transparent bg-gradient-to-r from-pink-500 to-rose-500 text-white",
          "shadow-lg shadow-pink-500/30 hover:shadow-pink-500/50",
          "hover:scale-105 hover:from-pink-600 hover:to-rose-600",
          "animate-neon-pulse"
        ],
        "neon-business": [
          "border-transparent bg-gradient-to-r from-gray-600 to-gray-800 text-white",
          "shadow-lg shadow-gray-600/30 hover:shadow-gray-600/50",
          "hover:scale-105 hover:from-gray-700 hover:to-gray-900",
          "animate-neon-pulse"
        ],
        "neon-wellness": [
          "border-transparent bg-gradient-to-r from-green-500 to-teal-500 text-white",
          "shadow-lg shadow-green-500/30 hover:shadow-green-500/50",
          "hover:scale-105 hover:from-green-600 hover:to-teal-600",
          "animate-neon-pulse"
        ],
        "neon-party": [
          "border-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white",
          "shadow-lg shadow-purple-500/30 hover:shadow-pink-500/50",
          "hover:scale-105 hover:from-purple-600 hover:via-pink-600 hover:to-red-600",
          "animate-glow-rotate"
        ],
        "glass": [
          "border border-white/20 bg-white/10 backdrop-blur-md text-white",
          "hover:bg-white/20 hover:border-white/30",
          "shadow-lg shadow-black/10 hover:shadow-black/20"
        ],
        "glass-dark": [
          "border border-white/10 bg-black/20 backdrop-blur-md text-white",
          "hover:bg-black/30 hover:border-white/20",
          "shadow-lg shadow-black/20 hover:shadow-black/30"
        ]
      },
      size: {
        sm: "px-2 py-0.5 text-xs",
        default: "px-2.5 py-0.5 text-xs",
        lg: "px-3 py-1 text-sm",
        xl: "px-4 py-2 text-base font-bold"
      },
      glow: {
        none: "",
        subtle: "hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.4)]",
        medium: "hover:drop-shadow-[0_0_12px_rgba(168,85,247,0.5)]",
        strong: "hover:drop-shadow-[0_0_16px_rgba(168,85,247,0.6)]"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      glow: "none"
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
