import { Link } from 'react-router-dom';
import { footer, site } from '../data/content';

export default function Footer() {
  return (
    <footer className="py-10 bg-white dark:bg-[#0a0a0a] border-t border-gray-100 dark:border-gray-800">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex items-center justify-center gap-8 flex-wrap mb-6">
          {footer.sections.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className="text-sm text-gray-500 hover:text-[#08060d] dark:hover:text-white transition-colors underline underline-offset-4 decoration-gray-300 dark:decoration-gray-600 hover:decoration-gray-500"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={`mailto:${site.contactEmail}`}
            className="text-sm text-gray-500 hover:text-[#08060d] dark:hover:text-white transition-colors underline underline-offset-4 decoration-gray-300 dark:decoration-gray-600 hover:decoration-gray-500"
          >
            {site.contactEmail}
          </a>
        </div>
        <p className="text-center text-xs text-gray-400">{footer.copyright}</p>
      </div>
    </footer>
  );
}
