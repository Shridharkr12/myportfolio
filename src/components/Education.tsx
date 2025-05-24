import React from 'react';
import { SectionTitle } from './ui/SectionTitle';
import { EducationCard } from './ui/EducationCard';

const education = [
  {
    degree: 'B.Tech in Computer Science Engineering (Information Technology)',
    institution: 'Chandigarh Group of Colleges, Landran',
    period: '2022 - Present',
    score: 'Pursuing',
  },
  {
    degree: 'Senior Secondary (11th & 12th) - Science (IT & AI)',
    institution: 'GYAN BHARTI PUBLIC SCHOOL,GAYA,BIHAR',
    period: '2020 - 2022',
    score: 'Completed',
  },
  
];

export function Education() {
  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-8">
        <SectionTitle>Education</SectionTitle>
        <div className="max-w-5xl mx-auto space-y-10">
          {education.map((edu, index) => (
            <EducationCard key={edu.degree} {...edu} isLast={index === education.length - 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
