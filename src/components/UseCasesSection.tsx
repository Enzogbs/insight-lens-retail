import { Card, CardContent } from '@/components/ui/card';
import { 
  ShoppingBag, 
  Building2, 
  Pill, 
  Coffee,
  Shirt,
  Car
} from 'lucide-react';

const useCases = [
  {
    icon: ShoppingBag,
    title: 'Supermercados',
    description: 'Monitore filas nos caixas, analise fluxo nos corredores e otimize o layout para aumentar a experiência de compra.',
    metrics: ['Redução de 40% no tempo de fila', 'Aumento de 25% na conversão', '95% precisão na contagem'],
    color: 'from-blue-500/20 to-blue-600/20'
  },
  {
    icon: Shirt,
    title: 'Lojas de Departamento',
    description: 'Entenda o comportamento nos provadores, analise áreas de maior interesse e otimize a disposição de produtos.',
    metrics: ['Tempo médio +15% nas seções', 'ROI 300% em campanhas', 'Insights em tempo real'],
    color: 'from-purple-500/20 to-purple-600/20'
  },
  {
    icon: Pill,
    title: 'Farmácias',
    description: 'Monitore filas balcão, analise fluxo entre seções e garanta atendimento eficiente em horários de pico.',
    metrics: ['Redução 50% tempo espera', 'Satisfação +30%', 'Otimização de pessoal'],
    color: 'from-green-500/20 to-green-600/20'
  },
  {
    icon: Coffee,
    title: 'Restaurantes & Cafés',
    description: 'Analise fluxo de clientes, tempo de permanência nas mesas e otimize a operação em horários de maior movimento.',
    metrics: ['Turnover +20%', 'Satisfação 95%', 'Gestão otimizada'],
    color: 'from-orange-500/20 to-orange-600/20'
  },
  {
    icon: Building2,
    title: 'Shopping Centers',
    description: 'Monitore fluxo entre lojas, analise áreas comuns e forneça insights valiosos para lojistas parceiros.',
    metrics: ['Visão macro do fluxo', 'Dados para lojistas', 'ROI para o shopping'],
    color: 'from-cyan-500/20 to-cyan-600/20'
  },
  {
    icon: Car,
    title: 'Concessionárias',
    description: 'Analise interesse por veículos específicos, tempo de permanência e comportamento na área de vendas.',
    metrics: ['Interesse por modelo', 'Qualificação leads', 'Otimização showroom'],
    color: 'from-red-500/20 to-red-600/20'
  }
];

export const UseCasesSection = () => {
  return (
    <section id="casos-uso" className="py-24 bg-gradient-secondary relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse delay-300" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-success/10 rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium">
            <Building2 className="w-4 h-4" />
            Casos de Uso
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Soluções para cada
            <br />
            <span className="bg-gradient-primary bg-clip-text text-transparent">segmento do varejo</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Nossa tecnologia se adapta às necessidades específicas de cada tipo de negócio, 
            oferecendo insights personalizados para maximizar resultados.
          </p>
        </div>

        {/* Use cases grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => {
            const IconComponent = useCase.icon;
            return (
              <Card 
                key={index} 
                className="group bg-gradient-card border-border hover:border-primary/30 transition-all duration-300 hover:shadow-card hover:-translate-y-1 overflow-hidden"
              >
                <div className={`h-2 bg-gradient-to-r ${useCase.color}`} />
                
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mr-4 group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {useCase.title}
                    </h3>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {useCase.description}
                  </p>

                  {/* Metrics */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium text-foreground mb-3">Resultados típicos:</h4>
                    <ul className="space-y-2">
                      {useCase.metrics.map((metric, idx) => (
                        <li key={idx} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-success rounded-full mr-3" />
                          {metric}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom section */}
        <div className="text-center mt-16">
          <div className="bg-card/50 border border-border rounded-2xl p-8 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Não encontrou seu segmento?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Nossa solução é flexível e pode ser adaptada para qualquer tipo de varejo físico. 
              Fale conosco para descobrir como podemos ajudar seu negócio.
            </p>
            <button className="px-8 py-3 bg-gradient-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity shadow-primary">
              Conversar com Especialista
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};