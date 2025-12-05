import { Clock, Calendar, MapPin, Coffee, Presentation, Users2, Laptop, Network } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ProgrammeSection = () => {
  const onlineWorkshops = [
    {
      date: "08/12",
      title: "What matters in research?",
      speaker: "Julia Kreutzer",
      type: "workshop",
      icon: Laptop,
      description: "Understanding the key elements that make research impactful"
    },
    {
      date: "09/12",
      title: "How to Read/Write a Research Paper",
      speaker: "Merouane Debbah",
      type: "workshop",
      icon: Laptop,
      description: "Master the art of reading and writing academic papers"
    },
    {
      date: "10/12",
      title: "The tools and pipeline: how to conduct research efficiently?",
      speaker: "Mohammed Belgoumri",
      type: "workshop",
      icon: Laptop,
      description: "Learn about essential tools and workflows for efficient research"
    },
    {
      date: "11/12",
      title: "Let the AI Do the Boring Stuff: GenAI for Researchers",
      speaker: "Hadjer Benmeziane",
      type: "workshop",
      icon: Laptop,
      description: "Discover how Generative AI can streamline your research workflow"
    },
    {
      date: "12/12",
      title: "AI-Assisted Coding for the Modern Researcher",
      speaker: "Meyssa Zouambi",
      type: "workshop",
      icon: Laptop,
      description: "Explore AI tools that can enhance your coding and development process"
    }
  ];

  const dDayProgramme = [
    {
      time: "09:30 - 09:40",
      title: "Welcome Message",
      type: "networking",
      icon: Users2,
      description: "Opening remarks and event introduction"
    },
    {
      time: "09:40 - 10:00",
      title: "First Keynote",
      speaker: "Dr Amrouche",
      type: "keynote",
      icon: Presentation,
      description: "Keynote presentation by Dr Amrouche"
    },
    {
      time: "10:05 - 10:25",
      title: "Second Keynote",
      speaker: "Pr Si Mohamed",
      type: "keynote",
      icon: Presentation,
      description: "Keynote presentation by Pr Si Mohamed"
    },
    {
      time: "10:25 - 10:40",
      title: "Coffee Break",
      type: "break",
      icon: Coffee,
      description: "Networking opportunity"
    },
    {
      time: "10:40 - 11:15",
      title: "Panel Discussion",
      type: "panel",
      icon: Users2,
      description: "Interactive panel discussion with experts"
    },
    {
      time: "11:20 - 12:00",
      title: "Poster Session",
      type: "posters",
      icon: Presentation,
      description: "Research poster presentations (approximately 3 presentations)"
    },
    {
      time: "12:00 - 13:00",
      title: "Lunch Break",
      type: "break",
      icon: Coffee,
      description: "Lunch break (speakers will be provided with lunch)"
    },
    {
      time: "13:00 - 15:00",
      title: "Networking & Matching Platform",
      type: "networking",
      icon: Network,
      description: "Connect with peers and explore research collaboration opportunities"
    },
    {
      time: "15:00",
      title: "Closing & Best Poster Award",
      type: "awards",
      icon: Presentation,
      description: "Closing remarks and announcement of the best poster award"
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "keynote":
        return "bg-primary text-primary-foreground";
      case "workshop":
        return "bg-accent text-accent-foreground";
      case "posters":
        return "bg-secondary text-secondary-foreground";
      case "panel":
        return "bg-primary/80 text-primary-foreground";
      case "networking":
        return "bg-green-500 text-white";
      case "break":
        return "bg-muted text-muted-foreground";
      case "awards":
        return "bg-yellow-500 text-white";
      case "closing":
        return "bg-secondary text-secondary-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <section id="programme" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
              Programme
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A week of online workshops followed by a full day of learning, networking, and research presentation designed to support your academic journey
            </p>
          </div>

          {/* Online Workshops Section */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <h3 className="font-heading text-3xl font-bold text-foreground mb-4">
                Online Workshops
              </h3>
              <p className="text-muted-foreground">
                Join us for a series of online workshops from December 8-12, 2025
              </p>
            </div>
            <div className="space-y-4">
              {onlineWorkshops.map((workshop, index) => (
                <Card key={index} className="shadow-card hover:shadow-card-hover transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      {/* Date Badge */}
                      <Badge className="bg-primary/10 text-primary hover:bg-primary/20 font-mono text-sm px-3 py-1">
                        {workshop.date}
                      </Badge>
                      
                      {/* Icon */}
                      <div className="w-10 h-10 bg-muted/50 rounded-lg flex items-center justify-center flex-shrink-0">
                        <workshop.icon className="w-5 h-5 text-muted-foreground" />
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="font-heading text-lg font-semibold text-foreground">
                            {workshop.title}
                          </h3>
                          <Badge className={`text-xs ${getTypeColor(workshop.type)}`}>
                            {workshop.type}
                          </Badge>
                        </div>
                        <p className="text-muted-foreground text-sm font-medium mb-1">
                          — {workshop.speaker}
                        </p>
                        <p className="text-muted-foreground text-sm">
                          {workshop.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* D-Day Section */}
          <div>
            <div className="text-center mb-8">
              <h3 className="font-heading text-3xl font-bold text-foreground mb-4">
                D-Day: December 13th, 2025
              </h3>
              <p className="text-muted-foreground mb-4">
                Main event day at ESI Algiers, Algeria
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <Calendar className="w-5 h-5 text-primary" />
                  <span className="font-medium">December 13th, 2025</span>
                </div>
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span className="font-medium">ESI Algiers, Algeria</span>
                </div>
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <Clock className="w-5 h-5 text-primary" />
                  <span className="font-medium">09:30 - 15:00</span>
                </div>
              </div>
            </div>

            {/* D-Day Programme Timeline */}
            <div className="space-y-4">
              {dDayProgramme.map((item, index) => (
                <Card key={index} className="shadow-card hover:shadow-card-hover transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      {/* Time Badge */}
                      <Badge className="bg-primary/10 text-primary hover:bg-primary/20 font-mono text-sm px-3 py-1">
                        {item.time}
                      </Badge>
                      
                      {/* Icon */}
                      <div className="w-10 h-10 bg-muted/50 rounded-lg flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-5 h-5 text-muted-foreground" />
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="font-heading text-lg font-semibold text-foreground">
                            {item.title}
                          </h3>
                          <Badge className={`text-xs ${getTypeColor(item.type)}`}>
                            {item.type}
                          </Badge>
                        </div>
                        {item.speaker && (
                          <p className="text-muted-foreground text-sm font-medium mb-1">
                            — {item.speaker}
                          </p>
                        )}
                        <p className="text-muted-foreground text-sm">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgrammeSection;