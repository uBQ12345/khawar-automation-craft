
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-dark-bg/95 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <a href="#home" className="text-2xl font-bold text-gradient">
          Khawar Sultan
        </a>
        
        <div className="hidden md:flex items-center space-x-8">
          <NavLinks />
        </div>

        <Button 
          variant="ghost" 
          size="icon"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu className="h-6 w-6" />
        </Button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-dark-bg/95 backdrop-blur-md p-4">
          <nav className="flex flex-col space-y-4">
            <NavLinks isMobile setIsMenuOpen={setIsMenuOpen} />
          </nav>
        </div>
      )}
    </header>
  );
};

const NavLinks = ({ isMobile = false, setIsMenuOpen = () => {} }) => {
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];
  
  const handleClick = () => {
    if (isMobile) {
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      {navLinks.map((link) => (
        <a
          key={link.name}
          href={link.href}
          className="text-foreground/80 hover:text-primary transition-colors duration-300"
          onClick={handleClick}
        >
          {link.name}
        </a>
      ))}
    </>
  );
};

export default Header;
