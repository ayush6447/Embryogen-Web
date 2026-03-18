import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { LuBrain, LuStethoscope, LuTrendingUp } from 'react-icons/lu';

const identities = [
  { icon: <LuBrain className="text-xl" />, label: 'Healthcare AI SaaS' },
  { icon: <LuStethoscope className="text-xl" />, label: 'Clinical Decision Support System (CDSS)' },
  { icon: <LuTrendingUp className="text-xl" />, label: 'Computer Vision + Time-Series AI' },
];

export default function Positioning() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <section className="py-24 bg-white dark:bg-[#0a0a0a] border-y border-gray-100 dark:border-neutral-900" id="positioning" ref={ref}>
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Positioning - What We're Building */}
        <motion.div 
          className="text-center mb-20 max-w-[800px] mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-badge mb-5 inline-flex font-semibold tracking-wider">WHAT WE'RE BUILDING</span>
          <h2 className="font-heading text-[clamp(2.5rem,5.5vw,4rem)] font-extrabold leading-[1.1] tracking-tight text-[#08060d] dark:text-white mb-6">
            We bring biology-aware AI into IVF labs to improve embryo selection.
          </h2>
          <p className="text-xl font-medium text-gray-600 dark:text-gray-300">
            We help doctors understand embryo development using AI.
          </p>
        </motion.div>

        {/* Product Identity */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-xs uppercase tracking-[0.2em] font-bold text-gray-400 dark:text-gray-500 mb-6">
            A New Category of IVF Intelligence
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {identities.map((item, i) => (
              <motion.div
                key={item.label}
                className="flex items-center gap-3 px-6 py-3 bg-[#f7f7f7] dark:bg-[#151515] rounded-full border border-gray-100 dark:border-neutral-800 backdrop-blur-sm"
                whileHover={{ scale: 1.05, borderColor: '#000', darkBorderColor: '#fff' }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-gray-700 dark:text-gray-300">
                  {item.icon}
                </div>
                <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                  {item.label}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
