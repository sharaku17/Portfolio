import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: {
    pathLength: 0,
  },
  visible: {
    pathLength: 1,

    transition: {
      delay: 7,
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const Paralex = () => {
  return (
    <section className="paralax">
      <div className="relative w-full h-screen">
        <svg
          className="layer top-2 left-4"
          data-speed="-6"
          width="55"
          height="40"
          viewBox="0 0 135 117"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            variant={fadeInUp}
            initial="hidden"
            animate="visible"
            d="M12.5074 109.25L67.5 14L122.493 109.25H12.5074Z"
            stroke="#8A1FDE"
            stroke-width="14"
          />
        </svg>
        <svg
          className="layer bottom-2 right-20"
          data-speed="5"
          width="30"
          height="20"
          viewBox="0 0 135 117"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.5074 109.25L67.5 14L122.493 109.25H12.5074Z"
            stroke="#4C98DE"
            stroke-width="14"
          />
        </svg>
        <svg
          className="layer right-64 top-64"
          data-speed="-7"
          width="15"
          height="10"
          viewBox="0 0 135 117"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.5074 109.25L67.5 14L122.493 109.25H12.5074Z"
            stroke="#ffffff"
            stroke-width="14"
          />
        </svg>
        <svg
          width="25"
          height="25"
          className="layer top-1/2 left-1/3"
          data-speed="2"
          viewBox="0 0 165 165"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="82.5"
            cy="82.5"
            r="76"
            stroke="#4C98DE"
            stroke-width="13"
          />
        </svg>

        <svg
          width="50"
          height="50"
          viewBox="0 0 165 165"
          className="layer bottom-20 left-2/3"
          data-speed="-4"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="82.5"
            cy="82.5"
            r="76"
            stroke="#8A1FDE"
            stroke-width="13"
          />
        </svg>

        <svg
          width="30"
          height="30"
          className="layer bottom-1 left-64"
          data-speed="5"
          viewBox="0 0 165 165"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="82.5"
            cy="82.5"
            r="76"
            stroke="#8A1FDE"
            stroke-width="13"
          />
        </svg>

        <svg
          width="10"
          height="10"
          className="layer left-10 top-1/3"
          data-speed="1"
          viewBox="0 0 104 162"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="5.58955"
            y1="3.68233"
            x2="97.5895"
            y2="158.682"
            stroke="#4C98DE"
            stroke-width="13"
          />
        </svg>
        <svg
          width="50"
          height="50"
          className="layer top-32 left-1/2"
          data-speed="8"
          viewBox="0 0 104 162"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="5.58955"
            y1="3.68233"
            x2="97.5895"
            y2="158.682"
            stroke="#8A1FDE"
            stroke-width="13"
          />
        </svg>
        <svg
          width="50"
          height="50"
          className="layer right-10 top-20"
          data-speed="-5"
          viewBox="0 0 104 162"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="5.58955"
            y1="3.68233"
            x2="97.5895"
            y2="158.682"
            stroke="#8A1FDE"
            stroke-width="13"
          />
        </svg>
        <svg
          width="40"
          height="40"
          className="layer right-2/3 top-0"
          data-speed="-2"
          viewBox="0 0 170 169"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M85 20.2073L99.2523 66.043L100.564 70.2614H104.982H151.818L113.703 99.1983L110.353 101.742L111.602 105.759L126.022 152.133L88.6281 123.744L85 120.99L81.3719 123.744L43.9784 152.133L58.3983 105.759L59.6473 101.742L56.2969 99.1983L18.1817 70.2614H65.0183H69.436L70.7477 66.043L85 20.2073Z"
            stroke="#4C98DE"
            stroke-width="12"
          />
        </svg>
        <svg
          width="20"
          height="20"
          className="layer bottom-20 left-10"
          data-speed="-1"
          viewBox="0 0 170 169"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M85 20.2073L99.2523 66.043L100.564 70.2614H104.982H151.818L113.703 99.1983L110.353 101.742L111.602 105.759L126.022 152.133L88.6281 123.744L85 120.99L81.3719 123.744L43.9784 152.133L58.3983 105.759L59.6473 101.742L56.2969 99.1983L18.1817 70.2614H65.0183H69.436L70.7477 66.043L85 20.2073Z"
            stroke="#4C98DE"
            stroke-width="12"
          />
        </svg>
        <svg
          width="50"
          height="50"
          className="layer top-1/2 left-1/2"
          data-speed="1"
          viewBox="0 0 170 169"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M85 20.2073L99.2523 66.043L100.564 70.2614H104.982H151.818L113.703 99.1983L110.353 101.742L111.602 105.759L126.022 152.133L88.6281 123.744L85 120.99L81.3719 123.744L43.9784 152.133L58.3983 105.759L59.6473 101.742L56.2969 99.1983L18.1817 70.2614H65.0183H69.436L70.7477 66.043L85 20.2073Z"
            stroke="#8A1FDE"
            stroke-width="12"
          />
        </svg>
      </div>
    </section>
  );
};

export default Paralex;
