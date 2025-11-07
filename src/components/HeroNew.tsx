import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Terminal, ChevronRight, Code, Database, Laptop, Boxes, Braces } from "lucide-react"

const HeroNew = () => {
  return (
    <section className="scroll-section relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-muted/20">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-20" />
      
      {/* Floating code elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 text-primary/20 font-mono text-sm animate-float">{'<div>'}</div>
        <div className="absolute top-40 right-20 text-primary/20 font-mono text-sm animate-float" style={{animationDelay: '1s'}}>{'{ }'}</div>
        <div className="absolute bottom-40 left-20 text-primary/20 font-mono text-sm animate-float" style={{animationDelay: '2s'}}>{'</>'}</div>
        <div className="absolute bottom-20 right-40 text-primary/20 font-mono text-sm animate-float" style={{animationDelay: '1.5s'}}>{'( )'}</div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 grid md:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
        {/* Left: Content */}
        <div className="space-y-4 sm:space-y-6 lg:space-y-8 animate-fade-in-up">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-primary/20 bg-primary/5 text-xs sm:text-sm font-medium text-primary">
            <Terminal className="w-3 h-3 sm:w-4 sm:h-4" />
            Full Stack Developer
          </div>
          
          <div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-3 sm:mb-4 tracking-tight">
              Yoo! It's{" "}
              <span className="gradient-text block mt-1 sm:mt-2">Mayuri Kulkarni</span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-lg">
              The one who makes buttons work and servers behave. ✨
            </p>
          </div>

          {/* Code snippet decoration */}
          <div className="font-mono text-xs sm:text-sm text-muted-foreground/80 bg-muted/30 p-3 sm:p-4 rounded-lg border border-border">
            <div className="flex items-center gap-1.5 sm:gap-2 mb-1.5 sm:mb-2">
              <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-destructive/60" />
              <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500/60" />
              <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-primary/60" />
            </div>
            <code className="text-primary">const</code>{" "}
            <code className="text-foreground">developer</code>{" "}
            <code className="text-muted-foreground">=</code>{" "}
            <code className="text-secondary">{'{'}</code>
            <br />
            <code className="ml-4 text-muted-foreground">passion:</code>{" "}
            <code className="text-emerald-500">"code"</code>,
            <br />
            <code className="ml-4 text-muted-foreground">mission:</code>{" "}
            <code className="text-emerald-500">"innovation"</code>
            <br />
            <code className="text-secondary">{'}'}</code>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
            <Button 
              size="lg" 
              className="group shadow-lg hover:shadow-xl transition-all w-full sm:w-auto text-sm sm:text-base"
              onClick={() => {
                const container = document.querySelector('.horizontal-scroll');
                if (container) container.scrollTo({ left: 3 * window.innerWidth, behavior: 'smooth' });
              }}
            >
              View Projects
              <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 w-full sm:w-auto text-sm sm:text-base"
              onClick={() => {
                const container = document.querySelector('.horizontal-scroll');
                if (container) container.scrollTo({ left: 6 * window.innerWidth, behavior: 'smooth' });
              }}
            >
              Get In Touch
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex gap-3 sm:gap-4 justify-center sm:justify-start">
            <a 
              href="https://github.com/myukulkarni" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 sm:p-3 rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-all hover:scale-110"
            >
              <Github className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
            <a 
              href="https://linkedin.com/in/mayuri-kulkarni" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 sm:p-3 rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-all hover:scale-110"
            >
              <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
            <a 
              href="mailto:kulkarnimayuri210@gmail.com"
              className="p-2 sm:p-3 rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-all hover:scale-110"
            >
              <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
          </div>
        </div>

        {/* Right: Animated Visual Effect - Hidden on mobile for better performance */}
        <div className="hidden md:flex relative items-center justify-center animate-fade-in-up h-96" style={{animationDelay: '0.2s'}}>
          {/* Central glowing orb */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-64 h-64 bg-gradient-to-r from-primary/30 via-primary/50 to-emerald-light/30 rounded-full blur-3xl animate-pulse" />
          </div>
          
          {/* Floating tech icons with animations */}
          <div className="relative w-96 h-96 flex items-center justify-center">
            {/* Center large icon */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-32 h-32 rounded-2xl bg-primary/10 backdrop-blur-sm border-2 border-primary/30 flex items-center justify-center group-hover:scale-110 transition-transform shadow-xl">
                <Code className="w-16 h-16 text-primary" />
              </div>
            </div>
            
            {/* Orbiting icons */}
            <div className="absolute inset-0 animate-spin-slow" style={{animationDuration: '20s'}}>
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-16 rounded-xl bg-primary/20 backdrop-blur-sm border border-primary/40 flex items-center justify-center shadow-lg">
                <Database className="w-8 h-8 text-primary" />
              </div>
            </div>
            
            <div className="absolute inset-0 animate-spin-slow" style={{animationDuration: '25s', animationDirection: 'reverse'}}>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-16 rounded-xl bg-primary/20 backdrop-blur-sm border border-primary/40 flex items-center justify-center shadow-lg">
                <Laptop className="w-8 h-8 text-primary" />
              </div>
            </div>
            
            <div className="absolute inset-0 animate-spin-slow" style={{animationDuration: '30s'}}>
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-16 h-16 rounded-xl bg-primary/20 backdrop-blur-sm border border-primary/40 flex items-center justify-center shadow-lg">
                <Boxes className="w-8 h-8 text-primary" />
              </div>
            </div>
            
            <div className="absolute inset-0 animate-spin-slow" style={{animationDuration: '35s', animationDirection: 'reverse'}}>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-16 h-16 rounded-xl bg-primary/20 backdrop-blur-sm border border-primary/40 flex items-center justify-center shadow-lg">
                <Braces className="w-8 h-8 text-primary" />
              </div>
            </div>
            
            {/* Decorative rings */}
            <div className="absolute inset-8 border-2 border-primary/20 rounded-full animate-pulse" />
            <div className="absolute inset-16 border border-primary/10 rounded-full" style={{animationDelay: '1s'}} />
          </div>
          
          {/* Floating particles */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-float" />
            <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-primary/60 rounded-full animate-float" style={{animationDelay: '1s'}} />
            <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-primary/80 rounded-full animate-float" style={{animationDelay: '2s'}} />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 sm:bottom-6 lg:bottom-8 right-4 sm:right-6 lg:right-8 flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-muted-foreground animate-bounce">
        <span className="hidden md:inline">Scroll right to explore</span>
        <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
      </div>
    </section>
  )
}

export default HeroNew
