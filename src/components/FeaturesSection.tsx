import { Card, CardContent } from '@/components/ui/card';
import { 
  Users, 
  Activity, 
  BarChart3, 
  Eye, 
  Clock, 
  TrendingUp,
  MapPin,
  Shield,
  Zap
} from 'lucide-react';

const features = [
  {
    icon: Users,
    title: 'Contagem de Pessoas',
    description: 'Monitore o fluxo de clientes em tempo real com precisão de até 95%. Entenda os picos de movimento e otimize sua operação.',
    color: 'text-primary'
  },
  {
    icon: Activity,
    title: 'Mapas de Calor',
    description: 'Visualize as áreas mais visitadas da loja. Identifique zonas quentes e frias para otimizar o layout e aumentar vendas.',
    color: 'text-success'
  },
  {
    icon: Clock,
    title: 'Tempo de Permanência',
    description: 'Analise quanto tempo clientes permanecem em cada área. Dados essenciais para estratégias de merchandising.',
    color: 'text-warning'
  },
  {
    icon: BarChart3,
    title: 'Relatórios Automáticos',
    description: 'Dashboards inteligentes com insights acionáveis. Relatórios diários, semanais e mensais gerados automaticamente.',
    color: 'text-primary'
  },
  {
    icon: Eye,
    title: 'Detecção de Fila',
    description: 'Monitore filas em tempo real e receba alertas quando excederem limites predefinidos. Melhore a experiência do cliente.',
    color: 'text-success'
  },
  {
    icon: TrendingUp,
    title: 'Análise de Conversão',
    description: 'Compare visitantes vs vendas para calcular taxa de conversão por período, seção e campanha promocional.',
    color: 'text-warning'
  },
  {
    icon: MapPin,
    title: 'Rastreamento de Percurso',
    description: 'Entenda o caminho dos clientes pela loja. Otimize o fluxo e posicionamento de produtos estratégicos.',
    color: 'text-primary'
  },
  {
    icon: Shield,
    title: 'Alertas Inteligentes',
    description: 'Notificações automáticas para eventos importantes: alta concentração, filas longas, áreas de risco.',
    color: 'text-success'
  },
  {
    icon: Zap,
    title: 'Integração Simples',
    description: 'Conecta-se às suas câmeras existentes sem necessidade de novos equipamentos. Setup em minutos.',
    color: 'text-warning'
  }
];

export const FeaturesSection = () => {
  return (
    <section id="produto" className="py-24 bg-background relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-40 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-40 left-0 w-96 h-96 bg-success/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium">
            <Zap className="w-4 h-4" />
            Funcionalidades Avançadas
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Inteligência Artificial aplicada
            <br />
            ao <span className="bg-gradient-primary bg-clip-text text-transparent">varejo físico</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Nossa plataforma transforma dados de vídeo em insights estratégicos, 
            oferecendo visibilidade completa sobre o comportamento dos clientes em sua loja.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card 
                key={index} 
                className="group bg-gradient-card border-border hover:border-primary/30 transition-all duration-300 hover:shadow-card hover:-translate-y-1"
              >
                <CardContent className="p-6">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors ${feature.color}`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Veja todas as funcionalidades em ação
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-gradient-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity shadow-primary">
              Agendar Demonstração
            </button>
            <button className="px-6 py-3 border border-border text-foreground rounded-lg font-medium hover:bg-secondary transition-colors">
              Ver Documentação
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};