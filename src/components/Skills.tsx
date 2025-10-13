import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React.js", level: 90 },
        { name: "TailwindCSS", level: 95 },
        { name: "HTML5 & CSS3", level: 95 },
        { name: "Bootstrap", level: 85 },
      ],
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Python", level: 90 },
        { name: "Django", level: 90 },
        { name: "Django REST Framework", level: 85 },
        { name: "REST APIs", level: 90 },
      ],
    },
    {
      title: "Database & Tools",
      skills: [
        { name: "PostgreSQL", level: 85 },
        { name: "MySQL", level: 80 },
        { name: "Git & GitHub", level: 90 },
        { name: "Postman", level: 85 },
      ],
    },
    {
      title: "Soft Skills",
      skills: [
        { name: "Leadership", level: 95 },
        { name: "Public Speaking", level: 90 },
        { name: "Team Collaboration", level: 95 },
        { name: "Communication", level: 95 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-5xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-muted-foreground text-lg">Technologies I work with</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <Card 
              key={idx} 
              className="glass-card p-8 hover:shadow-2xl transition-all"
            >
              <h3 className="text-2xl font-bold mb-6 text-primary">{category.title}</h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skillIdx}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <h4 className="text-xl font-semibold mb-4">Additional Technologies</h4>
          <div className="flex flex-wrap gap-3 justify-center">
            {["OOP", "SDLC", "Computer Networks", "JWT Authentication", "VSCode", "Render"].map((tech) => (
              <Badge key={tech} variant="outline" className="text-base px-4 py-2">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
