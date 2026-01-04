
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Download, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);
  const y2 = useTransform(scrollY, [0, 500], [0, -80]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden py-20 md:py-0">
      {/* Background blobs */}
      <div className="absolute top-1/4 -left-20 w-64 h-64 md:w-96 md:h-96 bg-cyan-500/10 rounded-full blur-[100px] md:blur-[150px]" />
      <div className="absolute bottom-1/4 -right-20 w-64 h-64 md:w-96 md:h-96 bg-violet-500/10 rounded-full blur-[100px] md:blur-[150px]" />

      <div className="container mx-auto px-6 md:px-16 lg:px-24 grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-24 items-center relative z-10 w-full">

        {/* Profile Image - Order 1 on Mobile, Order 2 on Desktop (if preferred, or keep current) */}
        {/* Keeping current: Image is Order 1 on mobile/desktop based on code, usually text is first. 
            User code had Order 1 for Image. Let's inspect. 
            Existing: className="relative order-1 md:order-1..."
            Let's make Text Order 1 on Desktop, Image Order 2? Or Stack Image on Top?
            Standard portfolio: Image Top on Mobile, Right on Desktop.
            Let's keep Image Order 1 (Top) as per current code, but fix sizing.
        */}
        <motion.div
          className="relative order-1 flex justify-center items-center"
          style={{ y: y1, opacity }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="relative w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] md:w-[380px] md:h-[380px] lg:w-[440px] lg:h-[440px] group">

            {/* Core Glow */}
            <div className="absolute inset-0 rounded-full bg-cyan-500/20 blur-[80px] animate-pulse" />

            {/* Outer Rotating Ring (Dashed) */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-4 md:-inset-8 rounded-full border border-dashed border-cyan-500/20"
            />

            {/* Inner Rotating Ring (Reverse) */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-1 md:-inset-2 rounded-full border border-violet-500/20 border-t-transparent border-l-transparent"
            />

            {/* Radar Scan Effect */}
            <div className="absolute inset-0 rounded-full overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-cyan-500/10 to-transparent w-full h-full animate-[spin_4s_linear_infinite]" />
            </div>

            {/* Image Container with Floating Effect */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10 w-full h-full rounded-full p-2"
            >
              <div className="w-full h-full rounded-full overflow-hidden border-2 border-white/10 relative z-20">
                <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/40 z-10" />
                <img
                  src="https://res.cloudinary.com/dyhe9rbjz/image/upload/v1752730193/xnpzgmszpklhab69bsaj.png"
                  alt="Krish Chaudhary"
                  className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-700"
                  loading="eager"
                />
              </div>
            </motion.div>

            {/* Floating Badge */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-6 -right-2 md-bottom-0 md:-right-4 bg-black/80 backdrop-blur-md p-4 rounded-2xl border border-white/10 flex items-center gap-3 z-30 shadow-2xl"
            >
              <div className="p-2 bg-cyan-500/20 rounded-lg">
                <Sparkles className="w-5 h-5 text-cyan-400 animate-pulse" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold leading-none text-white">8+</span>
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Projects</span>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Info Text */}
        <motion.div
          style={{ y: y2, opacity }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center md:text-left order-2"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-cyan-500/10 text-cyan-400 text-[9px] md:text-xs font-black mb-4 md:mb-6 border border-cyan-500/30"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
            </span>
            AVAILABLE FOR NEW OPPORTUNITIES
          </motion.div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tighter leading-[0.9] mb-4 md:mb-6">
            KRISH <br />
            <span className="text-gradient">CHAUDHARY</span>
          </h1>

          <p className="text-sm md:text-lg lg:text-xl text-gray-400 font-light mb-8 md:mb-10 max-w-lg mx-auto md:mx-0 leading-relaxed px-4 md:px-0">
            Crafting the future with <span className="text-white font-medium">Data Science</span>, <span className="text-white font-medium">Machine Learning</span> & <span className="text-white font-medium">Artificial Intelligence</span>.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap justify-center md:justify-start gap-3 md:gap-4 px-4 md:px-0">
            <a
              href="#projects"
              className="flex items-center justify-center gap-2 px-6 py-3.5 md:px-8 md:py-4 bg-white text-black rounded-full font-bold hover:scale-105 transition-transform group text-sm md:text-base"
            >
              View Projects <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="https://drive.google.com/file/d/15SkGEHKlvuoJSRjqk211Bw_E7RWnvvp2/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-3.5 md:px-8 md:py-4 glass text-white rounded-full font-bold hover:bg-white/10 transition-colors border border-white/10 text-sm md:text-base"
            >
              Download CV <Download className="w-4 h-4 md:w-5 md:h-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
