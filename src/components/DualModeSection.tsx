import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const DualModeSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-32 bg-deep-space overflow-hidden">
      <div className="absolute inset-0">
        <img src="/assets/hero-bg.jpeg" alt="" className="w-full h-full object-cover opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-b from-deep-space/40 via-deep-space/30 to-deep-space/40" />
      </div>
      <div className="absolute inset-0 grid-bg opacity-20" />

      <div className="container relative z-10 px-6">
        <motion.div initial={{ opacity: 0, y: 60 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="text-center mb-16">
          <h2 className="font-orbitron text-3xl md:text-5xl font-bold text-metallic mb-4">DUAL-MODE <span className="text-metallic-silver">ARCHITECTURE</span></h2>
          <p className="text-muted-foreground font-rajdhani text-lg">Flexibility meets lethality. Choose your weapon.</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.8, rotateX: 20 }} animate={isInView ? { opacity: 1, scale: 1, rotateX: 0 } : {}} transition={{ duration: 1, delay: 0.3 }} className="relative max-w-5xl mx-auto mb-16" style={{ perspective: '1000px' }}>
          <motion.img src="/assets/badges-dual.jpeg" alt="Supply Bundle and Sniper Bot" className="w-full rounded-2xl shadow-2xl" whileHover={{ scale: 1.02 }} />
          <div className="absolute inset-0 bg-gradient-to-t from-deep-space via-transparent to-transparent rounded-2xl" />
          <motion.div className="absolute -top-10 -left-10 w-40 h-40 bg-neon-orange/20 rounded-full blur-3xl" animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }} transition={{ duration: 4, repeat: Infinity }} />
          <motion.div className="absolute -bottom-10 -right-10 w-40 h-40 bg-electric-blue/20 rounded-full blur-3xl" animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }} transition={{ duration: 4, repeat: Infinity }} />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 80, rotateY: -15 }} animate={isInView ? { opacity: 1, y: 0, rotateY: 0 } : {}} transition={{ duration: 0.9, delay: 0.4 }} whileHover={{ scale: 1.02, rotateY: 5 }} className="card-glow-orange bg-gradient-to-br from-card to-card/50 backdrop-blur-sm rounded-xl p-8 relative" style={{ transformStyle: 'preserve-3d' }}>
            <motion.div className="absolute -top-3 left-8 px-4 py-1 bg-neon-orange rounded-full" initial={{ opacity: 0, y: -20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.6 }}><span className="font-orbitron text-xs font-bold text-background">SUPPLY CONTROL</span></motion.div>
            <h3 className="font-orbitron text-2xl font-bold text-neon-orange mt-4 mb-6">🔶 Supply Control Mode</h3>
            <div className="space-y-3 font-rajdhani text-foreground/80">
              {['Accumulation Strategies', 'Distribution Protocols', 'Stealth Positioning'].map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -20 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.4, delay: 0.7 + i * 0.1 }} className="flex items-center gap-3 p-3 bg-neon-orange/10 rounded-lg" whileHover={{ x: 10 }}>
                  <span className="text-neon-orange font-bold">0{i + 1}</span><span>{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 80, rotateY: 15 }} animate={isInView ? { opacity: 1, y: 0, rotateY: 0 } : {}} transition={{ duration: 0.9, delay: 0.6 }} whileHover={{ scale: 1.02, rotateY: -5 }} className="card-glow-blue bg-gradient-to-br from-card to-card/50 backdrop-blur-sm rounded-xl p-8 relative" style={{ transformStyle: 'preserve-3d' }}>
            <motion.div className="absolute -top-3 left-8 px-4 py-1 bg-electric-blue rounded-full" initial={{ opacity: 0, y: -20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.8 }}><span className="font-orbitron text-xs font-bold text-background">PRECISION STRIKE</span></motion.div>
            <h3 className="font-orbitron text-2xl font-bold text-electric-blue mt-4 mb-6">🔷 Precision Strike Mode</h3>
            <div className="space-y-3 font-rajdhani text-foreground/80">
              {['Instant Execution', 'High Priority Transactions', 'Perfect Timing'].map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -20 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.4, delay: 0.9 + i * 0.1 }} className="flex items-center gap-3 p-3 bg-electric-blue/10 rounded-lg" whileHover={{ x: 10 }}>
                  <span className="text-electric-blue font-bold">0{i + 1}</span><span>{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DualModeSection;
