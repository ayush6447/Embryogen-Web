export default function Footer() {
  const links = [
    { label: 'Problem', href: '#problem' },
    { label: 'Solutions', href: '#solutions' },
    { label: 'Market', href: '#market' },
    { label: 'Team', href: '#team' },
    { label: 'Roadmap', href: '#roadmap' },
  ];

  return (
    <footer className="py-10 bg-white dark:bg-[#0a0a0a] border-t border-gray-100 dark:border-gray-800">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex items-center justify-center gap-8 flex-wrap mb-6">
          {links.map(link => (
            <a key={link.label} href={link.href} className="text-sm text-gray-500 hover:text-[#08060d] dark:hover:text-white transition-colors underline underline-offset-4 decoration-gray-300 dark:decoration-gray-600 hover:decoration-gray-500">
              {link.label}
            </a>
          ))}
        </div>
        <p className="text-center text-xs text-gray-400">
          
        </p>
      </div>
    </footer>
  );
}
