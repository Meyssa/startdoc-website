import { Clock, Calendar, MapPin, Coffee, Presentation, Users2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ProgrammeSection = () => {
  const programmeItems = [
    {
      time: "09:00 - 09:30",
      title: "Registration & Welcome Coffee",
      type: "networking",
      icon: Coffee,
      description: "Meet fellow researchers and enjoy refreshments"
    },
    {
      time: "09:30 - 10:30",
      title: "Opening Keynote",
      type: "keynote",
      icon: Presentation,
      description: "Starting Your Research Journey: From Idea to Impact"
    },
    {
      time: "10:30 - 11:00",
      title: "Coffee Break",
      type: "break",
      icon: Coffee,
      description: "Networking opportunity"
    },
    {
      time: "11:00 - 12:00",
      title: "Research Methodology Workshop",
      type: "workshop",
      icon: Users2,
      description: "Interactive session on research design and methodology"
    },
    {
      time: "12:00 - 13:00",
      title: "Lunch Break",
      type: "break",
      icon: Coffee,
      description: "Lunch and networking"
    },
    {
      time: "13:00 - 14:30",
      title: "Poster Session",
      type: "posters",
      icon: Presentation,
      description: "Present your research and engage with peers"
    },
    {
      time: "14:30 - 15:00",
      title: "Best Poster Awards",
      type: "awards",
      icon: Users2,
      description: "Recognition of outstanding research presentations"
    },
    {
      time: "15:00 - 16:00",
      title: "Panel Discussion",
      type: "panel",
      icon: Users2,
      description: "Q&A with experienced researchers and PhD supervisors"
    },
    {
      time: "16:00 - 16:30",
      title: "Closing Remarks",
      type: "closing",
      icon: Presentation,
      description: "Wrap-up and next steps"
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
              A full day of learning, networking, and research presentation designed to support your academic journey
            </p>
            
            {/* Event Details */}
            <div className="flex flex-wrap justify-center gap-6 mt-8">
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Calendar className="w-5 h-5 text-primary" />
                <span className="font-medium">Date: TBD</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="font-medium">Online + In Person</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Clock className="w-5 h-5 text-primary" />
                <span className="font-medium">09:00 - 16:30</span>
              </div>
            </div>
          </div>

          {/* Programme Timeline */}
          <div className="space-y-4">
            {programmeItems.map((item, index) => (
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
                      <p className="text-muted-foreground text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Note */}
          <Card className="mt-12 bg-gradient-card border-primary/20">
            <CardContent className="p-6">
              <div className="text-center">
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                  Programme Note
                </h3>
                <p className="text-muted-foreground">
                  This is a preliminary programme. The final schedule will be announced closer to the event date. 
                  All registered participants will receive detailed information about the programme and logistics.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProgrammeSection;