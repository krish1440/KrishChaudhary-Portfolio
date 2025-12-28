
import React from 'react';
import { motion } from 'framer-motion';
import { EDUCATION } from '../constants.tsx';
import { GraduationCap } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <section className="py-20 md:py-32 bg-black">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight mb-6">ACADEMIC <span className="text-gradient">BACKGROUND</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-violet-500 mx-auto rounded-full" />
        </div>

        <div className="grid gap-4 md:gap-6 max-w-4xl mx-auto">
          {EDUCATION.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass p-6 md:p-8 rounded-3xl flex flex-col sm:flex-row gap-4 md:gap-6 items-start sm:items-center border-white/5 hover:border-cyan-500/40 transition-all duration-500 group"
            >
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 flex-shrink-0">
                <GraduationCap className="w-6 h-6 md:w-8 md:h-8" />
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-bold leading-tight group-hover:text-cyan-400 transition-colors duration-500">{edu.degree}</h3>
                <p className="text-sm md:text-base text-gray-400 font-medium mt-1">{edu.institution}</p>
                {edu.location && <p className="text-xs md:text-sm text-gray-500 mt-1 flex items-center gap-1">📍 {edu.location}</p>}
                <p className="text-[10px] md:text-xs text-cyan-400/60 font-black uppercase tracking-widest mt-2">{edu.period}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
