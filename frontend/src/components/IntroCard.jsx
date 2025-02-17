const IntroCard = () => {
  return (
    <div className="flex justify-center">
      <div className="h-150 w-[90%] 2xl:max-w-[1350px] rounded-[60px] border flex place-content-center items-center">
        <IntroText />
      </div>
    </div>
  );
}
export default IntroCard;

const IntroText = () => {
  return (
    <p className="font-secondary text-center text-4xl w-[60%]">
      Hi I am Manav, and I am currently a student passionate about software
      engineering...
    </p>
  );
}
