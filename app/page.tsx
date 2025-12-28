import Collab from "@/components/Collab";
import Hero from "@/components/Hero";
import ParticlesBackground from "@/components/ParticlesBackground";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Socials from "@/components/Socials";
import Image from "next/image";

export default function Home() {
   return (
    <div className="relative overflow-hidden">
      <ParticlesBackground />
      {/* Decorative blobs with improved mobile responsiveness */}
      <div className="absolute top-20 right-0 -z-10 blur-xl h-40 w-40 md:h-72 md:w-72 rounded-full bg-purple-300 opacity-70 animation-delay-2000 filter"></div>
      <div className="absolute top-40 -left-4 -z-10 h-40 w-40 md:h-72 md:w-72 animate-blob animation-delay-2000 rounded-full bg-yellow-300 opacity-70 blur-xl filter"></div>
      <div className="absolute -bottom-8 left-10 -z-10 h-40 w-40 md:h-72 md:w-72 animate-blob animation-delay-4000 rounded-full bg-pink-300 opacity-70 blur-xl filter"></div>

      <div className="max-w-3xl m-auto pt-32 relative px-4">
        <Hero />
        <Socials />
        <Projects/>
        <Skills />
        <Collab />
      </div>
    </div>
  );
}


