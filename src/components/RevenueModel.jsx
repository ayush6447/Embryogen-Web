import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { LuCreditCard, LuZap, LuBoxes } from 'react-icons/lu';

const models = [
  {
    icon: <LuCreditCard className="text-2xl" />,
    title: 'SaaS',
    description: '₹20,000 – ₹1L per month per clinic for unlimited or tiered dashboard access.',
  },
  {
    icon: <LuZap className="text-2xl" />,
    title: 'Per Analysis',
    description: '₹200–₹500 per embryo computed. Pay-as-you-go model for smaller clinics.',
  },
  {
    icon: <LuBoxes className="text-2xl" />,
    title: 'Enterprise',
    description: 'Custom pricing, full integration, and dedicated support for large IVF chains and hospital networks.',
  },
];

export default function RevenueModel() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <section className="py-28 bg-[#f7f7f7] dark:bg-[#111111]" id="business-model" ref={ref}>
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <span className="section-badge mb-5 inline-flex">BUSINESS MODEL</span>
          <h2 className="font-heading text-[clamp(2.5rem,4vw,3.2rem)] font-extrabold leading-tight tracking-tight text-[#08060d] dark:text-white mb-5">
            Scalable Economics
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {models.map((model, i) => (
            <motion.div key={model.title} className="float-card p-10 bg-white dark:bg-[#151515] border border-gray-100 dark:border-neutral-900" initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: i * 0.12 }}>
              <div className="w-12 h-12 rounded-2xl bg-gray-50 dark:bg-[#1a1a1a] flex items-center justify-center mb-6 text-[#08060d] dark:text-gray-300 shadow-sm">
                {model.icon}
              </div>
              <h3 className="font-heading text-xl font-bold text-[#08060d] dark:text-white mb-3">{model.title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{model.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
