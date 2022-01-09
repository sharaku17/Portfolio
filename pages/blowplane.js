import React, { useEffect, useState } from "react";
import Navbar_back from "../components/Navbar_back";
import { useCursorContext } from "../src/context/cursorstate";

import dynamic from "next/dynamic";

import { motion } from "framer-motion";
import withTransition from "../HOC/withTransition";
const AnimatedCursor = dynamic(() => import("../lib/AnimatedCursor"), {
  ssr: false,
});

const heroText = {
  hidden: { opacity: 1, translateY: "00px" },
  visible: { opacity: 1, translateY: "0px" },
};
const blowplane = () => {
  const { setCursorState, setCursorText } = useCursorContext();

  function setCursorDefault() {
    setCursorState("default");
    setCursorText("");
  }
  function setCursorCaseStudy() {
    setCursorState("project");
    setCursorText("Go to Github");
  }

  const fadeUp = {
    hidden: {
      translateY: "100px",
      opacity: 0,
    },
    visible: {
      translateY: "0px",
      opacity: 1,
    },
  };

  return (
    <div className="relative">
      <AnimatedCursor></AnimatedCursor>

      <div className="text-white font-poppins pb-12">
        <Navbar_back delay={1}></Navbar_back>
        <div className="w-full mx-auto md:mt-16 max-w-screen-2xl">
          <div className="grid  grid-cols-3  overflow-hidden">
            <div className=" col-span-3 md:col-span-1    h-screen text-left ">
              <ul>
                <motion.li
                  initial={{ translateX: "-100px", opacity: 0 }}
                  animate={{ translateX: "0px", opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1 }}
                  className="m-6"
                >
                  <div className="secondary-t">
                    <span className=" mt-6   text-gray-400 font-normal uppercase spacing-wide  ">
                      case Study
                    </span>
                    <div className=" font-bold flex items-center    mt-6">
                      <img
                        className=" w-16  h-16 mr-4 rounded-xl"
                        src="./images/PlaneBlower.png"
                        alt=""
                      ></img>
                      <div>
                        <span className=" text-4xl uppercase">Blowplane</span>{" "}
                        <br></br>
                        <span className=" font-semibold text-lg ">
                          Let the paper plane fly as far as you can!
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.li>
                <motion.li
                  initial={{ translateX: "-100px", opacity: 0 }}
                  animate={{ translateX: "0px", opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                  className="m-6 mt-12"
                >
                  <div>
                    <span className=" uppercase spacing-wide text-gray-400 font-normal ">
                      My Role
                    </span>
                    <div className=" font-normal text-lg  mt-2">
                      <ul>
                        <li>UX / UI Design</li>
                        <li>iOS Development</li>
                      </ul>
                    </div>
                  </div>
                </motion.li>
                <motion.li
                  initial={{ translateX: "-100px", opacity: 0 }}
                  animate={{ translateX: "0px", opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1.4 }}
                  className="m-6 mt-12"
                >
                  <div>
                    <span className=" uppercase spacing-wide text-gray-400 font-normal ">
                      Use case
                    </span>
                    <div className=" font-normal text-lg  mt-2">
                      University Project
                    </div>
                  </div>
                </motion.li>
                <motion.li
                  initial={{ translateX: "-100px", opacity: 0 }}
                  animate={{ translateX: "0px", opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1.6 }}
                  className="m-6 mt-12"
                >
                  <div>
                    <span className=" uppercase spacing-wide text-gray-400 font-normal ">
                      Technologies used
                    </span>
                    <div className=" font-normal text-lg  mt-2">
                      <ul>
                        <li>Swift UI</li>
                      </ul>
                    </div>
                  </div>
                </motion.li>
                <motion.li
                  initial={{ translateX: "-100px", opacity: 0 }}
                  animate={{ translateX: "0px", opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1.8 }}
                  className="m-6 mt-12"
                >
                  <div>
                    <span className=" uppercase spacing-wide text-gray-400 font-normal ">
                      Year
                    </span>
                    <div className=" font-normal text-lg  mt-2"> 2019</div>
                  </div>
                </motion.li>
              </ul>
            </div>
            <motion.a
              initial={{ translateY: "100px", opacity: 0 }}
              animate={{ translateY: "0px", opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              href="https://github.com/"
              className="blowplanemockup2 mt-12 md:mt-0 h-64 md:h-5/6  col-span-3 md:col-span-2 bg-cover bg-center  md:ml-16 "
              onClick={setCursorDefault}
              onMouseEnter={setCursorCaseStudy}
              onMouseLeave={setCursorDefault}
            ></motion.a>

            <motion.div
              initial={{ translateY: "100px", opacity: 0 }}
              viewport={{ once: true }}
              whileInView={{ translateY: "0px", opacity: 1 }}
              transition={{ duration: 0.8 }}
              className=" blowplanemockup mt-12 md:mt-0 h-64 md:h-5/6 md:mr-32 col-span-3 md:col-span-2 bg-cover bg-center   "
            ></motion.div>
            <motion.div
              initial={{ translateX: "100px", opacity: 0 }}
              viewport={{ once: true }}
              whileInView={{ translateX: "0px", opacity: 1 }}
              transition={{ duration: 0.8 }}
              className=" secondary-t m-6 col-span-3 md:col-span-1 text-left md:h-screen  "
            >
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
              Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
              dolor sit amet.
            </motion.div>
            <motion.div
              initial={{ translateY: "100px", opacity: 0 }}
              viewport={{ once: true }}
              whileInView={{ translateY: "0px", opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="hidden mt-12 md:mt-0 h-64 md:h-screen  col-span-3  bg-cover bg-center   "
            ></motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withTransition(blowplane);
