import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { FeaturesSection } from '@/components/FeaturesSection';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Users, BarChart3, Clock, MapPin, Camera, Shield, Zap, TrendingUp } from 'lucide-react';

export default function Features() {
  const advancedFeatures = [
    {
      icon: Camera,
      title: "Integração Múltiplas Câmeras",
      description: "Conecte e gerencie centenas de câmeras simultaneamente",
      details: ["Suporte a qualquer marca de DVR", "Processamento em tempo real", "Auto-descoberta de dispositivos"]
    },
    {
      icon: Shield,
      title: "Privacidade e Segurança",
      description: "Conformidade total com LGPD e regulamentações internacionais",
      details: ["Dados criptografados", "Processamento local", "Anonimização automática"]
    },
    {
      icon: Zap,
      title: "Processamento IA Avançado",
      description: "Algoritmos proprietários de computer vision",
      details: ["Detecção de objetos", "Rastreamento de movimento", "Análise comportamental"]
    },
    {
      icon: TrendingUp,
      title: "Previsões Inteligentes",
      description: "Machine learning para prever tendências e padrões",
      details: ["Previsão de fluxo", "Otimização de layout", "Análise sazonal"]
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
                Tecnologia de Ponta
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                Funcionalidades <span className="text-primary">Avançadas</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Descubra todas as capacidades da nossa plataforma de analytics de vídeo 
                e como ela pode transformar seu negócio.
              </p>
              <Button variant="hero" size="lg" onClick={() => window.location.href = '/login'}>
                Testar Gratuitamente
              </Button>
            </div>
          </div>
        </section>

        {/* Core Features */}
        <FeaturesSection />

        {/* Advanced Features */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Recursos Avançados
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Tecnologias empresariais para maximizar seus resultados
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {advancedFeatures.map((feature, index) => (
                <Card key={index} className="p-8 bg-gradient-card border-border hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-foreground mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground mb-4">{feature.description}</p>
                      <ul className="space-y-2">
                        {feature.details.map((detail, idx) => (
                          <li key={idx} className="flex items-center text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                            {detail}
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

        {/* Technical Specs */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Especificações Técnicas
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Performance e escalabilidade para empresas de qualquer tamanho
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card className="p-6 text-center bg-gradient-card border-border">
                <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
                <p className="text-foreground font-semibold mb-2">Uptime Garantido</p>
                <p className="text-sm text-muted-foreground">
                  Infraestrutura redundante para máxima disponibilidade
                </p>
              </Card>
              
              <Card className="p-6 text-center bg-gradient-card border-border">
                <div className="text-3xl font-bold text-primary mb-2">1000+</div>
                <p className="text-foreground font-semibold mb-2">Câmeras Suportadas</p>
                <p className="text-sm text-muted-foreground">
                  Processamento simultâneo em tempo real
                </p>
              </Card>
              
              <Card className="p-6 text-center bg-gradient-card border-border">
                <div className="text-3xl font-bold text-primary mb-2">&lt;100ms</div>
                <p className="text-foreground font-semibold mb-2">Latência Média</p>
                <p className="text-sm text-muted-foreground">
                  Resposta quase instantânea para análises
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Integration */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Integração Simples
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Nossa API RESTful permite integração com qualquer sistema existente
              </p>
              <div className="bg-muted/80 rounded-lg p-6 text-left">
                <code className="text-primary text-sm">
                  {`curl -X GET "https://api.nort.analytics/v1/metrics" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"`}
                </code>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}