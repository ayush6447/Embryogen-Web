import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { trustNote } from '../data/content';

export default function TrustNote() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section className="pt-16 pb-4 bg-white dark:bg-[#0a0a0a]" ref={ref}>
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.p
          className="max-w-[760px] mx-auto text-center text-xs leading-relaxed text-gray-400 dark:text-gray-500"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          {trustNote}
        </motion.p>
      </div>
    </section>
  );
}
