import { Card } from "@/components/ui/card";
import { Award, Code, Users, Trophy } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Code, label: "Projects Completed", value: "5+" },
    { icon: Award, label: "GPA", value: "9.4/10" },
    { icon: Trophy, label: "Hackathons Won", value: "1st" },
    { icon: Users, label: "Leadership Roles", value: "2" },
  ];

  return (
    <section id="about" className="py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground text-lg">Get to know who I am</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6 animate-fade-in-up">
            <h3 className="text-3xl font-bold">Hello! I'm Mayuri 👋</h3>
            <p className="text-lg text-foreground/80 leading-relaxed">
              I'm a passionate Full Stack Developer and second-year Computer Science student 
              at SKNSCOE, Pandharpur. My journey in tech combines creativity with code, 
              building dynamic web experiences that make a difference.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              As <strong>President of the Cultural Club</strong> and <strong>Vice-President of Hackbreakers Coding Club</strong>, 
              I lead with innovation and inspire collaboration. Whether it's crafting full-stack applications 
              or hosting flagship events, I thrive on challenges that push boundaries.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              When I'm not coding, you'll find me traveling, writing scripts and poems, 
              or exploring the latest in tech and cinema.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card 
                  key={index} 
                  className="glass-card p-6 text-center hover:scale-105 transition-transform cursor-pointer"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <Icon className="w-10 h-10 mx-auto mb-3 text-primary" />
                  <p className="text-3xl font-bold mb-1 gradient-text">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
