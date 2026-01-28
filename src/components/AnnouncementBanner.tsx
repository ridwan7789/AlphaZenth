import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, AlertTriangle } from 'lucide-react';

const AnnouncementBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5 }}
          className="fixed top-0 left-0 right-0 z-[60] bg-gradient-to-r from-neon-orange/90 via-fire-red/90 to-neon-orange/90 backdrop-blur-sm"
        >
          <div className="container px-6 py-3">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3 flex-1">
                <AlertTriangle className="w-5 h-5 text-background shrink-0" />
                <p className="font-rajdhani text-sm md:text-base text-background font-medium">
                  <span className="font-orbitron font-bold">🚨 OFFICIAL ANNOUNCEMENT 🚨</span><br className="sm:hidden" />
                  <span className="block sm:inline">
                    {' '}ALPHA ZENTH is preparing to launch its official TOKEN on the Solana network in the coming days.
                  </span>
                  <br className="hidden sm:block" />
                  <span className="block sm:inline">
                    This marks a major milestone as we move forward with the Alpha Zenth ecosystem, alongside the development of{' '}
                    <span className="font-bold underline">BETA APP</span> and{' '}
                    <span className="font-bold underline">ALPHA LABS</span>.
                  </span>
                  <br className="hidden sm:block" />
                  <span className="block sm:inline">
                    More details will be announced soon.
                    Stay alert, stay sharp — the countdown has begun. 🚀
                  </span>
                  <br className="hidden sm:block" />
                  <span className="block sm:inline font-bold text-yellow-200">
                    ⚠️ Beware of scams and impersonators. Only trust official Alpha Zenth channels.
                  </span>
                </p>
              </div>
              <button
                onClick={() => setIsVisible(false)}
                className="shrink-0 p-1 rounded-full hover:bg-background/20 transition-colors"
                aria-label="Close announcement"
              >
                <X className="w-5 h-5 text-background" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AnnouncementBanner;
