import React from "react";
import Projectdata from "./Projectdata";

const projectsData = [
  {
     name: "PDF-Glow",
    description:
      " An AI powered plateform that turns long PDFs into quick summaries. Built it so people don't have to read entire documents to get the main points.",
    technologies: [
      "NextJs",
      "Typescript",
      "openai",
      "langchain",
      "shadcn",
      "Prisma",
      "Clerk",
      "Tailwind css",
      "prisma",
      "Zod"
    ],
    githubRepo: "https://github.com/virendra-sirture05/PDF-Glow",
    video: "/generate.mp4",
    projectID: 1,
  },
  {
    name: "Devswipe",
    description:
      "DevSwipe – A real-time, swipe-based MERN application that connects developers for collaboration through smart matching and  chat.",
    technologies: [
      "ReactJs",
      "NodeJs",
      "ExpressJs",
      "MongoDB",
      "WebSocket",
      "Redux toolkit",
      "Tailwind css",
    ],
    githubRepo: "",
    projectID: 2,
    video: "/peetcode.mp4",
  },
  {
    name: "ByteBlog",
    description:
      "Full-Stack Blog Platform - A modern blogging application where users can create, publish, and share their thoughts and stories with the world.",
    technologies: [
      "NextJs",
      "Typescript",
      "Prisma",
      "Clerk",
      "Tailwind css",
      "prisma",
      "Zod"
    ],
    githubRepo: "https://github.com/virendra-sirture05/ByteBlog",
    video: "/generate.mp4",
    projectID: 3,
  },
];

const Projects = () => {
  return (
    <div className="mb-10">
      <h1 className="text-center mt-20 mb-4 text-3xl">Projects</h1>
      <div className="flex flex-wrap justify-center gap-4">
        {projectsData.map((projectObj) => (
          <div key={projectObj.projectID} className="w-[350px]">
            <Projectdata projectObj={projectObj} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
