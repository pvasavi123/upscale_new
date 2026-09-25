import React from 'react';
import uIcon from '../assets/u_icon.png';
import wordmark from '../assets/wordmark.png';

const Logo = () => (
  <div className="flex items-center gap-[3px]">
    <img src={uIcon} alt="Upscale Icon" width="28" height="28" className="h-7 w-auto shrink-0" />
    <img src={wordmark} alt="Upscale Wordmark" width="90" height="18" className="h-4.5 w-auto shrink-0 invert" />
  </div>
);

export default function Footer({ onNavigate }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-navy border-t border-white/5 py-16 text-left relative overflow-hidden">
      {/* Background Dots */}
      <div className="absolute inset-0 grid-bg-pattern opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Column 1: Logo & Brief Description */}
          <div className="flex flex-col gap-4">
            <button 
              onClick={() => onNavigate('Home')}
              className="flex items-center self-start hover:opacity-90 transition-opacity focus:outline-none cursor-pointer"
            >
              <Logo />
            </button>
            <p className="font-sans text-gray-400 text-xs sm:text-sm leading-relaxed">
              Professional software development and student project mentoring. Hyderabad hub serving clients and graduates worldwide.
            </p>
            <div className="flex items-center gap-3 mt-2">
              <a
                href="https://instagram.com/upscale.services"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Upscale on Instagram"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-brand-orange text-gray-400 hover:text-white flex items-center justify-center transition-colors"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/upscale-it-services/posts/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Upscale on LinkedIn"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-brand-orange text-gray-400 hover:text-white flex items-center justify-center transition-colors"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Student Services */}
          <div className="flex flex-col gap-3">
            <h4 className="font-display font-extrabold text-xs tracking-wider text-white uppercase mb-1">
              Student Project Tracks
            </h4>
            <button
              onClick={() => onNavigate('FinalYearProject')}
              className="text-left font-sans text-xs sm:text-sm text-gray-400 hover:text-brand-orange transition-colors cursor-pointer focus:outline-none"
            >
              Final Year Project Guidance
            </button>
            <button
              onClick={() => onNavigate('ResumeAtsSupport')}
              className="text-left font-sans text-xs sm:text-sm text-gray-400 hover:text-brand-orange transition-colors cursor-pointer focus:outline-none"
            >
              Resume & ATS Optimization
            </button>
            <button
              onClick={() => onNavigate('Students')}
              className="text-left font-sans text-xs sm:text-sm text-gray-400 hover:text-brand-orange transition-colors cursor-pointer focus:outline-none"
            >
              All Student Pathways
            </button>
            <a
              href="mailto:upscale.careersupport@gmail.com"
              className="font-sans text-xs text-brand-orange hover:underline mt-2 inline-block"
            >
              upscale.careersupport@gmail.com
            </a>
          </div>

          {/* Column 3: Client Services */}
          <div className="flex flex-col gap-3">
            <h4 className="font-display font-extrabold text-xs tracking-wider text-white uppercase mb-1">
              Engineering Services
            </h4>
            <button
              onClick={() => onNavigate('WebDevelopment')}
              className="text-left font-sans text-xs sm:text-sm text-gray-400 hover:text-blue-400 transition-colors cursor-pointer focus:outline-none"
            >
              Web Development Services
            </button>
            <button
              onClick={() => onNavigate('MobileAppDevelopment')}
              className="text-left font-sans text-xs sm:text-sm text-gray-400 hover:text-blue-400 transition-colors cursor-pointer focus:outline-none"
            >
              Mobile App Development
            </button>
            <button
              onClick={() => onNavigate('SoftwareDevelopment')}
              className="text-left font-sans text-xs sm:text-sm text-gray-400 hover:text-blue-400 transition-colors cursor-pointer focus:outline-none"
            >
              Custom Software & MVPs
            </button>
            <button
              onClick={() => onNavigate('Clients')}
              className="text-left font-sans text-xs sm:text-sm text-gray-400 hover:text-blue-400 transition-colors cursor-pointer focus:outline-none"
            >
              All Client Solutions
            </button>
            <a
              href="mailto:upscale.freelancer@gmail.com"
              className="font-sans text-xs text-blue-400 hover:underline mt-2 inline-block"
            >
              upscale.freelancer@gmail.com
            </a>
          </div>

          {/* Column 4: Quick Contact */}
          <div className="flex flex-col gap-3">
            <h4 className="font-display font-extrabold text-xs tracking-wider text-white uppercase mb-1">
              Connect With Us
            </h4>
            <button
              onClick={() => onNavigate('About')}
              className="text-left font-sans text-xs sm:text-sm text-gray-400 hover:text-white transition-colors cursor-pointer focus:outline-none"
            >
              About Upscale Team
            </button>
            <button
              onClick={() => onNavigate('Services')}
              className="text-left font-sans text-xs sm:text-sm text-gray-400 hover:text-white transition-colors cursor-pointer focus:outline-none"
            >
              Services Overview
            </button>
            <button
              onClick={() => onNavigate('Contact')}
              className="text-left font-sans text-xs sm:text-sm text-gray-400 hover:text-white transition-colors cursor-pointer focus:outline-none"
            >
              Contact & Scoping Brief
            </button>
            <a
              href="tel:+919063593070"
              className="font-sans text-xs sm:text-sm font-semibold text-white hover:text-brand-orange transition-colors mt-2"
            >
              📞 +91 90635 93070
            </a>
            <span className="font-sans text-[11px] text-gray-500">
              Hyderabad, Telangana, India (Remote-First)
            </span>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-sans text-xs text-gray-500">
            © {currentYear} Upscale IT Services. All rights reserved.
          </span>
          <div className="flex gap-6">
            <button 
              onClick={() => onNavigate('About')}
              className="font-sans text-xs text-gray-500 hover:text-white transition-colors cursor-pointer focus:outline-none"
            >
              About Us
            </button>
            <button 
              onClick={() => onNavigate('Contact')}
              className="font-sans text-xs text-gray-500 hover:text-white transition-colors cursor-pointer focus:outline-none"
            >
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
