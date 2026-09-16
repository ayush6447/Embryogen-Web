import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { positioning } from '../data/content';

export default function Positioning() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <section
      className="py-24 bg-white dark:bg-[#0a0a0a] border-y border-gray-100 dark:border-neutral-900"
      id="positioning"
      ref={ref}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          className="text-center max-w-[800px] mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-badge mb-5 inline-flex">{positioning.badge}</span>
          <h2 className="font-heading text-[clamp(2.5rem,5.5vw,4rem)] font-extrabold leading-[1.1] tracking-tight text-[#08060d] dark:text-white mb-6">
            {positioning.heading}
          </h2>
          <p className="text-xl font-medium text-gray-600 dark:text-gray-300">
            {positioning.subtext}
          </p>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-4 mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {positioning.pills.map(pill => (
            <motion.div
              key={pill}
              className="flex items-center gap-3 px-6 py-3 bg-[#f7f7f7] dark:bg-[#151515] rounded-full border border-gray-100 dark:border-neutral-800 backdrop-blur-sm"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">{pill}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
