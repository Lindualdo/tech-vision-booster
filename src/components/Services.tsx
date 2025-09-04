import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Bot, 
  BrainCircuit, 
  MessageSquare, 
  BarChart3, 
  Users, 
  Workflow,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: BrainCircuit,
      title: "Automação Inteligente",
      description: "IA que automatiza processos complexos e liberta a sua equipa para tarefas estratégicas",
      features: [
        "Otimização de processos RH e financeiros",
        "Qualificação automática de leads",
        "Previsão de vendas com precisão",
        "Monitorização 24/7"
      ]
    },
    {
      icon: MessageSquare,
      title: "Chatbots Personalizados",
      description: "Assistentes virtuais treinados especificamente para o seu negócio e clientes",
      features: [
        "Treinamento com dados da empresa",
        "Respostas contextuais e humanizadas",
        "Integração com CRM e sistemas",
        "Suporte multicanal"
      ]
    },
    {
      icon: Users,
      title: "Agentes Digitais",
      description: "Assistentes de IA operacionais que executam tarefas administrativas com total autonomia",
      features: [
        "Gestão de documentos automática",
        "Processamento de dados em tempo real",
        "Relatórios inteligentes",
        "Integração total com workflows"
      ]
    },
    {
      icon: BarChart3,
      title: "Marketing & Conteúdo IA",
      description: "Geração de conteúdo em escala e campanhas personalizadas com resultados mensuráveis",
      features: [
        "Criação de conteúdo sob demanda",
        "Campanhas personalizadas",
        "Análise de performance automática",
        "Otimização contínua de conversões"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 modern-card px-4 py-2 rounded-full mb-6">
            <Workflow className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">Soluções Inovadoras</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Soluções de <span className="text-primary">IA Sob Medida</span>
            <br />para o Seu Negócio
          </h2>
          
          <p className="text-lg text-muted-foreground leading-relaxed">
            Revolucione a forma como a sua empresa opera com tecnologia de inteligência artificial 
            personalizada para os seus objetivos específicos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="modern-card">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-bold">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button variant="ghost" className="w-full mt-6 text-primary">
                    Saber Mais
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center modern-card p-8 lg:p-12 rounded-2xl">
          <Bot className="w-16 h-16 mx-auto mb-6 text-primary" />
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Pronto para Transformar o Seu Negócio?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Descubra como as nossas soluções de IA podem revolucionar os seus processos 
            e impulsionar o crescimento da sua empresa.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Agendar Consulta Gratuita
            </Button>
            <Button size="lg" variant="outline">
              Ver Casos de Sucesso
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;