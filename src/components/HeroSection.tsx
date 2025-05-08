
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center pt-20 pb-10 bg-dark-bg relative overflow-hidden"
    >
      <div 
        className="absolute inset-0 bg-[radial-gradient(circle,rgba(2,0,36,0)0%,rgba(0,247,255,0.03)100%)]"
        aria-hidden="true"
      />
      
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        <div className="reveal">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="block">AI & Workflow</span>
            <span className="text-gradient">Automation Specialist</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-lg">
            Smart workflows that save you time and sanity. Transforming manual processes into efficient, automated systems.
          </p>
          <Button 
            className="group text-lg px-6 py-6"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Let's Automate Your Workflow
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <div className="mt-12 flex flex-wrap gap-6">
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                <div className="text-primary text-xl font-bold">2+</div>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Years of</p>
                <p className="font-medium">Experience</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                <div className="text-primary text-xl font-bold">50+</div>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Completed</p>
                <p className="font-medium">Projects</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="reveal flex justify-center md:justify-end">
          <div className="relative">
            {/* Profile Image */}
            <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary/20 shadow-[0_0_30px_rgba(0,247,255,0.3)]">
              <img
                src="/lovable-uploads/bf73e9a7-e812-4401-a71b-d7b22cdd7e9e.png"
                alt="Khawar Sultan"
                className="w-full h-full object-cover object-center"
              />
            </div>
            
            {/* Trust badge */}
            <div className="absolute -bottom-6 -right-6 bg-dark-card px-4 py-2 rounded-lg border border-primary/30 shadow-lg">
              <div className="flex items-center">
                <svg className="w-6 h-6 text-primary mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <div>
                  <p className="text-sm font-medium">Google Verified</p>
                  <p className="text-xs text-gray-400">Trusted Expert</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
