/* eslint-disable @eslint-react/immutability */

import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useEffect, useState } from "react";

const HeaderParallax = () => {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
    isLargeScreen: false,
  });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const updateWindowSize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      setWindowSize({
        width,
        height,
        isLargeScreen: width >= 1280,
      });
    };

    updateWindowSize();
    window.addEventListener("resize", updateWindowSize);

    return () => window.removeEventListener("resize", updateWindowSize);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const xPercent = useTransform(mouseX, (v) => {
    if (windowSize.width === 0) return 0;
    const centerX = windowSize.width / 2;

    return (v - centerX) / centerX;
  });

  const yPercent = useTransform(mouseY, (v) => {
    if (windowSize.height === 0) return 0;
    const centerY = windowSize.height / 2;

    return (v - centerY) / centerY;
  });

  const smoothX = useSpring(xPercent, { stiffness: 50, damping: 15 });
  const smoothY = useSpring(yPercent, { stiffness: 50, damping: 15 });

  const useParallax = (factor) => ({
    x: useTransform(smoothX, (v) => v * factor),
    y: useTransform(smoothY, (v) => v * factor),
  });

  const mainParallax = useParallax(2);
  const coffeeParallax = useParallax(-10);

  return (
    <>
      <motion.div
        className="absolute top-30 left-5 h-35 w-45 select-none min-[480px]:top-40 min-[540px]:top-45 min-[540px]:h-50 min-[540px]:w-60 sm:top-55 sm:left-5 sm:h-60 sm:w-70 md:top-52 md:left-15 md:size-auto lg:top-50 lg:left-45 2xl:top-44 2xl:left-10"
        style={mainParallax}
      >
        <img
          src="/images/pictures/pages/home/hero-section/coffee-main.webp"
          alt="Coffee bottle"
        />
      </motion.div>

      {windowSize.isLargeScreen && (
        <>
          <motion.div
            className="absolute top-55 -left-10 select-none"
            style={coffeeParallax}
          >
            <img
              src="/images/pictures/pages/home/hero-section/coffee-1.webp"
              alt="Coffee piece 1"
            />
          </motion.div>

          <motion.div
            className="absolute top-15 left-200 select-none 2xl:left-145"
            style={coffeeParallax}
          >
            <img
              src="/images/pictures/pages/home/hero-section/coffee-2.webp"
              alt="Coffee piece 2"
            />
          </motion.div>

          <motion.div
            className="absolute top-85 left-160 select-none 2xl:left-100"
            style={coffeeParallax}
          >
            <img
              src="/images/pictures/pages/home/hero-section/coffee-3.webp"
              alt="Coffee piece 3"
            />
          </motion.div>
        </>
      )}
    </>
  );
};

export default HeaderParallax;
