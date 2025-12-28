import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PreloaderProps {
    onComplete: () => void;
}

const words = ["ML ENGINEER", "AI ENGINEER", "DATA ANALYST"];

const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (index === words.length - 1) {
            setTimeout(onComplete, 1000);
            return;
        }

        const timeout = setTimeout(() => {
            setIndex((prev) => prev + 1);
        }, 800);

        return () => clearTimeout(timeout);
    }, [index, onComplete]);

    return (
        <motion.div
            initial={{ y: 0 }}
            exit={{ y: "-100%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-950 text-white"
        >
            <div className="relative overflow-hidden">
                <AnimatePresence mode="wait">
                    <motion.h1
                        key={index}
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -50, opacity: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="text-4xl md:text-6xl font-bold tracking-wider font-mono text-center"
                    >
                        {words[index]}
                    </motion.h1>
                </AnimatePresence>

                {/* Decorative line */}
                <motion.div
                    className="h-1 bg-white mt-4 mx-auto"
                    initial={{ width: 0 }}
                    animate={{ width: "100px" }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                />
            </div>
        </motion.div>
    );
};

export default Preloader;
