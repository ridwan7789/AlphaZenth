import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import heroBg from '@/assets/hero-bg.jpeg';

const SplitFeatureSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-32 bg-deep-space overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroBg} 
          alt="" 
          className="w-full h-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-deep-space via-deep-space/80 to-deep-space" />
      </div>

      <div className="container relative z-10 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-orbitron text-3xl md:text-5xl font-bold text-metallic mb-4">
            CORE <span className="text-fire-red text-glow-red">SYSTEMS</span>
          </h2>
          <p className="text-muted-foreground font-rajdhani text-lg">
            Two modes. One objective. Total domination.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Left Panel - Automated Bundling */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="card-glow-orange bg-card/80 backdrop-blur-sm rounded-xl p-8 relative group"
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-neon-orange via-fire-red to-neon-orange opacity-60 group-hover:opacity-100 transition-opacity" />
            
            <div className="flex items-center gap-4 mb-6">
              <span className="text-4xl">🔶</span>
              <h3 className="font-orbitron text-2xl md:text-3xl font-bold text-neon-orange">
                AUTOMATED BUNDLING
              </h3>
            </div>
            
            <ul className="space-y-4 font-rajdhani text-lg text-foreground/80">
              <li className="flex items-start gap-3">
                <span className="text-neon-orange mt-1">▸</span>
                <span>Secure supply before momentum builds</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-neon-orange mt-1">▸</span>
                <span>Stealth accumulation protocols</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-neon-orange mt-1">▸</span>
                <span>Controlled distribution windows</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-neon-orange mt-1">▸</span>
                <span>Invisible market footprint</span>
              </li>
            </ul>

            <div className="mt-8">
              <button className="btn-orange w-full py-4 rounded-lg text-background font-orbitron tracking-wider">
                ENTER BUNDLE MODE
              </button>
            </div>
          </motion.div>

          {/* Right Panel - Snipes in Seconds */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="card-glow-blue bg-card/80 backdrop-blur-sm rounded-xl p-8 relative group"
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-electric-blue via-electric-cyan to-electric-blue opacity-60 group-hover:opacity-100 transition-opacity" />
            
            <div className="flex items-center gap-4 mb-6">
              <span className="text-4xl">🔷</span>
              <h3 className="font-orbitron text-2xl md:text-3xl font-bold text-electric-blue">
                SNIPES IN SECONDS
              </h3>
            </div>
            
            <ul className="space-y-4 font-rajdhani text-lg text-foreground/80">
              <li className="flex items-start gap-3">
                <span className="text-electric-blue mt-1">▸</span>
                <span>Ultra-fast execution pipeline</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-electric-blue mt-1">▸</span>
                <span>Precision timing algorithms</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-electric-blue mt-1">▸</span>
                <span>Zero missed opportunities</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-electric-blue mt-1">▸</span>
                <span>First-mover advantage guaranteed</span>
              </li>
            </ul>

            <div className="mt-8">
              <button className="btn-blue w-full py-4 rounded-lg text-background font-orbitron tracking-wider">
                ACTIVATE SNIPER
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SplitFeatureSection;
