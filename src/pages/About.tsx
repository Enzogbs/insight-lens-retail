import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Users, Target, Award, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function About() {
  const navigate = useNavigate();
  
  const handleLoginClick = () => {
    navigate('/login');
  };

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
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                Sobre a <span className="text-primary">NORT Analytics</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Somos especialistas em transformar dados visuais em insights estratégicos para o varejo, 
                utilizando inteligência artificial de ponta para revolucionar a experiência do cliente.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <Card className="p-8 bg-gradient-card border-border">
                <Target className="h-12 w-12 text-primary mb-6" />
                <h3 className="text-2xl font-bold text-foreground mb-4">Nossa Missão</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Democratizar o acesso a análises avançadas de comportamento do consumidor, 
                  oferecendo soluções de IA acessíveis e eficazes para varejistas de todos os tamanhos.
                </p>
              </Card>
              
              <Card className="p-8 bg-gradient-card border-border">
                <Award className="h-12 w-12 text-primary mb-6" />
                <h3 className="text-2xl font-bold text-foreground mb-4">Nossa Visão</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Ser a plataforma líder em analytics de vídeo para varejo, 
                  capacitando empresas a tomar decisões baseadas em dados precisos e insights acionáveis.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Nossos Valores
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Os princípios que guiam nossa jornada de inovação
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Zap className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Inovação</h3>
                <p className="text-muted-foreground">
                  Sempre na vanguarda da tecnologia, desenvolvendo soluções que antecipam as necessidades do mercado.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Parceria</h3>
                <p className="text-muted-foreground">
                  Construímos relacionamentos duradouros, trabalhando lado a lado com nossos clientes para seu sucesso.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Precisão</h3>
                <p className="text-muted-foreground">
                  Entregamos dados confiáveis e análises precisas que geram impacto real nos negócios.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Nossa Equipe
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Especialistas apaixonados por transformar dados em resultados
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card className="p-6 text-center bg-gradient-card border-border">
                <div className="w-24 h-24 bg-gradient-to-br from-primary to-primary-hover rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-bold text-foreground mb-2">Dr. Ana Silva</h3>
                <p className="text-primary mb-2">CEO & Co-fundadora</p>
                <p className="text-sm text-muted-foreground">
                  PhD em Computer Vision, ex-Google Research. Especialista em IA aplicada ao varejo.
                </p>
              </Card>
              
              <Card className="p-6 text-center bg-gradient-card border-border">
                <div className="w-24 h-24 bg-gradient-to-br from-primary to-primary-hover rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-bold text-foreground mb-2">Carlos Santos</h3>
                <p className="text-primary mb-2">CTO & Co-fundador</p>
                <p className="text-sm text-muted-foreground">
                  15 anos em desenvolvimento de sistemas escaláveis, ex-Microsoft Azure.
                </p>
              </Card>
              
              <Card className="p-6 text-center bg-gradient-card border-border">
                <div className="w-24 h-24 bg-gradient-to-br from-primary to-primary-hover rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-bold text-foreground mb-2">Maria Costa</h3>
                <p className="text-primary mb-2">Head of Product</p>
                <p className="text-sm text-muted-foreground">
                  Especialista em UX/UI para B2B SaaS, com foco em analytics e dashboards.
                </p>
              </Card>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}