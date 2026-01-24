import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import heroBg from '@/assets/hero-bg.jpeg';

const OperatorsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-32 bg-deep-space overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-b from-deep-space via-deep-space/80 to-deep-space" />
      </div>

      {/* Scanlines Effect */}
      <div className="absolute inset-0 scanlines opacity-50" />
      
      {/* Corner Decorations */}
      <div className="absolute top-8 left-8 w-20 h-20 border-l-2 border-t-2 border-neon-orange/30" />
      <div className="absolute top-8 right-8 w-20 h-20 border-r-2 border-t-2 border-neon-orange/30" />
      <div className="absolute bottom-8 left-8 w-20 h-20 border-l-2 border-b-2 border-electric-blue/30" />
      <div className="absolute bottom-8 right-8 w-20 h-20 border-r-2 border-b-2 border-electric-blue/30" />

      <div className="container relative z-10 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1 }}
          >
            <p className="font-orbitron text-sm md:text-base text-neon-orange uppercase tracking-[0.5em] mb-8">
              ▲ CLASSIFIED ▲
            </p>
            
            <h2 className="font-orbitron text-4xl md:text-6xl lg:text-7xl font-black text-metallic leading-tight mb-8">
              BUILT FOR
              <br />
              <span className="text-foreground">SERIOUS</span>
              <br />
              <span className="text-neon-orange text-glow-orange">OPERATORS</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6 font-rajdhani text-xl md:text-2xl text-muted-foreground"
          >
            <p className="border-l-4 border-fire-red pl-6 text-left">
              This is not for beginners.
            </p>
            <p className="border-l-4 border-fire-red/70 pl-6 text-left">
              This is not for public hype.
            </p>
            <p className="border-l-4 border-fire-red/40 pl-6 text-left">
              This is not for the crowd.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-16"
          >
            <p className="font-orbitron text-2xl md:text-3xl text-foreground">
              <span className="text-metallic-silver">Built for</span>{" "}
              <span className="text-electric-blue text-glow-blue">professionals</span>
              <span className="text-metallic-silver">.</span>
            </p>
            <p className="font-orbitron text-2xl md:text-3xl text-foreground mt-2">
              <span className="text-metallic-silver">Designed for</span>{" "}
              <span className="text-neon-orange text-glow-orange">dominance</span>
              <span className="text-metallic-silver">.</span>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OperatorsSection;
