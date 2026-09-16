import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Resets scroll on every navigation. When the URL carries a hash (e.g. /#problem)
 * it smooth-scrolls to that section once the page has rendered, which also covers
 * a hard refresh of /#how-it-works — the browser's own hash scroll fires before
 * React has mounted anything.
 */
export default function ScrollToTop() {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      return;
    }

    const id = decodeURIComponent(hash.slice(1));
    const scroll = () => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return Boolean(el);
    };

    if (scroll()) return;

    // Section not painted yet (first load / route switch): retry on the next frame.
    const frame = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(frame);
  }, [pathname, hash, key]);

  return null;
}
