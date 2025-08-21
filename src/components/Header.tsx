import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import nortLogo from '@/assets/nort-logo.png';

interface HeaderProps {
  variant?: 'landing' | 'app';
  onLoginClick?: () => void;
}

export const Header = ({ variant = 'landing', onLoginClick }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    { label: 'Sobre', href: '/sobre' },
    { label: 'Funcionalidades', href: '/funcionalidades' },
    { label: 'Casos de Uso', href: '/casos-de-uso' },
    { label: 'Como Funciona', href: '/como-funciona' },
    { label: 'Contato', href: '/contato' },
  ];

  const handleDemoClick = () => {
    navigate('/contato');
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img src={nortLogo} alt="NORT" className="h-8 w-auto" />
            <span className="text-xl font-bold text-foreground">NORT</span>
          </Link>

          {/* Desktop Navigation */}
          {variant === 'landing' && (
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          )}

          {/* Login Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              variant="outline" 
              onClick={onLoginClick}
              className="text-foreground border-border"
            >
              Login
            </Button>
            <Button variant="hero" size="lg" onClick={handleDemoClick}>
              Solicitar Demo
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && variant === 'landing' && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="outline" onClick={onLoginClick}>
                  Login
                </Button>
                <Button variant="hero" onClick={handleDemoClick}>
                  Solicitar Demo
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};