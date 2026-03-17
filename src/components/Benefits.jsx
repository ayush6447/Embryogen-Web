import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiOutlineExclamationCircle, HiOutlineEye, HiOutlineUserGroup } from 'react-icons/hi';

const problems = [
  {
    icon: <HiOutlineUserGroup className="text-xl" />,
    title: 'Subjective Manual Selection',
    description: 'Manual embryo selection varies between experts and is prone to human error, leading to inconsistent clinical outcomes.',
  },
  {
    icon: <HiOutlineEye className="text-xl" />,
    title: 'Static Image Limitations',
    description: 'Traditional tools rely on single images and miss critical growth patterns that unfold over time during embryo development.',
  },
  {
    icon: <HiOutlineExclamationCircle className="text-xl" />,
    title: 'Black-Box AI',
    description: 'Existing AI systems often act as a "black box," making it difficult for clinicians to trust or verify predictions.',
  },
];

export default function Benefits() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <section className="py-28 bg-[#f7f7f7] dark:bg-[#111111]" id="problem" ref={ref}>
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <span className="section-badge mb-5 inline-flex">THE PROBLEM</span>
          <h2 className="font-heading text-[clamp(2rem,4vw,3.2rem)] font-extrabold leading-tight tracking-tight text-[#08060d] dark:text-white mb-5">
            Why Current Methods Fall Short
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {problems.map((b, i) => (
            <motion.div key={b.title} className="float-card p-8" initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: i * 0.12 }}>
              <div className="w-12 h-12 rounded-2xl bg-[#f0f0f0] dark:bg-[#1e1e1e] flex items-center justify-center mb-5 text-[#08060d] dark:text-gray-300">
                {b.icon}
              </div>
              <h3 className="font-heading text-lg font-bold text-[#08060d] dark:text-white mb-3">{b.title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{b.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
