import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-mesh opacity-50" />
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 text-center">
        <div className="animate-fade-in-up">
          <p className="text-primary font-medium mb-4 text-lg">Hi there, I'm</p>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 gradient-text">
            Mayuri Kulkarni
          </h1>
          <p className="text-3xl md:text-4xl font-semibold mb-6 text-foreground/90">
            Full Stack Developer
          </p>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Crafting innovative web experiences with React, Django, and PostgreSQL. 
            President of Cultural Club & Vice President of Hackbreakers Coding Club at SKNSCOE.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <Button size="lg" className="text-lg px-8 shadow-lg hover:shadow-xl transition-all">
              <a href="#projects">View My Work</a>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 border-2">
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 justify-center">
            <a 
              href="https://github.com/myukulkarni" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full glass-card hover:scale-110 transition-transform"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="https://linkedin.com/in/mayuri-kulkarni" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full glass-card hover:scale-110 transition-transform"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="mailto:kulkarnimayuri210@gmail.com"
              className="p-3 rounded-full glass-card hover:scale-110 transition-transform"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#about">
          <ArrowDown className="w-8 h-8 text-primary" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
