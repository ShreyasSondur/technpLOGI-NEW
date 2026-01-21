import { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

export const GooeyHeroBackground = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rafRef = useRef<number>();

  // Smoother spring config for better performance
  const springConfig = { damping: 25, stiffness: 150, mass: 0.8 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Throttle mouse updates using requestAnimationFrame
    const handleMouseMove = (e: MouseEvent) => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      
      rafRef.current = requestAnimationFrame(() => {
        mouseX.set(e.clientX);
        mouseY.set(e.clientY);
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [mouseX, mouseY]);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden bg-gradient-to-b from-[#FFD520] via-[#FFDFE0] to-[#E4FFD1]">
      {/* Optimized Gooey Container - Reduced filter intensity */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{ filter: 'url(#gooey-hero)', willChange: 'transform' }}
      >
        {/* Blob 1 - Yellow - Optimized size and blur */}
        <motion.div
          className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] bg-[#FFD520] rounded-full opacity-30 mix-blend-multiply blur-[80px]"
          animate={{
            x: [0, 80, -40, 0],
            y: [0, -80, 40, 0],
            scale: [1, 1.15, 0.95, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
          style={{ willChange: 'transform' }}
        />

        {/* Blob 2 - Light Green - Optimized */}
        <motion.div
          className="absolute top-[5%] right-[-10%] w-[55vw] h-[55vw] bg-[#E4FFD1] rounded-full opacity-30 mix-blend-multiply blur-[80px]"
          animate={{
            x: [0, -80, 40, 0],
            y: [0, 80, -40, 0],
            scale: [1, 1.2, 0.85, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
          style={{ willChange: 'transform' }}
        />

        {/* Blob 3 - Pinkish - Optimized */}
        <motion.div
          className="absolute bottom-[-15%] left-[5%] w-[65vw] h-[65vw] bg-[#FFDFE0] rounded-full opacity-30 mix-blend-multiply blur-[80px]"
          animate={{
            x: [0, 40, -80, 0],
            y: [0, -40, 80, 0],
            scale: [1, 1.1, 0.92, 1],
          }}
          transition={{
            duration: 28,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
          style={{ willChange: 'transform' }}
        />

        {/* Mouse Follower Blob - Optimized with GPU acceleration */}
        <motion.div
          className="absolute w-[35vw] h-[35vw] bg-[#FFD520] rounded-full opacity-25 mix-blend-overlay blur-[60px] pointer-events-none"
          style={{
            x: springX,
            y: springY,
            translateX: '-50%',
            translateY: '-50%',
            willChange: 'transform',
            transform: 'translate3d(0, 0, 0)' // GPU acceleration
          }}
        />
      </div>

      {/* Optimized SVG Filter - Reduced intensity for better performance */}
      <svg className="hidden">
        <defs>
          <filter id="gooey-hero">
            <feGaussianBlur in="SourceGraphic" stdDeviation="100" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 15 -6"
              result="goo"
            />
            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
          </filter>
        </defs>
      </svg>
    </div>
  );
};