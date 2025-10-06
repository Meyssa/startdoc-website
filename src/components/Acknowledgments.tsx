import { Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Acknowledgments = () => {
  return (
    <section id="acknowledgments" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="backdrop-blur-sm bg-background/95 shadow-card-hover border-0">
            <CardContent className="p-8 md:p-12">
              <div className="space-y-6">
                <div className="text-center space-y-4">
                  <div className="inline-flex items-center space-x-2 bg-accent/10 px-4 py-2 rounded-full mx-auto">
                    <Heart className="w-4 h-4 text-accent" />
                    <span className="text-sm font-medium text-accent">Acknowledgments</span>
                  </div>
                  
                  <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
                    Acknowledgments
                  </h2>
                  
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    We acknowledge the support of the following organizations and services
                  </p>
                </div>

                <div className="space-y-6 pt-6">
                  <div className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-950/30 dark:to-blue-900/30 rounded-lg p-6 border border-blue-200 dark:border-blue-800">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold text-lg">M</span>
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-heading text-xl font-semibold text-foreground">
                          Microsoft CMT Service
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          The Microsoft CMT service was used for managing the peer-reviewing process for this conference. This service was provided for free by Microsoft and they bore all expenses, including costs for Azure cloud services as well as for software development and support.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="text-center pt-4">
                    <p className="text-sm text-muted-foreground">
                      These services help facilitate our research community events
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

export default Acknowledgments;
