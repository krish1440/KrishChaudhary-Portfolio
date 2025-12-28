
import React from 'react';
import { motion } from 'framer-motion';
import { BrainCircuit, Database, LineChart, Code2 } from 'lucide-react';

const Features = [
  { icon: <BrainCircuit className="w-5 h-5 md:w-6 md:h-6" />, title: "AI/ML Focus", desc: "Neural networks & agents." },
  { icon: <Database className="w-5 h-5 md:w-6 md:h-6" />, title: "Data Pipelines", desc: "Scalable storage systems." },
  { icon: <LineChart className="w-5 h-5 md:w-6 md:h-6" />, title: "BI Analytics", desc: "Actionable insights." },
  { icon: <Code2 className="w-5 h-5 md:w-6 md:h-6" />, title: "Clean Code", desc: "Production quality repo." },
];

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-black/50 overflow-hidden">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight uppercase tracking-tight">
              A LIFELONG <br />
              <span className="text-gradient">LEARNER.</span>
            </h2>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-6">
              I am a Computer Science student at Parul University, effectively bridging the gap between theoretical AI concepts and real-world results. My expertise spans the entire AI spectrum—from extracting insights via Data Science to training advanced Machine Learning & Deep Learning models.
            </p>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-10">
              Beyond building models, I specialize in MLOps and end-to-end pipelines, ensuring that intelligent systems are not just accurate but also scalable, reliable, and ready for production deployment.
            </p>

            <div className="grid grid-cols-2 gap-4 md:gap-6 text-left">
              {Features.map((f, i) => (
                <div key={i} className="flex flex-col gap-2 p-4 glass rounded-2xl border-white/5">
                  <div className="text-cyan-400">{f.icon}</div>
                  <h4 className="font-bold text-sm md:text-base text-white">{f.title}</h4>
                  <p className="text-[10px] md:text-xs text-gray-500 leading-snug">{f.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative hidden sm:flex justify-center items-center"
          >
            {/* Central highly stylized sphere container */}
            <motion.div
              className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {/* Core Glow */}
              <div className="absolute inset-0 bg-cyan-500/5 rounded-full blur-3xl animate-pulse" />

              {/* Main Content Sphere */}
              <div className="relative z-10 aspect-square glass rounded-full flex items-center justify-center p-8 md:p-12 border border-white/10 shadow-[0_0_50px_rgba(6,182,212,0.15)] group hover:border-cyan-500/30 transition-colors duration-500">
                <div className="text-center">
                  <div className="text-center relative z-10">
                    <motion.div
                      className="text-3xl md:text-5xl font-black mb-2 tracking-tighter italic relative inline-block py-2 px-1 cursor-default"
                      initial={{ backgroundPosition: "0% 50%" }}
                      animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                      transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                      whileHover={{ scale: 1.1, rotate: -2 }}
                      style={{
                        backgroundImage: "linear-gradient(to right, #06b6d4, #8b5cf6, #06b6d4)",
                        backgroundSize: "200% auto",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      "Evolving"
                    </motion.div>

                    <motion.div
                      className="text-[10px] md:text-sm text-gray-500 tracking-[0.3em] uppercase flex justify-center gap-[0.2em]"
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.3 } }
                      }}
                    >
                      {Array.from("Growth Mindset").map((char, i) => (
                        <motion.span
                          key={i}
                          variants={{
                            hidden: { opacity: 0, y: 10 },
                            visible: { opacity: 1, y: 0 }
                          }}
                          className="hover:text-cyan-400 transition-colors duration-300 cursor-default"
                        >
                          {char === " " ? "\u00A0" : char}
                        </motion.span>
                      ))}
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* Dense Orbital Field */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={`orbit-${i}`}
                  className="absolute inset-0 rounded-full border border-cyan-500/5 pointer-events-none"
                  style={{
                    rotateX: i * 30 + 15,
                    rotateY: i * 60 + 15,
                  }}
                  animate={{ rotateZ: [0, 360] }}
                  transition={{
                    duration: 10 + i * 2,
                    repeat: Infinity,
                    ease: "linear",
                    repeatType: "loop"
                  }}
                >
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-cyan-400/80 shadow-[0_0_8px_rgba(34,211,238,0.6)]" />
                </motion.div>
              ))}

              {/* Floating Particles Cloud */}
              {[...Array(12)].map((_, i) => {
                const radius = 160 + Math.random() * 40;
                const angle = (i / 12) * 2 * Math.PI;
                return (
                  <motion.div
                    key={`particle-${i}`}
                    className="absolute w-1 h-1 bg-violet-400/60 rounded-full pointer-events-none"
                    initial={{ x: 0, y: 0, opacity: 0 }}
                    animate={{
                      x: [
                        Math.cos(angle) * radius,
                        Math.cos(angle + 0.5) * (radius + 20),
                        Math.cos(angle) * radius
                      ],
                      y: [
                        Math.sin(angle) * radius,
                        Math.sin(angle + 0.5) * (radius + 20),
                        Math.sin(angle) * radius
                      ],
                      opacity: [0.2, 0.8, 0.2],
                      scale: [1, 1.5, 1]
                    }}
                    transition={{
                      duration: 5 + Math.random() * 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: Math.random() * 2
                    }}
                    style={{ top: '50%', left: '50%', position: 'absolute' }}
                  />
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
