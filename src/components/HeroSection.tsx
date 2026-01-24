import { motion } from 'framer-motion';
import logoClean from '@/assets/logo-clean.jpeg';
import heroBg from '@/assets/hero-bg.jpeg';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-deep-space">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-b from-deep-space/40 via-deep-space/20 to-deep-space/60" />
      </div>

      {/* Targeting Reticle Background */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-[600px] h-[600px] md:w-[800px] md:h-[800px]">
          {/* Outer Ring */}
          <div className="absolute inset-0 rounded-full border border-fire-red/20 animate-rotate-slow" />
          <div className="absolute inset-8 rounded-full border border-fire-red/30" style={{ animationDelay: '0.5s' }} />
          <div className="absolute inset-16 rounded-full border border-fire-red/20" />
          
          {/* Crosshairs */}
          <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-fire-red/40 to-transparent" />
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-fire-red/40 to-transparent" />
          
          {/* Corner Brackets */}
          <div className="absolute top-20 left-20 w-12 h-12 border-l-2 border-t-2 border-neon-orange/60" />
          <div className="absolute top-20 right-20 w-12 h-12 border-r-2 border-t-2 border-neon-orange/60" />
          <div className="absolute bottom-20 left-20 w-12 h-12 border-l-2 border-b-2 border-neon-orange/60" />
          <div className="absolute bottom-20 right-20 w-12 h-12 border-r-2 border-b-2 border-neon-orange/60" />
        </div>
      </div>

      {/* Radial Glow */}
      <div 
        className="absolute inset-0 opacity-50"
        style={{ background: 'radial-gradient(circle at 50% 50%, hsl(15 100% 55% / 0.15) 0%, transparent 50%)' }}
      />

      <div className="container relative z-10 px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex flex-col items-center text-center"
        >
          {/* Floating Logo - Rounded */}
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="relative mb-8"
          >
            <div className="absolute inset-0 blur-3xl bg-fire-red/30 rounded-full scale-150" />
            <img 
              src={logoClean} 
              alt="ALPHA ZENTH" 
              className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover rounded-full breathing drop-shadow-2xl border-4 border-neon-orange/30"
            />
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-orbitron text-4xl md:text-6xl lg:text-7xl font-black text-metallic mb-4 tracking-wider"
          >
            ALPHA <span className="text-neon-orange text-glow-orange">ZENTH</span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="font-orbitron text-lg md:text-2xl text-metallic-silver/80 mb-2 tracking-widest uppercase"
          >
            Precision Is Power. Speed Is Dominance.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-muted-foreground text-lg md:text-xl mb-12 font-rajdhani"
          >
            The Apex Tool for Market Execution
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-6"
          >
            <button className="btn-orange px-10 py-4 rounded-lg text-background font-orbitron text-lg tracking-wider flex items-center gap-3 group">
              <span className="text-2xl">🔶</span>
              Enter Supply Mode
              <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
            </button>
            <button className="btn-blue px-10 py-4 rounded-lg text-background font-orbitron text-lg tracking-wider flex items-center gap-3 group">
              <span className="text-2xl">🔷</span>
              Activate Sniper Mode
              <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
            </button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-metallic-silver/30 rounded-full flex justify-center pt-2"
          >
            <div className="w-1.5 h-3 bg-neon-orange rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
