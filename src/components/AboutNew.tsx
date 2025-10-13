import { Card } from "@/components/ui/card";
import { Trophy, TrendingUp, Users, Code } from "lucide-react";

const AboutNew = () => {
  const stats = [
    { icon: Code, label: "Projects", value: "12+", color: "text-primary" },
    { icon: TrendingUp, label: "GPA", value: "8.77", color: "text-primary" },
    { icon: Trophy, label: "Hackathons", value: "5+", color: "text-primary" },
    { icon: Users, label: "Leadership", value: "2", color: "text-primary" },
  ];

  return (
    <section className="scroll-section relative overflow-y-auto bg-muted/30">
      <div className="min-h-screen flex flex-col justify-center px-8 py-20">
        <div className="max-w-6xl mx-auto w-full">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-5xl font-bold mb-4">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-muted-foreground text-lg">Developer, Leader, Innovator</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left: Description */}
            <div className="space-y-6 animate-fade-in-up">
              <Card className="p-8 border-2">
                <h3 className="text-2xl font-bold mb-4 text-primary">Who I Am</h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    I'm a <strong className="text-foreground">Full Stack Developer</strong> pursuing BTech in Computer Science 
                    at SKNSCOE Pune with a passion for creating impactful web applications.
                  </p>
                  <p>
                    As <strong className="text-foreground">President of the Cultural Club</strong> and{" "}
                    <strong className="text-foreground">Vice President of Hackbreakers Coding Club</strong>, 
                    I combine technical expertise with leadership to drive innovation and foster collaborative environments.
                  </p>
                  <p>
                    My journey spans from competitive coding to full-stack development, with a focus on 
                    building scalable solutions using modern technologies like React, Django, and PostgreSQL.
                  </p>
                </div>
              </Card>

              <Card className="p-8 border-2 bg-primary/5">
                <h3 className="text-2xl font-bold mb-4">Beyond Code</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <p className="text-muted-foreground">🎵 Music enthusiast & dancer</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <p className="text-muted-foreground">📚 Avid reader & continuous learner</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <p className="text-muted-foreground">🎤 Public speaker & event organizer</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <p className="text-muted-foreground">🌱 Community builder & mentor</p>
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
