import { motion, useScroll, useTransform } from 'framer-motion';

const ParallaxBackground = () => {
  const { scrollY } = useScroll();

  // Create parallax effect - background moves slower than scroll
  const y = useTransform(scrollY, [0, 3000], [0, -600]);
  const opacity = useTransform(scrollY, [0, 1000, 3000], [0.5, 0.4, 0.3]);

  return (
    <motion.div
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ y }}
    >
      <motion.img
        src="/assets/hero-bg.jpeg"
        alt=""
        className="w-full h-[150vh] object-cover"
        style={{ opacity }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-deep-space/30 via-transparent to-deep-space/50" />
    </motion.div>
  );
};

export default ParallaxBackground;
