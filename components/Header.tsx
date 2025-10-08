import React, { useState, useEffect } from 'react';
import { LogoIcon } from './Icons';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { href: '/menu', label: 'Menu' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#contact', label: 'Contact' },
  ];

  const location = useLocation();

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    // If we're on the home page, smooth-scroll to anchors; otherwise navigate to home and then scroll
    if (location.pathname === '/' || location.pathname === (import.meta as any).env.BASE_URL) {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Ensure we navigate within the GitHub Pages project base, not the domain root
      const base = (import.meta as any).env.BASE_URL || '/';
      window.location.href = `${base}${href}`; // e.g. /teiraculinaria/#contact
    }
    setIsOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/80 shadow-md backdrop-blur-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
    <Link to="/" className="flex items-center space-x-2 text-xl font-medium text-neutral-100">
      <LogoIcon className="h-8 w-auto text-amber-400" />
      <span className="font-serif">Deniz Sezer</span>
    </Link>

        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            (link.href.startsWith('#')) ? (
              <a key={link.href} href={link.href} onClick={(e) => scrollToSection(e, link.href)} className="text-neutral-300 hover:text-amber-400 transition-colors duration-300">
                {link.label}
              </a>
            ) : (
              <Link key={link.href} to={link.href} className="text-neutral-300 hover:text-amber-400 transition-colors duration-300">
                {link.label}
              </Link>
            )
          ))}
          <a href="#contact" onClick={(e) => scrollToSection(e, '#contact')} className="bg-amber-600 text-white px-4 py-2 rounded-full hover:bg-amber-500 transition-colors duration-300 text-sm font-semibold">
            Book an Experience
          </a>
        </nav>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-neutral-200 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-slate-900/95 shadow-xl">
          <nav className="flex flex-col items-center space-y-4 py-4">
            {navLinks.map((link) => (
              (link.href.startsWith('#')) ? (
                <a key={link.href} href={link.href} onClick={(e) => scrollToSection(e, link.href)} className="text-neutral-300 hover:text-amber-400 transition-colors duration-300">
                  {link.label}
                </a>
              ) : (
                <Link key={link.href} to={link.href} onClick={() => setIsOpen(false)} className="text-neutral-300 hover:text-amber-400 transition-colors duration-300">
                  {link.label}
                </Link>
              )
            ))}
            <a href="#contact" onClick={(e) => scrollToSection(e, '#contact')} className="bg-amber-600 text-white px-6 py-2 rounded-full hover:bg-amber-500 transition-colors duration-300 font-semibold">
              Book an Experience
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;