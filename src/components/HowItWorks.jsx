import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiOutlineUpload, HiOutlineSearch, HiOutlineBadgeCheck } from 'react-icons/hi';

const steps = [
  { num: '01', icon: <HiOutlineUpload className="text-xl" />, title: 'Upload Embryo Images', desc: 'Securely upload multi-focal embryo images from your time-lapse incubator or microscopy system.' },
  { num: '02', icon: <HiOutlineSearch className="text-xl" />, title: 'AI Analyzes Patterns', desc: 'Our deep learning model processes temporal and spatial features across multiple focal planes.' },
  { num: '03', icon: <HiOutlineBadgeCheck className="text-xl" />, title: 'Predict Implantation', desc: 'Receive ranked embryo recommendations with viability scores and explainable reasoning.' },
];

export default function HowItWorks() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <section className="py-28 bg-[#f7f7f7]" id="process" ref={ref}>
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <span className="section-badge mb-5 inline-flex">→ PROCESS</span>
          <h2 className="font-heading text-[clamp(2rem,4vw,3.2rem)] font-extrabold leading-tight tracking-tight text-[#08060d] mb-5">
            Simple & Scalable
          </h2>
          <p className="text-gray-500 max-w-[500px] mx-auto leading-relaxed">
            A transparent process of collaboration and feedback.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <motion.div key={s.num} className="float-card p-8" initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: i * 0.15 }}>
              <div className="w-12 h-12 rounded-2xl bg-[#f0f0f0] flex items-center justify-center mb-5 text-[#08060d]">
                {s.icon}
              </div>
              <h3 className="font-heading text-[1.05rem] font-bold text-[#08060d] mb-2">{s.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-6">{s.desc}</p>
              <span className="font-heading text-4xl font-extrabold text-[#e0e0e0]">{s.num}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
