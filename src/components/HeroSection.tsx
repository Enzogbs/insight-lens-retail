import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/80" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            Transformação Digital do Varejo
          </div>

          {/* Main headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
            Transforme suas
            <span className="bg-gradient-primary bg-clip-text text-transparent"> câmeras</span>
            <br />
            em insights de negócio
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
            Análise inteligente por vídeo e IA para maximizar a performance do seu varejo físico. 
            Dados estratégicos em tempo real para decisões mais assertivas.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button variant="hero" size="xl" className="group">
              Solicitar Demo Gratuita
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button variant="outline" size="xl" className="group">
              <Play className="mr-2 h-5 w-5" />
              Ver Como Funciona
            </Button>
          </div>

          {/* Social proof */}
          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-4">
              Confiado por mais de 500+ lojas no Brasil
            </p>
            <div className="flex justify-center items-center space-x-8 opacity-60">
              <div className="text-xs font-medium bg-secondary px-4 py-2 rounded">Magazine Luiza</div>
              <div className="text-xs font-medium bg-secondary px-4 py-2 rounded">Renner</div>
              <div className="text-xs font-medium bg-secondary px-4 py-2 rounded">Farmácias Pague Menos</div>
              <div className="text-xs font-medium bg-secondary px-4 py-2 rounded">Lojas Americanas</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full p-1">
          <div className="w-1 h-3 bg-muted-foreground rounded-full mx-auto animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};