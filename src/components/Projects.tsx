import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Eventmitra – Click-Plan-Celebrate",
      description: "Full-stack event management platform with role-based dashboards, analytics module, and booking system.",
      tech: ["React.js", "Django", "REST API", "DRF", "PostgreSQL"],
      date: "July 2025",
      highlights: [
        "Component-based responsive UI",
        "Role-based dashboards for shopkeepers & customers",
        "Analytics with custom API endpoints",
      ],
    },
    {
      title: "DivyaDarshan - Digital Darshan Platform",
      description: "Slot booking and virtual darshan platform with smooth UX and JWT authentication.",
      tech: ["React.js", "Django", "DRF", "PostgreSQL", "Tailwind CSS"],
      date: "March 2025",
      highlights: [
        "RESTful APIs for slot management",
        "JWT-based authentication",
        "Role-based access control",
      ],
    },
    {
      title: "HackathonSite - College Hackathon Website",
      description: "Complete hackathon management platform with separate user and admin dashboards.",
      tech: ["React.js", "PHP", "MySQL", "REST API", "Tailwind CSS"],
      date: "February 2025",
      highlights: [
        "User registration & event tracking",
        "Admin dashboard with management tools",
        "JWT authentication for secure routes",
      ],
    },
    {
      title: "AlgoSys – Interactive DSA Platform",
      description: "Learning platform with real-time visualizations, coding exercises, and performance tracking.",
      tech: ["React.js", "Django", "PostgreSQL", "Ace Editor", "REST API"],
      date: "November 2024",
      highlights: [
        "Real-time algorithm visualizations",
        "Professor dashboard for progress tracking",
        "Coding exercises with Ace Editor",
      ],
    },
    {
      title: "Kiddokorner - E-Commerce Platform",
      description: "Scalable backend for e-commerce with product management and order processing.",
      tech: ["Django", "DRF", "PostgreSQL", "REST API"],
      date: "August 2024",
      highlights: [
        "Scalable RESTful APIs",
        "JWT authentication",
        "Cart & order management",
      ],
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg">A showcase of my best work</p>
        </div>

        <div className="grid gap-8">
          {projects.map((project, idx) => (
            <Card 
              key={idx} 
              className="glass-card p-8 hover:shadow-2xl transition-all group"
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <span className="text-sm text-muted-foreground">{project.date}</span>
                  </div>
                  
                  <p className="text-foreground/80 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold mb-2 text-primary">Key Features:</h4>
                    <ul className="space-y-1">
                      {project.highlights.map((highlight, i) => (
                        <li key={i} className="text-sm text-foreground/70 flex items-start">
                          <span className="text-primary mr-2">•</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button size="lg" variant="outline" className="group">
            <a 
              href="https://github.com/myukulkarni" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Github className="w-5 h-5" />
              View More on GitHub
              <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
