import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const members = [
  { name: 'Amrit Arya', photo: '/team/amrit.jpeg' },
  { name: 'Rishav Singh', photo: '/team/rishav.jpeg' },
  { name: 'Ayush Kumar Singh', photo: '/team/ayush.jpeg' },
  { name: 'Aryan Raj', photo: '/team/aryan.jpeg' },
  { name: 'Rounak Kumar Mahato', photo: '/team/rounak.jpeg' },
  { name: 'Krishna Prasad Swain', photo: '/team/krishna.jpeg' },
];

const mentor = { name: 'Ayes Chinmay', photo: '/team/ayes sir.png' };

export default function Team() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="py-28 bg-[#f7f7f7] dark:bg-[#111111]" id="team" ref={ref}>
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <span className="section-badge mb-5 inline-flex">OUR TEAM</span>
          <h2 className="font-heading text-[clamp(2rem,4vw,3.2rem)] font-extrabold leading-tight tracking-tight text-[#08060d] dark:text-white mb-5">
            The People Behind Embryogen
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mb-12">
          {members.map((m, i) => (
            <motion.div key={m.name} className="float-card p-7 text-center" initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: i * 0.08 }}>
              <img src={m.photo} alt={m.name} className="w-20 h-20 rounded-full object-cover mx-auto mb-4 border-2 border-gray-100 dark:border-gray-700" />
              <h4 className="font-heading text-[0.95rem] font-bold text-[#08060d] dark:text-white">{m.name}</h4>
            </motion.div>
          ))}
        </div>

        <h3 className="font-heading text-xs font-bold tracking-[2px] uppercase text-gray-400 mb-6 text-center">Mentor</h3>
        <div className="max-w-[280px] mx-auto">
          <motion.div className="float-card p-7 text-center" initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.5 }}>
            <img src={mentor.photo} alt={mentor.name} className="w-20 h-20 rounded-full object-cover mx-auto mb-4 border-2 border-gray-100 dark:border-gray-700" />
            <h4 className="font-heading text-[0.95rem] font-bold text-[#08060d] dark:text-white">{mentor.name}</h4>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Mentor</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
