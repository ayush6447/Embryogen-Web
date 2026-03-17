import { useState, useEffect } from 'react';
import { HiOutlineMenuAlt3, HiX } from 'react-icons/hi';
import AnimatedThemeToggler from './AnimatedThemeToggler';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { label: 'Problem', href: '#problem' },
    { label: 'Solutions', href: '#solutions' },
    { label: 'Market', href: '#market' },
    { label: 'Team', href: '#team' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 px-6 transition-all duration-300 ${scrolled ? 'bg-white/90 dark:bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-gray-100 dark:border-gray-800' : ''}`}>
      <div className="max-w-[1200px] mx-auto flex items-center justify-between h-[72px]">
        <a href="#" className="font-heading text-[1.2rem] font-extrabold tracking-tight text-[#08060d] dark:text-white">
          EMBRYOGEN
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map(link => (
            <a key={link.href} href={link.href} className="text-sm font-medium text-gray-500 hover:text-[#08060d] dark:text-gray-400 dark:hover:text-white transition-colors">
              {link.label}
            </a>
          ))}
          <AnimatedThemeToggler className="text-[#08060d] dark:text-white" />
          <a href="#cta" className="btn-primary !py-2.5 !px-6 !text-sm">Get Started</a>
        </div>

        <div className="md:hidden flex items-center gap-3">
          <AnimatedThemeToggler className="text-[#08060d] dark:text-white" />
          <button className="text-[#08060d] dark:text-white" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <HiX size={24} /> : <HiOutlineMenuAlt3 size={24} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden absolute top-[72px] left-0 w-full bg-white/97 dark:bg-[#0a0a0a]/97 backdrop-blur-xl border-b border-gray-100 dark:border-gray-800 px-6 py-6 flex flex-col gap-5">
          {links.map(link => (
            <a key={link.href} href={link.href} className="text-sm font-medium text-gray-500 hover:text-[#08060d] dark:text-gray-400 dark:hover:text-white" onClick={() => setMenuOpen(false)}>
              {link.label}
            </a>
          ))}
          <a href="#cta" className="btn-primary text-center" onClick={() => setMenuOpen(false)}>Get Started</a>
        </div>
      )}
    </nav>
  );
}
