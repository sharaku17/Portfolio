import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import { motion, useTransform } from "framer-motion";
import dynamic from "next/dynamic";
import { SmoothScrollProvider } from "../src/context/SmoothScroll.context";
import withTransition from "../HOC/withTransition";

const AnimatedCursor = dynamic(() => import("../lib/AnimatedCursor"), {
  ssr: false,
});

import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Work from "../components/Work";
import Contact from "../components/Contact";
import About from "../components/About";
import LoaderHome from "../components/LoaderHome";

function index() {
  return (
    <>
      <div id="container" className="text-white font-poppins data-scroll pb-12">
        <div className="invisible">
          <Navbar delay={4.6}></Navbar>
        </div>

        <LoaderHome></LoaderHome>
      </div>
      <motion.div
        className="slide-in"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 0 }}
        exit={{ scaleX: 1 }}
        transition={{ duration: 1, ease: [0.6, -0.05, 0.01, 0.9] }}
      />
    </>
  );
}

export default index;
