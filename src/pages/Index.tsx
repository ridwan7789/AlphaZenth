import EmberParticles from '@/components/EmberParticles';
import FloatingNavbar from '@/components/FloatingNavbar';
import HeroSection from '@/components/HeroSection';
import StatsCounter from '@/components/StatsCounter';
import WhySection from '@/components/WhySection';
import SplitFeatureSection from '@/components/SplitFeatureSection';
import DualModeSection from '@/components/DualModeSection';
import InterfacePreview from '@/components/InterfacePreview';
import OperatorsSection from '@/components/OperatorsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import WaitlistSection from '@/components/WaitlistSection';
import FinalCTASection from '@/components/FinalCTASection';

const Index = () => {
  return (
    <div className="relative bg-deep-space min-h-screen overflow-x-hidden">
      {/* Global Ember Particles */}
      <EmberParticles />
      
      {/* Floating Navigation */}
      <FloatingNavbar />
      
      {/* Main Content */}
      <main>
        <div id="hero">
          <HeroSection />
        </div>
        <StatsCounter />
        <div id="why">
          <WhySection />
        </div>
        <div id="systems">
          <SplitFeatureSection />
        </div>
        <div id="modes">
          <DualModeSection />
        </div>
        <div id="preview">
          <InterfacePreview />
        </div>
        <div id="operators">
          <OperatorsSection />
        </div>
        <TestimonialsSection />
        <WaitlistSection />
        <div id="cta">
          <FinalCTASection />
        </div>
      </main>

      {/* Footer */}
      <footer className="relative py-8 bg-background border-t border-border">
        <div className="container px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-orbitron text-sm text-muted-foreground">
              © 2024 ALPHA ZENTH. All rights reserved.
            </p>
            <p className="font-rajdhani text-sm text-muted-foreground">
              Premium Supply Bundler & Precision Sniping Bot
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
