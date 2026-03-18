import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { LuFileCheck, LuShieldCheck, LuDatabase } from 'react-icons/lu';

const challenges = [
  { icon: <LuFileCheck className="text-xl" />, label: 'Clinical validation required' },
  { icon: <LuShieldCheck className="text-xl" />, label: 'Need for regulatory compliance' },
  { icon: <LuDatabase className="text-xl" />, label: 'Access to high-quality data' },
];

export default function Challenges() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <section className="py-24 bg-[#f7f7f7] dark:bg-[#111111]" id="challenges" ref={ref}>
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <span className="section-badge mb-5 inline-flex">CHALLENGES AHEAD</span>
          <h2 className="font-heading text-[clamp(2.5rem,4vw,3.2rem)] font-extrabold leading-tight tracking-tight text-[#08060d] dark:text-white mb-5">
            Realism & Adaptation
          </h2>
        </motion.div>

        <div className="flex flex-col md:flex-row justify-center gap-4 max-w-[900px] mx-auto">
          {challenges.map((item, i) => (
            <motion.div
              key={item.label}
              className="flex items-center gap-4 p-5 bg-white dark:bg-[#151515] rounded-2xl border border-gray-100 dark:border-neutral-900 w-full"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
            >
              <div className="w-10 h-10 rounded-xl bg-gray-50 dark:bg-neutral-800 flex items-center justify-center text-[#08060d] dark:text-gray-300 shadow-sm border border-gray-100 dark:border-neutral-800">
                {item.icon}
              </div>
              <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                {item.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
