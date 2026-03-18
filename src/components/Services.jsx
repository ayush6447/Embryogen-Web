import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { LuLayers, LuDna, LuFocus } from 'react-icons/lu';

const solutions = [
  {
    icon: <LuLayers className="text-xl" />,
    title: 'Automated Tracking',
    description: 'Tracks embryo development automatically, monitoring growth continuous timeline analysis.',
  },
  {
    icon: <LuDna className="text-xl" />,
    title: 'Biological Event Detection',
    description: 'Detects critical biological events (e.g. PN, cavity formation) to prevent bias and increase accuracy.',
  },
  {
    icon: <LuFocus className="text-xl" />,
    title: 'Insightful Timelines',
    description: 'Provides clear developmental timelines and reduced human-bias insights for better selection.',
  },
];

export default function Services() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <section className="py-28 bg-[#f7f7f7] dark:bg-[#111111]" id="solutions" ref={ref}>
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <span className="section-badge mb-5 inline-flex">OUR SOLUTION</span>
          <h2 className="font-heading text-[clamp(2rem,4vw,3.2rem)] font-extrabold leading-tight tracking-tight text-[#08060d] dark:text-white mb-5">
            How Embryogen Works
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {solutions.map((s, i) => (
            <motion.div key={s.title} className="float-card p-8" initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: i * 0.1 }}>
              <div className="w-12 h-12 rounded-2xl bg-[#f0f0f0] dark:bg-[#1e1e1e] flex items-center justify-center mb-5 text-[#08060d] dark:text-gray-300">
                {s.icon}
              </div>
              <h3 className="font-heading text-[1.1rem] font-bold text-[#08060d] dark:text-white mb-2">{s.title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{s.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
