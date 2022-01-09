import React, { useState, useEffect, useCallback, useRef } from "react";
import { useEventListener } from "./hooks/useEventListener";
import IsDevice from "./helpers/IsDevice.js";
import { motion } from "framer-motion";
import { useCursorContext } from "../src/context/cursorstate";
import { useSmoothScrollContext } from "../src/context/SmoothScroll.context";

/**
 * Cursor Core
 * Replaces the native cursor with a custom animated cursor, consisting
 * of an inner and outer dot that scale inversely based on hover or click.
 *
 * @author Stephen Scaff (github.com/stephenscaff)
 *
 * @param {string} color - rgb color value
 * @param {number} outerAlpha - level of alpha transparency for color
 * @param {number} innerSize - inner cursor size in px
 * @param {number} innerScale - inner cursor scale amount
 * @param {number} outerSize - outer cursor size in px
 * @param {number} outerScale - outer cursor scale amount
 *
 */

export function projectEnter(event) {
  setCursorText("Case Study");
  setCursorVariant("project");
}

export function projectLeave(event) {
  setCursorText("");
  setCursorVariant("default");
}

export function contactEnter(event) {
  setCursorText("👋");
  setCursorVariant("contact");
}

export function contactLeave(event) {
  setCursorText("");
  setCursorVariant("default");
}
function CursorCore({
  color = "220, 90, 90",
  outerAlpha = 0.3,
  innerSize = 8,
  innerScale = 0.7,
  outerSize = 18,
  outerScale = 5,
  trailingSpeed = 8,
}) {
  const cursorOuterRef = useRef();
  const cursorInnerRef = useRef();
  const [cursorVariant, setCursorVariant] = useState("default");
  const requestRef = useRef();
  const previousTimeRef = useRef();
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isActiveClickable, setIsActiveClickable] = useState(false);
  const { cursorState, setCursorState, cursorText } = useCursorContext();
  const { scroll } = useSmoothScrollContext();
  let endX = useRef(0);
  let endY = useRef(0);

  // Primary Mouse Move event
  const onMouseMove = useCallback(({ clientX, clientY }) => {
    setCoords({ x: clientX, y: clientY });
    //cursorInnerRef.current.style.top = `${clientY}px`;
    //cursorInnerRef.current.style.left = `${clientX}px`;
    endX.current = clientX;
    endY.current = clientY;
  }, []);

  // Outer Cursor Animation Delay
  // const animateOuterCursor = useCallback(
  //   (time) => {
  //     if (previousTimeRef.current !== undefined) {
  //       coords.x += (endX.current - coords.x) / trailingSpeed;
  //       coords.y += (endY.current - coords.y) / trailingSpeed;
  //       cursorOuterRef.current.style.top = `${coords.y}px`;
  //       cursorOuterRef.current.style.left = `${coords.x}px`;
  //     }
  //     previousTimeRef.current = time;
  //     requestRef.current = requestAnimationFrame(animateOuterCursor);
  //   },
  //   [requestRef] // eslint-disable-line
  // );

  // RAF for animateOuterCursor
  // useEffect(() => {
  //   requestRef.current = requestAnimationFrame(animateOuterCursor);
  //   return () => {
  //     cancelAnimationFrame(requestRef.current);
  //   };
  // }, [animateOuterCursor]);

  // Mouse Events State updates
  const onMouseDown = useCallback(() => {
    setCursorState("click");
    setIsActive(true);
  }, []);

  const onMouseUp = useCallback(() => {
    setCursorState("default");

    setIsActive(false);
  }, []);

  const onMouseEnterViewport = useCallback(() => {
    setIsVisible(true);
  }, []);

  const onMouseLeaveViewport = useCallback(() => {
    setIsVisible(false);
  }, []);

  useEventListener("mousemove", onMouseMove);
  useEventListener("mousedown", onMouseDown);
  useEventListener("mouseup", onMouseUp);
  useEventListener("mouseover", onMouseEnterViewport);
  useEventListener("mouseout", onMouseLeaveViewport);

  // Cursors Hover/Active State
  useEffect(() => {
    if (isActive) {
      cursorOuterRef.current.style.transform = `translate(-50%, -50%) scale(${outerScale})`;
    } else {
      cursorOuterRef.current.style.transform = "translate(-50%, -50%) scale(1)";
    }
  }, [innerScale, outerScale, isActive]);

  // Cursors Click States
  useEffect(() => {
    if (isActiveClickable) {
      cursorInnerRef.current.style.transform = `translate(-50%, -50%) scale(${
        innerScale * 1.2
      })`;
      cursorOuterRef.current.style.transform = `translate(-50%, -50%) scale(${
        outerScale * 1.4
      })`;
    }
  }, [innerScale, outerScale, isActiveClickable]);

  // Cursor Visibility State
  useEffect(() => {
    if (isVisible) {
      cursorInnerRef.current.style.opacity = 1;
      cursorOuterRef.current.style.opacity = 0;
    } else {
      cursorInnerRef.current.style.opacity = 0;
      cursorOuterRef.current.style.opacity = 0;
    }
  }, [isVisible]);

  useEffect(() => {
    if (scroll) {
      scroll.on("scroll", (instance) => {
        let customCursor = document.querySelector(".circle");
        let scrollPx = instance.scroll.y + "px";
        customCursor.style.top = scrollPx;
      });
    }
  });

  // Target all possible clickables
  useEffect(() => {
    const clickables = document.querySelectorAll(
      'a, input[type="submit"], input[type="image"], label[for], select, button, .link'
    );
    clickables.forEach((el) => {
      el.style.cursor = "none";

      el.addEventListener("mouseover", () => {
        setIsActive(true);
      });
      el.addEventListener("click", () => {
        setIsActive(true);
        setIsActiveClickable(false);
      });
      el.addEventListener("mousedown", () => {
        setIsActiveClickable(true);
      });
      el.addEventListener("mouseup", () => {
        setIsActive(true);
      });
      el.addEventListener("mouseout", () => {
        setIsActive(false);
        setIsActiveClickable(false);
      });
    });

    return () => {
      clickables.forEach((el) => {
        el.removeEventListener("mouseover", () => {
          setIsActive(true);
        });
        el.removeEventListener("click", () => {
          setIsActive(true);
          setIsActiveClickable(false);
        });
        el.removeEventListener("mousedown", () => {
          setIsActiveClickable(true);
        });
        el.removeEventListener("mouseup", () => {
          setIsActive(true);
        });
        el.removeEventListener("mouseout", () => {
          setIsActive(false);
          setIsActiveClickable(false);
        });
      });
    };
  }, [isActive]);

  const variants = {
    default: {
      opacity: 1,
      height: 30,
      width: 30,
      border: "2px solid #4e84b8",
      fontSize: "12px",
      backgroundColor: "transparent",
      x: coords.x - 15,
      y: coords.y - 15,
      transition: {
        type: "spring",
        mass: 0.6,
      },
    },
    leftNav: {
      opacity: 1,
      height: 15,
      width: 15,
      border: "2px solid #1e91d6",
      fontSize: "12px",
      backgroundColor: "#4e84b8",
      x: coords.x - 5,
      y: coords.y - 5,
    },
    click: {
      opacity: 1,
      height: 30,
      width: 30,
      scale: 0.3,
      border: "2px solid #1e91d6",
      fontSize: "16px",
      backgroundColor: "transparent",
      x: coords.x - 15,
      y: coords.y - 15,
      transition: {
        type: "spring",
        mass: 0.6,
      },
    },
    project: {
      opacity: 1,
      //backgroundColor: "rgba(255, 255, 255, 0.6)",
      backgroundColor: "#111111",
      color: "#fff",
      height: 80,
      width: 80,
      border: "2px solid #111111",
      mixBlendMode: "normal",
      fontSize: "12px",
      x: coords.x - 32,
      y: coords.y - 32,
    },
    contact: {
      opacity: 1,
      backgroundColor: "#FFBCBC",
      color: "#000",
      height: 64,
      width: 64,
      fontSize: "32px",
      x: coords.x - 48,
      y: coords.y - 48,
    },
    hidden: {
      opacity: 0,
      height: 30,
      width: 30,
      border: "2px solid #1e91d6",
      fontSize: "16px",
      backgroundColor: "transparent",
      x: coords.x,
      y: coords.y,
      transition: {
        type: "spring",
        mass: 0.6,
      },
    },
  };

  // Cursor Styles

  // Hide / Show global cursor
  //document.body.style.cursor = "none";
  const spring = {
    type: "spring",
    stiffness: 500,
    damping: 28,
  };

  return (
    <React.Fragment>
      <motion.div
        variants={variants}
        animate={cursorState}
        transiton={spring}
        ref={cursorOuterRef}
        className="circle"
      >
        {" "}
        <span className=" cursorText ">{cursorText} </span>
      </motion.div>
      <div ref={cursorInnerRef} />
    </React.Fragment>
  );
}

/**
 * AnimatedCursor
 * Calls and passes props to CursorCore if not a touch/mobile device.
 */
function AnimatedCursor({
  color = "220, 90, 90",
  outerAlpha = 0.3,
  innerSize = 8,
  outerSize = 8,
  outerScale = 6,
  innerScale = 0.6,
  trailingSpeed = 8,
}) {
  if (typeof navigator !== "undefined" && IsDevice.any()) {
    return <React.Fragment></React.Fragment>;
  }
  return (
    <CursorCore
      color={color}
      outerAlpha={outerAlpha}
      innerSize={innerSize}
      innerScale={innerScale}
      outerSize={outerSize}
      outerScale={outerScale}
      trailingSpeed={trailingSpeed}
    />
  );
}

export default AnimatedCursor;
