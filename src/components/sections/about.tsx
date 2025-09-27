import Image from "next/image";

export function About() {
  return (
    <section id="about" className="bg-background">
      <div className="container grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="relative aspect-square max-w-md mx-auto w-full">
          <Image
            src="/Kalpesh_Image.jpg"
            alt="Kalpesh Parmar"
            fill
            className="rounded-lg object-cover shadow-lg"
            data-ai-hint="professional portrait"
          />
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">About Me</h2>
          <p className="text-muted-foreground md:text-lg">
          As a Master of Computer Application (MCA) student at Marwadi University, with a Bachelor’s in Computer Application (BCA) and hands-on internship experience at CodSoft, I am eager to contribute my technical skills while gaining practical industry exposure.
          </p>
          <p className="text-muted-foreground md:text-lg">
          During my CodSoft internship, I developed and deployed a responsive web application using React.js and Node.js, collaborating with developers through GitHub for version control. Additionally, my academic projects such as GreenStation (a sustainable product marketplace) and SkillHub (a student skill-sharing platform) showcase my abilities in full-stack development, REST API integration, database management (MongoDB/MySQL), and UI/UX optimization.
          </p>
        </div>
      </div>
    </section>
  );
}
