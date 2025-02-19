import { Linkedin, Github, Mail, FileUser } from "lucide-react";

const IntroCard = () => {
  const links = [
    {
      icon: <Linkedin className="w-5 h-5" />,
      text: "linkedin",
      href: "https://au.linkedin.com/in/manav-trivedi-691688296",
    },
    {
      icon: <Github className="w-5 h-5" />,
      text: "github",
      href: "https://github.com/ManavTriv",
    },
    {
      icon: <Mail className="w-5 h-5" />,
      text: "email",
      href: "mailto:trivedimanav2003@gmail.com",
    },
    {
      icon: <FileUser className="w-5 h-5" />,
      text: "resume",
      href: "",
    },
  ];

 return (
    <section className="flex flex-col md:flex-row items-center justify-center mx-auto w-full max-w-6xl p-4 my-10">
      <div className="flex flex-col p-6 md:p-10 h-full md:w-[50%] w-full">
        <p className="font-secondary font-medium md:text-4xl text-3xl">
          hi, i'm manav,
        </p>
        <p className="font-secondary font-medium md:text-4xl text-3xl">
          and i'm currently a student @ UQ
        </p>
        <div className="flex flex-col space-y-2 mt-6 md:mt-10">
          <p className="font-secondary text-base pb-2 text-stone-800">
            here's where you can find me
          </p>
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.ariaLabel}
              className="font-secondary text-base font-medium underline decoration-indigo-300 underline-offset-5 cursor-pointer text-stone-800 hover:text-indigo-300 transition-all duration-300"
            >
              <span className="flex flex-row items-center space-x-2">
                {link.icon}
                <span>{link.text}</span>
              </span>
            </a>
          ))}
        </div>
      </div>
      <div className="h-full w-[50%]"></div>
    </section>
  );
};

export default IntroCard;