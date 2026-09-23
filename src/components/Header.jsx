import { useEffect, useState } from 'react';
import { Menu, Play, Smartphone, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const links = [
  ['Home', '/#hero'],
  ['Trending', '/#trending'],
  ['Categories', '/#categories'],
  ['Originals', '/#originals'],
  ['App', '/#download']
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === '/' || location.pathname === '';
  const isSolid = !isHome || scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 28);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname, location.hash]);

  const handleNavClick = (e, href) => {
    if (href.startsWith('/#')) {
      const targetId = href.replace('/#', '');
      if (isHome) {
        e.preventDefault();
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
    setOpen(false);
  };

  return (
    <>
      <header className={`site-header ${isSolid ? 'is-scrolled header-solid' : ''}`}>
        <div className="container header-inner">
          <Link
            to="/#hero"
            className="brand"
            aria-label="Chulbul Play home"
            onClick={(e) => handleNavClick(e, '/#hero')}
          >
            <img src="/assets/logo/chulbul-play.png" alt="Chulbul Play" />
            <span className="sr-only">
              Chulbul <b>Play</b>
            </span>
          </Link>

          <nav className="desktop-nav" aria-label="Main navigation">
            {links.map(([label, href]) => (
              <Link
                key={label}
                to={href}
                onClick={(e) => handleNavClick(e, href)}
              >
                {label}
              </Link>
            ))}
          </nav>

          <div className="header-actions">
            <a
              className="header-app-pill ios-pill"
              href="/#download"
              onClick={(e) => handleNavClick(e, '/#download')}
              aria-label="Download on iOS"
            >
              <Smartphone size={15} />
              <span>iOS</span>
            </a>

            <a
              className="header-app-pill android-pill"
              href="/#download"
              onClick={(e) => handleNavClick(e, '/#download')}
              aria-label="Download on Android"
            >
              <Play size={14} fill="currentColor" />
              <span>Android</span>
            </a>

            <button
              className="icon-button menu-button"
              aria-label={open ? 'Close menu' : 'Open menu'}
              onClick={() => setOpen(!open)}
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {open && (
        <div className="mobile-menu">
          {links.map(([label, href]) => (
            <Link
              key={label}
              to={href}
              onClick={(e) => handleNavClick(e, href)}
            >
              <Play size={14} fill="currentColor" />
              {label}
            </Link>
          ))}
          <div className="mobile-menu-actions">
            <a
              className="header-app-pill ios-pill"
              href="/#download"
              onClick={(e) => handleNavClick(e, '/#download')}
            >
              <Smartphone size={16} />
              <span>iOS App</span>
            </a>
            <a
              className="header-app-pill android-pill"
              href="/#download"
              onClick={(e) => handleNavClick(e, '/#download')}
            >
              <Play size={15} fill="currentColor" />
              <span>Android App</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
}
