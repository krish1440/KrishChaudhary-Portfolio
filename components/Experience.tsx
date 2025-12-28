
import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCE } from '../constants.tsx';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 md:py-32 bg-black/60">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight mb-6">PROFESSIONAL <span className="text-gradient">JOURNEY</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-violet-500 mx-auto rounded-full" />
        </div>

        <div className="relative border-l border-white/10 ml-2 md:ml-0 max-w-4xl mx-auto">
          {EXPERIENCE.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="mb-12 md:mb-16 last:mb-0 relative pl-8 md:pl-12"
            >
              <div className="absolute left-0 top-0 -translate-x-1/2 w-4 h-4 md:w-6 md:h-6 rounded-full glass border-cyan-500/50 flex items-center justify-center">
                <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-cyan-500" />
              </div>

              <div className="glass p-6 md:p-8 rounded-[24px] md:rounded-[30px] border-white/5 hover:border-cyan-500/40 transition-all duration-500 group">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 md:mb-6 gap-2">
                  <div>
                    <h3 className="text-xl md:text-2xl font-black text-white group-hover:text-cyan-400 transition-colors duration-500">{exp.role}</h3>
                    <p className="text-cyan-400 font-bold text-sm md:text-base">{exp.company}</p>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-white/5 text-[10px] md:text-xs text-gray-400 border border-white/5 h-fit whitespace-nowrap self-start">
                    {exp.period}
                  </span>
                </div>

                <ul className="space-y-3 md:space-y-4">
                  {exp.points.map((point, j) => (
                    <li key={j} className="text-gray-400 text-xs md:text-sm leading-relaxed flex gap-3">
                      <span className="text-cyan-500 mt-1.5 font-bold">•</span>
                      {point}
                    </li>
                  ))}
                </ul>

                {exp.certificate && (
                  <div className="mt-6 pt-6 border-t border-white/5">
                    <a
                      href={exp.certificate}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-bold text-cyan-400 hover:text-cyan-300 transition-colors uppercase tracking-wider group"
                    >
                      View Certificate
                      <svg className="w-3 h-3 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
