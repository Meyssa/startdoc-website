import { Mic } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const FeaturedSpeakers = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="backdrop-blur-sm bg-background/95 shadow-card-hover border-0">
            <CardContent className="p-8 md:p-12 text-center">
              <div className="space-y-4">
                <div className="inline-flex items-center space-x-2 bg-accent/10 px-4 py-2 rounded-full mx-auto">
                  <Mic className="w-4 h-4 text-accent" />
                  <span className="text-sm font-medium text-accent">Featured Speakers</span>
                </div>
                
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
                  Meet Our Speakers
                </h2>
                
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Learn from distinguished researchers and academics who will share their insights and experiences
                </p>

                <div className="pt-6">
                  <Button
                    size="lg"
                    disabled
                    className="bg-gray-300 text-gray-500 shadow-none font-semibold px-8 py-4 h-auto cursor-not-allowed opacity-60 border border-gray-300"
                  >
                    <span>Speaker Lineup Coming Soon</span>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSpeakers;
