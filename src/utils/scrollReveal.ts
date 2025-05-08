
import { useEffect } from "react";

export const useScrollReveal = () => {
  useEffect(() => {
    const revealElements = document.querySelectorAll(".reveal");
    
    const revealOnScroll = () => {
      for (let i = 0; i < revealElements.length; i++) {
        const element = revealElements[i];
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add("active");
        }
      }
    };
    
    window.addEventListener("scroll", revealOnScroll);
    
    // Initial check in case elements are already in view
    revealOnScroll();
    
    return () => {
      window.removeEventListener("scroll", revealOnScroll);
    };
  }, []);
};
