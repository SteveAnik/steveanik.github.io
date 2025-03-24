
import React, { useEffect, useRef } from 'react';
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
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
      id="about" 
      ref={sectionRef}
      className="section-padding bg-gradient-to-b from-gray-900 to-black"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-on-scroll opacity-0">
          <h2 className="text-white/80 text-sm uppercase tracking-widest mb-3">About Me</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white">Passionate about visual storytelling <br /> and digital security</h3>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-on-scroll opacity-0" style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden">
                <img 
                  src="https://cdn.gpteng.co/d/vfhsf22oi/about-image.jpg" 
                  alt="Steve Anik Adhikari" 
                  className="w-full h-auto rounded-2xl"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 rounded-full bg-gradient-to-r from-blue-500/30 to-purple-500/30 blur-2xl -z-10"></div>
            </div>
          </div>
          
          <div className="space-y-6 animate-on-scroll opacity-0" style={{ animationDelay: '0.4s' }}>
            <p className="text-white/80 text-lg leading-relaxed">
              I blend the art of cinematography with technical expertise in cybersecurity. With a background in server management and networking, I bring a unique perspective to my visual creations while maintaining a deep understanding of digital security.
            </p>
            <p className="text-white/80 text-lg leading-relaxed">
              Currently majoring in Cybersecurity, I'm constantly exploring the intersection of visual media and digital protection. My work aims to tell compelling stories while advocating for a safer digital environment.
            </p>
            
            <div className="pt-6 grid grid-cols-2 gap-4">
              <Card className="glass border-0">
                <CardContent className="p-6 text-center">
                  <h4 className="text-3xl font-bold text-white mb-2">5+</h4>
                  <p className="text-white/70">Years of Experience</p>
                </CardContent>
              </Card>
              <Card className="glass border-0">
                <CardContent className="p-6 text-center">
                  <h4 className="text-3xl font-bold text-white mb-2">30+</h4>
                  <p className="text-white/70">Projects Completed</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
