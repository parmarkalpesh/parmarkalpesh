"use client";

import { useState } from "react";
import { experiences } from "@/lib/data";
import { Briefcase } from "lucide-react";

export function Experience() {
  // Track which experience certificate is open
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleCertificate = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="experience" className="bg-background py-16">
      <div className="container">
        {/* Heading Section */}
        <div className="flex flex-col items-center text-center gap-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">
            Work Experience
          </h2>
          <p className="max-w-[700px] text-muted-foreground md:text-lg">
            My professional journey and key accomplishments.
          </p>
        </div>

        {/* Timeline Section */}
        <div className="relative max-w-2xl mx-auto">
          {/* Vertical timeline line */}
          <div className="absolute left-4 md:left-6 top-0 h-full w-0.5 bg-border -translate-x-1/2"></div>

          {experiences.map((exp, index) => (
            <div key={index} className="relative mb-10 flex items-start">
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-6 top-1 z-10 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Briefcase className="h-4 w-4" />
              </div>

              {/* Experience Content */}
              <div className="w-full pl-12 md:pl-16">
                <div className="bg-card border border-border rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow">
                  <p className="font-semibold text-lg">{exp.role}</p>
                  <p className="text-primary font-medium">{exp.company}</p>
                  <p className="text-sm text-muted-foreground mb-2">
                    {exp.duration}
                  </p>
                  <p className="text-muted-foreground mb-3">{exp.description}</p>

                  {/* View Certificate Button */}
                  {exp.certificate && (
                    <button
                      onClick={() => toggleCertificate(index)}
                      className="rounded-md bg-blue-600 px-3 py-1.5 text-sm text-white hover:bg-blue-700 transition-colors"
                    >
                      {openIndex === index
                        ? "Hide Certificate"
                        : "View Certificate"}
                    </button>
                  )}

                  {/* Show certificate when open */}
                  {openIndex === index && exp.certificate && (
                    <div className="mt-4 p-3 border rounded-lg bg-gray-50">
                      {exp.certificate.endsWith(".png") ||
                      exp.certificate.endsWith(".jpg") ||
                      exp.certificate.endsWith(".jpeg") ? (
                        <img
                          src={exp.certificate}
                          alt={`${exp.company} Certificate`}
                          className="rounded-md mx-auto max-h-[400px] shadow-sm"
                        />
                      ) : (
                        <a
                          href={exp.certificate}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 underline text-sm"
                        >
                          Open Certificate (PDF)
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
