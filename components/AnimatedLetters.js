import React from "react";
import { motion } from "framer-motion";

const AnimatedLetters = ({ title, banner, animateLetter }) => {
  return (
    <motion.span
      variants={banner}
      initial="initial"
      animate="animate"
      className="hero-title"
    >
      {[...title].map((letter) => {
        return (
          <motion.span variants={animateLetter} className="hero-letter">
            {letter}
          </motion.span>
        );
      })}
    </motion.span>
  );
};

export default AnimatedLetters;
