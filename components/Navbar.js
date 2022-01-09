import React from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "../variants";
import { useCursorContext } from "../src/context/cursorstate";
import Link from "next/link";

const Navbar = ({ delay }) => {
  const { setCursorState, setCursorText } = useCursorContext();

  function setCursorDefault() {
    setCursorState("default");
    setCursorText("");
  }
  function setCursorLeftNav() {
    setCursorState("leftNav");
    setCursorText("");
  }

  const fadeInUp = {
    hidden: {
      y: 40,
      opacity: 0,
    },
    visible: (i) => ({
      y: 0,
      opacity: 1,

      transition: {
        delay: delay,
        duration: 0.5,
        ease: "easeInOut",
      },
    }),
  };
  return (
    <header className="py-6   ">
      <motion.div
        variants={fadeInUp}
        custom={delay}
        initial="hidden"
        animate="visible"
        class="container text-gray-400   flex justify-between items-baseline mx-auto px-8 md:px-14 lg:px-24 w-full"
      >
        <Link href="/home">
          <a class="logo flex  items-baseline ">
            <svg
              width="40"
              height="40"
              viewBox="0 0 81 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M46.3346 0H0C0 7.03796 5.7054 12.7434 12.7434 12.7434H47.3644V12.727C50.1196 12.8655 52.8354 13.559 55.3882 14.7791C58.2585 16.151 60.8666 18.1619 63.0634 20.6968C65.2603 23.2317 67.0029 26.2411 68.1918 29.5532C69.3808 32.8652 69.9927 36.4151 69.9927 40C69.9927 43.5849 69.3808 47.1348 68.1918 50.4468C67.0029 53.7589 65.2603 56.7683 63.0634 59.3032C60.8666 61.8382 58.2585 63.849 55.3882 65.2209C52.6236 66.5422 49.6679 67.2459 46.678 67.296V67.2567H46.379C39.341 67.2567 33.6356 72.9621 33.6356 80H46.678V79.998C51.1135 79.9473 55.5004 78.9148 59.6005 76.9552C63.8062 74.945 67.6277 71.9986 70.8467 68.2843C74.0656 64.5699 76.6191 60.1604 78.3612 55.3073C80.1033 50.4543 80.9999 45.2529 80.9999 40C80.9999 34.7471 80.1033 29.5457 78.3612 24.6927C76.6191 19.8396 74.0657 15.4301 70.8467 11.7157C67.6277 8.00139 63.8062 5.05501 59.6005 3.04482C55.7121 1.18633 51.5656 0.161714 47.3644 0.0176516V0H46.3346ZM0.686397 79.6461L19.2203 46.0177H32.9491L14.4152 79.6461H0.686397ZM6.7041 33.9823C3.38061 33.9823 0.686397 36.6765 0.686397 40C0.686397 43.3234 3.38062 46.0177 6.7041 46.0177H44.7789C48.1023 46.0177 50.7966 43.3234 50.7966 40C50.7966 36.6765 48.1023 33.9823 44.7789 33.9823H6.7041Z"
                fill="#FBFBFB"
              />
            </svg>
            <span className="ml-4 text-gray-200 font-semibold text-lg">
              Danilo Trotta
            </span>
          </a>
        </Link>

        <div className="nav hidden md:flex space-x-12 items-center">
          <Link href="/home">
            <motion.a
              whileHover={{ color: "#fff" }}
              className="first relative selected-menu"
              onMouseEnter={setCursorLeftNav}
              onMouseLeave={setCursorDefault}
            >
              <span className="">Home</span>
            </motion.a>
          </Link>
          <Link href="/home">
            <motion.a
              whileHover={{ color: "#fff" }}
              className="first second relative"
              onMouseEnter={setCursorLeftNav}
              onMouseLeave={setCursorDefault}
            >
              My work
            </motion.a>
          </Link>

          <Link href="/home">
            <motion.a
              whileHover={{ color: "#fff" }}
              className="first relative"
              onMouseEnter={setCursorLeftNav}
              onMouseLeave={setCursorDefault}
            >
              About me
            </motion.a>
          </Link>
          <Link href="/home#contact">
            <motion.a
              whileHover={{ color: "#fff" }}
              className="first relative"
              onMouseEnter={setCursorLeftNav}
              onMouseLeave={setCursorDefault}
            >
              Contact me
            </motion.a>
          </Link>
        </div>
      </motion.div>
    </header>
  );
};

export default Navbar;
