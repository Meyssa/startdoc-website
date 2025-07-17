import { LinkedinIcon, GraduationCap, Award, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const SpeakersSection = () => {
  const speakers = [
    {
      name: "Dr. Amina Benali",
      title: "Professor of Computer Science",
      institution: "USTHB, Algiers",
      expertise: ["Machine Learning", "AI Ethics", "Natural Language Processing"],
      bio: "Leading researcher in AI with 15+ years of experience. Published extensively in top-tier conferences and journals.",
      image: "https://images.unsplash.com/photo-1494790108755-2616c57b3c97?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Prof. Mohamed Cherif",
      title: "Director of Research",
      institution: "CERIST, Algiers",
      expertise: ["Cybersecurity", "Distributed Systems", "Blockchain"],
      bio: "Internationally recognized expert in cybersecurity with numerous patents and publications in secure systems.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Dr. Yasmine Kaddour",
      title: "Senior Research Scientist",
      institution: "CRTSE, Algiers",
      expertise: ["Robotics", "Computer Vision", "Embedded Systems"],
      bio: "Pioneer in robotics research with expertise in autonomous systems and industrial applications.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Dr. Karim Belaid",
      title: "Associate Professor",
      institution: "ENSIAS, Rabat",
      expertise: ["Algorithms", "Optimization", "Operations Research"],
      bio: "Expert in algorithmic optimization with significant contributions to combinatorial optimization problems.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
    }
  ];

  const stats = [
    {
      icon: Users,
      value: "4+",
      label: "Expert Speakers"
    },
    {
      icon: GraduationCap,
      value: "50+",
      label: "Years Combined Experience"
    },
    {
      icon: Award,
      value: "100+",
      label: "Publications"
    }
  ];

  return (
    <section id="speakers" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
              Featured Speakers
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Learn from leading researchers and academics who will share their expertise and insights to guide your research journey
            </p>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center shadow-card hover:shadow-card-hover transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="font-heading text-3xl font-bold text-foreground mb-2">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Speakers Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {speakers.map((speaker, index) => (
              <Card key={index} className="shadow-card hover:shadow-card-hover transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-6">
                    {/* Profile Image */}
                    <div className="w-20 h-20 bg-gradient-accent rounded-full flex-shrink-0 overflow-hidden">
                      <img 
                        src={speaker.image} 
                        alt={speaker.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    {/* Info */}
                    <div className="flex-1">
                      <h3 className="font-heading text-xl font-semibold text-foreground mb-1">
                        {speaker.name}
                      </h3>
                      <p className="text-primary font-medium mb-1">
                        {speaker.title}
                      </p>
                      <p className="text-muted-foreground text-sm mb-3">
                        {speaker.institution}
                      </p>
                      
                      {/* Expertise Tags */}
                      <div className="flex flex-wrap gap-2 mb-3">
                        {speaker.expertise.map((skill, skillIndex) => (
                          <Badge key={skillIndex} variant="secondary" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                      
                      {/* Bio */}
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {speaker.bio}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <Card className="mt-12 bg-gradient-card border-primary/20">
            <CardContent className="p-8 text-center">
              <h3 className="font-heading text-2xl font-semibold text-foreground mb-3">
                Learn from the Best
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Our speakers are carefully selected experts who understand the challenges of academic research. 
                They'll share practical insights, methodologies, and career guidance to help you succeed in your PhD journey.
              </p>
              <div className="text-sm text-muted-foreground">
                More speakers will be announced soon. Stay tuned for updates!
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SpeakersSection;