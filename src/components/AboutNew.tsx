import { Card } from "@/components/ui/card";
import { Trophy, TrendingUp, Code, GitBranch } from "lucide-react";

const AboutNew = () => {
  const stats = [
    { icon: Code, label: "Projects", value: "12+", color: "text-primary" },
    { icon: TrendingUp, label: "GPA", value: "8.77", color: "text-primary" },
    { icon: Trophy, label: "Hackathons", value: "5+", color: "text-primary" },
    { icon: GitBranch, label: "Tech Stack", value: "15+", color: "text-primary" },
  ];

  return (
    <section className="scroll-section relative overflow-y-auto bg-muted/30">
      <div className="min-h-screen flex flex-col justify-center px-8 py-20">
        <div className="max-w-6xl mx-auto w-full">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-5xl font-bold mb-4">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-muted-foreground text-lg">Full Stack Developer & Problem Solver</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left: Description */}
            <div className="space-y-6 animate-fade-in-up">
              <Card className="p-8 border-2">
                <h3 className="text-2xl font-bold mb-4 text-primary">Technical Profile</h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    I'm a <strong className="text-foreground">Full Stack Developer</strong> pursuing BTech in Computer Science 
                    at SKNSCOE Pune, specializing in building scalable web applications with modern frameworks and architectures.
                  </p>
                  <p>
                    My technical expertise spans <strong className="text-foreground">React, Django, PostgreSQL, and REST APIs</strong>, 
                    with hands-on experience in developing end-to-end solutions from database design to responsive frontend interfaces.
                  </p>
                  <p>
                    I focus on <strong className="text-foreground">clean code, performance optimization, and best practices</strong>, 
                    utilizing Git workflows, agile methodologies, and continuous integration to deliver production-ready applications.
                  </p>
                </div>
              </Card>

              <Card className="p-8 border-2 bg-primary/5">
                <h3 className="text-2xl font-bold mb-4">Tech Focus Areas</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <p className="text-muted-foreground">💻 Full Stack Development (MERN/Django Stack)</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <p className="text-muted-foreground">🗄️ Database Architecture & Query Optimization</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <p className="text-muted-foreground">🔧 RESTful API Design & Integration</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <p className="text-muted-foreground">🚀 DevOps & Cloud Deployment (AWS, Docker)</p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Right: Stats */}
            <div className="grid grid-cols-2 gap-6 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              {stats.map((stat, idx) => (
                <Card 
                  key={idx} 
                  className="p-6 text-center hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50 group"
                >
                  <div className="inline-flex p-4 rounded-full bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors">
                    <stat.icon className={`w-8 h-8 ${stat.color}`} />
                  </div>
                  <div className="text-4xl font-bold mb-2 gradient-text">{stat.value}</div>
                  <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutNew;
