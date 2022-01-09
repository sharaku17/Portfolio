import { Variants } from "framer-motion";

export const fadeInUp = (delay) => ({
  hidden: {
    y: 40,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,

    transition: {
      delay: delay,
      duration: 0.5,
      ease: "easeInOut",
    },
  },
});

export const fadeInLeft = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,

    transition: {
      delay: 5,
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};
