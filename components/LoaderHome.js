import React from "react";
import TextScrambler from "react-scramble-text";
import { useCursorContext } from "../src/context/cursorstate";
import Link from "next/link";
import Router, { withRouter } from "next/router";

import { motion, useAnimation } from "framer-motion";
import { fadeInUp, fadeInLeft } from "../variants";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 3,
    },
  },
};

const staggercontainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
      delayChildren: 5,
    },
  },
};

const heroText = {
  hidden: { opacity: 0, y: 200 },
  visible: { opacity: 1, y: 0 },
};

const navDot = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0 },
};

const mainBlock = {
  hidden: { width: "100%", left: 0 },
  visible: (custom) => ({
    width: ["100%", "0%"],
    left: ["0%", "100%"],
    transition: { delay: 4.2 + custom * 0.5, duration: 2, ease: "easeInOut" },
  }),
};

const svgVariant = {
  hidden: {
    translateX: "-50%",
  },
  visible: {
    translateX: "0%",

    transition: {
      delay: 3,
      duration: 1.5,
      ease: "easeInOut",
    },
  },
};

const pathVariant = {
  hidden: {
    pathLength: 0,
    fill: "rgba(0,0,0,0)",
    strokeWidth: 8,
    scale: 0.3,
  },
  visible: {
    scale: 0.9,

    pathLength: 1,
    fill: "url(#paint0_linear_6_225)",
    strokeWidth: 0,

    transition: {
      default: { duration: 4, ease: "easeInOut" },
      fill: { duration: 1, ease: [1, 0, 0.8, 1] },
      strokeWidth: { duration: 6, ease: [1, 0, 0.8, 1] },
      pathLength: { duration: 1.5, ease: [1, 0, 0.8, 1] },
      scale: { delay: 3, duration: 2, ease: "easeInOut" },
    },
  },
};

