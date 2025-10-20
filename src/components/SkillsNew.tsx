import { 
  SiReact, 
  SiTailwindcss, 
  SiHtml5, 
  SiCss3, 
  SiBootstrap, 
  SiTypescript,
  SiPython,
  SiDjango,
  SiPostgresql,
  SiMysql,
  SiGit,
  SiGithub,
  SiPostman
} from "react-icons/si";
import { Network, Brain, Lightbulb, Code, Users, Target, Puzzle, Rocket, BookOpen, TrendingUp } from "lucide-react";
import { MonitorSmartphone } from "lucide-react";

const SkillsNew = () => {
  const technicalSkills = [
    { name: "React.js", icon: SiReact, position: "top-0 left-1/2 -translate-x-1/2" },
    { name: "Python", icon: SiPython, position: "top-[12%] right-[5%]" },
    { name: "Django", icon: SiDjango, position: "top-[35%] right-[2%]" },
    { name: "PostgreSQL", icon: SiPostgresql, position: "bottom-[35%] right-[2%]" },
    { name: "MySQL", icon: SiMysql, position: "bottom-[12%] right-[5%]" },
    { name: "TailwindCSS", icon: SiTailwindcss, position: "bottom-0 left-1/2 -translate-x-1/2" },
    { name: "Git", icon: SiGit, position: "bottom-[12%] left-[5%]" },
    { name: "GitHub", icon: SiGithub, position: "bottom-[35%] left-[2%]" },
    { name: "HTML5", icon: SiHtml5, position: "top-[35%] left-[2%]" },
    { name: "TypeScript", icon: SiTypescript, position: "top-[12%] left-[5%]" },
    { name: "CSS3", icon: SiCss3, position: "top-1/2 left-0 -translate-y-1/2" },
    { name: "Postman", icon: SiPostman, position: "top-1/2 right-0 -translate-y-1/2" },
  ];

  const softSkills = [
    { name: "Problem Solving", icon: Lightbulb, position: "top-0 left-1/2 -translate-x-1/2" },
    { name: "Team Collaboration", icon: Users, position: "top-[15%] right-[5%]" },
    { name: "Strategic Thinking", icon: Target, position: "top-[40%] right-[2%]" },
    { name: "Continuous Learning", icon: BookOpen, position: "bottom-[40%] right-[2%]" },
    { name: "Adaptability", icon: Puzzle, position: "bottom-[15%] right-[5%]" },
    { name: "Innovation", icon: Rocket, position: "bottom-0 left-1/2 -translate-x-1/2" },
    { name: "Growth Mindset", icon: TrendingUp, position: "bottom-[15%] left-[5%]" },
    { name: "System Design", icon: Network, position: "top-[15%] left-[5%]" },
    { name: "OOP", icon: Code, position: "top-[40%] left-[2%]" },
    { name: "Computer Networks", icon: Network, position: "bottom-[40%] left-[2%]" },
  ];

  return (
    <section className="scroll-section relative overflow-y-auto bg-background">
      <div className="min-h-screen flex flex-col justify-center px-8 py-12">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-5xl font-bold mb-4">
              Skills & <span className="gradient-text">Expertise</span>
            </h2>
            <p className="text-muted-foreground text-lg">My professional toolkit and capabilities</p>
          </div>

          {/* Skills Grid - Side by Side */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Technical Skills Section */}
            <div>
              <h3 className="text-2xl font-bold text-center mb-8">
                <span className="gradient-text">Technical Skills</span>
              </h3>
              <div className="relative w-full max-w-xl mx-auto" style={{ height: '500px' }}>
                {/* Central Computer Illustration */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                  <div className="relative w-32 h-32 flex items-center justify-center">
                    <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl animate-pulse"></div>
                    <div className="relative bg-gradient-to-br from-primary/20 to-primary/5 backdrop-blur-sm p-6 rounded-2xl border-2 border-primary/30">
                      <MonitorSmartphone className="w-20 h-20 text-primary animate-float" />
                    </div>
                  </div>
                </div>

                {/* Orbiting Technical Skills */}
                {technicalSkills.map((skill, idx) => {
                  const SkillIcon = skill.icon;
                  return (
                    <div
                      key={skill.name}
                      className={`absolute ${skill.position} animate-fade-in-up`}
                      style={{ animationDelay: `${idx * 0.08}s` }}
                    >
                      <div className="group relative">
                        <div className="absolute inset-0 bg-primary/20 rounded-full blur-lg group-hover:blur-xl transition-all"></div>
                        <div className="relative bg-background/80 backdrop-blur-sm p-4 rounded-full border-2 border-primary/30 hover:border-primary hover:scale-110 transition-all duration-300 shadow-lg">
                          <SkillIcon className="w-8 h-8 text-primary" />
                        </div>
                        <div className="absolute -bottom-7 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-20">
                          <span className="text-xs font-semibold text-primary bg-background/95 px-2 py-1 rounded-full border border-primary/30">
                            {skill.name}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Soft Skills Section */}
            <div>
              <h3 className="text-2xl font-bold text-center mb-8">
                <span className="gradient-text">Professional Skills</span>
              </h3>
              <div className="relative w-full max-w-xl mx-auto" style={{ height: '500px' }}>
                {/* Central Brain Illustration */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                  <div className="relative w-32 h-32 flex items-center justify-center">
                    <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl animate-pulse"></div>
                    <div className="relative bg-gradient-to-br from-primary/20 to-primary/5 backdrop-blur-sm p-6 rounded-2xl border-2 border-primary/30">
                      <Brain className="w-20 h-20 text-primary animate-float" />
                    </div>
                  </div>
                </div>

                {/* Orbiting Soft Skills */}
                {softSkills.map((skill, idx) => {
                  const SkillIcon = skill.icon;
                  return (
                    <div
                      key={skill.name}
                      className={`absolute ${skill.position} animate-fade-in-up`}
                      style={{ animationDelay: `${idx * 0.08}s` }}
                    >
                      <div className="group relative">
                        <div className="absolute inset-0 bg-primary/20 rounded-full blur-lg group-hover:blur-xl transition-all"></div>
                        <div className="relative bg-background/80 backdrop-blur-sm p-4 rounded-full border-2 border-primary/30 hover:border-primary hover:scale-110 transition-all duration-300 shadow-lg">
                          <SkillIcon className="w-8 h-8 text-primary" />
                        </div>
                        <div className="absolute -bottom-7 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-20">
                          <span className="text-xs font-semibold text-primary bg-background/95 px-2 py-1 rounded-full border border-primary/30">
                            {skill.name}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Code decoration */}
          <div className="mt-8 font-mono text-sm text-center text-muted-foreground">
            <code className="text-primary">{'// '}</code>
            <code>Continuously evolving with technology and professional growth</code>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsNew;
