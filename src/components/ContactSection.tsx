
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, Mail, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-dark-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 reveal">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Ready to automate your workflow? Let's discuss how I can help you save time and increase efficiency
          </p>
          <div className="w-20 h-1 bg-primary mx-auto mt-4"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10">
          <div className="reveal">
            <div className="bg-dark-card p-6 rounded-xl shadow-lg border border-white/5 h-full">
              <h3 className="text-2xl font-bold mb-6 text-gradient">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary mr-4">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Email Address</p>
                    <a 
                      href="mailto:khawarsultan767@gmail.com"
                      className="font-medium hover:text-primary transition-colors"
                    >
                      khawarsultan767@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary mr-4">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">WhatsApp</p>
                    <a 
                      href="https://wa.me/923000230200"
                      className="font-medium hover:text-primary transition-colors"
                    >
                      +92 300 0230200
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary mr-4">
                    <Calendar size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Schedule a Call</p>
                    <Button className="mt-2 w-full">
                      Book a Discovery Call
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <h4 className="font-bold mb-4">Connect with me</h4>
                <div className="flex space-x-4">
                  <a 
                    href="#" 
                    className="p-3 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                  </a>
                  <a 
                    href="#" 
                    className="p-3 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                    aria-label="GitHub"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="reveal">
            <form onSubmit={handleSubmit} className="bg-dark-card p-6 rounded-xl shadow-lg border border-white/5">
              <h3 className="text-2xl font-bold mb-6 text-gradient">Send a Message</h3>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">Name</label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-dark-bg border-white/10 focus:border-primary/50 focus:ring-primary/20"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">Email</label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-dark-bg border-white/10 focus:border-primary/50 focus:ring-primary/20"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">Message</label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project or ask a question"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="bg-dark-bg border-white/10 focus:border-primary/50 focus:ring-primary/20"
                  />
                </div>
                
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
