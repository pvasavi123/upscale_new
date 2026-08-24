import React from 'react';
import uIcon from '../assets/u_icon.png';
import wordmark from '../assets/wordmark.png';

const Logo = () => (
  <div className="flex items-center gap-[3px]">
    <img src={uIcon} alt="Upscale Icon" className="h-7 w-auto shrink-0" />
    <img src={wordmark} alt="Upscale Wordmark" className="h-4.5 w-auto shrink-0 invert" />
  </div>
);

export default function Footer({ onNavigate }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-navy border-t border-white/5 py-16 text-left relative overflow-hidden">
      {/* Background Dots */}
      <div className="absolute inset-0 grid-bg-pattern opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 mb-12">
          
          {/* Column 1: Logo & Brief Description */}
          <div className="flex flex-col gap-5">
            <button 
              onClick={() => onNavigate('Home')}
              className="flex items-center self-start hover:opacity-90 transition-opacity focus:outline-none cursor-pointer"
            >
              <Logo />
            </button>
            <p className="font-sans text-gray-400 text-xs sm:text-sm leading-relaxed max-w-xs">
              We build, you grow. <br />
              Empowering students. <br />
              Building businesses. <br />
              Creating a better future.
            </p>
          </div>

          {/* Column 2: Student Links */}
          <div className="flex flex-col gap-4">
            <h4 className="font-display font-extrabold text-sm tracking-wider text-white uppercase">
              For Students
            </h4>
            <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-400">
              <svg className="w-4 h-4 text-brand-orange shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <a href="mailto:upscale.careersupport@gmail.com" className="hover:text-brand-orange transition-colors">
                upscale.careersupport@gmail.com
              </a>
            </div>
            
            <h4 className="font-display font-extrabold text-sm tracking-wider text-white uppercase mt-4">
              Follow
            </h4>
            <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-400">
              <svg className="w-4 h-4 text-brand-orange shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
              <a href="https://instagram.com/upscale.services" target="_blank" rel="noopener noreferrer" className="hover:text-brand-orange transition-colors">
                upscale.services
              </a>
            </div>
            <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-400 mt-2">
              <svg className="w-4 h-4 text-brand-orange shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
              <a href="https://www.linkedin.com/company/upscale-it-services/posts/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-orange transition-colors">
                Upscale IT Services
              </a>
            </div>
          </div>

          {/* Column 3: Client Links */}
          <div className="flex flex-col gap-4">
            <h4 className="font-display font-extrabold text-sm tracking-wider text-white uppercase">
              For Clients / Freelancing
            </h4>
            <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-400">
              <svg className="w-4 h-4 text-brand-orange shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <a href="mailto:upscale.freelancer@gmail.com" className="hover:text-brand-orange transition-colors">
                upscale.freelancer@gmail.com
              </a>
            </div>
            
            <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-400">
              <svg className="w-4 h-4 text-brand-orange shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <a href="tel:+919063593070" className="hover:text-brand-orange transition-colors">
                +91 90635 93070
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-sans text-xs text-gray-500">
            © {currentYear} Upscale. All rights reserved.
          </span>
          <div className="flex gap-6">
            <button 
              onClick={() => onNavigate('Home')}
              className="font-sans text-xs text-gray-500 hover:text-white transition-colors cursor-pointer focus:outline-none"
            >
              Privacy Policy
            </button>
            <button 
              onClick={() => onNavigate('Home')}
              className="font-sans text-xs text-gray-500 hover:text-white transition-colors cursor-pointer focus:outline-none"
            >
              Terms & Conditions
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
