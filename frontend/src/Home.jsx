import IntroCard from "./components/IntroCard";

function Home() {
  return (
    <div>
      <div className="flex flex-col w-screen justify-center items-center">
        <div className="xl:h-25 lg:h-25 md:h-25 h-27 w-[90%] 2xl:max-w-[1350px] pl-6 pr-6 flex items-center flex-col place-content-center space-y-2 md:justify-between md:flex-row md:space-y-0">
          <h1>Manav Trivedi</h1>
          <div className="flex flex-row space-x-4">
            <div className="border-1 h-10 w-23">About</div>
            <div className="border-1 h-10 w-23">Experience</div>
            <div className="border-1 h-10 w-23">Projects</div>
            <div className="border-1 size-10 rounded-full"></div>
          </div>
        </div>
      </div>
      <IntroCard />
    </div>
  );
}

export default Home;
