import { Bot, Mail, Phone, MapPin, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="py-16 lg:py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                <Bot className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-2xl font-bold text-foreground">AutomateAI</span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Transformamos negócios com soluções de inteligência artificial personalizadas. 
              Automatização inteligente para o futuro da sua empresa.
            </p>
            <div className="flex space-x-3">
              <Button size="sm" variant="ghost" className="text-muted-foreground hover:text-primary">
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button size="sm" variant="ghost" className="text-muted-foreground hover:text-primary">
                <Twitter className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Soluções */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Soluções</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Automação Inteligente
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Chatbots Personalizados
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Agentes Digitais
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Marketing & Conteúdo IA
                </a>
              </li>
            </ul>
          </div>

          {/* Empresa */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Empresa</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Casos de Sucesso
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Carreiras
                </a>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Contacto</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a 
                  href="mailto:info@automateai.pt" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  info@automateai.pt
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a 
                  href="tel:+351000000000" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  +351 000 000 000
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">
                  Lisboa, Portugal
                </span>
              </div>
            </div>
            
            <Button className="w-full bg-primary hover:bg-primary/90">
              Agendar Reunião
            </Button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-sm">
              © 2024 AutomateAI. Todos os direitos reservados.
            </p>
            <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Termos de Serviço
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;