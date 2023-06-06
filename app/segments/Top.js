"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { social } from "../data/social";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Top = () => {
  const iconsRef = useRef(null);
  const lettersRef = useRef(null);
  const message = "Hey, I'm Sean";

  useEffect(() => {
    const letterContainer = lettersRef.current.children;

    // const lettersArr = message.split("");
    const icons = iconsRef.current.children;

    console.log(letterContainer);

    gsap.set(icons, { transformOrigin: "50% 50%" });

    // h1;

    gsap.fromTo(
      icons,
      {
        scale: 0,
        transformOrigin: "50% 50%",
      },
      {
        opacity: 1,
        scale: 1,
        duration: 2,
        ease: "power1.inOut",
        stagger: 0.5,
      }
    );
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-start">
      <div className="z-10 border bg-clip-text relative">
        <h1
          className="uppercase tracking-[10px] text-transparent text-9xl"
          ref={lettersRef}
        >
          {/* {message.split("").map((letter, idx) => (
            <div>
                <span>{letter}</span>
            </div>

          ))} */}
        </h1>
        <div className="flex gap-8" ref={iconsRef}>
          {social.map((item) => (
            <a
              href={item.link}
              key={item.link}
              className="flex items-center justify-center opacity-0 h-16 w-16 text-4xl relative group"
            >
              <div className="absolute rounded-full border w-full h-full scale-0 group-hover:scale-100 transition duration-400 origin-center"></div>
              <FontAwesomeIcon icon={item.icon} />
            </a>
          ))}
        </div>

        {/* <div className="h-full w-1/4 bg-blue-200 absolute -z-10"></div> */}
        {/* <div className="uppercase relative flex justify-center items-center bg-yellow-200">
          <span className="text-black text-lg z-20">T</span>
          <span className="text-white absolute font-bold text-2xl">T</span>
        </div> */}

        <p>I am web developer from Washington, DC</p>
      </div>
    </div>
  );
};

export default Top;
