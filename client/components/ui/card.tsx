import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const cardVariants = cva(
  "relative overflow-hidden text-card-foreground transition-all duration-300 ease-out",
  {
    variants: {
      variant: {
        default: "rounded-lg border bg-card shadow-sm",
        glassmorphism: [
          "rounded-2xl backdrop-blur-xl bg-white/10 dark:bg-white/5",
          "border border-white/20 dark:border-white/10",
          "shadow-2xl shadow-black/10 dark:shadow-black/20",
          "hover:bg-white/15 dark:hover:bg-white/10",
          "hover:border-white/30 dark:hover:border-white/20",
          "hover:shadow-3xl hover:shadow-black/20 dark:hover:shadow-black/30",
          "hover:scale-105 hover:-translate-y-2",
          "group",
        ],
        neon: [
          "rounded-2xl backdrop-blur-xl bg-white/5 dark:bg-black/20",
          "border-2 border-transparent",
          "bg-gradient-to-br from-white/10 via-transparent to-white/5",
          "shadow-2xl shadow-purple-500/10 dark:shadow-purple-400/20",
          "hover:shadow-3xl hover:shadow-purple-500/20 dark:hover:shadow-purple-400/30",
          "hover:scale-105 hover:-translate-y-2",
          "before:absolute before:inset-0 before:p-[2px] before:rounded-2xl",
          "before:bg-gradient-to-r before:from-purple-500 before:via-pink-500 before:to-red-500",
          "before:mask-composite before:[mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)]",
          "before:[mask-composite:exclude]",
          "before:animate-pulse",
          "group",
        ],
        glow: [
          "rounded-2xl backdrop-blur-xl bg-gradient-to-br from-white/20 via-white/10 to-transparent",
          "dark:from-white/10 dark:via-white/5 dark:to-transparent",
          "border border-white/30 dark:border-white/20",
          "shadow-2xl shadow-cyan-500/20 dark:shadow-cyan-400/30",
          "hover:shadow-3xl hover:shadow-cyan-500/30 dark:hover:shadow-cyan-400/40",
          "hover:scale-105 hover:-translate-y-2",
          "hover:bg-gradient-to-br hover:from-white/30 hover:via-white/15 hover:to-white/5",
          "dark:hover:from-white/15 dark:hover:via-white/8 dark:hover:to-white/3",
          "group",
        ],
      },
      glow: {
        none: "",
        subtle: "hover:drop-shadow-[0_0_15px_rgba(168,85,247,0.3)]",
        medium:
          "hover:drop-shadow-[0_0_25px_rgba(168,85,247,0.4)] hover:drop-shadow-[0_0_50px_rgba(168,85,247,0.2)]",
        strong:
          "hover:drop-shadow-[0_0_35px_rgba(168,85,247,0.5)] hover:drop-shadow-[0_0_70px_rgba(168,85,247,0.3)]",
      },
    },
    defaultVariants: {
      variant: "default",
      glow: "none",
    },
  },
);

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, glow, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(cardVariants({ variant, glow }), className)}
      {...props}
    />
  ),
);
Card.displayName = "Card";

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className,
    )}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
));
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
};
