import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { Footer } from '@/components/Footer';

export default function Landing() {
  const handleLoginClick = () => {
    window.location.href = '/login';
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