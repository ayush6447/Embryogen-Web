import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const competitors = ['Vitrolife (EmbryoScope AI)', 'Life Whisperer', 'AiVF'];

export default function CompetitorLandscape() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <section className="py-28 bg-white dark:bg-[#0a0a0a]" id="competitors" ref={ref}>
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <span className="section-badge mb-5 inline-flex">COMPETITIVE LANDSCAPE</span>
          <h2 className="font-heading text-[clamp(2.5rem,4vw,3.2rem)] font-extrabold leading-tight tracking-tight text-[#08060d] dark:text-white mb-5">
            Market Alternatives
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div className="space-y-4" initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.5 }}>
            <p className="text-sm uppercase tracking-wider font-bold text-gray-400 dark:text-gray-500">Existing Players</p>
            <div className="flex flex-wrap gap-3">
              {competitors.map((c) => (
                <div key={c} className="px-5 py-3 bg-[#f7f7f7] dark:bg-[#151515] rounded-xl border border-gray-100 dark:border-neutral-900 text-sm font-semibold text-gray-800 dark:text-gray-200">
                  {c}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div className="float-card p-8 bg-[#f9f9f9] dark:bg-[#131313] border border-gray-100 dark:border-neutral-900" initial={{ opacity: 0, x: 30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.5, delay: 0.2 }}>
            <p className="text-xs uppercase tracking-wider font-bold text-gray-400 dark:text-gray-500 mb-2">Market Insight</p>
            <h3 className="font-heading text-lg font-bold text-[#08060d] dark:text-white mb-4">
              Indian Market is Underpenetrated
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
              Current Solutions are expensive and typically operate as "black-box" models, making adoption slow in developing markets.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
