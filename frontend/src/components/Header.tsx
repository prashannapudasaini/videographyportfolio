import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import clsx from 'clsx';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    let lastScrollY = window.scrollY;
    
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      setIsScrolled(currentScrollY > 50);
      
      // Hide on scroll down, show on scroll up
      if (currentScrollY > lastScrollY && currentScrollY > 150) {
        setIsHidden(true);
      } else if (currentScrollY < lastScrollY) {
        setIsHidden(false);
      }
      
      lastScrollY = currentScrollY;
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { name: 'Work', path: '/portfolio' },
    { name: 'Reels', path: '/reels' },
    { name: 'About', path: '/about' },
  ];

  return (
    <header className={clsx(
      'fixed top-0 w-full z-50 transition-all duration-500 ease-in-out px-6 md:px-12',
      isScrolled ? 'bg-white/50 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.03)] border-b border-white/60 py-4' : 'bg-transparent py-6',
      isHidden ? '-translate-y-full' : 'translate-y-0'
    )}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" onClick={handleNavClick} className="text-2xl md:text-3xl font-serif font-medium tracking-tight text-brand-primary-text z-50 relative group">
          <span className="group-hover:text-brand-accent transition-colors">Sunil</span> Sharma.
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              onClick={handleNavClick}
              className={clsx(
                'text-sm tracking-wide uppercase transition-colors',
                location.pathname === link.path ? 'text-brand-accent font-semibold' : 'text-brand-secondary-text hover:text-brand-primary-text'
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/contact" className="bg-brand-primary-text text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-brand-accent transition-colors shadow-[0_5px_15px_rgba(0,0,0,0.1)] hover:shadow-[0_5px_20px_rgba(0,0,0,0.15)]">
            Book Project
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-brand-primary-text z-50 relative"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        <div className={clsx(
          'fixed inset-0 bg-brand-primary-bg/95 backdrop-blur-2xl flex flex-col items-center justify-center gap-8 transition-transform duration-500 ease-in-out md:hidden',
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}>
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              onClick={handleNavClick}
              className={clsx(
                'text-3xl font-serif',
                location.pathname === link.path ? 'text-brand-accent' : 'text-brand-primary-text'
              )}
            >
              {link.name}
            </Link>
          ))}
          <a 
            href="mailto:contact@sunilsharma.com" 
            onClick={() => setMobileMenuOpen(false)}
            className="text-2xl font-serif text-white bg-brand-primary-text px-8 py-3 rounded-full mt-6 hover:bg-brand-accent transition-colors shadow-xl"
          >
            Book a Project
          </a>
        </div>
      </div>
    </header>
  );
}
