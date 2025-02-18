import { Ghost } from "lucide-react";

// eslint-disable-next-line react/prop-types
const Navbar = ({scrolled, scrollToAbout, scrollToExperience, scrollToProjects, handleHomeClick,}) => {
  return (
    <div
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-[2px] bg-transparent" : ""
      }`}
    >
      <div className="flex sm:flex-row items-center sm:justify-between flex-col justify-center w-[90%] xl:max-w-[1100px] mx-auto sm:h-20 h-20 px-8">
        <a
          onClick={handleHomeClick}
          className="flex flex-row space-x-2 font-secondary font-medium items-center text-center text-base cursor-pointer text-stone-800 hover:text-indigo-300 transition-all duration-300"
        >
          <span>manav trivedi</span>
          <Ghost className="w-5 h-5" />
        </a>

        <div className="flex flex-row space-x-3">
          <a
            onClick={scrollToAbout}
            className="font-secondary font-medium text-base underline decoration-indigo-300 underline-offset-5 cursor-pointer text-stone-800 hover:text-indigo-300 transition-all duration-300"
          >
            about
          </a>
          <span className="font-secondary text-lg">/</span>
          <a
            onClick={scrollToExperience}
            className="font-secondary font-medium text-base underline decoration-indigo-300 underline-offset-5 cursor-pointer text-stone-800 hover:text-indigo-300 transition-all duration-300"
          >
            experience
          </a>
          <span className="font-secondary text-lg">/</span>
          <a
            onClick={scrollToProjects}
            className="font-secondary font-medium text-base underline decoration-indigo-300 underline-offset-5 cursor-pointer text-stone-800 hover:text-indigo-300 transition-all duration-300"
          >
            projects
          </a>
        </div>
      </div>
    </div>
  );
};


export default Navbar;