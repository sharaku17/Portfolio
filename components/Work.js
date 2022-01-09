import React, { useEffect } from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import Link from "next/link";

const Work = () => {
  return (
    <div class="container flex justify-between items-center mx-auto  md:px-14 lg:px-24 w-full">
      <section class="w-full">
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.7,
            type: "spring",
            duration: 1,
            bounce: 0.3,
          }}
          class="animate-container"
        >
          <h2 id="work" class="secondary-title transform  mx-6">
            <a class="flex flex-col">
              <span class="uppercase spacing-wide text-gray-400 my-6  text-lg font-normal">
                {" "}
                Personal Projects
              </span>{" "}
              <span class=" text-5xl md:text-7xl "> Case studies</span>{" "}
            </a>
          </h2>
        </motion.div>

        <div class="grid grid-cols-1 md:grid-cols-2 ">
          <motion.div class="work-card m-6">
            <motion.div
              initial={{ y: 200, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: 0,
                type: "spring",
                duration: 1,
                bounce: 0.3,
              }}
            >
              <ProjectCard
                url="/coindash"
                h={9}
                w={7}
                titel="Coin-Dash"
                beschreibung="Web App & Dashboard"
                year="2021-2022"
                background="coindashmockup"
              ></ProjectCard>
            </motion.div>
          </motion.div>

          <motion.div class="work-card m-6">
            <motion.div
              initial={{ y: 200, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.3,
                type: "spring",
                duration: 1,
                bounce: 0.3,
              }}
            >
              <ProjectCard
                url="/satzify"
                h={9}
                w={7}
                titel="Satzify"
                beschreibung="NLP Deep Learning Web App"
                year="2022"
                background="satzifymockup"
              ></ProjectCard>
            </motion.div>
          </motion.div>
        </div>
        <div class=" grid grid-cols-1 md:grid-cols-2 ">
          <motion.div class="work-card m-6">
            <motion.div
              initial={{ y: 200, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: 0,
                type: "spring",
                duration: 1,
                bounce: 0.3,
              }}
            >
              <ProjectCard
                url="/blowplane"
                h={9}
                w={7}
                titel="Blowplane"
                beschreibung="iOS game App"
                year="2019"
                background="blowplanemockup"
              ></ProjectCard>
            </motion.div>
          </motion.div>

          <motion.div class="work-card m-6">
            <motion.div
              initial={{ y: 200, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.3,
                type: "spring",
                duration: 1,
                bounce: 0.3,
              }}
            >
              <ProjectCard
                url="/portfolio"
                h={9}
                w={7}
                titel="Portfolio"
                beschreibung="Personal Portfolio project"
                year="2021-2022"
                background="portfoliomockup"
              ></ProjectCard>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Work;
