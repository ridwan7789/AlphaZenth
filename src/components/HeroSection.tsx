import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-deep-space">
      <div className="absolute inset-0">
        <img src="/assets/hero-bg.jpeg" alt="" className="w-full h-full object-cover opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-b from-deep-space/40 via-deep-space/20 to-deep-space/60" />
      </div>

      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 1.5 }}
      >
        <div className="relative w-[600px] h-[600px] md:w-[800px] md:h-[800px]">
          <motion.div className="absolute inset-0 rounded-full border border-fire-red/20 animate-rotate-slow" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 1, delay: 0.2 }} />
          <motion.div className="absolute inset-8 rounded-full border border-fire-red/30" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 1, delay: 0.4 }} />
          <motion.div className="absolute inset-16 rounded-full border border-fire-red/20" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 1, delay: 0.6 }} />
          <motion.div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-fire-red/40 to-transparent" initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.8, delay: 0.8 }} />
          <motion.div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-fire-red/40 to-transparent" initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ duration: 0.8, delay: 0.8 }} />
          {[
            { pos: 'top-20 left-20', border: 'border-l-2 border-t-2', delay: 1.0 },
            { pos: 'top-20 right-20', border: 'border-r-2 border-t-2', delay: 1.1 },
            { pos: 'bottom-20 left-20', border: 'border-l-2 border-b-2', delay: 1.2 },
            { pos: 'bottom-20 right-20', border: 'border-r-2 border-b-2', delay: 1.3 },
          ].map((bracket, i) => (
            <motion.div key={i} className={`absolute ${bracket.pos} w-12 h-12 ${bracket.border} border-neon-orange/60`} initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: bracket.delay }} />
          ))}
        </div>
      </motion.div>

      <div className="container relative z-10 px-6">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, staggerChildren: 0.15 }} className="flex flex-col items-center text-center">
          <motion.div initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }} animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }} transition={{ duration: 0.8, delay: 0.3 }} className="relative mb-8">
            <motion.div className="absolute inset-0 blur-3xl bg-fire-red/30 rounded-full scale-150" animate={{ scale: [1.5, 1.8, 1.5], opacity: [0.3, 0.5, 0.3] }} transition={{ duration: 3, repeat: Infinity }} />
            <motion.img src="/assets/logo-clean.jpeg" alt="ALPHA ZENTH" className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover rounded-full drop-shadow-2xl border-4 border-neon-orange/30" animate={{ y: [0, -15, 0] }} transition={{ duration: 4, repeat: Infinity }} />
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5 }} className="font-orbitron text-4xl md:text-6xl lg:text-7xl font-black text-metallic mb-4 tracking-wider">
            ALPHA <span className="text-neon-orange text-glow-orange">ZENTH</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.7 }} className="font-orbitron text-lg md:text-2xl text-metallic-silver/80 mb-2 tracking-widest uppercase">
            Precision Is Power. Speed Is Dominance.
          </motion.p>
          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.9 }} className="text-muted-foreground text-lg md:text-xl mb-4 font-rajdhani">
            ALPHA ZENTH TOKEN IS NOW LIVE ON SOLANA!
          </motion.p>
          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1.0 }} className="text-muted-foreground text-lg md:text-xl mb-2 font-rajdhani max-w-3xl">
            The official $ALPHA token has successfully launched on the Solana network.
            This marks a major milestone for the Alpha Zenth ecosystem, alongside the continued development of BETA APP and ALPHA LABS.
          </motion.p>
          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1.1 }} className="text-muted-foreground text-lg md:text-xl mb-4 font-rajdhani max-w-3xl">
            Trading is now open. The journey has officially begun.
          </motion.p>
          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1.2 }} className="text-destructive text-lg md:text-xl mb-4 font-rajdhani max-w-3xl">
            ⚠️ Stay alert: beware of fake tokens, scams, and impersonators.
            Only trust links and updates shared through official Alpha Zenth channels.
          </motion.p>
          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1.3 }} className="text-muted-foreground text-lg md:text-xl mb-6 font-rajdhani max-w-3xl">
            Welcome to the next phase. 🐺🔥
          </motion.p>
          <div className="mb-8">
            <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1.0 }} className="text-neon-orange font-orbitron text-base mb-2 tracking-widest">
              Alpha Zenth Official CA $ALPHA :
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="bg-deep-space/50 border border-neon-orange/30 rounded-lg p-4 max-w-2xl cursor-pointer select-all"
              onClick={(e) => {
                e.stopPropagation();
                navigator.clipboard.writeText('4heQm7yBua9Ps5LhQBqUPvcpJmgdQQZ5hkgotwQCpump');
              }}
            >
              <p className="text-electric-blue font-mono text-sm md:text-base break-all">
                4heQm7yBua9Ps5LhQBqUPvcpJmgdQQZ5hkgotwQCpump
              </p>
              <p className="text-xs text-neon-orange/70 mt-1">Click to copy</p>
            </motion.div>
          </div>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1.1 }} className="flex flex-col sm:flex-row gap-6">
            <motion.button className="btn-orange px-10 py-4 rounded-lg text-background font-orbitron text-lg tracking-wider flex items-center gap-3" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <span className="text-2xl">🔶</span>Enter Supply Mode<span>→</span>
            </motion.button>
            <motion.button className="btn-blue px-10 py-4 rounded-lg text-background font-orbitron text-lg tracking-wider flex items-center gap-3" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <span className="text-2xl">🔷</span>Activate Sniper Mode<span>→</span>
            </motion.button>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1.2 }} className="mt-8">
            <a
              href="https://pump.fun/coin/4heQm7yBua9Ps5LhQBqUPvcpJmgdQQZ5hkgotwQCpump"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.button
                className="btn-orange px-10 py-4 rounded-lg text-background font-orbitron text-lg tracking-wider flex items-center gap-3"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="text-2xl">🟡</span>BUY ON PUMPFUN<span>→</span>
              </motion.button>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
