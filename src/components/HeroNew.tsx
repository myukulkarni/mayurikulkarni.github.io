import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Terminal, ChevronRight } from "lucide-react"
import profilePhoto from "@/assets/profile-photo.png"

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

      <div className="relative z-10 max-w-7xl mx-auto px-8 py-20 grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Content */}
        <div className="space-y-8 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-sm font-medium text-primary">
            <Terminal className="w-4 h-4" />
            Full Stack Developer
          </div>
          
          <div>
            <h1 className="text-6xl md:text-7xl font-bold mb-4 tracking-tight">
              Hi, I'm{" "}
              <span className="gradient-text block mt-2">Mayuri Kulkarni</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
              Building innovative web experiences with React, Django, and PostgreSQL. 
              Leading teams and crafting solutions that matter.
            </p>
          </div>

          {/* Code snippet decoration */}
          <div className="font-mono text-sm text-muted-foreground/80 bg-muted/30 p-4 rounded-lg border border-border">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-3 h-3 rounded-full bg-destructive/60" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
              <div className="w-3 h-3 rounded-full bg-primary/60" />
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
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="group shadow-lg hover:shadow-xl transition-all">
              View Projects
              <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="border-2">
              Get In Touch
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            <a 
              href="https://github.com/myukulkarni" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-all hover:scale-110"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="https://linkedin.com/in/mayuri-kulkarni" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-all hover:scale-110"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="mailto:kulkarnimayuri210@gmail.com"
              className="p-3 rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-all hover:scale-110"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Right: Photo with unique design */}
        <div className="relative flex items-center justify-center animate-fade-in-up" style={{animationDelay: '0.2s'}}>
          {/* Decorative elements */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-80 h-80 border-2 border-primary/20 rounded-full animate-pulse" />
            <div className="absolute w-96 h-96 border border-primary/10 rounded-full" style={{animationDelay: '0.5s'}} />
          </div>
          
          {/* Photo container with unique shape */}
          <div className="relative z-10 group">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary to-secondary rounded-full blur-2xl opacity-20 group-hover:opacity-30 transition-opacity" />
            <div className="relative w-72 h-72 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl">
              <img 
                src={profilePhoto} 
                alt="Mayuri Kulkarni" 
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground px-6 py-3 rounded-full shadow-lg font-semibold text-sm border-4 border-background">
              Available for Hire
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-8 flex items-center gap-2 text-sm text-muted-foreground animate-bounce">
        <span className="hidden md:inline">Scroll right to explore</span>
        <ChevronRight className="w-5 h-5" />
      </div>
    </section>
  )
}

export default HeroNew
