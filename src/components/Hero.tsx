
import React, { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!parallaxRef.current) return;
      
      const x = (window.innerWidth - e.pageX * 2) / 100;
      const y = (window.innerHeight - e.pageY * 2) / 100;
      
      parallaxRef.current.style.transform = `translateX(${x}px) translateY(${y}px)`;
    };

    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section 
      id="home" 
      className="relative full-screen flex items-center justify-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #000000 0%, #434343 100%)',
      }}
    >
      {/* Video background */}
      <div className="absolute inset-0 z-0 opacity-40">
        <video 
          className="w-full h-full object-cover"
          autoPlay 
          loop 
          muted 
          playsInline
        >
          <source src="https://cdn.gpteng.co/d/vfhsf22oi/video-bg.mp4" type="video/mp4" />
        </video>
      </div>
      
      {/* Content overlay */}
      <div className="container relative z-10 text-center px-4 md:px-0">
        <div className="animate-fade-in space-y-6">
          <h2 className="text-white/80 text-xl md:text-2xl font-light tracking-wider">
            Cinematographer & Cybersecurity Specialist
          </h2>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gradient mb-6">
            Steve Anik Adhikari
          </h1>
          <p className="text-white/70 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
            Crafting visual stories and securing digital landscapes
          </p>
          <div className="mt-12 flex justify-center space-x-4">
            <Button asChild variant="default" size="lg" className="px-8 rounded-full bg-white/20 backdrop-blur-lg hover:bg-white/30 text-white border border-white/20">
              <a href="#portfolio">View My Work</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="px-8 rounded-full bg-transparent border border-white/40 text-white hover:bg-white/10">
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Parallax elements */}
      <div ref={parallaxRef} className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-500/10 blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-purple-500/10 blur-3xl"></div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-white/60 hover:text-white/80 transition-colors">
          <ArrowDown className="h-8 w-8" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
