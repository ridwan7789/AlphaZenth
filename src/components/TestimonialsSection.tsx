import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const testimonials = [
    {
      id: 'OPR-7X2K',
      role: 'Institutional Trader',
      quote: "The execution speed is unlike anything I've experienced. By the time others see the opportunity, I've already █████████ my position.",
      redacted: ['secured', 'closed'],
      classification: 'CLASSIFIED',
      color: 'orange',
    },
    {
      id: 'OPR-4M9N',
      role: 'DeFi Strategist',
      quote: "ALPHA ZENTH gave me the edge I needed. My win rate went from ██% to over ████% within the first month.",
      redacted: ['67', '94.2'],
      classification: 'CONFIDENTIAL',
      color: 'blue',
    },
    {
      id: 'OPR-8L3P',
      role: 'Private Operator',
      quote: "The bundler mode is a game changer for stealth operations. Complete ██████████ from the market.",
      redacted: ['invisibility'],
      classification: 'TOP SECRET',
      color: 'orange',
    },
    {
      id: 'OPR-2R6T',
      role: 'Whale Coordinator',
      quote: "I've tested every tool on the market. ALPHA ZENTH is the only one that delivers on its promises. The ████████ is unmatched.",
      redacted: ['precision'],
      classification: 'RESTRICTED',
      color: 'blue',
    },
  ];

  return (
    <section id="testimonials" ref={ref} className="relative py-32 bg-deep-space overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src="/assets/hero-bg.jpeg" alt="" className="w-full h-full object-cover opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-b from-deep-space/40 via-deep-space/30 to-deep-space/40" />
      </div>

      {/* Scanlines */}
      <div className="absolute inset-0 scanlines opacity-40" />

      {/* Grid overlay */}
      <div className="absolute inset-0 grid-bg opacity-20" />

      <div className="container relative z-10 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-orbitron text-sm text-fire-red uppercase tracking-[0.3em] mb-4">
            ▲ CLASSIFIED INTEL ▲
          </p>
          <h2 className="font-orbitron text-3xl md:text-5xl font-bold text-metallic mb-4">
            OPERATOR <span className="text-neon-orange text-glow-orange">TESTIMONIALS</span>
          </h2>
          <p className="text-muted-foreground font-rajdhani text-lg">
            Verified reports from active operatives
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`relative bg-card/40 backdrop-blur-sm border rounded-lg overflow-hidden group ${
                testimonial.color === 'orange'
                  ? 'border-neon-orange/20 hover:border-neon-orange/40'
                  : 'border-electric-blue/20 hover:border-electric-blue/40'
              } transition-all duration-300`}
            >
              {/* Classification Header */}
              <div className={`px-4 py-2 flex items-center justify-between ${
                testimonial.color === 'orange' ? 'bg-neon-orange/10' : 'bg-electric-blue/10'
              }`}>
                <div className="flex items-center gap-3">
                  <div className={`w-2 h-2 rounded-full animate-pulse ${
                    testimonial.color === 'orange' ? 'bg-neon-orange' : 'bg-electric-blue'
                  }`} />
                  <span className="font-mono text-xs text-muted-foreground">
                    ID: {testimonial.id}
                  </span>
                </div>
                <span className={`font-orbitron text-xs tracking-wider ${
                  testimonial.classification === 'TOP SECRET'
                    ? 'text-fire-red'
                    : testimonial.classification === 'CLASSIFIED'
                    ? 'text-neon-orange'
                    : 'text-electric-blue'
                }`}>
                  [{testimonial.classification}]
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Quote */}
                <p className="font-rajdhani text-lg text-foreground/90 leading-relaxed mb-4">
                  "{testimonial.quote}"
                </p>

                {/* Operator Info */}
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    testimonial.color === 'orange' ? 'bg-neon-orange/20' : 'bg-electric-blue/20'
                  }`}>
                    <span className="font-orbitron text-xs">
                      {testimonial.id.slice(-2)}
                    </span>
                  </div>
                  <div>
                    <p className="font-orbitron text-sm text-metallic-silver">
                      OPERATOR {testimonial.id}
                    </p>
                    <p className="font-rajdhani text-xs text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>

              {/* Redacted stamp overlay on hover */}
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-12">
                  <span className={`font-orbitron text-4xl font-black tracking-widest opacity-10 ${
                    testimonial.color === 'orange' ? 'text-neon-orange' : 'text-electric-blue'
                  }`}>
                    VERIFIED
                  </span>
                </div>
              </div>

              {/* Corner accents */}
              <div className={`absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 ${
                testimonial.color === 'orange' ? 'border-neon-orange/50' : 'border-electric-blue/50'
              }`} />
              <div className={`absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 ${
                testimonial.color === 'orange' ? 'border-neon-orange/50' : 'border-electric-blue/50'
              }`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
