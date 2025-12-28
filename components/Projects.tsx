
import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { PROJECTS } from '../constants.tsx';
import { Github, ExternalLink, ArrowRight, ArrowLeft } from 'lucide-react';

const Projects: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  const handleWheel = (e: React.WheelEvent) => {
    if (isMobile || !scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const isAtEnd = container.scrollLeft >= container.scrollWidth - container.clientWidth - 1;
    const isAtStart = container.scrollLeft <= 0;
    if ((e.deltaY > 0 && !isAtEnd) || (e.deltaY < 0 && !isAtStart)) {
      container.scrollLeft += e.deltaY;
    }
  };

  const scrollBy = (amount: number) => {
    scrollContainerRef.current?.scrollBy({ left: amount, behavior: 'smooth' });
  };

  return (
    <section id="projects" className="py-20 md:py-28 bg-black overflow-hidden">
      <div className="container mx-auto px-8 md:px-16 lg:px-24 mb-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight leading-none mb-6">
            FEATURED <span className="text-gradient">WORKS</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-violet-500 rounded-full mb-8" />

          {!isMobile && (
            <div className="flex gap-4">
              <button
                onClick={() => scrollBy(-400)}
                disabled={!canScrollLeft}
                className={`p-3 rounded-full glass border-white/10 transition-all ${!canScrollLeft ? 'opacity-20' : 'hover:bg-white/10 hover:border-cyan-500/50 text-cyan-400'}`}
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => scrollBy(400)}
                disabled={!canScrollRight}
                className={`p-3 rounded-full glass border-white/10 transition-all ${!canScrollRight ? 'opacity-20' : 'hover:bg-white/10 hover:border-cyan-500/50 text-cyan-400'}`}
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          )}
        </motion.div>
      </div>

      <div
        ref={scrollContainerRef}
        onWheel={handleWheel}
        onScroll={handleScroll}
        className={`
          ${isMobile ? 'flex flex-col items-center px-8 space-y-8' : 'flex flex-row overflow-x-auto no-scrollbar snap-x snap-mandatory px-[10vw] gap-10 py-6'}
        `}
      >
        {PROJECTS.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className={`
              flex-shrink-0 snap-center
              ${isMobile ? 'w-full max-w-md' : 'w-[80vw] md:w-[480px] lg:w-[560px]'} 
              glass p-8 md:p-10 rounded-[35px] md:rounded-[45px] flex flex-col group border-white/5 hover:border-cyan-500/40 transition-all duration-500 min-h-[440px] md:min-h-[460px]
            `}
          >
            <div className="flex justify-between items-start mb-6">
              <div className="p-4 rounded-2xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                <span className="text-2xl md:text-3xl font-black">0{i + 1}</span>
              </div>
              <div className="flex gap-3">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full glass hover:bg-white/10 transition-colors border border-white/10 group/btn"
                    title="View Source Code"
                  >
                    <Github className="w-5 h-5 group-hover/btn:scale-110 transition-transform" />
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full glass hover:bg-white/10 transition-colors border border-white/10 group/btn"
                    title="View Live Demo"
                  >
                    <ExternalLink className="w-5 h-5 group-hover/btn:scale-110 transition-transform" />
                  </a>
                )}
              </div>
            </div>

            <h3 className="text-2xl md:text-4xl font-black mb-4 group-hover:text-cyan-400 transition-colors leading-tight uppercase tracking-tight">{project.title}</h3>
            <p className="text-sm md:text-base text-gray-400 mb-6 leading-relaxed line-clamp-2 md:line-clamp-3 font-light">{project.description}</p>

            <div className="mb-6">
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-cyan-500/60 mb-4">Core Tech</h4>
              <ul className="grid grid-cols-2 gap-2">
                {project.features.slice(0, 4).map(f => (
                  <li key={f} className="text-xs md:text-sm text-gray-300 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 shadow-[0_0_8px_rgba(6,182,212,0.5)]" /> {f}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-auto pt-6 border-t border-white/5 flex flex-wrap gap-2">
              {project.tech.map(t => (
                <span key={t} className="text-[9px] md:text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg bg-white/5 text-gray-500 group-hover:text-cyan-400 group-hover:bg-cyan-500/5 transition-colors">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
        {!isMobile && <div className="flex-shrink-0 w-[15vw]" />}
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
    </section>
  );
};

export default Projects;
