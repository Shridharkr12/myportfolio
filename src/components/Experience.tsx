import React from "react";
import { SectionTitle } from "./ui/SectionTitle";
import { ExperienceCard } from "./ui/ExperienceCard";
const experiences = [
  {
    title: "TECH AMIGOS VICE PRESIDENT ",
    company: "CGC",
    period: "Mar 2024 - Present",
    description: `TECH AMIGOS IS A TECHNICAL CLUB IN CHANDIGARH GROUP OF COLLEGES IN LANDRAN.`,
    skills: ["VICE PRESIDENT", "EVENT MANAGEMENT", "LEADERSHIP", "IT", "ORGANIZATION"],
  },
];


export function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-8">
        <SectionTitle>Experience</SectionTitle>
        <div className="relative border-l-2 border-blue-600 dark:border-blue-500 max-w-5xl mx-auto space-y-10">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} {...exp} />
          ))}
        </div>
      </div>
    </section>
  );
}
