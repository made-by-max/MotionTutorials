"use client";
import { useEffect } from "react";

import { animate, motion, useMotionValue, useTransform } from "motion/react";

export default function HTMLContent() {
  const count = useMotionValue(0);
  const rounded = useTransform(() => Math.round(count.get()));

  useEffect(() => {
    const controls = animate(count, 100, { duration: 5 });
    return () => controls.stop();
  }, []);

  return <motion.pre style={text}>{rounded}</motion.pre>;
}

const text = {
  fontSize: 64,
  color: "#61afef",
};
