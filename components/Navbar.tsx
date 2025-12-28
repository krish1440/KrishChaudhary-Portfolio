
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className="glass mx-4 md:mx-auto mt-4 md:mt-6 max-w-7xl px-5 md:px-8 py-3 md:py-4 rounded-full flex justify-between items-center border border-white/10 relative z-50">
        <div className="text-lg md:text-xl font-extrabold tracking-tighter uppercase relative z-50">
          Krish <span className="text-cyan-400">Chaudhary</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex gap-8 text-sm font-bold text-gray-400">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="hover:text-white transition-colors">{link.name}</a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="hidden sm:block px-4 md:px-6 py-2 bg-white text-black rounded-full text-[10px] md:text-xs font-black hover:bg-cyan-400 transition-all uppercase tracking-widest"
          >
            Contact
          </a>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden w-10 h-10 rounded-full glass flex items-center justify-center text-white active:scale-95 transition-transform"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="relative w-5 h-5 flex items-center justify-center">
              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-5 h-5 text-cyan-400" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ opacity: 0, rotate: 90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: -90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-5 h-5 text-white" />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-3xl z-40 flex flex-col items-center justify-center overflow-hidden"
          >
            {/* Animated Background Elements */}
            <motion.div
              animate={{ rotate: 360, scale: [1, 1.2, 1] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute top-[-20%] right-[-20%] w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none"
            />
            <motion.div
              animate={{ rotate: -360, scale: [1, 1.3, 1] }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-violet-500/10 rounded-full blur-[100px] pointer-events-none"
            />

            <div className="flex flex-col items-center gap-8 relative z-10 w-full px-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -50, filter: "blur(10px)" }}
                  animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, x: 50, filter: "blur(10px)" }}
                  transition={{
                    delay: 0.1 + i * 0.1,
                    type: "spring",
                    stiffness: 100,
                    damping: 15
                  }}
                  className="w-full text-center"
                >
                  <a
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white to-white/50 hover:to-cyan-400 transition-all duration-300 uppercase tracking-tighter py-4 hover:scale-105 active:scale-95"
                  >
                    {link.name}
                  </a>
                  <div className="w-0 group-hover:w-full h-[2px] bg-cyan-500 mx-auto transition-all duration-300" />
                </motion.div>
              ))}
            </div>

            {/* Quick Social Links at Bottom */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="absolute bottom-12 flex gap-6"
            >
              {/* Optional: Add mini social icons here if desired, or keep clean */}
              <div className="w-12 h-1 bg-white/10 rounded-full" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </nav>
  );
};

export default Navbar;
