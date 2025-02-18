import { useRef, useState, useEffect } from "react";
import "./styles/Home.css";
import IntroCard from "./components/IntroCard";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Navbar from "./components/Navbar";

const Home = () => {
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const [navbarScrolled, setNavbarScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setNavbarScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (ref) => {
    if (ref?.current) {
      const navbarHeight = 80; 
      const offset = ref.current.offsetTop - navbarHeight;
      window.scrollTo({
        top: offset,
        behavior: "smooth",
      });
    }
  };

  const handleHomeClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="bg-[#fffefb] min-h-screen relative">

      <Navbar
        scrolled={navbarScrolled}
        scrollToAbout={() => scrollToSection(aboutRef)}
        scrollToExperience={() => scrollToSection(experienceRef)}
        scrollToProjects={() => scrollToSection(projectsRef)}
        handleHomeClick={handleHomeClick}
      />

      <div className="flex flex-col w-[90%] xl:max-w-[1100px] items-center justify-center mx-auto pt-20">
        <IntroCard />
        <div className="w-full border-t-1 mt-3"></div>
        <div ref={aboutRef} className="scroll-mt-20">
          <About />
        </div>
        <div className="w-full border-t-1 mt-3"></div>
        <div ref={experienceRef} className="scroll-mt-20">
          <Experience />
        </div>
        <div className="w-full border-t-1 mt-3"></div>
        <div ref={projectsRef} className="scroll-mt-20">
          <Projects />
        </div>
      </div>
    </div>
  );
};

export default Home;