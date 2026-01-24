import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import LoadingScreen from '@/components/LoadingScreen';
import ParallaxBackground from '@/components/ParallaxBackground';
import AnnouncementBanner from '@/components/AnnouncementBanner';
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
import SocialIcons from '@/components/SocialIcons';
const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for premium experience
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen />}
      </AnimatePresence>

      <div className="relative bg-deep-space min-h-screen overflow-x-hidden">
        {/* Parallax Background */}
        <ParallaxBackground />

        {/* Announcement Banner */}
        <AnnouncementBanner />

        {/* Global Ember Particles */}
        <EmberParticles />

        {/* Floating Navigation */}
        <FloatingNavbar />

        {/* Skip to main content link for accessibility */}
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-background focus:text-foreground focus:p-4 focus:rounded focus:shadow-lg">
          Skip to main content
        </a>

        {/* Main Content */}
        <main id="main-content" className="focus:outline-none">
          <section id="hero" aria-labelledby="hero-heading">
            <h1 id="hero-heading" className="sr-only">ALPHA ZENTH - Premium Supply Bundler & Precision Sniping Bot</h1>
            <HeroSection />
          </section>

          <section id="stats" aria-labelledby="stats-counter-heading">
            <h2 id="stats-counter-heading" className="sr-only">Platform Statistics</h2>
            <StatsCounter />
          </section>

          <section id="why" aria-labelledby="why-section-heading">
            <h2 id="why-section-heading" className="sr-only">Why Choose ALPHA ZENTH</h2>
            <WhySection />
          </section>

          <section id="systems" aria-labelledby="systems-section-heading">
            <h2 id="systems-section-heading" className="sr-only">Advanced Systems</h2>
            <SplitFeatureSection />
          </section>

          <section id="modes" aria-labelledby="modes-section-heading">
            <h2 id="modes-section-heading" className="sr-only">Dual Mode Architecture</h2>
            <DualModeSection />
          </section>

          <section id="preview" aria-labelledby="interface-preview-heading">
            <h2 id="interface-preview-heading" className="sr-only">Interface Preview</h2>
            <InterfacePreview />
          </section>

          <section id="operators" aria-labelledby="operators-section-heading">
            <h2 id="operators-section-heading" className="sr-only">Professional Operators</h2>
            <OperatorsSection />
          </section>

          <section id="testimonials" aria-labelledby="testimonials-heading">
            <h2 id="testimonials-heading" className="sr-only">User Testimonials</h2>
            <TestimonialsSection />
          </section>

          <section id="waitlist" aria-labelledby="waitlist-section-heading">
            <h2 id="waitlist-section-heading" className="sr-only">Join Our Waitlist</h2>
            <WaitlistSection />
          </section>

          <section id="cta" aria-labelledby="final-cta-heading">
            <h2 id="final-cta-heading" className="sr-only">Final Call to Action</h2>
            <FinalCTASection />
          </section>
        </main>

        {/* Footer */}
        <footer className="relative py-8 bg-background border-t border-border" role="contentinfo" aria-label="Footer">
          <div className="container px-6">
            <div className="flex flex-col items-center gap-4">
              <SocialIcons />
              <div className="flex flex-col md:flex-row items-center justify-between gap-4 w-full">
                <p className="font-orbitron text-sm text-muted-foreground">
                  © 2026 ALPHA ZENTH. All rights reserved.
                </p>
                <p className="font-rajdhani text-sm text-muted-foreground">
                  Premium Supply Bundler & Precision Sniping Bot
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Index;
