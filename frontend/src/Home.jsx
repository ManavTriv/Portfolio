import "./styles/Home.css"
import IntroCard from "./components/IntroCard";

const Home = () => {
    return (
      <div className="bg-[#fffefb] min-h-screen">
        <div className="absolute top-[7%] left-[25%] w-[15%] h-[20%] bg-gradient-to-r from-indigo-400 to-indigo-100 opacity-40 rounded-full blur-3xl"></div>
        <div className="absolute top-[50%] right-[25%] w-[15%] h-[20%] bg-gradient-to-r from-blue-400 to-indigo-100 opacity-40 rounded-full blur-3xl"></div>
        <div className="flex flex-col w-[90%] xl:max-w-[1100px] items-center justify-center mx-auto">
          <Navbar />
          <IntroCard />
          <div className="w-full border-t-1"></div>
        </div>
      </div>
    );
}

export default Home

const Navbar = () => {
    return (
      <div className="flex flex-row items-center justify-between w-full h-23 px-8">
        <a className="font-secondary font-medium text-center text-lg cursor-pointer text-stone-800 hover:text-indigo-300 transition-all duration-300">
          manav trivedi ☃️
        </a>
        <div className="flex flex-row space-x-3">
          <a className="font-secondary font-medium text-lg underline decoration-indigo-300 underline-offset-5 cursor-pointer text-stone-800 hover:text-indigo-300 transition-all duration-300">
            about
          </a>
          <span className="font-secondary text-lg">/</span>
          <a className="font-secondary font-medium text-lg underline decoration-indigo-300 underline-offset-5 cursor-pointer text-stone-800 hover:text-indigo-300 transition-all duration-300">
            projects
          </a>
        </div>
      </div>
    );
} 