"use client";
import React from "react";
import { motion } from "framer-motion";

const stairsAnimation = {
  initial: {
    top: "0%",
  },
  animate: {
    top: "100%",
  },
  exit: {
    top: ["100%", "0%"],
  },
};

const reverseIndex = (i) => {
  const totalSteps = 6;
  return totalSteps - i - 1;
};

const Stairs = () => {
  const stairs = [...Array(6)];
  return (
    <>
      {stairs.map((_, i) => {
        return (
          <motion.div
            key={i}
            variants={stairsAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              duration: 0.4,
              ease: "easeInOut",
              delay: reverseIndex(i) * 0.1,
            }}
            className="h-full w-full bg-white relative"
          />
        );
      })}
    </>
  );
};

export default Stairs;
