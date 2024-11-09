// components/ProjectsGallery.tsx
import React from 'react';

interface Project {
  title: string;
  image: string;
}

const projects: Project[] = [
  { title: 'Sample Project', image: '/images/sample1.png' },
  { title: 'Project 2', image: '/images/sample2.png' },
  { title: 'Project 3', image: '/images/sample3.png' },
  { title: 'Project 4', image: '/images/sample4.png' },
];

const ProjectsGallery: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <h2 className="text-3xl font-bold text-center text-gray-800">Our Projects</h2>
      <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-3 gap-6 mt-8">
        {projects.map((project, index) => (
          <div key={index} className="relative group">
            <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <p className="text-white font-semibold">{project.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsGallery;
