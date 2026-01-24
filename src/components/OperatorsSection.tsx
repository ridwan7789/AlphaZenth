import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const OperatorsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const lines = [
    { text: "This is not for beginners.", opacity: 1 },
    { text: "This is not for public hype.", opacity: 0.7 },
    { text: "This is not for the crowd.", opacity: 0.4 },
  ];

  return (
    <section ref={ref} className="relative py-32 bg-deep-space overflow-hidden">
      <div className="absolute inset-0">
        <img src="/assets/hero-bg.jpeg" alt="" className="w-full h-full object-cover opacity-55" />
        <div className="absolute inset-0 bg-gradient-to-b from-deep-space/40 via-deep-space/30 to-deep-space/40" />
      </div>
      <div className="absolute inset-0 scanlines opacity-50" />
      {[
        { pos: 'top-8 left-8', border: 'border-l-2 border-t-2 border-neon-orange/30' },
        { pos: 'top-8 right-8', border: 'border-r-2 border-t-2 border-neon-orange/30' },
        { pos: 'bottom-8 left-8', border: 'border-l-2 border-b-2 border-electric-blue/30' },
        { pos: 'bottom-8 right-8', border: 'border-r-2 border-b-2 border-electric-blue/30' },
      ].map((corner, i) => (
        <motion.div key={i} className={`absolute ${corner.pos} w-20 h-20 ${corner.border}`} initial={{ opacity: 0, scale: 0 }} animate={isInView ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 0.5, delay: 0.2 * i }} />
      ))}

      <div className="container relative z-10 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={isInView ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 1 }}>
            <motion.p className="font-orbitron text-sm md:text-base text-neon-orange uppercase tracking-[0.5em] mb-8" animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity }}>▲ CLASSIFIED ▲</motion.p>
            <h2 className="font-orbitron text-4xl md:text-6xl lg:text-7xl font-black text-metallic leading-tight mb-8">
              <motion.span initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }} className="block">BUILT FOR</motion.span>
              <motion.span initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.4 }} className="block text-foreground">SERIOUS</motion.span>
              <motion.span initial={{ opacity: 0, scale: 0.5 }} animate={isInView ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 0.8, delay: 0.6 }} className="block text-neon-orange text-glow-orange">OPERATORS</motion.span>
            </h2>
          </motion.div>
          <div className="space-y-6 font-rajdhani text-xl md:text-2xl text-muted-foreground">
            {lines.map((line, i) => (
              <motion.p key={i} initial={{ opacity: 0, x: -100 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: 0.8 + i * 0.2 }} className="border-l-4 border-fire-red pl-6 text-left" style={{ borderColor: `hsl(0 100% 60% / ${line.opacity})` }} whileHover={{ x: 20 }}>{line.text}</motion.p>
            ))}
          </div>
          <motion.div initial={{ opacity: 0, y: 50 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 1.4 }} className="mt-16">
            <p className="font-orbitron text-2xl md:text-3xl text-foreground"><span className="text-metallic-silver">Built for</span> <span className="text-electric-blue text-glow-blue">professionals</span><span className="text-metallic-silver">.</span></p>
            <p className="font-orbitron text-2xl md:text-3xl text-foreground mt-2"><span className="text-metallic-silver">Designed for</span> <span className="text-neon-orange text-glow-orange">dominance</span><span className="text-metallic-silver">.</span></p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OperatorsSection;
