
import { 
  Workflow,
  Cog,
  Code, 
  Users, 
  Mail, 
  ShoppingCart, 
  BarChart, 
  AtSign, 
  HeartHandshake, 
  FileText, 
  BarChart3, 
  LineChart, 
  Calculator, 
  UserRound, 
  BookUser, 
  Database, 
  ListTodo, 
  FileSignature, 
  Bot
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
      icon: Cog, 
      level: 90 
    },
    { 
      name: "Python & JavaScript", 
      description: "Custom code solutions", 
      icon: Code, 
      level: 85 
    },
    { 
      name: "Lead Generation & Scoring", 
      description: "Automated lead capturing", 
      icon: Users, 
      level: 88 
    },
    { 
      name: "Email Automation", 
      description: "Streamlined email workflows", 
      icon: Mail, 
      level: 92 
    },
    { 
      name: "Sales & Marketing", 
      description: "End-to-end automation", 
      icon: ShoppingCart, 
      level: 87 
    },
    { 
      name: "Social Media", 
      description: "Content scheduling & more", 
      icon: AtSign, 
      level: 84 
    },
    { 
      name: "Customer Support", 
      description: "Automated ticketing & responses", 
      icon: HeartHandshake, 
      level: 82 
    },
    { 
      name: "Content Automation", 
      description: "Smart content workflows", 
      icon: FileText, 
      level: 85 
    },
    { 
      name: "Reporting", 
      description: "Automated insights", 
      icon: BarChart, 
      level: 89 
    },
    { 
      name: "Finance & Accounting", 
      description: "Automated financial processes", 
      icon: LineChart, 
      level: 80 
    },
    { 
      name: "HR Automation", 
      description: "Streamlined HR workflows", 
      icon: UserRound, 
      level: 78 
    },
    { 
      name: "CRM Automation", 
      description: "Enhanced customer management", 
      icon: BookUser, 
      level: 91 
    },
    { 
      name: "Data Integration", 
      description: "Synchronizing systems", 
      icon: Database, 
      level: 88 
    },
    { 
      name: "Project Management", 
      description: "Automated task workflows", 
      icon: ListTodo, 
      level: 86 
    },
    { 
      name: "Document Automation", 
      description: "Creation & eSignatures", 
      icon: FileSignature, 
      level: 85 
    },
    { 
      name: "RAG-Style AI Agents", 
      description: "Building intelligent assistants", 
      icon: Bot, 
      level: 90 
    },
  ];

  return (
    <section id="skills" className="py-12 bg-dark-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 reveal">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Skills & Expertise</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm">
            Specialized in creating robust automation solutions that transform your business operations
          </p>
          <div className="w-20 h-1 bg-primary mx-auto mt-3"></div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <div 
              key={skill.name}
              className="reveal group bg-dark-bg p-4 rounded-lg shadow-lg border border-white/5 hover:border-primary/30 transition-all hover-scale"
            >
              <div className="flex items-center mb-3">
                <div className="p-2 rounded-lg bg-primary/10 text-primary mr-3 flex-shrink-0">
                  <skill.icon size={18} />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-sm font-bold mb-1 leading-tight">{skill.name}</h3>
                  <p className="text-gray-400 text-xs mb-2 leading-tight">{skill.description}</p>
                  <div className="w-full h-1.5 bg-dark-bg rounded-full overflow-hidden border border-white/10">
                    <div 
                      className="h-full bg-primary transition-all duration-500" 
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
