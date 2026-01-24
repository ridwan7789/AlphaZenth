import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import logoFull from '@/assets/logo-full.jpeg';
import heroBg from '@/assets/hero-bg.jpeg';

const FinalCTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-32 overflow-hidden bg-deep-space">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-t from-deep-space/50 via-deep-space/30 to-deep-space/40" />
      </div>

      {/* Intense Background Effects */}
      <div 
        className="absolute inset-0"
        style={{ 
          background: 'radial-gradient(ellipse at 50% 100%, hsl(15 100% 55% / 0.2) 0%, transparent 60%)' 
        }}
      />
      <div 
        className="absolute inset-0"
        style={{ 
          background: 'radial-gradient(ellipse at 50% 0%, hsl(195 100% 50% / 0.1) 0%, transparent 40%)' 
        }}
      />

      {/* Logo Watermark */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10">
        <img 
          src={logoFull} 
          alt="" 
          className="w-full max-w-4xl object-contain"
        />
      </div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 grid-bg opacity-10" />

      <div className="container relative z-10 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-orbitron text-3xl md:text-5xl lg:text-6xl font-black text-metallic leading-tight mb-6">
              Move Before
              <br />
              <span className="text-neon-orange text-glow-orange">Others Notice.</span>
            </h2>
            
            <p className="font-orbitron text-2xl md:text-4xl text-metallic-silver mb-4">
              Execute Before
              <br />
              <span className="text-electric-blue text-glow-blue">The Crowd.</span>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            {/* Primary CTA */}
            <button className="group relative px-12 py-5 rounded-lg overflow-hidden font-orbitron text-xl tracking-wider">
              <div className="absolute inset-0 bg-gradient-to-r from-neon-orange via-fire-red to-neon-orange animate-shimmer" style={{ backgroundSize: '200% 100%' }} />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ boxShadow: 'inset 0 0 30px hsl(15 100% 55% / 0.5)' }} />
              <span className="relative flex items-center gap-3 text-background font-bold">
                <span className="text-2xl">🔥</span>
                Launch ALPHA ZENTH
              </span>
            </button>

            {/* Secondary CTA */}
            <button className="group relative px-12 py-5 rounded-lg overflow-hidden font-orbitron text-xl tracking-wider border-2 border-electric-blue/50 hover:border-electric-blue transition-colors">
              <div className="absolute inset-0 bg-electric-blue/10 group-hover:bg-electric-blue/20 transition-colors" />
              <span className="relative flex items-center gap-3 text-electric-blue font-bold">
                <span className="text-2xl">⚡</span>
                Request Access
              </span>
            </button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-16 flex flex-wrap justify-center gap-8 text-muted-foreground font-rajdhani"
          >
            <div className="flex items-center gap-2">
              <span className="text-neon-orange">◆</span>
              <span>Zero Latency</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-electric-blue">◆</span>
              <span>Military-Grade Security</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-neon-orange">◆</span>
              <span>24/7 Operations</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default FinalCTASection;
