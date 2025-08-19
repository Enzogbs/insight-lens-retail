import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { FeaturesSection } from '@/components/FeaturesSection';
import { UseCasesSection } from '@/components/UseCasesSection';
import { HowItWorksSection } from '@/components/HowItWorksSection';
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
      <FeaturesSection />
      <UseCasesSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
}