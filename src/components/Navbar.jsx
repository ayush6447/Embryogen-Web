import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { HiOutlineMenuAlt3, HiX } from 'react-icons/hi';
import AnimatedThemeToggler from './AnimatedThemeToggler';
import { nav } from '../data/content';

const baseLink =
  'text-sm font-medium transition-colors hover:text-[#08060d] dark:hover:text-white';
const idleLink = 'text-gray-500 dark:text-gray-400';
const activeLink = 'text-[#08060d] dark:text-white';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Hash links point at Home sections, so only the standalone pages get an active state.
  const renderLink = (link, onClick) =>
    link.to.includes('#') ? (
      <Link key={link.to} to={link.to} className={`${baseLink} ${idleLink}`} onClick={onClick}>
        {link.label}
      </Link>
    ) : (
      <NavLink
        key={link.to}
        to={link.to}
        onClick={onClick}
        className={({ isActive }) => `${baseLink} ${isActive ? activeLink : idleLink}`}
      >
        {link.label}
      </NavLink>
    );

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 px-6 transition-all duration-300 ${scrolled ? 'bg-white/90 dark:bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-gray-100 dark:border-gray-800' : ''}`}
    >
      <div className="max-w-[1200px] mx-auto flex items-center justify-between h-[72px]">
        <Link to="/" className="flex items-center" aria-label="Embryogen home">
          <img src="/header-brand.jpeg" alt="Embryogen" className="h-[32px] dark:invert" />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {nav.links.map(link => renderLink(link))}
          <AnimatedThemeToggler className="text-[#08060d] dark:text-white" />
          <Link to={nav.cta.to} className="btn-primary !py-2.5 !px-6 !text-sm">
            {nav.cta.label}
          </Link>
        </div>

        <div className="md:hidden flex items-center gap-3">
          <AnimatedThemeToggler className="text-[#08060d] dark:text-white" />
          <button
            type="button"
            className="text-[#08060d] dark:text-white"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <HiX size={24} /> : <HiOutlineMenuAlt3 size={24} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden absolute top-[72px] left-0 w-full bg-white/97 dark:bg-[#0a0a0a]/97 backdrop-blur-xl border-b border-gray-100 dark:border-gray-800 px-6 py-6 flex flex-col gap-5"
        >
          {nav.links.map(link => renderLink(link, () => setMenuOpen(false)))}
          <Link
            to={nav.cta.to}
            className="btn-primary justify-center"
            onClick={() => setMenuOpen(false)}
          >
            {nav.cta.label}
          </Link>
        </div>
      )}
    </nav>
  );
}
