import { motion } from 'framer-motion';

const LoadingScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] bg-deep-space flex items-center justify-center overflow-hidden"
    >
      {/* Targeting Reticle Animation */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative w-[400px] h-[400px]"
        >
          {/* Rotating rings */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-full border border-fire-red/30"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            className="absolute inset-8 rounded-full border border-neon-orange/40"
          />
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="absolute inset-16 rounded-full border-2 border-electric-blue/50"
          />

          {/* Crosshairs */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-fire-red/60 to-transparent"
          />
          <motion.div
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-fire-red/60 to-transparent"
          />

          {/* Corner brackets */}
          {[
            { top: '15%', left: '15%', borderDir: 'border-l-2 border-t-2' },
            { top: '15%', right: '15%', borderDir: 'border-r-2 border-t-2' },
            { bottom: '15%', left: '15%', borderDir: 'border-l-2 border-b-2' },
            { bottom: '15%', right: '15%', borderDir: 'border-r-2 border-b-2' },
          ].map((pos, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
              className={`absolute w-8 h-8 ${pos.borderDir} border-neon-orange`}
              style={{ top: pos.top, left: pos.left, right: pos.right, bottom: pos.bottom }}
            />
          ))}
        </motion.div>
      </div>

      {/* Center content */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Logo */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2, type: "spring", stiffness: 200 }}
          className="relative mb-8"
        >
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 blur-3xl bg-fire-red/40 rounded-full"
          />
          <img
            src="/assets/logo-clean.jpeg"
            alt="ALPHA ZENTH"
            className="relative w-32 h-32 rounded-full object-cover border-4 border-neon-orange/50"
          />
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <h1 className="font-orbitron text-2xl md:text-3xl font-black text-metallic mb-2">
            ALPHA <span className="text-neon-orange text-glow-orange">ZENTH</span>
          </h1>
          <p className="font-orbitron text-xs text-metallic-silver/60 tracking-[0.3em] uppercase">
            Initializing Systems
          </p>
        </motion.div>

        {/* Loading bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-8 w-48 h-1 bg-border/30 rounded-full overflow-hidden"
        >
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="h-full w-1/2 bg-gradient-to-r from-neon-orange via-fire-red to-neon-orange rounded-full"
          />
        </motion.div>

        {/* Status text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-4"
        >
          <motion.p
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="font-mono text-xs text-electric-blue"
          >
            ▸ LOADING APEX PROTOCOLS...
          </motion.p>
        </motion.div>
      </div>

      {/* Scanlines */}
      <div className="absolute inset-0 scanlines opacity-20 pointer-events-none" />

      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-10 pointer-events-none" />
    </motion.div>
  );
};

export default LoadingScreen;
