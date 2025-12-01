import { LinkedinIcon, GraduationCap, Award, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import juliaImage from "@/assets/speakers/DSC00536.JPG";
import mohammedImage from "@/assets/speakers/mohammed.jpeg";
import meyssaImage from "@/assets/speakers/image0.jpg";
import hadjerImage from "@/assets/speakers/HB.jpg";
import amroucheImage from "@/assets/speakers/Profile_Amrouche.jpg";
import berrimiImage from "@/assets/speakers/image (2).png";

const SpeakersSection = () => {
  const speakers = [
    {
      name: "Mohamed Amrouche",
      title: "Keynote Speaker, Senior Geophysicist & Geoscience Team Leader",
      institution: "SLB (ex. Schlumberger)",
      expertise: [
        "Geophysics",
        "Engineering Seismology",
        "Subsurface Reservoir Modeling",
        "Energy Industry"
      ],
      bio: "Dr. Mohamed Amrouche is a senior geophysicist and geoscience team leader at the energy services company SLB (ex. Schlumberger), with a blended experience between academia and industry. He completed a Master and PhD in Geophysics at the Tokyo Institute of Technology (Japan), focusing on engineering seismology and geophysics, where he also worked as a research assistant within the Center of Urban Earthquake Engineering (CUEE). After working as a geophysicist for Schlumberger in Japan on subsurface reservoir modeling for major energy companies, he transferred to Algeria in 2022, where he now leads a team of geoscientists supporting Algerian and North African oil companies. In parallel with his industry role, Dr. Amrouche is heavily involved in scientific research and has published numerous academic papers, conference proceedings, and book chapters in collaboration with leading research institutions and universities.",
      image: amroucheImage
    },
    {
      name: "Hadjer Benmeziane",
      title: "Research Scientist",
      institution: "IBM Research, Zürich Lab",
      expertise: ["AutoML", "Analog-in-Memory Computing", "Efficient Deep Learning", "Machine Learning"],
      bio: "Hadjer Benmeziane is a computer scientist specializing in machine learning, with a PhD focused on AutoML. She works as a research scientist at IBM Research (Zürich lab), where her research centers on analog-in-memory computing and efficient deep-learning methods. She is also the founder of School of AI Algiers, an initiative to share AI knowledge and support projects in Algeria.",
      image: hadjerImage
    },
    {
      name: "Julia Kreutzer",
      title: "Senior Research Scientist",
      institution: "Cohere Labs",
      expertise: ["Multilingual LLMs", "Evaluation Standards", "Machine Translation"],
      bio: "Julia Kreutzer is a Senior Research Scientist at Cohere Labs. She's conducting research on making LLMs more multilingual and globally accessible, and on improving evaluation standards. She received her PhD from the University of Heidelberg and previously worked at Google Translate.",
      image: juliaImage
    },
    {
      name: "Meyssa Zouambi",
      title: "AI Engineer",
      institution: "Expleo Group, France",
      expertise: ["Neural Architecture Search", "Optimization", "Large Language Models"],
      bio: "Meyssa Zouambi completed her PhD in Computer Science at the University of Lille, with a thesis centered on neural architecture search and optimization. She is currently an AI Engineer specializing in large language models.",
      image: meyssaImage
    },
    {
      name: "Mohammed Belgoumri",
      title: "PhD Student",
      institution: "Deakin University, MLDS Research Group",
      expertise: ["Theoretical AI", "Neural Loss Landscapes", "Robust Machine Learning"],
      bio: "Mohammed Belgoumri is PhD student at Deakin University's MLDS research group. His thesis focuses on theoretical AI, particularly, the study of the geometry of neural loss landscapes and its applications to robust ML.",
      image: mohammedImage
    },
    {
      name: "BERRIMI Mohamed",
      title: "Head of AI",
      institution: "Fyler",
      expertise: ["Artificial Intelligence", "Machine Learning", "Google Cloud", "MLOps"],
      bio: "Mohamed Berrimi holds two PhD degrees in Computer Science and Artificial Intelligence and is a Google Developer Expert (GDE) in AI/ML and Google Cloud. He is currently Head of AI at Fyler, where he focuses on building and deploying AI-driven products and solutions.",
      image: berrimiImage
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
              Learn from leading researchers and experts who will share their insights to guide you in your research journey
            </p>
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
                        className={`w-full h-full object-cover ${
                          speaker.name === "Meyssa Zouambi" 
                            ? "scale-150 object-[center_50%]" 
                            : ""
                        }`}
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
                {/* More speakers will be announced soon. Stay tuned for updates! */}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SpeakersSection;