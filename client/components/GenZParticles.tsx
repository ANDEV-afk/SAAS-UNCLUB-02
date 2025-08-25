import { motion } from "framer-motion";

export function GenZParticles() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Floating gradient blobs */}
      {[...Array(8)].map((_, index) => (
        <motion.div
          key={`blob-${index}`}
          className={`floating-blob ${index % 2 === 0 ? "violet" : "cyan"}`}
          style={{
            width: `${80 + Math.random() * 120}px`,
            height: `${80 + Math.random() * 120}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            x: [0, 30, -20, 10, 0],
            y: [0, -40, -20, -30, 0],
            scale: [1, 1.2, 0.8, 1.1, 1],
            opacity: [0.05, 0.15, 0.08, 0.12, 0.05],
          }}
          transition={{
            duration: 8 + index * 2,
            repeat: Infinity,
            delay: index * 1.5,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Subtle floating particles with new colors */}
      {[...Array(20)].map((_, index) => (
        <motion.div
          key={`particle-${index}`}
          className="absolute w-1 h-1 rounded-full"
          style={{
            background:
              index % 3 === 0
                ? "linear-gradient(45deg, #8A2BE2, #00FFFF)"
                : index % 3 === 1
                  ? "linear-gradient(45deg, #00FFFF, #8A2BE2)"
                  : "linear-gradient(45deg, #FF00FF, #8A2BE2)",
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10],
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: 4 + index * 0.5,
            repeat: Infinity,
            delay: index * 0.2,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Larger accent orbs with Electric Violet and Cyan */}
      {[...Array(6)].map((_, index) => (
        <motion.div
          key={`orb-${index}`}
          className="absolute rounded-full blur-3xl"
          style={{
            width: `${60 + Math.random() * 80}px`,
            height: `${60 + Math.random() * 80}px`,
            background:
              index % 2 === 0
                ? "radial-gradient(circle, rgba(138, 43, 226, 0.1), rgba(138, 43, 226, 0.05))"
                : "radial-gradient(circle, rgba(0, 255, 255, 0.1), rgba(0, 255, 255, 0.05))",
            left: `${15 + index * 15}%`,
            top: `${10 + index * 12}%`,
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.05, 0.2, 0.05],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 10 + index * 2,
            repeat: Infinity,
            delay: index * 1.2,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
