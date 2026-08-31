import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import uIcon from '../assets/u_icon.png';
import wordmark from '../assets/wordmark.png';

const Logo = () => (
  <div className="flex items-center gap-[3px]">
    <img src={uIcon} alt="Upscale Icon" className="h-8 w-auto shrink-0" />
    <img src={wordmark} alt="Upscale Wordmark" className="h-5 w-auto shrink-0 invert" />
  </div>
);

const navLinks = [
  { name: 'Home', page: 'Home' },
  { name: 'For Students', page: 'Students' },
  { name: 'For Clients', page: 'Clients' },
  { name: 'Services', page: 'Services' },
  { name: 'About Us', page: 'About' },
  { name: 'Contact', page: 'Contact' },
];

export default function Navbar({ currentPage, onNavigate }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock the page behind the drawer, and close it on Escape / on reaching desktop
  useEffect(() => {
    if (!isOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    // Keeps the floating chat bubble from sitting on top of the menu
    document.body.classList.add('upscale-menu-open');

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsOpen(false);
    };

    document.addEventListener('keydown', handleKeyDown);
    window.addEventListener('resize', handleResize);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.body.classList.remove('upscale-menu-open');
      document.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('resize', handleResize);
    };
  }, [isOpen]);

  const go = (page) => {
    onNavigate(page);
    setIsOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 px-5 sm:px-6 lg:px-16 transition-all duration-300 ${
          isScrolled
            ? 'bg-brand-navy-dark/90 backdrop-blur-md border-b border-white/5 py-3 sm:py-4 shadow-lg'
            : 'bg-transparent py-4 sm:py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          {/* Logo */}
          <button
            onClick={() => go('Home')}
            className="flex items-center hover:opacity-90 transition-opacity focus:outline-none cursor-pointer"
            aria-label="Upscale — go to home"
          >
            <Logo />
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => onNavigate(link.page)}
                className={`relative font-sans text-sm font-medium tracking-wide transition-colors py-1 cursor-pointer focus:outline-none ${
                  currentPage === link.page ? 'text-white' : 'text-gray-300 hover:text-white'
                }`}
              >
                {link.name}
                {currentPage === link.page && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-brand-orange rounded-full" />
                )}
              </button>
            ))}
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden lg:block">
            <button
              onClick={() => onNavigate('Contact')}
              className="inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-orange-hover text-white font-sans text-sm font-semibold px-6 py-3 rounded-full shadow-lg shadow-brand-orange/20 transition-all duration-300 hover:scale-105 cursor-pointer focus:outline-none"
            >
              Let's Connect
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setIsOpen(true)}
            className="lg:hidden -mr-2 p-2 text-white hover:text-brand-orange transition-colors focus:outline-none cursor-pointer"
            aria-label="Open menu"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/*
        Mobile drawer — deliberately a sibling of <nav>, not a child.
        The scrolled navbar uses backdrop-blur, which makes it a containing
        block for fixed-position descendants; nesting the drawer inside it
        would trap the overlay inside the header strip.
      */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        className={`lg:hidden fixed inset-0 z-[10000] transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <button
          type="button"
          tabIndex={-1}
          aria-hidden="true"
          onClick={() => setIsOpen(false)}
          className="absolute inset-0 w-full h-full bg-black/60 cursor-default focus:outline-none"
        />

        {/* Panel */}
        <div
          className={`absolute top-0 right-0 h-full w-[86%] max-w-sm bg-brand-navy-dark border-l border-white/10 shadow-2xl flex flex-col transition-transform duration-300 ease-out ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Panel header */}
          <div className="flex items-center justify-between gap-4 px-5 py-4 border-b border-white/10 shrink-0">
            <Logo />
            <button
              onClick={() => setIsOpen(false)}
              className="-mr-2 p-2 text-gray-300 hover:text-brand-orange transition-colors focus:outline-none cursor-pointer"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Links */}
          <nav className="flex-1 overflow-y-auto overscroll-contain py-2">
            {navLinks.map((link) => {
              const active = currentPage === link.page;
              return (
                <button
                  key={link.name}
                  onClick={() => go(link.page)}
                  aria-current={active ? 'page' : undefined}
                  className={`relative w-full text-left font-display font-semibold text-base px-5 py-4 border-b border-white/5 transition-colors focus:outline-none cursor-pointer ${
                    active
                      ? 'text-brand-orange bg-white/[0.04]'
                      : 'text-gray-200 hover:text-white hover:bg-white/[0.04]'
                  }`}
                >
                  {active && (
                    <span className="absolute left-0 top-1/2 -translate-y-1/2 h-6 w-[3px] bg-brand-orange rounded-r-full" />
                  )}
                  {link.name}
                </button>
              );
            })}
          </nav>

          {/* Footer CTA */}
          <div className="px-5 py-5 border-t border-white/10 shrink-0">
            <button
              onClick={() => go('Contact')}
              className="w-full inline-flex items-center justify-center gap-2 bg-brand-orange hover:bg-brand-orange-hover text-white font-sans text-sm font-semibold px-6 py-3.5 rounded-full shadow-lg shadow-brand-orange/20 transition-colors cursor-pointer focus:outline-none"
            >
              Let's Connect
              <ArrowRight className="w-4 h-4" />
            </button>
            <p className="mt-3 text-center font-sans text-[11px] text-gray-500">
              We build. You grow.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
