import { Calendar, MapPin, Users, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero">
        <div className="absolute inset-0 bg-black/10" />
        <img 
          src={heroBg} 
          alt="Academic conference background" 
          className="w-full h-full object-cover mix-blend-overlay opacity-30"
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          <Card className="backdrop-blur-sm bg-background/95 shadow-card-hover border-0">
            <CardContent className="p-8 md:p-12">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Column */}
                <div className="space-y-6">
                  <div className="space-y-4">
                    <div className="inline-flex items-center space-x-2 bg-accent/10 px-4 py-2 rounded-full">
                      <Calendar className="w-4 h-4 text-accent" />
                      <span className="text-sm font-medium text-accent">Start'Doc 2025</span>
                    </div>
                    
                    <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                      Join our{" "}
                      <span className="text-primary">Winter Research Day</span>
                    </h1>
                    
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Take the first step in your PhD journey and connect with Algeria's research community
                    </p>
                  </div>

                  {/* Event Details */}
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 text-muted-foreground">
                      <Calendar className="w-5 h-5 text-primary" />
                      <span className="font-medium">DATE: TBD</span>
                    </div>
                    <div className="flex items-center space-x-3 text-muted-foreground">
                      <MapPin className="w-5 h-5 text-primary" />
                      <span className="font-medium">LOCATION: Online + In Person</span>
                    </div>
                    <div className="flex items-center space-x-3 text-muted-foreground">
                      <Users className="w-5 h-5 text-primary" />
                      <span className="font-medium">Students & Researchers</span>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="pt-4">
                    <Button
                      size="lg"
                      disabled
                      className="bg-gray-300 text-gray-500 shadow-none font-semibold px-8 py-4 h-auto cursor-not-allowed opacity-60 border border-gray-300"
                    >
                      <span>Registration Coming Soon</span>
                    </Button>
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-6">
                  <div className="text-center lg:text-left">
                    <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">
                      What is Start'Doc?
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                      <strong className="text-primary">Start'Doc</strong> is a unique event designed for early-stage PhD students and those considering a research path. Our goal is to demystify the research journey, provide essential tools and insights, and foster a sense of community among doctoral candidates in <strong className="text-primary">Algeria</strong>.
                    </p>
                  </div>

                  <div>
                    <p className="text-muted-foreground leading-relaxed">
                      Whether you're feeling lost, unsure where to begin, or simply looking to connect with fellow researchers — Start'Doc is here to help you take your first confident steps into academic research.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;