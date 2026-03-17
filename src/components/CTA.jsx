import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiOutlineArrowRight } from 'react-icons/hi';

export default function CTA() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section className="py-24 dark:bg-[#111111]" id="cta" ref={ref}>
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          className="max-w-[800px] mx-auto py-20 px-12 rounded-[32px] bg-[#08060d] dark:bg-white text-center relative overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold text-white dark:text-[#08060d] mb-4 relative z-10">
            Transform IVF Decision Making with AI
          </h2>
          <p className="text-gray-400 dark:text-gray-500 mb-8 max-w-[480px] mx-auto leading-relaxed relative z-10">
            Join the future of reproductive medicine. Let Embryogen empower your clinic.
          </p>
          <motion.a
            href="mailto:contact@embryogen.ai"
            className="inline-flex items-center gap-2 px-8 py-4 text-base font-bold text-[#08060d] dark:text-white bg-white dark:bg-[#08060d] rounded-full hover:bg-gray-100 dark:hover:bg-gray-900 transition-all duration-300 relative z-10"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            Request Demo <HiOutlineArrowRight />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
