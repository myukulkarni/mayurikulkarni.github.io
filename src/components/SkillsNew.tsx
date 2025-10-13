import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Database, Wrench, Users } from "lucide-react";

const SkillsNew = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: Code2,
      color: "text-primary",
      skills: ["React.js", "TailwindCSS", "HTML5", "CSS3", "Bootstrap", "TypeScript"],
    },
    {
      title: "Backend",
      icon: Database,
      color: "text-primary",
      skills: ["Python", "Django", "Django REST", "REST APIs", "PostgreSQL", "MySQL"],
    },
    {
      title: "Tools & DevOps",
      icon: Wrench,
      color: "text-primary",
      skills: ["Git", "GitHub", "Postman", "VSCode", "Render", "JWT"],
    },
    {
      title: "Soft Skills",
      icon: Users,
      color: "text-primary",
      skills: ["Leadership", "Public Speaking", "Team Collaboration", "Communication"],
    },
  ];

  const additionalSkills = ["OOP", "SDLC", "Computer Networks", "Problem Solving", "Agile"];

  return (
    <section className="scroll-section relative overflow-y-auto bg-background">
      <div className="min-h-screen flex flex-col justify-center px-8 py-20">
        <div className="max-w-6xl mx-auto w-full">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-5xl font-bold mb-4">
              Tech <span className="gradient-text">Arsenal</span>
            </h2>
            <p className="text-muted-foreground text-lg">Tools and technologies I work with daily</p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {skillCategories.map((category, idx) => (
              <Card 
                key={idx} 
                className="p-6 border-2 hover:border-primary/50 hover:shadow-xl transition-all duration-300 group"
                style={{animationDelay: `${idx * 0.1}s`}}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <category.icon className={`w-6 h-6 ${category.color}`} />
                  </div>
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge 
                      key={skill} 
                      variant="secondary" 
                      className="px-3 py-1 bg-muted hover:bg-primary/10 transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          {/* Additional Skills */}
          <div className="text-center">
            <h4 className="text-xl font-semibold mb-4 text-muted-foreground">Also Experienced In</h4>
            <div className="flex flex-wrap gap-3 justify-center">
              {additionalSkills.map((tech) => (
                <Badge 
                  key={tech} 
                  variant="outline" 
                  className="text-base px-4 py-2 border-2 hover:border-primary hover:bg-primary/5 transition-all"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Code decoration */}
          <div className="mt-12 font-mono text-sm text-center text-muted-foreground">
            <code className="text-primary">{'// '}</code>
            <code>Continuously learning and adapting to new technologies</code>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsNew;
