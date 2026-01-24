import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import badgesDual from '@/assets/badges-dual.jpeg';
import heroBg from '@/assets/hero-bg.jpeg';

const DualModeSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-32 bg-deep-space overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-deep-space via-deep-space/90 to-deep-space" />
      </div>
      <div className="absolute inset-0 grid-bg opacity-20" />

      <div className="container relative z-10 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-orbitron text-3xl md:text-5xl font-bold text-metallic mb-4">
            DUAL-MODE <span className="text-metallic-silver">ARCHITECTURE</span>
          </h2>
          <p className="text-muted-foreground font-rajdhani text-lg">
            Flexibility meets lethality. Choose your weapon.
          </p>
        </motion.div>

        {/* Dual Badges Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative max-w-5xl mx-auto mb-16"
        >
          <img 
            src={badgesDual} 
            alt="Supply Bundle and Sniper Bot" 
            className="w-full rounded-2xl shadow-2xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-deep-space via-transparent to-transparent rounded-2xl" />
        </motion.div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Supply Control Mode */}
          <motion.div
            initial={{ opacity: 0, y: 50, rotateY: -10 }}
            animate={isInView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ scale: 1.02, rotateY: 5 }}
            className="card-glow-orange bg-gradient-to-br from-card to-card/50 backdrop-blur-sm rounded-xl p-8 relative group cursor-pointer"
            style={{ transformStyle: 'preserve-3d' }}
          >
            <div className="absolute -top-3 left-8 px-4 py-1 bg-neon-orange rounded-full">
              <span className="font-orbitron text-xs font-bold text-background">SUPPLY CONTROL</span>
            </div>
            
            <h3 className="font-orbitron text-2xl font-bold text-neon-orange mt-4 mb-6">
              🔶 Supply Control Mode
            </h3>
            
            <div className="space-y-3 font-rajdhani text-foreground/80">
              <div className="flex items-center gap-3 p-3 bg-neon-orange/10 rounded-lg">
                <span className="text-neon-orange font-bold">01</span>
                <span>Accumulation Strategies</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-neon-orange/10 rounded-lg">
                <span className="text-neon-orange font-bold">02</span>
                <span>Distribution Protocols</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-neon-orange/10 rounded-lg">
                <span className="text-neon-orange font-bold">03</span>
                <span>Stealth Positioning</span>
              </div>
            </div>
          </motion.div>

          {/* Precision Strike Mode */}
          <motion.div
            initial={{ opacity: 0, y: 50, rotateY: 10 }}
            animate={isInView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            whileHover={{ scale: 1.02, rotateY: -5 }}
            className="card-glow-blue bg-gradient-to-br from-card to-card/50 backdrop-blur-sm rounded-xl p-8 relative group cursor-pointer"
            style={{ transformStyle: 'preserve-3d' }}
          >
            <div className="absolute -top-3 left-8 px-4 py-1 bg-electric-blue rounded-full">
              <span className="font-orbitron text-xs font-bold text-background">PRECISION STRIKE</span>
            </div>
            
            <h3 className="font-orbitron text-2xl font-bold text-electric-blue mt-4 mb-6">
              🔷 Precision Strike Mode
            </h3>
            
            <div className="space-y-3 font-rajdhani text-foreground/80">
              <div className="flex items-center gap-3 p-3 bg-electric-blue/10 rounded-lg">
                <span className="text-electric-blue font-bold">01</span>
                <span>Instant Execution</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-electric-blue/10 rounded-lg">
                <span className="text-electric-blue font-bold">02</span>
                <span>High Priority Transactions</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-electric-blue/10 rounded-lg">
                <span className="text-electric-blue font-bold">03</span>
                <span>Perfect Timing</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DualModeSection;
