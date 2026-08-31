import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import uIcon from '../assets/u_icon.png';
import wordmark from '../assets/wordmark.png';

const Logo = () => (
  <div className="flex items-center gap-[3px]">
    <img src={uIcon} alt="Upscale Icon" className="h-8 w-auto shrink-0" />
    <img src={wordmark} alt="Upscale Wordmark" className="h-5 w-auto shrink-0 invert" />
  </div>
);

export default function Navbar({ currentPage, onNavigate }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent the page behind the mobile drawer from scrolling
  useEffect(() => {
    const original = document.body.style.overflow;
    document.body.style.overflow = isOpen ? 'hidden' : original || '';
    return () => {
      document.body.style.overflow = original || '';
    };
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', page: 'Home' },
    { name: 'For Students', page: 'Students' },
    { name: 'For Clients', page: 'Clients' },
    { name: 'Services', page: 'Services' },
    { name: 'About Us', page: 'About' },
    { name: 'Contact', page: 'Contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 px-6 lg:px-16 transition-all duration-300 ${
        isScrolled 
          ? 'bg-brand-navy-dark/90 backdrop-blur-md border-b border-white/5 py-4 shadow-lg' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <button 
          onClick={() => {
            onNavigate('Home');
            setIsOpen(false);
          }} 
          className="flex items-center hover:opacity-90 transition-opacity focus:outline-none cursor-pointer"
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
                currentPage === link.page 
                  ? 'text-white' 
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              {link.name}
              {currentPage === link.page && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-brand-orange rounded-full animate-fade-in" />
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
            <svg 
              className="w-4 h-4" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-white hover:text-brand-orange p-1 transition-colors focus:outline-none cursor-pointer"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-brand-navy/95 backdrop-blur-md flex flex-col justify-center px-8 py-10 overflow-y-auto overscroll-contain transition-all duration-300">
          <div className="absolute top-6 right-6">
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-brand-orange p-1 transition-colors focus:outline-none cursor-pointer"
              aria-label="Close menu"
            >
              <X className="w-7 h-7" />
            </button>
          </div>

          <div className="flex flex-col gap-6 text-center">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => {
                  onNavigate(link.page);
                  setIsOpen(false);
                }}
                className={`font-display text-2xl font-semibold transition-colors cursor-pointer focus:outline-none ${
                  currentPage === link.page ? 'text-brand-orange' : 'text-white hover:text-brand-orange'
                }`}
              >
                {link.name}
              </button>
            ))}
            
            <button
              onClick={() => {
                onNavigate('Contact');
                setIsOpen(false);
              }}
              className="mt-6 inline-flex items-center justify-center gap-2 bg-brand-orange hover:bg-brand-orange-hover text-white font-sans text-lg font-semibold px-8 py-4 rounded-full transition-all duration-300 cursor-pointer focus:outline-none"
            >
              Let's Connect
              <svg 
                className="w-5 h-5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
