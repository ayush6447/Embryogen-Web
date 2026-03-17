import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiOutlineAdjustments, HiOutlineCube, HiOutlineDesktopComputer } from 'react-icons/hi';

const limitations = [
  {
    icon: <HiOutlineAdjustments className="text-xl" />,
    title: 'Manual Grading',
    description: 'High inter-observer variability and difficulty interpreting subtle developmental changes across embryo growth stages.',
  },
  {
    icon: <HiOutlineCube className="text-xl" />,
    title: 'Static AI Models',
    description: 'Use single-frame classification and may produce biologically implausible predictions without temporal context.',
  },
  {
    icon: <HiOutlineDesktopComputer className="text-xl" />,
    title: 'Heavy Sequence Models',
    description: 'Computationally expensive and sensitive to noisy or missing clinical data, limiting real-world deployment.',
  },
];

export default function Features() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="py-28 dark:bg-[#0a0a0a]" id="limitations" ref={ref}>
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <span className="section-badge mb-5 inline-flex">EXISTING SOLUTIONS</span>
          <h2 className="font-heading text-[clamp(2rem,4vw,3.2rem)] font-extrabold leading-tight tracking-tight text-[#08060d] dark:text-white mb-5">
            Limitations of Current Approaches
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {limitations.map((f, i) => (
            <motion.div key={f.title} className="float-card p-8" initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: i * 0.1 }}>
              <div className="w-12 h-12 rounded-2xl bg-[#f0f0f0] dark:bg-[#1e1e1e] flex items-center justify-center mb-5 text-[#08060d] dark:text-gray-300">
                {f.icon}
              </div>
              <h3 className="font-heading text-[1.1rem] font-bold text-[#08060d] dark:text-white mb-2">{f.title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{f.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
