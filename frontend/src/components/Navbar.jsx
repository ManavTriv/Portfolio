import { Ghost } from "lucide-react";
import clsx from "clsx";
import PropTypes from "prop-types";

const Navbar = ({scrolled, scrollToAbout, scrollToExperience, scrollToProjects, handleHomeClick}) => {

  const navLinkClass = "font-secondary font-medium text-base underline decoration-indigo-300 underline-offset-5 cursor-pointer text-stone-800 hover:text-indigo-300 transition-all duration-300";

  return (
    <nav
      className={clsx(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled && "backdrop-blur-[1.5px] bg-transparent"
      )}
    >
      <div className="flex sm:flex-row items-center sm:justify-between flex-col justify-center w-[90%] xl:max-w-[1100px] mx-auto min-h-20 px-8">
        <a
          onClick={handleHomeClick}
          className="flex flex-row space-x-2 font-secondary font-medium items-center text-center text-base cursor-pointer text-stone-800 hover:text-indigo-300 transition-all duration-300"
        >
          <span>manav trivedi</span>
          <Ghost className="w-5 h-5" />
        </a>

        <div className="flex flex-row space-x-6">
          <a
            onClick={scrollToAbout}
            role="button"
            tabIndex={0}
            className={navLinkClass}
          >
            about
          </a>
          
          <a
            onClick={scrollToExperience}
            role="button"
            tabIndex={0}
            className={navLinkClass}
          >
            experience
          </a>
          
          <a
            onClick={scrollToProjects}
            role="button"
            tabIndex={0}
            className={navLinkClass}
          >
            projects
          </a>
        </div>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  scrolled: PropTypes.bool.isRequired,
  scrollToAbout: PropTypes.func.isRequired,
  scrollToExperience: PropTypes.func.isRequired,
  scrollToProjects: PropTypes.func.isRequired,
  handleHomeClick: PropTypes.func.isRequired,
};

export default Navbar;
