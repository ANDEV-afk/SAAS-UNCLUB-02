import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";

// Sparkles component for magical hover effects
interface SparklesProps {
  children: React.ReactNode;
  className?: string;
  density?: "low" | "medium" | "high";
  size?: "sm" | "md" | "lg";
  color?: "purple" | "pink" | "blue" | "gold" | "rainbow";
}

export const Sparkles = ({
  children,
  className,
  density = "medium",
  size = "md",
  color = "purple",
}: SparklesProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const sparkleCount = {
    low: 3,
    medium: 6,
    high: 10,
  }[density];

  const sparkleSize = {
    sm: "text-xs",
    md: "text-sm",
    lg: "text-base",
  }[size];

  const sparkleColors = {
    purple: ["🟣", "🟢", "🔵"],
    pink: ["🩷", "💗", "💖"],
    blue: ["🔵", "💙", "🩵"],
    gold: ["⭐", "✨", "🌟"],
    rainbow: ["🌈", "✨", "🌟", "💎", "🔮"],
  }[color];

  const generateSparkles = () => {
    return Array.from({ length: sparkleCount }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 2,
      duration: 1.5 + Math.random() * 1.5,
      emoji: sparkleColors[Math.floor(Math.random() * sparkleColors.length)],
    }));
  };

  const sparkles = generateSparkles();

  return (
    <div
      className={cn("relative", className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
      <AnimatePresence>
        {isHovered &&
          sparkles.map((sparkle) => (
            <motion.div
              key={sparkle.id}
              className={cn(
                "absolute pointer-events-none select-none",
                sparkleSize,
              )}
              style={{
                left: `${sparkle.x}%`,
                top: `${sparkle.y}%`,
              }}
              initial={{
                scale: 0,
                rotate: 0,
                opacity: 0,
              }}
              animate={{
                scale: [0, 1, 0],
                rotate: [0, 180, 360],
                opacity: [0, 1, 0],
              }}
              exit={{
                scale: 0,
                opacity: 0,
              }}
              transition={{
                duration: sparkle.duration,
                delay: sparkle.delay,
                ease: "easeInOut",
                repeat: Infinity,
                repeatDelay: 1,
              }}
            >
              {sparkle.emoji}
            </motion.div>
          ))}
      </AnimatePresence>
    </div>
  );
};

// Confetti component for celebration effects
interface ConfettiProps {
  children: React.ReactNode;
  className?: string;
  trigger?: "hover" | "click" | "always";
  density?: "low" | "medium" | "high";
  colors?: string[];
}

export const Confetti = ({
  children,
  className,
  trigger = "hover",
  density = "medium",
  colors = ["🎉", "🎊", "🥳", "✨", "🌟"],
}: ConfettiProps) => {
  const [isTriggered, setIsTriggered] = useState(trigger === "always");

  const confettiCount = {
    low: 5,
    medium: 10,
    high: 15,
  }[density];

  const generateConfetti = () => {
    return Array.from({ length: confettiCount }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 1,
      duration: 2 + Math.random() * 2,
      emoji: colors[Math.floor(Math.random() * colors.length)],
    }));
  };

  const confetti = generateConfetti();

  const handleTrigger = () => {
    if (trigger === "click") {
      setIsTriggered(true);
      setTimeout(() => setIsTriggered(false), 3000);
    }
  };

  const eventHandlers = {
    onMouseEnter: trigger === "hover" ? () => setIsTriggered(true) : undefined,
    onMouseLeave: trigger === "hover" ? () => setIsTriggered(false) : undefined,
    onClick: trigger === "click" ? handleTrigger : undefined,
  };

  return (
    <div
      className={cn("relative overflow-hidden", className)}
      {...eventHandlers}
    >
      {children}
      <AnimatePresence>
        {isTriggered &&
          confetti.map((piece) => (
            <motion.div
              key={piece.id}
              className="absolute pointer-events-none select-none text-lg z-10"
              style={{
                left: `${piece.x}%`,
                top: "-20px",
              }}
              initial={{
                y: -20,
                rotate: 0,
                opacity: 1,
              }}
              animate={{
                y: 400,
                rotate: 720,
                opacity: 0,
              }}
              exit={{
                opacity: 0,
              }}
              transition={{
                duration: piece.duration,
                delay: piece.delay,
                ease: "easeIn",
              }}
            >
              {piece.emoji}
            </motion.div>
          ))}
      </AnimatePresence>
    </div>
  );
};

