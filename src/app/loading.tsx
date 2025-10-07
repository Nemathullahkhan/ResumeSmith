"use client";

import { Gavel, Loader } from "lucide-react";
import { motion } from "motion/react";

export default function Loading() {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <motion.div
        className="flex justify-center"
        initial={{ opacity: 1, x: 0, y: -50 }} // Hammer raised above the steel
        animate={{
          opacity: 1,
          y: [-50, 5, 0, -10, -5, -50], // Raise, strike down, impact, rebound, back up
          x: [0, 0, 2, 0, -2, 0], // Subtle horizontal vibration at impact
          transition: {
            duration: 0.8, // Total cycle time (adjust for speed)
            times: [0, 0.2, 0.4, 0.5, 0.6, 1], // Keyframe timing
            ease: "easeInOut", // Smooth acceleration and deceleration
            repeat: Infinity, // Loop indefinitely
            repeatType: "loop", // Restart from the beginning each time
          },
        }}
      >
        <Gavel size={48} /> {/* Adjust size and color as needed */}
      </motion.div>
    </div>
  );
}
