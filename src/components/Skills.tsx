
import React, { useEffect, useRef } from 'react';

const skills = {
  cinematography: [
    { name: "Video Production", level: 90 },
    { name: "Color Grading", level: 85 },
    { name: "Lighting", level: 80 },
    { name: "Editing", level: 88 },
    { name: "Composition", level: 92 }
  ],
  technical: [
    { name: "Server Management", level: 85 },
    { name: "Network Security", level: 82 },
    { name: "Infrastructure Design", level: 78 },
    { name: "Load Balancing", level: 75 },
    { name: "Traffic Analysis", level: 80 }
  ],
  cybersecurity: [
    { name: "Penetration Testing", level: 75 },
    { name: "Security Analysis", level: 80 },
    { name: "Risk Assessment", level: 82 },
    { name: "Threat Modeling", level: 78 },
    { name: "Incident Response", level: 76 }
  ]
};

const SkillBar = ({ name, level }: { name: string, level: number }) => {
  const barRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && barRef.current) {
            setTimeout(() => {
              if (barRef.current) {
                barRef.current.style.width = `${level}%`;
              }
            }, 200);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (barRef.current) {
      observer.observe(barRef.current);
    }
    
    return () => {
      if (barRef.current) {
        observer.unobserve(barRef.current);
      }
    };
  }, [level]);
  
  return (
    <div className="mb-6">
      <div className="flex justify-between mb-1">
        <span className="text-white font-medium">{name}</span>
        <span className="text-white/70">{level}%</span>
      </div>
      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
        <div 
          ref={barRef}
          className="h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-1000 ease-out"
          style={{ width: "0%" }}
        ></div>
      </div>
    </div>
  );
};

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const childElements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    childElements?.forEach((el) => observer.observe(el));
    
    return () => {
      childElements?.forEach((el) => observer.unobserve(el));
    };
  }, []);
  
  return (
    <section 
      id="skills" 
      ref={sectionRef}
      className="section-padding bg-gradient-to-b from-black to-gray-900"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-on-scroll opacity-0">
          <h2 className="text-white/80 text-sm uppercase tracking-widest mb-3">Skills</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white">Professional Expertise</h3>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12">
          <div className="glass p-8 rounded-2xl animate-on-scroll opacity-0" style={{ animationDelay: '0.2s' }}>
            <h4 className="text-xl font-semibold text-white mb-6">Cinematography</h4>
            {skills.cinematography.map((skill, index) => (
              <SkillBar key={index} name={skill.name} level={skill.level} />
            ))}
          </div>
          
          <div className="glass p-8 rounded-2xl animate-on-scroll opacity-0" style={{ animationDelay: '0.4s' }}>
            <h4 className="text-xl font-semibold text-white mb-6">Server & Networking</h4>
            {skills.technical.map((skill, index) => (
              <SkillBar key={index} name={skill.name} level={skill.level} />
            ))}
          </div>
          
          <div className="glass p-8 rounded-2xl animate-on-scroll opacity-0" style={{ animationDelay: '0.6s' }}>
            <h4 className="text-xl font-semibold text-white mb-6">Cybersecurity</h4>
            {skills.cybersecurity.map((skill, index) => (
              <SkillBar key={index} name={skill.name} level={skill.level} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
