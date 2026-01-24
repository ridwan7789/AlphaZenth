import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import heroBg from '@/assets/hero-bg.jpeg';

interface WaitlistFormProps {
  type: 'beta_app' | 'alpha_labs';
  title: string;
  subtitle: string;
  color: 'orange' | 'blue';
  icon: string;
}

const WaitlistForm = ({ type, title, subtitle, color, icon }: WaitlistFormProps) => {
  const [xUsername, setXUsername] = useState('');
  const [telegramUsername, setTelegramUsername] = useState('');
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');
  const [isFocused, setIsFocused] = useState({
    xUsername: false,
    telegramUsername: false,
    email: false
  });

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!xUsername.trim()) {
      setError('X username is required');
      return;
    }

    if (!telegramUsername.trim()) {
      setError('Telegram username is required');
      return;
    }

    if (!email.trim()) {
      setError('Email is required');
      return;
    }

    if (!validateEmail(email)) {
      setError('Please enter a valid email');
      return;
    }

    setIsLoading(true);

    try {
      const { error: supabaseError } = await supabase
        .from('waitlist')
        .insert([{
          email: email.trim().toLowerCase(),
          waitlist_type: type
        }]);

      if (supabaseError) {
        if (supabaseError.code === '23505') {
          setError('This email is already on the waitlist');
        } else {
          throw supabaseError;
        }
      } else {
        setIsSuccess(true);
        toast.success('Welcome to the elite. You\'re on the list. Your X and Telegram usernames have been noted.');
        setXUsername('');
        setTelegramUsername('');
        setEmail('');
      }
    } catch (err) {
      console.error('Waitlist error:', err);
      setError('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={`relative p-6 sm:p-8 rounded-2xl backdrop-blur-sm border ${
        color === 'orange'
          ? 'bg-neon-orange/5 border-neon-orange/20'
          : 'bg-electric-blue/5 border-electric-blue/20'
      }`}
    >
      {/* Header */}
      <div className="text-center mb-6 sm:mb-8">
        <span className="text-3xl sm:text-4xl mb-3 sm:mb-4 block">{icon}</span>
        <h3 className={`font-orbitron text-lg sm:text-xl md:text-2xl font-bold mb-2 ${
          color === 'orange' ? 'text-neon-orange' : 'text-electric-blue'
        }`}>
          {title}
        </h3>
        <p className="font-rajdhani text-muted-foreground text-sm sm:text-base">
          {subtitle}
        </p>
      </div>

      {/* Form */}
      {!isSuccess ? (
        <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
          {/* X Username Input */}
          <div className="relative">
            <motion.div
              animate={{
                boxShadow: isFocused.xUsername
                  ? color === 'orange'
                    ? '0 0 30px hsl(15 100% 55% / 0.3)'
                    : '0 0 30px hsl(195 100% 50% / 0.3)'
                  : 'none',
              }}
              className="absolute inset-0 rounded-lg pointer-events-none"
            />
            <input
              type="text"
              value={xUsername}
              onChange={(e) => {
                setXUsername(e.target.value);
                setError('');
              }}
              onFocus={() => setIsFocused({...isFocused, xUsername: true})}
              onBlur={() => setIsFocused({...isFocused, xUsername: false})}
              placeholder="Enter your X username (@username)..."
              disabled={isLoading}
              className={`w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-background/50 border font-rajdhani transition-all duration-300 ${
                error
                  ? 'border-fire-red focus:border-fire-red'
                  : color === 'orange'
                  ? 'border-neon-orange/30 focus:border-neon-orange'
                  : 'border-electric-blue/30 focus:border-electric-blue'
              } focus:outline-none focus:ring-0 placeholder:text-muted-foreground/50`}
              aria-label="X username"
            />
          </div>

          {/* Telegram Username Input */}
          <div className="relative">
            <motion.div
              animate={{
                boxShadow: isFocused.telegramUsername
                  ? color === 'orange'
                    ? '0 0 30px hsl(15 100% 55% / 0.3)'
                    : '0 0 30px hsl(195 100% 50% / 0.3)'
                  : 'none',
              }}
              className="absolute inset-0 rounded-lg pointer-events-none"
            />
            <input
              type="text"
              value={telegramUsername}
              onChange={(e) => {
                setTelegramUsername(e.target.value);
                setError('');
              }}
              onFocus={() => setIsFocused({...isFocused, telegramUsername: true})}
              onBlur={() => setIsFocused({...isFocused, telegramUsername: false})}
              placeholder="Enter your Telegram username (@username)..."
              disabled={isLoading}
              className={`w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-background/50 border font-rajdhani transition-all duration-300 ${
                error
                  ? 'border-fire-red focus:border-fire-red'
                  : color === 'orange'
                  ? 'border-neon-orange/30 focus:border-neon-orange'
                  : 'border-electric-blue/30 focus:border-electric-blue'
              } focus:outline-none focus:ring-0 placeholder:text-muted-foreground/50`}
              aria-label="Telegram username"
            />
          </div>

          {/* Email Input */}
          <div className="relative">
            <motion.div
              animate={{
                boxShadow: isFocused.email
                  ? color === 'orange'
                    ? '0 0 30px hsl(15 100% 55% / 0.3)'
                    : '0 0 30px hsl(195 100% 50% / 0.3)'
                  : 'none',
              }}
              className="absolute inset-0 rounded-lg pointer-events-none"
            />
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setError('');
              }}
              onFocus={() => setIsFocused({...isFocused, email: true})}
              onBlur={() => setIsFocused({...isFocused, email: false})}
              placeholder="Enter your email..."
              disabled={isLoading}
              className={`w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-background/50 border font-rajdhani transition-all duration-300 ${
                error
                  ? 'border-fire-red focus:border-fire-red'
                  : color === 'orange'
                  ? 'border-neon-orange/30 focus:border-neon-orange'
                  : 'border-electric-blue/30 focus:border-electric-blue'
              } focus:outline-none focus:ring-0 placeholder:text-muted-foreground/50`}
              aria-label="Email address"
            />

            {/* Error animation */}
            <motion.div
              initial={false}
              animate={error ? { x: [0, -10, 10, -10, 10, 0] } : {}}
              transition={{ duration: 0.5 }}
            >
              {error && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute -bottom-6 left-0 text-fire-red text-xs sm:text-sm font-rajdhani"
                >
                  ⚠ {error}
                </motion.p>
              )}
            </motion.div>
          </div>

          <motion.button
            type="submit"
            disabled={isLoading}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`w-full py-3 sm:py-4 rounded-lg font-orbitron text-sm sm:text-base tracking-wider font-bold transition-all duration-300 relative overflow-hidden ${
              color === 'orange'
                ? 'bg-gradient-to-r from-neon-orange to-fire-red text-background'
                : 'bg-gradient-to-r from-electric-blue to-electric-cyan text-background'
            } ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
          >
            {isLoading ? (
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                className="w-5 h-5 border-2 border-background border-t-transparent rounded-full mx-auto"
              />
            ) : (
              'REQUEST ACCESS'
            )}

            {/* Button shimmer effect */}
            <motion.div
              animate={{ x: ['0%', '200%'] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
              style={{ width: '50%' }}
            />
          </motion.button>
        </form>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-6 sm:py-8"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 200, damping: 15 }}
            className={`w-12 h-12 sm:w-16 sm:h-16 rounded-full mx-auto mb-3 sm:mb-4 flex items-center justify-center ${
              color === 'orange' ? 'bg-neon-orange/20' : 'bg-electric-blue/20'
            }`}
          >
            <span className="text-2xl sm:text-3xl">✓</span>
          </motion.div>
          <p className={`font-orbitron text-base sm:text-lg ${
            color === 'orange' ? 'text-neon-orange' : 'text-electric-blue'
          }`}>
            ACCESS REQUESTED
          </p>
          <p className="font-rajdhani text-muted-foreground text-sm sm:text-base mt-2">
            You're on the priority list
          </p>
        </motion.div>
      )}

      {/* Corner accents */}
      <div className={`absolute top-0 left-0 w-6 h-6 sm:w-8 sm:h-8 border-l-2 border-t-2 rounded-tl-2xl ${
        color === 'orange' ? 'border-neon-orange/50' : 'border-electric-blue/50'
      }`} />
      <div className={`absolute bottom-0 right-0 w-6 h-6 sm:w-8 sm:h-8 border-r-2 border-b-2 rounded-br-2xl ${
        color === 'orange' ? 'border-neon-orange/50' : 'border-electric-blue/50'
      }`} />
    </motion.div>
  );
};

const WaitlistSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="waitlist" ref={ref} className="relative py-20 sm:py-32 bg-deep-space overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-55" />
        <div className="absolute inset-0 bg-gradient-to-b from-deep-space/40 via-deep-space/30 to-deep-space/40" />
      </div>

      {/* Grid */}
      <div className="absolute inset-0 grid-bg opacity-20" />

      {/* Radial glows */}
      <div
        className="absolute top-0 left-0 w-1/2 h-1/2"
        style={{ background: 'radial-gradient(circle at 30% 30%, hsl(15 100% 55% / 0.1) 0%, transparent 50%)' }}
      />
      <div
        className="absolute bottom-0 right-0 w-1/2 h-1/2"
        style={{ background: 'radial-gradient(circle at 70% 70%, hsl(195 100% 50% / 0.1) 0%, transparent 50%)' }}
      />

      <div className="container relative z-10 px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 sm:mb-16"
        >
          <p className="font-orbitron text-xs sm:text-sm text-neon-orange uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-3 sm:mb-4">
            ▲ LIMITED ACCESS ▲
          </p>
          <h2 className="font-orbitron text-2xl sm:text-3xl md:text-5xl font-bold text-metallic mb-3 sm:mb-4">
            JOIN THE <span className="text-electric-blue text-glow-blue">WAITLIST</span>
          </h2>
          <p className="text-muted-foreground font-rajdhani text-base sm:text-lg max-w-xs sm:max-w-2xl mx-auto">
            Two pathways to power. Choose your mission.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-2xl sm:max-w-4xl mx-auto">
          <WaitlistForm
            type="beta_app"
            title="BETA APP ACCESS"
            subtitle="Get early access to ALPHA ZENTH trading automation"
            color="orange"
            icon="🔶"
          />
          <WaitlistForm
            type="alpha_labs"
            title="ALPHA ZENTH LABS"
            subtitle="Create your own app with vibe coding support by ALPHA AI"
            color="blue"
            icon="🔷"
          />
        </div>
      </div>
    </section>
  );
};

export default WaitlistSection;
