import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const stats = [
  { value: '₹5,000Cr+', label: 'IVF Market Size (India)', desc: 'Strong growth projected at 15–20% CAGR annually.' },
  { value: '3,000+', label: 'IVF Clinics', desc: 'A large, addressable network of potential clinic partners.' },
  { value: 'Low AI Use', label: 'Market Insight', desc: 'Most clinics currently do not use advanced AI solutions.' },
];

export default function MarketImpact() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <section className="py-28 dark:bg-[#0a0a0a]" id="market" ref={ref}>
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <span className="section-badge mb-5 inline-flex">MARKET DEMAND</span>
          <h2 className="font-heading text-[clamp(2rem,4vw,3.2rem)] font-extrabold leading-tight tracking-tight text-[#08060d] dark:text-white mb-5">
            Real-World Opportunity
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((r, i) => (
            <motion.div key={r.label} className="float-card p-10 text-center" initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: i * 0.12 }}>
              <h3 className="font-heading text-[2.5rem] font-extrabold text-[#08060d] dark:text-white tracking-tight mb-2">{r.value}</h3>
              <p className="text-sm font-bold text-[#08060d] dark:text-gray-200 mb-2">{r.label}</p>
              <p className="text-sm text-gray-400 leading-relaxed">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
