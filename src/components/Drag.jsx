"use client";
import { motion } from "motion/react";

export default function Drag() {
  return (
    <motion.div
      drag
      dragMomentum={false}
      whileDrag={{ scale: 1.1 }}
      // dragConstraints={{
      //   top: -50,
      //   left: -50,
      //   right: 50,
      //   bottom: 50,
      // }}
      style={box}
    />
  );
}

/**
 * ==============   Styles   ================
 */

const box = {
  width: 100,
  height: 100,
  backgroundColor: "#2f7cf8",
  borderRadius: 10,
};
