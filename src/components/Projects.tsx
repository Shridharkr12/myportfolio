import React from 'react';
import { SectionTitle } from './ui/SectionTitle';
import { ProjectCard } from './ui/ProjectCard';

const projects = [
  {
    title: 'S-AutoMeta',
    description: 'A privacy-first smart retail and automation system featuring emotion recognition, automation dashboard, RFID control, and Firebase integration.',
    image: '/assets/pygame.png',
    link: 'https://github.com/NULL', // Replace with actual link if different
    tags: ['ESP32-CAM', 'Firebase', 'AI', 'IoT', 'RFID', 'Smart Retail'],
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-8">
        <SectionTitle>Projects</SectionTitle>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
