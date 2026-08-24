import React from 'react';

const GraphIcon = () => (
  <svg className="w-16 h-16 shrink-0" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Steps background bars */}
    <rect x="10" y="55" width="8" height="15" rx="2" fill="#1E2E4E" />
    <rect x="24" y="43" width="8" height="27" rx="2" fill="#1E2E4E" />
    <rect x="38" y="31" width="8" height="39" rx="2" fill="#1E2E4E" />
    <rect x="52" y="19" width="8" height="51" rx="2" fill="#1E2E4E" />
    
    {/* Rising Orange Arrow */}
    <path 
      d="M12 57 L26 43 L40 31 L54 18" 
      stroke="#FF5A1F" 
      strokeWidth="5" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
    />
    <path 
      d="M44 18 H54 V28" 
      stroke="#FF5A1F" 
      strokeWidth="5" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
    />
  </svg>
);

export default function CtaBanner({ onNavigate }) {
  return (
    <section className="bg-white pb-20 lg:pb-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        
        {/* Banner Card */}
        <div className="bg-brand-navy rounded-[32px] relative overflow-hidden p-8 md:p-14 lg:p-16 border border-white/5 shadow-2xl">
          {/* Grid Background Pattern */}
          <div className="absolute inset-0 grid-bg-pattern opacity-30 pointer-events-none" />
          
          {/* Subtle Glows */}
          <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-brand-orange/10 rounded-full blur-[80px]" />
          <div className="absolute -top-10 -right-10 w-48 h-48 bg-blue-500/10 rounded-full blur-[80px]" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Rising Steps Graphic & Subheading */}
            <div className="lg:col-span-6 flex items-center gap-6 text-left">
              <GraphIcon />
              <div>
                <span className="block font-display text-sm sm:text-base font-semibold text-brand-orange">
                  Small steps today,
                </span>
                <span className="block font-display text-2xl sm:text-3.5xl font-extrabold text-white leading-tight mt-1">
                  big future tomorrow.
                </span>
              </div>
            </div>

            {/* Right Column: CTA Content & Button */}
            <div className="lg:col-span-6 text-left lg:border-l lg:border-white/10 lg:pl-12 flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="max-w-md">
                <h3 className="font-display font-bold text-lg sm:text-xl text-white mb-2">
                  Have an Idea? Let's Build It Together!
                </h3>
                <p className="font-sans text-gray-400 text-sm leading-relaxed">
                  Tell us what you're trying to build — we'll help you turn it into a working product.
                </p>
              </div>
              <button
                onClick={() => onNavigate('Contact')}
                className="inline-flex items-center justify-center gap-2 bg-brand-orange hover:bg-brand-orange-hover text-white font-sans text-sm font-semibold px-6 py-4 rounded-full shadow-lg shadow-brand-orange/20 transition-all duration-300 hover:scale-105 shrink-0 self-start md:self-center cursor-pointer focus:outline-none"
              >
                Get in Touch
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

          </div>

        </div>

      </div>
    </section>
  );
}
