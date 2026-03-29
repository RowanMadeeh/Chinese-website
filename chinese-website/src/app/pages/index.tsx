import Navbar from "@/app/components/Navbar";
import HeroSection from "@/app/components/HeroSection";
import EducationSection from "@/app/components/EducationSection";
import CultureSection from "@/app/components/CultureSection";
import EntertainmentSection from "@/app/components/EntertainmentSection";
import FestivalsSection from "@/app/components/FestivalsSection";
import FoodSection from "@/app/components/FoodSection";
import { Footer } from "react-day-picker";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <EducationSection />
      <CultureSection />
      <EntertainmentSection />
      <FoodSection />
      <FestivalsSection />
      <Footer />
    </div>
  );
};

export default Index;