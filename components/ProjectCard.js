import React from "react";
import { useCursorContext } from "../src/context/cursorstate";
import Link from "next/link";
import { motion } from "framer-motion";

const ProjectCard = ({ url, titel, beschreibung, h, w, background, year }) => {
  const { setCursorState, setCursorText } = useCursorContext();

  function setCursorDefault() {
    setCursorState("default");
    setCursorText("");
  }
  function setCursorCaseStudy() {
    setCursorState("project");
    setCursorText("Case Study");
  }

  return (
    <Link href={url} scroll={true}>
      <a class="group relative">
        <div
          onClick={setCursorDefault}
          class="wrapper overflow-hidden group projectcard "
          onMouseEnter={setCursorCaseStudy}
          onMouseLeave={setCursorDefault}
        >
          <article
            class={`relative  ${background} transform   flex-1 flex flex-col  aspect-h-${h} aspect-w-${w} bg-cover bg-center   overflow-hidden  hover:scale-105  transition duration-300 ease-in-out`}
          >
            <div class="absolute  inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-80  transition duration-300 ease-in-out"></div>
            <div class="relative overflow-hidden w-full  h-full px-4 sm:px-6 lg:px-4 flex justify-center items-center"></div>
            <div class="card-content  flex justify-between items-start"></div>
          </article>
          <div class="absolute top-2 left-2 w-96  ">
            <span class="ml-3 uppercase spacing-wide group-hover:text-gray-400 text-gray-700 font-normal text-sm">
              {" "}
              {year}
            </span>
            <div class="title  my-2 ml-3 text-gray-800 group-hover:text-gray-100 tracking-wider font-bold text-4xl">
              {titel}
            </div>
            <span class=" ml-3 font-semibold group-hover:text-gray-100 text-gray-800 text-md">
              {beschreibung}
            </span>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default ProjectCard;
