import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { LuShieldAlert, LuEye, LuLayers } from 'react-icons/lu';

const advantages = [
  {
    icon: <LuShieldAlert className="text-2xl" />,
    title: 'Biology-First Approach',
    description: 'Focus on biological reasoning and explainable milestones, not just black-box predictions.',
  },
  {
    icon: <LuEye className="text-2xl" />,
    title: 'Multi-Plane Depth Modeling',
    description: 'Uses multiple focal planes to mimic an embryologist focusing up and down for maximum accuracy.',
  },
  {
    icon: <LuLayers className="text-2xl" />,
    title: 'Full-Stack System',
    description: 'Built end-to-end with custom models, backend infrastructure, and intuitive clinical frontend.',
  },
];

export default function CompetitiveAdvantage() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <section className="py-28 bg-white dark:bg-[#0a0a0a]" id="moat" ref={ref}>
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <span className="section-badge mb-5 inline-flex">COMPETITIVE MOAT</span>
          <h2 className="font-heading text-[clamp(2.5rem,4vw,3.2rem)] font-extrabold leading-tight tracking-tight text-[#08060d] dark:text-white mb-5">
            What Makes Embryogen Different
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {advantages.map((adv, i) => (
            <motion.div key={adv.title} className="float-card p-8 bg-[#f9f9f9] dark:bg-[#131313] border border-gray-100 dark:border-neutral-900" initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: i * 0.12 }}>
              <div className="w-12 h-12 rounded-2xl bg-white dark:bg-[#1a1a1a] flex items-center justify-center mb-5 text-[#08060d] dark:text-gray-300 shadow-sm border border-gray-100 dark:border-neutral-800">
                {adv.icon}
              </div>
              <h3 className="font-heading text-lg font-bold text-[#08060d] dark:text-white mb-3">{adv.title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{adv.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
