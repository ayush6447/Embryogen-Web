import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiCheck, HiX } from 'react-icons/hi';

const embryogenPoints = [
  'Temporal analysis across development stages',
  'AI-driven objective insights',
  'Reduced inter-observer error',
  '200+ features extracted automatically',
  'Explainable prediction reasoning',
  'Real-time results in < 0.3 seconds',
];

const traditionalPoints = [
  'Single time-point manual grading',
  'Subjective embryologist decisions',
  'High inter-observer variability',
  'Limited morphological assessment',
  'No prediction transparency',
  'Time-consuming manual process',
];

export default function Comparison() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <section className="py-28 bg-[#f7f7f7]" id="comparison" ref={ref}>
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <span className="section-badge mb-5 inline-flex">⟷ COMPARISON</span>
          <h2 className="font-heading text-[clamp(2rem,4vw,3.2rem)] font-extrabold leading-tight tracking-tight text-[#08060d] mb-5">
            Embryogen vs Traditional
          </h2>
        </motion.div>

        <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6" initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }}>
          <div className="float-card p-8 border-2 border-[#08060d]/10">
            <span className="section-badge mb-5 inline-flex !text-[0.65rem]">✦ EMBRYOGEN</span>
            <h3 className="font-heading text-xl font-extrabold text-[#08060d] mb-5">AI-Powered Analysis</h3>
            <div className="flex flex-col gap-3">
              {embryogenPoints.map(p => (
                <div key={p} className="flex items-center gap-3 text-sm text-gray-600 p-3 rounded-xl bg-[#f7f7f7]">
                  <span className="w-6 h-6 rounded-full bg-[#08060d] text-white flex items-center justify-center flex-shrink-0 text-xs"><HiCheck /></span>
                  {p}
                </div>
              ))}
            </div>
          </div>

          <div className="float-card p-8 bg-[#f7f7f7]">
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-[0.65rem] font-bold uppercase tracking-wider bg-gray-200 text-gray-500 mb-5">Traditional</span>
            <h3 className="font-heading text-xl font-extrabold text-[#08060d] mb-5">Manual Grading</h3>
            <div className="flex flex-col gap-3">
              {traditionalPoints.map(p => (
                <div key={p} className="flex items-center gap-3 text-sm text-gray-500 p-3 rounded-xl bg-white">
                  <span className="w-6 h-6 rounded-full bg-gray-200 text-gray-400 flex items-center justify-center flex-shrink-0 text-xs"><HiX /></span>
                  {p}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
