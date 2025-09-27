import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Projects } from "@/components/sections/projects";
import { Experience } from "@/components/sections/experience";
import { Contact } from "@/components/sections/contact";
import { TechStack } from "@/components/sections/tech-stack";
import { Education } from "@/components/sections/education";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Education />
      <TechStack />
      <Projects />
      <Experience />
      <Contact />
    </>
  );
}
