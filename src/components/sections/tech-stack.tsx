import React from "react";
import { Card } from "@/components/ui/card";
import {
  SiReact,
  SiNodedotjs,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiBootstrap,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiGit,
} from "react-icons/si";

// Map skill names to icons
const iconMap: { [key: string]: React.ElementType } = {
  react: SiReact,
  nodejs: SiNodedotjs,
  tailwind: SiTailwindcss,
  html5: SiHtml5,
  css3: SiCss3,
  javascript: SiJavascript,
  bootstrap: SiBootstrap,
  express: SiExpress,
  mongodb: SiMongodb,
  mysql: SiMysql,
  git: SiGit,
};

// Map skill names to colors
const iconColors: { [key: string]: string } = {
  react: "#61DAFB",
  nodejs: "#339933",
  tailwind: "#06B6D4",
  html5: "#E34F26",
  css3: "#1572B6",
  javascript: "#F7DF1E",
  bootstrap: "#7952B3",
  express: "#0075C9",
  mongodb: "#47A248",
  mysql: "#4479A1",
  git: "#F05032",
};

// Skills array
const skills = [
  { name: "HTML5", icon: "html5" },
  { name: "CSS3", icon: "css3" },
  { name: "JavaScript", icon: "javascript" },
  { name: "Bootstrap", icon: "bootstrap" },
  { name: "Tailwind CSS", icon: "tailwind" },
  { name: "React", icon: "react" },
  { name: "Node.js", icon: "nodejs" },
  { name: "Express.js", icon: "express" },
  { name: "MongoDB", icon: "mongodb" },
  { name: "MySQL", icon: "mysql" },
  { name: "Git", icon: "git" },
];

export function TechStack() {
  return (
    <section id="tech-stack" className="bg-background py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center gap-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">
            My Tech Stack
          </h2>
          <p className="max-w-[700px] text-muted-foreground md:text-lg">
            The tools and technologies I use to bring ideas to life.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {skills.map((skill) => {
            const Icon = iconMap[skill.icon];
            const color = iconColors[skill.icon] || "#000";
            return (
              <Card
                key={skill.name}
                className="flex flex-col items-center justify-center p-6 text-center transition-transform hover:scale-105 hover:shadow-lg"
              >
                {Icon ? <Icon className="h-12 w-12 mb-4" color={color} /> : null}
                <p className="font-semibold">{skill.name}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
