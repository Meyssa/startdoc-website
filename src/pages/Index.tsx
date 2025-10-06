import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import CallForPosters from "@/components/CallForPosters";
import FeaturedSpeakers from "@/components/FeaturedSpeakers";
import ProgrammeSection from "@/components/ProgrammeSection";
import SpeakersSection from "@/components/SpeakersSection";
import Acknowledgments from "@/components/Acknowledgments";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <CallForPosters />
      <FeaturedSpeakers />
      {/* <ProgrammeSection /> */}
      {/* <SpeakersSection /> */}
      <Acknowledgments />
      <Footer />
    </div>
  );
};

export default Index;
