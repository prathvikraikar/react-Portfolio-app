import React from 'react';
import { Building, Calendar, MapPin, ChevronRight } from 'lucide-react';
import { mockData } from '../mock';

const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <div className="label mb-4">PROFESSIONAL JOURNEY</div>
          <h2 className="title-big mb-8">EXPERIENCE</h2>
          <p className="text-body max-w-2xl">
            My professional journey spans across different companies where I've contributed to 
            impactful projects and developed expertise in mobile and web development.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8">
          {mockData.experience.map((exp, index) => (
            <div key={exp.id} className="group">
              <div className="card hover:border-accent transition-colors duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Company Info */}
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-3 h-3 bg-accent mt-2 flex-shrink-0"></div>
                      <div>
                        <h3 className="text-regular font-bold mb-1">{exp.company}</h3>
                        <div className="label text-accent mb-2">{exp.position}</div>
                        
                        <div className="space-y-1">
                          <div className="flex items-center gap-2 text-body">
                            <Calendar size={14} />
                            <span className="label-small">{exp.duration}</span>
                          </div>
                          <div className="flex items-center gap-2 text-body">
                            <MapPin size={14} />
                            <span className="label-small">{exp.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="lg:col-span-2">
                    <div className="label mb-4">KEY ACHIEVEMENTS</div>
                    <div className="space-y-3">
                      {exp.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-start gap-3 group-hover:translate-x-1 transition-transform duration-200">
                          <ChevronRight size={16} className="text-accent mt-1 flex-shrink-0" />
                          <p className="text-body">{highlight}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Timeline connector */}
              {index < mockData.experience.length - 1 && (
                <div className="ml-6 h-8 w-px bg-border-light"></div>
              )}
            </div>
          ))}
        </div>

        {/* Education Section */}
        <div className="mt-20">
          <div className="label mb-4">ACADEMIC BACKGROUND</div>
          <h3 className="text-regular mb-8">EDUCATION</h3>
          
          <div className="card">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <div>
                <h4 className="text-body font-bold mb-2">{mockData.education.degree}</h4>
                <div className="label text-accent mb-2">{mockData.education.college}</div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Calendar size={14} />
                    <span className="label-small">{mockData.education.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={14} />
                    <span className="label-small">{mockData.education.location}</span>
                  </div>
                </div>
              </div>
              
              <div className="text-center md:text-right">
                <div className="label mb-2">CGPA</div>
                <div className="text-big text-accent">{mockData.education.cgpa}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Certificates */}
        <div className="mt-12">
          <div className="label mb-4">CERTIFICATIONS</div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {mockData.certificates.map((cert, index) => (
              <div key={index} className="card hover:border-accent transition-colors duration-300">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-body font-bold mb-1">{cert.name}</h4>
                    <div className="label-small">{cert.issuer}</div>
                  </div>
                  <div className="text-accent font-mono">{cert.year}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;