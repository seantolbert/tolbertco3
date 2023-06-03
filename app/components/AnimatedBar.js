"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const AnimatedBar = () => {
  const barsRef = useRef(null);

  useEffect(() => {
    const bars = barsRef.current.children;

    gsap.set(bars, { transformOrigin: "50% 50%" });
    gsap.fromTo(
      bars,
      {
        rotate: 57,
      },
      {
        rotate: 63,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        duration: 4,
        stagger: 0.3,
        delay: 1,
      }
    );
    gsap.to(bars, {
      opacity: 1,
      ease: "power1.inOut",
      duration: 4,
      stagger: 0.3,
    });
  }, []);

  return (
    <div
      ref={barsRef}
      className="absolute h-screen w-full flex justify-end items-center overflow-x-clip pointer-events-none"
    >
      <div className="w-24 h-[600vh] rounded-full bg-blue-800 opacity-0"></div>

      <div className="w-24 h-[600vh] rounded-full bg-green-800 opacity-0"></div>

      <div className="w-24 h-[600vh] rounded-full bg-yellow-800 opacity-0"></div>

      <div className="w-24 h-[600vh] rounded-full bg-rose-800 opacity-0"></div>
    </div>
  );
};
export default AnimatedBar;