const Hero = () => {
  const { setCursorState, setCursorText } = useCursorContext();

  function pushtoHome() {
    Router.push({
      pathname: "/home",
    });
  }

  function setCursorDefault() {
    setCursorState("default");
    setCursorText("");
  }
  function setCursorLeftNav() {
    setCursorState("leftNav");
    setCursorText("");
  }

  return (
    <div className="h-screen">
      <div class="container mt-32  md:mt-20  flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
        <motion.div
          variants={svgVariant}
          initial="hidden"
          animate="visible"
          className="w-64 md:w-96  lg:w-120 mt-0 absolute  left-1/2   mx-auto   md:mt-0 -z-1"
        >
          <svg viewBox="0 0 673 559" xmlns="http://www.w3.org/2000/svg">
            <motion.path
              variants={pathVariant}
              initial="hidden"
              animate="visible"
              onAnimationComplete={pushtoHome}
              d="M384.979 0H0C0 49.1778 39.8664 89.0443 89.0442 89.0443H393.534V88.9299C416.426 89.8977 438.991 94.7435 460.201 103.269C484.05 112.855 505.719 126.906 523.972 144.619C542.225 162.332 556.704 183.36 566.582 206.503C576.461 229.646 581.545 254.45 581.545 279.5C581.545 304.55 576.461 329.354 566.582 352.497C556.704 375.64 542.225 396.668 523.972 414.381C505.719 432.094 484.05 446.145 460.201 455.731C437.231 464.964 412.673 469.881 387.831 470.231V469.956H368.51C319.333 469.956 279.466 509.822 279.466 559H384.979H387.831V558.986C424.684 558.632 461.134 551.417 495.2 537.724C530.144 523.678 561.895 503.09 588.641 477.136C615.386 451.182 636.601 420.371 651.076 386.46C665.55 352.55 673 316.205 673 279.5C673 242.796 665.55 206.451 651.076 172.54C636.601 138.63 615.386 107.818 588.641 81.8637C561.895 55.9097 530.144 35.3219 495.2 21.2757C462.892 8.28939 428.44 1.12987 393.534 0.123317V0H384.979ZM5.70339 556.527L159.695 321.549H16.7034C10.6283 321.549 5.70339 316.624 5.70339 310.549V248.451C5.70339 242.376 10.6283 237.451 16.7034 237.451H411.051C417.126 237.451 422.051 242.376 422.051 248.451V310.549C422.051 316.624 417.126 321.549 411.051 321.549H273.763L119.771 556.527H5.70339Z"
              strokeWidth="2"
              stroke="url(#paint0_linear_6_224)"
              strokeLinecap="round"
            />
            <defs>
              <linearGradient
                id="paint0_linear_6_224"
                x1="139"
                y1="120"
                x2="583.028"
                y2="536.708"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#4C98DE" stop-opacity="0.29" />
                <stop offset="0.9998" stop-color="#7C47B1" />
                <stop
                  offset="0.9999"
                  stop-color="#3F79AE"
                  stop-opacity="0.0104167"
                />
                <stop offset="1" stop-color="#3F78AD" stop-opacity="0" />
              </linearGradient>
              <motion.linearGradient
                id="paint0_linear_6_225"
                x1="600"
                y1="600"
                x2="600"
                y2="600"
                gradientUnits="userSpaceOnUse"
                animate={{ x1: 139, x2: 583.028, y1: 120, y2: 536.708 }}
                transition={{
                  delay: 1.5,
                  ease: "easeInOut",
                  duration: 1.5,
                }}
              >
                <stop stop-color="#4C98DE" stop-opacity="0" />
                <stop offset="0.9998" stop-color="#7C47B1" />
                <stop offset="0.9999" stop-color="#3F79AE" stop-opacity="0" />
                <stop offset="1" stop-color="#3F78AD" stop-opacity="0" />
              </motion.linearGradient>
            </defs>
          </svg>
        </motion.div>
        <div class="flex flex-wrap md:flex-nowrap ">
          <motion.nav
            variants={container}
            initial="hidden"
            animate="visible"
            className="  hidden lg:mr-24 lg:w-4 fixed left-percentage  "
            data-scroll
            data-scroll-sticky
            data-scroll-target="#container"
          >
            <div class="absolute left-50 transform  -translate-x-1/2 space-y-6 mt-52">
              <motion.a
                variants={navDot}
                whileTap={{ scale: 0.6 }}
                whileHover={{ scale: 1.2 }}
                onMouseEnter={setCursorLeftNav}
                onMouseLeave={setCursorDefault}
                href="#"
                className="nav-dot selected-circle block w-5 h-5 rounded-full border-2 border-nav "
              >
                <span className="bg-black px-2 py-1 rounded-md ml-10 opacity-0">
                  Home
                </span>
              </motion.a>

              <motion.a
                variants={navDot}
                whileTap={{ scale: 0.6 }}
                whileHover={{ scale: 1.2 }}
                onMouseEnter={setCursorLeftNav}
                onMouseLeave={setCursorDefault}
                href="#work"
                className="nav-dot block w-5 h-5 rounded-full border-2 border-nav opacity-30 "
              >
                <span className="bg-black px-2 py-1 rounded-md ml-10 opacity-0">
                  Work
                </span>
              </motion.a>

              <motion.a
                variants={navDot}
                whileTap={{ scale: 0.6 }}
                whileHover={{ scale: 1.2 }}
                onMouseEnter={setCursorLeftNav}
                onMouseLeave={setCursorDefault}
                href="#about"
                className="nav-dot block w-5 h-5 rounded-full border-2 border-nav opacity-40 "
              >
                <span className="bg-black px-2 py-1 rounded-md ml-10 opacity-0">
                  About
                </span>
              </motion.a>

              <motion.a
                variants={navDot}
                whileTap={{ scale: 0.6 }}
                whileHover={{ scale: 1.2 }}
                onMouseEnter={setCursorLeftNav}
                onMouseLeave={setCursorDefault}
                href="#contact"
                className="nav-dot block w-5 h-5 rounded-full border-2 border-nav opacity-40 "
              >
                <span className="bg-black px-2 py-1 rounded-md ml-10 opacity-0">
                  Contact
                </span>
              </motion.a>
            </div>
          </motion.nav>

          <motion.div
            variants={staggercontainer}
            initial="hidden"
            animate="visible"
            class="flex flex-wrap  lg:ml-20 justify-start md:justify-start relative max-w-xl mt-0 md:my-36 "
          >
            <div class="box flex flex-col space-y-4 justify-center">
              <div class="title width-full invisible relative h-12 my-2 md:h-56 items-center">
                {/* <motion.div
                  variants={mainBlock}
                  custom={0}
                  initial="hidden"
                  animate="visible"
                  className="block w-1/3 h-inherit bg-white absolute"
                ></motion.div> */}
                <span className="font-bold text-xl md:text-6xl lg:text-7xl logo-text ">
                  <motion.h1 variants={heroText} className=" ">
                    <span className=" text-6xl md:text-9xl ">
                      {" "}
                      Hi, I'm Danilo
                    </span>
                    <span className="text-blue-400">.</span>{" "}
                  </motion.h1>
                </span>
              </div>
              <div class="role width-full invisible relative my-4 h-16 items-center">
                {/* <motion.div
                  variants={mainBlock}
                  custom={2}
                  initial="hidden"
                  animate="visible"
                  class=" w-1/3 block bg-white z-20 inset-y-0  absolute"
                ></motion.div> */}
                <motion.span
                  variants={heroText}
                  className="font-extralight absolute   top-4  text-2xl"
                >
                  <TextScrambler
                    phrases={[
                      "M. Sc. Computer Science Graduate",
                      "Passion for modern Web Applications",
                      "Interested in Data Science and NLP",
                      "Dedicated to UI/UX Design",
                    ]}
                    speed={25}
                    pauseTime={5000}
                  ></TextScrambler>
                </motion.span>
              </div>

              <div className="role relative invisible width-full   h-12 ">
                <motion.div
                  variants={heroText}
                  className="  w-64 items-center h-24 mt-14 "
                >
                  {/* <motion.div
                    variants={mainBlock}
                    custom={2.2}
                    initial="hidden"
                    animate="visible"
                    class=" w-64   absolute top-full -bottom-3/4 z-10  py-1  bg-white "
                  ></motion.div> */}
                  <Link href="/coindash">
                    <a
                      className="btn-1 text-gray-300 px-3 py-1"
                      onMouseEnter={setCursorLeftNav}
                      onMouseLeave={setCursorDefault}
                    >
                      Get in touch.
                    </a>
                  </Link>
                </motion.div>
              </div>
            </div>

            <div class="w-full flex justify-start md:justify-start"></div>
          </motion.div>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="flex flex-col w-8 md:w-12 absolute right-8 space-y-12 hidden text-gray-200 "
        >
          <motion.a variants={navDot} href="https://instagram.com/">
            {" "}
            <svg
              className="fill-current opacity-30 hover:opacity-100"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3z" />
            </svg>
          </motion.a>

          <motion.a variants={navDot} href="https://linkedin.com">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewbox="0 0 430.117 430.117"
              className="fill-current opacity-30 hover:opacity-100"
            >
              <path d="M430.117 261.543V420.56H337.93V272.193c0-37.27-13.335-62.707-46.704-62.707-25.473 0-40.632 17.142-47.3 33.724-2.433 5.928-3.06 14.18-3.06 22.477V420.56H148.65s1.242-251.285 0-277.32h92.21v39.31c-.187.293-.43.61-.606.895h.606v-.896c12.25-18.87 34.13-45.825 83.102-45.825 60.673 0 106.157 39.636 106.157 124.818zM52.183 9.558C20.635 9.558 0 30.25 0 57.463c0 26.62 20.038 47.94 50.96 47.94h.615c32.16 0 52.16-21.317 52.16-47.94-.607-27.212-20-47.905-51.552-47.905zM5.477 420.56H97.66V143.24H5.478v277.32z"></path>
            </svg>
          </motion.a>
          <motion.a variants={navDot} href="https://github.com">
            <svg
              className="fill-current opacity-30 hover:opacity-100"
              xmlns="http://www.w3.org/2000/svg"
              viewbox="0 0 438.549 438.549"
            >
              <path
                fill="#ffffff"
                d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8C295.736 15.166 259.057 5.365 219.27 5.365c-39.78 0-76.47 9.804-110.062 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.853 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.42-1.996 2.474-2.282 3.71-5.14 3.71-8.562 0-.57-.05-5.708-.144-15.417-.098-9.71-.144-18.18-.144-25.406l-6.567 1.136c-4.187.767-9.47 1.092-15.846 1-6.375-.09-12.992-.757-19.843-2-6.854-1.23-13.23-4.085-19.13-8.558-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.9-9.233-8.992-14.56-4.093-5.33-8.232-8.944-12.42-10.847l-1.998-1.43c-1.332-.952-2.568-2.1-3.71-3.43-1.143-1.33-1.998-2.663-2.57-3.997-.57-1.335-.097-2.43 1.428-3.29 1.525-.858 4.28-1.275 8.28-1.275l5.708.853c3.807.763 8.516 3.042 14.133 6.85 5.615 3.807 10.23 8.755 13.847 14.843 4.38 7.807 9.657 13.755 15.846 17.848 6.184 4.093 12.42 6.136 18.7 6.136 6.28 0 11.703-.476 16.273-1.423 4.565-.95 8.848-2.382 12.847-4.284 1.713-12.758 6.377-22.56 13.988-29.41-10.847-1.14-20.6-2.857-29.263-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.98-3.9-12.373-5.852-26.647-5.852-42.825 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.38-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.284 18.794 7.953 23.84 10.995 5.046 3.04 9.09 5.618 12.135 7.708 17.706-4.947 35.977-7.42 54.82-7.42s37.116 2.473 54.822 7.42l10.85-6.85c7.418-4.57 16.18-8.757 26.26-12.564 10.09-3.806 17.803-4.854 23.135-3.14 8.562 21.51 9.325 40.923 2.28 58.24 15.035 16.18 22.558 35.788 22.558 58.818 0 16.178-1.958 30.497-5.853 42.966-3.9 12.47-8.94 22.457-15.125 29.98-6.19 7.52-13.9 13.85-23.13 18.985-9.233 5.14-18.183 8.85-26.84 11.135-8.663 2.286-18.416 4.004-29.264 5.146 9.894 8.563 14.842 22.078 14.842 40.54v60.237c0 3.422 1.19 6.28 3.572 8.562 2.38 2.278 6.136 2.95 11.276 1.994 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.16 41.826-81.126 41.826-128.906-.01-39.77-9.818-76.454-29.414-110.05z"
              ></path>
            </svg>
          </motion.a>
          <motion.a variants={navDot} href="https://twitter.com">
            <svg
              className="fill-current opacity-30 hover:opacity-100"
              xmlns="http://www.w3.org/2000/svg"
              viewbox="0 0 612 612"
            >
              <path d="M612 116.258c-22.525 9.98-46.694 16.75-72.088 19.772 25.93-15.527 45.777-40.155 55.184-69.41-24.322 14.378-51.17 24.82-79.775 30.48-22.906-24.438-55.49-39.66-91.63-39.66-69.333 0-125.55 56.218-125.55 125.514 0 9.828 1.11 19.427 3.25 28.606-104.325-5.24-196.834-55.223-258.75-131.174-10.822 18.51-16.98 40.078-16.98 63.1 0 43.56 22.182 81.994 55.836 104.48-20.575-.688-39.926-6.348-56.867-15.756v1.568c0 60.806 43.29 111.554 100.692 123.104-10.517 2.83-21.607 4.398-33.08 4.398-8.107 0-15.947-.803-23.634-2.333 15.985 49.907 62.336 86.2 117.253 87.194-42.946 33.655-97.098 53.656-155.915 53.656-10.134 0-20.116-.612-29.944-1.72 55.568 35.68 121.537 56.484 192.44 56.484 230.947 0 357.187-191.29 357.187-357.188l-.42-16.253C573.87 163.525 595.21 141.42 612 116.257z"></path>
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
