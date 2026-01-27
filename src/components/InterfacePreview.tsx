import { motion, useInView, useMotionValue, useTransform } from 'framer-motion';
import { useRef, useEffect } from 'react';

const InterfacePreview = () => {
  const ref = useRef(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-300, 300], [15, -15]);
  const rotateY = useTransform(mouseX, [-300, 300], [-15, 15]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      mouseX.set(e.clientX - centerX);
      mouseY.set(e.clientY - centerY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section ref={ref} className="relative py-32 bg-deep-space overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img src="/assets/hero-bg.jpeg" alt="" className="w-full h-full object-cover opacity-45" />
        <div className="absolute inset-0 bg-gradient-to-b from-deep-space/40 via-deep-space/30 to-deep-space/40" />
      </div>

      {/* Radial Glow Background */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at 50% 50%, hsl(15 100% 55% / 0.08) 0%, transparent 50%)'
        }}
      />

      <div className="container relative z-10 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-orbitron text-3xl md:text-5xl font-bold text-metallic mb-4">
            INTERFACE <span className="text-neon-orange text-glow-orange">PREVIEW</span>
          </h2>
          <p className="text-muted-foreground font-rajdhani text-lg">
            Designed for speed. Built for control.
          </p>
        </motion.div>

        {/* Application Previews Side by Side */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          {/* 3D Phone Mockup */}
          <div ref={containerRef} className="perspective-1000">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotateX: 20 }}
              animate={isInView ? { opacity: 1, scale: 1, rotateX: 0 } : {}}
              transition={{ duration: 1, delay: 0.3 }}
              style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
              className="relative max-w-sm"
            >
              {/* Phone Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-b from-neon-orange/30 via-transparent to-electric-blue/30 blur-2xl rounded-3xl" />

              {/* Phone Frame */}
              <div className="relative bg-gradient-to-b from-gunmetal to-secondary rounded-[3rem] p-2 shadow-2xl">
                <div className="absolute top-6 left-1/2 -translate-x-1/2 w-24 h-6 bg-background rounded-full" />
                <img
                  src="/assets/mobile-mockup.jpeg"
                  alt="ALPHA ZENTH Mobile Interface"
                  className="w-full rounded-[2.5rem] object-cover"
                />
              </div>

              {/* Reflection */}
              <div
                className="absolute inset-0 rounded-[3rem] opacity-20 pointer-events-none"
                style={{
                  background: 'linear-gradient(135deg, transparent 30%, hsl(0 0% 100% / 0.3) 50%, transparent 70%)'
                }}
              />
            </motion.div>
          </div>

          {/* Alpha Labs Application Preview */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative max-w-md"
          >
            <div className="bg-gradient-to-b from-gunmetal to-secondary rounded-xl p-2 shadow-2xl">
              <img
                src="/assets/alpha-labs.png"
                alt="Alpha Labs Application Interface"
                className="w-full rounded-lg object-cover"
              />
            </div>

            {/* Glow Effect */}
            <div className="absolute -inset-4 bg-gradient-to-b from-neon-orange/20 via-transparent to-electric-blue/20 blur-2xl rounded-xl" />
          </motion.div>
        </div>

        {/* Feature Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-6 mt-16"
        >
          {[
            { icon: "⚡", text: "Instant Actions" },
            { icon: "🎯", text: "Precision Controls" },
            { icon: "🛡️", text: "Secure Operations" },
            { icon: "📊", text: "Real-time Data" },
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 px-6 py-3 bg-card/50 border border-border rounded-full"
            >
              <span className="text-xl">{item.icon}</span>
              <span className="font-rajdhani text-foreground/80">{item.text}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default InterfacePreview;
