import AnimatedBar from "./components/AnimatedBar";
import { About, GallerySegment, Works, Contact, Top } from "./segments";

const Home = () => {
  return (
    <>
      <AnimatedBar />
      <Top />
      <About />
      <GallerySegment />
      <Works />
      <Contact />
    </>
  );
};

export default Home;
