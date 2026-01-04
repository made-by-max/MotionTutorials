"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

export default function ExitAnimation() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div style={container}>
      <AnimatePresence>
        {isVisible ? (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            style={box}
            key="box"
          />
        ) : null}
      </AnimatePresence>
      <motion.button
        whileTap={{ y: 1 }}
        style={button}
        onClick={() => setIsVisible(!isVisible)}
      >
        {isVisible ? "Hide" : "Show"}
      </motion.button>
    </div>
  );
}

/**
 * ==============   Styles   ================
 */

const container: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  width: 100,
  height: 160,
  position: "relative",
};

const box: React.CSSProperties = {
  width: 100,
  height: 100,
  backgroundColor: "#FF5449",
  borderRadius: "10px",
};

const button: React.CSSProperties = {
  backgroundColor: "#FF5449",
  borderRadius: "10px",
  padding: "10px 20px",
  color: "#000000",
  position: "absolute",
  bottom: 0,
  left: 0,
  right: 0,
};
