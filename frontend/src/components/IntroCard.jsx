import { Linkedin, Github, Mail, FileUser } from "lucide-react";

const IntroCard = () => {
  return (
    <div className="flex md:flex-row flex-col items-center justify-center mx-auto w-[90%]">
      <div className="flex flex-col p-10 h-full md:w-[50%] w-full">
        <p className="font-secondary font-medium md:text-4xl text-3xl">
          hi i'm manav,
        </p>
        <p className="font-secondary font-medium md:text-4xl text-3xl">
          i'm currently a student @ UQ
        </p>
        <div className="flex flex-col space-y-2 mt-10">
          <p className="font-secondary text-base pb-2 text-stone-800 ">
            heres where you can find me
          </p>
          <a className="font-secondary text-base font-medium underline decoration-indigo-300 underline-offset-5 cursor-pointer text-stone-800 hover:text-indigo-300 transition-all duration-300">
            <span className="flex flex-row items-center space-x-2">
              <Linkedin className="w-5 h-5" />
              <span>linkedin</span>
            </span>
          </a>
          <a className="font-secondary text-base font-medium underline decoration-indigo-300 underline-offset-5 cursor-pointer text-stone-800 hover:text-indigo-300 transition-all duration-300">
            <span className="flex flex-row items-center space-x-2">
              <Github className="w-5 h-5" />
              <span>github</span>
            </span>
          </a>
          <a className="font-secondary text-base font-medium underline decoration-indigo-300 underline-offset-5 cursor-pointer text-stone-800 hover:text-indigo-300 transition-all duration-300">
            <span className="flex flex-row items-center space-x-2">
              <Mail className="w-5 h-5" />
              <span>email</span>
            </span>
          </a>
          <a className="font-secondary text-base font-medium underline decoration-indigo-300 underline-offset-5 cursor-pointer text-stone-800 hover:text-indigo-300 transition-all duration-300">
            <span className="flex flex-row items-center space-x-2">
              <FileUser className="w-5 h-5" />
              <span>resume</span>
            </span>
          </a>
        </div>
      </div>
      <div className="h-full w-[50%]"></div>
    </div>
  );
};
export default IntroCard;
