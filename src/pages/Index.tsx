import EmberParticles from '@/components/EmberParticles';
import HeroSection from '@/components/HeroSection';
import WhySection from '@/components/WhySection';
import SplitFeatureSection from '@/components/SplitFeatureSection';
import DualModeSection from '@/components/DualModeSection';
import InterfacePreview from '@/components/InterfacePreview';
import OperatorsSection from '@/components/OperatorsSection';
import FinalCTASection from '@/components/FinalCTASection';

const Index = () => {
  return (
    <div className="relative bg-deep-space min-h-screen overflow-x-hidden">
      {/* Global Ember Particles */}
      <EmberParticles />
      
      {/* Main Content */}
      <main>
        <HeroSection />
        <WhySection />
        <SplitFeatureSection />
        <DualModeSection />
        <InterfacePreview />
        <OperatorsSection />
        <FinalCTASection />
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
