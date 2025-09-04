import { Button } from "@/components/ui/button";
import { Bot, Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 glass-card border-b border-border/10">
      <nav className="container mx-auto px-4 lg:px-6 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center glow-primary">
            <Bot className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold gradient-text">AutomateAI</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#services" className="text-foreground/80 hover:text-primary transition-colors">
            Serviços
          </a>
          <a href="#solutions" className="text-foreground/80 hover:text-primary transition-colors">
            Soluções
          </a>
          <a href="#about" className="text-foreground/80 hover:text-primary transition-colors">
            Sobre
          </a>
          <a href="#contact" className="text-foreground/80 hover:text-primary transition-colors">
            Contacto
          </a>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <Button variant="ghost" className="text-foreground/80 hover:text-primary">
            Fale Connosco
          </Button>
          <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 glow-primary">
            Começar Agora
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 glass-card border-b border-border/10 md:hidden">
            <div className="px-4 py-6 space-y-4">
              <a href="#services" className="block text-foreground/80 hover:text-primary transition-colors">
                Serviços
              </a>
              <a href="#solutions" className="block text-foreground/80 hover:text-primary transition-colors">
                Soluções
              </a>
              <a href="#about" className="block text-foreground/80 hover:text-primary transition-colors">
                Sobre
              </a>
              <a href="#contact" className="block text-foreground/80 hover:text-primary transition-colors">
                Contacto
              </a>
              <div className="pt-4 space-y-2">
                <Button variant="ghost" className="w-full text-foreground/80 hover:text-primary">
                  Fale Connosco
                </Button>
                <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 glow-primary">
                  Começar Agora
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;