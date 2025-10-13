import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone, Github, Linkedin, ExternalLink } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "kulkarnimayuri210@gmail.com",
      link: "mailto:kulkarnimayuri210@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 7620700252",
      link: "tel:+917620700252",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Sangli, Maharashtra, India",
      link: null,
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      url: "https://github.com/myukulkarni",
      username: "@myukulkarni",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      url: "https://linkedin.com/in/mayuri-kulkarni",
      username: "Mayuri Kulkarni",
    },
    {
      icon: ExternalLink,
      label: "Portfolio",
      url: "https://myukulkarni.github.io",
      username: "myukulkarni.github.io",
    },
  ];

  return (
    <section className="scroll-section relative overflow-y-auto bg-muted/30">
      <div className="min-h-screen flex flex-col justify-center px-8 py-20">
        <div className="max-w-6xl mx-auto w-full">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-5xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-muted-foreground text-lg">Let's connect and create something amazing together</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold mb-6">Contact Information</h3>
            
            {contactInfo.map((info, idx) => {
              const Icon = info.icon;
              return (
                <Card key={idx} className="glass-card p-6 hover:shadow-xl transition-all group">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
                      {info.link ? (
                        <a 
                          href={info.link}
                          className="text-lg font-medium hover:text-primary transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-lg font-medium">{info.value}</p>
                      )}
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Social Links */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold mb-6">Connect With Me</h3>
            
            {socialLinks.map((social, idx) => {
              const Icon = social.icon;
              return (
                <Card key={idx} className="glass-card p-6 hover:shadow-xl transition-all group">
                  <a 
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">{social.label}</p>
                        <p className="text-lg font-medium">{social.username}</p>
                      </div>
                    </div>
                    <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </a>
                </Card>
              );
            })}

            <Card className="glass-card p-8 mt-8 text-center">
              <p className="text-lg mb-4">Ready to collaborate?</p>
              <Button size="lg" className="w-full">
                <a href="mailto:kulkarnimayuri210@gmail.com" className="flex items-center gap-2">
                  <Mail className="w-5 h-5" />
                  Send me an email
                </a>
              </Button>
            </Card>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
