import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
const AboutSection = () => {
  return <section id="about" className="py-20 bg-dark-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 reveal">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="reveal order-2 md:order-1">
            <div className="bg-dark-card p-6 rounded-xl shadow-lg border border-white/5">
              <h3 className="text-2xl font-bold mb-4 text-gradient">Personal Bio</h3>
              <p className="text-gray-300 mb-6">
                I'm a down-to-earth automation nerd with 2 years of hands-on experience. I build smart workflows that save you time and sanity. My passion is creating systems that eliminate repetitive tasks, reduce human error, and let you focus on what truly matters in your business.
              </p>
              
              <h3 className="text-2xl font-bold mb-4 text-gradient">Education</h3>
              <div className="mb-6">
                <p className="font-medium">B.Sc. Software Engineering</p>
                <p className="text-gray-400">COMSATS Institute of Information Technology</p>
                <p className="text-sm text-gray-500">Class of 2024</p>
              </div>
              
              
            </div>
          </div>
          
          <div className="reveal order-1 md:order-2">
            <div className="bg-dark-card p-6 rounded-xl shadow-lg border border-white/5">
              <h3 className="text-2xl font-bold mb-4 text-gradient">Work Experience</h3>
              
              <div className="relative pl-8 pb-8 border-l border-primary/30 last:border-0">
                <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-primary"></div>
                <div>
                  <h4 className="text-xl font-bold">AI Automation Expert</h4>
                  <p className="text-primary">NexiSys</p>
                  <p className="text-sm text-gray-400">Feb 2023 - Present</p>
                  <ul className="mt-3 space-y-2 text-gray-300">
                    <li className="flex items-start">
                      <span className="mr-2 text-primary">•</span>
                      Delivered 2+ years of automation projects
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-primary">•</span>
                      Delivered fast turnarounds for client projects
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-primary">•</span>
                      Maintained clear communication throughout project lifecycle
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-primary">•</span>
                      Provided ultimate solutions for workflow challenges
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default AboutSection;