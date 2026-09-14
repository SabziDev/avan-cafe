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

  const deviceX = useMotionValue(0);
  const deviceY = useMotionValue(0);

  // Window Size
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

    return () => {
      window.removeEventListener("resize", updateWindowSize);
    };
  }, []);

  // Mouse Parallax
  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);

  // Device Orientation Parallax
  useEffect(() => {
    const handleDeviceOrientation = (e) => {
      const { beta, gamma } = e;

      if (beta === null || gamma === null) return;

      deviceX.set(gamma);
      deviceY.set(beta);
    };

    const requestOrientationPermission = async () => {
      if (
        typeof DeviceOrientationEvent !== "undefined" &&
        typeof DeviceOrientationEvent.requestPermission === "function"
      ) {
        try {
          const permission = await DeviceOrientationEvent.requestPermission();

          if (permission === "granted") {
            window.addEventListener(
              "deviceorientation",
              handleDeviceOrientation,
            );
          }
        } catch {
          // Permission denied
        }
      } else {
        window.addEventListener("deviceorientation", handleDeviceOrientation);
      }
    };

    requestOrientationPermission();

    return () => {
      window.removeEventListener("deviceorientation", handleDeviceOrientation);
    };
  }, [deviceX, deviceY]);

  // Mouse → Percentage
  const mouseXPercent = useTransform(mouseX, (value) => {
    if (windowSize.width === 0) return 0;

    const centerX = windowSize.width / 2;

    return (value - centerX) / centerX;
  });

  const mouseYPercent = useTransform(mouseY, (value) => {
    if (windowSize.height === 0) return 0;

    const centerY = windowSize.height / 2;

    return (value - centerY) / centerY;
  });

  // Device → Percentage
  const deviceXPercent = useTransform(deviceX, (value) => value / 45);

  const deviceYPercent = useTransform(deviceY, (value) => value / 45);

  // Smooth Mouse
  const smoothMouseX = useSpring(mouseXPercent, {
    stiffness: 50,
    damping: 15,
  });

  const smoothMouseY = useSpring(mouseYPercent, {
    stiffness: 50,
    damping: 15,
  });

  // Smooth Device
  const smoothDeviceX = useSpring(deviceXPercent, {
    stiffness: 50,
    damping: 15,
  });

  const smoothDeviceY = useSpring(deviceYPercent, {
    stiffness: 50,
    damping: 15,
  });

  // Small Screen → Mouse + Device
  const parallaxX = useTransform(
    [smoothMouseX, smoothDeviceX],
    ([mouse, device]) => (windowSize.isLargeScreen ? mouse : mouse + device),
  );

  const parallaxY = useTransform(
    [smoothMouseY, smoothDeviceY],
    ([mouse, device]) => (windowSize.isLargeScreen ? mouse : mouse + device),
  );

  const useParallax = (factor) => ({
    x: useTransform(parallaxX, (value) => value * factor),
    y: useTransform(parallaxY, (value) => value * factor),
  });

  // Large: 2
  // Small: 20
  const mainParallax = useParallax(windowSize.isLargeScreen ? 2 : 10);

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
