'use client'

import {
  faAt,
  faLocation,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { social } from "../data/social";

const Footer = () => {
  return (
    <div className="w-full flex flex-col items-center gap-5 pb-10">
      <div className="flex flex-col items-center ">
        <div className="flex gap-2 items-center">
          <FontAwesomeIcon icon={faAt} />
          <span>sean@tolbert.me</span>
        </div>
        <div className="flex gap-2 items-center">
          <FontAwesomeIcon icon={faPhoneAlt} />
          <span>240.429.9523</span>
        </div>
        <div className="flex gap-2 items-center">
          <FontAwesomeIcon icon={faLocation} />
          <span>Washington, DC</span>
        </div>
      </div>

      <div className="flex justify-center items-center gap-5">
        {social.map((item, idx) => (
          <a
            key={idx}
            rel="noopener noreferrer"
            target="_blank"
            href={item.link}
            className="flex gap-2"
          >
            <FontAwesomeIcon icon={item.icon} size="xl" />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Footer;
