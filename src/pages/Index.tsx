
import { useEffect } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import PortfolioSection from "@/components/PortfolioSection";
import ServicesSection from "@/components/ServicesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { useScrollReveal } from "@/utils/scrollReveal";

const Index = () => {
  useScrollReveal();

  useEffect(() => {
    document.title = "Riz Ahmed | AI & Workflow Automation Specialist";
    
    // Add dark mode class to document
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <div className="min-h-screen bg-dark-bg text-white">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <PortfolioSection />
        <ServicesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
