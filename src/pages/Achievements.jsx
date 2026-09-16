import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiOutlineArrowRight } from 'react-icons/hi';
import PageMeta from '../components/PageMeta';
import CTA from '../components/CTA';
import { achievements, meta } from '../data/content';

function formatDate(value) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return date.toLocaleDateString('en-GB', { month: 'short', year: 'numeric' });
}

export default function Achievements() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const items = [...achievements.items].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <>
      <PageMeta {...meta.achievements} path="/achievements" />

      {/* pt-40 clears the fixed 72px navbar. */}
      <section className="pt-40 pb-28 bg-[#f7f7f7] dark:bg-[#111111]" ref={ref}>
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="section-badge mb-5 inline-flex">{achievements.badge}</span>
            <h2 className="font-heading text-[clamp(2rem,4vw,3.2rem)] font-extrabold leading-tight tracking-tight text-[#08060d] dark:text-white mb-5">
              {achievements.heading}
            </h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-[560px] mx-auto leading-relaxed">
              {achievements.subtext}
            </p>
          </motion.div>

          {items.length === 0 ? (
            <motion.div
              className="float-card max-w-[420px] mx-auto p-12 text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              <h3 className="font-heading text-lg font-bold text-[#08060d] dark:text-white mb-2">
                {achievements.emptyMessage}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                We are just getting started. Milestones will show up here as we reach them.
              </p>
            </motion.div>
          ) : (
            <div className="flex flex-wrap justify-center gap-6">
              {items.map((item, i) => (
                <motion.article
                  key={`${item.title}-${item.date}`}
                  className="float-card overflow-hidden flex flex-col w-full md:w-[calc(50%-12px)] lg:w-[calc((100%-48px)/3)]"
                  initial={{ opacity: 0, y: 40 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  {item.image && (
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className="w-full aspect-[4/3] object-cover border-b border-gray-100 dark:border-neutral-800"
                    />
                  )}
                  <div className="p-8 flex flex-col flex-1">
                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-gray-400 mb-3">
                      {item.organization} · {formatDate(item.date)}
                    </p>
                    <h3 className="font-heading text-lg font-bold text-[#08060d] dark:text-white mb-3">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                      {item.description}
                    </p>
                    {item.link && (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-[#08060d] dark:text-white hover:gap-2.5 transition-all"
                      >
                        View <HiOutlineArrowRight aria-hidden="true" />
                      </a>
                    )}
                  </div>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </section>

      <CTA />
    </>
  );
}
