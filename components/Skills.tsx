import React from "react";
import { Marquee } from "./magicui/marquee";

const Skills = () => {
  return (
    <div className="my-24">
      <div>
        <p className="text-center text-4xl">Skills and Tools</p>
        <p className="text-center my-1">
          Checkout Technologies i am familier with
        </p>
      </div>
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden my-4">
        <Marquee pauseOnHover className="[--duration:20s]">
          <i className="devicon-nextjs-plain text-5xl mx-4"></i>
          <i className="devicon-java-plain colored text-5xl mx-4"></i>
          <i className="devicon-react-original colored text-5xl mx-4"></i>
          <i className="devicon-typescript-plain colored text-5xl mx-4"></i>
          <i className="devicon-javascript-plain colored text-5xl mx-4"></i>
          <i className="devicon-nodejs-plain colored text-5xl mx-4"></i>
          <i className="devicon-express-original colored text-5xl mx-4"></i>
          <i className="devicon-mongodb-plain-wordmark colored text-5xl mx-4"></i>
          <i className="devicon-tailwindcss-plain colored text-5xl mx-4"></i>
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
      </div>
    </div>
  );
};

export default Skills;
