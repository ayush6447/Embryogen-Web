import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const stages = [
  {
    title: 'Stage 1 — MVP',
    items: ['Model trained', 'Frontend working', 'Timeline + predictions'],
    next: ['Improve reliability', 'Clean UI', 'Demo-ready'],
  },
  {
    title: 'Stage 2 — Clinical Prototype',
    items: ['Connect with IVF clinics', 'Show demo', 'Gather feedback'],
    goal: 'Would a doctor use this?',
  },
  {
    title: 'Stage 3 — Pilot Testing',
    items: ['Partner with 1–2 clinics', 'Test on real cases', 'Collect validation'],
  },
  {
    title: 'Stage 4 — Startup Launch',
    items: ['Register company', 'Build SaaS dashboard', 'Define pricing'],
  },
];

export default function Roadmap() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="py-28 bg-[#f7f7f7] dark:bg-[#111111]" id="roadmap" ref={ref}>
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div className="text-center mb-20" initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <span className="section-badge mb-5 inline-flex">GROWTH PATH</span>
          <h2 className="font-heading text-[clamp(2.5rem,4vw,3.2rem)] font-extrabold leading-tight tracking-tight text-[#08060d] dark:text-white mb-5">
            Product Roadmap
          </h2>
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-[30px] md:left-1/2 top-0 bottom-0 w-[1px] bg-gray-200 dark:bg-neutral-800 md:-translate-x-1/2" />

          <div className="space-y-12">
            {stages.map((stage, i) => {
              const isEven = i % 2 === 0;
              return (
                <motion.div
                  key={stage.title}
                  className={`relative flex flex-col md:flex-row items-baseline ${isEven ? 'md:flex-row-reverse' : ''}`}
                  initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                >
                  {/* Node */}
                  <div className="absolute left-[26px] md:left-1/2 w-3 h-3 rounded-full bg-[#08060d] dark:bg-white md:-translate-x-1/2 top-1.5 z-10" />

                  {/* Content Card */}
                  <div className={`ml-16 md:ml-0 md:w-1/2 ${isEven ? 'md:pr-16' : 'md:pl-16'} w-full`}>
                    <div className="float-card p-6 md:p-8 bg-white dark:bg-[#151515]">
                      <h3 className="font-heading text-lg font-bold text-[#08060d] dark:text-white mb-4">
                        {stage.title}
                      </h3>
                      <ul className="space-y-2 mb-4">
                        {stage.items.map((item, index) => (
                          <li key={index} className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-2">
                            <span className="w-1 h-1 rounded-full bg-gray-400 dark:bg-gray-600" />
                            {item}
                          </li>
                        ))}
                      </ul>

                      {stage.next && (
                        <div className="mt-4 pt-4 border-t border-gray-100 dark:border-neutral-800">
                          <p className="text-xs font-bold text-gray-400 dark:text-gray-500 mb-2">NEXT STEPS:</p>
                          <div className="flex flex-wrap gap-2">
                            {stage.next.map((n) => (
                              <span key={n} className="px-2 py-1 bg-gray-50 dark:bg-neutral-800 text-xs text-gray-600 dark:text-gray-400 rounded-md border border-gray-100 dark:border-neutral-800">
                                {n}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {stage.goal && (
                        <div className="mt-4 pt-4 border-t border-gray-100 dark:border-neutral-800">
                          <p className="text-xs font-bold text-[#08060d] dark:text-gray-200">
                            GOAL: <span className="font-normal text-gray-500 dark:text-gray-400">{stage.goal}</span>
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
