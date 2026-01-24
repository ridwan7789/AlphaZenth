import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import heroBg from '@/assets/hero-bg.jpeg';

const WhySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const lines = [
    { text: "Markets move in milliseconds.", delay: 0 },
    { text: "Humans hesitate. Algorithms don't.", delay: 0.2 },
    { text: "ALPHA ZENTH removes delay.", delay: 0.4 },
    { text: "It removes emotion.", delay: 0.6 },
    { text: "It removes failure.", delay: 0.8 },
  ];

  return (
    <section ref={ref} className="relative py-32 bg-deep-space overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-deep-space via-deep-space/90 to-deep-space" />
      </div>

      {/* Subtle Grid Background */}
      <div className="absolute inset-0 grid-bg opacity-30" />
      
      {/* Animated Divider Line at Top */}
      <div className="absolute top-0 left-0 right-0">
        <div className="section-divider" />
      </div>

      <div className="container relative z-10 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-orbitron text-3xl md:text-5xl font-bold text-metallic mb-4">
            WHY <span className="text-neon-orange text-glow-orange">ALPHA ZENTH</span>
          </h2>
          <p className="text-muted-foreground font-rajdhani text-lg">
            The difference between winning and losing is measured in microseconds
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {lines.map((line, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: line.delay }}
              className="relative"
            >
              <div className="flex items-center gap-6">
                <div className="w-2 h-2 rounded-full bg-neon-orange animate-glow-pulse flex-shrink-0" />
                <p className="font-orbitron text-xl md:text-3xl text-foreground/90 tracking-wide">
                  {line.text}
                </p>
              </div>
              {index < lines.length - 1 && (
                <div className="absolute left-[3px] top-4 w-px h-12 bg-gradient-to-b from-neon-orange/50 to-transparent" />
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-20 text-center"
        >
          <p className="font-orbitron text-2xl md:text-4xl text-metallic-silver">
            Execute with <span className="text-electric-blue text-glow-blue">precision</span>.
            <br />
            Dominate with <span className="text-neon-orange text-glow-orange">power</span>.
          </p>
        </motion.div>
      </div>

      {/* Animated Divider Line at Bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <div className="section-divider" />
      </div>
    </section>
  );
};

export default WhySection;
