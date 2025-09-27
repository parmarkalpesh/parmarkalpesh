import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/data";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Code } from "lucide-react";

export function Projects() {
  return (
    <section id="projects" className="bg-secondary">
      <div className="container">
        <div className="flex flex-col items-center text-center gap-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">My Projects</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-lg">
                A selection of projects I've worked on, showcasing my skills and passion for development.
            </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card key={project.title} className="flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <CardHeader className="p-0">
                    <div className="relative aspect-video">
                        <Image 
                            src={project.image.imageUrl}
                            alt={project.title}
                            fill
                            className="object-cover"
                            data-ai-hint={project.image.imageHint}
                        />
                    </div>
                </CardHeader>
              <CardContent className="p-6 flex-grow">
                <CardTitle className="font-headline mb-2">{project.title}</CardTitle>
                <CardDescription className="mb-4">{project.description}</CardDescription>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <Badge key={tech} variant="secondary">{tech}</Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-end gap-2 p-6 pt-0">
                {/* <Button variant="outline" asChild>
                  <Link href={project.liveUrl} target="_blank">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Link>
                </Button> */}
                <Button asChild>
                  <Link href={project.codeUrl} target="_blank">
                    <Code className="mr-2 h-4 w-4" />
                    View Code
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
