import React, { useState, useEffect, useRef } from 'react';
import { Code, Smartphone, Database, Settings, Briefcase, Languages } from 'lucide-react';
import { mockData } from '../mock';

const Skills = () => {
  const [visibleBars, setVisibleBars] = useState([]);
  const skillsRef = useRef(null);

  const categoryIcons = {
    Mobile: Smartphone,
    Languages: Languages,
    Frontend: Code,
    Backend: Database,
    Database: Database,
    Tools: Settings,
    Management: Briefcase
  };

  const categories = [...new Set(mockData.skills.map(skill => skill.category))];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          mockData.skills.forEach((_, index) => {
            setTimeout(() => {
              setVisibleBars(prev => [...prev, index]);
            }, index * 100);
          });
        }
      },
      { threshold: 0.3 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-20 bg-white" ref={skillsRef}>
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <div className="label mb-4">WHAT I KNOW</div>
          <h2 className="title-big mb-8">SKILLS MATRIX</h2>
          <p className="text-body max-w-2xl">
            My technical expertise spans across mobile development, web technologies, 
            and cloud platforms with deep proficiency in Flutter and modern development practices.
          </p>
        </div>

        {/* Skills by Category */}
        <div className="skills-grid space-y-8">
          {categories.map((category) => {
            const categorySkills = mockData.skills.filter(skill => skill.category === category);
            const IconComponent = categoryIcons[category] || Code;
            
            return (
              <div key={category} className="card skills-category">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-accent flex items-center justify-center rounded">
                    <IconComponent size={16} className="text-white" />
                  </div>
                  <h3 className="text-regular font-bold">{category}</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {categorySkills.map((skill, index) => {
                    const skillIndex = mockData.skills.indexOf(skill);
                    const isVisible = visibleBars.includes(skillIndex);
                    
                    return (
                      <div key={skill.name} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="label-small">{skill.name}</span>
                          <span className="label-small text-accent">{skill.level}%</span>
                        </div>
                        
                        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-accent transition-all duration-1000 ease-out rounded-full"
                            style={{
                              width: isVisible ? `${skill.level}%` : '0%',
                              transitionDelay: `${skillIndex * 100}ms`
                            }}
                          ></div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Skills Summary */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="card text-center">
            <div className="text-big text-accent mb-2">12+</div>
            <div className="label">TECHNOLOGIES</div>
            <p className="text-body mt-2">
              Proficient in modern development tools and frameworks
            </p>
          </div>
          
          <div className="card text-center">
            <div className="text-big text-accent mb-2">6+</div>
            <div className="label">CATEGORIES</div>
            <p className="text-body mt-2">
              Full-stack capabilities across multiple domains
            </p>
          </div>
          
          <div className="card text-center">
            <div className="text-big text-accent mb-2">85%</div>
            <div className="label">AVG PROFICIENCY</div>
            <p className="text-body mt-2">
              High level of expertise in core technologies
            </p>
          </div>
        </div>

        {/* Currently Learning */}
        <div className="mt-12">
          <div className="card bg-gray-50 border-accent">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
              <div className="label text-accent">CURRENTLY LEARNING</div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-body font-bold">Kotlin</div>
                <div className="label-small">Native Android</div>
              </div>
              <div className="text-center">
                <div className="text-body font-bold">Swift</div>
                <div className="label-small">iOS Development</div>
              </div>
              <div className="text-center">
                <div className="text-body font-bold">Docker</div>
                <div className="label-small">Containerization</div>
              </div>
              <div className="text-center">
                <div className="text-body font-bold">AWS</div>
                <div className="label-small">Cloud Services</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;