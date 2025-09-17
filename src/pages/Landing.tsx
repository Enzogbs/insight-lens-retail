import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { Footer } from '@/components/Footer';
import { useNavigate } from 'react-router-dom';

export default function Landing() {
  const navigate = useNavigate();
  
  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-background">
      <Header variant="landing" onLoginClick={handleLoginClick} />
      <HeroSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
}