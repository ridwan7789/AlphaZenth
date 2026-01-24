import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import heroBg from '@/assets/hero-bg.jpeg';

interface CounterProps {
  end: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  decimals?: number;
}

const Counter = ({ end, suffix = '', prefix = '', duration = 2, decimals = 0 }: CounterProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, end, {
        duration,
        ease: "easeOut",
        onUpdate: (value) => {
          setCount(Number(value.toFixed(decimals)));
        },
      });
      return controls.stop;
    }
  }, [isInView, end, duration, decimals]);

  return (
    <span ref={ref}>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
};

const StatsCounter = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    {
      value: 0.003,
      suffix: 's',
      label: 'EXECUTION SPEED',
      description: 'Average transaction time',
      color: 'orange',
      decimals: 3,
    },
    {
      value: 99.7,
      suffix: '%',
      label: 'SUCCESS RATE',
      description: 'Completed transactions',
      color: 'blue',
      decimals: 1,
    },
    {
      value: 2847392,
      suffix: '+',
      label: 'TRANSACTIONS',
      description: 'Processed to date',
      color: 'orange',
      decimals: 0,
    },
    {
      value: 847,
      suffix: '',
      prefix: '$',
      label: 'MILLION VOLUME',
      description: 'Total trading volume',
      color: 'blue',
      decimals: 0,
    },
  ];

  return (
    <section ref={ref} className="relative py-20 bg-deep-space overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-b from-deep-space/40 via-deep-space/30 to-deep-space/40" />
      </div>

      {/* Scanline effect */}
      <div className="absolute inset-0 scanlines opacity-30" />

      <div className="container relative z-10 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <p className="font-orbitron text-sm text-neon-orange uppercase tracking-[0.3em] mb-2">
            ▲ LIVE METRICS ▲
          </p>
          <h2 className="font-orbitron text-2xl md:text-4xl font-bold text-metallic">
            PERFORMANCE <span className="text-electric-blue text-glow-blue">DATA</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`relative p-6 md:p-8 rounded-xl backdrop-blur-sm border ${
                stat.color === 'orange' 
                  ? 'bg-neon-orange/5 border-neon-orange/20 hover:border-neon-orange/50' 
                  : 'bg-electric-blue/5 border-electric-blue/20 hover:border-electric-blue/50'
              } transition-all duration-300 group`}
            >
              {/* Glow effect */}
              <div 
                className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity ${
                  stat.color === 'orange' 
                    ? 'shadow-[inset_0_0_30px_hsl(15_100%_55%/0.1)]' 
                    : 'shadow-[inset_0_0_30px_hsl(195_100%_50%/0.1)]'
                }`}
              />

              {/* Counter */}
              <div className={`font-orbitron text-3xl md:text-5xl font-black mb-2 ${
                stat.color === 'orange' ? 'text-neon-orange text-glow-orange' : 'text-electric-blue text-glow-blue'
              }`}>
                <Counter 
                  end={stat.value} 
                  suffix={stat.suffix} 
                  prefix={stat.prefix}
                  decimals={stat.decimals}
                  duration={2 + index * 0.3}
                />
              </div>

              {/* Label */}
              <p className="font-orbitron text-xs md:text-sm text-metallic-silver tracking-wider mb-1">
                {stat.label}
              </p>
              <p className="font-rajdhani text-xs text-muted-foreground">
                {stat.description}
              </p>

              {/* Corner accent */}
              <div className={`absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 rounded-tr-xl ${
                stat.color === 'orange' ? 'border-neon-orange/50' : 'border-electric-blue/50'
              }`} />
              <div className={`absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 rounded-bl-xl ${
                stat.color === 'orange' ? 'border-neon-orange/50' : 'border-electric-blue/50'
              }`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;