// Floating elements for ambient animation
interface FloatingElementsProps {
  children: React.ReactNode;
  className?: string;
  elements?: string[];
  count?: number;
}

export const FloatingElements = ({
  children,
  className,
  elements = ["✨", "⭐", "💫"],
  count = 3,
}: FloatingElementsProps) => {
  const floatingItems = Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 80 + 10, // 10-90% to avoid edges
    y: Math.random() * 80 + 10,
    delay: Math.random() * 3,
    duration: 3 + Math.random() * 2,
    emoji: elements[Math.floor(Math.random() * elements.length)],
  }));

  return (
    <div className={cn("relative", className)}>
      {children}
      {floatingItems.map((item) => (
        <motion.div
          key={item.id}
          className="absolute pointer-events-none select-none text-lg opacity-30"
          style={{
            left: `${item.x}%`,
            top: `${item.y}%`,
          }}
          animate={{
            y: [-10, 10, -10],
            x: [-5, 5, -5],
            rotate: [0, 5, -5, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: item.duration,
            delay: item.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {item.emoji}
        </motion.div>
      ))}
    </div>
  );
};

// Shimmer effect for loading or highlighting
interface ShimmerProps {
  children: React.ReactNode;
  className?: string;
  color?: "white" | "purple" | "pink" | "gold";
  speed?: "slow" | "normal" | "fast";
}

export const Shimmer = ({
  children,
  className,
  color = "white",
  speed = "normal",
}: ShimmerProps) => {
  const shimmerColors = {
    white: "rgba(255, 255, 255, 0.3)",
    purple: "rgba(168, 85, 247, 0.3)",
    pink: "rgba(236, 72, 153, 0.3)",
    gold: "rgba(251, 191, 36, 0.3)",
  }[color];

  const duration = {
    slow: 3,
    normal: 2,
    fast: 1,
  }[speed];

  return (
    <div className={cn("relative overflow-hidden", className)}>
      {children}
      <motion.div
        className="absolute inset-0 -skew-x-12"
        style={{
          background: `linear-gradient(90deg, transparent, ${shimmerColors}, transparent)`,
        }}
        animate={{
          x: ["-100%", "100%"],
        }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
};

// Combined effect component that includes multiple animations
interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
  effects?: ("sparkles" | "confetti" | "floating" | "shimmer")[];
  intensity?: "subtle" | "medium" | "high";
}

export const AnimatedCard = ({
  children,
  className,
  effects = ["sparkles"],
  intensity = "medium",
}: AnimatedCardProps) => {
  let content = children;

  // Wrap with effects based on the effects array
  if (effects.includes("shimmer")) {
    content = (
      <Shimmer speed={intensity === "high" ? "fast" : "normal"}>
        {content}
      </Shimmer>
    );
  }

  if (effects.includes("floating")) {
    const count = intensity === "subtle" ? 2 : intensity === "medium" ? 3 : 5;
    content = <FloatingElements count={count}>{content}</FloatingElements>;
  }

  if (effects.includes("sparkles")) {
    const density =
      intensity === "subtle"
        ? "low"
        : intensity === "medium"
          ? "medium"
          : "high";
    content = <Sparkles density={density}>{content}</Sparkles>;
  }

  if (effects.includes("confetti")) {
    const density =
      intensity === "subtle"
        ? "low"
        : intensity === "medium"
          ? "medium"
          : "high";
    content = <Confetti density={density}>{content}</Confetti>;
  }

  return <div className={className}>{content}</div>;
};

// Export all components
export default {
  Sparkles,
  Confetti,
  FloatingElements,
  Shimmer,
  AnimatedCard,
};
