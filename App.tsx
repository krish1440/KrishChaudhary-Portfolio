
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import Preloader from './components/Preloader.tsx';
import About from './components/About.tsx';
import Interests from './components/Interests.tsx';
import Skills from './components/Skills.tsx';
import Projects from './components/Projects.tsx';
import Experience from './components/Experience.tsx';
import Certifications from './components/Certifications.tsx';
import Education from './components/Education.tsx';
import Contact from './components/Contact.tsx';
import CustomCursor from './components/CustomCursor.tsx';
import SmoothScroll from './components/SmoothScroll.tsx';
import ScrollProgress from './components/ScrollProgress.tsx';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // Scroll to top on load
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="relative bg-[#050505] text-white selection:bg-cyan-500 selection:text-white">
      <SmoothScroll>
        <ScrollProgress />
        <CustomCursor />
        <AnimatePresence mode="wait">
          {isLoading ? (
            <Preloader key="preloader" onComplete={() => setIsLoading(false)} />
          ) : (
            <motion.div
              key="content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <Navbar />
              <Hero />
              <About />
              <Interests />
              <Skills />
              <Projects />
              <Experience />
              <Certifications />
              <Education />
              <Contact />
            </motion.div>
          )}
        </AnimatePresence>
      </SmoothScroll>
    </main>
  );
};

export default App;
