import "./globals.css";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tolbert & Co",
  description:
    "Welcome to John Doe's personal portfolio website, showcasing his expertise as a skilled software developer in web and mobile application development. Explore John's diverse range of projects, including front-end and back-end development, responsive design, and user-centric mobile apps. With a passion for creating seamless digital experiences, John combines technical proficiency with creativity to deliver innovative solutions. Browse through his impressive portfolio and discover how John's expertise can enhance your next software development project.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth bg-black ">
      <body
        className={[
          inter.className,
          "bg-black text-white flex flex-col items-center",
        ]}
      >
        <Toaster position="bottom-right" />
        {children}
        <Footer />
      </body>
    </html>
  );
}
