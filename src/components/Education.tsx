import { Card } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "BTech in Computer Science & Engineering",
      institution: "SKNSCOE, Pandharpur",
      period: "2024 - 2027",
      score: "GPA: 9.4/10",
      status: "current",
    },
    {
      degree: "12th Grade",
      institution: "SRPU College, Vijaypura",
      period: "2021 - 2023",
      score: "Percentage: 87/100",
      status: "completed",
    },
    {
      degree: "10th Grade",
      institution: "Jath Highschool, Jath",
      period: "2021",
      score: "Percentage: 87/100",
      status: "completed",
    },
  ];

  return (
    <section className="scroll-section relative overflow-y-auto bg-background">
      <div className="min-h-screen flex flex-col justify-center px-8 py-20">
        <div className="max-w-6xl mx-auto w-full">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-5xl font-bold mb-4">
            <span className="gradient-text">Education</span>
          </h2>
          <p className="text-muted-foreground text-lg">Academic background and qualifications</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {education.map((edu, idx) => (
            <Card 
              key={idx} 
              className={`glass-card p-8 hover:shadow-2xl transition-all ${
                edu.status === 'current' ? 'ring-2 ring-primary' : ''
              }`}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                {edu.status === 'current' && (
                  <span className="px-3 py-1 text-xs font-medium bg-primary text-primary-foreground rounded-full">
                    Current
                  </span>
                )}
              </div>
              
              <h3 className="text-xl font-bold mb-2">{edu.degree}</h3>
              <p className="text-primary font-medium mb-2">{edu.institution}</p>
              <p className="text-sm text-muted-foreground mb-3">{edu.period}</p>
              <p className="text-lg font-semibold gradient-text">{edu.score}</p>
            </Card>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
};

export default Education;
