import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, Users, Twitter, Menu, X } from 'lucide-react';
import { toast } from '@/components/ui/sonner';

const FloatingNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  const socialLinks = [
    {
      name: 'Telegram Bot',
      url: 'https://t.me/AlphaZenthbot',
      icon: Bot,
      color: 'text-blue-500 hover:text-blue-400'
    },
    {
      name: 'Telegram Channel',
      url: 'https://t.me/Alpha_Zenth_update',
      icon: Users,
      color: 'text-blue-500 hover:text-blue-400'
    },
    {
      name: 'Twitter/X',
      url: 'https://x.com/AlphaZenth',
      icon: Twitter,
      color: 'text-gray-300 hover:text-white'
    }
  ];

  const handleDownloadClick = () => {
    toast.info('AlphaLabs will be available after the token launch. Users must hold a minimum of 500,000 project tokens to access AlphaLabs.', {
      duration: 7000,
    });
  };

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
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <motion.button
              onClick={() => scrollTo('hero')}
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 group"
              aria-label="Go to home section"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-neon-orange/30 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                <img
                  src="/assets/logo-clean.jpeg"
                  alt="ALPHA ZENTH"
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover border-2 border-neon-orange/50 group-hover:border-neon-orange transition-colors"
                />
              </div>
              <span className="font-orbitron font-bold text-metallic hidden sm:block">
                ALPHA <span className="text-neon-orange">ZENTH</span>
              </span>
            </motion.button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <motion.button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  whileHover={{ scale: 1.05 }}
                  className={`relative px-3 sm:px-4 py-2 font-orbitron text-sm tracking-wider transition-all duration-300 group ${
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

              {/* Desktop Social Icons */}
              <div className="flex items-center gap-3 ml-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                      className={`${social.color} transition-colors duration-300`}
                    >
                      <IconComponent className="w-4 h-4 sm:w-5 sm:h-5" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center gap-3 md:hidden">
              {/* Mobile Social Icons */}
              <div className="flex items-center gap-2">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                      className={`${social.color} transition-colors duration-300`}
                    >
                      <IconComponent className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-md text-metallic-silver hover:text-foreground focus:outline-none focus:ring-2 focus:ring-neon-orange"
                aria-expanded={mobileMenuOpen}
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>

            {/* Mobile CTA Buttons */}
            <div className="hidden md:flex flex-col gap-2">
              <a
                href="https://t.me/AlphaZenthbot"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-gradient-to-r from-neon-orange to-fire-red rounded-lg font-orbitron text-xs sm:text-sm tracking-wider text-background font-bold shadow-[0_0_20px_hsl(15_100%_55%/0.3)] hover:shadow-[0_0_30px_hsl(15_100%_55%/0.5)] transition-shadow whitespace-nowrap"
              >
                LAUNCH ALPHA ZENTH
              </a>
              <button
                onClick={handleDownloadClick}
                className="px-4 py-2 bg-gradient-to-r from-neon-orange to-fire-red rounded-lg font-orbitron text-xs sm:text-sm tracking-wider text-background font-bold shadow-[0_0_20px_hsl(15_100%_55%/0.3)] hover:shadow-[0_0_30px_hsl(15_100%_55%/0.5)] transition-shadow whitespace-nowrap"
              >
                DOWNLOAD ALPHA LABS
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden overflow-hidden"
              >
                <div className="pb-4 space-y-2">
                  {navLinks.map((link) => (
                    <motion.button
                      key={link.id}
                      onClick={() => {
                        scrollTo(link.id);
                        setMobileMenuOpen(false);
                      }}
                      whileHover={{ scale: 1.02 }}
                      className={`w-full text-left px-4 py-3 font-orbitron text-sm tracking-wider transition-all duration-300 ${
                        activeSection === link.id
                          ? link.color === 'orange' ? 'text-neon-orange bg-orange-500/10' : 'text-electric-blue bg-blue-500/10'
                          : 'text-metallic-silver hover:bg-background/20'
                      }`}
                    >
                      {link.label}
                    </motion.button>
                  ))}

                  {/* Mobile CTA Buttons */}
                  <a
                    href="https://t.me/AlphaZenthbot"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full px-4 py-3 bg-gradient-to-r from-neon-orange to-fire-red rounded-lg font-orbitron text-sm tracking-wider text-background font-bold text-center shadow-[0_0_20px_hsl(15_100%_55%/0.3)] hover:shadow-[0_0_30px_hsl(15_100%_55%/0.5)] transition-shadow"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    LAUNCH ALPHA ZENTH
                  </a>
                  <button
                    onClick={() => {
                      handleDownloadClick();
                      setMobileMenuOpen(false);
                    }}
                    className="block w-full px-4 py-3 bg-gradient-to-r from-neon-orange to-fire-red rounded-lg font-orbitron text-sm tracking-wider text-background font-bold text-center shadow-[0_0_20px_hsl(15_100%_55%/0.3)] hover:shadow-[0_0_30px_hsl(15_100%_55%/0.5)] transition-shadow"
                  >
                    DOWNLOAD ALPHA LABS
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>
    </AnimatePresence>
  );
};

export default FloatingNavbar;
