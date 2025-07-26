import React, { useState } from 'react';
import { ExternalLink, Github, Play, Filter, Code, Smartphone, Brain } from 'lucide-react';
import { mockData } from '../mock';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [hoveredProject, setHoveredProject] = useState(null);

  const categories = ['All', ...new Set(mockData.projects.map(project => project.category))];
  
  const filteredProjects = selectedCategory === 'All' 
    ? mockData.projects 
    : mockData.projects.filter(project => project.category === selectedCategory);

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Mobile App': return Smartphone;
      case 'AI/ML': return Brain;
      default: return Code;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Production': return 'status-production';
      case 'Completed': return 'status-completed';
      case 'Academic Project': return 'status-academic';
      default: return 'text-gray-600 bg-gray-100 border-gray-200';
    }
  };

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <div className="label mb-4">SELECTED WORK</div>
          <h2 className="title-big mb-8">PROJECTS</h2>
          <p className="text-body max-w-2xl">
            A showcase of my most impactful projects, ranging from production mobile apps 
            used by millions to innovative AI solutions and technical implementations.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-4 mb-12">
          <div className="flex items-center gap-2 mr-4">
            <Filter size={16} />
            <span className="label-small">FILTER BY:</span>
          </div>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 border transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-accent text-white border-accent'
                  : 'bg-white text-primary border-gray-200 hover:border-accent'
              }`}
            >
              <span className="label-small">{category}</span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredProjects.map((project) => {
            const IconComponent = getCategoryIcon(project.category);
            
            return (
              <div
                key={project.id}
                className="card project-card group cursor-pointer hover:shadow-lg transition-all duration-300"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Project Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-accent flex items-center justify-center rounded">
                      <IconComponent size={16} className="text-white" />
                    </div>
                    <div className="label-small">{project.category}</div>
                  </div>
                  
                  <div className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                    {project.status}
                  </div>
                </div>

                {/* Project Content */}
                <div className="project-content">
                  {/* Project Title & Description */}
                  <div className="mb-6">
                    <h3 className="text-regular font-bold mb-3 group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-body line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-6">
                    <div className="label-small mb-3">TECH STACK</div>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gray-100 border border-gray-200 label-small hover:border-accent transition-colors rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="mb-4">
                    <div className="label-small mb-3">KEY HIGHLIGHTS</div>
                    <div className="space-y-2">
                      {project.highlights.slice(0, 3).map((highlight, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-body text-sm">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Hover Effect Overlay */}
                {hoveredProject === project.id && (
                  <div className="absolute inset-0 bg-accent/5 pointer-events-none transition-opacity duration-300 rounded-lg"></div>
                )}
              </div>
            );
          })}
        </div>

        {/* GitHub Stats */}
        <div className="mt-16">
          <div className="card bg-gray-50">
            <div className="text-center mb-8">
              <div className="label mb-4">GITHUB ACTIVITY</div>
              <h3 className="text-regular font-bold">CONTRIBUTION OVERVIEW</h3>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-big text-accent mb-2">{mockData.githubStats.contributions}</div>
                <div className="label-small">CONTRIBUTIONS</div>
              </div>
              <div className="text-center">
                <div className="text-big text-accent mb-2">{mockData.githubStats.repositories}</div>
                <div className="label-small">REPOSITORIES</div>
              </div>
              <div className="text-center">
                <div className="text-big text-accent mb-2">{mockData.githubStats.followers}</div>
                <div className="label-small">FOLLOWERS</div>
              </div>
              <div className="text-center">
                <div className="text-big text-accent mb-2">{mockData.githubStats.languages.length}</div>
                <div className="label-small">LANGUAGES</div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <a 
                href={mockData.personal.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-accent flex items-center gap-2 mx-auto"
              >
                <Github size={16} />
                VIEW GITHUB PROFILE
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;