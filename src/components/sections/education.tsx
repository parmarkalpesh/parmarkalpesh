import { education } from "@/lib/data";
import { GraduationCap } from "lucide-react";

export function Education() {
  return (
    <section id="education" className="bg-secondary">
      <div className="container">
        <div className="flex flex-col items-center text-center gap-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">Education</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-lg">
                My academic background and qualifications.
            </p>
        </div>

        <div className="relative max-w-2xl mx-auto">
          <div className="absolute left-4 md:left-6 top-0 h-full w-0.5 bg-border -translate-x-1/2"></div>
          
          {education.map((edu, index) => (
            <div key={index} className="relative mb-8 flex items-start">
              <div className="absolute left-4 md:left-6 top-1 z-10 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <GraduationCap className="h-4 w-4" />
              </div>
              
              <div className="w-full pl-12 md:pl-16">
                  <div>
                    <p className="font-semibold text-lg">{edu.degree}</p>
                    <p className="text-primary font-medium">{edu.institution}</p>
                    <p className="text-sm text-muted-foreground mb-2">{edu.duration}</p>
                  </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
