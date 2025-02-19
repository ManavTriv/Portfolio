import { useRef, useState, useEffect } from "react";
import "./styles/Home.css";
import IntroCard from "./components/Intro";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Navbar from "./components/Navbar";

const SectionDivider = () => <div className="w-full border-t-1 my-10 border-stone-500" />;

const Home = () => {
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const [navbarScrolled, setNavbarScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setNavbarScrolled(window.scrollY > 0);
    const debouncedScroll = debounce(handleScroll, 100);
    window.addEventListener("scroll", debouncedScroll);
    return () => window.removeEventListener("scroll", debouncedScroll);
  }, []);

  const scrollToSection = (ref) => {
    if (ref?.current) {
      const navbarHeight = 80; 
      const offset = ref.current.offsetTop - navbarHeight;
      window.scrollTo({ top: offset, behavior: "smooth" });
    }
  };

  const handleHomeClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="bg-[#fffefb] min-h-screen relative overflow-hidden">
      <div className="blob blob-1" />
      <div className="blob blob-2" />

      <Navbar
        scrolled={navbarScrolled}
        scrollToAbout={() => scrollToSection(aboutRef)}
        scrollToExperience={() => scrollToSection(experienceRef)}
        scrollToProjects={() => scrollToSection(projectsRef)}
        handleHomeClick={handleHomeClick}
      />

      <div className="flex flex-col w-[90%] xl:max-w-[1100px] items-center justify-center mx-auto pt-10 md:pt-20 relative z-10">
        <IntroCard />
        <div className="w-[95%]">
          <SectionDivider />
          <div ref={aboutRef} className="scroll-mt-10 md:scroll-mt-20">
            <About />
          </div>
          <SectionDivider />
          <div ref={experienceRef} className="scroll-mt-10 md:scroll-mt-20">
            <Experience />
          </div>
          <SectionDivider />
          <div ref={projectsRef} className="scroll-mt-10 md:scroll-mt-20">
            <Projects />
          </div>
          <SectionDivider />
        </div>
      </div>
    </div>
  );
};

const debounce = (func, delay) => {
  let timeoutId;
  return (...args) => {
    if (timeoutId) clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  };
};

export default Home;