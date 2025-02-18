const IntroCard = () => {
  return (
    <div className="flex flex-row items-center justify-center mx-auto w-[90%] h-100 my-5">
      <div className="flex flex-col p-10 h-full w-[50%]">
        <p className="font-secondary font-medium text-4xl">hi i'm manav</p>
        <p className="font-secondary font-medium text-4xl">
          i am currently a student @ UQ
        </p>
        <div className="flex flex-col mt-10">
          <p className="font-secondary text-lg pb-2 text-stone-800 ">
            heres where you can find me
          </p>
          <a className="font-secondary text-lg font-medium underline decoration-indigo-300 underline-offset-5 cursor-pointer text-stone-800 hover:text-indigo-300 transition-all duration-300">
            linkedin
          </a>
          <a className="font-secondary text-lg font-medium underline decoration-indigo-300 underline-offset-5 cursor-pointer text-stone-800 hover:text-indigo-300 transition-all duration-300">
            github
          </a>
          <a className="font-secondary text-lg font-medium underline decoration-indigo-300 underline-offset-5 cursor-pointer text-stone-800 hover:text-indigo-300 transition-all duration-300">
            email
          </a>
          <a className="font-secondary text-lg font-medium underline decoration-indigo-300 underline-offset-5 cursor-pointer text-stone-800 hover:text-indigo-300 transition-all duration-300">
            resume
          </a>
        </div>
      </div>
      <div className="h-full w-[50%]"></div>
    </div>
  );
};
export default IntroCard;
