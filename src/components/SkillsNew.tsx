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
import { Code2, Database, Globe, GitBranch, Lightbulb, Users, Target, MessageSquare, Gauge, Sparkles } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const SkillsNew = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      description: "Building responsive, modern, and user-centric web interfaces",
      icon: Globe,
      skills: [
        {
          name: "React.js & TypeScript",
          level: "Advanced",
          icon: SiReact,
          description: "Architecting scalable component-based applications with type-safe code. Experienced in hooks, context API, and performance optimization for seamless user experiences.",
          practical: "Built multiple production-ready SPAs with complex state management"
        },
        {
          name: "Tailwind CSS",
          level: "Advanced",
          icon: SiTailwindcss,
          description: "Crafting pixel-perfect, responsive designs with utility-first CSS. Proficient in creating custom design systems and maintaining consistent UI/UX across applications.",
          practical: "Developed custom component libraries and design tokens"
        },
        {
          name: "HTML5 & CSS3",
          level: "Expert",
          icon: SiHtml5,
          description: "Mastering semantic markup and modern styling techniques. Expert in accessibility standards, animations, and cross-browser compatibility.",
          practical: "Foundation for all web projects with focus on web standards"
        }
      ]
    },
    {
      title: "Backend Development",
      description: "Designing robust, scalable server-side solutions",
      icon: Database,
      skills: [
        {
          name: "Python & Django",
          level: "Advanced",
          icon: SiPython,
          description: "Developing powerful REST APIs and full-stack applications with Django and DRF. Strong understanding of MVC architecture, authentication, and secure coding practices.",
          practical: "Created enterprise-level applications with complex business logic"
        },
        {
          name: "PostgreSQL & MySQL",
          level: "Intermediate",
          icon: SiPostgresql,
          description: "Designing efficient database schemas and writing optimized queries. Proficient in data modeling, indexing, and ensuring data integrity for scalable applications.",
          practical: "Managed databases handling thousands of concurrent transactions"
        }
      ]
    },
    {
      title: "Development Tools",
      description: "Streamlining workflows with modern development practices",
      icon: Code2,
      skills: [
        {
          name: "Git & GitHub",
          level: "Advanced",
          icon: SiGit,
          description: "Implementing efficient version control and collaborative workflows. Experienced in branching strategies, pull requests, code reviews, and CI/CD integration.",
          practical: "Managed codebases across multiple teams with clean commit histories"
        },
        {
          name: "Postman & API Testing",
          level: "Intermediate",
          icon: SiPostman,
          description: "Testing and documenting RESTful APIs with comprehensive test suites. Skilled in automated testing, environment management, and API debugging.",
          practical: "Built extensive API collections for development and QA teams"
        }
      ]
    }
  ];

  const professionalSkills = [
    {
      name: "Problem Solving & Critical Thinking",
      icon: Lightbulb,
      description: "Breaking down complex challenges into actionable solutions. I approach problems systematically, analyzing requirements and designing efficient algorithms that scale."
    },
    {
      name: "Team Collaboration",
      icon: Users,
      description: "Thriving in agile environments with cross-functional teams. Experienced in code reviews, pair programming, and knowledge sharing to deliver high-quality products."
    },
    {
      name: "Strategic Planning",
      icon: Target,
      description: "Aligning technical decisions with business objectives. I evaluate trade-offs, prioritize features, and architect solutions that meet both current and future needs."
    },
    {
      name: "Communication",
      icon: MessageSquare,
      description: "Translating technical concepts for diverse audiences. I document code clearly, present ideas effectively, and bridge the gap between technical and non-technical stakeholders."
    },
    {
      name: "Performance Optimization",
      icon: Gauge,
      description: "Identifying bottlenecks and implementing performance improvements. I profile applications, optimize database queries, and ensure responsive user experiences."
    },
    {
      name: "Continuous Innovation",
      icon: Sparkles,
      description: "Staying current with industry trends and emerging technologies. I actively experiment with new tools, contribute to learning communities, and apply best practices."
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Expert": return "bg-primary text-primary-foreground";
      case "Advanced": return "bg-primary/80 text-primary-foreground";
      case "Intermediate": return "bg-primary/60 text-primary-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <section className="scroll-section relative overflow-y-auto bg-background">
      <div className="min-h-screen px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-12 lg:mb-16 animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
              Skills & <span className="gradient-text">Expertise</span>
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base lg:text-lg max-w-2xl mx-auto px-4">
              A comprehensive blend of technical proficiency and professional excellence, 
              refined through hands-on experience and continuous learning
            </p>
          </div>

          {/* Technical Skills - Card Grid */}
          <div className="space-y-8 sm:space-y-10 lg:space-y-12 mb-12 sm:mb-14 lg:mb-16">
            <div className="text-center px-4">
              <h3 className="text-2xl sm:text-3xl font-bold mb-2">
                <span className="gradient-text">Technical Expertise</span>
              </h3>
              <p className="text-muted-foreground text-sm sm:text-base">Tools and technologies I leverage to build exceptional products</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
              {skillCategories.map((category, idx) => {
                const CategoryIcon = category.icon;
                return (
                  <Card 
                    key={category.title} 
                    className="group hover:shadow-lg transition-all duration-300 border-primary/20 hover:border-primary/50 animate-fade-in-up"
                    style={{ animationDelay: `${idx * 0.1}s` }}
                  >
                    <CardHeader className="pb-4">
                      <div className="flex items-center gap-2 sm:gap-3 mb-2">
                        <div className="p-1.5 sm:p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                          <CategoryIcon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                        </div>
                        <CardTitle className="text-lg sm:text-xl">{category.title}</CardTitle>
                      </div>
                      <CardDescription className="text-xs sm:text-sm">{category.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4 sm:space-y-5 lg:space-y-6">
                      {category.skills.map((skill) => {
                        const SkillIcon = skill.icon;
                        return (
                          <div key={skill.name} className="space-y-1.5 sm:space-y-2">
                            <div className="flex items-start justify-between gap-2">
                              <div className="flex items-center gap-1.5 sm:gap-2">
                                <SkillIcon className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0 mt-0.5" />
                                <h4 className="font-semibold text-xs sm:text-sm">{skill.name}</h4>
                              </div>
                              <Badge className={`${getLevelColor(skill.level)} text-[10px] sm:text-xs whitespace-nowrap`}>
                                {skill.level}
                              </Badge>
                            </div>
                            <p className="text-[11px] sm:text-xs text-muted-foreground leading-relaxed">
                              {skill.description}
                            </p>
                            <div className="flex items-start gap-1.5 sm:gap-2 pt-0.5 sm:pt-1">
                              <Code2 className="w-3 h-3 text-primary/60 flex-shrink-0 mt-0.5" />
                              <p className="text-[11px] sm:text-xs text-primary/80 italic">
                                {skill.practical}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Professional Skills */}
          <div className="space-y-6 sm:space-y-8">
            <div className="text-center px-4">
              <h3 className="text-2xl sm:text-3xl font-bold mb-2">
                <span className="gradient-text">Professional Excellence</span>
              </h3>
              <p className="text-muted-foreground text-sm sm:text-base">Soft skills that drive collaboration and impactful results</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              {professionalSkills.map((skill, idx) => {
                const SkillIcon = skill.icon;
                return (
                  <Card 
                    key={skill.name} 
                    className="group hover:shadow-md transition-all duration-300 border-primary/20 hover:border-primary/50 animate-fade-in-up"
                    style={{ animationDelay: `${idx * 0.08}s` }}
                  >
                    <CardContent className="pt-4 sm:pt-5 lg:pt-6">
                      <div className="flex items-start gap-2 sm:gap-3">
                        <div className="p-1.5 sm:p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors flex-shrink-0">
                          <SkillIcon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                        </div>
                        <div className="space-y-1.5 sm:space-y-2">
                          <h4 className="font-semibold text-xs sm:text-sm">{skill.name}</h4>
                          <p className="text-[11px] sm:text-xs text-muted-foreground leading-relaxed">
                            {skill.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Footer Note */}
          <div className="mt-8 sm:mt-10 lg:mt-12 text-center px-4">
            <div className="inline-block px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-primary/5 border border-primary/20">
              <p className="text-xs sm:text-sm text-muted-foreground">
                <code className="text-primary font-mono">{'// '}</code>
                Continuously evolving through hands-on projects and staying ahead of industry trends
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsNew;
