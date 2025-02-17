import IntroCard from "./components/IntroCard";
import Button from "./components/Button";
import TextScroll from "./components/TextScroll";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import "./styles/Home.css"

const Home = () => {

  function clicked() {
    alert("you clicked me")
  }

  return (
    <div>
      <div className="flex flex-col w-screen justify-center items-center">
        <div className="px-8 xl:h-25 lg:h-25 md:h-25 h-27 w-[90%] 2xl:max-w-[1350px] flex items-center flex-col place-content-center space-y-2 md:justify-between md:flex-row md:space-y-0">
          <Name />
          <div className="flex flex-row space-x-2">
            <Button label={"About"} onClick={clicked} />
            <Button label={"Experience"} onClick={clicked} />
            <Button label={"Projects"} onClick={clicked} />
          </div>
        </div>
      </div>
      <IntroCard />
      <TextScroll />
      <div className="flex flex-col space-y-15">
        <About />
        <Experience />
        <Projects />
      </div>
      <TextScroll />
    </div>
  );
}

export default Home;

const Name = () => {
  return <h1 className="text-2xl font-secondary">Manav Trivedi</h1>;
}