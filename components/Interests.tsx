
import React from 'react';
import { motion } from 'framer-motion';
import { INTERESTS } from '../constants.tsx';

const Interests: React.FC = () => {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/5 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-8 md:px-16 lg:px-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24"
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight mb-6">
            AREAS OF <span className="text-gradient">INTEREST</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-violet-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-8 max-w-7xl mx-auto">
          {INTERESTS.map((interest, i) => (
            <motion.div
              key={interest.name}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                delay: i * 0.05,
                duration: 0.5,
                ease: "easeOut",
                y: {
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.3
                }
              }}
              whileHover={{
                scale: 1.05,
                rotate: [0, -1, 1, 0],
                transition: { duration: 0.3 }
              }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-violet-500/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative glass p-6 md:p-8 rounded-3xl flex flex-col items-center justify-center border-white/5 group-hover:border-cyan-500/40 transition-all duration-500 h-full overflow-hidden text-center min-h-[220px]">
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <span className="text-4xl md:text-5xl mb-4 md:mb-4 block transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6 filter group-hover:drop-shadow-[0_0_10px_rgba(6,182,212,0.5)]">
                  {interest.emoji}
                </span>

                <span className="text-sm md:text-base font-black text-white mb-2 uppercase tracking-tight leading-tight group-hover:text-cyan-400 transition-colors duration-300">
                  {interest.name}
                </span>

                <p className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors leading-relaxed">
                  {interest.description}
                </p>

                <div className="absolute bottom-2 right-4 text-white/10 text-5xl font-black pointer-events-none select-none z-0">
                  {i + 1}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Interests;
