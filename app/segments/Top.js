import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { social } from "../data/social";
import Clock from "../components/Clock";

const Top = () => {
  return (
    <div className="min-h-screen flex justify-center items-center" id="home">
      <Clock />
      <div className="px-5 w-full lg:w-2/3 z-[10]">
        <p className=" lg:p-16 text-6xl">Hey, I'm Sean</p>
        <div className="flex items-center gap-9 py-10 lg:pl-16">
          {social.map((item, idx) => (
            <a
              key={idx}
              rel="noopener noreferrer"
              target="_blank"
              href={item.link}
              className="group"
            >
              <FontAwesomeIcon
                icon={item.icon}
                size="2xl"
                className="group-hover:text-green-300 transition duration-150"
              />
            </a>
          ))}
        </div>
        <p className="text-2xl lg:pl-16">
          I am a web developer based in Washington DC with a passion for clean
          efficient code and SEO-friendly websites
        </p>
      </div>
    </div>
  );
};

export default Top;
