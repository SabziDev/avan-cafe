/* eslint-disable @eslint-react/immutability */

import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useEffect, useState } from "react";

const useParallax = (factor, isLargeScreen) => {
  const [size, setSize] = useState({
    width: 0,
    height: 0,
  });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const deviceX = useMotionValue(0);
  const deviceY = useMotionValue(0);

  useEffect(() => {
    const updateSize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    const handlePointerMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleOrientation = (e) => {
      if (e.beta === null || e.gamma === null) return;

      deviceX.set(e.gamma / 45);
      deviceY.set(e.beta / 45);
    };

    const setupOrientation = async () => {
      if (isLargeScreen || typeof DeviceOrientationEvent === "undefined") {
        return;
      }

      if (typeof DeviceOrientationEvent.requestPermission === "function") {
        try {
          const permission = await DeviceOrientationEvent.requestPermission();

          if (permission !== "granted") return;
        } catch {
          return;
        }
      }

      window.addEventListener("deviceorientation", handleOrientation);
    };

    updateSize();

    window.addEventListener("resize", updateSize);
    window.addEventListener("pointermove", handlePointerMove);

    setupOrientation();

    return () => {
      window.removeEventListener("resize", updateSize);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("deviceorientation", handleOrientation);
    };
  }, [isLargeScreen, mouseX, mouseY, deviceX, deviceY]);

  const mouseXPercent = useTransform(mouseX, (value) => {
    if (!size.width) return 0;

    return (value - size.width / 2) / (size.width / 2);
  });

  const mouseYPercent = useTransform(mouseY, (value) => {
    if (!size.height) return 0;

    return (value - size.height / 2) / (size.height / 2);
  });

  const x = useTransform(
    [mouseXPercent, deviceX],
    ([mouse, device]) => (mouse + (isLargeScreen ? 0 : device)) * factor,
  );

  const y = useTransform(
    [mouseYPercent, deviceY],
    ([mouse, device]) => (mouse + (isLargeScreen ? 0 : device)) * factor,
  );

  return {
    x: useSpring(x, {
      stiffness: 50,
      damping: 15,
    }),
    y: useSpring(y, {
      stiffness: 50,
      damping: 15,
    }),
  };
};

const HeaderParallax = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const updateScreen = () => {
      setIsLargeScreen(window.innerWidth >= 1280);
    };

    updateScreen();

    window.addEventListener("resize", updateScreen);

    return () => window.removeEventListener("resize", updateScreen);
  }, []);

  const mainParallax = useParallax(isLargeScreen ? 2 : 10, isLargeScreen);

  const coffeeParallax = useParallax(-10, isLargeScreen);

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

      {isLargeScreen && (
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
