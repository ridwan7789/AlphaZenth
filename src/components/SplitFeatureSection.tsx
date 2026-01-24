import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import heroBg from '@/assets/hero-bg.jpeg';

const SplitFeatureSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const headerVariants = {
    hidden: { opacity: 0, y: 60, filter: 'blur(15px)' },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: 'blur(0px)',
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const features = {
    bundling: [
      "Secure supply before momentum builds",
      "Stealth accumulation protocols",
      "Controlled distribution windows",
      "Invisible market footprint",
    ],
    sniper: [
      "Ultra-fast execution pipeline",
      "Precision timing algorithms",
      "Zero missed opportunities",
      "First-mover advantage guaranteed",
    ],
  };

  return (
    <section ref={ref} className="relative py-32 bg-deep-space overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroBg} 
          alt="" 
          className="w-full h-full object-cover opacity-55"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-deep-space/50 via-deep-space/30 to-deep-space/50" />
      </div>

      <div className="container relative z-10 px-6">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={headerVariants}
          className="text-center mb-16"
        >
          <motion.h2 
            className="font-orbitron text-3xl md:text-5xl font-bold text-metallic mb-4"
          >
            CORE{' '}
            <motion.span 
              className="text-fire-red text-glow-red inline-block"
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.3, type: "spring" }}
            >
              SYSTEMS
            </motion.span>
          </motion.h2>
          <p className="text-muted-foreground font-rajdhani text-lg">
            Two modes. One objective. Total domination.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto" style={{ perspective: '1000px' }}>
          {/* Left Panel - Automated Bundling */}
          <motion.div
            initial={{ opacity: 0, x: -100, rotateY: -15, filter: 'blur(15px)' }}
            animate={isInView ? { opacity: 1, x: 0, rotateY: 0, filter: 'blur(0px)' } : {}}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
            whileHover={{ 
              scale: 1.02, 
              rotateY: 5,
              boxShadow: '0 0 40px hsl(15 100% 55% / 0.3)',
            }}
            className="card-glow-orange bg-card/80 backdrop-blur-sm rounded-xl p-8 relative group"
            style={{ transformStyle: 'preserve-3d' }}
          >
            <motion.div 
              className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-neon-orange via-fire-red to-neon-orange"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
            />
            
            <div className="flex items-center gap-4 mb-6">
              <motion.span 
                className="text-4xl"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              >
                🔶
              </motion.span>
              <h3 className="font-orbitron text-2xl md:text-3xl font-bold text-neon-orange">
                AUTOMATED BUNDLING
              </h3>
            </div>
            
            <ul className="space-y-4 font-rajdhani text-lg text-foreground/80">
              {features.bundling.map((item, i) => (
                <motion.li 
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                  className="flex items-start gap-3"
                  whileHover={{ x: 10, color: 'hsl(15 100% 55%)' }}
                >
                  <motion.span 
                    className="text-neon-orange mt-1"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1, repeat: Infinity, repeatDelay: 2, delay: i * 0.2 }}
                  >
                    ▸
                  </motion.span>
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>

            <motion.div 
              className="mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 }}
            >
              <motion.button 
                className="btn-orange w-full py-4 rounded-lg text-background font-orbitron tracking-wider"
                whileHover={{ scale: 1.02, boxShadow: '0 0 30px hsl(15 100% 55% / 0.5)' }}
                whileTap={{ scale: 0.98 }}
              >
                ENTER BUNDLE MODE
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Panel - Snipes in Seconds */}
          <motion.div
            initial={{ opacity: 0, x: 100, rotateY: 15, filter: 'blur(15px)' }}
            animate={isInView ? { opacity: 1, x: 0, rotateY: 0, filter: 'blur(0px)' } : {}}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.4 }}
            whileHover={{ 
              scale: 1.02, 
              rotateY: -5,
              boxShadow: '0 0 40px hsl(195 100% 50% / 0.3)',
            }}
            className="card-glow-blue bg-card/80 backdrop-blur-sm rounded-xl p-8 relative group"
            style={{ transformStyle: 'preserve-3d' }}
          >
            <motion.div 
              className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-electric-blue via-electric-cyan to-electric-blue"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.7 }}
            />
            
            <div className="flex items-center gap-4 mb-6">
              <motion.span 
                className="text-4xl"
                animate={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              >
                🔷
              </motion.span>
              <h3 className="font-orbitron text-2xl md:text-3xl font-bold text-electric-blue">
                SNIPES IN SECONDS
              </h3>
            </div>
            
            <ul className="space-y-4 font-rajdhani text-lg text-foreground/80">
              {features.sniper.map((item, i) => (
                <motion.li 
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                  className="flex items-start gap-3"
                  whileHover={{ x: 10, color: 'hsl(195 100% 50%)' }}
                >
                  <motion.span 
                    className="text-electric-blue mt-1"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1, repeat: Infinity, repeatDelay: 2, delay: i * 0.2 }}
                  >
                    ▸
                  </motion.span>
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>

            <motion.div 
              className="mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1 }}
            >
              <motion.button 
                className="btn-blue w-full py-4 rounded-lg text-background font-orbitron tracking-wider"
                whileHover={{ scale: 1.02, boxShadow: '0 0 30px hsl(195 100% 50% / 0.5)' }}
                whileTap={{ scale: 0.98 }}
              >
                ACTIVATE SNIPER
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SplitFeatureSection;
