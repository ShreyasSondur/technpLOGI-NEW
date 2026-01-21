import { motion } from 'motion/react';
import { useState } from 'react';

export function TTTTInteractive() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const sections = [
    { color: '#ff8c00', name: 'Orange', letter: 'T', code: 'ES' },
    { color: '#1e90ff', name: 'Blue', letter: 'T', code: 'IM' },
    { color: '#c4c4c4', name: 'Grey', letter: 'O', code: 'NI' },
    { color: '#f5e6d3', name: 'Cream', letter: 'A', code: 'LS' }
  ];

  return (
    <div className="w-full h-full flex flex-col lg:flex-row items-stretch">
      {sections.map((section, index) => {
        const isHovered = hoveredIndex === index;
        const isOtherHovered = hoveredIndex !== null && hoveredIndex !== index;

        return (
          <motion.div
            key={index}
            className="relative w-full lg:w-auto h-auto lg:h-full overflow-hidden cursor-pointer"
            initial={{ flex: 1 }}
            animate={{
              flex: isHovered ? 2 : isOtherHovered ? 0.5 : 1
            }}
            transition={{
              duration: 0.5,
              ease: [0.4, 0, 0.2, 1]
            }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            style={{ backgroundColor: section.color }}
          >
            {/* Bold Letter */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                className="w-full h-full flex items-center justify-center"
                animate={{
                  scale: isHovered ? 1.1 : 1
                }}
                transition={{
                  duration: 0.5,
                  ease: [0.4, 0, 0.2, 1]
                }}
              >
                <span
                  className="font-black text-8xl sm:text-[10rem] lg:text-[12rem] xl:text-[14rem] leading-none select-none"
                  style={{
                    color: section.color === '#f5e6d3' ? '#3D2800' : '#000000',
                    fontFamily: 'system-ui, -apple-system, sans-serif'
                  }}
                >
                  {section.letter}
                </span>
              </motion.div>
            </div>

            {/* Code Badge */}
            <div className="absolute bottom-4 left-4 lg:bottom-8 lg:left-8">
              <motion.div
                className="bg-white rounded-2xl px-4 py-2 lg:px-6 lg:py-3 shadow-lg"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <span className="text-lg lg:text-2xl font-bold text-gray-900">
                  {section.code}
                </span>
              </motion.div>
            </div>

            {/* Overlay on hover */}
            <motion.div
              className="absolute inset-0 bg-black/10"
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        );
      })}
    </div>
  );
}
