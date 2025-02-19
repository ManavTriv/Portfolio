import InfoCard from "./InfoCard";

const Experience = () => {
  return (
    <div className="px-5 flex flex-col space-y-8">
      <h1 className="font-secondary font-secondary font-medium md:text-2xl text-xl text-stone-800 hover:text-indigo-300 transition-all duration-300">
        my experience
      </h1>
      <div className="flex md:flex-row flex-col md:items-start items-center md:space-x-3 space-y-3 justify-center mb-2">
        <InfoCard />
        <InfoCard />
        <InfoCard />
      </div>
    </div>
  );
};

export default Experience;
