
import { 
  Workflow, 
  ApiIntegration, 
  Python, 
  Javascript, 
  LeadGeneration, 
  Email, 
  Sales, 
  Marketing, 
  SocialMedia, 
  CustomerSupport,
  Content,
  Reporting,
  Finance,
  Accounting,
  Hr,
  Crm,
  DataIntegration,
  ProjectManagement,
  Document,
  RagStyleAi
} from "lucide-react";

const SkillsSection = () => {
  const skills = [
    { 
      name: "Workflow Automation", 
      description: "n8n & Make.com expert", 
      icon: Workflow, 
      level: 95 
    },
    { 
      name: "API Integration", 
      description: "Connecting systems seamlessly", 
      icon: ApiIntegration, 
      level: 90 
    },
    { 
      name: "Python & JavaScript", 
      description: "Custom code solutions", 
      icon: Python, 
      level: 85 
    },
    { 
      name: "Lead Generation & Scoring", 
      description: "Automated lead capturing", 
      icon: LeadGeneration, 
      level: 88 
    },
    { 
      name: "Email Automation", 
      description: "Streamlined email workflows", 
      icon: Email, 
      level: 92 
    },
    { 
      name: "Sales & Marketing", 
      description: "End-to-end automation", 
      icon: Sales, 
      level: 87 
    },
    { 
      name: "Social Media", 
      description: "Content scheduling & more", 
      icon: SocialMedia, 
      level: 84 
    },
    { 
      name: "Customer Support", 
      description: "Automated ticketing & responses", 
      icon: CustomerSupport, 
      level: 82 
    },
    { 
      name: "Content Automation", 
      description: "Smart content workflows", 
      icon: Content, 
      level: 85 
    },
    { 
      name: "Reporting", 
      description: "Automated insights", 
      icon: Reporting, 
      level: 89 
    },
    { 
      name: "Finance & Accounting", 
      description: "Automated financial processes", 
      icon: Finance, 
      level: 80 
    },
    { 
      name: "HR Automation", 
      description: "Streamlined HR workflows", 
      icon: Hr, 
      level: 78 
    },
    { 
      name: "CRM Automation", 
      description: "Enhanced customer management", 
      icon: Crm, 
      level: 91 
    },
    { 
      name: "Data Integration", 
      description: "Synchronizing systems", 
      icon: DataIntegration, 
      level: 88 
    },
    { 
      name: "Project Management", 
      description: "Automated task workflows", 
      icon: ProjectManagement, 
      level: 86 
    },
    { 
      name: "Document Automation", 
      description: "Creation & eSignatures", 
      icon: Document, 
      level: 85 
    },
    { 
      name: "RAG-Style AI Agents", 
      description: "Building intelligent assistants", 
      icon: RagStyleAi, 
      level: 90 
    },
  ];

  return (
    <section id="skills" className="py-20 bg-dark-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 reveal">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Specialized in creating robust automation solutions that transform your business operations
          </p>
          <div className="w-20 h-1 bg-primary mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div 
              key={skill.name}
              className="reveal bg-dark-bg p-6 rounded-xl shadow-lg border border-white/5 hover:border-primary/30 transition-all hover-scale"
            >
              <div className="flex items-start">
                <div className="p-3 rounded-lg bg-primary/10 text-primary mr-4">
                  <skill.icon size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{skill.name}</h3>
                  <p className="text-gray-400 text-sm mb-4">{skill.description}</p>
                  <div className="w-full h-2 bg-dark-bg rounded-full overflow-hidden border border-white/10">
                    <div 
                      className="h-full bg-primary" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
