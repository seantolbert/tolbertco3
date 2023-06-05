import AnimatedBar from "./components/AnimatedBar";
import { About, GallerySegment, Works, Contact } from "./segments";

const Home = () => {
  return (
    <>
      <AnimatedBar />
      <About />
      <GallerySegment />
      <Works />
      <Contact />
    </>
  );
};

export default Home;
