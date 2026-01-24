import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const WhySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const lines = [
    { text: "Markets move in milliseconds.", delay: 0 },
    { text: "Humans hesitate. Algorithms don't.", delay: 0.15 },
    { text: "ALPHA ZENTH removes delay.", delay: 0.3 },
    { text: "It removes emotion.", delay: 0.45 },
    { text: "It removes failure.", delay: 0.6 },
  ];

  return (
    <section ref={ref} className="relative py-32 bg-deep-space overflow-hidden">
      <div className="absolute inset-0">
        <img src="/assets/hero-bg.jpeg" alt="" className="w-full h-full object-cover opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-b from-deep-space/50 via-deep-space/40 to-deep-space/50" />
      </div>
      <div className="absolute inset-0 grid-bg opacity-30" />
      <motion.div className="absolute top-0 left-0 right-0" initial={{ scaleX: 0 }} animate={isInView ? { scaleX: 1 } : {}} transition={{ duration: 1 }}><div className="section-divider" /></motion.div>

      <div className="container relative z-10 px-6">
        <motion.div initial={{ opacity: 0, y: 50 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="text-center mb-16">
          <h2 className="font-orbitron text-3xl md:text-5xl font-bold text-metallic mb-4">WHY <span className="text-neon-orange text-glow-orange">ALPHA ZENTH</span></h2>
          <p className="text-muted-foreground font-rajdhani text-lg">The difference between winning and losing is measured in microseconds</p>
        </motion.div>
        <div className="max-w-4xl mx-auto space-y-8">
          {lines.map((line, index) => (
            <motion.div key={index} initial={{ opacity: 0, x: -80 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: line.delay }} className="relative">
              <div className="flex items-center gap-6">
                <motion.div className="w-3 h-3 rounded-full bg-neon-orange flex-shrink-0" initial={{ scale: 0 }} animate={isInView ? { scale: 1 } : {}} transition={{ duration: 0.4, delay: line.delay + 0.3 }} />
                <motion.p className="font-orbitron text-xl md:text-3xl text-foreground/90 tracking-wide" whileHover={{ x: 10 }}>{line.text}</motion.p>
              </div>
              {index < lines.length - 1 && <motion.div className="absolute left-[5px] top-5 w-px h-12 bg-gradient-to-b from-neon-orange/50 to-transparent" initial={{ scaleY: 0 }} animate={isInView ? { scaleY: 1 } : {}} transition={{ duration: 0.5, delay: line.delay + 0.5 }} style={{ originY: 0 }} />}
            </motion.div>
          ))}
        </div>
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={isInView ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 1, delay: 1 }} className="mt-20 text-center">
          <p className="font-orbitron text-2xl md:text-4xl text-metallic-silver">Execute with <span className="text-electric-blue text-glow-blue">precision</span>.<br />Dominate with <span className="text-neon-orange text-glow-orange">power</span>.</p>
        </motion.div>
      </div>
      <motion.div className="absolute bottom-0 left-0 right-0" initial={{ scaleX: 0 }} animate={isInView ? { scaleX: 1 } : {}} transition={{ duration: 1, delay: 1.2 }}><div className="section-divider" /></motion.div>
    </section>
  );
};

export default WhySection;
