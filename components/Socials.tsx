import Image from "next/image";
import React from "react";

const socialLinks = [
  {
    link: "https://github.com/virendra-sirture05",
    icon: "/github.svg",
    name: "Github",
  },
  {
    link: "https://www.linkedin.com/in/virendra-sirture-b478a5320/",
    icon: "/linkedin.svg",
    name: "Linkedin",
  },
  {
    link: "https://leetcode.com/u/virendra_sirture05/",
    icon: "/leetcode.png.png",
    name: "Leetcode",
  },
  {
    link: "mailto:virendrasirture@gmail.com",
    icon: "/email.svg",
    name: "Email",
  },
];

const Socials = () => {
  return (
    <div className="mt-16 md:mt-28 px-4">
      <div className="flex flex-wrap justify-center items-center gap-2 md:gap-4">
        {socialLinks.map(({ link, icon, name }, idx) => (
          <a
            key={idx}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="px-2 py-2 w-full min-w-[90px] md:min-w-[106px] lg:w-32 flex justify-center items-center space-x-1 md:space-x-2 hover:bg-[#292929] border border-r-0 border-b-0 border-zinc-600 bg-[#000000] text-white transition duration-500 font-bold text-xs md:text-sm shadow-[1px_1px_rgba(80,80,80),1px_1px_rgba(80,80,80),3px_3px_rgba(80,80,80),4px_4px_rgba(80,80,80)]"
          >
            <Image
              src={icon}
              width={16}
              height={16}
              alt={`${name} icon`}
              className="md:w-5 md:h-5 text-white"
            />
            <p>{name}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Socials;
