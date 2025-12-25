import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";


const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 px-4 py-8 max-w-6xl mx-auto">
      <div className="text-center md:text-left">
        <h1 className="text-6xl font-bold">Hi,Virendra here</h1>
        <h2 className="text-lg font-bold">Full Stack Developer</h2>
        <div className="w-32 h-1 my-2 bg-white mx-auto md:mx-0"></div>
        <p className="text-md mb-4 max-w-md">
          🚀 Passionate Full Stack Developer with a strong focus on building
          robust and scalable applications. I love working on full-stack
          projects, tackling complex challenges, and delivering high-quality
          solutions. 💡
        </p>
        <div className="flex justify-center gap-4 md:justify-start">
          <Link
            href={"mailto:virendrasirture@gmail.com"}
            className="px-3 py-2 mt-2 w-fit flex justify-center items-center space-x-2 hover:bg-[#292929] border border-r-0 border-b-0 border-zinc-600 bg-[#000000] text-white transition duration-500 font-bold text-sm shadow-[1px_1px_rgba(80,80,80),1px_1px_rgba(80,80,80),3px_3px_rgba(80,80,80),4px_4px_rgba(80,80,80)] cursor-pointer"
          >
            <FaArrowRight />
            <p className="ml-2">Open to Work</p>
          </Link>
          <a
            href="/VirendraResume.pdf"
            download="VirendraSirture.pdf"
            className="px-3 py-2 mt-2 w-fit flex justify-center items-center space-x-2 hover:bg-[#292929] border border-r-0 border-b-0 border-zinc-600 bg-[#000000] text-white transition duration-500 font-bold text-sm shadow-[1px_1px_rgba(80,80,80),1px_1px_rgba(80,80,80),3px_3px_rgba(80,80,80),4px_4px_rgba(80,80,80)] cursor-pointer"
          >
            <FaArrowRight />
            <span className="ml-2">Download Resume</span>
          </a>{" "}
        </div>
      </div>
      <div className="mt-4 md:mt-0">
        <div className="rounded overflow-hidden hover:scale-110 focus-within:scale-110 transition-transform duration-300">
          <Image
            src={"/photo.jpg"}
            alt="profile"
            width={250}
            height={250}
            tabIndex={0}
            className="outline-none"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
