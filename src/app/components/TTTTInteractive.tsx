import { motion } from 'motion/react';
import { Globe, MessageCircle, Phone, Search, Video, Sparkles } from 'lucide-react';

export function TTTTInteractive() {
  const cards = [
    {
      title: "FAST WEBSITES",
      icon: Globe,
      color: "bg-[#4299E1]", // Blue
      iconColor: "text-blue-300",
      delay: 0.1
    },
    {
      title: "WHATSAPP INTEGRATION",
      icon: MessageCircle,
      color: "bg-[#22C55E]", // Green
      iconColor: "text-green-200",
      delay: 0.2
    },
    {
      title: "CALL BUTTONS",
      icon: Phone,
      color: "bg-[#EC4899]", // Pink
      iconColor: "text-pink-300",
      delay: 0.3
    },
    {
      title: "SEO OPTIMIZED",
      icon: Search,
      color: "bg-[#FACC15]", // Yellow
      iconColor: "text-yellow-700",
      delay: 0.4
    },
    {
      title: "MARKETING VIDEOS",
      icon: Video,
      color: "bg-[#FB923C]", // Orange
      iconColor: "text-orange-200",
      delay: 0.5
    },
    {
      title: "PREMIUM DESIGN",
      icon: Sparkles,
      color: "bg-[#C084FC]", // Purple
      iconColor: "text-purple-200",
      delay: 0.6
    }
  ];

  return (
    <div className="w-full h-full p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 h-full">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            className={`${card.color} rounded-3xl p-6 relative overflow-hidden cursor-pointer flex flex-col justify-between h-[300px] lg:h-auto`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: card.delay }}
            whileHover={{ scale: 0.98 }}
          >
            {/* Background Icon (Large & Faded) */}
            <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
              <div className="bg-white/30 p-8 rounded-3xl backdrop-blur-sm">
                <card.icon size={80} className="text-white" />
              </div>
            </div>

            {/* Floating Bubble Animation (Optional cosmetic) */}
            <motion.div
              className="absolute top-10 right-10 w-4 h-4 rounded-full bg-white/30"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Content */}
            <div className="z-10">
              <h3 className="text-3xl font-black text-white italic tracking-wider leading-tight w-3/4">
                {card.title.split(' ').map((word, i) => (
                  <span key={i} className="block">{word}</span>
                ))}
              </h3>
            </div>

            {/* Small Icon Bottom Right */}
            <div className="absolute bottom-6 right-6 z-10">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-md">
                <card.icon className="text-white" size={24} />
              </div>
            </div>

          </motion.div>
        ))}
      </div>
    </div>
  );
}
