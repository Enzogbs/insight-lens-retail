import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { HowItWorksSection } from '@/components/HowItWorksSection';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, ArrowRight, Camera, Cpu, BarChart3, Settings, Download, Shield } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function HowItWorks() {
  const navigate = useNavigate();
  
  const handleLoginClick = () => {
    navigate('/login');
  };
  const detailedSteps = [
    {
      step: "01",
      title: "Configuração Inicial",
      description: "Configure sua conta e conecte suas câmeras em minutos",
      icon: Settings,
      details: [
        "Criação de conta em 2 minutos",
        "Auto-descoberta de câmeras na rede",
        "Configuração guiada passo a passo",
        "Teste de conectividade automático"
      ]
    },
    {
      step: "02", 
      title: "Conexão com DVR",
      description: "Conectamos diretamente ao seu sistema de câmeras existente",
      icon: Camera,
      details: [
        "Suporte a todas as marcas principais",
        "Conexão segura via RTSP/HTTP", 
        "Configuração remota disponível",
        "Backup automático das configurações"
      ]
    },
    {
      step: "03",
      title: "Processamento IA",
      description: "Nossa IA analisa os vídeos em tempo real",
      icon: Cpu,
      details: [
        "Detecção e rastreamento de pessoas",
        "Análise de movimento e comportamento",
        "Processamento edge para baixa latência",
        "Algoritmos proprietários otimizados"
      ]
    },
    {
      step: "04",
      title: "Dashboards Inteligentes",
      description: "Visualize insights acionáveis em tempo real",
      icon: BarChart3,
      details: [
        "Métricas em tempo real",
        "Relatórios automatizados",
        "Alertas personalizáveis",
        "Export para Excel/PDF"
      ]
    }
  ];

  const implementation = [
    {
      phase: "Semana 1",
      title: "Setup e Configuração",
      tasks: ["Criação de conta", "Conexão das câmeras", "Configuração inicial", "Treinamento da equipe"]
    },
    {
      phase: "Semana 2", 
      title: "Calibração e Teste",
      tasks: ["Calibração dos algoritmos", "Testes de precisão", "Ajustes personalizados", "Validação dos dados"]
    },
    {
      phase: "Semana 3",
      title: "Go-Live",
      tasks: ["Ativação completa", "Monitoramento 24/7", "Relatórios automatizados", "Suporte dedicado"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header variant="landing" onLoginClick={handleLoginClick} />
      
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
                Implementação Simples
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                Como <span className="text-primary">Funciona</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Da instalação aos insights: entenda como transformamos suas câmeras 
                em uma poderosa ferramenta de analytics em apenas 3 semanas.
              </p>
              <Button variant="hero" size="lg" onClick={() => window.location.href = '/contato'}>
                Solicitar Demonstração
              </Button>
            </div>
          </div>
        </section>

        {/* Overview */}
        <HowItWorksSection />

        {/* Detailed Steps */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Processo Detalhado
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Cada etapa é cuidadosamente planejada para garantir uma implementação perfeita
              </p>
            </div>
            
            <div className="space-y-8 max-w-4xl mx-auto">
              {detailedSteps.map((step, index) => (
                <Card key={index} className="p-8 bg-gradient-card border-border">
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                        <step.icon className="h-8 w-8 text-primary" />
                      </div>
                      <div className="mt-4 text-center">
                        <span className="text-2xl font-bold text-primary">{step.step}</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-foreground mb-2">{step.title}</h3>
                      <p className="text-muted-foreground mb-6">{step.description}</p>
                      <div className="grid md:grid-cols-2 gap-3">
                        {step.details.map((detail, idx) => (
                          <div key={idx} className="flex items-center space-x-3">
                            <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                            <span className="text-sm text-foreground">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    {index < detailedSteps.length - 1 && (
                      <div className="hidden md:block">
                        <ArrowRight className="h-6 w-6 text-muted-foreground" />
                      </div>
                    )}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Implementation Timeline */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Timeline de Implementação
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Do primeiro contato ao go-live em apenas 3 semanas
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {implementation.map((phase, index) => (
                <Card key={index} className="p-6 bg-gradient-card border-border relative">
                  <div className="absolute -top-4 left-6">
                    <Badge variant="default" className="bg-primary text-primary-foreground">
                      {phase.phase}
                    </Badge>
                  </div>
                  <div className="pt-4">
                    <h3 className="text-xl font-bold text-foreground mb-4">{phase.title}</h3>
                    <ul className="space-y-3">
                      {phase.tasks.map((task, idx) => (
                        <li key={idx} className="flex items-center space-x-3">
                          <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{task}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Security & Compliance */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <Shield className="h-16 w-16 text-primary mx-auto mb-4" />
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Segurança e Conformidade
                </h2>
                <p className="text-xl text-muted-foreground">
                  Proteção de dados e privacidade são nossas prioridades
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="p-6 bg-gradient-card border-border">
                  <h3 className="text-xl font-bold text-foreground mb-4">Certificações</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span className="text-muted-foreground">LGPD Compliant</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span className="text-muted-foreground">ISO 27001</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span className="text-muted-foreground">SOC 2 Type II</span>
                    </li>
                  </ul>
                </Card>
                
                <Card className="p-6 bg-gradient-card border-border">
                  <h3 className="text-xl font-bold text-foreground mb-4">Proteção de Dados</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span className="text-muted-foreground">Criptografia AES-256</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span className="text-muted-foreground">Anonimização automática</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span className="text-muted-foreground">Backup redundante</span>
                    </li>
                  </ul>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}