import { Card, CardContent } from '@/components/ui/card';
import { Camera, Cpu, BarChart3, ArrowRight } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Camera,
    title: 'Conectar ao DVR',
    description: 'Integração simples com suas câmeras existentes. Sem necessidade de novos equipamentos ou interrupção na operação.',
    details: [
      'Setup em menos de 30 minutos',
      'Compatível com qualquer marca de DVR',
      'Conexão segura via API ou RTSP'
    ]
  },
  {
    number: '02',
    icon: Cpu,
    title: 'Processar com IA',
    description: 'Nossa inteligência artificial analisa as imagens em tempo real, extraindo insights comportamentais valiosos.',
    details: [
      'Processamento em nuvem escalável',
      'Precisão de até 95% na detecção',
      'Análise de múltiplas métricas simultaneamente'
    ]
  },
  {
    number: '03',
    icon: BarChart3,
    title: 'Visualizar Dashboards',
    description: 'Acesse relatórios intuitivos e dashboards em tempo real para tomar decisões estratégicas baseadas em dados.',
    details: [
      'Interface web responsiva',
      'Relatórios automáticos por email',
      'Alertas inteligentes via WhatsApp'
    ]
  }
];

export const HowItWorksSection = () => {
  return (
    <section id="como-funciona" className="py-24 bg-background relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse delay-200" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-success/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium">
            <Cpu className="w-4 h-4" />
            Como Funciona
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Implementação <span className="bg-gradient-primary bg-clip-text text-transparent">simples</span>
            <br />
            em 3 passos
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Nossa solução foi projetada para ser implementada rapidamente, 
            sem interromper suas operações ou exigir investimentos em novos equipamentos.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-4">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            const isLast = index === steps.length - 1;
            
            return (
              <div key={index} className="relative">
                <Card className="group bg-gradient-card border-border hover:border-primary/30 transition-all duration-300 hover:shadow-card hover:-translate-y-1 h-full">
                  <CardContent className="p-8 text-center">
                    {/* Step number */}
                    <div className="text-6xl font-bold text-primary/20 mb-4">
                      {step.number}
                    </div>
                    
                    {/* Icon */}
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-primary/10 mb-6 group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                      {step.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {step.description}
                    </p>

                    {/* Details */}
                    <ul className="space-y-3 text-left">
                      {step.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-success rounded-full mr-3 mt-2 flex-shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Arrow connector (desktop only) */}
                {!isLast && (
                  <div className="hidden lg:block absolute top-1/2 -right-2 transform -translate-y-1/2 z-10">
                    <div className="w-4 h-4 bg-primary/20 rounded-full flex items-center justify-center">
                      <ArrowRight className="w-3 h-3 text-primary" />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-card border border-border rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Pronto para começar?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Nossa equipe técnica cuida de toda a implementação. 
              Em poucos dias você terá acesso aos primeiros insights do seu negócio.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-gradient-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity shadow-primary">
                Implementar Agora
              </button>
              <button className="px-8 py-3 border border-border text-foreground rounded-lg font-medium hover:bg-secondary transition-colors">
                Falar com Técnico
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};