import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiOutlineArrowRight } from 'react-icons/hi';
import Threads from './Threads';

export default function Hero() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const update = () => setIsDark(document.documentElement.classList.contains('dark'));
    update();
    const observer = new MutationObserver(update);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-white dark:bg-[#0a0a0a]" id="hero">
      {/* Threads Background — color reacts to theme */}
      <div className="absolute inset-0 z-0 pointer-events-auto" key={isDark ? 'dark' : 'light'}>
        <Threads
          color={isDark ? [1, 1, 1] : [0, 0, 0]}
          amplitude={1}
          distance={0}
          enableMouseInteraction
        />
      </div>

      <motion.div
        className="relative z-10 text-center max-w-[720px] px-6"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <motion.h1
          className="font-heading text-[clamp(3rem,7vw,5rem)] font-extrabold tracking-tight text-[#08060d] dark:text-white leading-none mb-2"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          EMBRYOGEN
        </motion.h1>

        <p className="font-heading text-lg md:text-xl font-semibold text-gray-700 dark:text-gray-300 mb-5">
          Biology-First IVF Decision Support
        </p>

        <p className="text-gray-500 dark:text-gray-400 text-base md:text-lg mb-10 leading-relaxed font-normal max-w-[600px] mx-auto">
          An AI system that supports embryologists by analysing time-lapse embryo development.
          Using deep learning, it detects key biological milestones like cell division and cavity
          formation to provide a stable, explainable assessment of embryo viability.
        </p>

        <motion.a href="#cta" className="btn-primary text-base" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
          Get Started <HiOutlineArrowRight />
        </motion.a>
      </motion.div>

      <motion.div className="absolute bottom-12 left-0 right-0 flex items-center justify-center gap-8 z-10" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6, duration: 0.5 }}>
        {['Problem', 'Solutions', 'Market', 'Team'].map(link => (
          <a key={link} href={`#${link.toLowerCase()}`} className="text-sm text-gray-400 hover:text-[#08060d] dark:hover:text-white transition-colors underline underline-offset-4 decoration-gray-300 dark:decoration-gray-600 hover:decoration-gray-500">
            {link}
          </a>
        ))}
      </motion.div>
    </section>
  );
}
