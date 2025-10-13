import { Card } from "@/components/ui/card";
import { GraduationCap, BookOpen } from "lucide-react";

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

  const languages = [
    { name: "English", level: "Full professional proficiency" },
    { name: "Hindi", level: "Full professional proficiency" },
    { name: "Marathi", level: "Native" },
  ];

  return (
    <section id="education" className="py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-5xl font-bold mb-4">
            <span className="gradient-text">Education</span> & Languages
          </h2>
          <p className="text-muted-foreground text-lg">Academic background</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
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

        {/* Languages */}
        <Card className="glass-card p-8 max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <BookOpen className="w-8 h-8 text-primary" />
            <h3 className="text-3xl font-bold">Languages</h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {languages.map((lang, idx) => (
              <div key={idx} className="text-center">
                <p className="text-xl font-semibold mb-1">{lang.name}</p>
                <p className="text-sm text-muted-foreground">{lang.level}</p>
              </div>
            ))}
          </div>
        </Card>

        {/* Interests */}
        <div className="mt-12 text-center">
          <h4 className="text-2xl font-bold mb-6">Interests & Hobbies</h4>
          <div className="flex flex-wrap gap-4 justify-center">
            {["Travelling", "Writing Scripts & Poems", "Reading", "Movies", "Anchoring"].map((interest) => (
              <Card key={interest} className="glass-card px-6 py-3 hover:scale-105 transition-transform">
                <p className="font-medium">{interest}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
