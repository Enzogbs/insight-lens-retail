import { useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { useNavigate } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone, MapPin, Clock, Send, Calendar } from 'lucide-react';

export default function Contact() {
  const navigate = useNavigate();
  
  const handleLoginClick = () => {
    navigate('/login');
  };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    segment: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Mensagem enviada com sucesso!",
        description: "Nossa equipe entrará em contato em até 24 horas.",
      });
      setFormData({ name: '', email: '', company: '', segment: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
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
              <Badge variant="secondary" className="mb-4">
                Fale Conosco
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                Vamos <span className="text-primary">Conversar</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Estamos prontos para ajudar você a transformar suas câmeras em insights de negócio. 
                Entre em contato e descubra o potencial da nossa solução.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Contact Form */}
              <Card className="p-8 bg-gradient-card border-border">
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-foreground mb-2">Solicite uma Demonstração</h2>
                  <p className="text-muted-foreground">
                    Preencha o formulário e nossa equipe entrará em contato em até 24 horas.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nome Completo *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder="Seu nome"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Corporativo *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="seuemail@empresa.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">Empresa *</Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => handleInputChange('company', e.target.value)}
                      placeholder="Nome da sua empresa"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="segment">Segmento *</Label>
                    <Select value={formData.segment} onValueChange={(value) => handleInputChange('segment', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione seu segmento" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="supermercado">Supermercado</SelectItem>
                        <SelectItem value="loja-departamento">Loja de Departamento</SelectItem>
                        <SelectItem value="farmacia">Farmácia</SelectItem>
                        <SelectItem value="restaurante">Restaurante</SelectItem>
                        <SelectItem value="shopping">Shopping Center</SelectItem>
                        <SelectItem value="conveniencia">Loja de Conveniência</SelectItem>
                        <SelectItem value="outros">Outros</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Mensagem</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      placeholder="Conte-nos mais sobre suas necessidades..."
                      rows={4}
                    />
                  </div>

                  <Button 
                    type="submit" 
                    variant="hero" 
                    size="lg" 
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      'Enviando...'
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Solicitar Demonstração
                      </>
                    )}
                  </Button>
                </form>
              </Card>

              {/* Contact Information */}
              <div className="space-y-8">
                {/* Contact Details */}
                <Card className="p-8 bg-gradient-card border-border">
                  <h3 className="text-xl font-bold text-foreground mb-6">Informações de Contato</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">Email</p>
                        <p className="text-muted-foreground">contato@nort.analytics</p>
                        <p className="text-muted-foreground">vendas@nort.analytics</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Phone className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">Telefone</p>
                        <p className="text-muted-foreground">+55 11 3456-7890</p>
                        <p className="text-muted-foreground">+55 11 98765-4321</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">Endereço</p>
                        <p className="text-muted-foreground">
                          Av. Paulista, 1234 - Conj. 567<br />
                          Bela Vista, São Paulo - SP<br />
                          01310-100
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Clock className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">Horário de Atendimento</p>
                        <p className="text-muted-foreground">
                          Segunda a Sexta: 9h às 18h<br />
                          Sábado: 9h às 12h
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>

                {/* Quick Actions */}
                <Card className="p-8 bg-gradient-card border-border">
                  <h3 className="text-xl font-bold text-foreground mb-6">Ações Rápidas</h3>
                  
                  <div className="space-y-4">
                    <Button variant="outline" className="w-full justify-start" size="lg">
                      <Calendar className="mr-3 h-4 w-4" />
                      Agendar Reunião
                    </Button>
                    
                    <Button variant="outline" className="w-full justify-start" size="lg">
                      <Phone className="mr-3 h-4 w-4" />
                      Ligar Agora
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      className="w-full justify-start" 
                      size="lg"
                      onClick={() => window.location.href = '/login'}
                    >
                      <Send className="mr-3 h-4 w-4" />
                      Acessar Demo
                    </Button>
                  </div>
                </Card>

                {/* Support Times */}
                <Card className="p-6 bg-gradient-card border-border">
                  <h4 className="font-semibold text-foreground mb-4">Tempo de Resposta</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Email</span>
                      <Badge variant="secondary">24h</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Telefone</span>
                      <Badge variant="secondary">Imediato</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Demo</span>
                      <Badge variant="secondary">48h</Badge>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Perguntas Frequentes
                </h2>
                <p className="text-xl text-muted-foreground">
                  Respostas rápidas para as dúvidas mais comuns
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6 bg-gradient-card border-border">
                  <h3 className="font-semibold text-foreground mb-2">Quanto tempo leva a implementação?</h3>
                  <p className="text-sm text-muted-foreground">
                    Normalmente 2-3 semanas, desde a configuração inicial até o go-live completo.
                  </p>
                </Card>
                
                <Card className="p-6 bg-gradient-card border-border">
                  <h3 className="font-semibold text-foreground mb-2">Funciona com qualquer câmera?</h3>
                  <p className="text-sm text-muted-foreground">
                    Sim, nossa solução é compatível com praticamente todas as marcas de DVR e câmeras IP.
                  </p>
                </Card>
                
                <Card className="p-6 bg-gradient-card border-border">
                  <h3 className="font-semibold text-foreground mb-2">Os dados ficam seguros?</h3>
                  <p className="text-sm text-muted-foreground">
                    Absolutamente. Somos LGPD compliant e utilizamos criptografia de ponta.
                  </p>
                </Card>
                
                <Card className="p-6 bg-gradient-card border-border">
                  <h3 className="font-semibold text-foreground mb-2">Qual o investimento necessário?</h3>
                  <p className="text-sm text-muted-foreground">
                    O investimento varia conforme o número de câmeras e funcionalidades. Solicite uma cotação personalizada.
                  </p>
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