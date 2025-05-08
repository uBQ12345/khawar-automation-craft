
import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const ServicesSection = () => {
  const services = [
    {
      title: "Workflow Automation",
      description: "Custom n8n & Make.com solutions to automate your business processes",
      turnaround: "1-3 days",
      features: ["Process mapping", "Custom workflow design", "Implementation", "Documentation"]
    },
    {
      title: "Custom API Integrations",
      description: "Connect systems that don't naturally talk to each other",
      turnaround: "2-5 days",
      features: ["API authentication setup", "Data mapping", "Custom endpoints", "Error handling"]
    },
    {
      title: "Python & JavaScript Scripting",
      description: "Custom code solutions for complex automation needs",
      turnaround: "3-7 days",
      features: ["Custom algorithms", "Data processing", "Function development", "Integration with platforms"]
    },
    {
      title: "AI Agent Development",
      description: "Build RAG-style AI agents tailored to your business needs",
      turnaround: "5-10 days",
      features: ["Knowledge base setup", "Agent training", "Response customization", "Integration with workflows"]
    },
    {
      title: "Lead Generation & Scoring",
      description: "Automated systems to capture and qualify leads",
      turnaround: "3-5 days",
      features: ["Lead capture forms", "Scoring algorithms", "CRM integration", "Notification system"]
    },
    {
      title: "Full-Stack Marketing & CRM Automation",
      description: "End-to-end marketing and customer relationship automation",
      turnaround: "Let's discuss",
      features: ["Email campaigns", "Social media scheduling", "Customer journey automation", "Analytics & reporting"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-dark-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 reveal">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Services</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Specialized automation services to streamline your business operations
          </p>
          <div className="w-20 h-1 bg-primary mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div 
              key={service.title}
              className="reveal bg-dark-bg p-6 rounded-xl shadow-lg border border-white/5 hover:border-primary/30 transition-all hover-scale"
            >
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-400 text-sm mb-4">{service.description}</p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map(feature => (
                  <li key={feature} className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-auto pt-4 border-t border-white/5">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">Turnaround time:</span>
                  <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30">
                    {service.turnaround}
                  </Badge>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
