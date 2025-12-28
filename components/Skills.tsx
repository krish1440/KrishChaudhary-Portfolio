
import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS } from '../constants.tsx';

const SkillCard = ({ title, skills, index }: { title: string, skills: string[], index: number }) => {
  // Container variants for staggered children reveal
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: index * 0.1
      }
    }
  } as const;

  // Focus reveal: Starts large (1.3x) and shrinks (1.0x) while becoming opaque
  const item = {
    hidden: { opacity: 0, y: 15, scale: 1.3 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 260,
        damping: 20
      }
    }
  } as const;

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-50px" }}
      className="glass p-5 md:p-8 rounded-[30px] md:rounded-[40px] group border-white/5 hover:border-cyan-500/30 transition-all duration-500 bg-gradient-to-br from-white/[0.02] to-transparent"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="w-1.5 h-6 bg-gradient-to-b from-cyan-500 to-violet-500 rounded-full" />
        <h3 className="text-[11px] md:text-xs font-black uppercase tracking-[0.3em] text-cyan-400/80">{title}</h3>
      </div>

      <div className="flex flex-wrap gap-2.5">
        {skills.map((s) => (
          <motion.span
            key={s}
            variants={item}
            whileHover={{
              scale: 1.1,
              backgroundColor: 'rgba(6, 182, 212, 0.15)',
              borderColor: 'rgba(6, 182, 212, 0.3)',
              color: '#ffffff'
            }}
            className="px-3.5 py-1.5 bg-white/[0.03] border border-white/10 rounded-xl text-[11px] md:text-sm text-gray-400 hover:text-white transition-all cursor-default"
          >
            {s}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};

const Skills: React.FC = () => {
  // Row 1: High-level Concepts (Moves Left)
  const row1 = [
    "Machine Learning", "Data Science", "Artificial Intelligence", "Deep Learning",
    "Generative AI", "NLP", "Computer Vision", "Reinforcement Learning", "Neural Networks"
  ];

  // Row 2: Tools & Technologies (Moves Right)
  const row2 = [
    "Python", "TensorFlow", "PyTorch", "Kubernetes", "Docker", "AWS", "MLOps",
    "SQL", "Apache Spark", "Git", "Scikit-Learn", "Pandas"
  ];

  // Massive arrays to ensure seamless looping on ultra-wide screens
  const massiveRow1 = Array(20).fill(row1).flat();
  const massiveRow2 = Array(20).fill(row2).flat();

  return (
    <section id="skills" className="py-20 md:py-32 bg-[#050505] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[50vh] bg-cyan-500/[0.02] rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-8 md:px-16 lg:px-24 relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight mb-6"
          >
            TECHNICAL <span className="text-gradient">TOOLKIT</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-cyan-500 to-violet-500 mx-auto rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          <SkillCard title="Programming Languages" skills={SKILLS.programming_languages} index={0} />
          <SkillCard title="Data Analysis & BI" skills={SKILLS.data_analysis_bi} index={1} />
          <SkillCard title="Databases & DBMS" skills={SKILLS.databases} index={2} />
          <SkillCard title="Data Science & ML" skills={SKILLS.data_science_ml} index={3} />
          <SkillCard title="MLOps" skills={SKILLS.mlops} index={4} />
          <SkillCard title="Cloud Platforms" skills={SKILLS.cloud_platforms} index={5} />
          <SkillCard title="Dev Environments" skills={SKILLS.development_environments} index={6} />
          <SkillCard title="Other Skills" skills={SKILLS.other_skills} index={7} />
          <SkillCard title="Soft Skills" skills={SKILLS.soft_skills} index={8} />
        </div>

        {/* Dual Marquee Section */}
        <div className="mt-20 md:mt-32 flex flex-col gap-10 overflow-hidden py-10 relative group/marquee">
          <div className="absolute inset-y-0 left-0 w-20 md:w-60 bg-gradient-to-r from-[#050505] via-[#050505]/90 to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-20 md:w-60 bg-gradient-to-l from-[#050505] via-[#050505]/90 to-transparent z-10 pointer-events-none" />

          {/* Row 1: Concepts (Moves Left) */}
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
            className="flex whitespace-nowrap items-center w-max"
          >
            {massiveRow1.map((tool, i) => (
              <motion.span
                key={`row1-${i}`}
                initial={{ opacity: 0.5 }}
                whileHover={{
                  opacity: 1,
                  scale: 1.1,
                  color: '#06b6d4',
                  textShadow: '0 0 25px rgba(6, 182, 212, 0.4)'
                }}
                className="text-4xl md:text-7xl font-black text-white/20 transition-all duration-500 cursor-default select-none uppercase italic tracking-tighter mr-16 md:mr-24"
              >
                {tool}
              </motion.span>
            ))}
          </motion.div>

          {/* Row 2: Tools (Moves Right) */}
          <motion.div
            animate={{ x: ["-50%", "0%"] }}
            transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
            className="flex whitespace-nowrap items-center w-max"
          >
            {massiveRow2.map((tool, i) => (
              <motion.span
                key={`row2-${i}`}
                initial={{ opacity: 0.5 }}
                whileHover={{
                  opacity: 1,
                  scale: 1.1,
                  color: '#8b5cf6',
                  textShadow: '0 0 25px rgba(139, 92, 246, 0.4)'
                }}
                className="text-4xl md:text-7xl font-black text-white/20 transition-all duration-500 cursor-default select-none uppercase italic tracking-tighter mr-16 md:mr-24"
              >
                {tool}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;