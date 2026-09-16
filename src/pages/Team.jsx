import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaLinkedinIn } from 'react-icons/fa';
import PageMeta from '../components/PageMeta';
import CTA from '../components/CTA';
import { meta, team } from '../data/content';

/**
 * Photo fills the top of the card: grayscale at rest, colour + a slow zoom on hover,
 * with the LinkedIn overlay fading up over it. Members without a LinkedIn URL keep the
 * photo effect and simply have no overlay.
 */
function PersonCard({ person, roleLabel, delay, inView }) {
  return (
    <motion.div
      className="float-card group overflow-hidden"
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
    >
      <div className="relative overflow-hidden">
        <img
          src={person.photo}
          alt={person.name}
          loading="lazy"
          width="300"
          height="300"
          className="w-full aspect-square object-cover grayscale transition-all duration-500 ease-out group-hover:grayscale-0 group-hover:scale-[1.06]"
        />

        {person.linkedin && (
          <a
            href={person.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label={`${person.name} on LinkedIn`}
            className="absolute inset-0 flex items-end justify-center bg-gradient-to-t from-[#08060d]/85 via-[#08060d]/25 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 focus-visible:opacity-100 focus-visible:outline-none"
          >
            <span className="mb-5 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-[#08060d] text-sm font-bold translate-y-3 transition-transform duration-300 ease-out group-hover:translate-y-0">
              <FaLinkedinIn size={14} aria-hidden="true" />
              LinkedIn
            </span>
          </a>
        )}
      </div>

      <div className="p-5 sm:p-6 text-center">
        <h3 className="font-heading text-lg sm:text-xl lg:text-2xl font-extrabold tracking-tight leading-tight text-[#08060d] dark:text-white">
          {person.name}
        </h3>
        <p className="mt-2 text-[0.7rem] font-bold uppercase tracking-[0.16em] text-gray-400 dark:text-gray-500">
          {roleLabel}
        </p>
      </div>
    </motion.div>
  );
}

export default function Team() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <>
      <PageMeta {...meta.team} path="/team" />

      {/* pt-40 clears the fixed 72px navbar and keeps the badge breathing. */}
      <section className="pt-40 pb-28 bg-[#f7f7f7] dark:bg-[#111111]" ref={ref}>
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div
            className="text-center mb-16 max-w-[800px] mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="section-badge mb-5 inline-flex">{team.badge}</span>
            <h1 className="font-heading text-[clamp(2.5rem,5.5vw,4rem)] font-extrabold leading-[1.1] tracking-tight text-[#08060d] dark:text-white mb-6">
              {team.heading}
            </h1>
            <p className="text-lg md:text-xl font-medium text-gray-600 dark:text-gray-300">
              {team.subtext}
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mb-20">
            {team.members.map((member, i) => (
              <PersonCard
                key={member.name}
                person={member}
                roleLabel={member.role}
                delay={i * 0.08}
                inView={inView}
              />
            ))}
          </div>

          <h2 className="font-heading text-xs font-bold tracking-[2px] uppercase text-gray-400 mb-6 text-center">
            Mentor
          </h2>
          <div className="max-w-[300px] mx-auto">
            <PersonCard
              person={team.mentor}
              roleLabel={team.mentor.designation}
              delay={0.4}
              inView={inView}
            />
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
