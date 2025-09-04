import { Button } from "@/components/ui/button";
import { Bot, Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <nav className="container mx-auto px-4 lg:px-6 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <Bot className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold text-foreground">AutomateAI</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">
            Serviços
          </a>
          <a href="#solutions" className="text-muted-foreground hover:text-primary transition-colors">
            Soluções
          </a>
          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
            Sobre
          </a>
          <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
            Contacto
          </a>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <Button variant="ghost" className="text-muted-foreground hover:text-primary">
            Fale Connosco
          </Button>
          <Button className="bg-primary hover:bg-primary/90">
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
          <div className="absolute top-16 left-0 right-0 bg-background border-b border-border md:hidden">
            <div className="px-4 py-6 space-y-4">
              <a href="#services" className="block text-muted-foreground hover:text-primary transition-colors">
                Serviços
              </a>
              <a href="#solutions" className="block text-muted-foreground hover:text-primary transition-colors">
                Soluções
              </a>
              <a href="#about" className="block text-muted-foreground hover:text-primary transition-colors">
                Sobre
              </a>
              <a href="#contact" className="block text-muted-foreground hover:text-primary transition-colors">
                Contacto
              </a>
              <div className="pt-4 space-y-2">
                <Button variant="ghost" className="w-full text-muted-foreground hover:text-primary">
                  Fale Connosco
                </Button>
                <Button className="w-full bg-primary hover:bg-primary/90">
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