"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { social } from "../data/social";
import Clock from "../components/Clock";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Top = () => {
  const buttonRefs = useRef([]);

  useEffect(() => {
    const buttons = buttonRefs.current;
    gsap.set(buttons, { opacity: 0 });

    buttons.forEach((button, idx) => {
      gsap.to(button.current, { opacity: 1, delay: 0.5 * (idx + 1) });
    });
  }, []);

  return (
    <div
      className="min-h-screen flex justify-center items-center relative"
      id="home"
    >
      <Clock />
      <div className="px-5 w-full lg:w-2/3 z-[10]">
        
        <p className="lg:p-16 text-6xl appear">Hey, I'm Sean</p>

        <div className="flex items-center gap-9 py-10 lg:pl-16">
          {social.map((item, idx) => {
            return (
              <a
                ref={(el) => (buttonRefs.current[idx] = el)}
                key={idx}
                rel="noopener noreferrer"
                target="_blank"
                href={item.link}
                className="group flex items-center justify-center w-10 h-10"
              >
                <FontAwesomeIcon
                  icon={item.icon}
                  className="group-hover:text-green-300 transition duration-200 w-10 h-10"
                />
              </a>
            );
          })}
        </div>

        <p className="appear uppercase lg:pl-16 text-slate-200 tracking-[2px]">
          I am a web developer based in Washington DC
        </p>
      </div>
    </div>
  );
};

export default Top;
