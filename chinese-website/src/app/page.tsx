"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster as Sonner } from "@/app/components/ui/sonner";
import { Toaster } from "@/app/components/ui/toaster";
import { TooltipProvider } from "@/app/components/ui/tooltip";
import Navbar from "@/app/components/Navbar";
import HeroSection from "@/app/components/HeroSection";
import EducationSection from "@/app/components/EducationSection";
import CultureSection from "@/app/components/CultureSection";
import EntertainmentSection from "@/app/components/EntertainmentSection";
import FoodSection from "@/app/components/FoodSection";
import FestivalsSection from "@/app/components/FestivalsSection";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <div className="min-h-screen bg-background">
        <Navbar />
        <HeroSection />
        <EducationSection />
        <CultureSection />
        <EntertainmentSection />
        <FoodSection />
        <FestivalsSection />
      </div>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
