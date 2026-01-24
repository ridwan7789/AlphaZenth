import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logoClean from '@/assets/logo-clean.jpeg';

const FloatingNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Determine active section
      const sections = ['hero', 'why', 'systems', 'modes', 'preview', 'operators', 'testimonials', 'waitlist', 'cta'];
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { id: 'why', label: 'Why', color: 'orange' },
    { id: 'systems', label: 'Systems', color: 'blue' },
    { id: 'modes', label: 'Modes', color: 'orange' },
    { id: 'preview', label: 'Preview', color: 'blue' },
    { id: 'testimonials', label: 'Operators', color: 'orange' },
    { id: 'waitlist', label: 'Access', color: 'blue' },
  ];

  return (
    <AnimatePresence>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-deep-space/90 backdrop-blur-xl border-b border-border/30' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <motion.button
              onClick={() => scrollTo('hero')}
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 group"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-neon-orange/30 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                <img 
                  src={logoClean} 
                  alt="ALPHA ZENTH" 
                  className="w-10 h-10 rounded-full object-cover border-2 border-neon-orange/50 group-hover:border-neon-orange transition-colors"
                />
              </div>
              <span className="font-orbitron font-bold text-metallic hidden sm:block">
                ALPHA <span className="text-neon-orange">ZENTH</span>
              </span>
            </motion.button>

            {/* Nav Links */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <motion.button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  whileHover={{ scale: 1.05 }}
                  className={`relative px-4 py-2 font-orbitron text-sm tracking-wider transition-all duration-300 group ${
                    activeSection === link.id 
                      ? link.color === 'orange' ? 'text-neon-orange' : 'text-electric-blue'
                      : 'text-metallic-silver hover:text-foreground'
                  }`}
                >
                  {link.label}
                  {/* Glow effect on hover */}
                  <span 
                    className={`absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity ${
                      link.color === 'orange' 
                        ? 'bg-neon-orange/10 shadow-[0_0_20px_hsl(15_100%_55%/0.3)]' 
                        : 'bg-electric-blue/10 shadow-[0_0_20px_hsl(195_100%_50%/0.3)]'
                    }`}
                  />
                  {/* Active indicator */}
                  {activeSection === link.id && (
                    <motion.div
                      layoutId="activeNav"
                      className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full ${
                        link.color === 'orange' ? 'bg-neon-orange' : 'bg-electric-blue'
                      }`}
                    />
                  )}
                </motion.button>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex items-center gap-3">
              <motion.button
                onClick={() => scrollTo('waitlist')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 bg-gradient-to-r from-neon-orange to-fire-red rounded-lg font-orbitron text-xs sm:text-sm tracking-wider text-background font-bold shadow-[0_0_20px_hsl(15_100%_55%/0.3)] hover:shadow-[0_0_30px_hsl(15_100%_55%/0.5)] transition-shadow"
              >
                JOIN BETA
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>
    </AnimatePresence>
  );
};

export default FloatingNavbar;
