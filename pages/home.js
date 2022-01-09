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
import Paralex from "../components/Paralex";
function home() {
  // useEffect(() => {
  //   // function updateList() {
  //   //   const titles = [...document.querySelectorAll("h1,h2")].sort((a, b) => {
  //   //     return (
  //   //       Math.abs(a.getBoundingClientRect().top) -
  //   //       Math.abs(b.getBoundingClientRect().top)
  //   //     );
  //   //   });
  //   //   if (titles !== undefined) {
  //   //     document
  //   //       .querySelectorAll(".selected-circle")
  //   //       .forEach((c) => c.classList.remove("selected-circle"));
  //   //     document
  //   //       .querySelectorAll(".nav-dot")
  //   //       [
  //   //         [...document.querySelectorAll("h1,h2")].indexOf(titles[0])
  //   //       ].classList.add("selected-circle");
  //   //   }
  //   // }
  //   // updateList();
  //   // document.addEventListener("scroll", () => {
  //   //   updateList();
  //   // });
  //   // return () => document.removeEventListener("scroll"() => {
  //   //   updateList();
  //   // });;
  // });

  return (
    <>
      <div
        id="container"
        className="text-white  font-poppins overflow-hidden pb-12"
      >
        <AnimatedCursor></AnimatedCursor>
        <div className="h-screen">
          <Navbar delay={1.6}></Navbar>

          <Hero></Hero>
        </div>

        <Work></Work>
        <About></About>
        <Contact></Contact>
      </div>
    </>
  );
}

export default withTransition(home);
