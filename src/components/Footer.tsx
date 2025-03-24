
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black pt-12 pb-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <a href="#" className="text-2xl font-bold text-white">S.A.A</a>
            <p className="text-white/60 mt-4 max-w-md">
              Merging cinematic artistry with technical expertise to create visual experiences that are both beautiful and secure.
            </p>
          </div>
          
          <div>
            <h5 className="text-white font-semibold mb-4">Quick Links</h5>
            <ul className="space-y-2">
              {['Home', 'About', 'Portfolio', 'Skills', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`}
                    className="text-white/60 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h5 className="text-white font-semibold mb-4">Services</h5>
            <ul className="space-y-2">
              {['Cinematography', 'Video Production', 'Network Design', 'Security Audit', 'Technical Consultation'].map((item) => (
                <li key={item}>
                  <a 
                    href="#contact"
                    className="text-white/60 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm">&copy; {new Date().getFullYear()} Steve Anik Adhikari. All rights reserved.</p>
          
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6">
              {['Privacy Policy', 'Terms of Service', 'Cookies Policy'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-white/60 hover:text-white text-sm transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
