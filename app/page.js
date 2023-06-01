import AnimatedBar from "./components/AnimatedBar";
import { Top, About, GallerySegment, Works, Contact } from "./segments";

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
