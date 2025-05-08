
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const TestimonialSection = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "Marketing Agency",
      image: "https://randomuser.me/api/portraits/women/42.jpg",
      text: "Khawar's automation solutions saved our team 15+ hours per week. His expertise with n8n and Make.com transformed our lead generation process completely.",
      rating: 5,
      badge: "Google Verified"
    },
    {
      name: "Michael Chen",
      company: "SaaS Startup",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      text: "Working with Khawar was a game-changer for our customer onboarding process. He built an AI agent that reduced our support tickets by 40% in the first month.",
      rating: 5,
      badge: "Google Verified"
    },
    {
      name: "Amanda Rodriguez",
      company: "E-commerce Business",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
      text: "Khawar's email automation system increased our open rates by 35% and conversions by 22%. His attention to detail and quick implementation exceeded our expectations.",
      rating: 5,
      badge: "Google Verified"
    },
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };
  
  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section className="py-20 bg-dark-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 reveal">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Testimonials</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Don't just take my word for it - hear what my clients have to say about working with me
          </p>
          <div className="w-20 h-1 bg-primary mx-auto mt-4"></div>
        </div>
        
        <div className="max-w-4xl mx-auto reveal">
          <div className="relative">
            <div className="bg-dark-card p-8 rounded-xl shadow-lg border border-white/5">
              <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2">
                <div className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                  {testimonials[currentIndex].badge}
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6 items-center">
                <div className="w-20 h-20 rounded-full overflow-hidden">
                  <img 
                    src={testimonials[currentIndex].image} 
                    alt={testimonials[currentIndex].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="text-center sm:text-left">
                  <div className="flex items-center justify-center sm:justify-start mb-2">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-primary fill-primary" />
                    ))}
                  </div>
                  
                  <blockquote className="text-lg italic mb-4">
                    "{testimonials[currentIndex].text}"
                  </blockquote>
                  
                  <div>
                    <p className="font-bold">{testimonials[currentIndex].name}</p>
                    <p className="text-sm text-gray-400">{testimonials[currentIndex].company}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center mt-6 space-x-4">
              <Button 
                variant="outline" 
                size="icon"
                onClick={prevTestimonial}
                className="rounded-full bg-dark-card border-white/10 hover:bg-primary/10 hover:border-primary"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              
              <Button 
                variant="outline" 
                size="icon"
                onClick={nextTestimonial}
                className="rounded-full bg-dark-card border-white/10 hover:bg-primary/10 hover:border-primary"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
