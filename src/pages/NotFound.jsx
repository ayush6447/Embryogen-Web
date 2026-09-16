import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HiOutlineArrowRight } from 'react-icons/hi';
import PageMeta from '../components/PageMeta';
import { meta, notFound } from '../data/content';

export default function NotFound() {
  return (
    <>
      <PageMeta {...meta.notFound} path="/404" />

      <section className="min-h-[70vh] pt-40 pb-28 flex items-center bg-white dark:bg-[#0a0a0a]">
        <div className="max-w-[1200px] mx-auto px-6 w-full">
          <motion.div
            className="text-center max-w-[560px] mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-badge mb-5 inline-flex">{notFound.badge}</span>
            <h1 className="font-heading text-[clamp(2rem,4vw,3.2rem)] font-extrabold leading-tight tracking-tight text-[#08060d] dark:text-white mb-5">
              {notFound.heading}
            </h1>
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-10">
              {notFound.text}
            </p>
            <Link to="/" className="btn-primary text-base">
              {notFound.button} <HiOutlineArrowRight aria-hidden="true" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
