
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CERTIFICATIONS } from '../constants.tsx';
import { ShieldCheck, ExternalLink } from 'lucide-react';

const Certifications: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  const loopedCerts = [...CERTIFICATIONS, ...CERTIFICATIONS, ...CERTIFICATIONS, ...CERTIFICATIONS];

  return (
    <section className="py-24 md:py-32 overflow-hidden bg-black relative">
      <div className="container mx-auto px-8 md:px-16 lg:px-24 mb-20 text-center relative z-10">
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight mb-6">
          BADGES OF <span className="text-gradient">HONOR</span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-violet-500 mx-auto rounded-full" />
      </div>

      <div
        className="relative cursor-grab active:cursor-grabbing select-none"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Mobile: Vertical Grid with Scroll Animation */}
        <div className="md:hidden flex flex-col gap-6 px-4">
          {CERTIFICATIONS.map((cert, i) => (
            <motion.div
              key={`mobile-${i}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass p-8 rounded-[2rem] border-white/5 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-violet-500/10 blur-[50px] -z-10" />
              <div className="flex justify-between items-start mb-4">
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 border border-cyan-500/20">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                {cert.link ? (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full glass border-white/5 hover:bg-white/10 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4 text-cyan-400" />
                  </a>
                ) : (
                  <div className="p-3 rounded-full glass border-white/5">
                    <ExternalLink className="w-4 h-4 text-cyan-400" />
                  </div>
                )}
              </div>
              <h3 className="text-lg font-black mb-2 text-white uppercase leading-tight">{cert.title}</h3>
              <p className="text-[10px] text-cyan-400/60 uppercase tracking-widest font-black">{cert.issuer}</p>
            </motion.div>
          ))}
        </div>

        {/* Desktop: Horizontal Infinite Scroll */}
        <motion.div
          className="hidden md:flex gap-8 md:gap-12 px-8 w-max"
          drag="x"
          dragConstraints={{ left: -4000, right: 0 }}
          animate={isHovered ? {} : { x: [0, -1500] }}
          transition={{
            x: {
              duration: 35,
              repeat: Infinity,
              ease: "linear",
            }
          }}
        >
          {loopedCerts.map((cert, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10, scale: 1.02 }}
              className="flex-shrink-0 w-[280px] md:w-[420px] glass p-10 md:p-12 rounded-[2.5rem] md:rounded-[3rem] border-white/5 flex flex-col gap-8 md:gap-10 group hover:border-cyan-500/40 transition-all duration-500 bg-gradient-to-br from-white/[0.03] to-transparent relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-violet-500/5 blur-[60px] -z-10 group-hover:bg-cyan-500/10 transition-colors" />

              <div className="flex justify-between items-start">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-[1.5rem] bg-cyan-500/10 flex items-center justify-center text-cyan-400 border border-cyan-500/20 group-hover:scale-110 transition-transform duration-500">
                  <ShieldCheck className="w-7 h-7 md:w-8 md:h-8" />
                </div>
                {cert.link ? (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full glass border-white/5 group-hover:border-cyan-400/30 cursor-pointer z-20 hover:bg-white/10 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4 text-white/40 group-hover:text-cyan-400 transition-colors" />
                  </a>
                ) : (
                  <div className="p-3 rounded-full glass border-white/5 group-hover:border-cyan-400/30">
                    <ExternalLink className="w-4 h-4 text-white/40 group-hover:text-cyan-400 transition-colors" />
                  </div>
                )}
              </div>

              <div>
                <h3 className="text-xl md:text-3xl font-black mb-3 leading-tight tracking-tight text-white group-hover:text-gradient transition-all duration-500 uppercase">{cert.title}</h3>
                <p className="text-[10px] md:text-xs text-cyan-400/60 uppercase tracking-[0.4em] font-black">{cert.issuer}</p>
              </div>

              <div className="mt-auto flex items-center gap-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map(j => (
                    <div key={j} className="w-6 h-6 md:w-8 md:h-8 rounded-full border-2 border-black bg-gray-800" />
                  ))}
                </div>
                <span className="text-[9px] md:text-[10px] font-bold text-gray-500 uppercase tracking-widest">Verified Badge</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="absolute inset-y-0 left-0 w-32 md:w-80 bg-gradient-to-r from-black via-black/80 to-transparent z-20 pointer-events-none hidden md:block" />
      <div className="absolute inset-y-0 right-0 w-32 md:w-80 bg-gradient-to-l from-black via-black/80 to-transparent z-20 pointer-events-none hidden md:block" />
    </section>
  );
};

export default Certifications;
