import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import CallForPosters from "@/components/CallForPosters";
// import ProgrammeSection from "@/components/ProgrammeSection";
import SpeakersSection from "@/components/SpeakersSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <CallForPosters />
      {/* <ProgrammeSection /> */}
      <SpeakersSection />
      <Footer />
    </div>
  );
};

export default Index;
