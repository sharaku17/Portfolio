import React, { useEffect } from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div class="container mt-32 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
      <section class="w-full">
        <mdiv class="animate-container">
          <motion.h2
            initial={{ x: -200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.2,
              type: "spring",
              duration: 1,
              bounce: 0.3,
            }}
            id="about"
            class="secondary-title"
          >
            <a class="flex flex-col">
              <span class="uppercase spacing-wide text-gray-400 my-6  text-lg font-normal">
                {" "}
                Get to know me
              </span>{" "}
              <span class=" text-5xl md:text-7xl "> About me</span>{" "}
            </a>
          </motion.h2>
          <motion.p
            initial={{ y: 200, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.2,
              type: "spring",
              duration: 1,
              bounce: 0.3,
            }}
            class="section-paragraph"
          >
            I’ve had the pleasure of working with multiple Fortune 500
            companies, designing and implementing both frontend and backend.
          </motion.p>
        </mdiv>
      </section>
    </div>
  );
};

export default About;
