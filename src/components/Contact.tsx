
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1500);
  };
  
  return (
    <section 
      id="contact" 
      className="section-padding bg-black"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-on-scroll opacity-0">
          <h2 className="text-white/80 text-sm uppercase tracking-widest mb-3">Contact</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white">Get In Touch</h3>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="animate-on-scroll opacity-0" style={{ animationDelay: '0.2s' }}>
            <div className="glass p-8 rounded-2xl h-full">
              <h4 className="text-xl font-semibold text-white mb-8">Contact Information</h4>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-white/10 p-3 rounded-full mr-4">
                    <Mail className="h-5 w-5 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-white/70 mb-1">Email</p>
                    <p className="text-white">contact@steveanikadhikari.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-white/10 p-3 rounded-full mr-4">
                    <Phone className="h-5 w-5 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-white/70 mb-1">Phone</p>
                    <p className="text-white">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-white/10 p-3 rounded-full mr-4">
                    <MapPin className="h-5 w-5 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-white/70 mb-1">Location</p>
                    <p className="text-white">San Francisco, California</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h5 className="text-white font-medium mb-4">Connect with me</h5>
                <div className="flex space-x-4">
                  {['facebook', 'twitter', 'instagram', 'linkedin'].map((social) => (
                    <a 
                      key={social}
                      href="#" 
                      className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                      aria-label={`${social} profile`}
                    >
                      <img 
                        src={`https://cdn.gpteng.co/d/vfhsf22oi/${social}.svg`} 
                        alt={social} 
                        className="w-5 h-5" 
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="animate-on-scroll opacity-0" style={{ animationDelay: '0.4s' }}>
            <div className="glass p-8 rounded-2xl">
              <h4 className="text-xl font-semibold text-white mb-8">Send me a message</h4>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/50 focus:border-blue-400 h-12"
                    required
                  />
                </div>
                
                <div>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/50 focus:border-blue-400 h-12"
                    required
                  />
                </div>
                
                <div>
                  <Input
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/50 focus:border-blue-400 h-12"
                    required
                  />
                </div>
                
                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    className="w-full bg-white/5 border border-white/10 rounded-md h-32 px-3 py-2 text-white placeholder:text-white/50 focus:outline-none focus:border-blue-400 resize-none"
                    required
                  ></textarea>
                </div>
                
                <Button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white"
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      <Send className="mr-2 h-4 w-4" /> Send Message
                    </span>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
