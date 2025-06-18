import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const PortfolioSection = () => {
  const projects = [
    {
      title: "Lead Generation System",
      description: "Replaced manual spreadsheets with an automated pipeline that captures, scores, and distributes leads to sales teams. Increased lead processing by 300%.",
      image: "/lovable-uploads/199b9382-abe4-47e7-a4d5-37488b871f4f.png",
      tags: ["n8n", "API Integration", "Lead Scoring", "Make.com"]
    },
    {
      title: "RAG-Style AI Agent",
      description: "Built a retrieval-augmented-generation bot using n8n that processes customer inquiries by accessing knowledge base content, delivering contextual responses.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad979?q=80&w=2070&auto=format&fit=crop",
      tags: ["AI", "n8n", "RAG", "Knowledge Base"]
    },
    {
      title: "Telegram Automation",
      description: "Developed a system for automating notifications and chat workflows, enabling real-time alerts and interactive responses through Telegram's API.",
      image: "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?q=80&w=2070&auto=format&fit=crop",
      tags: ["Telegram API", "Notifications", "Make.com"]
    },
    {
      title: "Email Automation",
      description: "Created an end-to-end email campaign setup with automated segmentation, personalized sending, and comprehensive reporting, increasing open rates by 45%.",
      image: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?q=80&w=2069&auto=format&fit=crop",
      tags: ["Email Marketing", "Analytics", "Personalization"]
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-dark-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 reveal">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Portfolio</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore some of my recent automation projects that have transformed manual processes into efficient systems
          </p>
          <div className="w-20 h-1 bg-primary mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className="reveal group bg-dark-card rounded-xl overflow-hidden shadow-lg border border-white/5 hover:border-primary/30 transition-all"
            >
              <div className="h-60 overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map(tag => (
                    <span 
                      key={tag} 
                      className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-primary/10 text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Button className="group/btn w-full">
                  View Case Study
                  <ExternalLink className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
