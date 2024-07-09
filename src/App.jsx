import React from "react";
import Navbar from "./Components/NavbarSection";
import HeroSection from "./Components/HeroSection";
import FeaturesSection from "./Components/Features/FeaturesSection";
import WorkflowSection from "./Components/Workflow/WorkflowSection";
import PricingSection from "./Components/Pricing/PricingSection";
import TestimonialsSection from "./Components/Testimonials/TestimonialsSection";
import FooterSection from "./Components/FooterSection";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-6xl mx-auto pt-20 px-6">
        <HeroSection />
        <FeaturesSection />
        <WorkflowSection />
        <PricingSection />
        <TestimonialsSection />
        <FooterSection/>
      </div>
    </>
  );
};

export default App;
