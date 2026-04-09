"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster as Sonner } from "@/app/components/ui/sonner";
import { Toaster } from "@/app/components/ui/toaster";
import { TooltipProvider } from "@/app/components/ui/tooltip";
import Index from "@/pages/index";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Index />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
