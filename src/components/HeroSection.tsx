import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
const HeroSection = () => {
  return <section id="home" className="min-h-screen flex items-center pt-20 pb-10 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-dark-bg">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 -left-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl"></div>
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(2,0,36,0)0%,rgba(0,247,255,0.03)100%)]" aria-hidden="true" />
      </div>
      
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-10 items-center relative z-10">
        <div className="reveal">
          <div className="inline-block px-4 py-1 bg-primary/10 rounded-full text-primary mb-6 text-sm font-medium">
            AI & Automation Expert
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="block">AI & Workflow</span>
            <span className="text-gradient">Automation Specialist</span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-lg leading-relaxed">
            Smart workflows that save you time and sanity. Transforming manual processes into efficient, automated systems.
          </p>
          
          <div className="flex flex-wrap gap-5 items-center">
            <Button className="group text-lg px-6 py-6 rounded-xl shadow-lg shadow-primary/20" onClick={() => document.getElementById('contact')?.scrollIntoView({
            behavior: 'smooth'
          })}>
              Let's Automate Your Workflow
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <a href="#portfolio" className="text-gray-300 hover:text-primary transition-colors font-medium flex items-center" onClick={e => {
            e.preventDefault();
            document.getElementById('portfolio')?.scrollIntoView({
              behavior: 'smooth'
            });
          }}>
              View Portfolio
              <ArrowRight className="ml-1 h-4 w-4" />
            </a>
          </div>
          
          <div className="mt-14 flex flex-wrap gap-8">
            <div className="flex items-center">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mr-4 shadow-inner shadow-primary/5">
                <div className="text-primary text-2xl font-bold">4+</div>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Years of</p>
                <p className="font-medium text-lg">Experience</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mr-4 shadow-inner shadow-primary/5">
                <div className="text-primary text-2xl font-bold">50+</div>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Completed</p>
                <p className="font-medium text-lg">Projects</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="reveal flex justify-center md:justify-end">
          <div className="relative">
            {/* Profile Image with modern styling */}
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-neon rounded-full blur opacity-70"></div>
              <div className="w-[280px] h-[280px] md:w-[320px] md:h-[320px] lg:w-[380px] lg:h-[380px] rounded-full overflow-hidden relative border-4 border-dark-bg">
                <img alt="Riz Ahmed" className="w-full h-full object-cover object-center" src="/lovable-uploads/7382f7f6-af74-4765-b1ac-16ce73a47bb3.png" />
              </div>
            </div>
            
            {/* Trust badge with modern design */}
            <div className="absolute -bottom-6 right-0 glass-card px-5 py-3 rounded-2xl border border-primary/30 shadow-lg">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium">Make.com Expert</p>
                  
                </div>
              </div>
            </div>
            
            {/* Floating tech badge */}
            <div className="absolute -top-6 -left-6 glass-card px-3 py-2 rounded-xl border border-primary/20 shadow-lg hidden md:block">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 16V12M12 8H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <span className="text-xs font-medium">n8n Expert</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;