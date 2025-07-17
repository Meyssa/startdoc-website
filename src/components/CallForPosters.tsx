import { FileText, Users, Globe, CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const CallForPosters = () => {
  const guidelines = [
    "PhD/Master students can submit",
    "No publication or finished research required — work-in-progress welcome!",
    "Use the poster template provided",
    "Posters have to be in English or Arabic"
  ];

  const topics = [
    "Artificial Intelligence & Machine Learning",
    "Large Language Models & NLP",
    "Explainable AI (XAI)",
    "Algorithms & Optimization",
    "Cybersecurity & Privacy",
    "Robotics & Embedded Systems"
  ];

  return (
    <section id="call-for-posters" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
              Call for Posters
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Start'Doc invites submissions for poster presentations from PhD students and aspiring researchers. Whether you're presenting early ideas, ongoing work, or a published paper, this is a great opportunity to receive feedback, connect with peers, and grow your research network.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Guidelines */}
            <Card className="shadow-card hover:shadow-card-hover transition-shadow duration-300">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <FileText className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-heading text-2xl">Start'Doc 2025 Guidelines</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {guidelines.map((guideline, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{guideline}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Topics */}
            <Card className="shadow-card hover:shadow-card-hover transition-shadow duration-300">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Globe className="w-5 h-5 text-accent" />
                  </div>
                  <span className="font-heading text-2xl">Topics of Interest</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-3">
                  {topics.map((topic, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="justify-start p-3 text-sm font-medium hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                    >
                      {topic}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Additional Info */}
          <Card className="mt-8 bg-gradient-card border-primary/20">
            <CardContent className="p-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                    Why Submit a Poster?
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Presenting at Start'Doc is more than just sharing your research—it's about building connections, receiving valuable feedback from peers and mentors, and contributing to Algeria's growing research community. Whether you're just starting your PhD journey or looking to expand your network, this is your opportunity to shine.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CallForPosters;