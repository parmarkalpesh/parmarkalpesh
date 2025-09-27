import type { ImagePlaceholder } from './placeholder-images';
import { PlaceHolderImages } from './placeholder-images';

const getImage = (id: string): ImagePlaceholder => {
  const image = PlaceHolderImages.find((img) => img.id === id);
  if (!image) {
    // Fallback image
    return {
      id: 'fallback',
      imageUrl: 'https://picsum.photos/seed/fallback/600/400',
      description: 'A fallback image',
      imageHint: 'abstract',
    };
  }
  return image;
};

export const projects = [
  {
    title: "GreenStation",
    description: "A sustainable platform for finding E-Vehicle charging point stations.",
    image: getImage('project-1'),
    stack: ["React.js", "Node.js","Express.js" ,"MongoDB", "Tailwind CSS"],
    // liveUrl: "#",
    codeUrl: "https://github.com/parmarkalpesh/GreenStation.git",
  },
  {
    title: "SkillHub",
    description: "A student skill-sharing platform between friends with follow & following features, including Google authentication.",
    image: getImage('project-2'),
    stack: ["React.js","Node.js", "Express.js", "Mongo Atlas", "Tailwind CSS"],
    // liveUrl: "#",
    codeUrl: "https://github.com/KrutikNaina/SkillHub-Frontend.git",
  },
  {
    title: "Tourism Booking Website",
    description: "A platform for booking and managing travel itineraries.",
    image: getImage('project-3'),
    stack: ["HTML5", "CSS3", "JavaScript", "Bootstrap","PHP", "MySQL"],
    // liveUrl: "#",
    codeUrl: "https://github.com/parmarkalpesh/krishnatourism.git",
  },
  {
    title: "NGOConnect",
    description: "A platform for NGO connectivity and collaboration.",
    image: getImage('project-4'),
    stack: ["React.js","Node.js", "Express.js", "Mongo Atlas", "Tailwind CSS"],
    codeUrl: "https://github.com/parmarkalpesh/NGO.git",
  },
];

export const experiences = [
  {
    company: "CodSoft",
    role: "Web Development Intern",
    duration: "3 Month",
    description: "Developed and deployed a responsive web application using HTML5, CSS3, and JavaScript.",
  },
  {
    company: "Aushvera",
    role: "Web Development Intern",
    duration: "3 Month",
    description: "Developed and deployed a responsive web application using HTML5, CSS3, and JavaScript, PHP, MySQL collaborating with developers through GitHub for version control.",
  },
  {
    company: "Aptivison",
    role: "Web Development Intern",
    duration: "pursuing",
    description: "Developed and deployed a responsive web application using React.js with related library useing collaborating with developers through GitHub for version control.",
  },
  {
    company: "Navkalpit",
    role: "Web Development Intern",
    duration: "pursuing",
    description: "Developed and deployed a responsive web application using React.js with related library useing collaborating with developers through GitHub for version control.",
  },
];

export const education = [
    {
        institution: "Marwadi University",
        degree: "Master of Computer Application (MCA)",
        duration: "2023 - Present",
    },
    {
        institution: "Marwadi University",
        degree: "Bachelor of Computer Application (BCA)",
        duration: "2020 - 2023",
    }
];

export const skills = [
    { name: "HTML5", icon: "html5" },
    { name: "CSS3", icon: "css3" },
    { name: "JavaScript", icon: "javascript" },
    { name: "React.js", icon: "react" },
    { name: "Next.js", icon: "nextjs" },
    { name: "Node.js", icon: "nodejs" },
    { name: "Tailwind CSS", icon: "tailwind" },
    { name: "Bootstrap", icon: "bootstrap" },
    { name: "Express.js", icon: "express" },
    { name: "MongoDB", icon: "mongodb" },
    { name: "MySQL", icon: "mysql" },
    { name: "Git", icon: "git" },
];
