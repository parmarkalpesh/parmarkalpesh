import Link from "next/link";
import { ArrowDown, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThreeScene from "../three-scene";

export function Hero() {
  return (
    <section id="home" className="relative w-full h-[100dvh] flex items-center justify-center text-center overflow-hidden">
      <ThreeScene />
      <div className="relative z-10 container flex flex-col items-center gap-6 px-4">
        <div className="flex flex-col items-center gap-2">
            <h1 className="text-4xl font-extrabold tracking-tighter sm:text-6xl lg:text-7xl font-headline">
            Kalpesh Parmar
            </h1>
            <p className="max-w-[700px] text-lg text-foreground/80 sm:text-xl font-light">
            MCA Student & Aspiring Developer
            </p>
        </div>
        <p className="max-w-[700px] text-foreground/70 md:text-lg">
          Eager to contribute technical skills and gain industry exposure.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button asChild size="lg">
            <Link href="#projects">
              View My Work
              <ArrowDown className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/Kalpesh_Resume.pdf" target="_blank">
                <Download className="mr-2 h-5 w-5" />
                Download CV
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
