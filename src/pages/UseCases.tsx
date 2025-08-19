import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { UseCasesSection } from '@/components/UseCasesSection';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Building2, Pill, Coffee, Car, Home } from 'lucide-react';

export default function UseCases() {
  const industries = [
    {
      icon: ShoppingCart,
      title: "Supermercados",
      description: "Otimize o layout e reduza filas com insights de fluxo",
      metrics: ["35% redução no tempo de fila", "20% aumento em vendas", "40% melhoria na experiência"],
      features: ["Análise de filas", "Mapas de calor de corredores", "Otimização de checkout", "Gestão de estoque visual"]
    },
    {
      icon: Building2,
      title: "Lojas de Departamento", 
      description: "Maximize conversões e identifique zonas de maior interesse",
      metrics: ["25% aumento na conversão", "30% melhoria no layout", "15% redução em perdas"],
      features: ["Tracking de jornada do cliente", "Análise de tempo por seção", "Otimização de vitrines", "Detecção de comportamento suspeito"]
    },
    {
      icon: Pill,
      title: "Farmácias",
      description: "Garanta conformidade e melhore o atendimento ao cliente",
      metrics: ["100% conformidade regulatória", "40% redução no tempo de espera", "25% aumento na satisfação"],
      features: ["Monitoramento de áreas controladas", "Análise de fluxo de clientes", "Gestão de filas", "Alertas de segurança"]
    },
    {
      icon: Coffee,
      title: "Restaurantes",
      description: "Otimize operações e melhore a experiência gastronômica",
      metrics: ["30% melhoria no tempo de serviço", "20% aumento no giro de mesas", "35% redução em desperdício"],
      features: ["Análise de ocupação de mesas", "Monitoramento de filas", "Otimização de layout", "Controle de capacidade"]
    },
    {
      icon: Car,
      title: "Shopping Centers",
      description: "Gerencie espaços comuns e optimize a experiência do visitante",
      metrics: ["50% melhoria na gestão de estacionamento", "25% aumento no tempo de permanência", "30% otimização de espaços"],
      features: ["Contagem de visitantes", "Análise de zonas populares", "Gestão de estacionamento", "Monitoramento de eventos"]
    },
    {
      icon: Home,
      title: "Lojas de Conveniência",
      description: "Maximize a eficiência em espaços compactos",
      metrics: ["35% aumento em vendas por impulso", "20% redução em perdas", "40% melhoria na rotatividade"],
      features: ["Análise de produtos populares", "Otimização de prateleiras", "Detecção de furtos", "Análise de picos de movimento"]
    }
  ];

  const caseStudies = [
    {
      company: "Rede de Supermercados ABC",
      industry: "Varejo Alimentar",
      challenge: "Longas filas e baixa conversão em horários de pico",
      solution: "Implementação de analytics de fila e otimização de checkout",
      results: ["40% redução no tempo de espera", "25% aumento nas vendas", "90% melhoria na satisfação do cliente"]
    },
    {
      company: "Shopping Center Premium",
      industry: "Shopping Center", 
      challenge: "Gestão ineficiente de espaços e eventos",
      solution: "Sistema completo de analytics de visitantes e ocupação",
      results: ["35% aumento no tempo de permanência", "50% melhoria na ocupação", "30% aumento na receita de lojas"]
    },
    {
      company: "Farmácia Nacional",
      industry: "Farmácias",
      challenge: "Conformidade regulatória e experiência do cliente",
      solution: "Monitoramento inteligente e análise de fluxo",
      results: ["100% conformidade mantida", "45% redução em reclamações", "20% aumento na eficiência operacional"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header variant="landing" />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-hero relative overflow-hidden">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse delay-1000" />
          </div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="secondary" className="mb-4">
                Casos de Uso
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                Soluções para <span className="text-primary">Cada Setor</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Descubra como nossa tecnologia está transformando diferentes segmentos do varejo 
                com insights precisos e acionáveis.
              </p>
              <Button variant="hero" size="lg" onClick={() => window.location.href = '/contato'}>
                Falar com Especialista
              </Button>
            </div>
          </div>
        </section>

        {/* Overview */}
        <UseCasesSection />

        {/* Detailed Industries */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Soluções por Setor
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Cada setor tem desafios únicos. Nossas soluções são adaptadas para suas necessidades específicas.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {industries.map((industry, index) => (
                <Card key={index} className="p-8 bg-gradient-card border-border hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <industry.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">{industry.title}</h3>
                      <p className="text-muted-foreground">{industry.description}</p>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-3">Resultados Típicos:</h4>
                    <div className="grid gap-2">
                      {industry.metrics.map((metric, idx) => (
                        <div key={idx} className="flex items-center text-sm">
                          <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                          <span className="text-muted-foreground">{metric}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Funcionalidades Específicas:</h4>
                    <div className="flex flex-wrap gap-2">
                      {industry.features.map((feature, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Casos de Sucesso
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Histórias reais de transformação com nossa tecnologia
              </p>
            </div>
            
            <div className="space-y-8 max-w-4xl mx-auto">
              {caseStudies.map((study, index) => (
                <Card key={index} className="p-8 bg-gradient-card border-border">
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">{study.company}</h3>
                      <Badge variant="outline" className="mb-4">{study.industry}</Badge>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Desafio:</h4>
                        <p className="text-sm text-muted-foreground">{study.challenge}</p>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Solução:</h4>
                      <p className="text-sm text-muted-foreground mb-4">{study.solution}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Resultados:</h4>
                      <ul className="space-y-2">
                        {study.results.map((result, idx) => (
                          <li key={idx} className="flex items-center text-sm">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                            <span className="text-muted-foreground">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ROI Calculator */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Calcule Seu ROI
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Empresas típicas veem retorno do investimento em 6-12 meses
              </p>
              
              <Card className="p-8 bg-gradient-card border-border">
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">3-6 meses</div>
                    <p className="text-foreground font-semibold mb-2">Payback Period</p>
                    <p className="text-sm text-muted-foreground">
                      Tempo médio para recuperar o investimento
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">300%</div>
                    <p className="text-foreground font-semibold mb-2">ROI Médio</p>
                    <p className="text-sm text-muted-foreground">
                      Retorno sobre investimento no primeiro ano
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">R$ 50k+</div>
                    <p className="text-foreground font-semibold mb-2">Economia Anual</p>
                    <p className="text-sm text-muted-foreground">
                      Redução de custos operacionais típica
                    </p>
                  </div>
                </div>
                
                <div className="mt-8 pt-8 border-t border-border">
                  <Button variant="hero" size="lg" onClick={() => window.location.href = '/contato'}>
                    Solicitar Análise Personalizada
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}