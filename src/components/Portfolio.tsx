
import React, { useState, useEffect, useRef } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardContent } from "@/components/ui/card";

const projects = [
  {
    id: 1,
    title: "Urban Dynamics",
    category: "Cinematography",
    image: "https://cdn.gpteng.co/d/vfhsf22oi/portfolio-1.jpg",
    description: "A visual exploration of city life and architecture."
  },
  {
    id: 2,
    title: "Natural Landscapes",
    category: "Documentary",
    image: "https://cdn.gpteng.co/d/vfhsf22oi/portfolio-2.jpg",
    description: "Capturing the beauty of untouched wilderness."
  },
  {
    id: 3,
    title: "Network Infrastructure",
    category: "Technical",
    image: "https://cdn.gpteng.co/d/vfhsf22oi/portfolio-3.jpg",
    description: "Documentation of advanced network setups."
  },
  {
    id: 4,
    title: "Cybersecurity Awareness",
    category: "Educational",
    image: "https://cdn.gpteng.co/d/vfhsf22oi/portfolio-4.jpg",
    description: "Visual guide to digital security practices."
  },
  {
    id: 5,
    title: "Portrait Series",
    category: "Photography",
    image: "https://cdn.gpteng.co/d/vfhsf22oi/portfolio-5.jpg",
    description: "Exploring human emotion through closeup cinematography."
  }
];

const Portfolio = () => {
  const [filter, setFilter] = useState('all');
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
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category.toLowerCase() === filter.toLowerCase());
  
  const categories = ['all', ...Array.from(new Set(projects.map(p => p.category.toLowerCase())))];
  
  return (
    <section 
      id="portfolio" 
      ref={sectionRef}
      className="section-padding bg-black"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-on-scroll opacity-0">
          <h2 className="text-white/80 text-sm uppercase tracking-widest mb-3">Portfolio</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white">My Featured Works</h3>
        </div>
        
        <div className="flex justify-center mb-12 animate-on-scroll opacity-0" style={{ animationDelay: '0.2s' }}>
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {categories.map((category, index) => (
              <button 
                key={index}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-full text-sm md:text-base transition-all duration-300 ${
                  filter === category 
                    ? 'bg-white/20 backdrop-blur-lg text-white'
                    : 'bg-transparent text-white/60 hover:text-white/90'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>
        
        <div className="animate-on-scroll opacity-0" style={{ animationDelay: '0.4s' }}>
          <Carousel>
            <CarouselContent>
              {filteredProjects.map((project) => (
                <CarouselItem key={project.id} className="md:basis-1/2 lg:basis-1/3 p-2">
                  <Card className="bg-transparent border-0 overflow-hidden group">
                    <CardContent className="p-0 relative">
                      <AspectRatio ratio={4/3}>
                        <img 
                          src={project.image} 
                          alt={project.title} 
                          className="w-full h-full object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105" 
                        />
                      </AspectRatio>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 rounded-2xl">
                        <span className="text-sm text-white/70">{project.category}</span>
                        <h4 className="text-xl font-semibold text-white mt-1">{project.title}</h4>
                        <p className="text-white/80 mt-2 text-sm">{project.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden md:block">
              <CarouselPrevious className="left-2 bg-white/10 hover:bg-white/20 text-white border-0" />
              <CarouselNext className="right-2 bg-white/10 hover:bg-white/20 text-white border-0" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
