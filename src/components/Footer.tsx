import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Twitter, 
  Github,
  ArrowRight
} from 'lucide-react';
import nortLogo from '@/assets/nort-logo.png';

export const Footer = () => {
  const footerLinks = {
    produto: [
      { label: 'Funcionalidades', href: '#produto' },
      { label: 'Casos de Uso', href: '#casos-uso' },
      { label: 'Como Funciona', href: '#como-funciona' },
      { label: 'Preços', href: '#precos' },
    ],
    empresa: [
      { label: 'Sobre Nós', href: '#sobre' },
      { label: 'Carreiras', href: '#carreiras' },
      { label: 'Blog', href: '#blog' },
      { label: 'Imprensa', href: '#imprensa' },
    ],
    recursos: [
      { label: 'Documentação', href: '#docs' },
      { label: 'API', href: '#api' },
      { label: 'Suporte', href: '#suporte' },
      { label: 'Status', href: '#status' },
    ],
    legal: [
      { label: 'Política de Privacidade', href: '#privacidade' },
      { label: 'Termos de Uso', href: '#termos' },
      { label: 'LGPD', href: '#lgpd' },
      { label: 'Segurança', href: '#seguranca' },
    ]
  };

  return (
    <footer className="bg-background border-t border-border">
      {/* Newsletter section */}
      <div className="border-b border-border">
        <div className="container mx-auto px-4 lg:px-8 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Receba insights exclusivos sobre varejo
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Assine nossa newsletter e receba conteúdos sobre tendências em tecnologia 
              para varejo, casos de sucesso e dicas de especialistas.
            </p>
            
            <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-3">
              <input
                type="email"
                placeholder="Seu melhor email"
                className="flex-1 px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <button className="px-6 py-3 bg-gradient-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity shadow-primary whitespace-nowrap">
                Assinar
                <ArrowRight className="inline ml-2 w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <img src={nortLogo} alt="NORT" className="h-8 w-auto" />
              <span className="text-xl font-bold text-foreground">NORT</span>
            </div>
            
            <p className="text-muted-foreground mb-6 max-w-md">
              Transformamos dados de vídeo em insights estratégicos para o varejo físico. 
              Tecnologia brasileira de ponta para decisões mais inteligentes.
            </p>

            {/* Contact info */}
            <div className="space-y-3">
              <div className="flex items-center text-muted-foreground">
                <Mail className="w-4 h-4 mr-3" />
                <span className="text-sm">contato@nort.com.br</span>
              </div>
              <div className="flex items-center text-muted-foreground">
                <Phone className="w-4 h-4 mr-3" />
                <span className="text-sm">+55 (11) 3000-0000</span>
              </div>
              <div className="flex items-center text-muted-foreground">
                <MapPin className="w-4 h-4 mr-3" />
                <span className="text-sm">São Paulo, SP - Brasil</span>
              </div>
            </div>

            {/* Social links */}
            <div className="flex space-x-4 mt-6">
              <a href="#" className="w-10 h-10 bg-secondary hover:bg-primary/20 rounded-lg flex items-center justify-center transition-colors group">
                <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary" />
              </a>
              <a href="#" className="w-10 h-10 bg-secondary hover:bg-primary/20 rounded-lg flex items-center justify-center transition-colors group">
                <Twitter className="w-5 h-5 text-muted-foreground group-hover:text-primary" />
              </a>
              <a href="#" className="w-10 h-10 bg-secondary hover:bg-primary/20 rounded-lg flex items-center justify-center transition-colors group">
                <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary" />
              </a>
            </div>
          </div>

          {/* Links sections */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Produto</h4>
            <ul className="space-y-3">
              {footerLinks.produto.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Empresa</h4>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Recursos</h4>
            <ul className="space-y-3">
              {footerLinks.recursos.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">
              © 2024 NORT Analytics. Todos os direitos reservados.
            </p>
            
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
                <span className="text-sm text-muted-foreground">Sistema operacional</span>
              </div>
              <span className="text-muted-foreground text-sm">
                Desenvolvido com ❤️ no Brasil
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};