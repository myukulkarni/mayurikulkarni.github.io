import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Award, Medal } from "lucide-react";

const Achievements = () => {
  const achievements = [
    {
      icon: Trophy,
      title: "Miss Sinhgad 2025",
      description: "1st Rank in Personality Development Contest 2K25, Pandharpur",
      color: "text-yellow-500",
    },
    {
      icon: Award,
      title: "Sinhgad Hackathon Winner",
      description: "1st Rank in Sinhgad Hackathon 2K24 for innovation and technical excellence",
      color: "text-purple-500",
    },
    {
      icon: Medal,
      title: "HackerRank Gold Badge",
      description: "Gold Badge on HackerRank for problem-solving proficiency",
      color: "text-amber-500",
    },
  ];

  return (
    <section id="achievements" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-5xl font-bold mb-4">
            <span className="gradient-text">Achievements</span> & Awards
          </h2>
          <p className="text-muted-foreground text-lg">Recognition and milestones</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {achievements.map((achievement, idx) => {
            const Icon = achievement.icon;
            return (
              <Card 
                key={idx} 
                className="glass-card p-8 text-center hover:scale-105 transition-all cursor-pointer group"
              >
                <div className="mb-6 flex justify-center">
                  <div className="p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Icon className={`w-12 h-12 ${achievement.color}`} />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3">{achievement.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {achievement.description}
                </p>
              </Card>
            );
          })}
        </div>

        {/* Leadership Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold mb-4">
              Leadership & <span className="gradient-text">Extracurriculars</span>
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="glass-card p-8">
              <h4 className="text-2xl font-bold mb-4 text-primary">President - Cultural Club</h4>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Leading cultural initiatives at Sinhgad Institute, Pandharpur. Successfully hosted multiple 
                Annual flagship events showcasing strong anchoring and coordination skills.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge>Event Management</Badge>
                <Badge>Team Leadership</Badge>
                <Badge>Public Speaking</Badge>
              </div>
            </Card>

            <Card className="glass-card p-8">
              <h4 className="text-2xl font-bold mb-4 text-secondary">Vice-President - Hackbreakers Coding Club</h4>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Driving technical innovation and coding culture at Sinhgad Institute. Organizing hackathons, 
                workshops, and collaborative coding sessions.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge>Technical Leadership</Badge>
                <Badge>Mentorship</Badge>
                <Badge>Community Building</Badge>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
