import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Carlos Silva',
    role: 'Gerente de Operações',
    company: 'Supermercados Delta',
    avatar: '/api/placeholder/64/64',
    content: 'Com a NORT conseguimos reduzir o tempo de fila em 40% e aumentar a satisfação dos clientes. Os insights sobre fluxo nos ajudaram a otimizar o layout da loja.',
    rating: 5,
    stats: '40% redução no tempo de fila'
  },
  {
    name: 'Ana Paula Santos',
    role: 'Diretora de Retail',
    company: 'Fashion Store',
    avatar: '/api/placeholder/64/64',
    content: 'A análise de mapas de calor revolucionou nossa estratégia de merchandising. Agora sabemos exatamente onde posicionar os produtos para maximizar vendas.',
    rating: 5,
    stats: '25% aumento nas vendas'
  },
  {
    name: 'Roberto Lima',
    role: 'Dono da Rede',
    company: 'Farmácias Vida',
    avatar: '/api/placeholder/64/64',
    content: 'O monitoramento em tempo real nos permite reagir rapidamente a filas longas e otimizar o atendimento. ROI foi positivo em apenas 3 meses.',
    rating: 5,
    stats: 'ROI positivo em 3 meses'
  }
];

export const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-gradient-secondary relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-40 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse delay-500" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-success/10 rounded-full blur-3xl animate-pulse delay-1200" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium">
            <Star className="w-4 h-4" />
            Depoimentos
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Clientes que já <span className="bg-gradient-primary bg-clip-text text-transparent">transformaram</span>
            <br />
            seus negócios
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Veja como empresas de diferentes segmentos estão usando nossa tecnologia 
            para obter insights valiosos e melhorar seus resultados.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="group bg-gradient-card border-border hover:border-primary/30 transition-all duration-300 hover:shadow-card hover:-translate-y-1"
            >
              <CardContent className="p-6">
                {/* Quote icon */}
                <div className="flex justify-between items-start mb-4">
                  <Quote className="w-8 h-8 text-primary/30" />
                  <div className="flex items-center gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-warning text-warning" />
                    ))}
                  </div>
                </div>

                {/* Content */}
                <p className="text-muted-foreground leading-relaxed mb-6 italic">
                  "{testimonial.content}"
                </p>

                {/* Stats */}
                <div className="mb-6 p-3 bg-success/10 border border-success/20 rounded-lg">
                  <p className="text-success text-sm font-medium text-center">
                    {testimonial.stats}
                  </p>
                </div>

                {/* Author */}
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mr-4">
                    <span className="text-primary-foreground font-semibold text-lg">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                    <p className="text-sm text-primary">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div className="bg-card/50 border border-border rounded-xl p-6 backdrop-blur-sm">
            <div className="text-3xl font-bold text-primary mb-2">500+</div>
            <div className="text-muted-foreground">Lojas conectadas</div>
          </div>
          <div className="bg-card/50 border border-border rounded-xl p-6 backdrop-blur-sm">
            <div className="text-3xl font-bold text-success mb-2">95%</div>
            <div className="text-muted-foreground">Precisão na detecção</div>
          </div>
          <div className="bg-card/50 border border-border rounded-xl p-6 backdrop-blur-sm">
            <div className="text-3xl font-bold text-warning mb-2">30%</div>
            <div className="text-muted-foreground">Aumento médio em vendas</div>
          </div>
          <div className="bg-card/50 border border-border rounded-xl p-6 backdrop-blur-sm">
            <div className="text-3xl font-bold text-primary mb-2">24/7</div>
            <div className="text-muted-foreground">Monitoramento</div>
          </div>
        </div>
      </div>
    </section>
  );
};