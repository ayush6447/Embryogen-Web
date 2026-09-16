import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Icon from './Icon';
import { whyEmbryogen } from '../data/content';

export default function WhyEmbryogen() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <section className="py-28 bg-white dark:bg-[#0a0a0a]" id="why" ref={ref}>
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-badge mb-5 inline-flex">{whyEmbryogen.badge}</span>
          <h2 className="font-heading text-[clamp(2rem,4vw,3.2rem)] font-extrabold leading-tight tracking-tight text-[#08060d] dark:text-white mb-5">
            {whyEmbryogen.heading}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {whyEmbryogen.cards.map((card, i) => (
            <motion.div
              key={card.title}
              className="float-card p-8 bg-[#f9f9f9] dark:bg-[#131313] border border-gray-100 dark:border-neutral-900"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
            >
              <div className="w-12 h-12 rounded-2xl bg-white dark:bg-[#1a1a1a] flex items-center justify-center mb-5 text-[#08060d] dark:text-gray-300 shadow-sm border border-gray-100 dark:border-neutral-800">
                <Icon name={card.icon} className="text-2xl" />
              </div>
              <h3 className="font-heading text-lg font-bold text-[#08060d] dark:text-white mb-3">
                {card.title}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
