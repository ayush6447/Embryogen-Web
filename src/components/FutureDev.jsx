import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { LuCpu, LuRadar } from 'react-icons/lu';

const items = [
  {
    icon: <LuCpu className="text-xl" />,
    title: 'Raspberry Pi Monitoring System',
    description: 'Standalone Raspberry Pi integrated embryo monitoring system for real-time observation in clinical environments.',
    badge: 'Hardware',
  },
  {
    icon: <LuRadar className="text-xl" />,
    title: 'Edge AI Deployment',
    description: 'Edge AI-based automated focus and hardware-locked analysis for privacy-first, low-latency inference on-site.',
    badge: 'Coming Soon',
  },
];

export default function FutureDev() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <section className="py-28 dark:bg-[#0a0a0a]" id="roadmap" ref={ref}>
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <span className="section-badge mb-5 inline-flex">FUTURE DEVELOPMENT</span>
          <h2 className="font-heading text-[clamp(2rem,4vw,3.2rem)] font-extrabold leading-tight tracking-tight text-[#08060d] dark:text-white mb-5">
            What's Next
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((item, i) => (
            <motion.div key={item.title} className="float-card p-8" initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: i * 0.12 }}>
              <div className="w-12 h-12 rounded-2xl bg-[#f0f0f0] dark:bg-[#1e1e1e] flex items-center justify-center mb-5 text-[#08060d] dark:text-gray-300">
                {item.icon}
              </div>
              <h3 className="font-heading text-lg font-bold text-[#08060d] dark:text-white mb-3">{item.title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-4">{item.description}</p>
              <span className="inline-block px-3.5 py-1 rounded-full text-[0.7rem] font-bold uppercase tracking-wide bg-[#e8e8e8] dark:bg-[#262626] text-gray-600 dark:text-gray-400">
                {item.badge}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
