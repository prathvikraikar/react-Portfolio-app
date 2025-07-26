import React, { useState, useEffect } from 'react';
import { Download, Mail, Github, Linkedin, ExternalLink } from 'lucide-react';
import { mockData, mockFunctions } from '../mock';

const Hero = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const titles = ['Flutter Developer', 'Mobile App Developer', 'Cross-Platform Expert', 'UI/UX Enthusiast'];
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      const current = titles[currentIndex];
      
      if (!isDeleting) {
        if (currentText.length < current.length) {
          setCurrentText(current.substring(0, currentText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(current.substring(0, currentText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % titles.length);
        }
      }
    }, isDeleting ? 50 : 150);
    
    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, isDeleting, titles]);

  const handleDownloadResume = () => {
    mockFunctions.downloadResume();
  };

  const handleHireMe = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="label">HELLO, I'M</div>
              <h1 className="hero-title leading-none">
                {mockData.personal.name}
              </h1>
              <div className="text-big h-20">
                <span className="text-accent">{currentText}</span>
                <span className="animate-pulse">|</span>
              </div>
              <p className="text-body max-w-lg">
                {mockData.personal.bio}
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-regular font-mono text-accent">2.4+</div>
                <div className="label-small">YEARS EXP</div>
              </div>
              <div className="text-center">
                <div className="text-regular font-mono text-accent">{mockData.projects.length}</div>
                <div className="label-small">PROJECTS</div>
              </div>
              <div className="text-center">
                <div className="text-regular font-mono text-accent">{mockData.githubStats.contributions}</div>
                <div className="label-small">CONTRIBUTIONS</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={handleDownloadResume}
                className="btn-accent flex items-center gap-2"
              >
                <Download size={16} />
                DOWNLOAD RESUME
              </button>
              <button 
                onClick={handleHireMe}
                className="btn-primary flex items-center gap-2"
              >
                <Mail size={16} />
                HIRE ME
              </button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-6">
              <a href="#" className="nav-link flex items-center gap-2">
                <Github size={16} />
                GITHUB
              </a>
              <a href="#" className="nav-link flex items-center gap-2">
                <Linkedin size={16} />
                LINKEDIN
              </a>
              <a href="#" className="nav-link flex items-center gap-2">
                <ExternalLink size={16} />
                PORTFOLIO
              </a>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="aspect-square bg-white border border-gray-200 p-8 hover:transform hover:scale-105 transition-transform duration-300">
              <div className="h-full flex flex-col justify-between">
                <div>
                  <div className="label mb-4">TECH STACK</div>
                  <div className="grid grid-cols-2 gap-3">
                    {mockData.skills.slice(0, 6).map((skill) => (
                      <div key={skill.name} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-accent"></div>
                        <span className="label-small">{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="text-regular mb-2">Available for</div>
                  <div className="label text-accent">FREELANCE WORK</div>
                </div>
              </div>
            </div>
            
            {/* Decorative accent */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;