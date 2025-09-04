import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap } from "lucide-react";
import heroImage from "@/assets/hero-ai.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.1
        }}
      />
      
      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 lg:px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 modern-card px-4 py-2 rounded-full">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">Tecnologia IA de Última Geração</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Transforme o Seu Negócio com
            <br />
            <span className="text-primary">Inteligência Artificial</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Soluções de IA personalizadas que automatizam processos, otimizam resultados 
            e impulsionam o crescimento do seu negócio. Disponível 24/7.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center items-center gap-8 py-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">24/7</div>
              <div className="text-sm text-muted-foreground">Disponibilidade</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">80%</div>
              <div className="text-sm text-muted-foreground">Redução de Custos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">5x</div>
              <div className="text-sm text-muted-foreground">Mais Eficiência</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Descobrir Soluções
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline">
              <Zap className="mr-2 w-5 h-5" />
              Ver Demo Gratuita
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="pt-8 text-center">
            <p className="text-sm text-muted-foreground mb-4">Já confiaram em nós</p>
            <div className="flex justify-center items-center space-x-8 opacity-60">
              <div className="w-20 h-8 modern-card rounded flex items-center justify-center">
                <span className="text-xs font-medium">Empresa A</span>
              </div>
              <div className="w-20 h-8 modern-card rounded flex items-center justify-center">
                <span className="text-xs font-medium">Empresa B</span>
              </div>
              <div className="w-20 h-8 modern-card rounded flex items-center justify-center">
                <span className="text-xs font-medium">Empresa C</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;