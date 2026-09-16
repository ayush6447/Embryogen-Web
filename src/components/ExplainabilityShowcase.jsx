import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { explainability } from '../data/content';

/**
 * Renders only when a REAL model-output screenshot exists at
 * public/showcase/explainability.png. No stock photography and no mock-ups:
 * if the file is missing the whole section is skipped.
 *
 * TODO: export a genuine Embryogen model-output screenshot to
 * public/showcase/explainability.png so this section appears on the page.
 */
export default function ExplainabilityShowcase() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });
  const [imageReady, setImageReady] = useState(false);

  useEffect(() => {
    let cancelled = false;
    const probe = new Image();
    probe.onload = () => {
      if (!cancelled) setImageReady(true);
    };
    probe.src = explainability.image;
    return () => {
      cancelled = true;
      probe.onload = null;
    };
  }, []);

  if (!imageReady) return null;

  return (
    <section className="py-28 bg-[#f7f7f7] dark:bg-[#111111]" id="explainability" ref={ref}>
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="section-badge mb-5 inline-flex">{explainability.badge}</span>
            <h2 className="font-heading text-[clamp(2rem,4vw,3.2rem)] font-extrabold leading-tight tracking-tight text-[#08060d] dark:text-white mb-5">
              {explainability.heading}
            </h2>
            {explainability.paragraphs.map(text => (
              <p
                key={text}
                className="text-sm md:text-base text-gray-500 dark:text-gray-400 leading-relaxed mb-4"
              >
                {text}
              </p>
            ))}
            <ul className="mt-6 space-y-3">
              {explainability.bullets.map(bullet => (
                <li
                  key={bullet}
                  className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-300"
                >
                  <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-[#08060d] dark:bg-white shrink-0" />
                  {bullet}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="float-card p-3 overflow-hidden"
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <img
              src={explainability.image}
              alt={explainability.imageAlt}
              loading="lazy"
              className="w-full h-auto rounded-[14px]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
